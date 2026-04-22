# Setting up the online compile + flash service

**Current deployed state** (as of 2026-04-22):

| Piece | Status | Location |
|---|---|---|
| Frontend | ✅ live | https://christm45.github.io/OnStepX-Configurator/ |
| Build service | ✅ live | https://github.com/christm45/onstepx-build-service |
| Cloudflare Worker | ✅ live | https://onstepx-build-bridge.craciun-vlad.workers.dev |
| End-to-end pipeline | ✅ verified | ESP32 build + merged-firmware.bin download |

This doc describes how the three pieces were set up, so you can redeploy or
replicate on another account.

The backend has two pieces:

1. **`onstepx-build-service`** — a separate GitHub repo that runs PlatformIO
   in GitHub Actions. (Free: uses your Actions minutes on a public repo.)
2. **`onstepx-build-bridge`** — a Cloudflare Worker that takes requests from
   the browser and triggers the GitHub workflow. (Free tier is plenty.)

The frontend (this repo) only needs one line updated in `compile.js` to point
at the deployed Worker.

Once all three are live:

```
browser (index.html)  --POST /compile-->  Cloudflare Worker  --workflow_dispatch-->  GitHub Actions
         ^                                         |                                       |
         |                                         |                                       | pio run
         |                                         |                                       v
         +------<-- zip artifact proxy -----<------+-----<-- artifact ready --------<------+
```

---

## Step 1 — Create the build-service repo

1. Create a new empty repo on GitHub: **`onstepx-build-service`** (public is
   fine; public repos get unlimited Actions minutes).
2. Push the `build-service/` folder from this repo to it:

   ```bash
   cd build-service
   git init -b main
   git add .
   git commit -m "initial build service"
   git remote add origin https://github.com/christm45/onstepx-build-service.git
   git push -u origin main
   ```

3. In the GitHub repo, open **Settings → Actions → General** and make sure
   "Allow all actions" is enabled.

4. Test the workflow manually: go to **Actions → "Build OnStepX" → Run
   workflow**. You'll need:
   - `config_h`: base64 of any valid Config.h (try `cat Config.h | base64 -w0`)
   - `environment`: `esp32`
   - `request_id`: any UUID, e.g. `00000000-0000-0000-0000-000000000001`

   If the workflow succeeds and uploads `firmware-<uuid>.zip`, the build side
   is good.

---

## Step 2 — Create the GitHub Personal Access Token

The Worker needs a PAT to dispatch the workflow and read the artifact.

1. Go to **GitHub → Settings → Developer settings → Personal access tokens
   → Fine-grained tokens → Generate new token**.
2. Settings:
   - **Repository access**: *Only select repositories* → pick
     `onstepx-build-service`.
   - **Repository permissions**:
     - *Actions*: **Read and write**
     - *Contents*: **Read-only**
     - *Metadata*: **Read-only** (required by default)
   - **Expiration**: up to you (90 days is a reasonable default).
3. Copy the token. You'll paste it in the next step.

---

## Step 3 — Deploy the Cloudflare Worker

1. Install wrangler if you don't have it:
   ```bash
   npm install -g wrangler
   wrangler login      # opens browser for Cloudflare OAuth
   ```

2. Edit `cloudflare-worker/wrangler.toml` — verify these match your setup:
   ```toml
   [vars]
   BUILD_OWNER = "christm45"
   BUILD_REPO = "onstepx-build-service"
   ALLOWED_ORIGIN = "https://christm45.github.io"
   ```

3. Store the PAT as a secret:
   ```bash
   cd cloudflare-worker
   wrangler secret put GITHUB_TOKEN
   # paste the PAT when prompted
   ```

4. Deploy:
   ```bash
   wrangler deploy
   ```

   Output includes the Worker URL, e.g.
   `https://onstepx-build-bridge.christm45.workers.dev`. **Copy this URL.**

5. Quick check — open the URL in a browser. You should see:
   ```json
   { "ok": true, "service": "onstepx-build-bridge" }
   ```

---

## Step 4 — Wire the frontend to the Worker

Edit `compile.js` in this repo and replace the placeholder URL on line 8:

```js
export const WORKER_URL = 'https://onstepx-build-bridge.christm45.workers.dev';
```

Commit and push — GitHub Pages will redeploy automatically:

```bash
git add compile.js
git commit -m "point compile service at deployed Cloudflare Worker"
git push
```

---

## Step 5 — Test end to end

1. Open https://christm45.github.io/OnStepX-Configurator/ .
2. Go to the **Controller** tab and pick a PINMAP (start with `MaxESP4` —
   ESP32 is the most robust flashing target).
3. Fill in the rest of the config as needed, then click **Generate & View
   Config.h**.
4. Click the **Compile & Flash** tab. The MCU target should auto-select
   `ESP32` because of the MaxESP4 pinmap.
