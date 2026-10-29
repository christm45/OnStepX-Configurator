// OnStepX build-service bridge — Cloudflare Worker
//
// Endpoints (all CORS-enabled for the configurator origin):
//   POST /compile      {config, board}  -> {request_id, token}
//   GET  /status?id=…&token=…           -> {state, run_id?, conclusion?, html_url?, error_lines?, logs_pending?}
//   GET  /firmware?run_id=…&id=…&token=… -> application/zip (artifact, proxied)
//   GET  /auth-info                     -> {mode: 'github-app' | 'pat', expires_at?}
//
// Access control: /compile hands back an HMAC token bound to the request_id
// (and its issue time). /status and /firmware refuse to answer without it,
// and only ever return the run whose run-name carries that request_id — so
// THIS WORKER won't hand one user's artifact to another, and anonymous polling
// can't burn the App's API quota.
//
// That is NOT confidentiality of the firmware. The build-service repo
// (BUILD_OWNER/BUILD_REPO) is public, so GitHub itself serves every run's
// logs to anyone, and every run's artifacts (firmware-<request_id>.zip, whose
// firmware embeds the user's WiFi SSID/password and the uploaded Config.h
// values) to any signed-in GitHub user, for the artifact retention period —
// no token or worker involved. The real fix is making the build-service repo
// private (Actions minutes then count against the owner's quota); short
// artifact retention in build.yml narrows the window.
//
// state values from /status: queued | in_progress | completed (GitHub's), plus
//   never_started — no run carrying this request_id appeared within
//                   NEVER_STARTED_MS of dispatch (GitHub queue/dispatch issue).
// A completed+failure answer may carry logs_pending: true — the job log
// wasn't readable yet (GitHub lags the conclusion by a few seconds); poll
// again shortly to get error_lines.
//
// Auth — TWO modes, App preferred when its secrets are configured:
//
//   Mode A: GitHub App (recommended, no manual rotation)
//     GH_APP_ID              — numeric App ID from the App's settings page
//     GH_APP_PRIVATE_KEY     — PKCS#8 PEM private key (multi-line OK)
//                              Convert from GitHub's PKCS#1 default with:
//                                openssl pkcs8 -topk8 -nocrypt -in raw.pem -out app.pem
//     GH_APP_INSTALLATION_ID — numeric ID from the App's installation on the
//                              build-service repo (URL: .../installations/<id>)
//
//   Mode B: Personal Access Token (legacy, expires every 90 days)
//     GITHUB_TOKEN  — fine-grained PAT with Actions:write + Contents:read on BUILD_REPO
//
// If all three Mode A secrets are present, the Worker auto-uses App mode and
// caches installation tokens in-isolate (1-hour TTL, refreshed 5 min before
// expiry). Otherwise it falls back to the PAT.
//
// Other vars (set via wrangler.toml):
//   BUILD_OWNER    — GitHub username or org owning the build-service repo
//   BUILD_REPO     — name of the build-service repo (e.g. onstepx-build-service)
//   ALLOWED_ORIGIN — the Pages origin (e.g. https://christm45.github.io)
//
// Required secret:
//   TOKEN_SECRET   — random string (e.g. `openssl rand -hex 32`) keying the
//                    request tokens. Fail-closed: without it /compile, /status
//                    and /firmware all return 503. Rotating it invalidates
//                    tokens of builds in flight (they just have to recompile).
//
// KV (bound in wrangler.toml — required in production):
//   RATE_LIMIT     — enforces 10 builds/hr/IP (fixed window, charged before
//                    dispatch, refunded if the dispatch fails). The code skips
//                    it if unbound. Best-effort — see handleCompile.

const ALLOWED_BOARDS = new Set([
  // OnStepX (mount controller) build environments
  'esp32', 'teensy32', 'teensy40', 'teensy41',
  'blackpill_f411', 'f446_fysetc_s6', 'skr_pro_f407',
  // SmartHandController (hand pendant) build environments
  'shc_esp32', 'shc_teensy40',
  // SmartWebServer (web UI bridge) build environments
  'sws_esp32', 'sws_esp8266',
]);
const ALLOWED_PROJECTS = new Set(['onstepx', 'shc', 'sws']);

function envProject(board) {
  if (board.startsWith('shc_')) return 'shc';
  if (board.startsWith('sws_')) return 'sws';
  return 'onstepx';
}
const MAX_CONFIG_BYTES = 200_000;
const WORKFLOW_FILE = 'build.yml';

