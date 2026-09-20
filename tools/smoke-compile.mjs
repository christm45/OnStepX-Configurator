// Compile every board profile for real, through the production pipeline.
//
// The golden check proves what Config.h each profile PRODUCES. It cannot tell
// you whether that Config.h actually builds against current OnStepX. This
// does: it feeds each golden file to the live Cloudflare Worker exactly as the
// website does, waits for the GitHub Actions run, and reports the conclusion.
//
// Not part of CI -- it dispatches a real build per board and takes minutes.
// Run it by hand after changing a board profile, or when upstream OnStepX
// moves and you want to know what still compiles.
//
//   node tools/smoke-compile.mjs                 all boards
//   node tools/smoke-compile.mjs TERRANS_V5PRO   just one
//   node tools/smoke-compile.mjs --ref v10.28    against a specific upstream ref

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT } from './page.mjs';

const { startCompile, pollUntilDone, PINMAP_TO_ENV, WORKER_URL } =
  await import(pathToFileURL(path.join(ROOT, 'compile.js')).href);

const argv = process.argv.slice(2);
const refIdx = argv.indexOf('--ref');
const REF = refIdx >= 0 ? argv[refIdx + 1] : 'main';
const only = argv.filter((a) => !a.startsWith('--') && a !== REF);

const DIR = path.join(ROOT, 'tools', 'golden');
const boards = fs.readdirSync(DIR)
  .filter((f) => f.endsWith('.Config.h'))
  .map((f) => f.replace('.Config.h', ''))
  .filter((b) => !only.length || only.includes(b))
  .sort();

if (!boards.length) {
  console.error('no matching golden files; run `npm run golden:update` first');
  process.exit(1);
}

console.log(`Worker : ${WORKER_URL}`);
console.log(`Upstream ref: ${REF}`);
console.log(`Boards : ${boards.join(', ')}\n`);

const started = boards.map((board) => {
  const env = PINMAP_TO_ENV[board];
  const config = fs.readFileSync(path.join(DIR, `${board}.Config.h`), 'utf8');
  if (!env) return { board, error: 'no PlatformIO env mapped in compile.js' };
  return startCompile(config, env, REF, 'onstepx', [])
    .then((requestId) => ({ board, env, requestId }))
    .catch((err) => ({ board, env, error: err.message }));
});

const dispatched = await Promise.all(started);
for (const d of dispatched) {
  console.log(d.error ? `  ✗ ${d.board.padEnd(15)} dispatch failed: ${d.error}`
                      : `  → ${d.board.padEnd(15)} ${d.env.padEnd(16)} ${d.requestId}`);
}
console.log('\nWaiting for builds…\n');

const results = await Promise.all(dispatched.map(async (d) => {
  if (d.error) return { ...d, conclusion: 'dispatch-failed' };
  try {
    const final = await pollUntilDone(d.requestId, () => {}, { timeoutMs: 20 * 60 * 1000 });
    return { ...d, conclusion: final.conclusion, runId: final.run_id, url: final.html_url };
  } catch (err) {
    return { ...d, conclusion: 'timeout', error: err.message };
  }
}));

let failed = 0;
for (const r of results.sort((a, b) => a.board.localeCompare(b.board))) {
  const ok = r.conclusion === 'success';
  if (!ok) failed++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${r.board.padEnd(15)} ${String(r.env || '').padEnd(16)} ${r.conclusion}`);
  if (!ok && r.url) console.log(`        ${r.url}`);
  if (!ok && r.error) console.log(`        ${r.error}`);
}

console.log(`\n${results.length - failed}/${results.length} board profiles compile against ${REF}.`);
process.exit(failed ? 1 : 0);
