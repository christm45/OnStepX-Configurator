# Cloudflare Worker — GitHub PAT renewal (every 90 days)

> 💡 **Skip the rotation forever:** the Worker now also supports GitHub App
> auth, which mints fresh installation tokens hourly with no human renewal.
> See [`GITHUB_APP_SETUP.md`](./GITHUB_APP_SETUP.md) for the one-time
> migration (~20 min). If you've already done that and `/auth-info` reports
> `"mode": "github-app"`, you can ignore this file.

The build bridge (`onstepx-build-bridge.craciun-vlad.workers.dev`) talks to
GitHub Actions on your behalf using a **fine-grained Personal Access Token**
(`GITHUB_TOKEN`). GitHub fine-grained PATs default to **90-day expiry**, so
the token has to be rotated four times a year or the configurator's
**Compile** button stops working.

This file is the playbook for PAT mode. Total time: ~5 minutes.

---

## Symptoms that the token has expired

- The configurator's **Compile** tab shows `compile request failed (401)` or
  `(403)` after you click **Compile firmware**.
- Cloudflare Worker tail logs (`wrangler tail`) print one of:
  ```
  Bad credentials
  Token has expired
  ```
- `gh api user --hostname github.com -H "Authorization: Bearer <token>"`
  returns HTTP 401.

If you see any of those, the token is dead — follow the renewal steps below.

---

## What the token must be allowed to do

The Worker needs the **minimum** GitHub permissions to dispatch the
build-service workflow and read its run status. Use the table below verbatim
when generating the new PAT:

| Field | Value |
|---|---|
| **Token name** | `onstepx-build-bridge YYYY-MM-DD` (today's date — easy to spot in the GitHub PAT list) |
| **Expiration** | 90 days (max for fine-grained; longer requires a GitHub App — see bottom) |
| **Resource owner** | `christm45` |
| **Repository access** | **Only select repositories** → tick `christm45/onstepx-build-service` (build service only — does NOT need access to the configurator repo or any other repo) |
| **Repository permissions: Actions** | **Read and write** (lets the Worker dispatch `workflow_dispatch` and read run status) |
| **Repository permissions: Contents** | **Read-only** (reads `build.yml` to confirm the workflow exists) |
| **Repository permissions: Metadata** | **Read-only** (auto-granted, can't be turned off) |
| **All other permissions** | **No access** (default) |

> **Why so narrow?** The Cloudflare Worker is internet-facing. If anyone ever
> exfiltrates the token (Worker bug, log leak, etc.) the blast radius is
> capped to dispatching builds in `onstepx-build-service` — they can't push
> code, open PRs, read other repos, or touch your account.

---

## Step-by-step renewal

### 1. Generate the new PAT

Web UI route:
1. Go to <https://github.com/settings/personal-access-tokens/new>
   (Settings → Developer settings → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.)
2. Fill the form using the table above.
3. Click **Generate token** at the bottom.
4. **Copy the token immediately** — GitHub only shows it once. It looks like
   `github_pat_11AAA...` (~93 characters).

CLI route (if you prefer):
```bash
# This opens the same form in your browser, pre-filled:
gh auth refresh -h github.com -s "actions:write,contents:read" -R christm45/onstepx-build-service
# (Then follow the device-code flow.)
```

### 2. Push the new token into the Cloudflare Worker

From the `cloudflare-worker/` folder of the configurator repo:

```bash
cd /c/Users/Bogdan/Desktop/OnStepX-github\ configurator/cloudflare-worker

# Wrangler will prompt for the token — paste it and hit Enter.
wrangler secret put GITHUB_TOKEN
```

If you don't have `wrangler` installed:
```bash
npm install -g wrangler
wrangler login   # one-time, opens browser to your Cloudflare account
```

The secret is encrypted at rest in Cloudflare's secret store — it never
appears in `wrangler.toml` or any deployment artifact, and is only readable
from inside the Worker via `env.GITHUB_TOKEN`.

### 3. Verify

```bash
# Sanity check from your local machine (replace <new-token> with the PAT):
gh api -H "Authorization: Bearer <new-token>" \
  /repos/christm45/onstepx-build-service/actions/workflows | head -20
# Expect: a JSON list including build.yml, NOT a 401.

# End-to-end via the deployed Worker:
curl -fsS https://onstepx-build-bridge.craciun-vlad.workers.dev/
# Expect: {"ok":true,"service":"onstepx-build-bridge"}

# Then open the configurator and click Compile on any preset.
# Expect: a Run ID appears within ~5s and the build proceeds.
```

If the smoke test fails, the most common gotcha is **forgetting to redeploy
the Worker** after `wrangler secret put` — secrets propagate without a
redeploy, but if you also touched `worker.js` you need:

```bash
wrangler deploy
```

### 4. Revoke the old PAT

Once the new one is verified working, delete the old token at
<https://github.com/settings/tokens?type=beta> — find the one with the
previous date in its name and click **Delete**. This protects against the
old token being leaked from any local backup, dump, or swapfile.

### 5. Tidy up local copies

If you keep the token in `guithub tooken.txt` next to the configurator (the
current setup), update it with the new value, or — better — move to a
password manager (1Password, Bitwarden, KeePass) so the token isn't on disk
in plaintext. The file is already in `.gitignore` and isn't committed to
either repo, but a stale plaintext PAT in your home folder is still a small
risk surface.

---

## Quick checklist

- [ ] Generate new fine-grained PAT (90d, `christm45/onstepx-build-service`,
      Actions:write + Contents:read + Metadata:read)
- [ ] `wrangler secret put GITHUB_TOKEN` from `cloudflare-worker/`
- [ ] `curl https://onstepx-build-bridge.craciun-vlad.workers.dev/` returns
      `{"ok":true,...}`
- [ ] Compile any preset from the configurator and watch it complete
- [ ] Revoke the old PAT in GitHub settings
- [ ] Update local password manager / `guithub tooken.txt` with the new PAT
- [ ] (Optional) Schedule the next renewal — see below

---

## Alternative: switch to a GitHub App (no expiry)

Fine-grained PATs expire by design. If the 90-day rotation gets old, install
a **GitHub App** and have the Worker mint short-lived installation tokens on
demand instead. Tokens minted by an App live for one hour, so the Worker
fetches a fresh one every call — no human renewal ever again.

The trade-off:
- ✅ No more 90-day rotation
- ✅ Per-installation revocation in one click
- ✅ Smaller blast radius (App can be uninstalled per-repo)
- ❌ One-time setup work: register the App, store the App ID + private key as
     two new Worker secrets (`GH_APP_ID`, `GH_APP_PRIVATE_KEY`), rewrite
     `ghFetch()` in `worker.js` to mint installation tokens via JWT.

If you decide to do this, ask Claude in a fresh session to "migrate the
build-bridge Worker from PAT auth to a GitHub App" — it'll be a focused
~30-minute job. Until then, the PAT route above is fine.

---

## When does the current token expire?

Check the expiry date directly in GitHub:
<https://github.com/settings/tokens?type=beta>

The token list shows the expiration date next to each PAT. Add a
recurring nudge so you're reminded ~7 days before the next renewal:

```text
/schedule
Create a recurring routine: every 80 days at 9am Europe/Paris,
remind me to rotate the Cloudflare Worker GITHUB_TOKEN per
cloudflare-worker/TOKEN_RENEWAL.md before it expires (cycle is
90 days from each PAT creation date).
```

(Replace 80 with anything ≥ 1 hour and ≤ 90 days; the routine system
enforces a 1-hour minimum and the cron has to fit in standard 5-field cron.)
