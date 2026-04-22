// STM32 BlackPill F411 flasher — minimal WebUSB DFU (USB DFU 1.1 + DfuSe).
// Target VID:PID = 0x0483:0xDF11 (STMicro ST-DFU), flash base 0x08000000.
//
// User flow:
//   1. Hold BOOT0, tap NRST → board enumerates as "STM32 BOOTLOADER".
//   2. Click "Flash STM32" → browser shows the DFU device picker.
//   3. We download firmware.bin to 0x08000000.
//   4. Detach → user taps NRST (or unplugs) to run the app.

const DFU_VENDOR = 0x0483;
const DFU_PRODUCT = 0xdf11;
const FLASH_BASE = 0x08000000;
const TRANSFER_SIZE = 2048; // matches STM32 DFU descriptor default

// DFU class requests
const DFU_DETACH = 0x00;
const DFU_DNLOAD = 0x01;
const DFU_UPLOAD = 0x02;
const DFU_GETSTATUS = 0x03;
const DFU_CLRSTATUS = 0x04;
const DFU_GETSTATE = 0x05;
const DFU_ABORT = 0x06;

// DfuSe (ST extension) commands — written as first byte of the payload at block 0
const DFUSE_SET_ADDRESS = 0x21;
const DFUSE_ERASE = 0x41;

export function supported() {
  return 'usb' in navigator;
}

export async function flash(files, log = console.log) {
  if (!supported()) throw new Error('WebUSB not supported — use Chrome, Edge, or Opera');
  const bin = files['firmware.bin'];
  if (!bin) throw new Error('missing firmware.bin in bundle');

  log('Select the STM32 BOOTLOADER device in the browser prompt…');
  const device = await navigator.usb.requestDevice({
    filters: [{ vendorId: DFU_VENDOR, productId: DFU_PRODUCT }],
  });

  await device.open();
  if (!device.configuration) await device.selectConfiguration(1);

  // Find the DFU interface — DFU class 0xFE, subclass 0x01 (app spec), proto 0x02 (DFU mode)
  let ifaceNum = -1;
  let altSetting = 0;
  for (const cfg of device.configurations) {
    for (const iface of cfg.interfaces) {
      for (const alt of iface.alternates) {
        if (alt.interfaceClass === 0xfe && alt.interfaceSubclass === 0x01) {
          ifaceNum = iface.interfaceNumber;
          altSetting = alt.alternateSetting;
          break;
        }
      }
      if (ifaceNum >= 0) break;
    }
    if (ifaceNum >= 0) break;
  }
  if (ifaceNum < 0) throw new Error('no DFU interface found on device');

  await device.claimInterface(ifaceNum);
  if (altSetting !== 0) await device.selectAlternateInterface(ifaceNum, altSetting);

  const ctx = { device, ifaceNum };

  log(`Connected. Erasing + writing ${bin.length} bytes to 0x${FLASH_BASE.toString(16)}…`);

  // Abort any prior state
  await classOut(ctx, DFU_ABORT, 0, new Uint8Array(0)).catch(() => {});
  await waitIdle(ctx, log);

  // Erase the sectors we're about to write. Simplest path: "mass erase"
  // (DfuSe erase with no address = whole chip). STM32F411 has 8 sectors.
  // Per-page erase would be faster but "set address + erase" is universally supported.
  await eraseRange(ctx, FLASH_BASE, bin.length, log);

  // Set base address, then write in TRANSFER_SIZE chunks starting at blockNum=2.
  // (DfuSe: block 0 = command, block 1 reserved, block N>=2 writes at addr+((N-2)*xfer).)
  await setAddress(ctx, FLASH_BASE);
  await waitIdle(ctx, log);

  const total = bin.length;
  let written = 0;
  let blockNum = 2;
  while (written < total) {
    const chunk = bin.subarray(written, Math.min(written + TRANSFER_SIZE, total));
    await classOut(ctx, DFU_DNLOAD, blockNum, chunk);
    await waitIdle(ctx, null);
    written += chunk.length;
    blockNum++;
    if (blockNum % 8 === 0) {
      log(`  wrote ${written}/${total} (${((written / total) * 100).toFixed(1)}%)`);
    }
  }
  log(`  wrote ${total}/${total} (100%)`);

  // Zero-length DNLOAD = "manifestation phase" → leave DFU
  await classOut(ctx, DFU_DNLOAD, 0, new Uint8Array(0));
  try { await waitIdle(ctx, null); } catch {}

  await device.close();
  log('Flash complete. Tap NRST on the board to run the application.');
}

