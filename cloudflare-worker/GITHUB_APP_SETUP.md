# Cloudflare Worker — GitHub App migration (no more 90-day rotation)

This is the one-time procedure to switch the build bridge from a fine-grained
PAT (`GITHUB_TOKEN`) to a GitHub App (`GH_APP_*` secrets). After this you
**never rotate auth again** — the Worker mints fresh installation tokens
every hour from the App's private key, fully automatic.

The Worker code already supports both modes side-by-side: it auto-prefers App
mode when all three `GH_APP_*` secrets are present, and falls back to the PAT
otherwise. Zero downtime — your existing `GITHUB_TOKEN` keeps working until
the App secrets land.

---

## What you're trading

| | PAT (current) | GitHub App (new) |
|---|---|---|
| Manual rotation | Every 90 days | Never |
| Token lifetime | 90 days | 1 hour (auto-renewed by Worker) |
| Revocation granularity | Whole token | Per-repo install (one-click uninstall) |
| Install scope | Per-account | Per-repo (uninstallable independently) |
| Setup time | 5 min | ~20 min one-time, then forever |

---

## Step-by-step

### 1. Register the GitHub App

1. Go to <https://github.com/settings/apps/new>
   (Settings → Developer settings → **GitHub Apps** → **New GitHub App**.)

