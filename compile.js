// OnStepX online compile orchestrator.
// Talks to the Cloudflare Worker, polls the GitHub Action, unpacks the
// resulting artifact zip, and hands the firmware files to the flasher modules.

// ==========================================================================
// CONFIGURATION — set this after deploying the worker.
// ==========================================================================
export const WORKER_URL = 'https://onstepx-build-bridge.craciun-vlad.workers.dev';

// PINMAP (from Config.h dropdown) → PlatformIO build env.
// Pinmaps not in this table fall back to "unknown" → user has to pick manually.
// PINMAP → PlatformIO build env (OnStepX mode). Only pinmaps we actually
// have a matching env for are listed here. Others get "No default — pick
// manually" on the UI.
export const PINMAP_TO_ENV = {
  MaxESP3: 'esp32',
  MaxESP4: 'esp32',
  FYSETC_E4: 'esp32',
  // Terrans Industry V5 Pro — not an upstream PINMAP. The generated Config.h
  // sets `#define PINMAP OFF` and carries the board's pin map inline (OnStepX
  // src/Validate.h: "PINMAP must be set to a valid board (from Constants.h) or
  // OFF (for user pin defs in Config.h)"). Still an ESP32 build.
  TERRANS_V5PRO: 'esp32',
  MaxPCB4: 'teensy41',
  // CNC3 = Arduino CNC Shield V3 on WeMos D1 R32 (ESP32). Deprecated per the
  // OnStep wiki; only legacy CNC option. OnStepX Pins.CNC3.h confirms ESP32.
  CNC3: 'esp32',
  MaxSTM3: 'blackpill_f411',
  MaxSTM3I: 'blackpill_f411',
  FYSETC_S6: 'f446_fysetc_s6',
  FYSETC_S6_2: 'f446_fysetc_s6',
  // MiniPCB v1 / v2 — both pinmaps support Teensy 3.2 and Teensy 4.0. We
  // default to teensy32 (the historical and far more common build); users
  // running a Teensy 4.0 can switch the Compile-tab MCU to teensy40 manually.
  MiniPCB: 'teensy32',
  MiniPCB2: 'teensy32',
  BTT_SKR_PRO: 'skr_pro_f407',
};

// ==========================================================================
// Compile flow
// ==========================================================================

// request_id -> access token issued by the worker's /compile. /status and
// /firmware refuse requests without it. Kept here (not returned to callers)
// so startCompile/pollUntilDone/fetchFirmware keep their simple signatures.
const requestTokens = new Map();
// run_id -> request_id, learned while polling, so fetchFirmware(runId) can
// present the right token.
const runRequests = new Map();

/**
 * Kick off a compile. Returns a request_id.
 * `ref` is a branch / tag / commit SHA of the chosen upstream repo (default 'main').
 * `project` is 'onstepx' (default) or 'shc' — picks hjd1964/OnStepX vs
 * hjd1964/SmartHandController as the source.
 */
