// OnStepX online compile orchestrator.
// Talks to the Cloudflare Worker, polls the GitHub Action, unpacks the
// resulting artifact zip, and hands the firmware files to the flasher modules.

// ==========================================================================
// CONFIGURATION — set this after deploying the worker.
// ==========================================================================
export const WORKER_URL = 'https://onstepx-build-bridge.<your-subdomain>.workers.dev';

// PINMAP (from Config.h dropdown) → PlatformIO build env.
// Pinmaps not in this table fall back to "unknown" → user has to pick manually.
export const PINMAP_TO_ENV = {
  MaxESP3: 'esp32',
  MaxESP4: 'esp32',
  FYSETC_E4: 'esp32',
  MaxPCB: 'teensy40',
  MaxPCB4: 'teensy41',
  MaxPCB3: 'teensy41',
  CNC3: 'teensy40',
  CNC3_2: 'teensy40',
  MaxSTM3: 'blackpill_f411',
  BTT_SKR_PRO: 'blackpill_f411', // STM32 — close enough for a default
};

export const ENV_LABELS = {
  esp32: 'ESP32',
  teensy40: 'Teensy 4.0',
  teensy41: 'Teensy 4.1 / MaxPCB4',
  blackpill_f411: 'STM32 BlackPill F411CE',
};

// ==========================================================================
// Compile flow
// ==========================================================================

/**
 * Kick off a compile. Returns a request_id.
 */
export async function startCompile(configText, board) {
  const res = await fetch(`${WORKER_URL}/compile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ config: configText, board }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(`compile request failed (${res.status}): ${err.error || 'unknown'}`);
  }
  const data = await res.json();
  return data.request_id;
}

/**
 * Poll status until the workflow run completes (or we time out).
 * onUpdate({state, conclusion?, run_id?}) fires on every poll.
 * Resolves with the final {state, conclusion, run_id} on completion.
 */
export async function pollUntilDone(requestId, onUpdate, { timeoutMs = 10 * 60 * 1000 } = {}) {
  const start = Date.now();
  let intervalMs = 3000;
  while (Date.now() - start < timeoutMs) {
    const res = await fetch(`${WORKER_URL}/status?id=${encodeURIComponent(requestId)}`);
    if (!res.ok) throw new Error(`status check failed (${res.status})`);
    const data = await res.json();
    onUpdate(data);
    if (data.state === 'completed') return data;
    await sleep(intervalMs);
    // Back off a little after the first minute
    if (Date.now() - start > 60_000 && intervalMs < 6000) intervalMs = 6000;
  }
  throw new Error('build timed out — check the GitHub Actions tab for details');
}

/**
 * Fetch firmware artifact as {filename: Uint8Array, ...} by unpacking the zip
 * returned by the worker.
 */
export async function fetchFirmware(runId) {
  const res = await fetch(`${WORKER_URL}/firmware?run_id=${encodeURIComponent(runId)}`);
  if (!res.ok) throw new Error(`firmware download failed (${res.status})`);
  const zipBuf = new Uint8Array(await res.arrayBuffer());
  return unzipArtifact(zipBuf);
}

// Minimal async zip reader — central-dir only, supports stored + deflate.
// Enough for GitHub Actions artifact zips (a few small files each).
async function unzipArtifact(bytes) {
  const out = {};
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65558); i--) {
    if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
      eocd = i; break;
    }
  }
  if (eocd < 0) throw new Error('invalid zip');
  const entries = view.getUint16(eocd + 10, true);
  const cdOffset = view.getUint32(eocd + 16, true);

  let p = cdOffset;
  for (let n = 0; n < entries; n++) {
    const method = view.getUint16(p + 10, true);
    const compSize = view.getUint32(p + 20, true);
    const nameLen = view.getUint16(p + 28, true);
    const extraLen = view.getUint16(p + 30, true);
    const commentLen = view.getUint16(p + 32, true);
    const localOffset = view.getUint32(p + 42, true);
    const name = new TextDecoder().decode(bytes.subarray(p + 46, p + 46 + nameLen));
    p += 46 + nameLen + extraLen + commentLen;

    let lp = localOffset;
    const lNameLen = view.getUint16(lp + 26, true);
    const lExtraLen = view.getUint16(lp + 28, true);
    const dataStart = lp + 30 + lNameLen + lExtraLen;
    const data = bytes.subarray(dataStart, dataStart + compSize);

    if (method === 0) {
      out[name] = data;
    } else if (method === 8) {
      const ds = new DecompressionStream('deflate-raw');
      const stream = new Blob([data]).stream().pipeThrough(ds);
      const buf = new Uint8Array(await new Response(stream).arrayBuffer());
      out[name] = buf;
    } else {
      throw new Error(`unsupported compression method ${method}`);
    }
  }
  return out;
}

// ==========================================================================
// Helpers
// ==========================================================================

export function inferEnvFromPinmap(pinmap) {
  return PINMAP_TO_ENV[pinmap] || null;
}

export function downloadBlob(filename, bytes, mime = 'application/octet-stream') {
  const blob = new Blob([bytes], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
