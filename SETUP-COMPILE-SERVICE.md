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
compile uses the latest upstream source automatically.

If you ever want to **pin** to a specific OnStepX commit for reproducibility,
edit `.github/workflows/build.yml`:

```yaml
git clone https://github.com/hjd1964/OnStepX.git OnStepX
cd OnStepX && git checkout <commit-sha> && cd ..
```