export async function startCompile(configText, board, ref = 'main', project = 'onstepx', plugins = []) {
  const res = await fetch(`${WORKER_URL}/compile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ config: configText, board, ref, project, plugins }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(`compile request failed (${res.status}): ${err.error || 'unknown'}`);
  }
  const data = await res.json();
  if (data.token) requestTokens.set(data.request_id, data.token);
  return data.request_id;
}

function authQuery(requestId) {
  const token = requestTokens.get(requestId) || '';
  return `id=${encodeURIComponent(requestId)}&token=${encodeURIComponent(token)}`;
}

/**
 * Poll status until the workflow run completes (or we time out).
 * onUpdate({state, conclusion?, run_id?, html_url?}) fires on every poll.
 * Resolves with the final {state, conclusion, run_id, html_url, error_lines?}
 * on completion (error_lines: compiler errors scraped from a failed run).
 *
 * Default timeout covers the workflow's 15-min job timeout plus ~10 min of
 * runner queueing. Transient failures (network, 5xx, 429) are retried with
 * backoff; MAX_STATUS_FAILURES in a row gives up.
 */
const MAX_STATUS_FAILURES = 6;
export async function pollUntilDone(requestId, onUpdate, { timeoutMs = 25 * 60 * 1000 } = {}) {
  const start = Date.now();
  let intervalMs = 3000;
  let failures = 0;
  let lastError = '';
  let runUrl = null;
  while (Date.now() - start < timeoutMs) {
    let res = null;
    try {
      res = await fetch(`${WORKER_URL}/status?${authQuery(requestId)}`);
    } catch (err) {
      lastError = err.message || String(err); // network error — retryable
    }
    if (res && res.ok) {
      failures = 0;
      const data = await res.json();
      if (data.html_url) runUrl = data.html_url;
      if (data.run_id) runRequests.set(String(data.run_id), requestId);
      onUpdate(data);
      if (data.state === 'completed') return data;
      if (data.state === 'never_started') {
        throw new Error('build never started — GitHub Actions did not create the run (GitHub queue/dispatch issue). Try again in a few minutes.');
      }
      await sleep(intervalMs);
      // Back off a little after the first minute
      if (Date.now() - start > 60_000 && intervalMs < 6000) intervalMs = 6000;
      continue;
    }
    if (res && res.status < 500 && res.status !== 429) {
      // 4xx (bad/expired token, bad id) won't fix itself.
      const err = await res.json().catch(() => ({}));
      throw new Error(`status check failed (${res.status}): ${err.error || res.statusText}`);
    }
    if (res) lastError = `HTTP ${res.status}`;
    failures++;
    if (failures >= MAX_STATUS_FAILURES) {
      throw new Error(`status check failed ${failures} times in a row (${lastError})` +
        (runUrl ? ` — check the run: ${runUrl}` : ''));
    }
    await sleep(Math.min(intervalMs * 2 ** failures, 30_000));
  }
  throw new Error('build timed out — ' +
    (runUrl ? `check the run: ${runUrl}` : 'check the GitHub Actions tab for details'));
}

/**
 * Fetch firmware artifact as {filename: Uint8Array, ...} by unpacking the zip
 * returned by the worker.
 */
export async function fetchFirmware(runId, requestId = runRequests.get(String(runId))) {
  if (!requestId) throw new Error('firmware download failed: unknown run (no request_id/token for it)');
  const res = await fetch(`${WORKER_URL}/firmware?run_id=${encodeURIComponent(runId)}&${authQuery(requestId)}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`firmware download failed (${res.status})${err.error ? ': ' + err.error : ''}`);
  }
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

/**
 * Resolve a git ref of an upstream repo to a concrete commit via the public
 * GitHub API. Unauthenticated — 60 req/hr/IP, plenty for page-load use.
 * `repo` defaults to 'hjd1964/OnStepX'; pass 'hjd1964/SmartHandController' for SHC.
 * Returns {sha, shortSha, authorName, dateIso, relative, message} or throws.
 */
export async function resolveOnStepXRef(ref, repo = 'hjd1964/OnStepX') {
  const r = await fetch(
    `https://api.github.com/repos/${repo}/commits/${encodeURIComponent(ref)}`,
    { headers: { Accept: 'application/vnd.github+json' } }
  );
  if (!r.ok) {
    if (r.status === 404) throw new Error(`ref "${ref}" not found`);
    if (r.status === 403) throw new Error('GitHub API rate-limited — try again later');
    throw new Error(`GitHub API ${r.status}`);
  }
  const d = await r.json();
  const dateIso = d.commit?.author?.date || d.commit?.committer?.date;
  return {
    sha: d.sha,
    shortSha: d.sha.slice(0, 7),
    authorName: d.commit?.author?.name || 'unknown',
    dateIso,
    relative: humanRelative(dateIso),
    message: (d.commit?.message || '').split('\n')[0].slice(0, 120),
  };
}

function humanRelative(iso) {
  if (!iso) return '';
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60_000);
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 48) return `${hrs} h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days} d ago`;
  const months = Math.floor(days / 30);
  return months < 12 ? `${months} mo ago` : `${Math.floor(months / 12)} y ago`;
}

/**
 * SHA-1 hex digest — used to detect "config changed since compile" staleness.
 * SHA-1 is fine here; this is a change-detection fingerprint, not a security
 * hash, and Web Crypto gives it to us for free.
 */
export async function sha1Hex(text) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-1', data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
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