// /compile rate limit: RL_MAX dispatches per RL_WINDOW_MS fixed window per IP.
const RL_MAX = 10;
const RL_WINDOW_MS = 60 * 60 * 1000;
// Tokens outlive the build by a margin, but not the 1-day artifact retention.
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
// workflow_dispatch normally materialises a run within seconds. If nothing
// carrying our request_id shows up in this long, report never_started rather
// than letting the client poll "queued" until its timeout.
const NEVER_STARTED_MS = 3 * 60 * 1000;
// In-isolate caches (see handleStatus). KV is deliberately not used for these:
// its free-tier write quota (1k/day) would be exhausted by status polling.
const RUNS_CACHE_MS = 4000;          // shared workflow-runs listing
const FINAL_CACHE_MS = 10 * 60 * 1000; // completed status incl. error_lines
const STATUS_IP_MAX = 60;            // /status calls per IP per minute (per isolate)
const MAX_ERROR_LINES = 30;
const RUNS_PER_PAGE = 100;           // GitHub's maximum for the runs listing
// Window, around the token's issue time, in which our run must have been
// created (used for the targeted runs query when the shared listing is full).
const CREATED_BEFORE_MS = 5 * 60 * 1000;  // clock skew between us and GitHub
const CREATED_AFTER_MS = 30 * 60 * 1000;  // slow run materialisation
const TARGETED_MAX_PAGES = 3;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = buildCorsHeaders(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    try {
      if (request.method === 'POST' && url.pathname === '/compile') {
        return withCors(await handleCompile(request, env), cors);
      }
      if (request.method === 'GET' && url.pathname === '/status') {
        return withCors(await handleStatus(request, url, env), cors);
      }
      if (request.method === 'GET' && url.pathname === '/firmware') {
        return withCors(await handleFirmware(url, env), cors);
      }
      if (request.method === 'GET' && url.pathname === '/auth-info') {
        return withCors(await handleAuthInfo(env), cors);
      }
      if (request.method === 'GET' && url.pathname === '/') {
        return withCors(json({ ok: true, service: 'onstepx-build-bridge' }), cors);
      }
      return withCors(json({ error: 'not found' }, 404), cors);
    } catch (err) {
      console.error(err);
      return withCors(json({ error: String(err.message || err) }, 500), cors);
    }
  },
};

// ---------------------------------------------------------------------------

async function handleCompile(request, env) {
  const body = await request.json().catch(() => null);
  if (!body) return json({ error: 'invalid JSON' }, 400);

  const { config, board } = body;
  const project = (body.project || 'onstepx').toString();
  const onstepxRef = (body.ref || 'main').toString();
  // Plugins — OnStepX only. Array of plugin names from the known list.
  const ALLOWED_PLUGINS = new Set([
    'website', 'elegantota', 'metrics', 'serialBluetoothConfig',
    'guideRateRheostat', 'usb',
  ]);
  const pluginsArr = Array.isArray(body.plugins) ? body.plugins : [];
  for (const p of pluginsArr) {
    if (typeof p !== 'string' || !ALLOWED_PLUGINS.has(p)) {
      return json({ error: `unknown plugin: ${p}` }, 400);
    }
  }
  if (project !== 'onstepx' && pluginsArr.length > 0) {
    return json({ error: 'plugins are only supported for project=onstepx' }, 400);
  }
  const pluginsCsv = pluginsArr.join(',');
  if (typeof config !== 'string' || !config.length) {
    return json({ error: 'config missing' }, 400);
  }
  if (!ALLOWED_PROJECTS.has(project)) {
    return json({ error: `project must be one of ${[...ALLOWED_PROJECTS].join(', ')}` }, 400);
  }
  if (!ALLOWED_BOARDS.has(board)) {
    return json({ error: `board must be one of ${[...ALLOWED_BOARDS].join(', ')}` }, 400);
  }
  // Sanity: the env and the project must agree on which upstream repo we
  // clone. shc_* → project=shc, sws_* → project=sws, others → project=onstepx.
  const expectedProject = envProject(board);
  if (project !== expectedProject) {
    return json(
      { error: `board ${board} requires project=${expectedProject}` },
      400
    );
  }
  if (new TextEncoder().encode(config).length > MAX_CONFIG_BYTES) {
    return json({ error: 'config too large' }, 413);
  }
  // Same charset the workflow enforces — reject shell-unsafe refs at the edge.
  if (!/^[A-Za-z0-9._/-]{1,64}$/.test(onstepxRef)) {
    return json({ error: 'ref contains disallowed characters' }, 400);
  }

  // workflow_dispatch input hard limit is 65535 chars. Checked BEFORE the rate
  // limiter: this request is going to be rejected without ever reaching GitHub,
  // so charging it against the caller's hourly build budget is simply wrong.
  // It also used to make the limiter observable from outside — 11 oversized
  // configs would walk the counter to its limit while dispatching nothing.
  const configB64 = b64encodeUtf8(config);
  if (configB64.length > 65000) {
    return json({ error: 'config (base64) exceeds workflow_dispatch input limit' }, 413);
  }

  // Fail closed: without TOKEN_SECRET the caller could never poll or download
  // the result, so don't spend a GitHub Actions run on it.
  if (!env.TOKEN_SECRET) return tokenSecretMissing();

  // Rate limiting — fixed window per IP, only for requests that will actually
  // reach GitHub. The slot is CHARGED BEFORE the dispatch and refunded if the
  // dispatch fails (so a GitHub-side failure doesn't eat the caller's budget).
  // The previous check-before / charge-after order let a concurrent burst all
  // pass the check: 30 parallel requests dispatched 30 runs and left count=1.
  const ip = request.headers.get('CF-Connecting-IP') || 'anon';
  let charged = false;
  if (env.RATE_LIMIT) {
    const rl = await chargeRateWindow(env, ip);
    if (!rl.ok) {
      const retryMin = Math.max(1, Math.ceil((rl.start + RL_WINDOW_MS - Date.now()) / 60000));
      return json({ error: `rate limit: max ${RL_MAX} builds/hour — try again in ~${retryMin} min` }, 429);
    }
    charged = true;
  }

  const requestId = crypto.randomUUID();

  let dispatchRes;
  try {
    dispatchRes = await ghFetch(
      env,
      `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/workflows/${WORKFLOW_FILE}/dispatches`,
      {
        method: 'POST',
        body: JSON.stringify({
          ref: 'main', // which branch of the BUILD-SERVICE repo runs the workflow
          inputs: {
            project,                 // 'onstepx' | 'shc' | 'sws' — picks upstream repo
            config_h: configB64,
            environment: board,
            request_id: requestId,
            onstepx_ref: onstepxRef, // ref of the chosen upstream repo
            plugins: pluginsCsv,     // comma-separated plugin list (OnStepX only)
          },
        }),
      }
    );
  } catch (e) {
    // Network / auth failure: nothing was dispatched, give the slot back.
    if (charged) await refundRateWindow(env, ip).catch((err) => console.error('rl refund failed', err));
    throw e;
  }

  if (!dispatchRes.ok) {
    if (charged) await refundRateWindow(env, ip).catch((e) => console.error('rl refund failed', e));
    const text = await dispatchRes.text();
    return json(
      { error: 'github workflow_dispatch failed', status: dispatchRes.status, detail: text.slice(0, 500) },
      502
    );
  }

  const token = await signToken(env, requestId, Date.now());
  return json({ request_id: requestId, token, state: 'queued' });
}

