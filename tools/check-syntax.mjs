// Parse-check every piece of JavaScript the site ships.
//
// index.html carries two large inline <script> blocks. A syntax error in
// either one is invisible to git, invisible to review, and ships straight to
// GitHub Pages as a blank or half-dead page. Node's parser is the cheapest
// possible guard.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { ROOT, readIndex, inlineScripts } from './page.mjs';

let failures = 0;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'onstepx-syntax-'));

function check(label, code, ext) {
  const file = path.join(tmp, `chk-${label.replace(/[^\w.-]/g, '_')}${ext}`);
  fs.writeFileSync(file, code);
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
    console.log(`  ok    ${label}`);
  } catch (err) {
    failures++;
    console.log(`  FAIL  ${label}`);
    console.log(String(err.stderr || err.message).split('\n').slice(0, 12).map((l) => '        ' + l).join('\n'));
  }
}

console.log('index.html inline scripts:');
const scripts = inlineScripts(readIndex());
if (scripts.length !== 2) {
  console.log(`  FAIL  expected 2 inline scripts (one classic, one module), found ${scripts.length}`);
  failures++;
}
scripts.forEach((s, i) => check(`inline#${i}${s.module ? ' (module)' : ' (classic)'}`, s.code, s.module ? '.mjs' : '.js'));

console.log('standalone JavaScript:');
const files = [
  ...fs.readdirSync(ROOT).filter((f) => f.endsWith('.js')).map((f) => f),
  ...fs.readdirSync(path.join(ROOT, 'flash')).filter((f) => f.endsWith('.js')).map((f) => 'flash/' + f),
  ...fs.readdirSync(path.join(ROOT, 'cloudflare-worker')).filter((f) => f.endsWith('.js')).map((f) => 'cloudflare-worker/' + f),
].sort();
for (const rel of files) {
  // Everything here is either an ES module or plain script; .mjs parses both.
  check(rel, fs.readFileSync(path.join(ROOT, rel), 'utf8'), '.mjs');
}

fs.rmSync(tmp, { recursive: true, force: true });
if (failures) {
  console.error(`\n${failures} file(s) failed to parse.`);
  process.exit(1);
}
console.log('\nAll JavaScript parses.');
