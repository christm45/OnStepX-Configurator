// Preflight validator — pure rules, no DOM, no network.
//
// Philosophy: help users spot the 80% of mistakes that cost them a failed
// build or a confused board. This is not a replacement for OnStepX's own
// Validate.h — that's the authoritative check at compile time. We just try
// to catch stuff locally so users don't pay a 2-minute GitHub Actions round
// trip for an obvious oversight.

// PINMAP → the MCU family that pinmap's pin numbering targets.
// If the Compile tab's MCU target disagrees, the build will fail.
export const PINMAP_MCU = {
  MiniPCB: 'teensy32',
  MiniPCB2: 'teensy32',
  MaxPCB: 'teensy40',
  MaxPCB3: 'teensy41',
  MaxPCB4: 'teensy41',
  MaxESP3: 'esp32',
  MaxESP4: 'esp32',
  FYSETC_E4: 'esp32',
  MaxSTM3: 'blackpill_f411',
  BTT_SKR_PRO: 'blackpill_f411',
  CNC3: 'teensy40',
  CNC3_2: 'teensy40',
};

// Microstep values typically supported by each driver family.
// Numbers outside this set may still work on TMC drivers via interpolation,
// but lose closed-loop accuracy — worth a warning.
export const DRIVER_MICROSTEPS = {
  A4988:   [1, 2, 4, 8, 16],
  DRV8825: [1, 2, 4, 8, 16, 32],
  LV8729:  [1, 2, 4, 8, 16, 32, 64, 128],
  RAPS128: [1, 2, 4, 8, 16, 32, 64, 128],
  S109:    [1, 2, 4, 8, 16, 32, 64, 128],
  ST820:   [1, 2, 4, 8, 16, 32, 128, 256],
  TMC2100: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC2208: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC2209: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC2225: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC2226: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC2130: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC5160: [1, 2, 4, 8, 16, 32, 64, 128, 256],
  TMC5161: [1, 2, 4, 8, 16, 32, 64, 128, 256],
};

export const MOUNT_TYPES_COMMON = ['GEM', 'FORK', 'FORK_ALT', 'ALTAZM'];

/**
 * values: {id: value, ...} — a snapshot of relevant form fields.
 * Returns {issues: [{level, id, message}], hasErrors, hasWarnings, counts}.
 */
export function validateConfig(values) {
  const issues = [];
  const add = (level, id, message) => issues.push({ level, id, message });

  // --- PINMAP ---
  if (!values.PINMAP || values.PINMAP === 'OFF') {
    add('error', 'PINMAP', 'PINMAP is OFF — pick a board on the Controller tab.');
  } else {
    const expected = PINMAP_MCU[values.PINMAP];
    if (expected && values.COMPILE_ENV && expected !== values.COMPILE_ENV) {
      add('error', 'PINMAP',
        `PINMAP=${values.PINMAP} is a ${expected} board, but you picked MCU target "${values.COMPILE_ENV}". Change one so they match.`);
    } else if (!expected) {
      add('warn', 'PINMAP',
        `PINMAP=${values.PINMAP} isn't in the known table — make sure your MCU target "${values.COMPILE_ENV || '?'}" is correct for this board.`);
    }
  }

  // --- MOUNT_TYPE ---
  if (!values.MOUNT_TYPE || values.MOUNT_TYPE === 'OFF') {
    add('error', 'MOUNT_TYPE', 'MOUNT_TYPE is OFF — pick GEM, FORK, or ALTAZM on the Mount tab.');
  } else if (!MOUNT_TYPES_COMMON.includes(values.MOUNT_TYPE)) {
    add('warn', 'MOUNT_TYPE', `MOUNT_TYPE=${values.MOUNT_TYPE} is unusual — double-check it's intentional.`);
  }

  // --- Per-axis driver + microsteps + steps/deg ---
  for (const axis of [1, 2]) {
    const modelKey = `AXIS${axis}_DRIVER_MODEL`;
    const msKey = `AXIS${axis}_DRIVER_MICROSTEPS`;
    const spdKey = `AXIS${axis}_STEPS_PER_DEGREE`;
    const model = values[modelKey];
    const microsteps = Number(values[msKey]);
    const steps = Number(values[spdKey]);

    if (!model || model === 'OFF') {
      add('error', modelKey, `Axis ${axis} driver model is OFF — set it on the Axis${axis} tab.`);
    } else if (microsteps && DRIVER_MICROSTEPS[model] && !DRIVER_MICROSTEPS[model].includes(microsteps)) {
      add('warn', msKey,
        `Axis ${axis}: ${model} usually supports ${DRIVER_MICROSTEPS[model].join('/')} microsteps — you picked ${microsteps}.`);
    }

    if (!steps || steps === 0) {
      add('error', spdKey, `Axis ${axis} STEPS_PER_DEGREE is 0 — use the Calculator tab.`);
    } else if (steps < 500 || steps > 200000) {
      add('warn', spdKey,
        `Axis ${axis} STEPS_PER_DEGREE=${steps} is outside the typical 500–200000 range — double-check your calculator inputs.`);
    }
  }

  // --- MCU target set? (set by UI default, but still) ---
  if (!values.COMPILE_ENV) {
    add('error', 'COMPILE_ENV', 'No MCU target selected on the Compile & Flash tab.');
  }

  const counts = {
    error: issues.filter((i) => i.level === 'error').length,
    warn: issues.filter((i) => i.level === 'warn').length,
    info: issues.filter((i) => i.level === 'info').length,
  };
  return {
    issues,
    counts,
    hasErrors: counts.error > 0,
    hasWarnings: counts.warn > 0,
  };
}

// --- Secret-field scanner ----------------------------------------------------

const SECRET_PATTERNS = [/PASSWORD/i, /_PSK\b/i, /_KEY\b/i, /SECRET/i, /TOKEN/i];
const SAFE_SECRET_VALUES = new Set(['', 'OFF', '""', '"OFF"']);

/**
 * Scan a generated Config.h for sensitive-looking non-empty #defines.
 * Returns [{name, value}] for each suspect line.
 */
export function findSecrets(configH) {
  const hits = [];
  const re = /^\s*#define\s+(\w+)\s+(.+?)\s*(?:\/\/.*)?$/gm;
  let m;
  while ((m = re.exec(configH)) !== null) {
    const name = m[1];
    let value = m[2].trim();
    // strip trailing commas that OnStepX configs use as formatting
    value = value.replace(/,\s*$/, '');
    if (SAFE_SECRET_VALUES.has(value)) continue;
    if (SECRET_PATTERNS.some((p) => p.test(name))) {
      hits.push({ name, value });
    }
  }
  return hits;
}
