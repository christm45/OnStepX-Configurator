// ESP32 flasher — uses esptool-js over the Web Serial API.
// Loads esptool-js from a pinned version on esm.sh so the Pages site stays
// fully static.

const ESPTOOL_MODULE = 'https://esm.sh/esptool-js@0.4.5';

export function supported() {
  return 'serial' in navigator;
}

/**
 * Flash an ESP32 with firmware.bin + bootloader.bin + partitions.bin (and
 * optionally boot_app0.bin).
 *
 * files: {[filename]: Uint8Array}  (as returned by fetchFirmware)
 * log:   function(string)          progress/log callback
 */
export async function flash(files, log = console.log) {
  if (!supported()) throw new Error('Web Serial not supported — use Chrome, Edge, or Opera');

  // Prefer the single merged image (produced by merge_bin.py) — one file, one
  // flash address, less to go wrong. Fall back to the classic 3-file layout
  // if the build didn't produce a merged file.
  const useMerged = !!files['merged-firmware.bin'];
  if (!useMerged) {
    const required = ['firmware.bin', 'bootloader.bin', 'partitions.bin'];
    for (const f of required) {
      if (!files[f]) throw new Error(`missing ${f} in firmware bundle`);
    }
  }

  const { ESPLoader, Transport } = await import(ESPTOOL_MODULE);

  const port = await navigator.serial.requestPort({
    // Common ESP32 USB-UART bridges; empty filter list also works on most browsers.
    filters: [
      { usbVendorId: 0x10c4 }, // Silicon Labs CP210x
      { usbVendorId: 0x1a86 }, // QinHeng CH340/CH341
      { usbVendorId: 0x0403 }, // FTDI
      { usbVendorId: 0x303a }, // Espressif native USB
    ],
  });
  const transport = new Transport(port, true);

  const flashOptions = {
    transport,
    baudrate: 921600,
    romBaudrate: 115200,
    terminal: {
      clean() {},
      writeLine: (d) => log(d),
      write: (d) => log(d),
    },
  };

  const esploader = new ESPLoader(flashOptions);
  log('Connecting to ESP32…');
  const chip = await esploader.main();
  log(`Detected: ${chip}`);

  const fileArray = useMerged
    ? [{ data: binaryString(files['merged-firmware.bin']), address: 0x0 }]
    : [
        { data: binaryString(files['bootloader.bin']), address: 0x1000 },
        { data: binaryString(files['partitions.bin']), address: 0x8000 },
        ...(files['boot_app0.bin'] ? [{ data: binaryString(files['boot_app0.bin']), address: 0xe000 }] : []),
        { data: binaryString(files['firmware.bin']), address: 0x10000 },
      ];

  log(`Writing ${fileArray.length} files…`);
  await esploader.writeFlash({
    fileArray,
    flashSize: 'keep',
    flashMode: 'keep',
    flashFreq: 'keep',
    eraseAll: false,
    compress: true,
    reportProgress: (fileIndex, written, total) => {
      const pct = ((written / total) * 100).toFixed(1);
      log(`  [${fileIndex + 1}/${fileArray.length}] ${pct}%`);
    },
  });

  log('Resetting into application…');
  await esploader.after();
  await transport.disconnect();
  log('Done. ESP32 is now running your firmware.');
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
