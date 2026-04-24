// Teensy 4.0 / 4.1 / MaxPCB4 flasher.
//
// Primary path: one-click browser flashing via WebHID, speaking the HalfKay
// bootloader protocol. Protocol reference is PJRC's teensy_loader_cli.c
// (https://github.com/PaulStoffregen/teensy_loader_cli):
//
//   For Teensy 4.x (imxrt1062):
//     VID:PID in bootloader mode = 0x16C0:0x0478
//     code_size  = 2031616 (4.0) / 8126464 (4.1)
//     block_size = 1024
//     HID output report = 64-byte header + 1024-byte data = 1088 bytes
//       bytes 0..2   : flash offset, little-endian 3 bytes
//       bytes 3..63  : zero padding
//       bytes 64..   : data payload
//     Block 0 is always programmed (triggers chip erase).
//     Blank blocks (all 0xFF) are skipped after block 0.
//     Timeouts: first 5 blocks = 45s each (erase), rest = 0.5s.
//     Reboot: one final 1088-byte report with address bytes = 0xFF 0xFF 0xFF.
//
// Fallback path: if WebHID is unavailable, the user cancels the device picker,
// or any error is thrown mid-flash, we save firmware.hex and show Teensy
// Loader instructions. The HalfKay bootloader is in ROM and cannot be bricked
// by a partial flash — a retry (browser or desktop) always recovers.

import { downloadBlob } from '../compile.js';

const HALFKAY_VID = 0x16C0;
const HALFKAY_PID = 0x0478;

// Teensy 3.2 (MK20DX256) is half-covered by HalfKay's "block_size >= 512"
// branch in teensy_loader_cli: same 1088-byte report (64-byte header + 1024
// payload), same 3-byte little-endian address. Just a smaller flash.
const T32_CODE_SIZE = 262144;
const T40_CODE_SIZE = 2031616;
const T41_CODE_SIZE = 8126464;
const BLOCK_SIZE    = 1024;
const HEADER_SIZE   = 64;
const REPORT_SIZE   = HEADER_SIZE + BLOCK_SIZE; // 1088

// IMXRT1062 flash is mapped at 0x60000000 in CPU space; .hex files from
// Teensyduino/PlatformIO use those absolute addresses. HalfKay itself wants
// offsets relative to flash start, so we strip this base when parsing.
// Teensy 3.2 .hex files already start at offset 0, so the auto-detect in
// parseIntelHex falls through to flashBase=0.
const IMXRT_FLASH_BASE = 0x60000000;

export function supported() { return true; }

export function webhidSupported() {
  return typeof navigator !== 'undefined' && 'hid' in navigator;
}

// --------------------------------------------------------------------------
// Intel HEX parser
// --------------------------------------------------------------------------

function parseIntelHex(hexText, codeSize) {
  const image = new Uint8Array(codeSize).fill(0xFF);
  let baseHigh = 0;          // from type-04 extended linear address
  let flashBase = null;      // auto-detected from first data record
  let highestOffset = 0;

  const lines = hexText.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line[0] !== ':' || line.length < 11) {
      throw new Error(`HEX line ${i + 1}: malformed`);
    }
    const byteCount = parseInt(line.substr(1, 2), 16);
    const addrLow   = parseInt(line.substr(3, 4), 16);
    const recType   = parseInt(line.substr(7, 2), 16);
    const dataHex   = line.substr(9, byteCount * 2);
    const csum      = parseInt(line.substr(9 + byteCount * 2, 2), 16);

    let sum = byteCount + (addrLow >> 8) + (addrLow & 0xFF) + recType;
    const data = new Uint8Array(byteCount);
    for (let j = 0; j < byteCount; j++) {
      const b = parseInt(dataHex.substr(j * 2, 2), 16);
      data[j] = b;
      sum += b;
    }
    if (((-sum) & 0xFF) !== csum) {
      throw new Error(`HEX line ${i + 1}: checksum mismatch`);
    }

    switch (recType) {
      case 0x00: { // data
        const abs = (baseHigh * 0x10000) + addrLow;
        if (flashBase === null) {
          flashBase = abs >= IMXRT_FLASH_BASE ? IMXRT_FLASH_BASE : 0;
        }
        const offset = abs - flashBase;
        if (offset < 0 || offset + byteCount > codeSize) {
          throw new Error(
            `HEX: address 0x${abs.toString(16)} outside flash range ` +
            `[0x${flashBase.toString(16)}..0x${(flashBase + codeSize).toString(16)})`
          );
        }
        image.set(data, offset);
        if (offset + byteCount > highestOffset) highestOffset = offset + byteCount;
        break;
      }
      case 0x01: // EOF
        return { image, highestOffset };
      case 0x04: // extended linear address
        baseHigh = (data[0] << 8) | data[1];
        break;
      case 0x02: // extended segment address (legacy) — shift 4 bits
        baseHigh = (((data[0] << 8) | data[1]) * 16) >>> 16;
        break;
      case 0x03: // start segment
      case 0x05: // start linear (entry point — ignore for flashing)
        break;
      default:
        throw new Error(`HEX line ${i + 1}: unsupported record type 0x${recType.toString(16)}`);
    }
  }
  return { image, highestOffset };
}