// Rate-limit window record: {start: ms epoch, count}. A missing, expired or
// unparsable record starts a fresh window now. The KV entry expires at window
// end (the old code re-put expirationTtl:3600 on every hit, so a steady user's
// window never closed).
//
// Concurrency. KV has no atomic increment, so the authoritative check-and-
// increment runs on an in-isolate mirror (rlMirror) with NO await between the
// check and the increment: concurrent requests from one IP that land on the
// same isolate (the usual case for a burst from one client) are serialised
// exactly — a 30-request burst dispatches RL_MAX runs, not 30. KV carries the
// count across isolates/colos and restarts; the mirror merges it (max) on
// every charge.
//
// Residual risk, accepted for an abuse brake: requests from one IP hitting
// DIFFERENT isolates or colos concurrently can each see a stale KV value
// (KV is eventually consistent, up to ~60 s across locations, and last write
// wins), so such a burst can overshoot RL_MAX by roughly the number of
// isolates involved. Exact global limiting would need a Durable Object (not
// configured for this Worker; adding one requires an account-side change).
const rlMirror = new Map(); // ip -> {start, count}

async function readRateWindow(env, key) {
  const now = Date.now();
  let rec = null;
  try { rec = JSON.parse((await env.RATE_LIMIT.get(key)) || 'null'); } catch { rec = null; }
  if (!rec || typeof rec.start !== 'number' || now - rec.start >= RL_WINDOW_MS) {
    return { start: now, count: 0 };
  }
  return { start: rec.start, count: Number(rec.count) || 0 };
}

async function writeRateWindow(env, key, rec) {
  // Expire at window end (KV wants >= 60 s in the future). A failed write
  // (e.g. KV's 1 write/s/key limit during a burst) is logged, not fatal: the
  // in-isolate mirror still enforces the limit, KV just lags.
  const end = Math.floor((rec.start + RL_WINDOW_MS) / 1000);
  const minExp = Math.floor(Date.now() / 1000) + 60;
  try {
    await env.RATE_LIMIT.put(key, JSON.stringify(rec), { expiration: Math.max(end, minExp) });
  } catch (e) {
    console.error('rate-limit KV write failed', e);
  }
}

function liveWindow(rec, now) {
  return rec && now - rec.start < RL_WINDOW_MS ? rec : null;
}

