// OnStepX build-service bridge — Cloudflare Worker
//
// Endpoints (all CORS-enabled for the configurator origin):
//   POST /compile      {config, board}  -> {request_id}
//   GET  /status?id=…                   -> {state, run_id?, conclusion?}
//   GET  /firmware?run_id=…             -> application/zip (artifact, proxied)
//
// Env vars / secrets required (set via `wrangler secret put` / wrangler.toml):
//   GITHUB_TOKEN  — fine-grained PAT with Actions:write + Contents:read on BUILD_REPO
//   BUILD_OWNER   — GitHub username or org owning the build-service repo
//   BUILD_REPO    — name of the build-service repo (e.g. onstepx-build-service)
//   ALLOWED_ORIGIN — the Pages origin (e.g. https://christm45.github.io)
//
// Optional:
//   RATE_LIMIT    — a KV namespace binding; if present, enforces 10 builds/hr/IP

const ALLOWED_BOARDS = new Set(['esp32', 'teensy40', 'teensy41', 'blackpill_f411']);
const MAX_CONFIG_BYTES = 200_000;
const WORKFLOW_FILE = 'build.yml';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = env.ALLOWED_ORIGIN || 'https://christm45.github.io';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    try {
      if (request.method === 'POST' && url.pathname === '/compile') {
        return withCors(await handleCompile(request, env), cors);
      }
      if (request.method === 'GET' && url.pathname === '/status') {
        return withCors(await handleStatus(url, env), cors);
      }
      if (request.method === 'GET' && url.pathname === '/firmware') {
        return withCors(await handleFirmware(url, env), cors);
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
  const onstepxRef = (body.ref || 'main').toString();
  if (typeof config !== 'string' || !config.length) {
    return json({ error: 'config missing' }, 400);
  }
  if (!ALLOWED_BOARDS.has(board)) {
    return json({ error: `board must be one of ${[...ALLOWED_BOARDS].join(', ')}` }, 400);
  }
  if (new TextEncoder().encode(config).length > MAX_CONFIG_BYTES) {
    return json({ error: 'config too large' }, 413);
  }
  // Same charset the workflow enforces — reject shell-unsafe refs at the edge.
  if (!/^[A-Za-z0-9._/-]{1,64}$/.test(onstepxRef)) {
    return json({ error: 'ref contains disallowed characters' }, 400);
  }

  // Optional rate limiting
  if (env.RATE_LIMIT) {
    const ip = request.headers.get('CF-Connecting-IP') || 'anon';
    const key = `rl:${ip}`;
    const current = parseInt((await env.RATE_LIMIT.get(key)) || '0', 10);
    if (current >= 10) {
      return json({ error: 'rate limit: max 10 builds/hour' }, 429);
    }
    await env.RATE_LIMIT.put(key, String(current + 1), { expirationTtl: 3600 });
  }

  const requestId = crypto.randomUUID();
  const configB64 = b64encodeUtf8(config);

  // workflow_dispatch input hard limit is 65535 chars
  if (configB64.length > 65000) {
    return json({ error: 'config (base64) exceeds workflow_dispatch input limit' }, 413);
  }

  const dispatchRes = await ghFetch(
    env,
    `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/workflows/${WORKFLOW_FILE}/dispatches`,
    {
      method: 'POST',
      body: JSON.stringify({
        ref: 'main', // which branch of the BUILD-SERVICE repo runs the workflow
        inputs: {
          config_h: configB64,
          environment: board,
          request_id: requestId,
          onstepx_ref: onstepxRef, // which ref of hjd1964/OnStepX to compile
        },
      }),
    }
  );

  if (!dispatchRes.ok) {
    const text = await dispatchRes.text();
    return json(
      { error: 'github workflow_dispatch failed', status: dispatchRes.status, detail: text.slice(0, 500) },
      502
    );
  }

  return json({ request_id: requestId, state: 'queued' });
}

// ---------------------------------------------------------------------------

async function handleStatus(url, env) {
  const requestId = url.searchParams.get('id') || url.searchParams.get('request_id');
  if (!requestId) return json({ error: 'id param required' }, 400);

  // Find the run whose run-name contains our request_id.
  // The workflow sets: run-name: "onstepx-build req=<uuid> env=<env>"
  const runsRes = await ghFetch(
    env,
    `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/workflows/${WORKFLOW_FILE}/runs?event=workflow_dispatch&per_page=30`
  );
  if (!runsRes.ok) return json({ error: 'github api error', status: runsRes.status }, 502);
  const runsData = await runsRes.json();

  const run = (runsData.workflow_runs || []).find(
    (r) => typeof r.name === 'string' && r.name.includes(requestId)
  );

  if (!run) {
    return json({ state: 'queued', request_id: requestId });
  }

  // status: queued | in_progress | completed
  // conclusion (only when completed): success | failure | cancelled | skipped | ...
  return json({
    request_id: requestId,
    state: run.status,
    conclusion: run.conclusion,
    run_id: run.id,
    html_url: run.html_url,
  });
}

// ---------------------------------------------------------------------------

async function handleFirmware(url, env) {
  const runId = url.searchParams.get('run_id');
  if (!runId || !/^\d+$/.test(runId)) return json({ error: 'run_id param required' }, 400);

  const artRes = await ghFetch(env, `/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/runs/${runId}/artifacts`);
  if (!artRes.ok) return json({ error: 'github api error', status: artRes.status }, 502);
  const artData = await artRes.json();
  const artifact = (artData.artifacts || []).find((a) => a.name.startsWith('firmware-'));
  if (!artifact) return json({ error: 'no firmware artifact on this run' }, 404);

  // Artifact zip download URL requires auth and redirects to a pre-signed URL.
  const zipRes = await fetch(
    `https://api.github.com/repos/${env.BUILD_OWNER}/${env.BUILD_REPO}/actions/artifacts/${artifact.id}/zip`,
    {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'onstepx-build-bridge',
      },
      redirect: 'follow',
    }
  );

  if (!zipRes.ok) {
    return json({ error: 'artifact download failed', status: zipRes.status }, 502);
  }

  // Stream the zip straight through to the browser.
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
  return fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'onstepx-build-bridge',
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
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

function b64encodeUtf8(s) {
  // btoa can't handle multi-byte UTF-8 directly; encode first.
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
