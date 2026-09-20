// Boot index.html under jsdom so the checks can drive the real page code
// instead of re-implementing it.
//
// Two wrinkles this works around:
//
//  1. jsdom does not implement <script type="module">. The module block's
//     imports are one contiguous statement list at the top, so we strip them
//     and inject the real modules as window globals — bare identifier lookups
//     then resolve through the global scope exactly as they would in a module
//     scope. Nothing else in the block uses import/export.
//  2. The page's own <script src> files (e4-guide, i18n) are not needed to
//     generate a Config.h, and i18n would only re-apply English. We skip
//     external resources and stub the handful of globals the inline code
//     touches, so a failure here is always about the inline code.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { JSDOM, VirtualConsole } from 'jsdom';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Strip HTML comments, so a `<script>` mentioned in prose isn't mistaken for one. */
function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * The page's inline scripts, in document order.
 * Returns [{ module: boolean, code: string }].
 */
export function inlineScripts(html = readIndex()) {
  const out = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(stripHtmlComments(html)))) {
    const [, attrs, code] = m;
    if (/\bsrc\s*=/.test(attrs)) continue;
    out.push({ module: /type\s*=\s*["']module["']/.test(attrs), code });
  }
  return out;
}

export function readIndex() {
  return fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
}

/** Remove the module block's leading import statements. */
function stripImports(code) {
  return code.replace(/^\s*import\s[\s\S]*?from\s*['"][^'"]+['"];\s*$/gm, '');
}

/**
 * Load index.html and run both inline scripts. Resolves to the jsdom window
 * with the page fully initialised.
 */
export async function loadPage({ quiet = true } = {}) {
  const html = readIndex();

  // Hermetic: the page resolves the OnStepX ref against the GitHub API on load
  // and on every mode switch. compile.js is imported as a real module, so it
  // would reach Node's global fetch and put the network in the critical path of
  // CI. Every caller of it already handles rejection.
  globalThis.fetch = async (url) => {
    throw new Error(`network disabled in checks (tried ${url})`);
  };

  const virtualConsole = new VirtualConsole();
  const errors = [];
  virtualConsole.on('jsdomError', (e) => {
    // "Not implemented: …" is jsdom declaring a gap in its own DOM (canvas,
    // navigation, media). The decorative starfield hits getContext. Those are
    // environment limits, not page bugs, so they must not fail the check.
    if (/^Not implemented:/.test(e.message || '')) return;
    errors.push(e);
  });
  if (!quiet) virtualConsole.on('error', (...a) => console.error(...a));

  const dom = new JSDOM(html, {
    url: 'https://christm45.github.io/OnStepX-Configurator/',
    runScripts: 'dangerously',
    resources: undefined, // do not fetch <script src> / <link>
    pretendToBeVisual: true,
    virtualConsole,
  });
  const { window } = dom;

  // Globals the inline code expects from the files we deliberately skipped.
  window.I18N = { apply() {}, set() {}, init() {}, lang: 'en' };
  window.I18N_FR = {};
  window.E4Guide = { render() {} };
  if (!window.matchMedia) window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
  if (!window.crypto?.subtle) {
    const { webcrypto } = await import('node:crypto');
    Object.defineProperty(window, 'crypto', { value: webcrypto, configurable: true });
  }

  const scripts = inlineScripts(html);
  const classic = scripts.find((s) => !s.module);
  const moduleBlock = scripts.find((s) => s.module);
  if (!classic || !moduleBlock) throw new Error('index.html: expected one classic and one module inline script');

  window.eval(classic.code);

  // Inject the real ES modules the block imports, then run it without them.
  const compile = await import(pathToFileURL(path.join(ROOT, 'compile.js')).href);
  const validate = await import(pathToFileURL(path.join(ROOT, 'validate.js')).href);
  for (const [name, value] of Object.entries({ ...compile, ...validate })) {
    window[name] = value;
  }
  const noopFlasher = { supported: () => false, flash: async () => {} };
  window.esp32Flasher = noopFlasher;
  window.stm32Flasher = noopFlasher;
  window.teensyFlasher = noopFlasher;

  // The epilogue hands the checks the module block's top-level `const`s. Those
  // live in the global lexical scope, which a later separate eval() cannot see,
  // so they have to be exported from inside the same evaluation.
  window.eval(stripImports(moduleBlock.code) + '\n;window.__boardDefaults = BOARD_DEFAULTS;');

  if (errors.length) {
    throw new Error('page threw while initialising:\n' + errors.map((e) => e.detail?.stack || e.message).join('\n'));
  }
  return window;
}

/**
 * Apply a board profile and return the Config.h the page generates for it.
 * Mirrors what a user does: pick the PINMAP, click "Apply board defaults"
 * (confirm auto-accepted), then "Generate Config.h".
 */
export async function configForBoard(window, pinmap) {
  const doc = window.document;
  window.confirm = () => true;
  window.alert = () => {};

  const sel = doc.getElementById('PINMAP');
  if (!sel) throw new Error('no PINMAP field');
  sel.value = pinmap;
  if (sel.value !== pinmap) throw new Error(`PINMAP has no option "${pinmap}"`);
  sel.dispatchEvent(new window.Event('change', { bubbles: true }));

  await window.applyBoardDefaults();

  const out = doc.getElementById('configOutput');
  out.value = '';
  window.generateConfig();
  return out.value;
}

/**
 * Tear the page down. MUST be called, or the process hangs: the page installs
 * a starfield animation loop, a debounced autosave and a ref-resolver timer,
 * and jsdom keeps Node's event loop alive for all of them. The checks finish
 * their work in milliseconds and would then sit there until the CI job timed
 * out — looking like a slow test rather than a leak.
 */
export function closePage(window) {
  try { window.close(); } catch { /* already gone */ }
}

/** Every form field's current value, for restoring between independent checks. */
export function snapshotForm(window) {
  const snap = new Map();
  for (const el of window.document.querySelectorAll('input[id], select[id], textarea[id]')) {
    snap.set(el.id, el.type === 'checkbox' ? el.checked : el.value);
  }
  return snap;
}

export function restoreForm(window, snap) {
  for (const [id, value] of snap) {
    const el = window.document.getElementById(id);
    if (!el) continue;
    if (el.type === 'checkbox') el.checked = value;
    else el.value = value;
  }
}

/** Board profiles that are pure field maps (the E4 one live-fetches, so it is excluded). */
export function staticBoards(window) {
  const defaults = window.__boardDefaults || {};
  return Object.keys(defaults).filter((k) => k !== 'FYSETC_E4').sort();
}