// Charge one build to this IP's window. Returns {ok, start}.
async function chargeRateWindow(env, ip) {
  const key = `rl:${ip}`;
  const kv = await readRateWindow(env, key);
  // ---- synchronous from here until the put is issued ----
  const now = Date.now();
  let rec = liveWindow(rlMirror.get(ip), now);
  if (!rec) {
    rec = { start: kv.start, count: kv.count };
    rlMirror.set(ip, rec);
    if (rlMirror.size > 5000) { // bound memory: drop closed windows
      for (const [k, v] of rlMirror) if (!liveWindow(v, now)) rlMirror.delete(k);
    }
  } else if (kv.count > 0) {
    // Fold in charges other isolates made (KV), keeping our own.
    rec.start = Math.min(rec.start, kv.start);
    rec.count = Math.max(rec.count, kv.count);
  }
  if (rec.count >= RL_MAX) return { ok: false, start: rec.start };
  rec.count++;
  await writeRateWindow(env, key, { start: rec.start, count: rec.count });
  return { ok: true, start: rec.start };
}

// Give back the slot charged by chargeRateWindow (dispatch failed).
async function refundRateWindow(env, ip) {
  const rec = liveWindow(rlMirror.get(ip), Date.now());
  if (!rec || rec.count <= 0) return;
  rec.count--;
  await writeRateWindow(env, `rl:${ip}`, { start: rec.start, count: rec.count });
}

// ---------------------------------------------------------------------------
// Request tokens: "<issuedMs>.<base64url HMAC-SHA256(TOKEN_SECRET, requestId.issuedMs)>"

function tokenSecretMissing() {
  return json(
    { error: 'compile service misconfigured: TOKEN_SECRET is not set (wrangler secret put TOKEN_SECRET)' },
    503
  );
}

