// Enrich configurator field hints with upstream Config.h inline comments.
// Reads upstream Config.h files, builds FIELD_NAME -> comment map,
// then appends a <span class="config-comment">// ...</span> sibling next
// to every existing <span class="field-hint">...</span> in index.html.
//
// Source-of-truth for upstream (see ENRICH_HINTS.md):
//   OnStepX:        <onstepx-dir>/Config.h + Extended.config.h
//   SWS:            <ref-dir>/Config.h + Extended.config.h
//   SHC:            <ref-dir>/SHC_Config.h + SHC_Extended.config.h
//
//   node tools/enrich_hints.mjs [--onstepx DIR] [--ref DIR] [--html FILE]
//
// Each flag falls back to an env var, then a default:
//   --onstepx  ONSTEPX_DIR      ../OnStepX (a clone next to this repo)
//   --ref      HINTS_REF_DIR    <os tmpdir>/sws_ref
//   --html     CONFIGURATOR_HTML  index.html of this repo
//
// Field IDs in index.html may carry a SHC_ or SWS_ prefix; we strip it
// before lookup. SHC and SWS take precedence over OnStepX for prefixed IDs;
// OnStepX is the fallback.

import { readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : undefined;
}

const ONSTEP_DIR = arg('onstepx') || process.env.ONSTEPX_DIR || path.join(REPO_ROOT, '..', 'OnStepX');
const REF_DIR = arg('ref') || process.env.HINTS_REF_DIR || path.join(tmpdir(), 'sws_ref');
const HTML_PATH = arg('html') || process.env.CONFIGURATOR_HTML || path.join(REPO_ROOT, 'index.html');

const ONSTEP_FILES = [
  path.join(ONSTEP_DIR, 'Config.h'),
  path.join(ONSTEP_DIR, 'Extended.config.h'),
];
const SWS_FILES = [
  path.join(REF_DIR, 'Config.h'),
  path.join(REF_DIR, 'Extended.config.h'),
];
const SHC_FILES = [
  path.join(REF_DIR, 'SHC_Config.h'),
  path.join(REF_DIR, 'SHC_Extended.config.h'),
];

// Tags the configurator already shows as a hint-tag badge — strip from the
// upstream comment to avoid duplication.
const TRAILING_TAGS = /\s+(?:<-)?(?:Often|Adjust|Option|Infreq|Req'd|Reqd)\.?$/i;

function parseConfigH(text) {
  const map = new Map();
  for (const raw of text.split(/\r?\n/)) {
    const m = raw.match(/^#define\s+(\w+)\s+\S+\s*\/\/\s*(.+?)\s*$/);
    if (!m) continue;
    const name = m[1];
    let comment = m[2];
    // Drop the leading "default-value-restated, " bit (e.g. "OFF, ", "9600, ", "n. ")
    // — we want the descriptive text, not the value restatement.
    // Handle three forms:
    //   1. Brace-enclosed value:  "{192,168,0,1}, Wifi Access Point IP."
    //   2. Hex array:             "{0xDE,0xAD,...}, MAC address."
    //   3. Bare token:            "OFF, " / "9600, " / "n. "
    if (/^\{[^}]*\}\s*,\s*/.test(comment)) {
      // Brace-enclosed value: "{192,168,0,1}, descr"
      comment = comment.replace(/^\{[^}]*\}\s*,\s*/, '');
    } else if (/^\.\.[^}]*\}\s*,\s*/.test(comment)) {
      // Truncated brace value SmartWebServer style: "..,168,0,1}, descr"
      comment = comment.replace(/^\.\.[^}]*\}\s*,\s*/, '');
    } else {
      // Bare token: "OFF, " / "9600, " / "n. "
      comment = comment.replace(/^[^,]+,\s*/, '');
    }
    // Drop trailing difficulty tag (Often, Adjust, etc.)
    comment = comment.replace(TRAILING_TAGS, '');
    // Collapse internal whitespace
    comment = comment.replace(/\s{2,}/g, ' ').trim();
    if (comment) map.set(name, comment);
  }
  return map;
}

