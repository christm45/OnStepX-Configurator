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
  // Terrans Industry V5 Pro. Not an upstream PINMAP token: the generated
  // Config.h emits `#define PINMAP OFF` plus the board's pin map inline, which
  // OnStepX supports explicitly (src/Validate.h: "PINMAP must be set to a valid
  // board (from Constants.h) or OFF (for user pin defs in Config.h)"). The
  // board is an ESP32 + a separate ESP8266 running SmartWebServer; only the
  // ESP32 half is built here.
  TERRANS_V5PRO: 'esp32',
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
//   Terrans V5 Pro: the board ships TMC2225 "Dual V2" modules strapped for
//              standalone step/dir, and our PINMAP=OFF pin block can't define
//              SERIAL_TMC anyway — STEP_DIR_TMC_UART_PRESENT is set by
//              Config.defaults.h, which the preprocessor only reaches after
//              Config.h, so the pinmap's `#if defined(...)` UART block would
//              never fire. OnStepX then hard-errors in src/Validate.h with
//              "This PINMAP doesn't support TMC UART mode drivers".
const PINMAPS_NO_TMC_UART = {
  FYSETC_S6: 'Per the OnStep wiki this board only supports TMC2130 / TMC5160 (SPI), LV8729 or S109.',
  FYSETC_S6_2: 'Per the OnStep wiki this board only supports TMC2130 / TMC5160 (SPI), LV8729 or S109.',
  TERRANS_V5PRO:
    'This board uses standalone (non-UART) drivers — use the TMC2225S / TMC2209S / TMC2226S ' +
    'step/dir models instead. The stock modules are TMC2225 "Dual V2" strapped standalone, so ' +
    'TMC2225S is the right pick.',
};
const TMC_UART_DRIVERS = new Set(['TMC2208', 'TMC2209', 'TMC2225', 'TMC2226']);