async function hmacKey(env) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(env.TOKEN_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

async function signToken(env, requestId, issuedMs) {
  const key = await hmacKey(env);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${requestId}.${issuedMs}`));
  return `${issuedMs}.${base64UrlEncode(new Uint8Array(sig))}`;
}

// Returns the token's issue time (ms) if valid for this requestId, else null.
// crypto.subtle.verify does the constant-time comparison.
async function verifyToken(env, requestId, token) {
  if (typeof token !== 'string') return null;
  const m = /^(\d{10,16})\.([A-Za-z0-9_-]{20,})$/.exec(token);
  if (!m) return null;
  const issuedMs = Number(m[1]);
  if (!(Date.now() - issuedMs < TOKEN_TTL_MS) || issuedMs > Date.now() + 60_000) return null;
  let sig;
  try {
    sig = base64ToBytes(m[2].replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (m[2].length % 4)) % 4));
  } catch {
    return null;
  }
  const key = await hmacKey(env);
  const ok = await crypto.subtle.verify('HMAC', key, sig, new TextEncoder().encode(`${requestId}.${issuedMs}`));
  return ok ? issuedMs : null;
}

const REQUEST_ID_RE = /^[0-9a-fA-F-]{8,64}$/;

// Common gate for /status and /firmware. Returns {requestId, issuedMs} or a Response.
async function authorizeRequest(url, env) {
  if (!env.TOKEN_SECRET) return tokenSecretMissing();
  const requestId = url.searchParams.get('id') || url.searchParams.get('request_id');
  if (!requestId || !REQUEST_ID_RE.test(requestId)) return json({ error: 'id param required' }, 400);
  const issuedMs = await verifyToken(env, requestId, url.searchParams.get('token'));
  if (issuedMs === null) return json({ error: 'invalid or expired token' }, 403);
  return { requestId, issuedMs };
}

// The workflow's run-name is "onstepx-build req=<uuid> env=<env> project=<p>".
// Runs list `name` and `display_title` both carry it; match either.
function runMatches(run, requestId) {
  const needle = `req=${requestId}`;
  return (typeof run.name === 'string' && run.name.includes(needle)) ||
    (typeof run.display_title === 'string' && run.display_title.includes(needle));
}

// ---------------------------------------------------------------------------

// In-isolate caches. Each Worker isolate has its own; that's fine — they only
// exist to collapse bursts of polling into one GitHub call.
let runsCache = null;              // { at: ms, runs: [...] }
const finalStatusCache = new Map(); // requestId -> { at: ms, body }
const statusIpHits = new Map();     // ip -> { start: ms, count }
const runIdByRequest = new Map();   // requestId -> run id (see findRun)

function statusIpAllowed(ip) {
  const now = Date.now();
  const rec = statusIpHits.get(ip);
  if (!rec || now - rec.start >= 60_000) {
    statusIpHits.set(ip, { start: now, count: 1 });
    if (statusIpHits.size > 5000) { // bound memory: drop expired entries
      for (const [k, v] of statusIpHits) if (now - v.start >= 60_000) statusIpHits.delete(k);
    }
    return true;
  }
  rec.count++;
  return rec.count <= STATUS_IP_MAX;
}

// GitHub's date-range qualifier wants whole-second ISO timestamps.
function isoSec(ms) {
  return new Date(ms).toISOString().replace(/\.\d{3}Z$/, 'Z');
}

async function listRecentRuns(env) {
  if (runsCache && Date.now() - runsCache.at < RUNS_CACHE_MS) return runsCache.runs;
  const runsRes = await ghFetch(
    env,
    `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/workflows/${WORKFLOW_FILE}/runs?event=workflow_dispatch&per_page=${RUNS_PER_PAGE}`
  );
  if (!runsRes.ok) {
    const err = new Error('github api error');
    err.status = runsRes.status;
    throw err;
  }
  const runsData = await runsRes.json();
  runsCache = { at: Date.now(), runs: runsData.workflow_runs || [] };
  return runsCache.runs;
}

function rememberRunId(requestId, runId) {
  runIdByRequest.set(requestId, runId);
  if (runIdByRequest.size > 2000) runIdByRequest.delete(runIdByRequest.keys().next().value);
}

function ghApiError(status) {
  const err = new Error('github api error');
  err.status = status;
  return err;
}

// Find the run whose run-name carries requestId. Returns the run or null.
// The shared listing (newest RUNS_PER_PAGE dispatches, cached RUNS_CACHE_MS)
// answers almost every poll. When it doesn't contain our run but is full and
// doesn't reach back to our dispatch time, the run may simply have been pushed
// off the first page by newer dispatches (busy service / burst) — then look it
// up directly: by run id if this isolate already saw it, else by a runs query
// restricted to the creation window around the token's issue time. Only a
// miss on that is reported as "not there" (-> queued / never_started).
async function findRun(env, requestId, issuedMs) {
  const runs = await listRecentRuns(env);
  const hit = runs.find((r) => runMatches(r, requestId));
  if (hit) {
    rememberRunId(requestId, hit.id);
    return hit;
  }

  const knownId = runIdByRequest.get(requestId);
  if (knownId) {
    const r = await ghFetch(env, `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/runs/${knownId}`);
    if (r.ok) {
      const run = await r.json();
      if (runMatches(run, requestId)) return run;
    } else if (r.status !== 404) {
      throw ghApiError(r.status);
    }
  }

  const windowStart = issuedMs - CREATED_BEFORE_MS;
  if (runs.length < RUNS_PER_PAGE) return null; // listing is complete
  const oldest = Date.parse(runs[runs.length - 1].created_at);
  if (oldest < windowStart) return null;        // listing reaches back past our dispatch

  const created = `${isoSec(windowStart)}..${isoSec(issuedMs + CREATED_AFTER_MS)}`;
  for (let page = 1; page <= TARGETED_MAX_PAGES; page++) {
    const r = await ghFetch(
      env,
      `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/workflows/${WORKFLOW_FILE}/runs` +
        `?event=workflow_dispatch&per_page=${RUNS_PER_PAGE}&page=${page}&created=${encodeURIComponent(created)}`
    );
    if (!r.ok) throw ghApiError(r.status);
    const pageRuns = (await r.json()).workflow_runs || [];
    const run = pageRuns.find((x) => runMatches(x, requestId));
    if (run) {
      rememberRunId(requestId, run.id);
      return run;
    }
    if (pageRuns.length < RUNS_PER_PAGE) break;
  }
  return null;
}

async function handleStatus(request, url, env) {
  const ip = request.headers.get('CF-Connecting-IP') || 'anon';
  if (!statusIpAllowed(ip)) return json({ error: 'too many status requests — slow down' }, 429);

  const auth = await authorizeRequest(url, env);
  if (auth instanceof Response) return auth;
  const { requestId, issuedMs } = auth;

  const cached = finalStatusCache.get(requestId);
  if (cached && Date.now() - cached.at < FINAL_CACHE_MS) return json(cached.body);

  // Find the run whose run-name carries our request_id.
  let run;
  try {
    run = await findRun(env, requestId, issuedMs);
  } catch (e) {
    return json({ error: 'github api error', status: e.status || 0 }, 502);
  }

  if (!run) {
    if (Date.now() - issuedMs > NEVER_STARTED_MS) {
      return json({
        request_id: requestId,
        state: 'never_started',
        detail: 'GitHub accepted the dispatch but no workflow run appeared — GitHub Actions queue/dispatch issue.',
      });
    }
    return json({ state: 'queued', request_id: requestId });
  }

  // status: queued | in_progress | completed
  // conclusion (only when completed): success | failure | cancelled | skipped | ...
  const body = {
    request_id: requestId,
    state: run.status,
    conclusion: run.conclusion,
    run_id: run.id,
    html_url: run.html_url,
  };
  if (run.status === 'completed') {
    let cacheable = true;
    if (run.conclusion === 'failure') {
      let failure;
      try {
        failure = await fetchFailureLines(env, run.id);
      } catch (e) {
        console.error('failure-log fetch failed', e);
        failure = { readable: false, lines: [] };
      }
      body.error_lines = failure.lines;
      if (!failure.readable) {
        // GitHub can lag a few seconds behind the conclusion before the job
        // log is downloadable. Tell the client to poll again, and don't cache
        // so that poll retries the log. A log that WAS read but had no
        // matching lines is final and cached (no repeated log downloads).
        body.logs_pending = true;
        cacheable = false;
      }
    }
    if (cacheable) finalStatusCache.set(requestId, { at: Date.now(), body });
    if (finalStatusCache.size > 500) {
      const now = Date.now();
      for (const [k, v] of finalStatusCache) if (now - v.at >= FINAL_CACHE_MS) finalStatusCache.delete(k);
    }
  }
  return json(body);
}

// Pull the failed job's log and keep just the lines that explain the failure
// (compiler errors, #error, link errors, our own ::error:: annotations).
// Returns {readable, lines}: readable=false when the log couldn't be fetched
// (yet) — the caller then reports logs_pending instead of a final empty list.
async function fetchFailureLines(env, runId) {
  const pending = { readable: false, lines: [] };
  const jobsRes = await ghFetch(env, `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/runs/${runId}/jobs`);
  if (!jobsRes.ok) return pending;
  const jobs = (await jobsRes.json()).jobs || [];
  const job = jobs.find((j) => j.conclusion === 'failure') || jobs[0];
  if (!job) return pending;

  // Like the artifact zip: a 302 to a signed URL that must be fetched WITHOUT
  // GitHub's Authorization header.
  const token = await getAuthToken(env);
  const redirectRes = await fetch(
    `https://api.github.com/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/jobs/${job.id}/logs`,
    {
      method: 'GET',
      redirect: 'manual',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'onstepx-build-bridge',
      },
    }
  );
  let logText;
  if (redirectRes.status === 302) {
    const loc = redirectRes.headers.get('Location');
    if (!loc) return pending;
    const logRes = await fetch(loc);
    if (!logRes.ok) return pending;
    logText = await logRes.text();
  } else if (redirectRes.ok) {
    logText = await redirectRes.text();
  } else {
    return pending;
  }
  return { readable: true, lines: extractErrorLines(logText) };
}

