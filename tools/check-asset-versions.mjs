// Every `<script src="x.js?v=N">` in index.html must carry the SAME N.
//
// The ?v= suffix is the only cache-busting the site has: GitHub Pages serves
// these with a long max-age, so a returning visitor keeps the old file until
// the query string changes. Bumping only the files you edited looks right and
// is the bug -- i18n.js and its dictionaries are loaded as a set, and a v6
// engine running against a v5 dictionary is exactly the kind of half-updated
// state that is painful to reproduce. One number, bumped together.
//
// ES-module imports count too: `import ... from './compile.js'` in the inline
// module block, and in the local modules it pulls in (flash/teensy.js imports
// '../compile.js'), is fetched and cached exactly like a <script src>. Every
// relative specifier must carry the same ?v=N -- and all importers of one file
// must agree on N, or the browser loads it twice as two module instances.

import fs from 'node:fs';
import path from 'node:path';
import { ROOT, readIndex, inlineScripts } from './page.mjs';

const html = readIndex();
const refs = [...html.matchAll(/<(?:script|link)\b[^>]*?(?:src|href)\s*=\s*["']([^"'?]+\.(?:js|css))(\?v=(\d+))?["']/g)]
  .map((m) => ({ file: m[1], version: m[3] ? Number(m[3]) : null }))
  .filter((r) => !/^https?:/.test(r.file));

// Static import / re-export specifiers that point at local files.
const IMPORT_RE = /^\s*(?:import|export)\s[^;]*?\bfrom\s*['"](\.{1,2}\/[^'"]+)['"]|^\s*import\s*['"](\.{1,2}\/[^'"]+)['"]/gm;
function moduleImports(code, fromDir, origin) {
  return [...code.matchAll(IMPORT_RE)].map((m) => {
    const spec = m[1] || m[2];
    const [rel, query = ''] = spec.split('?');
    const v = /(?:^|&)v=(\d+)/.exec(query);
    return {
      file: path.relative(ROOT, path.resolve(fromDir, rel)).split(path.sep).join('/'),
      version: v ? Number(v[1]) : null,
      origin: `${origin} imports '${spec}'`,
    };
  });
}
const queue = inlineScripts(html).filter((s) => s.module)
  .flatMap((s) => moduleImports(s.code, ROOT, 'index.html <script type="module">'));
const visited = new Set();
while (queue.length) {
  const r = queue.shift();
  refs.push(r);
  if (visited.has(r.file) || !r.file.endsWith('.js')) continue;
  visited.add(r.file);
  const abs = path.join(ROOT, r.file);
  if (fs.existsSync(abs)) queue.push(...moduleImports(fs.readFileSync(abs, 'utf8'), path.dirname(abs), r.file));
}

let failures = 0;

const unversioned = refs.filter((r) => r.version === null);
if (unversioned.length) {
  failures++;
  console.log('Local assets with no ?v= stamp (returning visitors keep the cached copy):');
  for (const r of unversioned) console.log(`  ${r.origin || r.file}`);
}

const versions = [...new Set(refs.filter((r) => r.version !== null).map((r) => r.version))];
if (versions.length > 1) {
  failures++;
  console.log(`Mixed asset versions: ${versions.sort((a, b) => a - b).join(', ')}`);
  for (const v of versions.sort((a, b) => a - b)) {
    console.log(`  v=${v}: ${refs.filter((r) => r.version === v).map((r) => r.origin || r.file).join(', ')}`);
  }
  console.log('\nBump every local asset to the same number when you change any of them.');
}

const missing = refs.filter((r) => !fs.existsSync(path.join(ROOT, r.file)));
if (missing.length) {
  failures++;
  console.log('Referenced but not present in the repo:');
  for (const r of missing) console.log(`  ${r.origin || r.file}`);
}

if (failures) process.exit(1);
console.log(`All ${refs.length} local assets exist and share v=${versions[0]}.`);
