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

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function pump() {
    const decoder = new TextDecoder();
    let buf = '';
    let idle = null;
    let lastWasCR = false; // a \r\n pair can be split across two reads
    const flushPartial = () => {
      if (buf) { onLine(buf); buf = ''; }
    };
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
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
      if (!closing) onError(`Serial read stopped: ${e.message || e}`);
    } finally {
      clearTimeout(idle);
      flushPartial();
    }
  }

  async function teardown() {
    const p = port;
    port = null;
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
    reader = port.readable.getReader();
    readLoop = pump().then(() => { if (!closing && port) teardown(); });
    port.addEventListener('disconnect', () => { if (port) { closing = true; teardown(); } });
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