// Config.h symbols whose values must never be echoed back (WiFi credentials,
// keys). Matched case-insensitively against a diagnostic and its context.
const CREDENTIAL_RE = /PASS|PWD|SSID|PSK|WIFI|SECRET|TOKEN/i;
const DIAG_RE = /error:|#error|\bError\b|undefined reference/;
// Start of the NEXT diagnostic (ends the current one's context block).
const NEXT_DIAG_RE = /(error|warning):|^In file included from|^In function|^Compiling |^##\[/;
const CONTEXT_LINES = 8;

// Redact every value on a line belonging to a credential diagnostic:
// "…", '…' and gcc's UTF-8 ‘…’ quotes, and whatever follows `#define NAME`.
// A quoted bare macro name that itself names a credential ('STA_PASSWORD')
// is kept — it's the useful part of the message, not a secret.
function redactCredentialLine(line) {
  const keepName = (q, open, inner, close) =>
    (/^[A-Z][A-Z0-9_]*$/.test(inner) && CREDENTIAL_RE.test(inner)) ? q : `${open}***${close}`;
  return line
    .replace(/(define\s+\w+\s+).*$/, '$1***')
    .replace(/(")([^"]*)(")/g, keepName)
    .replace(/(')([^']*)(')/g, keepName)
    .replace(/(‘)([^’]*)(’)/g, keepName);
}

function extractErrorLines(logText) {
  // Strip Actions' "2025-01-01T12:34:56.1234567Z " prefix.
  const lines = logText.split(/\r?\n/).map((l) =>
    l.replace(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z\s?/, '').trimEnd());
  const out = [];
  const seen = new Set();
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (!DIAG_RE.test(line)) continue;
    // Never echo credentials: compiler diagnostics can quote Config.h values.
    // gcc often reports a bad macro value with no credential keyword on the
    // error line itself, naming the macro only in the context that follows:
    //   Config.h:40:30: error: 'hunter2' was not declared in this scope
    //      40 | #define STA_PASSWORD hunter2
    //   src/Net.cpp:10:3: note: in expansion of macro 'STA_PASSWORD'
    // so the source excerpts and "in expansion of / in definition of macro"
    // notes up to the next diagnostic make the error line sensitive too.
    let sensitive = CREDENTIAL_RE.test(line);
    for (let j = i + 1; !sensitive && j < lines.length && j <= i + CONTEXT_LINES; j++) {
      if (NEXT_DIAG_RE.test(lines[j])) break;
      if (CREDENTIAL_RE.test(lines[j])) sensitive = true;
    }
    if (sensitive) line = redactCredentialLine(line);
    if (line.length > 300) line = line.slice(0, 300) + '…';
    if (seen.has(line)) continue;
    seen.add(line);
    out.push(line);
    if (out.length >= MAX_ERROR_LINES) break;
  }
  return out;
}

// ---------------------------------------------------------------------------

async function handleFirmware(url, env) {
  const auth = await authorizeRequest(url, env);
  if (auth instanceof Response) return auth;
  const { requestId } = auth;

  const runId = url.searchParams.get('run_id');
  if (!runId || !/^\d+$/.test(runId)) return json({ error: 'run_id param required' }, 400);

  // The run must be the one this token's request_id dispatched — otherwise a
  // valid token for one build could fetch any other run's firmware.
  const runRes = await ghFetch(env, `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/runs/${runId}`);
  if (runRes.status === 404) return json({ error: 'run not found' }, 404);
  if (!runRes.ok) return json({ error: 'github api error', status: runRes.status }, 502);
  if (!runMatches(await runRes.json(), requestId)) {
    return json({ error: 'run does not belong to this request' }, 403);
  }

  const artRes = await ghFetch(env, `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/runs/${runId}/artifacts`);
  if (!artRes.ok) return json({ error: 'github api error', status: artRes.status }, 502);
  const artData = await artRes.json();
  // The workflow names the artifact firmware-<request_id>.
  const artifact = (artData.artifacts || []).find((a) => a.name === `firmware-${requestId}`);
  if (!artifact) return json({ error: 'no firmware artifact on this run' }, 404);

  // GitHub's artifact /zip endpoint returns a 302 to a short-lived pre-signed
  // Azure Storage URL. We MUST follow manually and drop the Authorization
  // header on the redirect — Azure rejects the request if GitHub's token is
  // presented there.
  const token = await getAuthToken(env);
  const redirectRes = await fetch(
    `https://api.github.com/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/artifacts/${artifact.id}/zip`,
    {
      method: 'GET',
      redirect: 'manual',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'onstepx-build-bridge',
      },
    }
  );

  if (redirectRes.status !== 302) {
    const text = await redirectRes.text().catch(() => '');
    return json(
      { error: 'expected 302 from artifact zip endpoint', status: redirectRes.status, detail: text.slice(0, 300) },
      502
    );
  }

  const signedUrl = redirectRes.headers.get('Location');
  if (!signedUrl) return json({ error: 'no Location header on 302' }, 502);

  const zipRes = await fetch(signedUrl); // no auth header — Azure uses URL-signed auth

  if (!zipRes.ok) {
    const text = await zipRes.text().catch(() => '');
    return json(
      { error: 'signed artifact download failed', status: zipRes.status, detail: text.slice(0, 300) },
      502
    );
  }

  return new Response(zipRes.body, {
    status: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="firmware-${runId}.zip"`,
    },
  });
}

// ---------------------------------------------------------------------------

async function ghFetch(env, path, init = {}) {
  const token = await getAuthToken(env);
  return fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'onstepx-build-bridge',
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
}

// ---------------------------------------------------------------------------
// Auth: GitHub App (preferred) or Personal Access Token (fallback)
// ---------------------------------------------------------------------------
//
// GitHub App mode mints a fresh installation token each hour using a JWT
// signed with the App's PKCS#8 RSA private key. Tokens are cached in the
// isolate's module scope until 5 minutes before expiry. Each Worker isolate
// holds its own cache; cross-isolate duplication just means a few extra
// token mints per hour, well within GitHub's 5000/hr installation quota.
//
// PAT mode is the legacy path — used iff App secrets aren't all configured.

let cachedInstallationToken = null; // { token: string, expiresAt: number (ms) }

function isAppMode(env) {
  return Boolean(env.GH_APP_ID && env.GH_APP_PRIVATE_KEY && env.GH_APP_INSTALLATION_ID);
}

async function getAuthToken(env) {
  if (isAppMode(env)) {
    return await getInstallationToken(env);
  }
  if (!env.GITHUB_TOKEN) {
    throw new Error(
      'No GitHub auth configured. Set either GH_APP_ID + GH_APP_PRIVATE_KEY + ' +
      'GH_APP_INSTALLATION_ID (App mode) or GITHUB_TOKEN (PAT mode) via wrangler secret put.'
    );
  }
  return env.GITHUB_TOKEN;
}

async function getInstallationToken(env) {
  // Reuse cached token until 5 minutes before its expiry
  const now = Date.now();
  if (cachedInstallationToken && cachedInstallationToken.expiresAt - 5 * 60 * 1000 > now) {
    return cachedInstallationToken.token;
  }
  const jwt = await mintAppJWT(env.GH_APP_ID, env.GH_APP_PRIVATE_KEY);
  const res = await fetch(
    `https://api.github.com/app/installations/${encodeURIComponent(env.GH_APP_INSTALLATION_ID)}/access_tokens`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'onstepx-build-bridge',
      },
    }
  );
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`GitHub App installation token request failed (${res.status}): ${detail.slice(0, 300)}`);
  }
  const data = await res.json();
  cachedInstallationToken = {
    token: data.token,
    expiresAt: Date.parse(data.expires_at),
  };
  return data.token;
}

