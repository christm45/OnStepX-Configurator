// Preflight validator — pure rules, no DOM, no network.
//
// Philosophy: help users spot the 80% of mistakes that cost them a failed
// build or a confused board. This is not a replacement for OnStepX's own
// Validate.h — that's the authoritative check at compile time. We just try
// to catch stuff locally so users don't pay a 2-minute GitHub Actions round
// trip for an obvious oversight.

// PINMAP → the MCU family that pinmap's pin numbering targets.
// If the Compile tab's MCU target disagrees, the build will fail.
// PINMAP → expected MCU family for the build. Only pinmaps the build service
// has an env for are listed. Unknown pinmaps fall through to a soft warning.
export const PINMAP_MCU = {
  MaxPCB4: 'teensy41',
  MaxESP3: 'esp32',
  MaxESP4: 'esp32',
  FYSETC_E4: 'esp32',
  MaxSTM3: 'blackpill_f411',
  // CNC3 = Arduino CNC Shield V3 on WeMos D1 R32 (ESP32). Deprecated per the
  // OnStep wiki (only legacy CNC option). Confirmed by OnStepX
  // src/pinmaps/Pins.CNC3.h: `#if defined(ESP32)` and Constants.h comment
  // "Arduino CNC Sheild on WeMos D1 R32 (ESP32)".
  CNC3: 'esp32',
  MaxSTM3I: 'blackpill_f411',
  MiniPCB: 'teensy32',
  MiniPCB13: 'teensy32',
  MiniPCB2: 'teensy32',
  BTT_SKR_PRO: 'skr_pro_f407',
};

