// ESP32 / ESP8266 flasher — uses esptool-js over the Web Serial API.
// Loads esptool-js from a pinned version on esm.sh so the Pages site stays
// fully static. esptool-js auto-detects the chip, so the same flash()
// function handles both ESP32 and ESP8266 — only the file layout differs.

const ESPTOOL_MODULE = 'https://esm.sh/esptool-js@0.4.5';

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
 */
export async function flash(files, log = console.log) {
  if (!supported()) throw new Error('Web Serial not supported — use Chrome, Edge, or Opera');

  const useMerged = !!files['merged-firmware.bin'];
  const useSingle = !useMerged && !files['bootloader.bin'] && !!files['firmware.bin'];
  if (!useMerged && !useSingle) {
    const required = ['firmware.bin', 'bootloader.bin', 'partitions.bin'];
    for (const f of required) {
      if (!files[f]) throw new Error(`missing ${f} in firmware bundle`);
    }
  }

  const { ESPLoader, Transport } = await import(ESPTOOL_MODULE);

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
  const isEsp8266 = /ESP8266/i.test(String(chip));
  if (isEsp8266 && !useSingle) {
    log('⚠ ESP8266 detected but firmware bundle looks like ESP32 — flashing anyway, but this may not boot.');
  }
  if (!isEsp8266 && useSingle && !useMerged) {
    log('⚠ ESP32 detected but firmware bundle is single-image (ESP8266 style) — flashing at 0x0 may not boot.');
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

  log(`Writing ${fileArray.length} file${fileArray.length === 1 ? '' : 's'}…`);
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