function codeSizeForEnv(env) {
  if (env === 'teensy41') return T41_CODE_SIZE;
  if (env === 'teensy40') return T40_CODE_SIZE;
  if (env === 'teensy32') return T32_CODE_SIZE;
  // SHC variants (shc_teensy40, shc_teensy32) still fall back to download —
  // the build zip layout is different enough that we don't auto-flash them.
  return null;
}

function isBlank(image, offset, len) {
  for (let i = 0; i < len; i++) {
    if (image[offset + i] !== 0xFF) return false;
  }
  return true;
}

// --------------------------------------------------------------------------
// WebHID device handling
// --------------------------------------------------------------------------

async function pickTeensy(log) {
  const filters = [{ vendorId: HALFKAY_VID, productId: HALFKAY_PID }];

  // Reuse an already-granted device if one is currently connected.
  const granted = await navigator.hid.getDevices();
  let dev = granted.find(
    (d) => d.vendorId === HALFKAY_VID && d.productId === HALFKAY_PID,
  );

  if (!dev) {
    log('Press the white program button on your Teensy now,');
    log('then pick "Teensy" in the browser dialog.');
    const picked = await navigator.hid.requestDevice({ filters });
    if (!picked || picked.length === 0) {
      const e = new Error('No Teensy selected (bootloader not active, or picker dismissed).');
      e.code = 'USER_CANCELLED';
      throw e;
    }
    dev = picked[0];
  }

  if (!dev.opened) await dev.open();
  return dev;
}

// sendReport + timeout, with late-error swallowing so the Promise that loses
// the race can't turn into an unhandled rejection.
function sendReportOnce(device, report, timeoutSec) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error(`HID write timed out after ${timeoutSec}s`));
    }, timeoutSec * 1000);

    device.sendReport(0, report).then(
      () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve();
      },
      (err) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        reject(err);
      },
    );
  });
}

// One transient HID hiccup shouldn't lose the whole flash — we get one retry
// with a short backoff. More retries hide real failures; zero retries make
// the flasher flaky on marginal USB links.
async function sendReportWithRetry(device, report, timeoutSec) {
  try {
    await sendReportOnce(device, report, timeoutSec);
  } catch (err) {
    await new Promise((r) => setTimeout(r, 100));
    await sendReportOnce(device, report, timeoutSec);
  }
}

// --------------------------------------------------------------------------
// WebHID flasher
// --------------------------------------------------------------------------