// Multi-purpose AUX pin knowledge, transcribed from upstream OnStepX
// src/pinmaps/Pins.<Board>.h. `aux` lists the AUXn_PIN numbers the board
// defines (anything else is OFF via Pins.defaults.h). Every other key names a
// role pin that src/pinmaps/Validate.h compares against an AUX pin, and gives
// the AUX number it resolves to (the pins are compared by value, so e.g.
// MaxSTM's AXIS1_M3_PIN PA6 counts as AUX1). Roles on a non-AUX GPIO are
// simply absent: upstream never checks them, so e.g. MaxESP4's STATUS_LED and
// STATUS_BUZZER both on GPIO12 is NOT an error.
//   M3: {axis: aux} for AXISn_M3_PIN (checked against AXISn_DRIVER_STATUS)
//   m3UnlessAxis4PowerDown: Pins.MaxESP3.h only defines AXIS1/2_M3_PIN when
//                           AXIS4_POWER_DOWN != ON.
const MAXSTM_AUX = {
  aux: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  MOUNT_LED: 0, STATUS_LED: 0, RETICLE_LED: 8, PPS_SENSE: 2, LIMIT_SENSE: 7,
  AXIS1_HOME: 3, AXIS2_HOME: 4, M3: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 },
};
const MINIPCB_AUX = {
  aux: [0, 1, 2, 3, 4],               // AUX5 (DAC A14) only on Teensy 3.2
  MOUNT_LED: 0, STATUS_LED: 0, RETICLE_LED: 4, LIMIT_SENSE: 3,
  AXIS1_HOME: 3, AXIS2_HOME: 4, ADDON_GPIO0: 1, ADDON_RESET: 2, M3: { 1: 1, 2: 2 },
};
export const PINMAP_AUX = {
  MaxESP3: {
    aux: [2, 3, 4, 7, 8],
    MOUNT_LED: 8, STATUS_LED: 8, RETICLE_LED: 8, STATUS_BUZZER: 8,
    PPS_SENSE: 7, LIMIT_SENSE: 7, AXIS1_HOME: 3, AXIS2_HOME: 4,
    ADDON_RESET: 2, M3: { 1: 2, 2: 2 }, m3UnlessAxis4PowerDown: true,
  },
  // Terrans V5 Pro: the inline pin block is Pins.MaxESP3.h with AUX2_PIN -1
  // (GPIO4 is AXIS1 DIR), so ADDON_RESET / AXISn_M3 resolve to OFF.
  TERRANS_V5PRO: {
    aux: [3, 4, 7, 8],
    MOUNT_LED: 8, STATUS_LED: 8, RETICLE_LED: 8, STATUS_BUZZER: 8,
    PPS_SENSE: 7, LIMIT_SENSE: 7, AXIS1_HOME: 3, AXIS2_HOME: 4,
  },
  MaxESP4: {
    aux: [2, 3, 4, 5, 6, 7, 8],
    RETICLE_LED: 8, PPS_SENSE: 7, LIMIT_SENSE: 7, AXIS1_HOME: 3, AXIS2_HOME: 4,
  },
  CNC3: {
    aux: [2, 3, 4, 7, 8],
    MOUNT_LED: 8, STATUS_LED: 8, RETICLE_LED: 8,
    PPS_SENSE: 7, LIMIT_SENSE: 7, AXIS1_HOME: 3, AXIS2_HOME: 4,
    ADDON_RESET: 2, M3: { 1: 2, 2: 2 },
  },
  // AUX7_PIN is SPARE_RX_PIN, which is OFF with the onboard TMC2209 UART drivers.
  FYSETC_E4: {
    aux: [3, 4, 5, 6, 8],
    MOUNT_LED: 8, STATUS_LED: 8, RETICLE_LED: 8, STATUS_BUZZER: 8,
    AXIS1_HOME: 3, AXIS2_HOME: 4,
  },
  MaxPCB4: MAXSTM_AUX,
  MaxSTM3: MAXSTM_AUX,
  MaxSTM3I: MAXSTM_AUX,
  MiniPCB: MINIPCB_AUX,
  MiniPCB2: MINIPCB_AUX,
  // AUX pins are the FAN/HEATER outputs, which no role pin shares.
  FYSETC_S6: { aux: [1, 2, 3, 4, 5, 6, 7] },
  FYSETC_S6_2: { aux: [1, 2, 3, 4, 5, 6, 7] },
  BTT_SKR_PRO: { aux: [1, 2, 3, 4, 5] },
};

// Serial ports each Pins.<Board>.h defines (SERIAL_A always exists via
// Pins.defaults.h). src/pinmaps/Validate.h:
//   #if !defined(SERIAL_x) && SERIAL_x_BAUD_DEFAULT != OFF  #error
// SERIAL_D/E on MaxPCB4/MiniPCB are SerialUSB1/2, defined only under
// USB_DUAL_SERIAL / USB_TRIPLE_SERIAL — the build service's Teensy envs use
// -D USB_SERIAL, so they're absent here. Pins.MiniPCB.h also #errors outright
// on SERIAL_C ("SerialC isn't supported"). TERRANS_V5PRO's inline pin block
// mirrors Pins.MaxESP3.h (SERIAL_B = Serial2).
export const PINMAP_SERIAL = {
  MaxESP3: ['A', 'B'],
  MaxESP4: ['A', 'B'],
  TERRANS_V5PRO: ['A', 'B'],
  CNC3: ['A', 'B'],
  FYSETC_E4: ['A'],
  FYSETC_S6: ['A', 'B', 'C'],
  FYSETC_S6_2: ['A', 'B', 'C'],
  MaxPCB4: ['A', 'B', 'C'],
  MaxSTM3: ['A', 'B', 'C'],
  MaxSTM3I: ['A', 'B', 'C'],
  MiniPCB: ['A', 'B'],
  MiniPCB2: ['A', 'B'],
  BTT_SKR_PRO: ['A', 'B', 'C'],
};

