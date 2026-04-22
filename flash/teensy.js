// Teensy 4.0 / 4.1 (and MaxPCB4) flasher.
//
// Status: browser flashing of Teensy 4.x via WebHID is technically possible
// using the HalfKay bootloader protocol, but the protocol is only documented
// in teensy_loader_cli's source and has enough per-chip quirks that a
// half-working version would be worse than the well-established desktop tool.
// For now this module offers two paths:
//
//   1. DOWNLOAD — saves `firmware.hex`. User drops it into Teensy Loader
//      (bundled with Teensyduino, or the standalone app from pjrc.com/teensy/loader.html).
//      Teensy Loader auto-detects the HEX and uploads when the user taps the
//      bootloader button on the Teensy. 100% reliable.
//
//   2. WEBHID (experimental, behind a feature flag) — attempts to speak the
//      HalfKay protocol directly from the browser. Left as a placeholder
//      below; do not enable in production yet.

import { downloadBlob } from '../compile.js';

export function supported() {
  return true; // the download path always works
}

export function webhidSupported() {
  return 'hid' in navigator;
}

/**
 * Default path — download the .hex and show instructions.
 */
export async function flash(files, log = console.log) {
  const hex = files['firmware.hex'];
  if (!hex) throw new Error('missing firmware.hex in bundle');

  downloadBlob('firmware.hex', hex, 'text/plain');
  log('firmware.hex downloaded.');
  log('');
  log('Next steps:');
  log('  1. Open the Teensy Loader app (included with Teensyduino,');
  log('     or get it from https://www.pjrc.com/teensy/loader.html).');
  log('  2. Drop firmware.hex onto the Teensy Loader window');
  log('     (or use File → Open HEX File).');
  log('  3. Press the white program button on your Teensy.');
  log('  4. Teensy Loader will flash and reboot into the new firmware.');
  log('');
  log('If you have Teensyduino installed and teensy_loader_cli available:');
  log('  teensy_loader_cli --mcu=TEENSY41 -w -v firmware.hex   (for 4.1 / MaxPCB4)');
  log('  teensy_loader_cli --mcu=TEENSY40 -w -v firmware.hex   (for 4.0)');
}

/**
 * Experimental WebHID HalfKay flasher. Not yet wired into the UI.
 * Leaving the device-open shell here so it's easy to pick up later.
 */
export async function flashWebHID(_files, _log = console.log) {
  if (!webhidSupported()) throw new Error('WebHID not supported in this browser');
  throw new Error('WebHID Teensy flashing not implemented yet — use the download path.');
}
