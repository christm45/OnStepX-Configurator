// Every `<script src="x.js?v=N">` in index.html must carry the SAME N.
//
// The ?v= suffix is the only cache-busting the site has: GitHub Pages serves
// these with a long max-age, so a returning visitor keeps the old file until
// the query string changes. Bumping only the files you edited looks right and
// is the bug -- i18n.js and its dictionaries are loaded as a set, and a v6
// engine running against a v5 dictionary is exactly the kind of half-updated
// state that is painful to reproduce. One number, bumped together.

import fs from 'node:fs';
import path from 'node:path';
import { ROOT, readIndex } from './page.mjs';

const html = readIndex();
const refs = [...html.matchAll(/<(?:script|link)\b[^>]*?(?:src|href)\s*=\s*["']([^"'?]+\.(?:js|css))(\?v=(\d+))?["']/g)]
  .map((m) => ({ file: m[1], version: m[3] ? Number(m[3]) : null }))
  .filter((r) => !/^https?:/.test(r.file));

let failures = 0;

const unversioned = refs.filter((r) => r.version === null);
if (unversioned.length) {
  failures++;
  console.log('Local assets with no ?v= stamp (returning visitors keep the cached copy):');
  for (const r of unversioned) console.log(`  ${r.file}`);
}

const versions = [...new Set(refs.filter((r) => r.version !== null).map((r) => r.version))];
if (versions.length > 1) {
  failures++;
  console.log(`Mixed asset versions: ${versions.sort((a, b) => a - b).join(', ')}`);
  for (const v of versions.sort((a, b) => a - b)) {
    console.log(`  v=${v}: ${refs.filter((r) => r.version === v).map((r) => r.file).join(', ')}`);
  }
  console.log('\nBump every local asset to the same number when you change any of them.');
}

const missing = refs.filter((r) => !fs.existsSync(path.join(ROOT, r.file)));
if (missing.length) {
  failures++;
  console.log('Referenced but not present in the repo:');
  for (const r of missing) console.log(`  ${r.file}`);
}

if (failures) process.exit(1);
console.log(`All ${refs.length} local assets exist and share v=${versions[0]}.`);