export async function flashWebHID(files, env, log = console.log) {
  if (!webhidSupported()) {
    const e = new Error('WebHID is not available in this browser.');
    e.code = 'NOT_SUPPORTED';
    throw e;
  }
  const codeSize = codeSizeForEnv(env);
  if (codeSize === null) {
    const e = new Error(`WebHID flash not supported for env ${env}`);
    e.code = 'NOT_SUPPORTED';
    throw e;
  }

  const raw = files['firmware.hex'];
  if (!raw) throw new Error('missing firmware.hex in bundle');
  const hexText = typeof raw === 'string' ? raw : new TextDecoder().decode(raw);

  log(`Parsing firmware.hex (target ${env}, flash capacity ${codeSize} bytes)…`);
  const { image, highestOffset } = parseIntelHex(hexText, codeSize);
  log(`Firmware size: ${highestOffset} bytes (${Math.round(100 * highestOffset / codeSize)}% of flash).`);

  const device = await pickTeensy(log);
  log(`Connected: ${device.productName || 'Teensy (HalfKay)'}`);

  try {
    const totalBlocks = Math.ceil(highestOffset / BLOCK_SIZE);
    let sent = 0;
    const t0 = performance.now();

    for (let blockIdx = 0, offset = 0; offset < highestOffset; blockIdx++, offset += BLOCK_SIZE) {
      // Skip blank pages, except block 0 (which triggers chip erase).
      if (blockIdx > 0 && isBlank(image, offset, BLOCK_SIZE)) continue;

      const report = new Uint8Array(REPORT_SIZE);
      report[0] = offset & 0xFF;
      report[1] = (offset >> 8) & 0xFF;
      report[2] = (offset >> 16) & 0xFF;
      // bytes 3..63 stay zero
      report.set(image.subarray(offset, offset + BLOCK_SIZE), HEADER_SIZE);

      const timeoutSec = blockIdx <= 4 ? 45.0 : 0.5;
      try {
        await sendReportWithRetry(device, report, timeoutSec);
      } catch (err) {
        throw new Error(
          `block ${blockIdx} @ 0x${offset.toString(16)} failed: ${err.message}`,
        );
      }

      sent++;
      if (blockIdx === 0) {
        log('First block sent (chip erase, takes a few seconds)…');
      } else if (sent % 64 === 0) {
        const pct = Math.round(100 * (offset + BLOCK_SIZE) / highestOffset);
        log(`  progress: ${pct}%  (block ${blockIdx + 1}/${totalBlocks})`);
      }
    }

    log('Upload complete — sending reboot command…');
    const bootReport = new Uint8Array(REPORT_SIZE);
    bootReport[0] = 0xFF;
    bootReport[1] = 0xFF;
    bootReport[2] = 0xFF;
    try {
      await sendReportWithTimeout(device, bootReport, 0.5);
    } catch {
      // The reboot report often doesn't ACK because the device resets
      // mid-transfer. That's expected, not an error.
      log('(reboot ack not received — expected, device is restarting)');
    }

    const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
    log(`Done in ${elapsed}s — Teensy is running the new firmware.`);
  } finally {
    try { await device.close(); } catch { /* ignore */ }
  }
}

// --------------------------------------------------------------------------
// Entry point used by index.html
// --------------------------------------------------------------------------

export async function flash(files, env, log = console.log) {
  const webhidEligible = webhidSupported() && codeSizeForEnv(env) !== null;

  if (webhidEligible) {
    try {
      log('Attempting one-click flash via WebHID (Chrome/Edge).');
      await flashWebHID(files, env, log);
      return;
    } catch (err) {
      const code = err && err.code;
      log('');
      if (code === 'USER_CANCELLED') {
        log('Device picker dismissed — falling back to .hex download.');
      } else if (code === 'NOT_SUPPORTED') {
        log('WebHID not available for this target — falling back to .hex download.');
      } else {
        log(`WebHID flash failed: ${err && err.message ? err.message : err}`);
        log('The Teensy HalfKay bootloader is in ROM and cannot be bricked;');
        log('you can retry, or use the downloaded .hex with Teensy Loader below.');
      }
      // fall through to download
    }
  } else {
    if (!webhidSupported()) {
      log('This browser does not expose WebHID (Chrome/Edge required for one-click flash).');
    }
    log('Saving firmware.hex for Teensy Loader instead.');
  }

  downloadFallback(files, log);
}

function downloadFallback(files, log) {
  const hex = files['firmware.hex'];
  if (!hex) throw new Error('missing firmware.hex in bundle');
  downloadBlob('firmware.hex', hex, 'text/plain');
  log('');
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
  log('CLI alternative (with Teensyduino installed):');
  log('  teensy_loader_cli --mcu=TEENSY41 -w -v firmware.hex   (for 4.1 / MaxPCB4)');
  log('  teensy_loader_cli --mcu=TEENSY40 -w -v firmware.hex   (for 4.0)');
}
