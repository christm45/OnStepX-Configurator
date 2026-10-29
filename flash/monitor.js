// Serial monitor over the Web Serial API — shows what a board prints on its USB
// serial port (OnStepX DEBUG / VERBOSE output). Chrome and Edge on desktop only.
//
// createMonitor({ onLine, onStatus, onError }) returns
//   { connect(baud), disconnect(), reset(), isOpen() }
// onLine(text)   — one complete line (a partial line is flushed after a short idle)
// onStatus(open) — true after the port opens, false after it closes (also on unplug)
// onError(msg)   — a human-readable problem; the monitor stays usable afterwards

const USB_FILTERS = [
  { usbVendorId: 0x10c4 }, // Silicon Labs CP210x
  { usbVendorId: 0x1a86 }, // QinHeng CH340/CH341 (FYSETC E4)
  { usbVendorId: 0x0403 }, // FTDI
  { usbVendorId: 0x303a }, // Espressif native USB
];

const IDLE_FLUSH_MS = 300;

export function monitorSupported() {
  return typeof navigator !== 'undefined' && 'serial' in navigator;
}

export function createMonitor({ onLine, onStatus, onError }) {
  let port = null;
  let reader = null;
  let readLoop = null;
  let closing = false;
  let onDisconnect = null; // this connection's 'disconnect' listener
  let fatalMsg = null;     // reported AFTER teardown, so onStatus(false) can't wipe it

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Per the Web Serial spec these are recoverable: the current readable stream
  // errors, but port.readable is replaced by a fresh stream and the port stays
  // open. Anything else (NetworkError = device lost, etc.) is fatal.
  const NON_FATAL_READ_ERRORS = new Set(['FramingError', 'BreakError', 'BufferOverrunError', 'ParityError']);

  async function pump() {
    const decoder = new TextDecoder();
    let buf = '';
    let idle = null;
    let lastWasCR = false; // a \r\n pair can be split across two reads
    const flushPartial = () => {
      if (buf) { onLine(buf); buf = ''; }
    };
    try {
      // One pass per readable stream; a non-fatal error swaps in a new one.
      let errored = null; // the stream that just failed with a non-fatal error
      while (port && port.readable && !closing) {
        // The spec swaps in a fresh stream after a non-fatal error. If it
        // didn't, re-reading the errored one would spin forever.
        if (port.readable === errored) {
          fatalMsg = 'Serial read stopped: the port stopped delivering data after a line error.';
          break;
        }
        const stream = port.readable;
        reader = stream.getReader();
        let stop = false;
        try {
          for (;;) {
            const { value, done } = await reader.read();
            if (done) { stop = true; break; } // cancelled by our own disconnect
            if (!value) continue;
            clearTimeout(idle);
            buf += decoder.decode(value, { stream: true });
            if (lastWasCR && buf.startsWith('\n')) buf = buf.slice(1);
            lastWasCR = false;
            let nl;
            while ((nl = buf.search(/\r\n|\n|\r/)) !== -1) {
              onLine(buf.slice(0, nl));
              const term = buf.startsWith('\r\n', nl) ? 2 : 1;
              lastWasCR = term === 1 && buf[nl] === '\r' && nl + 1 === buf.length;
              buf = buf.slice(nl + term);
            }
            if (buf) idle = setTimeout(flushPartial, IDLE_FLUSH_MS);
          }
        } catch (e) {
          // A cancelled reader (our own disconnect) is not an error; a lost device is.
          if (closing) {
            stop = true;
          } else if (e && NON_FATAL_READ_ERRORS.has(e.name)) {
            // Usually a baud-rate mismatch or line noise: note it and keep reading.
            flushPartial();
            errored = stream;
            onLine(`WRN: serial ${e.name} (${e.message || 'line error'}) — data may be garbled; check the baud rate. Continuing…`);
          } else {
            fatalMsg = `Serial read stopped: ${(e && e.message) || e}`;
            stop = true;
          }
        } finally {
          try { reader.releaseLock(); } catch (_) { /* already released */ }
        }
        if (stop) break;
      }
    } finally {
      clearTimeout(idle);
      flushPartial();
    }
  }

  async function teardown() {
    const p = port;
    port = null;
    if (p && onDisconnect) p.removeEventListener('disconnect', onDisconnect);
    onDisconnect = null;
    try { if (reader) await reader.cancel(); } catch (_) { /* already gone */ }
    try { if (reader) reader.releaseLock(); } catch (_) { /* already released */ }
    reader = null;
    try { if (readLoop) await readLoop; } catch (_) { /* logged in pump */ }
    readLoop = null;
    try { if (p) await p.close(); } catch (_) { /* unplugged */ }
    onStatus(false);
  }

  async function connect(baud) {
    if (!monitorSupported()) {
      onError('Web Serial is not available in this browser. Use Chrome or Edge on a desktop computer.');
      return false;
    }
    if (port) return true;
    let chosen;
    try {
      chosen = await navigator.serial.requestPort({ filters: USB_FILTERS });
    } catch (e) {
      // NotFoundError = the user closed the chooser; not worth an error line.
      if (e && e.name !== 'NotFoundError') onError(`Could not select a port: ${e.message || e}`);
      return false;
    }
    try {
      await chosen.open({ baudRate: Number(baud) || 9600 });
    } catch (e) {
      onError(
        `Could not open the port (${e.message || e}). Close any other program using it ` +
        '(NINA, ASCOM, Arduino Serial Monitor, PuTTY) and try again.'
      );
      return false;
    }
    port = chosen;
    closing = false;
    fatalMsg = null;
    // Report a fatal read error only once the port is fully closed: teardown()
    // ends with onStatus(false), which clears the status line.
    // (teardown() awaits readLoop, so it must be the bare pump() promise —
    // awaiting teardown inside a .then() chained onto readLoop would deadlock.)
    readLoop = pump();
    readLoop.catch(() => {}).then(async () => {
      if (!closing && port === chosen) {
        await teardown();
        if (fatalMsg) onError(fatalMsg);
      }
    });
    // Bound to THIS connection: compare against its own port (an unplug of a
    // port used by an earlier session must not tear down the current one) and
    // removed again in teardown().
    onDisconnect = (ev) => {
      if (port !== chosen || (ev && ev.target && ev.target !== chosen)) return;
      closing = true;
      teardown().then(() => onError('The board was disconnected (USB unplugged or reset).'));
    };
    port.addEventListener('disconnect', onDisconnect);
    onStatus(true);
    return true;
  }

  async function disconnect() {
    if (!port) return;
    closing = true;
    await teardown();
  }

  // Pulse EN through RTS with GPIO0 held high (DTR low): the standard auto-reset
  // wiring of ESP32 dev boards. Best effort — boards wired differently ignore it.
  async function reset() {
    if (!port) return;
    try {
      await port.setSignals({ dataTerminalReady: false, requestToSend: true });
      await sleep(120);
      await port.setSignals({ dataTerminalReady: false, requestToSend: false });
    } catch (e) {
      onError(`Reset failed (${e.message || e}). Press the board's RESET button instead.`);
    }
  }

  return { connect, disconnect, reset, isOpen: () => !!port };
}
