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
  FYSETC_S6: 'f446_fysetc_s6',
  FYSETC_S6_2: 'f446_fysetc_s6',
  // MiniPCB v1 / v2 — pinmap supports Teensy 3.2 and Teensy 4.0. The
  // validator's preflight uses teensy32 as the canonical answer; if the user
  // has manually picked teensy40 we accept it (handled in the soft check
  // below) since OnStepX's Pins.MiniPCB.h covers __IMXRT1062__ too.
  MiniPCB: 'teensy32',
  MiniPCB2: 'teensy32',
  BTT_SKR_PRO: 'skr_pro_f407',
};

// PINMAPs that the OnStep wiki documents as incompatible with TMC UART
// drivers (TMC2208 / 2209 / 2225 / 2226). The board is wired for SPI TMC or
// step/dir only; picking a UART driver here silently fails at runtime.
//   FYSETC S6: https://onstep.groups.io/g/main/wiki/21159 — "Do not use any
//              other driver than: TMC5160, TMC2130, LV8729 or S109."
const PINMAPS_NO_TMC_UART = new Set(['FYSETC_S6', 'FYSETC_S6_2']);
const TMC_UART_DRIVERS = new Set(['TMC2208', 'TMC2209', 'TMC2225', 'TMC2226']);

// PINMAPs whose Pins.<Board>.h auto-assigns STATUS_LED_PIN and
// STATUS_BUZZER_PIN to the SAME GPIO. OnStepX's Validate.h hard-errors at
// compile time if both STATUS_LED and STATUS_BUZZER are ON for these
// boards. The user has to pick one.
//   MaxESP3: STATUS_LED_PIN = STATUS_BUZZER_PIN = AUX8_PIN
//   MaxESP4: STATUS_LED_PIN = STATUS_BUZZER_PIN = 12
//   FYSETC_E4: STATUS_LED_PIN = STATUS_BUZZER_PIN = AUX8_PIN
const PINMAPS_LED_BUZZER_SHARED_PIN = new Set([
  'MaxESP3', 'MaxESP4', 'FYSETC_E4',
]);

// OnStepX plugin → required SERIAL_RADIO mode. Plugins that need WiFi
// fail at compile time with a #error from the plugin's own Validate.h
// when SERIAL_RADIO is anything else (including BLUETOOTH).
const PLUGIN_NEEDS_WIFI = new Set([
  'website',     // src/plugins/website/Website.h fires:
                 //   "The website plugin requires SERIAL_RADIO be set to
                 //    WIFI_STATION or WIFI_ACCESS_POINT"
  'elegantota',  // pairs with Website — same WiFi requirement
  'metrics',     // exposes /metrics over HTTP — WiFi only
]);
const SERIAL_RADIO_WIFI = new Set(['WIFI_STATION', 'WIFI_ACCESS_POINT']);

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
  // MiniPCB v1 / v2 are dual-MCU pinmaps: Pins.MiniPCB.h gates on both
  // __MK20DX256__ (Teensy 3.2) and __IMXRT1062__ (Teensy 4.0), so either
  // teensy32 or teensy40 is a legitimate compile target for them.
  const PINMAP_ALT_ENVS = {
    MiniPCB: ['teensy32', 'teensy40'],
    MiniPCB2: ['teensy32', 'teensy40'],
  };
  if (!values.PINMAP || values.PINMAP === 'OFF') {
    add('error', 'PINMAP', 'PINMAP is OFF — pick a board on the Controller tab.');
  } else {
    const expected = PINMAP_MCU[values.PINMAP];
    const altEnvs = PINMAP_ALT_ENVS[values.PINMAP];
    const acceptable =
      values.COMPILE_ENV === expected ||
      (altEnvs && altEnvs.includes(values.COMPILE_ENV));
    if (expected && values.COMPILE_ENV && !acceptable) {
      const accepted = altEnvs ? altEnvs.join(' or ') : expected;
      add('error', 'PINMAP',
        `PINMAP=${values.PINMAP} expects MCU target ${accepted}, but you picked "${values.COMPILE_ENV}". Change one so they match.`);
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

  // STATUS_LED + STATUS_BUZZER pin-sharing: on the boards in
  // PINMAPS_LED_BUZZER_SHARED_PIN, OnStepX's Validate.h fires
  //   #error "Configuration (Config.h): STATUS_BUZZER enabled but AUX8_PIN
  //   is already in use, choose one feature on AUX8_PIN"
  // when both are ON. Catch it locally — saves a 30-second CI round-trip.
  if (PINMAPS_LED_BUZZER_SHARED_PIN.has(values.PINMAP) &&
      values.STATUS_LED && values.STATUS_LED !== 'OFF' &&
      values.STATUS_BUZZER && values.STATUS_BUZZER !== 'OFF') {
    add('error', 'STATUS_BUZZER',
      `On PINMAP=${values.PINMAP} the pinmap routes STATUS_LED and STATUS_BUZZER to the same GPIO. ` +
      `OnStepX's Validate.h refuses to compile with both ON. Set either STATUS_LED=OFF or ` +
      `STATUS_BUZZER=OFF on the Controller tab.`);
  }

  // Plugins that require WiFi: if any are ticked but SERIAL_RADIO is OFF /
  // BLUETOOTH, the plugin's own Validate.h fires (e.g. for "website":
  //   "The website plugin requires SERIAL_RADIO be set to WIFI_STATION or
  //    WIFI_ACCESS_POINT").
  // We surface that locally so users don't waste a build minute on a config
  // mismatch they could fix in 2 clicks.
  const selectedPlugins = Array.isArray(values._plugins) ? values._plugins : [];
  const wifiPlugins = selectedPlugins.filter((p) => PLUGIN_NEEDS_WIFI.has(p));
  if (wifiPlugins.length > 0 && !SERIAL_RADIO_WIFI.has(values.SERIAL_RADIO)) {
    const list = wifiPlugins.join(', ');
    add('error', 'SERIAL_RADIO',
      `Plugin${wifiPlugins.length > 1 ? 's' : ''} '${list}' need${wifiPlugins.length > 1 ? '' : 's'} ` +
      `WiFi to be useful, but SERIAL_RADIO=${values.SERIAL_RADIO || 'OFF'}. Set SERIAL_RADIO to ` +
      `WIFI_STATION (joins your existing WiFi) or WIFI_ACCESS_POINT (board hosts its own AP) on the ` +
      `Controller tab — or untick the plugin if you don't actually want WiFi.`);
  }

  // FYSETC S6: per the OnStep wiki, only SPI TMC (2130/5160) or step/dir
  // (LV8729/S109) are supported on this board. UART steppers compile but
  // don't talk to the drivers — silent fail at runtime.
  if (PINMAPS_NO_TMC_UART.has(values.PINMAP)) {
    for (const axis of [1, 2, 3, 4]) {
      const key = `AXIS${axis}_DRIVER_MODEL`;
      const v = values[key];
      if (v && TMC_UART_DRIVERS.has(v)) {
        add('error', key,
          `${key}=${v} won't work on PINMAP=${values.PINMAP}. ` +
          `Per the OnStep wiki this board only supports TMC2130 / TMC5160 (SPI), LV8729 or S109. ` +
          `Switch ${key} to one of those, or pick a different PINMAP.`);
      }
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