5. Click **Compile Firmware**. Status updates appear: queued → in_progress →
   completed. Takes 1–3 min for a cold cache, ~30–60 s once cached.
6. When the build succeeds:
   - **Download Firmware** saves `firmware.bin`.
   - **Flash to Board** opens the Web Serial picker — select your ESP32 USB
     port and it flashes with esptool-js.

---

## Board-by-board flashing notes

### ESP32
- Plug in, leave in run mode. Most boards auto-reset into bootloader.
- If not, hold **BOOT** and tap **EN/RST** before clicking "Flash to Board".
- Needs Chrome, Edge, or Opera (Web Serial). Firefox / Safari don't work.

### STM32 BlackPill F411CE (and MaxSTM3)
- Hold **BOOT0**, tap **NRST**, release BOOT0.
- Board should re-enumerate as "STM32 BOOTLOADER" (VID 0483:DF11).
- Click "Flash to Board" → pick the device in the browser prompt.
- After flashing, tap **NRST** again to run your firmware.

### Teensy 4.0 / 4.1 / MaxPCB4
- Browser flashing for Teensy is not implemented yet (HalfKay protocol is
  fiddly enough that a half-working version would be worse than the
  well-established Teensy Loader app).
- Clicking "Flash to Board" saves `firmware.hex`. Then:
  1. Open the [Teensy Loader](https://www.pjrc.com/teensy/loader.html) app
     (bundled with Teensyduino).
  2. Drop the saved `.hex` into its window.
  3. Press the white program button on the Teensy.
  4. It flashes and reboots automatically.

---

## Troubleshooting

**"Compile service is not configured yet"** — you forgot Step 4. Edit
`compile.js` with your Worker URL and push.

**CORS error in browser console** — `ALLOWED_ORIGIN` in `wrangler.toml`
doesn't match your Pages origin. Fix it and redeploy the Worker.

**`github workflow_dispatch failed` status 403** — PAT is missing
`Actions: Read and write` permission on the build-service repo.

**Build fails with "unsupported environment"** — the frontend sent a board
string that the workflow doesn't recognize. Check that `COMPILE_ENV` in
index.html matches the env names in `build-service/platformio.ini`.

**Build fails with compile errors** — your Config.h has an option that
doesn't work with the selected MCU. Check the build log at the URL the
Worker prints (`html_url` in `compileLog`).

**Rate limit hit** — by default the Worker allows 10 builds/hour/IP once you
create the optional KV namespace. Remove the rate limit by commenting out
the `[[kv_namespaces]]` block in `wrangler.toml` and redeploying.

## Lessons learned from the initial deployment

Problems we hit and how they were fixed (all resolved in the committed code,
listed here so re-deployers know the shape of the issue):

1. **`gh` OAuth token lacks `workflow` scope** → can't push
   `.github/workflows/build.yml` from a plain `gh auth login`.
   Fix: either `gh auth refresh -h github.com -s workflow` (needs browser),
   or upload the workflow file via the GitHub web UI.

2. **`actions/setup-python@v5` with `cache: pip` fails**
   if the repo has no `requirements.txt` / `pyproject.toml`. We just
   `pip install platformio` at runtime, so the `cache: pip` line was dropped.

3. **`lib_ldf_mode = off`** in `platformio.ini` stopped PlatformIO's
   dependency finder from pulling in `Wire.h` and other Arduino framework
   headers OnStepX needs. Restored default LDF.

4. **Missing lib_deps for optional OnStepX features.** OnStepX's `src/lib/`
   references a dozen external libraries via `#include <...>`. The defaults in
   `Config.h` activate several of them (e.g. `TIME_LOCATION_SOURCE = DS3231`
   pulls in `RtcDS3231.h`). `platformio.ini`'s ESP32 env now declares the
   usual set: Makuna/Rtc, Time, TinyGPSPlus, TMCStepper, OneWire,
   DallasTemperature, QuickPID, SimpleKalmanFilter, Adafruit BME280 + Unified
   Sensor. More are added as needed when new features get enabled.

5. **`merge_bin.py` can't call `esptool.py` directly** — the script isn't on
   PATH with an exec bit on GHA Ubuntu runners, and `$PYTHONEXE -m esptool`
   fails because the host Python (from setup-python) doesn't have esptool
   installed. Fix: look up PlatformIO's bundled esptool via
   `env.PioPlatform().get_package_dir("tool-esptoolpy")` and invoke the
   `esptool.py` script with `$PYTHONEXE`. Same trick used for `boot_app0.bin`
   from `framework-arduinoespressif32`.

6. **Cloudflare Worker `/firmware` returned 502** — GitHub's
   `/actions/artifacts/<id>/zip` endpoint returns a 302 to a pre-signed Azure
   Storage URL. If you `fetch` with `redirect: 'follow'`, the Authorization
   header gets re-sent to Azure and Azure rejects. Fix: `redirect: 'manual'`,
   read the `Location` header, and fetch that URL with no Authorization
   header.

---

## Keeping the build service in sync with upstream

You don't need to do anything. The workflow clones
`https://github.com/hjd1964/OnStepX.git` fresh on every build, so every
compile uses the latest upstream source automatically. End users pick a
specific branch / tag / commit in the **OnStepX source** field on the
Compile & Flash tab when they want reproducibility.

## Renewing the GitHub PAT (important — do this every 90 days)

The GitHub fine-grained PAT you stored as the Worker's `GITHUB_TOKEN` secret
expires on the date you picked when creating it (90 days by default). Once it
expires, every compile attempt will fail with a GitHub API `401 Unauthorized`
or `403 Forbidden`, and users will see `github workflow_dispatch failed` in
the compile log.

**GitHub sends reminder emails** 7 days before expiration and on the day of
expiration, to the address on your GitHub account. You can also see the
expiration date at https://github.com/settings/tokens?type=fine-grained .

You have two renewal options. The first is faster, the second is safer.

### Option A — Regenerate the existing token (fast path)

This keeps the same token entry with the same name and permissions, but
issues a new token string. Use this when your current token hasn't been
leaked — you just need to extend its life.

1. Open https://github.com/settings/tokens?type=fine-grained
2. Click the token named **`onstepx-build-bridge`** (or whatever you named it).
3. Click the **Regenerate token** button (top-right).
4. Confirm the new expiration (up to 1 year).
5. Click **Regenerate token**. GitHub shows the new `github_pat_...` string
   **once** — copy it immediately.
6. Update the Cloudflare Worker secret:
   ```bash
   cd cloudflare-worker
   wrangler secret put GITHUB_TOKEN
   # paste the new token when prompted, press Enter
   ```
   Wrangler replaces the old secret value in place. The Worker picks it up
   on the next request — no redeploy needed.
7. Smoke-test:
   ```bash
   curl https://onstepx-build-bridge.<your-subdomain>.workers.dev/
   ```
   You should still see `{"ok":true,"service":"onstepx-build-bridge"}`.
   Then trigger a compile from the configurator to confirm.

### Option B — Rotate (create a new token, revoke the old one)

Use this when the old token has been exposed (pasted in chat, logged,
committed, etc.) or when you want a clean audit trail.

1. Open https://github.com/settings/personal-access-tokens/new
2. Fill the same fields as the original:
   - **Token name**: `onstepx-build-bridge` (add `-v2` or a date suffix if
     you want to keep the old one visible during the handoff)
   - **Expiration**: up to 1 year
   - **Resource owner**: your GitHub user
   - **Repository access** → Only select repositories → `onstepx-build-service`
   - **Permissions** → Repository permissions:
     - Actions: **Read and write**
     - Contents: **Read-only**
     - Metadata: **Read-only** (required)
3. Click **Generate token** at the bottom.
4. Copy the new `github_pat_...` string.
5. Update the Worker secret (same as Option A, step 6):
   ```bash
   cd cloudflare-worker
   wrangler secret put GITHUB_TOKEN
   # paste the NEW token
   ```
6. Test a compile from the configurator.
7. **Only after confirming the new token works**, revoke the old one:
   - Go to https://github.com/settings/tokens?type=fine-grained
   - Click the old token entry → **Revoke** (bottom of the page).
8. Consider deleting any local file where you saved the old token
   (`*tooken*.txt`, `.env`, etc.). These patterns are gitignored but best to
   delete them entirely.

### What if the token has already expired?

Same procedure as Option A or B — the expiration only prevents the token
from being used, it doesn't block you from regenerating or rotating it.
Users who hit a compile failure during the gap will get a recognizable
"github workflow_dispatch failed 401" in their compile log.

### Tips

- **Calendar reminder**: after issuing a new token, set a reminder for
  **7 days before** the new expiration (e.g. 83 days after issuance) so
  you're not caught by surprise.
- **Keep the name stable** (`onstepx-build-bridge`) across rotations —
  GitHub's token list is easier to reason about that way.
- **Don't bump the permissions** unless you need to. The token only needs
  `Actions: Read and write` + `Contents: Read-only` + `Metadata: Read-only`.
  Over-scoped tokens are a bigger blast radius if they leak.
- **Wrangler's secret store is encrypted at rest** on Cloudflare's side. You
  can't read the stored value back (`wrangler secret list` shows names only).
  If you lose the local copy of the token, you regenerate/rotate &mdash; you
  don't recover the old one.

### Watching for leaks

GitHub runs secret scanning against public repos. If the PAT ever lands in
a public commit (this repo, a fork, a gist), GitHub will:

1. Email you within minutes.
2. Optionally auto-revoke the token (GitHub's default for fine-grained PATs).

If this happens, treat it as Option B and rotate immediately — the leaked
value is considered compromised even if the repo is quickly deleted.