function loadAll(paths) {
  const merged = new Map();
  for (const p of paths) {
    try {
      const text = readFileSync(p, 'utf8');
      for (const [k, v] of parseConfigH(text)) merged.set(k, v);
    } catch (e) {
      console.warn(`! could not read ${p}: ${e.message}`);
    }
  }
  return merged;
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Offset just past the </span> closing the <span ...> that starts at `at`,
// counting nested spans. -1 if unbalanced.
function spanEnd(html, at) {
  const tag = /<span\b|<\/span>/g;
  tag.lastIndex = at + 1;
  let depth = 1;
  let m;
  while ((m = tag.exec(html))) {
    if (m[0] === '</span>') {
      if (--depth === 0) return m.index + m[0].length;
    } else {
      depth++;
    }
  }
  return -1;
}

function main() {
  const onstepx = loadAll(ONSTEP_FILES);
  const sws = loadAll(SWS_FILES);
  const shc = loadAll(SHC_FILES);
  console.log(`loaded: OnStepX=${onstepx.size}, SWS=${sws.size}, SHC=${shc.size}`);

  let html = readFileSync(HTML_PATH, 'utf8');
  let appended = 0;
  let skippedAlreadyEnriched = 0;
  let skippedNoMatch = 0;
  const unmatchedIds = new Set();

  // Walk the field-rows. For each row we locate its <span class="field-hint">
  // and that span's REAL end (hints can contain nested <span>s, e.g.
  // flash-yellow, so "first </span>" is wrong), look up the form element's
  // id, and insert a sibling right after the hint:
  //   id="FOO" ... <span class="field-hint">existing</span><span class="config-comment">// upstream</span>
  //
  // Idempotent: a row whose hint is already followed by a config-comment (or
  // that has one before/inside the hint) is left alone. (The old ROW_RE ended at the
  // hint's </span>, so the config-comment after it was never inside the
  // matched block and every re-run appended a duplicate.)
  // A row is bounded by the next field-row, so a row without a hint can't
  // borrow the next row's hint.
  const ROW_START = '<div class="field-row">';
  const HINT_START = '<span class="field-hint">';
  const COMMENT_START = '<span class="config-comment">';
  const rowStarts = [];
  for (let i = html.indexOf(ROW_START); i >= 0; i = html.indexOf(ROW_START, i + 1)) rowStarts.push(i);
  const inserts = []; // [offset, text], applied back-to-front
  for (let r = 0; r < rowStarts.length; r++) {
    const rowStart = rowStarts[r];
    const rowEnd = r + 1 < rowStarts.length ? rowStarts[r + 1] : html.length;
    const hintAt = html.indexOf(HINT_START, rowStart);
    if (hintAt < 0 || hintAt >= rowEnd) continue; // no hint in this row
    const hintEnd = spanEnd(html, hintAt);
    if (hintEnd < 0 || hintEnd > rowEnd) continue;
    if (html.slice(rowStart, hintEnd).includes('class="config-comment"') ||
        html.slice(hintEnd).trimStart().startsWith(COMMENT_START)) {
      skippedAlreadyEnriched++;
      continue;
    }
    // The first id="..." in the row up to the hint is the form element.
    const idMatch = html.slice(rowStart, hintAt).match(/\sid="([A-Z][A-Za-z0-9_]*)"/);
    if (!idMatch) {
      skippedNoMatch++;
      continue;
    }
    const fullId = idMatch[1];
    // Strip mode prefix: SHC_FOO -> FOO, SWS_FOO -> FOO
    let bareName = fullId;
    let lookup = onstepx;
    if (fullId.startsWith('SHC_')) {
      bareName = fullId.slice(4);
      lookup = shc;
    } else if (fullId.startsWith('SWS_')) {
      bareName = fullId.slice(4);
      lookup = sws;
    }
    // Try the prefix-specific map first, then OnStepX as fallback
    let comment = lookup.get(bareName);
    if (!comment && lookup !== onstepx) comment = onstepx.get(bareName);
    if (!comment) {
      unmatchedIds.add(fullId);
      continue;
    }
    inserts.push([hintEnd, `${COMMENT_START}// ${escapeHtml(comment)}</span>`]);
    appended++;
  }
  for (let k = inserts.length - 1; k >= 0; k--) {
    const [at, text] = inserts[k];
    html = html.slice(0, at) + text + html.slice(at);
  }

  if (appended === 0) {
    console.log('nothing to append — index.html left untouched');
  } else {
    writeFileSync(HTML_PATH, html);
  }
  console.log(`appended:           ${appended}`);
  console.log(`skipped (already):  ${skippedAlreadyEnriched}`);
  console.log(`skipped (no id):    ${skippedNoMatch}`);
  console.log(`unmatched IDs (no upstream comment):`);
  for (const id of [...unmatchedIds].sort()) console.log(`  ${id}`);
}

main();