// JWT for GitHub App auth — RS256 signed with the App's private key.
// Spec: https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app
async function mintAppJWT(appId, privateKeyPem) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iat: now - 60,            // 60s clock-skew tolerance
    exp: now + 9 * 60,        // GitHub max is 10 min; we use 9 min for safety
    iss: String(appId),
  };
  const headerB64 = base64UrlEncode(new TextEncoder().encode(JSON.stringify(header)));
  const payloadB64 = base64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const signingInput = `${headerB64}.${payloadB64}`;
  const key = await importPkcs8PrivateKey(privateKeyPem);
  const signature = await crypto.subtle.sign(
    { name: 'RSASSA-PKCS1-v1_5' },
    key,
    new TextEncoder().encode(signingInput)
  );
  return `${signingInput}.${base64UrlEncode(new Uint8Array(signature))}`;
}

async function importPkcs8PrivateKey(pem) {
  // Accept either PKCS#8 ("BEGIN PRIVATE KEY") — required.
  // GitHub serves PKCS#1 ("BEGIN RSA PRIVATE KEY") by default; user must convert
  // with `openssl pkcs8 -topk8 -nocrypt -in raw.pem -out app.pem` before upload.
  if (!pem.includes('BEGIN PRIVATE KEY')) {
    throw new Error(
      'GH_APP_PRIVATE_KEY must be in PKCS#8 PEM ("BEGIN PRIVATE KEY"). ' +
      'GitHub gives PKCS#1 by default — convert with: ' +
      'openssl pkcs8 -topk8 -nocrypt -in raw.pem -out app.pem'
    );
  }
  const b64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s+/g, '');
  const der = base64ToBytes(b64);
  return crypto.subtle.importKey(
    'pkcs8',
    der,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
}

