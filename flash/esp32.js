// ESP32 / ESP8266 flasher — uses esptool-js over the Web Serial API.
// Loads esptool-js from a pinned version on a public CDN so the Pages site
// stays fully static. esptool-js auto-detects the chip, so the same flash()
// function handles both ESP32 and ESP8266 — only the file layout differs.

// Several CDNs, tried in order. jsDelivr's /+esm build is first because it is
// a single self-contained bundle served from one host; esm.sh ships a shim
// that immediately imports three more URLs, so any network that blocks or
// rate-limits it fails with an unhelpful "Failed to fetch dynamically
// imported module". Networks/regions that block one CDN rarely block them all.
const ESPTOOL_MODULES = [
  'https://cdn.jsdelivr.net/npm/esptool-js@0.4.5/+esm',
  'https://esm.sh/esptool-js@0.4.5',
  'https://unpkg.com/esptool-js@0.4.5?module',
];

// Cached so a retry after a failed flash doesn't re-download the library.
let esptoolPromise = null;

function loadEsptool(log) {
  if (esptoolPromise) return esptoolPromise;
  esptoolPromise = (async () => {
    const errors = [];
    for (const url of ESPTOOL_MODULES) {
      try {
        const mod = await import(url);
        if (!mod.ESPLoader || !mod.Transport) {
          throw new Error('module loaded but ESPLoader/Transport missing');
        }
        return mod;
      } catch (e) {
        errors.push(`${new URL(url).host}: ${e.message || e}`);
        log(`could not load the flashing library from ${new URL(url).host}, trying another source…`);
      }
    }
    throw new Error(
      'Could not load the esptool-js flashing library from any CDN. This is ' +
      'usually a network/firewall or ad-blocker issue — check that ' +
      'cdn.jsdelivr.net, esm.sh or unpkg.com is reachable, then reload the ' +
      'page and try again. (' + errors.join('; ') + ')'
    );
  })();
  // Don't cache a failure — the next attempt should retry the CDNs.
  esptoolPromise.catch(() => { esptoolPromise = null; });
  return esptoolPromise;
}

export function supported() {
  return 'serial' in navigator;
}

/**
 * Flash an ESP32 or ESP8266 from a firmware bundle.
 *
 * The bundle shape determines the flash layout:
 *   - merged-firmware.bin at 0x0                         (ESP32, cleanest)
 *   - bootloader.bin + partitions.bin + boot_app0.bin + firmware.bin  (ESP32, classic)
 *   - firmware.bin at 0x0 (no bootloader.bin in bundle)  (ESP8266 — single image)
 *
 * files: {[filename]: Uint8Array}  (as returned by fetchFirmware)
 * log:   function(string)          progress/log callback
 * opts:  {eraseAll?: boolean}      eraseAll wipes the WHOLE chip (incl. the
 *                                  NVS/EEPROM region) before writing — the
 *                                  equivalent of Arduino IDE's "Erase All Flash
 *                                  Contents". Use it to clear a stale/corrupt
 *                                  NV that OnStepX can't reformat (the
 *                                  persistent "Init NV/EEPROM error"). Default
 *                                  false so normal re-flashes keep saved
 *                                  settings/PEC data.
 */
