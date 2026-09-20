// build-service/ in this repo must match the live christm45/onstepx-build-service.
//
// Why this exists: the two drifted badly and silently. Fixes went straight
// into the live repo -- the SHC DISPLAY_LANGUAGE patch, the obsolete-macro
// sanitizer, the FYSETC_E4 forced-OFF pass, `lib_ignore = NativeEthernet`,
// the SWS Ethernet libs -- while this folder stayed on a June snapshot. And
// SETUP-COMPILE-SERVICE.md tells you to push this folder to that repo, so
// following the documentation would have quietly reverted every one of them.
//
// Read-only and unauthenticated-capable: the build repo is public. In Actions,
// GITHUB_TOKEN is picked up from the environment to avoid the anonymous API
// rate limit. Line endings are normalised, since this repo checks out CRLF.

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './page.mjs';

const REPO = process.env.BUILD_SERVICE_REPO || 'christm45/onstepx-build-service';
const LOCAL = path.join(ROOT, 'build-service');

const headers = { accept: 'application/vnd.github+json', 'user-agent': 'onstepx-configurator-ci' };
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (token) headers.authorization = `Bearer ${token}`;

const lf = (s) => s.replace(/\r\n/g, '\n');

async function api(p) {
  const res = await fetch(`https://api.github.com/${p}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} ${res.statusText} for ${p}`);
  return res.json();
}

function localFiles(dir = LOCAL, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...localFiles(path.join(dir, entry.name), rel));
    else out.push(rel);
  }
  return out.sort();
}

const tree = await api(`repos/${REPO}/git/trees/HEAD?recursive=1`);
const remote = tree.tree.filter((n) => n.type === 'blob').map((n) => n.path).sort();
const local = localFiles();

let failures = 0;
const report = (kind, list) => {
  if (!list.length) return;
  failures += list.length;
  console.log(`${kind}:`);
  for (const f of list) console.log(`  ${f}`);
};

report('Present live but missing from build-service/ here', remote.filter((f) => !local.includes(f)));
report('Present here but not in the live repo', local.filter((f) => !remote.includes(f)));

const differing = [];
for (const f of remote.filter((f) => local.includes(f))) {
  const meta = await api(`repos/${REPO}/contents/${encodeURI(f)}`);
  const liveText = Buffer.from(meta.content, 'base64').toString('utf8');
  const localText = fs.readFileSync(path.join(LOCAL, f), 'utf8');
  if (lf(liveText) !== lf(localText)) differing.push(f);
}
report('Content differs from the live repo', differing);

if (failures) {
  console.error(`\nbuild-service/ is out of sync with ${REPO}.`);
  console.error('The LIVE repo is what actually builds firmware, so it wins on conflict.');
  console.error('Pull it down before changing anything here:');
  console.error('  node tools/sync-build-service.mjs');
  process.exit(1);
}
console.log(`build-service/ matches ${REPO} (${remote.length} files).`);