// ---------------------------------------------------------------------------
// DFU helpers
// ---------------------------------------------------------------------------

async function classOut(ctx, request, wValue, data) {
  const res = await ctx.device.controlTransferOut(
    {
      requestType: 'class',
      recipient: 'interface',
      request,
      value: wValue,
      index: ctx.ifaceNum,
    },
    data
  );
  if (res.status !== 'ok') throw new Error(`DFU out transfer failed: ${res.status}`);
  return res;
}

async function classIn(ctx, request, wValue, length) {
  const res = await ctx.device.controlTransferIn(
    {
      requestType: 'class',
      recipient: 'interface',
      request,
      value: wValue,
      index: ctx.ifaceNum,
    },
    length
  );
  if (res.status !== 'ok') throw new Error(`DFU in transfer failed: ${res.status}`);
  return new Uint8Array(res.data.buffer);
}

async function getStatus(ctx) {
  const d = await classIn(ctx, DFU_GETSTATUS, 0, 6);
  return {
    status: d[0],
    pollTimeout: d[1] | (d[2] << 8) | (d[3] << 16),
    state: d[4],
  };
}

async function waitIdle(ctx, log) {
  for (let tries = 0; tries < 100; tries++) {
    const s = await getStatus(ctx);
    if (s.pollTimeout) await sleep(s.pollTimeout);
    if (s.status !== 0) {
      await classOut(ctx, DFU_CLRSTATUS, 0, new Uint8Array(0)).catch(() => {});
      throw new Error(`DFU error status=0x${s.status.toString(16)} state=0x${s.state.toString(16)}`);
    }
    // dfuDNLOAD-IDLE = 5, dfuIDLE = 2 — both are OK to proceed
    if (s.state === 2 || s.state === 5) return;
    if (log) log(`  (DFU state ${s.state}, waiting…)`);
    await sleep(20);
  }
  throw new Error('timeout waiting for DFU idle');
}

async function setAddress(ctx, addr) {
  const cmd = new Uint8Array(5);
  cmd[0] = DFUSE_SET_ADDRESS;
  cmd[1] = addr & 0xff;
  cmd[2] = (addr >> 8) & 0xff;
  cmd[3] = (addr >> 16) & 0xff;
  cmd[4] = (addr >> 24) & 0xff;
  await classOut(ctx, DFU_DNLOAD, 0, cmd);
}

// Erase the sectors covering [base, base+length). STM32F411 sector layout:
//   0x08000000  16K
//   0x08004000  16K
//   0x08008000  16K
//   0x0800C000  16K
//   0x08010000  64K
//   0x08020000 128K
//   0x08040000 128K
//   0x08060000 128K   (F411CE is 512K total → ends at 0x0807FFFF)
const F411_SECTORS = [
  [0x08000000, 16 * 1024],
  [0x08004000, 16 * 1024],
  [0x08008000, 16 * 1024],
  [0x0800c000, 16 * 1024],
  [0x08010000, 64 * 1024],
  [0x08020000, 128 * 1024],
  [0x08040000, 128 * 1024],
  [0x08060000, 128 * 1024],
];

async function eraseRange(ctx, base, length, log) {
  const end = base + length;
  for (const [addr, size] of F411_SECTORS) {
    if (addr + size <= base) continue;
    if (addr >= end) break;
    log(`  erasing sector at 0x${addr.toString(16)} (${size / 1024}K)`);
    const cmd = new Uint8Array(5);
    cmd[0] = DFUSE_ERASE;
    cmd[1] = addr & 0xff;
    cmd[2] = (addr >> 8) & 0xff;
    cmd[3] = (addr >> 16) & 0xff;
    cmd[4] = (addr >> 24) & 0xff;
    await classOut(ctx, DFU_DNLOAD, 0, cmd);
    await waitIdle(ctx, null);
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, Math.max(ms, 0)));
}