const isOn = (v) => v !== undefined && v !== null && v !== '' && v !== 'OFF';

/**
 * Replays upstream src/pinmaps/Validate.h's AUX pin bookkeeping (the
 * AUXn_PIN_IN_USE chain, in upstream's order) and returns the #errors it would
 * fire, as [{id, message}]. Boards not in PINMAP_AUX return [].
 */
export function auxPinConflicts(values) {
  const board = PINMAP_AUX[values.PINMAP];
  if (!board) return [];
  const out = [];
  const inUse = new Set();
  const has = (n) => board.aux.includes(n);
  const on = (role, n) => board[role] === n;
  // One upstream "#if role on AUXn && enabled { #ifdef AUXn_IN_USE #error; #define AUXn_IN_USE }" step.
  const claim = (n, id, what, markAs = n) => {
    if (inUse.has(n)) {
      out.push({ id, message:
        `${what} enabled but AUX${n}_PIN is already in use on PINMAP=${values.PINMAP} — OnStepX's ` +
        `pinmap Validate.h refuses to compile ("choose one feature on AUX${n}_PIN"). ` +
        `Turn one of the features sharing AUX${n}_PIN OFF.` });
    }
    inUse.add(markAs);
  };
  const m3 = (values.AXIS4_POWER_DOWN === 'ON' && board.m3UnlessAxis4PowerDown) ? {} : (board.M3 || {});
  const driverStatusAxis = (n) => [1, 2, 3, 4, 5].find((a) => m3[a] === n && isOn(values[`AXIS${a}_DRIVER_STATUS`]));
  const espFlash = isOn(values.SERIAL_B_ESP_FLASHING);
  const reticle = (n, nestedStatusLed) => {
    if (!(on('RETICLE_LED', n) && isOn(values.RETICLE_LED_DEFAULT))) return;
    if (nestedStatusLed && on('STATUS_LED', n) && isOn(values.STATUS_LED)) {
      out.push({ id: 'RETICLE_LED_DEFAULT', message:
        `RETICLE_LED_DEFAULT and STATUS_LED can't both be enabled on PINMAP=${values.PINMAP} — both use AUX${n}_PIN ` +
        `and OnStepX's pinmap Validate.h refuses to compile. Set one of them OFF.` });
    }
    claim(n, 'RETICLE_LED_DEFAULT', 'RETICLE_LED_DEFAULT');
  };

  if (has(0) && on('MOUNT_LED', 0) && isOn(values.STATUS_MOUNT_LED)) claim(0, 'STATUS_MOUNT_LED', 'STATUS_MOUNT_LED');

  if (has(1)) {
    if (on('ADDON_GPIO0', 1) && espFlash) claim(1, 'SERIAL_B_ESP_FLASHING', 'SERIAL_B_ESP_FLASHING');
    const a = driverStatusAxis(1);
    if (a) claim(1, `AXIS${a}_DRIVER_STATUS`, 'AXISn_DRIVER_STATUS');
  }
  if (has(2)) {
    // Upstream marks AUX1 (not AUX2) in use here; mirrored as-is.
    if (on('ADDON_RESET', 2) && espFlash) claim(2, 'SERIAL_B_ESP_FLASHING', 'SERIAL_B_ESP_FLASHING', 1);
    const a = driverStatusAxis(2);
    if (a) claim(2, `AXIS${a}_DRIVER_STATUS`, 'AXISn_DRIVER_STATUS');
  }
  if (has(3)) {
    if (on('AXIS1_HOME', 3) && isOn(values.AXIS1_SENSE_HOME)) claim(3, 'AXIS1_SENSE_HOME', 'AXIS1_SENSE_HOME');
    if (on('LIMIT_SENSE', 3) && isOn(values.LIMIT_SENSE)) claim(3, 'LIMIT_SENSE', 'LIMIT_SENSE');
    reticle(3, true);
  }
  if (has(4)) {
    if (on('AXIS2_HOME', 4) && isOn(values.AXIS2_SENSE_HOME)) claim(4, 'AXIS2_SENSE_HOME', 'AXIS2_SENSE_HOME');
    reticle(4, false);
  }
  if (has(7)) {
    if (on('LIMIT_SENSE', 7) && isOn(values.LIMIT_SENSE)) claim(7, 'LIMIT_SENSE', 'LIMIT_SENSE');
    if (on('PPS_SENSE', 7) && isOn(values.TIME_LOCATION_PPS_SENSE)) claim(7, 'TIME_LOCATION_PPS_SENSE', 'TIME_LOCATION_PPS_SENSE');
  }
  if (has(8)) {
    if (on('MOUNT_LED', 8) && isOn(values.STATUS_MOUNT_LED)) claim(8, 'STATUS_MOUNT_LED', 'STATUS_MOUNT_LED');
    reticle(8, true);
    if (on('STATUS_BUZZER', 8) && isOn(values.STATUS_BUZZER)) claim(8, 'STATUS_BUZZER', 'STATUS_BUZZER');
  }
  // FEATUREn_PIN AUX -> AUXn_PIN substitution (only when the purpose is set
  // and the board defines AUXn_PIN; otherwise src/Validate.h rejects AUX).
  for (let n = 1; n <= 8; n++) {
    if (values[`FEATURE${n}_PIN`] === 'AUX' && isOn(values[`FEATURE${n}_PURPOSE`]) && has(n)) {
      claim(n, `FEATURE${n}_PIN`, `FEATURE${n}_PIN AUX`);
    }
  }
  return out;
}