2. Fill in:

   | Field | Value |
   |---|---|
   | **GitHub App name** | `OnStepX Build Bridge` (must be globally unique on GitHub — add your username if taken) |
   | **Description** | `Cloudflare Worker that dispatches OnStepX firmware builds` |
   | **Homepage URL** | `https://christm45.github.io/OnStepX-Configurator/` |
   | **Webhook → Active** | **Untick** (we don't use webhooks) |
   | **Where can this GitHub App be installed?** | **Only on this account** |

3. **Repository permissions** (scroll way down — this is the important bit):

   | Permission | Access |
   |---|---|
   | **Actions** | **Read and write** |
   | **Contents** | **Read-only** |
   | **Metadata** | **Read-only** *(auto-granted, can't be turned off)* |
   | All others | **No access** *(default — leave alone)* |

4. **Account permissions**: leave **all at No access** (default).

5. **Subscribe to events**: leave **all unticked**.

6. Click **Create GitHub App** at the bottom.

### 2. Note the App ID + generate the private key

After clicking Create:

1. You land on the App's settings page. Near the top is **App ID** — note this number (it'll look like `123456`). You'll need it as `GH_APP_ID`.

2. Scroll down to **Private keys** → click **Generate a private key**. Your browser downloads a `.pem` file (e.g., `onstepx-build-bridge.2026-04-29.private-key.pem`).

3. **Save that file somewhere safe.** GitHub does NOT keep a copy — losing it means generating a new one (the old one is auto-revoked when you generate a new one). Treat it like a long-lived password: password manager, never commit to git.

### 3. Install the App on the build-service repo

1. Still on the App's settings page, in the left sidebar click **Install App**.
2. Click **Install** next to your account (`christm45`).
3. Pick **Only select repositories** → tick `christm45/onstepx-build-service`.
4. Click **Install**.

After install, look at the URL: it ends in `.../installations/12345678` — note that number, it's the `GH_APP_INSTALLATION_ID`. (You can also find it later via `gh api /users/christm45/installation` once the App is installed.)

### 4. Convert the private key to PKCS#8

GitHub serves private keys in PKCS#1 format (`BEGIN RSA PRIVATE KEY`). The
Web Crypto API in Cloudflare Workers requires PKCS#8 (`BEGIN PRIVATE KEY`).
One-line conversion:

```bash
cd /c/Users/Bogdan/Downloads     # or wherever the .pem landed
openssl pkcs8 -topk8 -nocrypt \
  -in onstepx-build-bridge.2026-04-29.private-key.pem \
  -out app-pk8.pem
```

Verify the new file starts with `BEGIN PRIVATE KEY` (not `BEGIN RSA PRIVATE KEY`):

```bash
head -1 app-pk8.pem
# Expect: -----BEGIN PRIVATE KEY-----
```

If `openssl` isn't on your PATH on Windows, use Git Bash (which bundles it)
or install [Win32 OpenSSL](https://slproweb.com/products/Win32OpenSSL.html).

### 5. Push the three secrets to the Cloudflare Worker

```bash
cd "/c/Users/Bogdan/Desktop/OnStepX-github configurator/cloudflare-worker"

# 5a. App ID (numeric, from step 2)
wrangler secret put GH_APP_ID
# When prompted, paste:  123456    (whatever your App ID is)

# 5b. Installation ID (numeric, from step 3)
wrangler secret put GH_APP_INSTALLATION_ID
# When prompted, paste:  12345678  (whatever your Installation ID is)

# 5c. Private key (entire PKCS#8 PEM file content, multi-line)
wrangler secret put GH_APP_PRIVATE_KEY < app-pk8.pem
# (The `< app-pk8.pem` reads stdin from the file so newlines survive intact —
#  copy-pasting through the prompt usually mangles line breaks.)
```

> If `wrangler secret put NAME < file` doesn't work in your shell, fall back to
> `cat app-pk8.pem | wrangler secret put GH_APP_PRIVATE_KEY` — same effect.

### 6. Deploy and verify

```bash
wrangler deploy
```

Then:

```bash
# /auth-info reports the active mode without leaking the token
curl -fsS https://onstepx-build-bridge.craciun-vlad.workers.dev/auth-info
# Expect:
# { "mode": "github-app",
#   "app_id": "123456",
#   "installation_id": "12345678",
#   "installation_token_expires_at": "2026-04-29T22:51:00Z" }

# End-to-end smoke test from the configurator
# 1. Open https://christm45.github.io/OnStepX-Configurator/
# 2. Click Compile on any preset.
# 3. Watch a Run ID appear within ~5s.
```

If `/auth-info` still says `"mode": "pat"`, one of the three App secrets is missing or empty — re-run `wrangler secret list` to confirm all three are set.

If `/auth-info` says `"mode": "github-app"` but reports an `"error"` field, the most common causes are:
- **`GH_APP_PRIVATE_KEY must be in PKCS#8 PEM`** → you forgot step 4 (the `openssl pkcs8` conversion).
- **`401`** from GitHub → the JWT signature is bad; almost always a corrupt PEM (line breaks lost during paste). Re-do step 5c using `< app-pk8.pem` redirection.
- **`404`** from GitHub → wrong `GH_APP_INSTALLATION_ID`, or the App isn't installed on `christm45/onstepx-build-service`. Re-check step 3.

### 7. Remove the old PAT (after App mode is verified)

Once you've successfully compiled at least one build through the configurator
in App mode, the PAT is dead weight. Two cleanup steps:

```bash
# 7a. Remove from the Worker (so it's clear the App is the only auth)
wrangler secret delete GITHUB_TOKEN

# 7b. Revoke the PAT itself in GitHub (so a leaked copy can't be used)
#     Visit https://github.com/settings/tokens?type=beta and delete it.
```

You can also delete `guithub tooken.txt` from your `OnStepX-github configurator/` folder — no longer needed.

### 8. (Optional) Schedule a yearly App-key health check

GitHub Apps don't expire, but it's good hygiene to verify the bridge is
healthy occasionally. Ask Claude to:

```text
/schedule
Create a yearly routine on January 1 at 9am Europe/Paris:
- curl /auth-info on the build bridge
- report mode, installation_token_expires_at, and any error
- if mode is "pat" or there's an error, alert me
```

---

## Quick checklist

- [ ] Registered GitHub App with Actions:write + Contents:read + Metadata:read on `christm45/onstepx-build-service`
- [ ] Noted `GH_APP_ID` from App settings page
- [ ] Generated + downloaded the private key `.pem`
- [ ] Installed App on `christm45/onstepx-build-service`; noted `GH_APP_INSTALLATION_ID`
- [ ] Converted PEM to PKCS#8 with `openssl pkcs8 -topk8 -nocrypt`
- [ ] `wrangler secret put GH_APP_ID` (numeric)
- [ ] `wrangler secret put GH_APP_INSTALLATION_ID` (numeric)
- [ ] `wrangler secret put GH_APP_PRIVATE_KEY < app-pk8.pem`
- [ ] `wrangler deploy`
- [ ] `curl …/auth-info` reports `"mode": "github-app"` with no error
- [ ] Smoke-test a compile from the configurator UI
- [ ] `wrangler secret delete GITHUB_TOKEN` (after verification)
- [ ] Revoke the old PAT at <https://github.com/settings/tokens?type=beta>
- [ ] (Optional) Set up yearly health-check routine

---

## What if you need to roll back to PAT mode?

Easy: re-add the `GITHUB_TOKEN` secret and remove any one of the three
`GH_APP_*` secrets. The Worker auto-falls-back to PAT mode the moment App
mode is incomplete.

```bash
wrangler secret put GITHUB_TOKEN
wrangler secret delete GH_APP_PRIVATE_KEY   # or GH_APP_ID, or GH_APP_INSTALLATION_ID
wrangler deploy
```

---

## Reference

- [Authenticating as a GitHub App (GitHub docs)](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)
- [Generating a JWT for a GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)
- [Cloudflare Workers Web Crypto API](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)
