// Render the Config.h for every board profile and diff it against a committed
// golden file.
//
// This is the check that would have caught the bug Tom found on the Terrans
// V5 Pro: applying the FYSETC E4 profile left FEATURE1/2 as DEW_HEATER on
// GPIO2/GPIO4 and STATUS_MOUNT_LED OFF, and switching boards never cleared
// them -- so the Terrans build shipped a dew heater PWM driving the RA
// direction pin. Nothing about that is visible in a diff of index.html; it
// only appears in the generated output. Goldens make the generated output
// reviewable.
//
// The profiles are also rendered a second time on a form deliberately polluted
// with another board's settings, and must come out identical. That is the
// carry-over property itself, asserted directly.
//
//   node tools/check-config-golden.mjs            verify
//   node tools/check-config-golden.mjs --update   re-record after an intended change

import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadPage, closePage, configForBoard, staticBoards, snapshotForm, restoreForm } from './page.mjs';

const UPDATE = process.argv.includes('--update');
const DIR = path.join(ROOT, 'tools', 'golden');
fs.mkdirSync(DIR, { recursive: true });

// Stand-in for "the user looked at another board first". These are the exact
// values the FYSETC E4 reference Config.h pushes into the form.
const POLLUTION = {
  FEATURE1_PURPOSE: 'DEW_HEATER', FEATURE1_NAME: 'Dew Heat 1', FEATURE1_PIN: '2',
  FEATURE2_PURPOSE: 'DEW_HEATER', FEATURE2_NAME: 'Dew Heat 2', FEATURE2_PIN: '4',
  FEATURE2_TEMP: 'THERMISTOR',
  STATUS_MOUNT_LED: 'OFF',
  STATUS_LED: 'ON',
};

const window = await loadPage();
const boards = staticBoards(window);
if (!boards.length) throw new Error('no board profiles found');

// The page is loaded once and reused, so every render has to start from the
// same place -- otherwise one board's leftovers become the next board's
// "clean" baseline and the leak test is testing the wrong thing.
const pristine = snapshotForm(window);

let failures = 0;

function pollute() {
  for (const [id, value] of Object.entries(POLLUTION)) {
    const el = window.document.getElementById(id);
    if (el) el.value = value;
  }
}

for (const board of boards) {
  const file = path.join(DIR, `${board}.Config.h`);
  restoreForm(window, pristine);
  const clean = await configForBoard(window, board);

  if (UPDATE) {
    fs.writeFileSync(file, clean);
    console.log(`  recorded  ${board}`);
    continue;
  }

  if (!fs.existsSync(file)) {
    failures++;
    console.log(`  MISSING   ${board} -- run: npm run golden:update`);
    continue;
  }

  const expected = fs.readFileSync(file, 'utf8');
  if (clean !== expected) {
    failures++;
    console.log(`  CHANGED   ${board}`);
    for (const line of firstDiffs(expected, clean)) console.log('            ' + line);
    continue;
  }

  // Same profile, but reached from a dirty form.
  restoreForm(window, pristine);
  pollute();
  const dirty = await configForBoard(window, board);
  if (dirty !== clean) {
    failures++;
    console.log(`  LEAKS     ${board} -- another board's settings survived the profile switch`);
    for (const line of firstDiffs(clean, dirty)) console.log('            ' + line);
    continue;
  }

  console.log(`  ok        ${board}`);
}

/** The first few differing #define lines, which is what anyone actually wants. */
function firstDiffs(a, b, limit = 8) {
  const al = a.split('\n');
  const bl = b.split('\n');
  const out = [];
  for (let i = 0; i < Math.max(al.length, bl.length) && out.length < limit; i++) {
    if (al[i] !== bl[i]) {
      out.push(`- ${(al[i] ?? '<missing>').trim().slice(0, 100)}`);
      out.push(`+ ${(bl[i] ?? '<missing>').trim().slice(0, 100)}`);
    }
  }
  const total = al.filter((l, i) => l !== bl[i]).length;
  if (total * 2 > out.length) out.push(`… ${total} differing line(s) in total`);
  return out;
}

// The work above takes well under a second. Without this teardown the page's
// own timers hold Node open and the check looks like it hangs.
closePage(window);

if (UPDATE) {
  console.log(`\nRecorded ${boards.length} golden file(s). Review the diff before committing.`);
  process.exit(0);
}
if (failures) {
  console.error(`\n${failures} board profile(s) differ from their golden file.`);
  console.error('If the change was intended: npm run golden:update, then review the diff.');
  process.exit(1);
}
console.log(`\nAll ${boards.length} board profiles match their golden file, from a clean and a dirty form.`);
process.exit(0);