// PINMAPs whose Pins.<Board>.h defines SERIAL_GPS itself (when the user
// hasn't). Everything else needs SERIAL_GPS in Config.h for a GPS build.
const PINMAPS_GPS_SERIAL_AUTO = new Set([
  'MaxSTM3', 'MaxSTM3I', 'BTT_SKR_PRO', 'FYSETC_S6', 'FYSETC_S6_2',
]);

// PINMAPs whose Pins.<Board>.h wires AXIS1_M0/M1 and AXIS2_M0/M1 to the SAME
// GPIOs. On a standalone (non-UART, non-SPI) driver those pins are what sets
// the microstep mode, so the two axes physically cannot hold different
// settings — whichever driver writes the pins last wins for both, while the
// firmware keeps doing per-axis step maths with the value each axis was
// configured with. One axis then moves by the wrong factor, silently: it
// compiles, and OnStepX has no check for it.
//   MaxESP3 / TERRANS_V5PRO: AXIS1_M0=AXIS2_M0=GPIO13, AXIS1_M1=AXIS2_M1=GPIO14
// MaxESP4 is NOT affected — its M0/M1 are OFF (hardwired TMC UART addresses).
const PINMAPS_SHARED_MICROSTEP_PINS = new Set(['MaxESP3', 'TERRANS_V5PRO']);

// Driver models that take their microstep mode from the M0/M1 pins rather than
// over UART/SPI. Only these are affected by the shared-pin problem above.
const STANDALONE_DRIVERS = new Set([
  'A4988', 'DRV8825', 'LV8729', 'S109', 'GENERIC',
  'TMC2100', 'TMC2130S', 'TMC2208S', 'TMC2225S', 'TMC2209S', 'TMC2226S',
]);