// Microstep values typically supported by each driver family.
// Numbers outside this set may still work on TMC drivers via interpolation,
// but lose closed-loop accuracy — worth a warning.
export const DRIVER_MICROSTEPS = {
  A4988:   [1, 2, 4, 8, 16],
  DRV8825: [1, 2, 4, 8, 16, 32],
  GENERIC: [1, 2, 4, 8, 16, 32, 64, 128, 256],
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
  // Servo drivers don't have a "microsteps" concept — accept any value
  SERVO_PE: null,
  SERVO_EE: null,
  SERVO_TMC2209: null,
  SERVO_TMC5160: null,
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

  // --- Teensy 4.x requires STEP_WAVE_FORM=SQUARE (hard constraint in
  //     OnStepX Validate.h). PULSE compiles fine on ESP32/STM32 but the
  //     Teensy 4.x step engine needs the SQUARE waveform.
  if ((values.COMPILE_ENV === 'teensy40' || values.COMPILE_ENV === 'teensy41') &&
      values.STEP_WAVE_FORM && values.STEP_WAVE_FORM !== 'SQUARE') {
    add('error', 'STEP_WAVE_FORM',
      `Teensy 4.x requires STEP_WAVE_FORM=SQUARE (currently ${values.STEP_WAVE_FORM}). ` +
      `Fix on the Controller tab, or the compile will fail with Validate.h #error.`);
  }

  // --- Mirrors of commonly-hit OnStepX Validate.h #error conditions.
  //     Not exhaustive (Validate.h has 306 #errors) — these are the ones
  //     most likely to surface from the form alone.

  // AXIS1 and AXIS2 driver models must both be OFF or both set.
  const a1 = values.AXIS1_DRIVER_MODEL || 'OFF';
  const a2 = values.AXIS2_DRIVER_MODEL || 'OFF';
  if ((a1 === 'OFF') !== (a2 === 'OFF')) {
    add('error', 'AXIS1_DRIVER_MODEL',
      'AXIS1_DRIVER_MODEL and AXIS2_DRIVER_MODEL must both be OFF or both set to a driver. ' +
      'OnStepX refuses to activate the mount with one axis configured and the other not.');
  }

  // Motor current (IRUN / IHOLD) must be OFF or 0–3000 mA.
  for (const axis of [1, 2, 3, 4]) {
    for (const which of ['IRUN', 'IHOLD']) {
      const key = `AXIS${axis}_DRIVER_${which}`;
      const v = values[key];
      if (!v || v === 'OFF') continue;
      const n = Number(v);
      if (!Number.isFinite(n) || n < 0 || n > 3000) {
        add('error', key, `${key}=${v} is out of range. Use OFF or 0–3000 (mA).`);
      }
    }
  }

  // Axis range limits — Validate.h enforces these specific windows.
  const rangeChecks = [
    { id: 'AXIS1_LIMIT_MIN', lo: -360, hi: -90,  hint: '-90 to -360 degrees' },
    { id: 'AXIS1_LIMIT_MAX', lo: 90,   hi: 360,  hint: '90 to 360 degrees' },
    { id: 'AXIS2_LIMIT_MIN', lo: -90,  hi: 0,    hint: '-90 to 0 degrees' },
    { id: 'AXIS2_LIMIT_MAX', lo: 0,    hi: 90,   hint: '0 to 90 degrees' },
  ];
  for (const r of rangeChecks) {
    const v = values[r.id];
    if (v === undefined || v === '') continue;
    const n = Number(v);
    if (!Number.isFinite(n) || n < r.lo || n > r.hi) {
      add('error', r.id, `${r.id}=${v} is outside the valid range (${r.hint}).`);
    }
  }

  // SERIAL_RADIO requires an ESP32 build (BLUETOOTH/WIFI_* aren't implemented
  // on Teensy / STM32). OnStepX Validate.h fires a more specific pinmap
  // error, but catching it here saves the round-trip.
  if (values.SERIAL_RADIO && values.SERIAL_RADIO !== 'OFF' &&
      values.COMPILE_ENV && values.COMPILE_ENV !== 'esp32') {
    add('error', 'SERIAL_RADIO',
      `SERIAL_RADIO=${values.SERIAL_RADIO} requires an ESP32 build target (current: ${values.COMPILE_ENV}). ` +
      `BLUETOOTH / WIFI_ACCESS_POINT / WIFI_STATION aren't supported on Teensy or STM32.`);
  }


  // Simple ON/OFF whitelist — Validate.h errors if these are anything else.
  const onOffFields = [
    'STATUS_LED', 'RETICLE_LED_MEMORY', 'RETICLE_LED_INVERT',
    'AXIS1_REVERSE', 'AXIS2_REVERSE',
    'AXIS1_POWER_DOWN', 'AXIS2_POWER_DOWN',
    'MOUNT_COORDS_MEMORY', 'MOUNT_ENABLE_IN_STANDBY',
    'TRACK_AUTOSTART', 'ST4_INTERFACE', 'ST4_HAND_CONTROL',
    'GUIDE_DISABLE_BACKLASH', 'GOTO_FEATURE',
  ];
  for (const f of onOffFields) {
    const v = values[f];
    if (v !== undefined && v !== '' && v !== 'ON' && v !== 'OFF') {
      add('warn', f, `${f}=${v} is probably wrong. OnStepX Validate.h expects ON or OFF.`);
    }
  }

  // Microsteps should be a power of two (Validate.h emits a warning, we
  // promote to a warn here too).
  for (const axis of [1, 2, 3, 4]) {
    const key = `AXIS${axis}_DRIVER_MICROSTEPS`;
    const v = values[key];
    if (!v || v === 'OFF') continue;
    const n = Number(v);
    if (Number.isFinite(n) && n >= 1 && n <= 256 && (n & (n - 1)) !== 0) {
      add('warn', key, `${key}=${n} isn't a power of 2 (1/2/4/8/16/32/64/128/256). Most drivers ignore non-binary microstep modes.`);
    }
  }

  // FEATURE*_PIN = AUX is rejected by OnStepX's current Validate.h
  // (AUX is defined as -4, and the check `!= OFF && < 0` fires the #error
  // before Features.cpp's runtime AUX substitution ever runs). Catch this
  // before the compile round-trip.
  for (let i = 1; i <= 8; i++) {
    const key = `FEATURE${i}_PIN`;
    const v = values[key];
    if (v === 'AUX') {
      add('error', key,
        `${key}=AUX isn't accepted by OnStepX main — pick OFF or a real pin number ` +
        `(or one of the board's AUXn_PIN aliases, e.g. AUX${i}_PIN).`);
    }
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
