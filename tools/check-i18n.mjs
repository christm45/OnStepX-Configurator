// Guard the French dictionaries against the two ways they rot.
//
// 1. DEAD KEYS. i18n.js looks a string up by its exact English text. Reword
//    the English in index.html and the entry stops matching -- silently, with
//    the page just staying English. Nothing in git review shows it. So: every
//    key must still be findable in the source it is meant to translate.
//
// 2. KEY HYGIENE. i18n.js keys on trim() + collapsed whitespace. A key that
//    itself contains a newline or a double space can therefore never match,
//    and two keys that differ only in whitespace would be indistinguishable.
//
// Deliberately NOT checked: that every English string HAS a translation. The
// page is far larger than the dictionaries and always has been; flagging that
// would be noise, and untranslated text degrades gracefully to English.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, readIndex, loadPage, closePage } from './page.mjs';

const key = (s) => s.trim().replace(/\s+/g, ' ');

// Load in index.html's order, not alphabetically: i18n-fr.js starts the
// dictionary with a plain assignment, so loading it last (it sorts after
// i18n-fr-*.js) wiped every other file and the check only ever saw its keys.
const dictFiles = [...readIndex().matchAll(/<script src="(i18n-fr[^"?]*\.js)/g)].map((m) => m[1]);
const onDisk = fs.readdirSync(ROOT).filter((f) => /^i18n-fr.*\.js$/.test(f));
const unloaded = onDisk.filter((f) => !dictFiles.includes(f));
if (unloaded.length) {
  console.error(`Dictionaries on disk but not loaded by index.html: ${unloaded.join(', ')}`);
  process.exit(1);
}
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of dictFiles) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx);
const dict = ctx.window.I18N_FR || {};
const keys = Object.keys(dict);

let failures = 0;

// --- 2. key hygiene --------------------------------------------------------
const badWhitespace = keys.filter((k) => k !== key(k));
if (badWhitespace.length) {
  failures++;
  console.log(`${badWhitespace.length} key(s) contain a newline, a double space, or untrimmed edges`);
  console.log('(i18n.js normalises before lookup, so these can never match):');
  for (const k of badWhitespace.slice(0, 10)) console.log('  ' + JSON.stringify(k.slice(0, 100)));
}

const seen = new Map();
for (const k of keys) {
  const n = key(k);
  if (seen.has(n) && dict[seen.get(n)] !== dict[k]) {
    failures++;
    console.log(`Two keys normalise the same but translate differently:\n  ${JSON.stringify(seen.get(n))}\n  ${JSON.stringify(k)}`);
  }
  seen.set(n, k);
}

// --- 1. dead keys ----------------------------------------------------------
// The corpus is index.html plus the non-dictionary JS that renders text (the
// E4 guide builds its markup in JS). Normalised the same way the DOM is, with
// HTML entities decoded and JS string concatenation joined back up, since a
// long literal is usually written as 'part ' + 'part'.
const ENTITIES = {
  '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
  '&#39;': "'", '&rarr;': '→', '&larr;': '←', '&mdash;': '—', '&ndash;': '–',
  '&hellip;': '…', '&times;': '×', '&divide;': '÷', '&deg;': '°', '&middot;': '·',
  '&check;': '✓', '&approx;': '≈', '&plusmn;': '±', '&sup2;': '²', '&frac12;': '½',
};

function corpusFrom(file) {
  let text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  for (const [ent, ch] of Object.entries(ENTITIES)) text = text.split(ent).join(ch);
  text = text.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
  // 'abc ' + 'def'  ->  'abc def'   (also handles the double-quoted form)
  text = text.replace(/'\s*\+\s*'/g, '').replace(/"\s*\+\s*"/g, '');
  // Escaped quotes inside literals are plain characters once rendered.
  text = text.replace(/\\(['"`])/g, '$1');
  return key(text);
}

const corpus = [
  'index.html',
  ...fs.readdirSync(ROOT).filter((f) => f.endsWith('.js') && !/^i18n/.test(f)),
].map(corpusFrom).join('\n');

// Much of the page is assembled at runtime (the E4 guide, the board map's
// "label - function" hover text, "⚠ Label:" callouts), so a key missing from
// the source text can still be live. Render the page in every mode, E4 guide
// included, and count what actually reaches the DOM as well.
async function renderedStrings() {
  const w = await loadPage();
  const out = new Set();
  try {
    w.eval(fs.readFileSync(path.join(ROOT, 'e4-guide.js'), 'utf8'));
    if (typeof w.renderE4Guide === 'function') w.renderE4Guide();
    for (const mode of ['onstepx', 'shc', 'sws']) {
      try { w.setMode(mode); } catch { /* keep whatever rendered */ }
      const tw = w.document.createTreeWalker(w.document.body, w.NodeFilter.SHOW_TEXT);
      let n;
      while ((n = tw.nextNode())) { const k = key(n.nodeValue); if (k) out.add(k); }
      for (const el of w.document.querySelectorAll('[title],[placeholder],[aria-label]')) {
        for (const a of ['title', 'placeholder', 'aria-label']) { const v = el.getAttribute(a); if (v) out.add(key(v)); }
      }
    }
  } finally {
    closePage(w);
  }
  return out;
}

const rendered = await renderedStrings();
const dead = keys.filter((k) => !corpus.includes(key(k)) && !rendered.has(key(k)));
if (dead.length) {
  failures++;
  console.log(`\n${dead.length} dictionary key(s) no longer appear in the source.`);
  console.log('The English was reworded and the translation was left behind -- it will');
  console.log('silently stay English. Update the key, or drop it if the text is gone:');
  for (const k of dead) {
    const where = dictFiles.find((f) => fs.readFileSync(path.join(ROOT, f), 'utf8').includes(k.slice(0, 40)));
    console.log(`  [${where || '?'}] ${JSON.stringify(k.length > 110 ? k.slice(0, 110) + '…' : k)}`);
  }
}

if (failures) {
  console.error(`\ni18n check failed (${dictFiles.length} dictionaries, ${keys.length} keys).`);
  process.exit(1);
}
console.log(`i18n OK: ${keys.length} keys across ${dictFiles.length} dictionaries, all still reachable in the source.`);