// Driver models in upstream LibConstants.h STEP_DIR_DRIVER_FIRST..LAST (0..21).
// Config.defaults.h defines AXISn_STEP_DIR_PRESENT only for these, and
// src/Validate.h checks the step/dir microstep settings only inside
// `#ifdef AXISn_STEP_DIR_PRESENT` — OFF and servo/ODrive axes are skipped.
const STEP_DIR_DRIVERS = new Set([
  'A4988', 'DRV8825', 'GENERIC', 'LV8729', 'RAPS128', 'S109', 'ST820',
  'TMC2100', 'TMC2130S', 'TMC2208S', 'TMC2225S', 'TMC2209S', 'TMC2226S',
  'TMC2130', 'TMC2160', 'TMC2660', 'TMC5160', 'TMC5161',
  'TMC2208', 'TMC2225', 'TMC2209', 'TMC2226',
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
  // Standalone (non-UART/SPI) TMC models: microsteps are strapped on the M0/M1
  // pins, so only the four patterns the chip decodes are reachable. Values and
  // comments from OnStepX src/lib/Constants.h.
  TMC2100:  [1, 2, 4, 16],          // spreadCycle only, no 256x interpolation
  TMC2130S: [1, 2, 4, 16],
  TMC2208S: [2, 4, 8, 16],
  TMC2225S: [4, 8, 16, 32],
  TMC2209S: [8, 16, 32, 64],
  TMC2226S: [8, 16, 32, 64],
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

// Every MOUNT_TYPE in upstream src/Constants.h (MOUNT_TYPE_FIRST..LAST), which
// src/Validate.h accepts (all offered by the MOUNT_TYPE select).
export const MOUNT_TYPES_COMMON = [
  'GEM', 'FORK', 'ALTAZM', 'ALTALT', 'GEM_TA', 'GEM_TAC', 'FORK_TA', 'FORK_TAC', 'ALTAZM_UNL',
];

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

  // src/Validate.h: static_assert(AXISn_LIMIT_SYNC == OFF || (>= 0 && <= 30)).
  for (const id of ['AXIS1_LIMIT_SYNC', 'AXIS2_LIMIT_SYNC']) {
    const v = (values[id] ?? '').toString().trim();
    if (v === '' || v === 'OFF') continue;
    const n = Number(v);
    if (!Number.isFinite(n) || n < 0 || n > 30) {
      add('error', id, `${id}=${v} is invalid — OnStepX's Validate.h only accepts OFF or 0 to 30 (degrees).`);
    }
  }

  // --- GPS serial port ---
  // OnStepX src/lib/tls/gps/GPS.cpp #errors "SERIAL_GPS must be set ..." when
  // TIME_LOCATION_SOURCE is GPS and nothing defines SERIAL_GPS. Only these
  // pinmaps auto-assign it (Pins.MaxSTM.h, Pins.SKR_PRO.h, Pins.FYSETC_S6.h,
  // Pins.Manticore.h); the FYSETC E4 and every ESP32 board do not.
  if (values.TIME_LOCATION_SOURCE === 'GPS') {
    const gpsPort = values.SERIAL_GPS || 'PINMAP';
    const pinSet = (p) => p && p.trim() !== '' && p.trim() !== 'OFF';
    if (gpsPort === 'PINMAP' && !PINMAPS_GPS_SERIAL_AUTO.has(values.PINMAP)) {
      add('error', 'SERIAL_GPS',
        `TIME_LOCATION_SOURCE=GPS, but PINMAP=${values.PINMAP} doesn't assign a GPS serial port, so ` +
        `OnStepX won't compile ("SERIAL_GPS must be set"). Pick SERIAL_GPS in Time & Location ` +
        `(on ESP32 boards: Serial2 with SERIAL_GPS_RX/TX set to the pins the GPS is wired to).`);
    } else if ((gpsPort === 'SoftSerial' || gpsPort === 'HardSerial') &&
               !(pinSet(values.SERIAL_GPS_RX) && pinSet(values.SERIAL_GPS_TX))) {
      add('error', 'SERIAL_GPS_RX',
        `SERIAL_GPS=${gpsPort} needs both SERIAL_GPS_RX and SERIAL_GPS_TX — OnStepX's GPS.cpp refuses to compile without them.`);
    } else if (gpsPort !== 'PINMAP' && pinSet(values.SERIAL_GPS_RX) !== pinSet(values.SERIAL_GPS_TX)) {
      add('warn', 'SERIAL_GPS_RX',
        `Only one of SERIAL_GPS_RX / SERIAL_GPS_TX is set. OnStepX applies custom pins only when both are ` +
        `defined, so ${gpsPort} will stay on its default pins. Set both (FYSETC E4 I2C header: RX 21, TX 22).`);
    }
    const gpsPins = [values.SERIAL_GPS_RX, values.SERIAL_GPS_TX].map((p) => (p || '').trim());
    // FYSETC E4: GPIO16/17 (the ESP32's default Serial2 pins) run only to the
    // onboard MOT E TMC2209 (U8 STEP/DIR, E4 V1.0 schematic) — no header.
    if (values.PINMAP === 'FYSETC_E4' && gpsPins.some((p) => p === '16' || p === '17')) {
      add('error', 'SERIAL_GPS_RX',
        `On the FYSETC E4, GPIO16/17 are wired only to the onboard MOT E driver and aren't on any header. ` +
        `Put the GPS on the I2C header instead: SERIAL_GPS_RX 21 (SDA), SERIAL_GPS_TX 22 (SCL).`);
    }
    // ESP32 boards use GPIO21/22 as the I2C bus; a GPS remapped there can't
    // share it with an I2C weather sensor.
    if (PINMAP_MCU[values.PINMAP] === 'esp32' && gpsPins.some((p) => p === '21' || p === '22') &&
        /^BM[EP]280(_0x76)?$/.test(values.WEATHER || '')) {
      add('error', 'WEATHER',
        `SERIAL_GPS_RX/TX use GPIO21/22, which is the I2C bus, but WEATHER=${values.WEATHER} is an I2C sensor on the ` +
        `same pins. Set WEATHER OFF (or a _SPI variant), or move the GPS.`);
    }
  }

  // Serial ports the board doesn't have: src/pinmaps/Validate.h #errors
  // "SERIAL_x isn't defined, SERIAL_x_BAUD_DEFAULT should be OFF."
  const serialPorts = PINMAP_SERIAL[values.PINMAP];
  if (serialPorts) {
    for (const port of ['B', 'C', 'D', 'E']) {
      const key = `SERIAL_${port}_BAUD_DEFAULT`;
      if (!isOn(values[key]) || serialPorts.includes(port)) continue;
      add('error', key,
        `${key}=${values[key]}, but PINMAP=${values.PINMAP} has no SERIAL_${port} port, so OnStepX won't compile ` +
        `("SERIAL_${port} isn't defined, ${key} should be OFF"). Set ${key}=OFF.`);
    }
  }

  // AUX pin sharing (STATUS_MOUNT_LED / RETICLE_LED / STATUS_BUZZER on AUX8,
  // LIMIT_SENSE / PPS on AUX7, home switches, FEATUREn_PIN AUX, ...): replay
  // upstream src/pinmaps/Validate.h against the board's pin map. Note that
  // STATUS_LED + STATUS_BUZZER alone is never an error upstream.
  for (const c of auxPinConflicts(values)) add('error', c.id, c.message);

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
  const noUartReason = PINMAPS_NO_TMC_UART[values.PINMAP];
  if (noUartReason) {
    for (const axis of [1, 2, 3, 4]) {
      const key = `AXIS${axis}_DRIVER_MODEL`;
      const v = values[key];
      if (v && TMC_UART_DRIVERS.has(v)) {
        add('error', key,
          `${key}=${v} won't work on PINMAP=${values.PINMAP}. ${noUartReason} ` +
          `Switch ${key} to a supported model, or pick a different PINMAP.`);
      }
    }
  }

  // Shared M0/M1 microstep pins: Axis1 and Axis2 must agree, both while
  // tracking and during gotos. See PINMAPS_SHARED_MICROSTEP_PINS above.
  if (PINMAPS_SHARED_MICROSTEP_PINS.has(values.PINMAP)) {
    const m1 = values.AXIS1_DRIVER_MODEL;
    const m2 = values.AXIS2_DRIVER_MODEL;
    const bothStandalone =
      m1 && m2 && STANDALONE_DRIVERS.has(m1) && STANDALONE_DRIVERS.has(m2);
    if (bothStandalone) {
      const why =
        `On PINMAP=${values.PINMAP} both drivers share the same M0/M1 microstep pins ` +
        `(GPIO13/GPIO14), so Axis1 and Axis2 cannot run at different microstep settings — ` +
        `the hardware would follow one value while the firmware still computes steps with ` +
        `the other, and one axis would move by the wrong factor.`;
      const t1 = values.AXIS1_DRIVER_MICROSTEPS;
      const t2 = values.AXIS2_DRIVER_MICROSTEPS;
      const trackingDiffers = t1 && t2 && t1 !== 'OFF' && t2 !== 'OFF' && t1 !== t2;
      if (trackingDiffers) {
        add('error', 'AXIS2_DRIVER_MICROSTEPS',
          `AXIS1_DRIVER_MICROSTEPS=${t1} but AXIS2_DRIVER_MICROSTEPS=${t2}. ${why} ` +
          `Set both axes to the same value on the Calculator tab.`);
      }
      // "OFF" on a _GOTO field means "same as tracking", so compare the
      // effective values rather than the raw ones.
      const effective = (goto_, track) => (!goto_ || goto_ === 'OFF') ? track : goto_;
      const g1 = effective(values.AXIS1_DRIVER_MICROSTEPS_GOTO, t1);
      const g2 = effective(values.AXIS2_DRIVER_MICROSTEPS_GOTO, t2);
      // Skip when the tracking values already differ — same root cause, and
      // one message per problem reads better than two.
      if (!trackingDiffers && g1 && g2 && g1 !== g2) {
        add('error', 'AXIS2_DRIVER_MICROSTEPS_GOTO',
          `During gotos Axis1 would run at ${g1} microsteps and Axis2 at ${g2}. ${why} ` +
          `Give both axes the same goto microsteps, or leave both OFF.`);
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

  // Goto microsteps — src/Validate.h (per axis):
  //   #if AXISn_DRIVER_MICROSTEPS_GOTO != OFF && (_GOTO < 1 || _GOTO >= AXISn_DRIVER_MICROSTEPS) #error
  //   #if AXISn_DRIVER_MICROSTEPS == OFF && AXISn_DRIVER_MICROSTEPS_GOTO != OFF                  #error
  //   SERVO_TMC2209/SERVO_TMC5160: MICROSTEPS must be 256 and _GOTO must be OFF                 #error
  // The first two only for step/dir models (#ifdef AXISn_STEP_DIR_PRESENT),
  // the servo one only inside #ifdef AXISn_SERVO_PRESENT.
  for (const axis of [1, 2, 3, 4, 5]) {
    const msKey = `AXIS${axis}_DRIVER_MICROSTEPS`;
    const goKey = `AXIS${axis}_DRIVER_MICROSTEPS_GOTO`;
    const ms = values[msKey];
    const go = values[goKey];
    const model = values[`AXIS${axis}_DRIVER_MODEL`];
    if (model === 'SERVO_TMC2209' || model === 'SERVO_TMC5160') {
      if ((ms && ms !== '256') || (go && go !== 'OFF')) {
        add('error', ms && ms !== '256' ? msKey : goKey,
          `AXIS${axis}_DRIVER_MODEL=${model} requires ${msKey}=256 and ${goKey}=OFF — OnStepX's Validate.h refuses anything else.`);
      }
      continue;
    }
    // Only step/dir axes are checked upstream (#ifdef AXISn_STEP_DIR_PRESENT).
    if (!STEP_DIR_DRIVERS.has(model)) continue;
    if (!go || go === 'OFF') continue;
    if (!ms || ms === 'OFF') {
      add('error', goKey,
        `${goKey}=${go} can't be used while ${msKey} is OFF — OnStepX's Validate.h refuses to compile. Set ${goKey}=OFF.`);
      continue;
    }
    const g = Number(go);
    const t = Number(ms);
    if (Number.isFinite(g) && Number.isFinite(t) && (g < 1 || g >= t)) {
      add('error', goKey,
        `${goKey}=${go} must be lower than ${msKey}=${ms} (OnStepX's Validate.h requires 1 to < ${msKey}). ` +
        `Set ${goKey}=OFF, or a value below ${ms}.`);
    }
  }

  // FEATUREn_PIN = AUX: src/pinmaps/Validate.h rewrites it to AUXn_PIN when
  // FEATUREn_PURPOSE != OFF and the board defines AUXn_PIN. Otherwise AUX (-4)
  // survives to src/Validate.h, whose `FEATUREn_PIN != OFF && < 0` check
  // #errors. Boards we have no pin knowledge for are left to the compiler.
  const auxBoard = PINMAP_AUX[values.PINMAP];
  for (let i = 1; i <= 8; i++) {
    const key = `FEATURE${i}_PIN`;
    if (values[key] !== 'AUX') continue;
    if (!isOn(values[`FEATURE${i}_PURPOSE`])) {
      add('error', key,
        `${key}=AUX while FEATURE${i}_PURPOSE is OFF — OnStepX only maps AUX to AUX${i}_PIN for an enabled ` +
        `feature, so this fails to compile ("Setting ${key} unknown"). Set ${key}=OFF or pick a purpose.`);
    } else if (auxBoard && !auxBoard.aux.includes(i)) {
      add('error', key,
        `${key}=AUX, but PINMAP=${values.PINMAP} doesn't define AUX${i}_PIN, so OnStepX can't map it and the ` +
        `build fails ("Setting ${key} unknown"). Use a real pin number instead` +
        `${auxBoard.aux.length ? ` (this board's AUX pins: ${auxBoard.aux.map((n) => 'AUX' + n).join(', ')})` : ''}.`);
    }
  }

  // FOCUSER_TEMPERATURE / FEATUREn_TEMP = THERMISTOR is a frequent build
  // breaker. Picking THERMISTOR pulls in the thermistor temperature path,
  // which needs the THERMISTOR1_* calibration defines (TNOM / RNOM / BETA /
  // RSERIES) plus an analog sense pin. A Config.h generated from scratch by
  // this form never emits THERMISTOR1_*, so the build commonly fails (or reads
  // garbage) unless the user imported an E4 Config.h that already carries them.
  // Howard Dutton's guidance on the forum is to set these to OFF unless you've
  // actually wired a thermistor and defined its parameters. A DS18B20 serial
  // number is fine here — only the literal THERMISTOR needs the extra setup.
  const tempFields = Array.isArray(values._tempFields) ? values._tempFields : [];
  const thermistorFields = tempFields.filter((f) => f && f.value === 'THERMISTOR');
  if (thermistorFields.length > 0 && !values._hasThermistorParams) {
    const names = thermistorFields.map((f) => f.id).join(', ');
    const plural = thermistorFields.length > 1;
    add('warn', thermistorFields[0].id,
      `${names} ${plural ? 'are' : 'is'} set to THERMISTOR, but the Config.h has no ` +
      `THERMISTOR1_* parameters. The thermistor path needs THERMISTOR1_TNOM / RNOM / ` +
      `BETA / RSERIES and an analog sense pin — without them the build commonly fails. ` +
      `Unless you've wired a thermistor and imported a Config.h that defines those, set ` +
      `${names} to OFF (per Howard Dutton's advice). A DS18B20 serial number is fine here; ` +
      `only THERMISTOR needs the extra setup.`);
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
