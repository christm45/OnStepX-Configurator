# OnStepX Build Bridge — Cloudflare Worker

Bridges the browser configurator to the `onstepx-build-service` GitHub Actions
workflow. Accepts a Config.h + board, triggers the workflow, reports status,
and proxies the firmware artifact back to the browser.

## Deploy

1. Install wrangler and log in:
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. Edit `wrangler.toml` and set `BUILD_OWNER`, `BUILD_REPO`, `ALLOWED_ORIGIN`
   to match your setup.

3. GitHub credentials. **Production: GitHub App** — follow
   [`GITHUB_APP_SETUP.md`](GITHUB_APP_SETUP.md) and set `GH_APP_ID`,
   `GH_APP_PRIVATE_KEY`, `GH_APP_INSTALLATION_ID`. Fallback (used only when
   those three aren't all set) — a fine-grained Personal Access Token:
   - GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token
   - **Repository access**: only the build-service repo
   - **Repository permissions**:
     - *Actions*: Read and write
     - *Contents*: Read-only
     - *Metadata*: Read-only (required)
   - Expiration: whatever you're comfortable with (90 days is fine)
   - Copy the token. Then:
   ```bash
   wrangler secret put GITHUB_TOKEN
   # paste the token when prompted
   ```

4. Set the token-signing secret (**required** — fail-closed, `/compile`,
   `/status` and `/firmware` answer 503 without it):
   ```bash
   openssl rand -hex 32 | wrangler secret put TOKEN_SECRET
   ```

5. Rate-limit KV namespace (**required**; already bound in `wrangler.toml` —
   only needed on a fresh account):
   ```bash
   wrangler kv namespace create RATE_LIMIT
   # paste the returned id into wrangler.toml under [[kv_namespaces]]
   ```

6. Deploy (AFTER the site version that sends the token is live and the Pages cache
   has expired, ~10 min — an old cached page against the new Worker gets 403 at /status):
   ```bash
   wrangler deploy
   ```

7. Note the deployed URL (something like
   `https://onstepx-build-bridge.<your-subdomain>.workers.dev`).
   Put this URL in `compile.js` in the configurator repo as `WORKER_URL`.

## Endpoints

- `POST /compile` — body `{config, board, ref?, project?, plugins?}` →
  `{request_id, token, state: 'queued'}`
  - `project`: `'onstepx'` (default), `'shc'` or `'sws'`. Picks
    `hjd1964/OnStepX`, `hjd1964/SmartHandController` or
    `hjd1964/SmartWebServer` as the upstream source; must match the board
    prefix (`shc_*` → shc, `sws_*` → sws, everything else → onstepx).
  - `board`: PlatformIO env (`ALLOWED_BOARDS` in `worker.js`).
    OnStepX: `esp32 | teensy32 | teensy40 | teensy41 | blackpill_f411 |
    f446_fysetc_s6 | skr_pro_f407`. SHC: `shc_esp32 | shc_teensy40`
    (Teensy 3.2 dropped: current SHC overflows its 256 KB flash). SWS: `sws_esp32 | sws_esp8266`.
  - `ref`: branch / tag / commit SHA of the chosen project (default `'main'`).
  - `plugins`: OnStepX only — array from `website, elegantota, metrics,
    serialBluetoothConfig, guideRateRheostat, usb`.
  - Rate limit: 10 dispatches/hour/IP (fixed window). Charged before the
    dispatch, refunded if it fails. Exact within one isolate (in-memory
    check-and-increment); KV carries the count across isolates but is
    eventually consistent, so a burst spread over several isolates/colos can
    overshoot. Exact global limiting would need a Durable Object (not used).
- `GET /status?id=<request_id>&token=<token>` →
  `{state, run_id?, conclusion?, html_url?, error_lines?, logs_pending?}`
  - `state`: `queued | in_progress | completed`, or `never_started` when no
    run carrying the request_id appeared within 3 min of dispatch. Runs are
    looked up in the newest 100 dispatches; if the run was pushed off that
    page, by its remembered run id or a runs query limited to the token's
    creation window.
  - `error_lines`: on `conclusion: failure`, up to 30 compiler/`#error`/link
    error lines scraped from the failed job's log. On lines whose diagnostic
    (incl. following source excerpt / "in expansion of macro" notes) mentions
    PASS/PWD/SSID/PSK/WIFI/SECRET/TOKEN, every quoted value and `#define`
    value is replaced by `***`.
  - `logs_pending: true`: failed, but the job log wasn't downloadable yet —
    poll again (compile.js retries up to 4 × 5 s). Not cached.
  - Cached a few seconds per isolate; 60 calls/min/IP per isolate.
- `GET /firmware?run_id=<run_id>&id=<request_id>&token=<token>` →
  `application/zip`. Refused unless the run's name carries that request_id.
  This only stops the *Worker* from serving another user's build: the
  build-service repo is public, so GitHub itself serves its run logs to anyone
  and its artifacts (firmware with the user's WiFi credentials) to any
  signed-in GitHub user until they expire. Making the build repo private is
  the real fix (costs Actions minutes).
- `GET /auth-info` → auth mode diagnostics (no secrets).

The token is `<issued-ms>.<HMAC-SHA256(TOKEN_SECRET, "<request_id>.<issued-ms>")>`,
valid 24 h. Runs are matched by `req=<request_id>` in the run name / display
title, which the workflow sets as
`onstepx-build req=<uuid> env=<env> project=<project>`.

## Local dev

```bash
wrangler dev
```
Then hit `http://localhost:8787/`.
