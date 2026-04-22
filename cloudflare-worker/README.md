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

3. Create a fine-grained GitHub Personal Access Token:
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

4. (Optional) Enable rate limiting:
   ```bash
   wrangler kv:namespace create RATE_LIMIT
   # paste the returned id into wrangler.toml under [[kv_namespaces]]
   ```

5. Deploy:
   ```bash
   wrangler deploy
   ```

6. Note the deployed URL (something like
   `https://onstepx-build-bridge.<your-subdomain>.workers.dev`).
   Put this URL in `compile.js` in the configurator repo as `WORKER_URL`.

## Endpoints

- `POST /compile` — body `{config, board, ref?, project?}` → `{request_id}`
  - `project`: `'onstepx'` (default) or `'shc'`. Picks `hjd1964/OnStepX`
    vs `hjd1964/SmartHandController` as the upstream source.
  - `board`: PlatformIO env. OnStepX: `esp32 | teensy40 | teensy41 |
    blackpill_f411`. SHC: `shc_esp32 | shc_teensy40 | shc_teensy32`.
  - `ref`: branch / tag / commit SHA of the chosen project (default `'main'`).
- `GET /status?id=<request_id>` → `{state, run_id?, conclusion?}`
- `GET /firmware?run_id=<run_id>` → `application/zip`

## Local dev

```bash
wrangler dev
```
Then hit `http://localhost:8787/`.
