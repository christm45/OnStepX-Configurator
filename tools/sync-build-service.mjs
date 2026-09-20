// Pull the live christm45/onstepx-build-service into build-service/.
//
// Direction is deliberate and one-way: the live repo is what GitHub Actions
// actually runs, so it is the source of truth and this folder is a mirror for
// reading and reviewing. Editing the mirror changes nothing on its own —
// commit a change there and it has to be applied to the build repo too.
//
//   node tools/sync-build-service.mjs

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './page.mjs';

const REPO = process.env.BUILD_SERVICE_REPO || 'christm45/onstepx-build-service';
const LOCAL = path.join(ROOT, 'build-service');

const headers = { accept: 'application/vnd.github+json', 'user-agent': 'onstepx-configurator-sync' };
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (token) headers.authorization = `Bearer ${token}`;

async function api(p) {
  const res = await fetch(`https://api.github.com/${p}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} ${res.statusText} for ${p}`);
  return res.json();
}

const tree = await api(`repos/${REPO}/git/trees/HEAD?recursive=1`);
const files = tree.tree.filter((n) => n.type === 'blob').map((n) => n.path).sort();

for (const f of files) {
  const meta = await api(`repos/${REPO}/contents/${encodeURI(f)}`);
  const body = Buffer.from(meta.content, 'base64');
  const dest = path.join(LOCAL, f);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, body);
  console.log(`  ${f} (${body.length} bytes)`);
}

// Anything here that the live repo no longer has is stale.
const stale = [];
(function walk(dir, prefix = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walk(path.join(dir, entry.name), rel);
    else if (!files.includes(rel)) stale.push(rel);
  }
})(LOCAL);

if (stale.length) {
  console.log('\nNot in the live repo any more — delete if that was intended:');
  for (const f of stale) console.log(`  build-service/${f}`);
}
console.log(`\nSynced ${files.length} file(s) from ${REPO}.`);