// base64 string -> Uint8Array (atob handles standard base64)
function base64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

// Uint8Array -> base64url (no padding, +/_ -> -_)
function base64UrlEncode(input) {
  let bin = '';
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/=+$/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

// ---------------------------------------------------------------------------
// /auth-info — diagnostic endpoint, no secret leakage. Useful when verifying
// the GitHub App rollout: hit it before/after `wrangler secret put` to see
// the mode flip from "pat" to "github-app".
async function handleAuthInfo(env) {
  if (isAppMode(env)) {
    let expiresAt = null;
    let error = null;
    try {
      // Force a token mint so we can report its expiry — useful smoke test
      await getInstallationToken(env);
      expiresAt = cachedInstallationToken
        ? new Date(cachedInstallationToken.expiresAt).toISOString()
        : null;
    } catch (e) {
      error = String(e.message || e);
    }
    return json({
      mode: 'github-app',
      app_id: String(env.GH_APP_ID),
      installation_id: String(env.GH_APP_INSTALLATION_ID),
      installation_token_expires_at: expiresAt,
      token_secret_set: Boolean(env.TOKEN_SECRET),
      error,
    });
  }
  return json({
    mode: 'pat',
    pat_set: Boolean(env.GITHUB_TOKEN),
    token_secret_set: Boolean(env.TOKEN_SECRET),
    note: 'Switch to GitHub App mode by setting GH_APP_ID + GH_APP_PRIVATE_KEY + GH_APP_INSTALLATION_ID.',
  });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function withCors(res, cors) {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(cors)) headers.set(k, v);
  return new Response(res.body, { status: res.status, headers });
}

// Build CORS headers per request. Echoes back the request Origin if it matches
// an allowlist (prod GitHub Pages origin from env, plus localhost/127.0.0.1 on
// any port for local dev). Falls back to the production origin so legitimate
// no-Origin requests (e.g., curl) keep working.
function buildCorsHeaders(request, env) {
  const prodOrigin = env.ALLOWED_ORIGIN || 'https://christm45.github.io';
  const reqOrigin = request.headers.get('Origin') || '';
  const allowed =
    reqOrigin === prodOrigin ||
    /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(reqOrigin);
  return {
    'Access-Control-Allow-Origin': allowed && reqOrigin ? reqOrigin : prodOrigin,
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function b64encodeUtf8(s) {
  // btoa can't handle multi-byte UTF-8 directly; encode first.
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