export async function flash(files, log = console.log, opts = {}) {
  if (!supported()) throw new Error('Web Serial not supported — use Chrome, Edge, or Opera');

  const useMerged = !!files['merged-firmware.bin'];
  const useSingle = !useMerged && !files['bootloader.bin'] && !!files['firmware.bin'];
  if (!useMerged && !useSingle) {
    const required = ['firmware.bin', 'bootloader.bin', 'partitions.bin'];
    for (const f of required) {
      if (!files[f]) throw new Error(`missing ${f} in firmware bundle`);
    }
  }

  const { ESPLoader, Transport } = await loadEsptool(log);

  const port = await navigator.serial.requestPort({
    // Common USB-UART bridges used on ESP32 *and* ESP8266 dev boards
    // (NodeMCU, Wemos D1, ESP-01, generic modules).
    filters: [
      { usbVendorId: 0x10c4 }, // Silicon Labs CP210x / CP2102 (NodeMCU, dev kits)
      { usbVendorId: 0x1a86 }, // QinHeng CH340/CH341 (cheap modules)
      { usbVendorId: 0x0403 }, // FTDI FT232 (Wemos, some ESP-01 adapters)
      { usbVendorId: 0x303a }, // Espressif native USB (ESP32-S2/S3/C3)
    ],
  });
  const transport = new Transport(port, true);

  // 460800 is a safe-for-both baud: reliable on NodeMCU/Wemos/ESP32 DevKit,
  // and their USB-serial chips generally cope. 921600 works for most ESP32
  // but has been reported to fail on cheaper ESP8266 modules.
  const flashOptions = {
    transport,
    baudrate: 460800,
    romBaudrate: 115200,
    terminal: {
      clean() {},
      writeLine: (d) => log(d),
      write: (d) => log(d),
    },
  };

  const esploader = new ESPLoader(flashOptions);
  log('Connecting…');
  const chip = await esploader.main();
  log(`Detected: ${chip}`);
  // Refuse a chip/bundle mismatch before touching flash: the image would never
  // boot, and on boards that share one USB port between an ESP32 and an ESP8266
  // (Terrans V5 Pro) it means the selector switch is on the wrong chip and we'd
  // be wiping the firmware on the other one.
  const isEsp8266 = /ESP8266/i.test(String(chip));
  const mismatch =
    isEsp8266 && !useSingle ? 'ESP8266 detected, but this firmware was built for an ESP32' :
    !isEsp8266 && useSingle ? `${chip} detected, but this firmware was built for an ESP8266` :
    null;
  if (mismatch) {
    await transport.disconnect();
    throw new Error(`${mismatch}. Nothing was written. If your board has a USB/chip selector switch, ` +
      'move it to the chip this firmware is for and try again.');
  }

  const fileArray = useMerged
    ? [{ data: binaryString(files['merged-firmware.bin']), address: 0x0 }]
    : useSingle
    ? [{ data: binaryString(files['firmware.bin']), address: 0x0 }]
    : [
        { data: binaryString(files['bootloader.bin']), address: 0x1000 },
        { data: binaryString(files['partitions.bin']), address: 0x8000 },
        ...(files['boot_app0.bin'] ? [{ data: binaryString(files['boot_app0.bin']), address: 0xe000 }] : []),
        { data: binaryString(files['firmware.bin']), address: 0x10000 },
      ];

  const eraseAll = opts.eraseAll === true;
  if (eraseAll) log('Erasing entire flash first (this wipes saved NV/EEPROM settings and takes ~10–30 s)…');
  log(`Writing ${fileArray.length} file${fileArray.length === 1 ? '' : 's'}…`);
  await esploader.writeFlash({
    fileArray,
    flashSize: 'keep',
    flashMode: 'keep',
    flashFreq: 'keep',
    eraseAll,
    compress: true,
    reportProgress: (fileIndex, written, total) => {
      const pct = ((written / total) * 100).toFixed(1);
      log(`  [${fileIndex + 1}/${fileArray.length}] ${pct}%`);
    },
  });

  // The write is complete at this point, so a reset hiccup must not read as a
  // failed flash. esptool-js 0.4.x only has hardReset(); after() is newer.
  log('Resetting into application…');
  try {
    if (typeof esploader.after === 'function') await esploader.after();
    else await esploader.hardReset();
  } catch (e) {
    log(`⚠ Firmware written, but the automatic reset failed (${e.message || e}) — press RESET or power-cycle the board.`);
  }
  await transport.disconnect();
  log(`Done. ${chip} is now running your firmware.`);
}

function binaryString(u8) {
  // esptool-js expects each byte as a char in a "binary string" — awkward but
  // that's its API. Convert in chunks to avoid stack limits on large firmware.
  let s = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < u8.length; i += CHUNK) {
    s += String.fromCharCode.apply(null, u8.subarray(i, Math.min(i + CHUNK, u8.length)));
  }
  return s;
}
