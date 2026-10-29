# enrich_hints.mjs — sync Config.h comments into the configurator UI

A one-shot dev tool that reads upstream OnStepX / SmartHandController /
SmartWebServer `Config.h` files, extracts the inline `// OFF, ON Reverses ...`
style comment from each `#define` line, and injects it next to the matching
form-field hint in `index.html` of the configurator repo.

This script is an offline dev tool — **not** part of the build service or the
site at runtime. (It used to live in `build-service/`; it moved here because it
has nothing to do with compiling firmware.)

## What it produces

For every form input in the configurator whose `id="…"` matches a `#define`
name in upstream `Config.h` (with optional `SHC_` / `SWS_` prefix stripped),
it appends a sibling element next to the existing field-hint:

```html
<span class="field-hint">Reverse movement direction</span>
<span class="config-comment">// ON Reverses movement direction, or reverse wiring instead to correct.</span>
```

The `.config-comment` class (defined in `index.html`) renders the upstream text
in a green monospace italic underneath the regular hint.

## Inputs

Paths come from CLI flags, then env vars, then defaults:

| Source | Flag / env var | Default | Purpose |
|---|---|---|---|
| OnStepX `Config.h` + `Extended.config.h` | `--onstepx DIR` / `ONSTEPX_DIR` | `../OnStepX` (a clone next to this repo) | Drives Controller / Axis* / Mount / Rotator / Focuser / Auxiliary tabs |
| SWS `Config.h` + `Extended.config.h` | `--ref DIR` / `HINTS_REF_DIR` | `<os tmpdir>/sws_ref` | SWS-prefixed fields, network credentials block (AP_*, STA_*, MAC, NV_WIPE, …) |
| SHC `SHC_Config.h` + `SHC_Extended.config.h` | same `--ref DIR` | same | SHC-prefixed fields |
| Target HTML | `--html FILE` / `CONFIGURATOR_HTML` | this repo's `index.html` | Patched in place |

A missing source file only prints a warning (`! could not read …`), so check
the `loaded:` counts in the output.

## Refreshing the upstream copies

```bash
# OnStepX: a long-lived clone (default location: next to this repo)
git -C ../OnStepX pull

# SWS + SHC: any directory, passed with --ref
REF=./.hints_ref; mkdir -p "$REF"
curl -fsSL https://raw.githubusercontent.com/hjd1964/SmartWebServer/main/Config.h          -o "$REF/Config.h"
curl -fsSL https://raw.githubusercontent.com/hjd1964/SmartWebServer/main/Extended.config.h -o "$REF/Extended.config.h"
curl -fsSL https://raw.githubusercontent.com/hjd1964/SmartHandController/main/Config.h          -o "$REF/SHC_Config.h"
curl -fsSL https://raw.githubusercontent.com/hjd1964/SmartHandController/main/Extended.config.h -o "$REF/SHC_Extended.config.h"
```

(On Windows/MSYS, prefer a relative or Windows-style `--ref` path over
`/tmp/...`: MSYS `/tmp` is not the path Node sees.)

## Run

```bash
node tools/enrich_hints.mjs --ref ./.hints_ref
# or: node tools/enrich_hints.mjs --onstepx /path/to/OnStepX --ref /path/to/ref --html index.html
```

Expected output:

```
loaded: OnStepX=199, SWS=46, SHC=18
appended:           197
skipped (already):  0
skipped (no id):    36
unmatched IDs (no upstream comment):
  COMPILE_ENV
```

`COMPILE_ENV` is configurator-only (build-tab choice, not a `#define`) so it's
expected to be unmatched. The `36` skipped rows are field-row blocks that
contain a field-hint but no form input id (buttons, info rows, etc.) — also
expected. Rows without a field-hint aren't counted. Exact numbers drift as
upstream and the configurator change.

## When to re-run

- Upstream OnStepX / SWS / SHC `Config.h` adds, removes, or rewords a `#define`
  comment. (Watch the `hjd1964/OnStepX`, `hjd1964/SmartWebServer`,
  `hjd1964/SmartHandController` commit feeds.)
- A new form field is added to the configurator that mirrors an upstream
  `#define` and you want the inline comment to follow.

The script is **idempotent** — a row whose field-hint is already followed by
a `.config-comment` is skipped (`skipped (already)`), and a run that has
nothing to add leaves `index.html` untouched. Re-running after partial work,
or by accident, is safe. (Before 2026-10-29 the row matcher stopped at the
hint's `</span>`, never saw the comment after it, and appended a duplicate on
every re-run; for a hint containing a nested `<span>` it also inserted the
comment inside the hint. Both are fixed: the hint's real end is found by
counting nested spans.)

> **Refreshing stale comments:** because the script only injects where no
> `.config-comment` exists, refreshing upstream and re-running will *not*
> overwrite comments already there. To force a refresh, first remove all
> `<span class="config-comment">…</span>` from `index.html`
> (`sed -i 's|<span class="config-comment">[^<]*</span>||g' index.html`),
> then re-run the script.

## Verifying

```bash
# count enriched rows (should track total #defines in upstream)
grep -c 'class="config-comment"' index.html
# parse-check every inline <script> block
node tools/check-syntax.mjs
# div-tag balance
grep -oE '<div|</div>' index.html | sort | uniq -c
```
