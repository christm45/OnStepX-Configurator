/* ============================================================================
   FYSETC E4 Beginner Guide  —  renders into #tab-e4guide
   ----------------------------------------------------------------------------
   A self-contained, data-driven port of the OnStepX FYSETC E4 Technical
   Reference. It adds a guided, feature-by-feature walkthrough for newcomers
   directly inside the configurator, with an interactive board diagram, wiring
   tables, Config.h directives, troubleshooting and a shopping guide.

   Content is authored/trusted (sourced from the OnStep wiki & community
   discussions), so note/solution strings are intentionally treated as HTML —
   matching the original React reference's dangerouslySetInnerHTML usage.
   ========================================================================== */
(function () {
  'use strict';

  /* -------------------------------------------------------------- nav data */
  const SECTIONS = [
    { id: 'pinmap',          label: 'Pinmap',            icon: '🧩', color: '#60a5fa', desc: 'Board overview, GPIO map & interactive diagram' },
    { id: 'limits',          label: 'Limit Switches',    icon: '🚏', color: '#3b82f6', desc: 'Home sensors & hardware endstops' },
    { id: 'gps',             label: 'GPS Module',        icon: '🛰️', color: '#10b981', desc: 'NEO-M8N / NEO-6M auto time & location' },
    { id: 'thermistor',      label: 'Thermistors',       icon: '🌡️', color: '#f59e0b', desc: 'NTC temperature sensing via TE/TB' },
    { id: 'dew',             label: 'Dew Heater',        icon: '💧', color: '#f97316', desc: 'PWM heater control & dew point compensation' },
    { id: 'intervalometer',  label: 'Intervalometer',    icon: '📷', color: '#ec4899', desc: 'DSLR camera trigger for astrophotography' },
    { id: 'pec',             label: 'PEC Index',         icon: '⚙️', color: '#8b5cf6', desc: 'Periodic error correction with Hall sensor' },
    { id: 'onewire',         label: 'OneWire / DS18B20', icon: '🔗', color: '#06b6d4', desc: 'Digital temperature sensors on single wire' },
    { id: 'weather',         label: 'BME280',            icon: '🌤️', color: '#22d3ee', desc: 'Temp, humidity, pressure for dew point' },
    { id: 'rtc',             label: 'DS3231 RTC',        icon: '⏰', color: '#a78bfa', desc: 'Battery-backed real-time clock' },
    { id: 'focuser',         label: 'Focuser',           icon: '🔭', color: '#4ade80', desc: 'Motorized autofocus with temp compensation' },
    { id: 'rotator',         label: 'Rotator',           icon: '🔄', color: '#facc15', desc: 'Field de-rotator for Alt-Az mounts' },
    { id: 'wifi',            label: 'WiFi / BT',         icon: '📶', color: '#38bdf8', desc: 'Built-in ESP32 wireless & Bluetooth' },
    { id: 'troubleshooting', label: 'Troubleshooting',   icon: '🔧', color: '#f87171', desc: 'Known issues with verified fixes' },
    { id: 'firmware',        label: 'Firmware',          icon: '⚡', color: '#a3a3a3', desc: 'Flashing guide & community discussions' },
    { id: 'compatible',      label: 'Hardware Guide',    icon: '🧰', color: '#22c55e', desc: 'Compatible sensors, part numbers & specs' },
  ];

  const SEARCH = {
    pinmap: 'pinmap gpio header overview specifications esp32 tmc2209 i2c sda scl enable stepper driver power usb board diagram aux te tb x-min y-min heat fan rst led reset mot shared_en',
    limits: 'limit switch home endstop sensor gpio34 gpio35 gpio39 x-min y-min axis1_sense_home limit_sense limit_strict homing axis2_sense_home microswitch hall',
    gps: 'gps module neo-m8n neo-6m gy-gpsv3 time location serial capacitor baud nmea gpgga gprmc satellite',
    thermistor: 'thermistor ntc temperature te tb gpio36 gpio39 beta 3950 3435 100k voltage divider pull-up rparallel steinhart',
    dew: 'dew heater pwm heat_e0 heat_bed gpio2 gpio4 mosfet irlz44n feature1 feature2 dew point heater strap tape',
    intervalometer: 'intervalometer dslr camera shutter optocoupler 4n35 pc817 trigger astrophotography bulb trs 2.5mm remote canon nikon sony',
    pec: 'pec periodic error correction worm gear hall sensor a3144 index gpio36 pec_sense rotation tracking guiding us5881 ky-003',
    onewire: 'onewire ds18b20 temperature sensor digital aux7 spare_rx 64-bit serial parasitic power pull-up 4.7k',
    weather: 'bme280 weather sensor temperature humidity pressure i2c 0x76 0x77 dew point adafruit barometric bmp280',
    rtc: 'rtc ds3231 real-time clock i2c timekeeping battery cr2032 backup makuna 0x68',
    focuser: 'focuser motorized stepper tmc2209 axis4 axis5 temperature compensation steps per micron gpio16 gpio17 gpio14 gpio12',
    rotator: 'rotator field de-rotator alt-az axis3 camera rotation angle step dir gpio14 gpio12',
    wifi: 'wifi bluetooth access point station ap ssid password web interface sws smartwebserver website plugin mdns onstepx.local onstepsws.local 192.168.0.1 onstep onstepx radio esp32 esp8266 serial_radio wifi_access_point wifi_station add no esp how to connect default password plugins.config.h',
    troubleshooting: 'troubleshooting problem fix solution error usb serial wifi overheating stepper tmc2209 uart jumper compile library ch340 ascom capacitor reset esp32 goto limit park pec hall buzzer smoke power',
    firmware: 'firmware upload flashing arduino ide esp32 libraries tmc2209 makuna rtc adafruit bme280 partition huge app 240mhz discussions community',
    compatible: 'compatible hardware guide sensor part number shopping list a3144 ky-003 us5881 hall pec magnet neo-m8n gps bme280 ds3231 ds18b20 ntc microswitch irlz44n mosfet tmc2209 nema17 focuser optocoupler ch340 capacitor',
  };

  /* ----------------------------------------------------------- DOM helpers */
  const pin = (s) => `<span class="e4-pin">${s}</span>`;
  const gpio = (s) => `<span class="e4-gpio">${s}</span>`;
  const code = (s) => `<code class="e4-code">${s}</code>`;
  const callout = (kind, html) => `<div class="e4-callout ${kind}">${html}</div>`;

  function table(headers, rows) {
    const head = headers.map((h) => `<th>${h}</th>`).join('');
    const body = rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('');
    return `<div class="e4-tablewrap"><table class="e4-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  /* Module card: { title, desc, warnings:[{label,text}], wiring:[{e4,gpio,to}],
     config:[{dir,val,note}], notes:htmlString } */
  function card(o) {
    let h = `<div class="e4-card"><h3>${o.title}</h3>`;
    if (o.desc) h += `<p class="e4-card-desc">${o.desc}</p>`;
    (o.warnings || []).forEach((w) => {
      h += callout('warn small', `<strong>⚠ ${w.label}:</strong> ${w.text}`);
    });
    if (o.wiring) {
      h += '<h4>Wiring</h4>' + table(['E4 Pin', 'GPIO', 'Connect To'],
        o.wiring.map((w) => [code(w.e4), gpio(w.gpio), w.to]));
    }
    if (o.config) {
      h += '<h4>Configuration (Config.h)</h4>' + table(['Directive', 'Value', 'Notes'],
        o.config.map((c) => [code(c.dir), code(c.val), c.note]));
    }
    if (o.notes) h += `<div class="e4-notes">${o.notes}</div>`;
    return h + '</div>';
  }

  /* ------------------------------------------------ interactive board diagram */
  const TYPE_COLORS = {
    stepper: { bg: '#1e1320', border: '#581c1c', active: '#ef4444', badge: 'Stepper' },
    input:   { bg: '#0f1a2e', border: '#1e3a5f', active: '#3b82f6', badge: 'Sensor Input' },
    output:  { bg: '#1e170d', border: '#5f3f0e', active: '#f59e0b', badge: 'Output' },
    i2c:     { bg: '#1a0d1a', border: '#5c1a3a', active: '#ec4899', badge: 'I2C Bus' },
    power:   { bg: '#1a1a0d', border: '#5c5c0e', active: '#facc15', badge: 'Power' },
    comm:    { bg: '#0c1f14', border: '#1a4d2e', active: '#10b981', badge: 'Communication' },
    driver:  { bg: '#1a0f26', border: '#3d1a5c', active: '#8b5cf6', badge: 'Driver Socket' },
    config:  { bg: '#0e1a1f', border: '#1a3d4d', active: '#06b6d4', badge: 'Config Header' },
    mcu:     { bg: '#14181f', border: '#2a3340', active: '#94a3b8', badge: 'MCU' },
    control: { bg: '#151515', border: '#333333', active: '#a3a3a3', badge: 'Control' },
    /* peripheral module categories (drawn around the board) */
    module:  { bg: '#1a0d1a', border: '#5c1a3a', active: '#ec4899', badge: 'I2C Module' },
    thermo:  { bg: '#1e170d', border: '#5f3f0e', active: '#f59e0b', badge: 'Temp Sensor' },
    heater:  { bg: '#241307', border: '#7a3b0e', active: '#f97316', badge: 'Dew Heater' },
    motor:   { bg: '#1e1320', border: '#581c1c', active: '#ef4444', badge: 'Stepper Motor' },
    supply:  { bg: '#1a1a0d', border: '#5c5c0e', active: '#facc15', badge: 'Power' },
    gpsmod:  { bg: '#0c1f14', border: '#1a4d2e', active: '#10b981', badge: 'GPS Module' },
    onewire: { bg: '#0e1a1f', border: '#1a3d4d', active: '#06b6d4', badge: 'OneWire' },
    swsense: { bg: '#0f1a2e', border: '#1e3a5f', active: '#3b82f6', badge: 'Switch / Sensor' },
    led:     { bg: '#0c1f14', border: '#1a4d2e', active: '#34d399', badge: 'LED / Buzzer' },
    usbpc:   { bg: '#14181f', border: '#2a3340', active: '#94a3b8', badge: 'Host PC' },
  };

  /* Board connector layout mirrors the real FYSETC E4 photo (annotated reference):
     TOP    = green screw terminal 12V/0V/H1/H2, Z/Y/X-MIN endstops, FAN/AUX, DC jack
     RIGHT  = ESP32 module, USB, MicroSD          CENTRE = 4 TMC2209 drivers + I2C/AUX header
     BOTTOM = MOT X/Y/Z/E motor outputs (Ra·DEC·Foc1·Foc2), TB/TE thermistors, 24V/GND tap
     Internal board canvas is 920 x 540, translated by (BX, BY). */
  const BOARD_ELEMENTS = [
    /* TOP edge — green screw terminal (power + heaters), endstops, FAN/AUX, DC jack */
    { id: 'power', label: 'PWR|12V·0V', type: 'power', x: 36, y: 12, w: 92, h: 40, gpio: '—', fn: 'Main power input — 12V / 0V screw terminal', desc: 'Left pair of the green screw block: 12V (+) and 0V (–). Feeds the whole board: motors, ESP32, heaters.', conn: '12–24V DC, 5A+. Observe polarity: 12V = +, 0V = GND.', section: 'troubleshooting' },
    { id: 'heate0', label: 'H1', type: 'output', x: 132, y: 12, w: 52, h: 40, gpio: 'GPIO2', fn: 'H1 — Heater output 1 (AUX5)', desc: 'Screw terminal H1. PWM output, must be LOW at boot. Drives a 12V dew heater via an external MOSFET.', conn: 'MOSFET gate (via 1kΩ) → 12V heater tape. 10kΩ pull-down to GND.', section: 'dew' },
    { id: 'heatbed', label: 'H2', type: 'output', x: 188, y: 12, w: 52, h: 40, gpio: 'GPIO4', fn: 'H2 — Heater output 2 (AUX6)', desc: 'Screw terminal H2. Second PWM heater output (no boot constraint).', conn: 'MOSFET gate (via 1kΩ) → 12V heater tape. 10kΩ pull-down to GND.', section: 'dew' },
    { id: 'zmin', label: 'Z-MIN', type: 'input', x: 300, y: 12, w: 58, h: 40, gpio: 'GPIO15', fn: 'Z-MIN endstop / TMC UART', desc: 'Z endstop header. On the E4 this pin is jumpered to the TMC2209 PDN/UART line, but is also a spare endstop input.', conn: 'Endstop NO → GND, or the TMC2209 UART jumper.', section: 'limits' },
    { id: 'ymin', label: 'Y-MIN', type: 'input', x: 362, y: 12, w: 58, h: 40, gpio: 'GPIO35', fn: 'Y-MIN — Home Axis2', desc: 'Input-only. Default home switch for Axis2 (DEC/Alt).', conn: 'NO switch to GND (home/limit). Input only.', section: 'limits' },
    { id: 'xmin', label: 'X-MIN', type: 'input', x: 424, y: 12, w: 58, h: 40, gpio: 'GPIO34', fn: 'X-MIN — Home Axis1 / Limit / GPS', desc: 'Input-only. Default home switch for Axis1; also LIMIT_SENSE_PIN in E4 Config.h. Can take a single-wire GPS.', conn: 'NO switch to GND (home/limit). Or GPS TX (single-wire mode).', section: 'limits' },
    { id: 'fane0', label: 'FAN|AUX', type: 'output', x: 496, y: 12, w: 56, h: 40, gpio: 'GPIO13', fn: 'FAN / AUX output (AUX8) — reticle / status', desc: 'FAN/AUX header. Drives a status LED, buzzer, or (as in the reference build) a reticle lamp via a series resistor.', conn: 'Reticle/LED (+) via resistor → output, (–) → GND. Enable 5V shunt if needed.', section: 'troubleshooting' },
    { id: 'dcjack', label: 'DC IN', type: 'power', x: 566, y: 12, w: 64, h: 40, gpio: '—', fn: 'DC barrel jack (alternate power in)', desc: '5.5/2.1mm barrel jack — an alternative to the 12V/0V screw terminal. Do NOT power from both at once.', conn: 'Center-positive 12–24V DC.', section: 'troubleshooting' },
    /* RIGHT — ESP32 module, reset, USB, MicroSD */
    { id: 'esp32', label: 'ESP32', type: 'mcu', x: 648, y: 116, w: 182, h: 128, gpio: '—', fn: 'Dual-core Xtensa LX6 @ 240MHz', desc: 'Main microcontroller with built-in WiFi, Bluetooth, I2C, SPI, UART, ADC and DAC.', conn: 'No external wiring needed. Built-in WiFi/BT antenna.', section: 'wifi' },
    { id: 'rst', label: 'RST', type: 'control', x: 648, y: 256, w: 46, h: 20, gpio: '—', fn: 'Hardware reset button', desc: 'Press to reset the ESP32. Also used for bootloader timing during upload.', conn: 'Add a 10µF cap across EN/GND if uploads fail.', section: 'troubleshooting' },
    { id: 'usb', label: 'USB', type: 'comm', x: 872, y: 116, w: 46, h: 44, gpio: '—', fn: 'Firmware upload & serial monitor', desc: 'Micro USB for programming via Arduino IDE and serial comms with ASCOM/INDI.', conn: 'Connect to PC. Use a quality data cable (not charge-only).', section: 'firmware' },
    { id: 'sd', label: 'SD', type: 'comm', x: 872, y: 172, w: 46, h: 50, gpio: '—', fn: 'MicroSD card slot', desc: 'On-board microSD slot (unused by stock OnStepX).', conn: 'Insert a microSD only if a feature requires it.', section: 'firmware' },
    /* CENTRE — I2C/AUX header + 4 TMC2209 drivers */
    { id: 'i2c', label: 'I2C|AUX', type: 'i2c', x: 500, y: 250, w: 96, h: 44, gpio: 'GPIO21/22', fn: 'I2C / AUX breakout — SCL·SDA·3V3·5V·GND', desc: 'Central pin header exposing SDA=GPIO21, SCL=GPIO22, 3.3V, 5V and GND. RTC, BME280 and the 3.3V regulator tap here.', conn: 'DS3231 RTC (0x68), BME280 (0x76/0x77) and LM1117 all share this header.', section: 'weather' },
    { id: 'tmc1', label: 'TMC1|Ra/Azm', type: 'driver', x: 118, y: 300, w: 84, h: 66, gpio: '—', fn: 'Axis1 (Ra/Azm) stepper driver — TMC2209 UART', desc: 'Driver socket for MOT X. Use FYSETC TMC2209 v3.0/v3.1 or TMC2226 v1.1.', conn: 'Insert TMC2209, ensure PDN jumper connected.', section: 'focuser' },
    { id: 'tmc2', label: 'TMC2|DEC', type: 'driver', x: 210, y: 300, w: 84, h: 66, gpio: '—', fn: 'Axis2 (DEC/Alt) stepper driver — TMC2209 UART', desc: 'Driver socket for MOT Y. Must have PDN jumper for current control.', conn: 'Insert TMC2209.', section: 'focuser' },
    { id: 'tmc3', label: 'TMC3|Foc1', type: 'driver', x: 302, y: 300, w: 84, h: 66, gpio: '—', fn: 'Axis4 (Focuser1) — TMC2209 UART', desc: 'Driver socket for MOT Z — defaults to Focuser1. GPIO16 (STEP), GPIO17 (DIR).', conn: 'Insert TMC2209.', section: 'focuser' },
    { id: 'tmc4', label: 'TMC4|Foc2', type: 'driver', x: 394, y: 300, w: 84, h: 66, gpio: '—', fn: 'Axis5 (Focuser2) — TMC2209 UART', desc: 'Driver socket for MOT E — Focuser2. Shares STEP/DIR (GPIO14/GPIO12) with Axis3.', conn: 'Insert TMC2209.', section: 'focuser' },
    /* BOTTOM edge — 24V/GND tap, motor outputs, thermistors */
    { id: 'pled', label: '24V|GND', type: 'power', x: 36, y: 486, w: 78, h: 40, gpio: '—', fn: '24V / GND tap (Power-LED feed)', desc: 'Bottom-left 2-pin header providing 24V and GND. In the reference build it drives the Power LED through a 10kΩ resistor.', conn: 'Power LED (+) → 24V via 10kΩ, (–) → GND.', section: 'troubleshooting' },
    { id: 'stepper1', label: 'MOTX|Ra/Azm', type: 'stepper', x: 140, y: 486, w: 88, h: 40, gpio: '—', fn: 'MOT X — Ra/Azm motor output', desc: '4-pin connector for a 4-wire bipolar stepper. Coils: A+/A– and B+/B–.', conn: 'Wire the Ra/Azm stepper coils. Twisted pairs per coil.', section: 'focuser' },
    { id: 'stepper2', label: 'MOTY|DEC', type: 'stepper', x: 234, y: 486, w: 88, h: 40, gpio: '—', fn: 'MOT Y — DEC/Alt motor output', desc: 'Motor output for the DEC/Alt axis.', conn: 'Wire the DEC/Alt stepper coils. Match coil pairs from the datasheet.', section: 'focuser' },
    { id: 'stepper3', label: 'MOTZ|Foc1', type: 'stepper', x: 328, y: 486, w: 88, h: 40, gpio: '—', fn: 'MOT Z — Focuser1 motor output', desc: 'Motor output for Focuser1.', conn: 'Wire the Focuser1 stepper coils.', section: 'focuser' },
    { id: 'stepper4', label: 'MOTE|Foc2', type: 'stepper', x: 422, y: 486, w: 88, h: 40, gpio: '—', fn: 'MOT E — Focuser2 motor output', desc: 'Motor output for Focuser2.', conn: 'Wire the Focuser2 stepper coils.', section: 'focuser' },
    { id: 'tb', label: 'TB', type: 'input', x: 540, y: 486, w: 52, h: 40, gpio: 'GPIO39', fn: 'TB — Thermistor input 2', desc: 'Input-only. 4.7k series resistor + 10µF filter cap on board.', conn: 'NTC 100k thermistor (to GND). Input only!', section: 'thermistor' },
    { id: 'te', label: 'TE', type: 'input', x: 596, y: 486, w: 52, h: 40, gpio: 'GPIO36', fn: 'TE — Thermistor input 1 / PEC', desc: 'Input-only. Same circuit as TB. Also usable for a PEC index (Hall) sensor.', conn: 'NTC 100k thermistor (to GND), or Hall sensor for PEC.', section: 'thermistor' },
  ];

  /* -------------------------------------------- mounted peripherals (around board)
     Each peripheral is drawn as a module OUTSIDE the board with a colored cable
     routed to its board connector (`target` = a BOARD_ELEMENTS id). The module
     side facing the board (and the matching connector edge) is derived from its
     position, so only x/y/w/h + target need to be supplied.
     Layout canvas: board is translated by (BX, BY); peripherals sit in the margin. */
  const BX = 230, BY = 180, BOARD_W = 920, BOARD_H = 540;

  /* Every add-on OnStepX supports on the E4. Positions are computed by
     layoutPeripherals() (edge + target only); wires fan to the real connector. */
  const BOARD_PERIPHERALS = [
    /* ===== TOP row 1 — power, heaters, endstops, GPS, reticle, DC jack ===== */
    { id: 'p-psu', label: '12–24V PSU', sub: 'power supply', type: 'supply', target: 'power', edge: 'top', wire: '#facc15', wire2: '#ef4444', section: 'troubleshooting',
      gpio: '12V / 0V', fn: 'Main DC power supply (12–24V)', desc: 'Bench or sealed 12–24V DC supply feeding the 12V/0V screw terminal — runs motors, ESP32, heaters and peripherals.', conn: '+ → 12V, – → 0V. 5A+ recommended; observe polarity.' },
    { id: 'p-heat1', label: 'Dew Heater 1', sub: 'H1 strap', type: 'heater', target: 'heate0', edge: 'top', wire: '#f97316', section: 'dew',
      gpio: 'H1 (GPIO2)', fn: 'Dew heater strap 1 (via MOSFET)', desc: 'PWM dew-heater strap on H1. Needs an external logic-level MOSFET (IRLZ44N) to switch 12V tape.', conn: 'GPIO2 → 1kΩ → MOSFET gate, 10kΩ pull-down, drain → heater (–), 12V → heater (+).' },
    { id: 'p-heat2', label: 'Dew Heater 2', sub: 'H2 strap', type: 'heater', target: 'heatbed', edge: 'top', wire: '#f97316', section: 'dew',
      gpio: 'H2 (GPIO4)', fn: 'Dew heater strap 2 (via MOSFET)', desc: 'Second PWM dew-heater channel on H2. Same external MOSFET circuit as Dew 1.', conn: 'GPIO4 → 1kΩ → MOSFET gate, 10kΩ pull-down, drain → heater (–), 12V → heater (+).' },
    { id: 'p-endz', label: 'Endstop Z', sub: 'switch', type: 'swsense', target: 'zmin', edge: 'top', wire: '#3b82f6', section: 'limits',
      gpio: 'Z-MIN', fn: 'Z endstop / extra limit switch', desc: 'Optional Z-MIN endstop or limit microswitch (note: this pin is also the TMC UART jumper on the E4).', conn: 'COM → Z-MIN, NO → GND (active LOW).' },
    { id: 'p-homey', label: 'Home Y', sub: 'switch / Hall', type: 'swsense', target: 'ymin', edge: 'top', wire: '#3b82f6', section: 'limits',
      gpio: 'Y-MIN (GPIO35)', fn: 'Axis2 home / limit sensor', desc: 'Mechanical microswitch or Hall sensor homing the DEC/Alt axis.', conn: 'COM → Y-MIN, NO → GND (active LOW). Onboard 2kΩ pull-up.' },
    { id: 'p-gps', label: 'GPS', sub: 'NEO-M8N', type: 'gpsmod', target: 'xmin', edge: 'top', wire: '#10b981', section: 'gps',
      gpio: 'X-MIN (GPIO34)', fn: 'GPS module — auto time & location', desc: 'GY-GPSV3 (NEO-M8N / NEO-6M). Feeds UTC time, latitude and longitude via NMEA at 9600 baud.', conn: 'GPS TX → X-MIN (single-wire, remove filter cap) or GPIO16, VCC → 3.3V, GND → GND. 3.3V only!' },
    { id: 'p-reticle', label: 'Reticle', sub: 'LED + 68kΩ', type: 'led', target: 'fane0', edge: 'top', wire: '#ef4444', section: 'troubleshooting',
      gpio: 'FAN/AUX (GPIO13)', fn: 'Illuminated reticle lamp', desc: 'Red reticle illumination LED driven from the FAN/AUX output, dimmed through a 68kΩ series resistor.', conn: 'LED (+) → FAN/AUX via 68kΩ, LED (–) → GND.' },
    { id: 'p-dcjack', label: 'DC Jack', sub: '5.5/2.1mm', type: 'supply', target: 'dcjack', edge: 'top', wire: '#eab308', section: 'troubleshooting',
      gpio: 'DC IN', fn: 'Barrel-jack power adapter (alt input)', desc: 'Center-positive 12–24V barrel-jack adapter — an alternative to the screw terminal. Never power from both at once.', conn: 'Center → +, sleeve → GND.' },

    /* ===== TOP row 2 — alternative uses of shared output / input pins ===== */
    { id: 'p-dslr', label: 'DSLR shutter', sub: 'intervalometer', type: 'output', target: 'heatbed', edge: 'top2', wire: '#ec4899', section: 'intervalometer',
      gpio: 'H2 / AUX', fn: 'DSLR shutter release (via optocoupler)', desc: 'Camera shutter trigger for astrophotography, driven from a spare feature output through an optocoupler (4N35 / PC817).', conn: 'AUX → 1kΩ → optocoupler LED; transistor side → camera shutter (2.5mm TRS).' },
    { id: 'p-buzzer', label: 'Buzzer', sub: 'status', type: 'led', target: 'fane0', edge: 'top2', wire: '#f472b6', section: 'troubleshooting',
      gpio: 'FAN/AUX (GPIO13)', fn: 'Status buzzer (shared with FAN/AUX)', desc: 'Active buzzer for goto/limit alerts, on the same FAN/AUX output as the reticle/LED (pick one).', conn: 'Buzzer (+) → FAN/AUX, (–) → GND. Enable 5V shunt if needed.' },
    { id: 'p-homex', label: 'Home/Limit X', sub: 'switch', type: 'swsense', target: 'xmin', edge: 'top2', wire: '#60a5fa', section: 'limits',
      gpio: 'X-MIN (GPIO34)', fn: 'Axis1 home & emergency-stop limit', desc: 'Microswitch/Hall on X-MIN — default Axis1 home and the board-wide emergency-stop limit (alternative to using X-MIN for GPS).', conn: 'COM → X-MIN, NO → GND (active LOW).' },

    /* ===== RIGHT — USB host + I2C bus devices ===== */
    { id: 'p-usb', label: 'USB / PC', sub: 'ASCOM·INDI', type: 'usbpc', target: 'usb', edge: 'right', wire: '#94a3b8', section: 'firmware',
      gpio: 'USB serial', fn: 'Host computer / firmware upload', desc: 'Micro-USB link for flashing OnStepX and serial control from ASCOM / INDI / planetarium software.', conn: 'Quality micro-USB data cable to the PC (not charge-only).' },
    { id: 'p-ds3231', label: 'DS3231', sub: '+AT24C32 RTC', type: 'module', target: 'i2c', edge: 'right', wire: '#ec4899', section: 'rtc',
      gpio: 'I2C (0x68)', fn: 'Battery-backed real-time clock (ZS-042)', desc: 'DS3231 RTC + AT24C32 EEPROM. Keeps date/time across power cycles (CR2032 backup); fallback time source when no GPS fix.', conn: 'SCL → GPIO22, SDA → GPIO21, VCC → 3.3V/5V, GND → GND on the central I2C header.' },
    { id: 'p-bme280', label: 'BME280', sub: 'T / RH / P', type: 'module', target: 'i2c', edge: 'right', wire: '#ec4899', section: 'weather',
      gpio: 'I2C (0x76/0x77)', fn: 'Weather sensor — temp / humidity / pressure', desc: 'GY-BME280 over I2C. Provides ambient data used to compute the dew point for the heaters.', conn: 'SCL → GPIO22, SDA → GPIO21, VCC → 3.3V, GND → GND. Shares the I2C header.' },
    { id: 'p-oled', label: 'OLED', sub: '0.96″ I2C', type: 'module', target: 'i2c', edge: 'right', wire: '#a855f7', section: 'wifi',
      gpio: 'I2C (0x3C)', fn: 'Optional status display', desc: 'Small SSD1306 OLED on the I2C bus for showing status without a PC (community add-on).', conn: 'SCL → GPIO22, SDA → GPIO21, VCC → 3.3V, GND → GND.' },

    /* ===== LEFT — power LED + OneWire bus ===== */
    { id: 'p-powerled', label: 'Power LED', sub: '+ 10kΩ', type: 'led', target: 'pled', edge: 'left', wire: '#ef4444', section: 'troubleshooting',
      gpio: '24V / GND', fn: 'Power-on indicator LED', desc: 'Red LED showing the board is powered, fed from the bottom-left 24V/GND tap through a 10kΩ series resistor.', conn: 'LED (+) → 24V via 10kΩ, LED (–) → GND.' },
    { id: 'p-ds18b20', label: 'DS18B20', sub: '1-Wire temp', type: 'onewire', target: 'i2c', edge: 'left', wire: '#06b6d4', section: 'onewire',
      gpio: 'AUX / spare', fn: 'OneWire digital temperature sensor', desc: 'One or more DS18B20 on a single data line (unique 64-bit address each). Uses a spare pin broken out on the I2C/AUX header.', conn: 'DATA → spare GPIO, VCC → 3.3V, GND → GND, 4.7kΩ pull-up DATA→3.3V.' },

    /* ===== BOTTOM — regulator, motors, thermistors, PEC ===== */
    { id: 'p-lm1117', label: 'LM1117-3.3', sub: '3.3V reg', type: 'supply', target: 'i2c', edge: 'bottom', wire: '#facc15', section: 'troubleshooting',
      gpio: '3.3V', fn: 'LM1117-3.3 linear regulator', desc: 'External 3.3V regulator supplying clean 3.3V to the I2C sensors instead of loading the on-board regulator.', conn: 'IN → 5V, OUT → 3.3V of the I2C header, GND → GND.' },
    { id: 'p-ra', label: 'Ra/Azm', sub: 'MOT X', type: 'motor', target: 'stepper1', edge: 'bottom', wire: '#10b981', wire2: '#ef4444', section: 'focuser',
      gpio: 'MOT X', fn: 'Right-Ascension / Azimuth stepper', desc: '4-wire bipolar stepper for the primary axis, driven by the Axis1 TMC2209 (MOT X).', conn: 'Coils A+/A– and B+/B– to MOT X. Twisted pairs per coil.' },
    { id: 'p-dec', label: 'DEC/Alt', sub: 'MOT Y', type: 'motor', target: 'stepper2', edge: 'bottom', wire: '#3b82f6', wire2: '#ef4444', section: 'focuser',
      gpio: 'MOT Y', fn: 'Declination / Altitude stepper', desc: '4-wire bipolar stepper for the secondary axis, driven by the Axis2 TMC2209 (MOT Y).', conn: 'Coils A+/A– and B+/B– to MOT Y.' },
    { id: 'p-foc1', label: 'Focuser1', sub: 'MOT Z', type: 'motor', target: 'stepper3', edge: 'bottom', wire: '#f97316', wire2: '#ef4444', section: 'focuser',
      gpio: 'MOT Z', fn: 'Focuser 1 stepper', desc: 'Stepper for the first focuser, driven by the Axis4 TMC2209 (MOT Z).', conn: 'Focuser1 stepper coils to MOT Z.' },
    { id: 'p-foc2', label: 'Focuser2', sub: 'MOT E', type: 'motor', target: 'stepper4', edge: 'bottom', wire: '#facc15', wire2: '#ef4444', section: 'focuser',
      gpio: 'MOT E', fn: 'Focuser 2 stepper', desc: 'Stepper for the second focuser, driven by the Axis5 TMC2209 (MOT E).', conn: 'Focuser2 stepper coils to MOT E.' },
    { id: 'p-thermistor', label: 'Thermistor', sub: 'NTC 100k', type: 'thermo', target: 'tb', edge: 'bottom', wire: '#f59e0b', section: 'thermistor',
      gpio: 'TB (GPIO39)', fn: 'NTC thermistor — focuser / dew temp', desc: 'Glass-bead NTC 100kΩ (β3950) on TB for temp-compensation or dew-point sensing (TE is the second channel).', conn: 'NTC leg 1 → TB, leg 2 → GND. Onboard 4.7kΩ to 3.3V is the series resistor.' },
    { id: 'p-pec', label: 'PEC Hall', sub: 'index sensor', type: 'swsense', target: 'te', edge: 'bottom', wire: '#38bdf8', section: 'pec',
      gpio: 'TE (GPIO36)', fn: 'PEC index Hall sensor', desc: 'Hall sensor (A3144 / US5881) on TE giving one pulse per worm revolution for periodic-error correction (alternative to a thermistor on TE).', conn: 'OUT → TE, VCC → 3.3V, GND → GND. Magnet on the worm/rotating part.' },
  ];

  const findNode = (id) => BOARD_ELEMENTS.find((e) => e.id === id) || BOARD_PERIPHERALS.find((e) => e.id === id);

  /* ---- automatic peripheral placement (edge + target → x/y/w/h) ---- */
  function targetCenter(id) {
    const el = BOARD_ELEMENTS.find((e) => e.id === id) || { x: 0, y: 0, w: 0, h: 0 };
    return { x: BX + el.x + el.w / 2, y: BY + el.y + el.h / 2 };
  }
  /* Pack a set of desired centres into [lo,hi] with no overlap (size+gap apart). */
  function packLine(arr, size, gap, lo, hi) {
    const n = arr.length; if (!n) return;
    for (let i = 0; i < n; i++) arr[i].pos = Math.min(Math.max(arr[i].c, lo + size / 2), hi - size / 2);
    for (let i = 1; i < n; i++) if (arr[i].pos < arr[i - 1].pos + size + gap) arr[i].pos = arr[i - 1].pos + size + gap;
    for (let i = n - 1; i > 0; i--) {
      if (arr[i].pos > hi - size / 2) arr[i].pos = hi - size / 2;
      if (arr[i - 1].pos > arr[i].pos - size - gap) arr[i - 1].pos = arr[i].pos - size - gap;
    }
    for (let i = 0; i < n; i++) arr[i].pos = Math.max(arr[i].pos, lo + size / 2);
  }
  function layoutPeripherals() {
    const rows = {
      top:    { y: 44,   h: 46, w: 104, horiz: true },
      top2:   { y: 102,  h: 44, w: 122, horiz: true },
      bottom: { y: 772,  h: 48, w: 118, horiz: true },
      left:   { x: 16,   w: 118, h: 46, horiz: false },
      right:  { x: 1172, w: 136, h: 48, horiz: false },
    };
    Object.keys(rows).forEach((edge) => {
      const cfg = rows[edge];
      const arr = BOARD_PERIPHERALS.filter((p) => p.edge === edge)
        .map((p) => ({ p, c: cfg.horiz ? targetCenter(p.target).x : targetCenter(p.target).y }))
        .sort((a, b) => a.c - b.c);
      if (!arr.length) return;
      if (cfg.horiz) {
        packLine(arr, cfg.w, 8, BX, BX + BOARD_W);
        arr.forEach((o) => { o.p.w = cfg.w; o.p.h = cfg.h; o.p.x = o.pos - cfg.w / 2; o.p.y = cfg.y; });
      } else {
        packLine(arr, cfg.h, 10, BY, BY + BOARD_H);
        arr.forEach((o) => { o.p.w = cfg.w; o.p.h = cfg.h; o.p.x = cfg.x; o.p.y = o.pos - cfg.h / 2; });
      }
    });
  }

  /* Routed cable from a peripheral module to its board connector. */
  function peripheralWire(p) {
    const el = BOARD_ELEMENTS.find((e) => e.id === p.target);
    if (!el) return '';
    const X = BX + el.x, Y = BY + el.y, W = el.w, H = el.h;
    let mx, my, mfx, mfy, bside;
    if (p.x + p.w <= BX + 5) { mx = p.x + p.w; my = p.y + p.h / 2; mfx = 1; mfy = 0; bside = 'left'; }
    else if (p.x >= BX + BOARD_W - 5) { mx = p.x; my = p.y + p.h / 2; mfx = -1; mfy = 0; bside = 'right'; }
    else if (p.y + p.h <= BY + 5) { mx = p.x + p.w / 2; my = p.y + p.h; mfx = 0; mfy = 1; bside = 'top'; }
    else { mx = p.x + p.w / 2; my = p.y; mfx = 0; mfy = -1; bside = 'bottom'; }
    let bx, by, bfx, bfy;
    if (bside === 'top') { bx = X + W / 2; by = Y; bfx = 0; bfy = -1; }
    else if (bside === 'bottom') { bx = X + W / 2; by = Y + H; bfx = 0; bfy = 1; }
    else if (bside === 'left') { bx = X; by = Y + H / 2; bfx = -1; bfy = 0; }
    else { bx = X + W; by = Y + H / 2; bfx = 1; bfy = 0; }
    const dist = Math.hypot(bx - mx, by - my);
    const k = Math.max(34, Math.min(110, dist * 0.42));
    const c1x = mx + mfx * k, c1y = my + mfy * k, c2x = bx + bfx * k, c2y = by + bfy * k;
    const d = `M ${mx} ${my} C ${c1x} ${c1y} ${c2x} ${c2y} ${bx} ${by}`;
    let out = `<path d="${d}" fill="none" stroke="#0b0c10" stroke-width="5" stroke-linecap="round"/>`
            + `<path d="${d}" fill="none" stroke="${p.wire}" stroke-width="2.4" stroke-linecap="round"/>`;
    if (p.wire2) {
      const d2 = `M ${mx} ${my + 4} C ${c1x} ${c1y + 4} ${c2x} ${c2y} ${bx} ${by}`;
      out += `<path d="${d2}" fill="none" stroke="#0b0c10" stroke-width="4" stroke-linecap="round"/>`
           + `<path d="${d2}" fill="none" stroke="${p.wire2}" stroke-width="1.8" stroke-linecap="round"/>`;
    }
    out += `<circle cx="${mx}" cy="${my}" r="2.7" fill="${p.wire}"/><circle cx="${bx}" cy="${by}" r="2.7" fill="${p.wire}"/>`;
    return out;
  }

  /* Clickable peripheral module box (icon + label + sub-label). */
  function peripheralModule(p) {
    const c = TYPE_COLORS[p.type];
    const sec = SECTIONS.find((s) => s.id === p.section);
    const icon = sec ? sec.icon : '';
    const cx = p.x + p.w / 2;
    const main = `<text x="${cx}" y="${p.y + p.h / 2 + (p.sub ? -1 : 4)}" text-anchor="middle" fill="#e6e8ee" font-size="11" font-weight="700">${p.label}</text>`;
    const sub = p.sub ? `<text x="${cx}" y="${p.y + p.h / 2 + 12}" text-anchor="middle" fill="#aab1bd" font-size="8">${p.sub}</text>` : '';
    const ic = icon ? `<text x="${p.x + 10}" y="${p.y + 15}" font-size="12">${icon}</text>` : '';
    return `<g data-id="${p.id}" data-periph="1" role="button" tabindex="0" aria-label="${p.label} — ${p.fn}">
      <rect data-rect="${p.id}" x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="7" fill="${c.bg}" stroke="${c.border}" stroke-width="1.5"/>
      ${ic}${main}${sub}</g>`;
  }

  function boardSVG() {
    let els = '';
    BOARD_ELEMENTS.forEach((el) => {
      const c = TYPE_COLORS[el.type];
      const cx = el.x + el.w / 2;
      let label;
      if (el.label.indexOf('|') >= 0) {
        const parts = el.label.split('|');
        const fs = el.w < 70 ? 8 : 10;
        label = `<text x="${cx}" y="${el.y + el.h / 2 - 2}" text-anchor="middle" fill="#e6e8ee" font-size="${fs}" font-weight="600">${parts[0]}</text>` +
                `<text x="${cx}" y="${el.y + el.h / 2 + 11}" text-anchor="middle" fill="#e6e8ee" font-size="${fs}" font-weight="600">${parts[1]}</text>`;
      } else {
        const fs = el.label.length > 6 ? 9 : 11;
        label = `<text x="${cx}" y="${el.y + el.h / 2 + 4}" text-anchor="middle" fill="#e6e8ee" font-size="${fs}" font-weight="600">${el.label}</text>`;
      }
      const gpioTxt = (el.gpio && el.gpio !== '—')
        ? `<text x="${cx}" y="${el.y + el.h - 4}" text-anchor="middle" fill="#5fd6a0" font-size="7.5" font-weight="500">${el.gpio}</text>` : '';
      els += `<g data-id="${el.id}" role="button" aria-label="${el.label.replace('|', ' ')} - ${el.fn}">
        <rect data-rect="${el.id}" x="${el.x}" y="${el.y}" width="${el.w}" height="${el.h}" rx="5" fill="${c.bg}" stroke="${c.border}" stroke-width="1"/>
        ${label}${gpioTxt}</g>`;
    });
    const boardInner = `
      <rect x="2" y="2" width="${BOARD_W - 4}" height="${BOARD_H - 4}" rx="16" fill="#121318" stroke="#33353f" stroke-width="2"/>
      <rect x="10" y="10" width="${BOARD_W - 20}" height="${BOARD_H - 20}" rx="12" fill="none" stroke="#1f2128" stroke-width="1"/>
      <text x="250" y="430" text-anchor="middle" fill="#2f323c" font-size="74" font-weight="800" letter-spacing="4">E4</text>
      <text x="250" y="454" text-anchor="middle" fill="#272a33" font-size="11" font-weight="600" letter-spacing="2">v1.0 · ESP32 + 4× TMC2209</text>
      <text x="36" y="74" fill="#5a5f6b" font-size="9" font-weight="600" letter-spacing="1">POWER · HEATERS · ENDSTOPS</text>
      <text x="140" y="478" fill="#5a5f6b" font-size="9" font-weight="600" letter-spacing="1">MOTOR OUTPUTS</text>
      <text x="540" y="478" fill="#5a5f6b" font-size="9" font-weight="600" letter-spacing="1">THERM.</text>
      <text x="118" y="294" fill="#5a5f6b" font-size="9" font-weight="600" letter-spacing="1">TMC2209 DRIVERS</text>
      ${els}`;
    layoutPeripherals();
    let wires = '', mods = '';
    BOARD_PERIPHERALS.forEach((p) => { wires += peripheralWire(p); mods += peripheralModule(p); });
    return `<svg viewBox="0 0 1340 860" class="e4-board-svg" role="img" aria-label="FYSETC E4 board diagram with mounted peripherals">
      <g transform="translate(${BX},${BY})">${boardInner}</g>
      ${wires}
      ${mods}</svg>`;
  }

  /* ------------------------------------------------------- section content */
  const C = {};

  C.pinmap = () => {
    const headerPins = [
      ['X-MIN (AUX3)', 'GPIO34', 'Home / Limit', '#3b82f6'], ['Y-MIN (AUX4)', 'GPIO35', 'Home Axis2', '#3b82f6'],
      ['TE (TEMP0)', 'GPIO36', 'PEC / Thermistor', '#8b5cf6'], ['TB (TEMP1)', 'GPIO39', 'Limit / Thermistor', '#8b5cf6'],
      ['HEAT_E0', 'GPIO2', 'Dew Heater 1', '#f59e0b'], ['HEAT_BED', 'GPIO4', 'Dew Heater 2', '#f59e0b'],
      ['FAN_E0 (AUX8)', 'GPIO13', 'LED / Buzzer', '#10b981'], ['AUX7 SPARE', '—', 'OneWire / IO', '#06b6d4'],
      ['I2C SDA', 'GPIO21', 'BME280 / RTC', '#ec4899'], ['I2C SCL', 'GPIO22', 'BME280 / RTC', '#ec4899'],
    ];
    const grid = headerPins.map((p) =>
      `<div class="e4-pingrid-item" style="border-left-color:${p[3]}">
        <div class="e4-pingrid-label">${p[0]}</div>${code(p[1])}<div class="e4-pingrid-type">${p[2]}</div></div>`).join('');
    const mainRows = [
      ['I2C SDA', 'GPIO21', '21', 'I2C Data', 'SDA for RTC, BME280, etc.'],
      ['I2C SCL', 'GPIO22', '22', 'I2C Clock', 'SCL for RTC, BME280, etc.'],
      ['AUX3 / X-MIN', 'GPIO34', '34', 'Home Axis1', 'Input only — home sensor for RA/Azm'],
      ['AUX4 / Y-MIN', 'GPIO35', '35', 'Home Axis2', 'Input only — home sensor for Dec/Alt'],
      ['AUX5 / HEAT_E0', 'GPIO2', '2', 'Dew Heater 1', 'Must be low at boot; PWM dew or switch'],
      ['AUX6 / HEAT_BED', 'GPIO4', '4', 'Dew Heater 2', 'PWM dew heater or switch'],
      ['AUX7 / SPARE_RX', '—', '—', 'OneWire bus', 'DS18B20 temp sensors (default bus)'],
      ['AUX8 / FAN_E0', 'GPIO13', '13', 'LED/Buzzer/Dew', 'Status LED, buzzer, or dew heater'],
      ['TEMP0 / TE', 'GPIO36', '36', 'PEC / Thermistor', 'Input only — PEC index or temp'],
      ['TEMP1 / TB', 'GPIO39', '39', 'Limit / Thermistor', 'Input only — limit switch or temp'],
      ['SHARED EN', 'GPIO25', '25', 'Enable', 'Shared enable for all stepper drivers'],
      ['TMC_TX / Z-MIN', 'GPIO15', '15', 'TMC UART TX', 'Jumper to TMC2209 PDN pin'],
    ];
    const gpioRef = [
      ['GPIO2', 'HEAT_E0', 'PWM dew heater, switch, intervalometer', 'Must be low at boot'],
      ['GPIO4', 'HEAT_BED', 'PWM dew heater, switch, intervalometer', '—'],
      ['GPIO12', 'Z-STEP', 'Axis3/Axis5 DIR', 'Must be low at boot'],
      ['GPIO13', 'FAN_E0', 'Status LED, buzzer, dew, intervalometer', 'LED/buzzer shared'],
      ['GPIO14', '—', 'Axis3/Axis5 STEP', 'Shared with Axis5'],
      ['GPIO15', 'Z-MIN', 'TMC UART TX', 'Jumpered to TMC PDN'],
      ['GPIO16', '—', 'Axis4 STEP, Serial2 RX', '—'], ['GPIO17', '—', 'Axis4 DIR, Serial2 TX', '—'],
      ['GPIO21', 'I2C SDA', 'BME280, DS3231, I2C devices', 'I2C bus'],
      ['GPIO22', 'I2C SCL', 'BME280, DS3231, I2C devices', 'I2C bus'],
      ['GPIO25', '—', 'SHARED_ENABLE', 'All axes share this'],
      ['GPIO26', '—', 'Axis1 DIR', 'RA/Azm direction'], ['GPIO27', '—', 'Axis1 STEP', 'RA/Azm step'],
      ['GPIO32', '—', 'Axis2 DIR', 'Dec/Alt direction'], ['GPIO33', '—', 'Axis2 STEP', 'Dec/Alt step'],
      ['GPIO34', 'X-MIN', 'Home SW Axis1, limit, GPS RX', 'Input only'],
      ['GPIO35', 'Y-MIN', 'Home SW Axis2', 'Input only'],
      ['GPIO36', 'TE', 'PEC index, thermistor', 'Input only'],
      ['GPIO39', 'TB', 'Limit switch, thermistor', 'Input only'],
    ];
    return `
      <h2 class="e4-h2">Pinmap &amp; Overview</h2>
      <p class="e4-intro">The FYSETC E4 is an ESP32-based 3D-printer controller repurposed for telescope control with OnStepX.
        It has 4× TMC2209 UART stepper drivers, built-in WiFi/BT, dew-heater outputs, thermistor inputs and I2C — all from a single 12–24V supply.</p>
      ${callout('warn', '<strong>Critical:</strong> Remove ALL factory shunts. Jumper <strong>Z-MIN (GPIO15)</strong> → TMC2209 PDN/UART pin.')}
      <div class="e4-card">
        <h3>Interactive Board Diagram &amp; Mounted Hardware</h3>
        <p class="e4-card-desc">Connector positions mirror the real FYSETC E4 board: the green <strong>12V·0V·H1·H2</strong> terminal and
          <strong>Z/Y/X-MIN</strong> endstops along the top, <strong>ESP32 · USB · SD</strong> on the right, the 4 <strong>TMC2209</strong> drivers and
          central <strong>I2C/AUX</strong> header in the middle, and <strong>MOT X/Y/Z/E</strong> motor outputs with <strong>TB/TE</strong> thermistors along the bottom.
          <strong>Every add-on OnStepX supports on the E4</strong> is wired in around it — power supply &amp; regulator, 4 motors, GPS, RTC, BME280,
          OLED, DS18B20, thermistor, PEC Hall, 2 dew heaters, DSLR shutter, reticle, buzzer, power LED, endstops and USB.
          Click any board connector <em>or</em> peripheral for details, GPIO mapping and wiring guidance.</p>
        <div class="e4-board-legend">
          <span><i style="background:#facc15"></i>Power / regulator</span>
          <span><i style="background:#f97316"></i>Heater</span>
          <span><i style="background:#3b82f6"></i>Endstop / switch</span>
          <span><i style="background:#10b981"></i>GPS</span>
          <span><i style="background:#ec4899"></i>I2C module</span>
          <span><i style="background:#f59e0b"></i>Thermistor / Hall</span>
          <span><i style="background:#06b6d4"></i>OneWire</span>
          <span><i style="background:#ef4444"></i>Motor / LED</span>
          <span><i style="background:#8b5cf6"></i>TMC driver</span>
        </div>
        <div class="e4-board-layout">
          <div class="e4-board-svg-wrap">${boardSVG()}<div class="e4-board-hint" style="display:none"></div></div>
          <div class="e4-board-detail" style="display:none"></div>
        </div>
      </div>
      <div class="e4-card">
        <h3>Quick Start — First Time Setup</h3>
        <ol style="line-height:2.1;font-size:13px">
          <li><strong>Remove all factory shunts</strong> from the E4 board</li>
          <li><strong>Jumper Z-MIN (GPIO15)</strong> → TMC2209 PDN/UART pin</li>
          <li><strong>Install libraries</strong> in Arduino IDE: Makuna RTC, Adafruit BME280, Adafruit Sensor, TMC2209</li>
          <li><strong>Select board:</strong> ESP32 Dev Module, 240MHz, Huge App partition</li>
          <li><strong>Flash OnStepX</strong> (E4 branch) — erase all flash the first time</li>
          <li><strong>Wire motors</strong> to screw terminals (4-wire bipolar steppers)</li>
          <li><strong>Connect to "OnStepX" WiFi</strong> → <strong>http://192.168.0.1</strong></li>
        </ol>
      </div>
      <h3 class="e4-cat" style="border-left-color:#60a5fa;color:#60a5fa">Pin Header Quick Reference</h3>
      <div class="e4-pingrid">${grid}</div>
      ${table(['Function', 'GPIO', 'Pin#', 'Label', 'Notes'], mainRows.map((r) => [code(r[0]), gpio(r[1]), pin(r[2]), r[3], `<span style="color:var(--e4-dim);font-size:12px">${r[4]}</span>`]))}
      <div class="e4-card">
        <h3>Specifications</h3>
        ${table(['Parameter', 'Detail'], [
          ['MCU', 'ESP32 dual-core Xtensa LX6 @ 240MHz'], ['Drivers', '4× TMC2209 (UART 460800 baud)'],
          ['Power', '12–24V DC single input'], ['WiFi/BT', 'Built-in ESP32'],
          ['I2C', 'GPIO21 (SDA), GPIO22 (SCL)'], ['Max Axes', '2 mount + 1 rotator + 2 focusers (shared pins)'],
          ['Firmware', 'OnStepX E4 branch (v10.24c+)'], ['Wiki', '<a href="https://wiki.fysetc.com/docs/E4" target="_blank" rel="noopener">FYSETC E4 Wiki</a>'],
        ])}
      </div>
      <div class="e4-card">
        <h3>Available GPIO Reference</h3>
        <p class="e4-card-desc">ESP32 GPIO pins available for custom use on the FYSETC E4. Some have constraints.</p>
        ${table(['GPIO', 'Pin / Header', 'Available For', 'Constraints'], gpioRef.map((r) => [gpio(r[0]), pin(r[1]), `<span style="font-size:12px">${r[2]}</span>`, `<span style="color:var(--e4-dim);font-size:12px">${r[3]}</span>`]))}
      </div>`;
  };

  C.limits = () => `
    <h2 class="e4-h2">Limit Switch Implementation</h2>
    <p class="e4-desc">OnStepX supports home sensors (end-stops) and limit switches on each axis. The E4 has dedicated pins for
      Axis1 home (X-MIN / GPIO34) and Axis2 home (Y-MIN / GPIO35). GPIO34 is input-only (no internal pull-up) — the E4 has a 2kΩ pull-up on the X-MIN connector.</p>
    ${card({
      title: 'Home Switches — Mechanical Microswitch',
      desc: 'Standard mechanical microswitches (e.g. Omron D2F, D2MV) provide reliable homing. Normally-open (NO) to GND is recommended for failsafe operation.',
      warnings: [
        { label: 'Debounce Required', text: 'Mechanical switches bounce for 5–20ms. Without an RC debounce (10kΩ + 0.1µF), OnStepX may read multiple triggers causing false home detection.' },
        { label: 'NO vs NC', text: 'Use Normally-Open (NO) connecting to GND when activated. Configure AXISn_SENSE_HOME LOW. NC is possible but less failsafe (broken wire = false trigger).' },
        { label: 'Input Only Pins', text: 'GPIO34/GPIO35 are input-only on ESP32 — no internal pull-up/down. The E4 has discrete 2kΩ pull-ups on both X-MIN and Y-MIN connectors.' },
      ],
      wiring: [
        { e4: 'X-MIN (AUX3) Pin 1', gpio: 'GPIO34', to: 'Microswitch COM terminal' },
        { e4: 'X-MIN (AUX3) Pin 2', gpio: 'GND', to: 'Microswitch NO terminal (switch to GND when activated)' },
        { e4: 'Y-MIN (AUX4) Pin 1', gpio: 'GPIO35', to: 'Microswitch COM terminal' },
        { e4: 'Y-MIN (AUX4) Pin 2', gpio: 'GND', to: 'Microswitch NO terminal (switch to GND when activated)' },
      ],
      config: [
        { dir: 'AXIS1_SENSE_HOME', val: 'LOW', note: 'Active LOW = switch to GND triggers home' },
        { dir: 'AXIS2_SENSE_HOME', val: 'LOW', note: 'Active LOW for Axis2 home' },
        { dir: 'AXIS1_SENSE_HOME_OFFSET', val: '0', note: 'Arc-second offset from switch to true home' },
        { dir: 'AXIS2_SENSE_HOME_OFFSET', val: '0', note: 'Arc-second offset for Axis2' },
        { dir: 'ALIGN_AUTO_HOME', val: 'ON', note: 'Auto-home at startup before alignment' },
      ],
      notes:
        `<p style="margin:6px 0"><strong>Debounce RC circuit (recommended for mechanical switches):</strong></p>
        <pre class="e4-pre">  E4 X-MIN ──┬── R 10kΩ ──┬── GPIO34 (ESP32)
              │             │
              │             └── C 0.1µF ── GND
              │
              └── Switch ── GND  (NO, closes when home reached)</pre>
        <p style="margin-top:6px;font-size:12px;color:var(--e4-dim)"><strong>Alternative: Hall effect sensor</strong> (A3144, US1881, SS441):
        open-collector OUT → X-MIN, VCC → 3.3V, GND → GND. Configure ${code('AXIS1_SENSE_HOME HIGH')} (sensor pulls LOW on magnet).
        The E4's 2kΩ pull-up on X-MIN serves as the required pull-up. Place the magnet on the rotating part, the sensor on the stationary part.</p>`,
    })}
    ${card({
      title: 'Limit Switches',
      desc: 'Hardware limits stop ALL mount movement when triggered. The E4 Config.h overrides the default limit pin to GPIO34 instead of GPIO39.',
      warnings: [
        { label: 'Shared Pin', text: 'Default Config.h: LIMIT_SENSE_PIN = GPIO34 (X-MIN). GPIO34 therefore serves as BOTH Axis1 home AND limit. To separate them, change LIMIT_SENSE_PIN to 39 (TB).' },
        { label: 'LIMIT_STRICT Behavior', text: 'OFF = limits disabled until unpark (goto clears). ON = limits always active — the mount cannot move until date/time is set.' },
        { label: 'E-Stop Effect', text: 'When any limit triggers: all gotos abort, tracking stops, the mount freezes. Clear by unparking or sending :U# via serial.' },
      ],
      wiring: [
        { e4: 'X-MIN (GPIO34) — default', gpio: 'GPIO34', to: 'Limit switch NO → GND (shared with Axis1 home)' },
        { e4: 'TB (GPIO39) — alternative', gpio: 'GPIO39', to: 'Dedicated limit switch input (original pinmap)' },
        { e4: '3.3V (via 2kΩ pull-up on E4)', gpio: '—', to: 'Internal pull-up on X-MIN/Y-MIN connectors' },
      ],
      config: [
        { dir: 'LIMIT_SENSE', val: 'LOW', note: 'Active LOW — short to GND = limit triggered' },
        { dir: 'LIMIT_SENSE_PIN', val: '34', note: 'Override: X-MIN connector (default: 39=TB)' },
        { dir: 'LIMIT_STRICT', val: 'OFF', note: 'OFF = limits off until unpark; ON = always on' },
        { dir: 'AXIS1_SENSE_LIMIT_MIN', val: 'LIMIT_SENSE', note: 'Uses shared LIMIT_SENSE' },
        { dir: 'AXIS1_SENSE_LIMIT_MAX', val: 'LIMIT_SENSE', note: 'Uses shared LIMIT_SENSE' },
        { dir: 'AXIS2_SENSE_LIMIT_MIN', val: 'LIMIT_SENSE', note: 'Uses shared LIMIT_SENSE' },
        { dir: 'AXIS2_SENSE_LIMIT_MAX', val: 'LIMIT_SENSE', note: 'Uses shared LIMIT_SENSE' },
      ],
      notes: callout('info', `<strong>PIN SHARING — CRITICAL:</strong> The default Config.h sets ${code('LIMIT_SENSE_PIN 34')}, making GPIO34 (X-MIN) the shared input for BOTH ${code('AXIS1_SENSE_HOME')} and ${code('LIMIT_SENSE')}. Use one switch at the home position (home = limit), or use separate switches: home to X-MIN, limit to TB (GPIO39) with ${code('#define LIMIT_SENSE_PIN 39')}.`),
    })}
    ${callout('warn', `<strong>Community note — default limit behaviour:</strong> out of the box, <strong>X-MIN (GPIO34) acts as an emergency stop for BOTH axes</strong>, while <strong>Y-MIN does NOT stop motion</strong> — the default limit is an e-stop, not a homing endstop. All of these pins are remappable: one working build uses ${code('LIMIT_SENSE_PIN 36')} (TE), ${code('AXIS1_SENSE_HOME_PIN 39')} (TB) and ${code('AXIS2_SENSE_HOME_PIN 35')} (Y-MIN). <span style="color:rgba(255,255,255,.6)">Source: <a href="https://onstep.groups.io/g/main/message/60114" target="_blank" rel="noopener">#60114</a>, <a href="https://onstep.groups.io/g/main/message/68294" target="_blank" rel="noopener">#68294</a></span>`)}`;

  C.gps = () => `
    <h2 class="e4-h2">GPS Module Implementation</h2>
    <p class="e4-desc">A GPS module provides automatic date/time and location to OnStepX. The most common module is the GY-GPSV3 (NEO-M8N or NEO-6M).
      Connect via serial (TX/RX) or repurpose X-MIN (GPIO34) for single-wire bit-banged serial.</p>
    ${card({
      title: 'GPS Module — GY-GPSV3 (NEO-M8N / NEO-6M)',
      desc: 'Provides UTC time, latitude, longitude via NMEA sentences. OnStepX parses $GPGGA and $GPRMC automatically at 1Hz.',
      warnings: [
        { label: 'Capacitor Removal (Single-Wire Mode)', text: 'X-MIN has SMD filter caps (C22, C23, C24 near the X-MIN header) that must be removed for reliable GPS data at 9600 baud.' },
        { label: 'Voltage', text: 'GY-GPSV3 runs on 3.3V. DO NOT connect to 5V — it will damage the GPS module.' },
        { label: 'Baud Rate Mismatch', text: 'Default is 9600 8N1. Some modules ship at 38400 or 115200. Verify with a serial monitor first.' },
        { label: 'Cold Start', text: 'First fix can take 5–15 min (cold start). Give the antenna a clear sky view. Subsequent starts: 1–5s (hot start with backup battery).' },
      ],
      wiring: [
        { e4: 'X-MIN (GPIO34) — single-wire', gpio: 'GPIO34', to: 'GPS TX output (GPS → ESP32, one-way)' },
        { e4: 'GPIO16 (Serial2 RX) — UART mode', gpio: 'GPIO16', to: 'GPS TX (cleaner, no capacitor removal)' },
        { e4: 'GPIO17 (Serial2 TX) — UART mode', gpio: 'GPIO17', to: 'GPS RX (optional, for sending commands)' },
        { e4: '3.3V (E4 header)', gpio: '—', to: 'GPS VCC (max 50mA draw)' },
        { e4: 'GND (E4 header)', gpio: '—', to: 'GPS GND' },
      ],
      config: [
        { dir: 'TIME_LOCATION_SOURCE', val: 'GPS', note: 'Use GPS for date/time and location' },
        { dir: 'SERIAL_GPS_BAUD', val: '9600', note: 'Must match GPS module baud rate' },
        { dir: 'TIME_LOCATION_PPS_SENSE', val: 'OFF', note: 'Set to HIGH if GPS has PPS output' },
      ],
      notes:
        `<p style="margin:6px 0"><strong>Capacitor removal (single-wire mode on X-MIN):</strong></p>
        <pre class="e4-pre">  X-MIN Header on E4 board (JST-XH 2-pin):
  Pin 1: GPIO34 ──┬── R (2kΩ pull-up to 3.3V)
                  ├── C22 (10µF) ── GND  ← REMOVE this capacitor
                  ├── C23 (0.1µF) ── GND ← REMOVE this capacitor
                  ├── C24 (optional) ── GND ← REMOVE if present
                  └── GPS TX (3.3V logic level)
  Pin 2: GND</pre>
        ${callout('info', `<strong>Wiring methods:</strong> <b>Single-wire</b> (GPIO34, X-MIN) needs only 1 pin but requires cap removal and is bit-banged. <b>UART/Serial2</b> (GPIO16 RX, GPIO17 TX) is reliable hardware UART with no caps to remove, but conflicts with the Axis4 focuser. <b>I2C GPS</b> shares the I2C bus but has rare module support.`)}`,
    })}
    ${card({
      title: 'Community notes (OnStep forum)',
      desc: 'Working E4 GPS settings and tips shared by users.',
      notes:
        `<p style="margin:6px 0"><strong>Single-wire on X-MIN — exact Config.h</strong> (msg #69284):</p>
        <pre class="e4-pre">#define TIME_LOCATION_SOURCE          GPS
#define SERIAL_GPS                    Serial2   // or SoftSerial
#define SERIAL_GPS_RX                 34         // X-MIN (GPIO34) ← GPS TX
#define SERIAL_GPS_TX                 0          // unused — do NOT wire to GPS RX
#define SERIAL_GPS_BAUD               9600
#define TIME_LOCATION_PPS_SENSE       OFF        // HIGH if your GPS has a PPS pin</pre>
        ${callout('info', `<strong>GPS + RTC together (auto-fallback):</strong> set ${code('TIME_LOCATION_SOURCE GPS')} and ${code('TIME_LOCATION_SOURCE_FALLBACK DS3231')} — OnStepX uses the GPS once it has a fix and falls back to the DS3231 clock when no satellites are visible. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/66963" target="_blank" rel="noopener">#66963</a>, <a href="https://onstep.groups.io/g/main/message/69284" target="_blank" rel="noopener">#69284</a></span>`)}
        <ul style="font-size:12.5px;line-height:1.75">
          <li><strong>Z-MIN can't be a serial/GPS input</strong> on the E4. If X-MIN and Y-MIN are both used for home sensors, don't try to put GPS on Z-MIN — instead move one <em>home sensor</em> to Z-MIN to free X-MIN for the GPS. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/68291" target="_blank" rel="noopener">#68291</a></span></li>
          <li><strong>Which cap to remove:</strong> there are 3 SMD parts next to the X-MIN pins — two are resistors, the <em>centre</em> one is the filter capacitor to lift for single-wire GPS. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/69156" target="_blank" rel="noopener">#69156</a></span></li>
          <li><strong>Verify the module first:</strong> if the GPS works with a test sketch but not OnStepX, it's almost always a baud/pin mismatch — confirm ${code('SERIAL_GPS_BAUD 9600')} and that GPS TX goes to GPIO34. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/67492" target="_blank" rel="noopener">#67492</a></span></li>
        </ul>`,
    })}`;

  C.thermistor = () => `
    <h2 class="e4-h2">Thermistor Implementation</h2>
    <p class="e4-desc">The E4 has two thermistor inputs (TE and TB) with built-in 4.7kΩ pull-up resistors and 10µF filter caps.
      Used for focuser temperature compensation, dew-heater control or ambient monitoring (3.3V → 4.7kΩ → GPIO → NTC → GND).</p>
    ${card({
      title: 'Thermistor Configuration — NTC 3950 100kΩ',
      desc: 'Standard NTC 100kΩ glass-bead thermistors (beta 3950). The onboard 4.7kΩ series resistor and the NTC form a voltage divider read by the ESP32 ADC.',
      warnings: [
        { label: 'Input Only', text: 'GPIO36 (TE) and GPIO39 (TB) are input-only — no internal pull-up. The 4.7kΩ series resistor to 3.3V acts as the pull-up.' },
        { label: 'Filtering Capacitor', text: 'The onboard 10µF cap creates a ~50ms time constant. For fast focuser temp compensation, remove C22 (near TE) or C23 (near TB).' },
        { label: 'Temperature Range', text: 'Standard config: -10°C to +85°C. For sub-freezing, add THERMISTOR_RPARALLEL 10000 (10kΩ) to extend down to -20°C.' },
        { label: 'ADC Non-Linearity', text: 'The ESP32 ADC is not perfectly linear (0–3.3V → 0–4095). OnStepX applies the Steinhart-Hart equation internally.' },
      ],
      wiring: [
        { e4: 'TE (TEMP0) — JST-XH 2-pin', gpio: 'GPIO36', to: 'NTC thermistor leg 1 — leg 2 → GND' },
        { e4: 'TB (TEMP1) — JST-XH 2-pin', gpio: 'GPIO39', to: 'NTC thermistor leg 1 — leg 2 → GND' },
        { e4: 'Onboard 4.7kΩ to 3.3V', gpio: '—', to: 'Built-in series resistor' },
      ],
      config: [
        { dir: 'THERMISTOR1_TNOM', val: '25', note: 'Nominal temp of your NTC (°C)' },
        { dir: 'THERMISTOR1_RNOM', val: '100000', note: 'Nominal resistance (Ω) — typically 100kΩ' },
        { dir: 'THERMISTOR1_BETA', val: '3950', note: 'Beta coefficient (often 3950 or 3435)' },
        { dir: 'THERMISTOR1_RSERIES', val: '4700', note: 'E4 series resistor = 4.7kΩ' },
        { dir: 'THERMISTOR_RPARALLEL', val: 'OFF', note: 'Set to 10000 (10kΩ) for extended sub-zero range' },
        { dir: 'FOCUSER_TEMPERATURE', val: 'THERMISTOR', note: 'Use TE thermistor for focuser temp' },
        { dir: 'FEATURE1_TEMP', val: 'THERMISTOR', note: 'TE feedback for Dew Heater 1' },
        { dir: 'FEATURE2_TEMP', val: 'THERMISTOR', note: 'TB feedback for Dew Heater 2' },
      ],
      notes:
        `<pre class="e4-pre">  3.3V
    └──┬── R_series 4.7kΩ ──┬── GPIO36/39 (ESP32 ADC)
       │                    └── C 10µF ── GND
       └── JST-XH Pin 1 ──── NTC thermistor ──── GND (JST Pin 2)</pre>
        ${callout('info', `<strong>Sub-zero mod:</strong> add ${code('#define THERMISTOR_RPARALLEL 10000')} and solder a 10kΩ resistor between the TE/TB pin and GND — extends usable range from -10°C down to -20°C.`)}`,
    })}
    ${card({
      title: 'Two Channels, ADC Notes & Calibration',
      desc: 'The E4 exposes two analog inputs — TE (GPIO36) and TB (GPIO39) — so you can run two independent temperature feeds (e.g. focuser on TE, dew strap on TB). Both sit on the ESP32 ADC1, which matters: ADC2 cannot be read while WiFi is active, and the E4 runs WiFi by default. Because TE/TB are ADC1, they keep working with WiFi on.',
      warnings: [
        { label: 'Use ADC1 pins only', text: 'GPIO36 (ADC1_CH0) and GPIO39 (ADC1_CH3) are the correct thermistor pins. Do NOT relocate a thermistor to an ADC2 pin (GPIO0/2/4/12–15/25–27) — analogRead() returns garbage once WiFi starts.' },
        { label: 'RSERIES must match the board', text: 'The E4 has a 4.7kΩ series resistor to 3.3V on each input. THERMISTORn_RSERIES must be 4700 or every reading is offset. If you change that resistor, update the directive to match.' },
        { label: 'Filter cap vs response', text: 'The onboard 10µF cap gives steady ambient readings (~50ms). Keep it for dew/ambient sensing; remove it only when a focuser needs fast thermal response.' },
      ],
      config: [
        { dir: 'THERMISTOR2_TNOM', val: '25', note: 'Channel 2 (TB/GPIO39) nominal temp °C' },
        { dir: 'THERMISTOR2_RNOM', val: '100000', note: 'TB NTC nominal resistance (10000 for a 10k NTC)' },
        { dir: 'THERMISTOR2_BETA', val: '3950', note: 'TB beta coefficient (datasheet value)' },
        { dir: 'THERMISTOR2_RSERIES', val: '4700', note: 'E4 series resistor on TB' },
        { dir: 'FEATURE1_TEMP', val: 'THERMISTOR', note: 'Dew Heater 1 reads thermistor channel 1 (TE)' },
        { dir: 'FEATURE2_TEMP', val: 'THERMISTOR', note: 'Dew Heater 2 reads thermistor channel 2 (TB)' },
      ],
      notes:
        `<p style="margin:6px 0"><strong>Common NTC beta values</strong> (always confirm against your datasheet):</p>
        ${table(['NTC type', 'R @ 25°C', 'Typical beta'], [
          ['Glass-bead astro NTC (most common)', '100kΩ', '3950 — E4 default'],
          ['Epcos/TDK & some 100k brands', '100kΩ', '3984–4092'],
          ['Cheap dew-strap NTC', '10kΩ', '3435 (set RNOM 10000)'],
        ])}
        ${callout('info', '<strong>Calibration:</strong> compare the reported temperature against a known thermometer at two points (room temp and ice water). If it reads consistently high or low, nudge BETA by ~50 at a time until it matches — RNOM/TNOM anchor the 25°C point, BETA sets the slope of the curve.')}`,
    })}
    ${card({
      title: 'Community notes (OnStep forum)',
      desc: 'Field-tested points from the OnStep group, specific to E4 thermistors.',
      notes:
        `<ul style="font-size:12.5px;line-height:1.75">
          <li><strong>ESP32 ADC accuracy is mediocre for thermistors</strong> — several users saw large reading errors. Verify each sensor in ice water (0°C) and at body temperature (~37°C); if it's off, adjust BETA or switch to a DS18B20. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/67146" target="_blank" rel="noopener">#67146</a>, <a href="https://onstep.groups.io/g/main/message/63079" target="_blank" rel="noopener">#63079</a></span></li>
          <li><strong>Second channel = THERMISTOR2.</strong> ${code('FEATUREn_TEMP')} accepts ${code('OFF')}, ${code('THERMISTOR')} (TE), ${code('THERMISTOR2')} (TB), or a DS18B20 serial number. The E4 default Config.h already ties a thermistor to the 2nd channel. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/63078" target="_blank" rel="noopener">#63078</a></span></li>
          <li><strong>Commercial dew rings use a 10kΩ NTC.</strong> The Celestron Dew Heater Ring thermistor is 10kΩ, not 100kΩ — set ${code('RNOM 10000')}. A 10k NTC raises the divider voltage, so do NOT also add the 10k RPARALLEL mod. The 4.7kΩ in the E4 config is simply the onboard series resistor. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/61779" target="_blank" rel="noopener">#61779</a>, <a href="https://onstep.groups.io/g/main/message/61164" target="_blank" rel="noopener">#61164</a></span></li>
          <li><strong>DS18B20 is the reliable alternative</strong> (±0.25°C), but on the E4 it typically uses the SD-card header pins and reading each device's 64-bit serial number is the fiddly part. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/63079" target="_blank" rel="noopener">#63079</a></span></li>
        </ul>
        ${callout('info', 'Correction circuitry to improve ESP32 thermistor readings is documented in the official <a href="https://onstep.groups.io/g/main/wiki/32747" target="_blank" rel="noopener">FYSETC E4 wiki</a> (dew-heater section).')}`,
    })}`;

  C.dew = () => `
    <h2 class="e4-h2">Dew Heater Implementation</h2>
    <p class="e4-desc">The E4 has two dedicated heater outputs: HEAT_E0 (GPIO2) and HEAT_BED (GPIO4). These are PWM-capable at 3.3V logic and
      require an external N-channel MOSFET to switch 12V heater tape. Controlled via the FEATURE system as DEW_HEATER type.</p>
    ${card({
      title: 'Dew Heater Control — External MOSFET Circuit',
      desc: 'OnStepX regulates dew-heater power with slow PWM (2-second period). Power is computed from the ambient-vs-dew-point difference (0–255 duty).',
      warnings: [
        { label: 'External MOSFET Required', text: 'GPIO2/GPIO4 are 3.3V logic only — use IRLZ44N (logic-level N-channel) or equivalent. Standard MOSFETs (e.g. IRF520) need >5V gate drive and will NOT fully turn on.' },
        { label: 'GPIO2 Boot State', text: 'GPIO2 must be LOW at boot or the ESP32 may fail to start. The 10kΩ pull-down in the circuit ensures this. DO NOT omit it.' },
        { label: 'Fuse Protection', text: 'ALWAYS fuse the heater power line. Use a 3A blade fuse (ATO) per channel. Unfused heater wiring can cause fire if the MOSFET fails short.' },
        { label: 'Heater Power Rating', text: '~1W per inch of aperture: an 8" SCT = 8W tape. At 12V, 8W = 0.67A.' },
        { label: '24V Supply', text: 'On 24V, heater power quadruples (P=V²/R). Use 24V-rated tape or reduce the PWM limit via FEATUREn_VALUE_LIMIT.' },
      ],
      wiring: [
        { e4: 'HEAT_E0 (GPIO2 / AUX5)', gpio: 'GPIO2', to: '1kΩ resistor → IRLZ44N Gate' },
        { e4: 'HEAT_BED (GPIO4 / AUX6)', gpio: 'GPIO4', to: '1kΩ resistor → IRLZ44N Gate' },
        { e4: 'E4 GND', gpio: '—', to: 'IRLZ44N Source + 10kΩ gate pull-down' },
        { e4: '12V supply (+ rail)', gpio: '—', to: '3A fuse → Heater tape (+) terminal' },
        { e4: 'IRLZ44N Drain', gpio: '—', to: 'Heater tape (-) terminal (switched ground)' },
      ],
      config: [
        { dir: 'FEATURE1_PURPOSE', val: 'DEW_HEATER', note: 'Enable Dew Heater 1' },
        { dir: 'FEATURE1_PIN', val: '2', note: 'GPIO2 = HEAT_E0' },
        { dir: 'FEATURE1_TEMP', val: 'THERMISTOR', note: 'Temp feedback via TE' },
        { dir: 'FEATURE1_VALUE_LIMIT', val: '255', note: 'Max PWM duty (reduce if 24V supply)' },
        { dir: 'FEATURE2_PURPOSE', val: 'DEW_HEATER', note: 'Enable Dew Heater 2' },
        { dir: 'FEATURE2_PIN', val: '4', note: 'GPIO4 = HEAT_BED' },
        { dir: 'WEATHER', val: 'BME280_0x76', note: 'Enable BME280 for dew point calculation' },
      ],
      notes:
        `<pre class="e4-pre">                +12V (from PSU)
                   ├── 3A Fuse ──┬── Heater Tape (+) ────┐
                                 │                       │
                                 │                  ┌────┤ Heater Tape (-)
                                 │                  └──── IRLZ44N Drain
  E4 GPIO2 ── R1 1kΩ ───────────┴── IRLZ44N Gate ──┐         │
                                    R2 10kΩ ── GND ─┴─────────┴── GND</pre>
        ${callout('info', '<strong>Dew point:</strong> With BME280 active, OnStepX calculates dew point from ambient temp + RH and adjusts PWM to keep optics ≥2°C above dew point. Configure the target delta in the SWS Dew tab.')}
        ${callout('warn', '<strong>GPIO2 Boot Warning:</strong> If using HEAT_E0 (GPIO2), the 10kΩ pull-down R2 is MANDATORY — without it GPIO2 may float HIGH during power-on reset and the board won\'t boot.')}`,
    })}
    ${card({
      title: 'Auto Regulation, Sizing & 24V Derating',
      desc: 'With a temperature source assigned (FEATUREn_TEMP) plus a BME280 for dew point, OnStepX runs each heater as a closed loop — it raises PWM as the optic temperature approaches the dew point and eases off once it is safely above. Without a temperature source the channel is just a manual 0–255 PWM output you set in the SWS/app.',
      warnings: [
        { label: 'Logic-level MOSFET only', text: 'IRLZ44N / IRLB3034 / AOD4184 turn fully on at a 3.3V gate. Standard IRFZ44N / IRF520 need ~10V and will run hot and half-on — they are NOT a substitute.' },
        { label: 'Two independent zones', text: 'FEATURE1 (GPIO2/HEAT_E0) and FEATURE2 (GPIO4/HEAT_BED) are separate channels — e.g. main objective strap on one with TE feedback, secondary/finder strap on the other with TB feedback.' },
        { label: 'Active-high default', text: 'FEATUREn_ON_STATE is HIGH for the N-channel low-side circuit shown above (GPIO HIGH → MOSFET on). Only set it LOW if your driver stage inverts.' },
      ],
      config: [
        { dir: 'FEATURE1_VALUE_DEFAULT', val: 'OFF', note: 'Startup state — OFF, or 0–255 for a fixed PWM level' },
        { dir: 'FEATURE1_ON_STATE', val: 'HIGH', note: 'GPIO HIGH = heater on (matches the IRLZ44N circuit)' },
        { dir: 'FEATURE1_TEMP', val: 'THERMISTOR', note: 'Optic temp source → enables dew-point auto control' },
        { dir: 'FEATURE1_VALUE_LIMIT', val: '255', note: 'Cap max duty — set ~64 (≈25%) when running 24V' },
        { dir: 'WEATHER', val: 'BME280_0x76', note: 'Ambient temp + humidity → dew point' },
        { dir: 'DISPLAY_WEATHER', val: 'ON', note: 'Show dew point & humidity in the SWS web UI' },
      ],
      notes:
        `<p style="margin:6px 0"><strong>Heater sizing</strong> (rule of thumb ≈1W per inch of aperture at 12V):</p>
        ${table(['Optic', 'Heater power', 'Current @12V', 'Current @24V'], [
          ['60–80mm finder / guide', '3–4W', '~0.3A', '~0.15A'],
          ['4" (100mm)', '4–5W', '~0.4A', '~0.2A'],
          ['6" (150mm)', '6–8W', '~0.6A', '~0.3A'],
          ['8" (200mm) SCT', '8–10W', '~0.8A', '~0.4A'],
          ['11" (280mm) SCT', '11–14W', '~1.1A', '~0.55A'],
        ])}
        ${callout('warn', '<strong>24V supply:</strong> a 12V-rated heater on 24V dissipates ~4× its rated power (P=V²/R) and can scorch optics or wiring. Either use 24V-rated heaters, cap the duty with ' + code('FEATUREn_VALUE_LIMIT') + ' (≈64 ≈ 25%), or feed the heaters from a separate 12V rail.')}
        ${callout('info', '<strong>Best accuracy:</strong> put a DS18B20 or NTC directly on the optic/tube for the FEATUREn_TEMP source, and a BME280 for ambient/dew point. OnStepX then heats only enough to keep the glass ~2°C above the measured dew point instead of running full power all night.')}`,
    })}
    ${card({
      title: 'Community notes (OnStep forum)',
      desc: 'Field-tested points from the OnStep group, specific to E4 dew heaters.',
      notes:
        `<ul style="font-size:12.5px;line-height:1.75">
          <li><strong>The two channels behave differently.</strong> "Dew Heat 1" regulates from <em>ambient temp vs dew point only</em> (needs a BME280). "Dew Heat 2" has its own point thermistor for precise control of a specific surface — e.g. a Newtonian secondary or a corrector plate. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/63078" target="_blank" rel="noopener">#63078</a>, <a href="https://onstep.groups.io/g/main/wiki/32747" target="_blank" rel="noopener">E4 wiki</a></span></li>
          <li><strong>Two regulated zones:</strong> assign a temperature source to each — e.g. focus/BME280 on one input and the dew-ring thermistor on Dew Heat 1, with dew point taken from the BME280. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/63079" target="_blank" rel="noopener">#63079</a></span></li>
          <li><strong>Tune with the SWS "Span" and "Zero" sliders.</strong> These map the computed demand onto PWM duty; <em>"Zero" is the 100%-power point</em>. If the optic still dews up, lower Zero so full power kicks in sooner. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/61164" target="_blank" rel="noopener">#61164</a>, <a href="https://onstep.groups.io/g/main/message/67391" target="_blank" rel="noopener">#67391</a></span></li>
          <li><strong>Default Config.h FEATURE block:</strong> FEATURE1 → ${code('PIN 2')} (HEAT_E0), FEATURE2 → ${code('PIN 4')} (HEAT_BED), both ${code('ON_STATE HIGH')}; set ${code('PURPOSE DEW_HEATER')} and ${code('FEATUREn_TEMP')} to THERMISTOR / THERMISTOR2. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/61521" target="_blank" rel="noopener">#61521</a></span></li>
        </ul>`,
    })}`;

  C.intervalometer = () => {
    const dslr = [
      ['Canon EOS', '2.5mm TRS (stereo)', 'Shutter', 'Focus', 'GND', 'Short tip→sleeve = shutter. Short ring→sleeve = focus.'],
      ['Nikon', '2.5mm TRS (stereo)', 'Focus', 'Shutter', 'GND', 'Nikon uses opposite tip/ring polarity vs Canon.'],
      ['Sony / Minolta', '2.5mm TRS (stereo)', 'Shutter', 'GND', 'Focus', 'Some Sony use 3.5mm or Multi-terminal. Check the manual.'],
      ['Fujifilm', '2.5mm TRS (stereo)', 'Shutter', 'GND', 'Focus', 'Similar to Sony. Fuji RR-90 remote compatible.'],
      ['Generic (2-pin)', '2.5mm TS (mono)', 'Shutter', '—', 'GND', 'No focus control. Short tip→sleeve = shutter.'],
    ];
    return `
    <h2 class="e4-h2">Intervalometer / DSLR Trigger</h2>
    <p class="e4-desc">OnStepX can act as an intervalometer (DSLR timer). It controls the camera shutter via a GPIO pin through an optocoupler.
      The camera MUST be set to <strong>BULB mode</strong> — OnStepX controls how long the shutter stays open.</p>
    ${card({
      title: 'Intervalometer Circuit — Optocoupler Isolated',
      desc: 'Controls a DSLR shutter with full galvanic isolation. Compatible with Canon, Nikon, Sony, Fujifilm and most cameras with a remote port.',
      warnings: [
        { label: 'Galvanic Isolation Required', text: 'NEVER connect the E4 GPIO directly to a camera. Always use an optocoupler (4N35, PC817). Direct connection can destroy both the ESP32 and the camera.' },
        { label: 'Camera in BULB Mode', text: 'The camera body MUST be set to BULB. OnStep controls exposure duration via :CAn# (n = seconds).' },
        { label: 'TRS Plug Wiring Varies', text: 'Canon and Nikon use the same 2.5mm TRS plug but with Tip/Ring swapped. Check the table below before soldering.' },
      ],
      wiring: [
        { e4: 'GPIO13 (FAN_E0/AUX8)', gpio: 'GPIO13', to: '1kΩ → PC817/4N35 LED anode(+)' },
        { e4: 'GPIO4 (HEAT_BED/AUX6)', gpio: 'GPIO4', to: 'Alt pin — no boot restriction' },
        { e4: 'E4 GND', gpio: '—', to: 'PC817/4N35 LED cathode(-)' },
        { e4: 'PC817 collector', gpio: '—', to: '2.5mm TRS Tip (shutter signal)' },
        { e4: 'PC817 emitter', gpio: '—', to: '2.5mm TRS Sleeve (camera GND)' },
      ],
      config: [
        { dir: 'FEATURE3_PURPOSE', val: 'INTERVALOMETER', note: 'Assign Feature3 as camera trigger' },
        { dir: 'FEATURE3_NAME', val: '"Camera"', note: 'Label in SWS/App interface' },
        { dir: 'FEATURE3_PIN', val: '13', note: 'GPIO13 (FAN_E0) — safe at boot' },
        { dir: 'FEATURE3_ON_STATE', val: 'HIGH', note: 'GPIO goes HIGH to fire shutter' },
      ],
      notes:
        `<p style="margin:6px 0"><strong>DSLR remote plug wiring by brand:</strong></p>
        ${table(['Brand', 'Plug', 'Tip', 'Ring', 'Sleeve', 'Notes'], dslr.map((d) => [`<strong>${d[0]}</strong>`, d[1], d[2], d[3], d[4], `<span style="font-size:11px;color:var(--e4-dim)">${d[5]}</span>`]))}
        ${callout('info', `<strong>Operation:</strong> ${code(':CAn#')} set exposure to n seconds (e.g. ${code(':CA30#')}), ${code(':CA#')} trigger now, ${code(':C?#')} query. Or use SWS → Camera tab → Duration / Delay / Frames.`)}`,
    })}`;
  };

  C.pec = () => `
    <h2 class="e4-h2">PEC Index Implementation</h2>
    <p class="e4-desc">Periodic Error Correction (PEC) compensates for worm-gear imperfections. OnStepX learns the error pattern over one
      worm rotation and applies real-time correction. Requires a sensor to detect the worm index pulse. <strong>Does NOT work in ALTAZM mode</strong> — GEM/FORK only.</p>
    ${card({
      title: 'PEC Index — Hall Effect Sensor (A3144 / KY-003 / US5881)',
      desc: 'A Hall sensor detects a magnet on the worm wheel. Each rotation triggers one pulse, synchronising the PEC buffer.',
      warnings: [
        { label: 'GEM/FORK Only', text: 'PEC is completely ignored in ALTAZM mode.' },
        { label: 'Sensor Selection', text: 'A3144 / KY-003: bipolar latch (switches at both poles). US5881: unipolar (one pole only) — needs correct magnet polarity.' },
        { label: 'Voltage Level', text: 'KY-003 modules output 5V logic. GPIO36 is NOT 5V-tolerant. Use a divider (2kΩ + 1kΩ) or power the sensor from 3.3V.' },
        { label: 'Input Only', text: 'GPIO36 is input-only. The E4 has a 4.7kΩ series resistor on TE (to 3.3V) which serves as the pull-up for open-collector sensors.' },
      ],
      wiring: [
        { e4: 'TE (TEMP0) — JST-XH Pin 1', gpio: 'GPIO36', to: 'Hall sensor OUT (open-collector or digital)' },
        { e4: 'TE (TEMP0) — JST-XH Pin 2', gpio: 'GND', to: 'Hall sensor GND' },
        { e4: 'E4 3.3V header pin', gpio: '—', to: 'Hall VCC (3.3V) OR divider input for 5V sensors' },
      ],
      config: [
        { dir: 'PEC_SENSE', val: 'HIGH', note: 'Rising edge = index pulse detected' },
        { dir: 'PEC_STEPS_PER_WORM_ROTATION', val: '12800', note: '(AXIS1_STEPS_PER_DEGREE × 360) / final_reduction' },
        { dir: 'PEC_BUFFER_SIZE_LIMIT', val: '720', note: 'Buffer = 720s (12 min) max recording' },
        { dir: 'AXIS1_STEPS_PER_DEGREE', val: '12800', note: 'Must match your mount gearing' },
      ],
      notes:
        `<pre class="e4-pre">  Option A: 3.3V sensor (A3144 bare)
  A3144 VCC ── E4 3.3V   |  GND ── E4 GND   |  OUT ── E4 TE (GPIO36)

  Option B: 5V module (KY-003) with divider
  KY-003 OUT ──┬── R1 2kΩ ── GPIO36
                └── R2 1kΩ ── GND</pre>
        <pre class="e4-pre">  PEC_STEPS_PER_WORM_ROTATION = (AXIS1_STEPS_PER_DEGREE × 360) / final_stage_ratio
  Example (EQ3): (51200 × 360) / 180 = 102400 steps/worm rotation</pre>
        ${callout('info', '<strong>Recording:</strong> guide for exactly one full worm rotation; OnStepX records the error pattern and applies the inverse correction. The buffer persists until power-off unless saved to NV.')}`,
    })}`;

  C.onewire = () => `
    <h2 class="e4-h2">OneWire / DS18B20 Sensors</h2>
    <p class="e4-desc">The OneWire bus allows multiple DS18B20 temperature sensors on a single wire. AUX7 (SPARE_RX) is the default OneWire pin. Up to 8 devices supported.</p>
    ${card({
      title: 'DS18B20 Temperature Sensors',
      desc: 'Digital temperature sensors (±0.5°C). Used for focuser temp compensation, dew-heater feedback or ambient monitoring.',
      warnings: [
        { label: 'Pull-up', text: 'A 4.7kΩ resistor is required between DATA and VCC (3.3V). Not parasitic-power compatible with this library.' },
        { label: 'Addressing', text: 'Use FEATURE_LIST_DS ON to scan serial numbers, then assign sensors via their 64-bit serial.' },
        { label: 'AUX7 Dependency', text: 'AUX7 is SPARE_RX; availability depends on the TMC UART config. With full UART TMC, this pin may not be free.' },
      ],
      wiring: [
        { e4: 'AUX7 / SPARE_RX', gpio: '—', to: 'DS18B20 DATA (with 4.7kΩ to 3.3V)' },
        { e4: '3.3V', gpio: '—', to: 'DS18B20 VCC' },
        { e4: 'GND', gpio: '—', to: 'DS18B20 GND' },
      ],
      config: [
        { dir: 'ONE_WIRE_PIN', val: 'AUX7_PIN', note: 'OneWire bus on AUX7 (SPARE_RX)' },
        { dir: 'FOCUSER_TEMPERATURE', val: 'DS18B20', note: 'Use DS18B20 for focuser temp' },
        { dir: 'FEATURE1_TEMP', val: 'DS1820', note: 'Auto-assign first DS18B20 to Dew Heater 1' },
        { dir: 'FEATURE_LIST_DS', val: 'ON', note: 'Temporarily enable to list all OneWire devices' },
      ],
      notes: callout('info', `<strong>Serial format:</strong> DS18B20 serials are 64-bit hex, e.g. ${code('0x28FF5C2C1604D6')}. Enable ${code('FEATURE_LIST_DS ON')}, upload, open the serial monitor — all detected devices are listed. Copy the serial straight into Config.h.`),
    })}`;

  C.weather = () => `
    <h2 class="e4-h2">BME280 Weather Sensor</h2>
    <p class="e4-desc">The BME280 provides ambient temperature, humidity and barometric pressure over I2C. OnStepX uses it for dew-point calculation
      and weather display on the SWS web interface. Connect to the E4's dedicated I2C header.</p>
    ${card({
      title: 'BME280 — Temperature / Humidity / Pressure',
      desc: 'Bosch BME280 3-in-1 environmental sensor. I2C address 0x76 (SDO→GND) or 0x77 (SDO→VCC). Requires Adafruit libraries.',
      warnings: [
        { label: 'I2C Address', text: 'E4 Config.h defaults to BME280_0x76. If your breakout pulls SDO to VCC, use BME280_0x77 (or BME280 for auto-detect).' },
        { label: 'Wiring', text: 'Connect to the I2C header (4-pin JST-XH). SDA/GPIO21 → SDA, SCL/GPIO22 → SCL.' },
        { label: 'Libraries', text: 'Adafruit BME280 v2.2.2 + Adafruit Sensor v1.1.7 (Arduino Library Manager).' },
        { label: 'Module Types', text: 'GY-BME280, Adafruit BME280 or generic modules all work. Avoid BMP280 (no humidity).' },
      ],
      wiring: [
        { e4: 'I2C SDA (GPIO21) — Pin 1', gpio: 'GPIO21', to: 'BME280 SDA' },
        { e4: 'I2C SCL (GPIO22) — Pin 2', gpio: 'GPIO22', to: 'BME280 SCL' },
        { e4: '3.3V — Pin 3', gpio: '—', to: 'BME280 VCC (3.3V, max 3mA)' },
        { e4: 'GND — Pin 4', gpio: '—', to: 'BME280 GND' },
      ],
      config: [
        { dir: 'WEATHER', val: 'BME280_0x76', note: 'Enable BME280 at 0x76 (SDO→GND)' },
        { dir: 'DISPLAY_WEATHER', val: 'ON', note: 'Show temp/humidity/pressure on SWS' },
        { dir: 'DISPLAY_INTERNAL_TEMPERATURE', val: 'ON', note: 'Show ESP32 internal temp' },
      ],
      notes:
        `${table(['Device', 'Address', 'I2C Pins'], [
          ['BME280 (SDO=GND)', '0x76', 'SDA=GPIO21, SCL=GPIO22'],
          ['BME280 (SDO=VCC)', '0x77', 'SDA=GPIO21, SCL=GPIO22'],
          ['DS3231 RTC', '0x68', 'SDA=GPIO21, SCL=GPIO22'],
          ['DS3231 + AT24C32 EEPROM', '0x68 + 0x57', 'SDA=GPIO21, SCL=GPIO22'],
        ])}
        ${callout('info', '<strong>Shared bus:</strong> BME280 and DS3231 use different addresses, so they coexist on the same I2C bus. The E4 has 4.7kΩ pull-ups built-in.')}`,
    })}`;

  C.rtc = () => `
    <h2 class="e4-h2">RTC — DS3231 Real-Time Clock</h2>
    <p class="e4-desc">A DS3231 RTC provides accurate date/time and preserves it across power cycles. OnStepX uses it for timekeeping, optional PPS sync and remembering mount position.</p>
    ${card({
      title: 'DS3231 RTC Module',
      desc: 'Highly accurate I2C RTC (±2ppm), battery-backed (CR2032). Connects to the E4 I2C header.',
      warnings: [
        { label: 'I2C Address', text: 'DS3231 = 0x68. No conflict with BME280 (0x76/0x77).' },
        { label: 'Library', text: 'Requires Makuna RTC Library v2.3.5.' },
        { label: 'Battery', text: 'Install a CR2032 to retain time when power is off.' },
      ],
      wiring: [
        { e4: 'I2C SDA (GPIO21)', gpio: 'GPIO21', to: 'DS3231 SDA' },
        { e4: 'I2C SCL (GPIO22)', gpio: 'GPIO22', to: 'DS3231 SCL' },
        { e4: '3.3V', gpio: '—', to: 'DS3231 VCC' },
        { e4: 'GND', gpio: '—', to: 'DS3231 GND' },
      ],
      config: [
        { dir: 'TIME_LOCATION_SOURCE', val: 'DS3231', note: 'Use DS3231 RTC as time source' },
        { dir: 'TIME_LOCATION_PPS_SENSE', val: 'OFF', note: 'Enable if using DS3231 32kHz PPS output' },
        { dir: 'MOUNT_COORDS_MEMORY', val: 'ON', note: 'Remember mount position (requires FRAM + RTC)' },
      ],
      notes: callout('info', '<strong>Shared I2C bus:</strong> both BME280 and DS3231 share the bus at different addresses. Add 4.7kΩ pull-ups if your breakout lacks them (the E4 has them built-in).'),
    })}
    ${callout('warn', `<strong>Community note — the E4 has NO onboard clock.</strong> Without a DS3231 (or GPS) you must re-enter date &amp; time every session, which is tedious via the SHC. A DS3231 fixes this; or combine both with ${code('TIME_LOCATION_SOURCE GPS')} + ${code('TIME_LOCATION_SOURCE_FALLBACK DS3231')} so the RTC covers you until the GPS gets a fix. <span style="color:rgba(255,255,255,.6)">Source: <a href="https://onstep.groups.io/g/main/message/68491" target="_blank" rel="noopener">#68491</a>, <a href="https://onstep.groups.io/g/main/message/66963" target="_blank" rel="noopener">#66963</a></span>`)}`;

  C.focuser = () => `
    <h2 class="e4-h2">Motorized Focuser</h2>
    <p class="e4-desc">OnStepX supports up to 6 focusers (Axis4–Axis9). The E4 has two dedicated focuser axes: Axis4 (E0) uses GPIO16/GPIO17,
      and Axis5 (Z) shares GPIO14/GPIO12 with Axis3 (rotator).</p>
    ${card({
      title: 'Motorized Focuser (Axis4)',
      desc: 'Axis4 uses dedicated pins (GPIO16 STEP, GPIO17 DIR) — no pin-sharing conflicts. Configured for TMC2209 by default.',
      warnings: [
        { label: 'TMC2209 Default', text: 'Default Config.h enables TMC2209 for Axis4. For a different driver, change AXIS4_DRIVER_MODEL.' },
        { label: 'Steps/Micron', text: 'CALIBRATION REQUIRED: AXIS4_STEPS_PER_MICRON must be measured for your focuser.' },
      ],
      config: [
        { dir: 'AXIS4_DRIVER_MODEL', val: 'TMC2209', note: 'Default driver for focuser' },
        { dir: 'AXIS4_STEPS_PER_MICRON', val: '0.25', note: 'Adjust to your focuser (calibrate by measuring)' },
        { dir: 'AXIS4_SLEW_RATE_BASE_DESIRED', val: '1000', note: 'Max µm/s' },
        { dir: 'AXIS4_LIMIT_MAX', val: '50', note: 'Max travel in mm' },
        { dir: 'FOCUSER_TEMPERATURE', val: 'THERMISTOR', note: 'Enable temp compensation (uses TE)' },
      ],
    })}
    ${card({
      title: 'Second Focuser (Axis5)',
      desc: 'Axis5 shares STEP/DIR pins with Axis3 (rotator). Only one can be active at a time. Same TMC2209 defaults.',
      config: [
        { dir: 'AXIS5_DRIVER_MODEL', val: 'TMC2209', note: 'Default driver' },
        { dir: 'AXIS5_STEPS_PER_MICRON', val: '0.25', note: 'Calibrate for your focuser' },
        { dir: 'AXIS5_DRIVER_IHOLD', val: '200', note: 'Hold current (mA)' },
        { dir: 'AXIS5_DRIVER_IRUN', val: '200', note: 'Run current (mA)' },
        { dir: 'AXIS5_DRIVER_DECAY', val: 'STEALTHCHOP', note: 'Quiet operation' },
      ],
      notes: callout('warn', '<strong>Pin sharing:</strong> Axis5 uses GPIO14 (STEP) and GPIO12 (DIR) — the SAME pins as Axis3 (rotator). Enable only ONE: if AXIS5_DRIVER_MODEL is set, set AXIS3_DRIVER_MODEL to OFF and vice versa.'),
    })}
    ${callout('info', `<strong>Community note — "focuser has no torque / does not move".</strong> Focuser 1 is <strong>Axis4</strong>, wired to the <strong>MOT-E (E0)</strong> terminal — not MOT-Z. If the focuser knob spins freely (no holding current), confirm the motor is on MOT-E and that ${code('AXIS4_DRIVER_MODEL')} is set while ${code('AXIS3')}/${code('AXIS5')} are OFF (they share MOT-Z pins and will conflict). <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/67968" target="_blank" rel="noopener">#67968</a></span>`)}`;

  C.rotator = () => `
    <h2 class="e4-h2">Rotator / Field De-Rotator</h2>
    <p class="e4-desc">The rotator (Axis3) controls a camera rotator or field de-rotator for Alt-Az mounts. Shares STEP/DIR pins with Axis5 (focuser 2).</p>
    ${card({
      title: 'Rotator (Axis3)',
      desc: 'Supports both rotator (field orientation) and Alt-Az de-rotation. Steps per degree is typically much lower than mount axes.',
      config: [
        { dir: 'AXIS3_DRIVER_MODEL', val: 'OFF', note: 'Set to a driver to enable the rotator' },
        { dir: 'AXIS3_STEPS_PER_DEGREE', val: '64.0', note: 'Typical for a direct-drive rotator' },
        { dir: 'AXIS3_SLEW_RATE_BASE_DESIRED', val: '1.0', note: 'deg/s' },
        { dir: 'AXIS3_REVERSE', val: 'OFF', note: 'Reverse direction if needed' },
        { dir: 'AXIS3_LIMIT_MIN', val: '0', note: 'Min angle (degrees)' },
        { dir: 'AXIS3_LIMIT_MAX', val: '360', note: 'Max angle (degrees)' },
      ],
      notes: callout('warn', '<strong>Alt-Az de-rotation:</strong> in ALTAZM mode with AXIS3_DRIVER_MODEL enabled, OnStepX automatically enables field de-rotation to keep field orientation constant. Remember Axis3 shares pins with Axis5 — only one active.'),
    })}`;

  C.wifi = () => `
    <h2 class="e4-h2">WiFi, the web page &amp; how it all connects</h2>
    <p class="e4-desc">This is the part beginners trip over most, because three different things all get called "the WiFi". The FYSETC E4 is built around an <strong>ESP32</strong>, so — unlike most OnStep main boards — it already <em>has</em> the radio on board: no add-on WiFi module is needed. What you still choose is <strong>which firmware serves the web page</strong>.</p>
    ${card({
      title: 'ESP, the E4 and the web page — what is what',
      desc: 'Three layers that are easy to confuse. Knowing which one you are dealing with tells you what to flash and where to connect.',
      notes:
        table(['Layer', 'What it is', 'On the FYSETC E4', 'On a board with no built-in WiFi'], [
          ['<strong>The radio (ESP32)</strong>', 'The actual 2.4 GHz WiFi + Bluetooth hardware.', 'Built into the E4 — already there, nothing to add.', 'Absent. The MCU (Teensy 4.x, STM32 MaxPCB…) has no radio at all.'],
          ['<strong>The web page</strong>', 'The HTML control panel you open in a browser.', 'Served by OnStepX itself via the lightweight <em>website plugin</em>, or by the full SmartWebServer running on the same ESP32.', 'Needs a <em>separate ESP</em> (ESP8266/ESP32) flashed with SmartWebServer, wired to a serial port.'],
          ['<strong>The command channel</strong>', 'How apps (SkySafari, INDI, the SHC app) talk to the mount — over IP or Bluetooth.', 'OnStepX opens a TCP/IP port on its own WiFi, and/or Bluetooth serial.', 'SmartWebServer bridges TCP/IP ↔ the controller\'s serial port.'],
        ]) +
        callout('info', '<strong>Rule of thumb:</strong> on the E4 you do <u>not</u> add any hardware for WiFi. You only decide between the lightweight <strong>website plugin</strong> (simple page, served by OnStepX) and the full <strong>SmartWebServer</strong> (richer UI). On a non-ESP board, "adding WiFi" literally means bolting on an ESP module running SmartWebServer.'),
    })}
    ${card({
      title: 'WiFi & Bluetooth setup (E4 / OnStepX)',
      desc: 'The E4 Config.h default enables WIFI_ACCESS_POINT mode — the board creates its own WiFi network for direct connection in the field, no router required.',
      config: [
        { dir: 'SERIAL_RADIO', val: 'WIFI_ACCESS_POINT', note: 'Default: board creates its own WiFi network' },
        { dir: 'SERIAL_RADIO', val: 'WIFI_STATION', note: 'Alternative: join an existing WiFi (router/hotspot)' },
        { dir: 'SERIAL_RADIO', val: 'BLUETOOTH', note: 'Alternative: Bluetooth serial (SHC app)' },
        { dir: 'AP_SSID', val: '"OnStepX"', note: 'WiFi network name in AP mode' },
        { dir: 'AP_PASSWORD', val: '"password"', note: 'CHANGE THIS — 8+ chars for WPA2' },
        { dir: 'AP_IP_ADDR', val: '{192,168,0,1}', note: 'Board address in AP mode' },
      ],
      warnings: [
        { label: 'Pick one radio mode', text: 'SERIAL_RADIO is a single choice. Do not run WIFI_ACCESS_POINT and WIFI_STATION at the same time on the E4 — it is a known cause of dropped connections.' },
      ],
    })}
    ${card({
      title: 'How to connect — IP addresses & default passwords',
      desc: 'Two ways to reach the board. AP mode is the default and the simplest in the field; Station mode is best at home where you want internet on the same device.',
      notes:
        '<h4>Access Point mode (default — the board makes its own network)</h4>' +
        table(['Setting', 'Default value', 'Notes'], [
          ['WiFi network (SSID)', code('OnStepX') + ' <span style="color:var(--e4-dim)">(SmartWebServer: ' + code('ONSTEP') + ')</span>', 'The network you join from your phone/PC.'],
          ['WiFi password', code('password'), '<strong>Change it.</strong> Must be ≥ 8 chars (WPA2), or leave empty for an open network.'],
          ['Board address', code('http://192.168.0.1'), 'Open this in a browser once joined to the network.'],
          ['mDNS name', code('http://onstepx.local') + ' / ' + code('http://onstepsws.local'), 'Works if your device supports mDNS (Bonjour).'],
          ['Web UI login (SWS only)', code('password'), 'SmartWebServer admin password (PASSWORD_DEFAULT). The lightweight plugin has no login.'],
        ]) +
        callout('info', '<strong>Steps (AP mode):</strong> 1) power the board → 2) on your phone/PC join the <strong>OnStepX</strong> WiFi with the password above → 3) browse to <strong>http://192.168.0.1</strong>. On Android, turn off mobile data first so it does not route around the access point.') +
        '<h4 style="margin-top:14px">Station mode (the board joins your existing WiFi)</h4>' +
        table(['Setting', 'Default value', 'Notes'], [
          ['Your WiFi name (SSID)', '<em>you set it</em>', 'STA_SSID — the router/hotspot to join.'],
          ['Your WiFi password', code('password'), 'STA_PASSWORD — replace with your real WiFi password.'],
          ['Board address', '<em>assigned by your router (DHCP)</em>', 'Find it in the serial monitor at boot, in your router\'s client list, or via mDNS.'],
          ['Static IP (optional)', code('192.168.0.1'), 'Only used if you disable DHCP (STA_DHCP_ENABLED = false).'],
          ['mDNS name', code('http://onstepx.local'), 'Easiest way to reach it without hunting for the IP.'],
        ]) +
        callout('warn', '<strong>Default passwords are public.</strong> "password" ships in every install — change AP_PASSWORD and (for SmartWebServer) PASSWORD_DEFAULT before putting the mount on a shared or outdoor network.'),
    })}
    ${card({
      title: 'No built-in ESP? Adding WiFi and the web page',
      desc: 'If your controller is NOT ESP-based (e.g. Teensy 4.0/4.1, STM32 MaxPCB) there is no radio on the board. There are two routes to a web page.',
      notes:
        '<p style="margin:6px 0"><strong>Route A — add a SmartWebServer ESP module (classic OnStep way):</strong></p>' +
        '<ol style="font-size:12.5px;line-height:1.85">' +
        '<li>Get a small <strong>ESP8266 or ESP32</strong> board.</li>' +
        '<li>Flash it with <a href="https://github.com/hjd1964/SmartWebServer" target="_blank" rel="noopener">SmartWebServer</a> — configure it in this tool\'s <strong>SmartWebServer</strong> mode (the project selector at the top of the page).</li>' +
        '<li>Wire the ESP\'s serial TX/RX (cross-over: TX→RX, RX→TX) to a free serial port on the controller, plus a common GND; make SERIAL_BAUD match on both sides.</li>' +
        '<li>Power up: the ESP creates the <strong>ONSTEP</strong> access point (or joins your WiFi) and bridges commands to the mount.</li>' +
        '</ol>' +
        '<p style="margin:12px 0 6px"><strong>Route B — the OnStepX website plugin (for ESP-based boards like the E4):</strong></p>' +
        '<ol style="font-size:12.5px;line-height:1.85">' +
        '<li>Download the <strong>website</strong> plugin from <a href="https://github.com/hjd1964/OnStepX-Plugins" target="_blank" rel="noopener">hjd1964/OnStepX-Plugins</a>.</li>' +
        '<li>Copy the plugin folder into your OnStepX sketch under ' + code('src/plugins/') + '.</li>' +
        '<li>Register it in ' + code('src/plugins/Plugins.config.h') + ' — add the plugin\'s ' + code('#include') + ' / ' + code('PLUGIN(...)') + ' line as shown in its README.</li>' +
        '<li>Enable WiFi in Config.h: ' + code('SERIAL_RADIO WIFI_ACCESS_POINT') + ' (the settings shown above).</li>' +
        '<li>Recompile &amp; flash. The page is then served at <strong>http://192.168.0.1</strong>.</li>' +
        '</ol>' +
        callout('info', '<strong>Online build shortcut:</strong> the <strong>Compile &amp; Flash</strong> tab can request the ' + code('website') + ' plugin automatically — you do not have to copy any files by hand when building through this configurator.') +
        callout('info', '<strong>Which to choose on the E4?</strong> The website plugin is the simplest and lightest (one ESP32 doing everything). Use the full SmartWebServer when you want its richer UI and can accept the extra load on the shared ESP32. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/69064" target="_blank" rel="noopener">#69064</a></span>'),
    })}
    ${card({
      title: 'Community notes — WiFi self-interference & range',
      desc: 'A recurring, E4-specific gotcha: its own 2.4GHz WiFi can disturb the steppers, because one ESP32 juggles motion, the web server and the radio.',
      warnings: [
        { label: 'Symptom', text: 'Motors randomly click/jerk or stutter at standstill, and motion is not smooth — often a short hitch every ~1s that lines up with the web UI refreshing the position. At higher slew speeds the axis can briefly stall.' },
      ],
      notes:
        `<p style="margin:6px 0"><strong>Fixes that work, in order of ease:</strong></p>
        <ul style="font-size:12.5px;line-height:1.75">
          <li><strong>Lower the WiFi TX power</strong> to ~2dB and use a <strong>20MHz channel width</strong> (not the default 40MHz). This alone cured the stepper clicking for several users. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/68360" target="_blank" rel="noopener">#68360</a>, <a href="https://onstep.groups.io/g/main/message/68365" target="_blank" rel="noopener">#68365</a>, <a href="https://onstep.groups.io/g/main/message/68438" target="_blank" rel="noopener">#68438</a></span></li>
          <li><strong>Twist the motor cables tightly</strong> and/or line the enclosure with foil + tape to cut EMI; the external-antenna board in a metal box is the most robust. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/68563" target="_blank" rel="noopener">#68563</a></span></li>
          <li><strong>Check for 3.3V sag:</strong> measure the 3.3V rail during a slew; if it dips, reduce motor current until brownouts stop — sag also drops the SHC/app connection ("Lost Connection / Looking for OnStep") while WiFi itself stays up. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/68555" target="_blank" rel="noopener">#68555</a>, <a href="https://onstep.groups.io/g/main/message/68559" target="_blank" rel="noopener">#68559</a></span></li>
        </ul>
        ${callout('warn', '<strong>External-antenna boards:</strong> NEVER power the board up with the antenna disconnected — running the RF stage with no antenna can damage the ESP32 RF amplifier. <span style="color:rgba(255,255,255,.6)">Source: <a href="https://onstep.groups.io/g/main/message/68361" target="_blank" rel="noopener">#68361</a></span>')}
        ${callout('info', '<strong>Range too short?</strong> Use the external-antenna E4 variant, or run the board in WIFI_STATION mode and improve your router/AP side (directional antenna or a WiFi extender). <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/68795" target="_blank" rel="noopener">#68795</a>, <a href="https://onstep.groups.io/g/main/message/68825" target="_blank" rel="noopener">#68825</a></span>')}
        ${callout('info', '<strong>No extra ESP needed for the web UI:</strong> OnStepX can serve its own page via the <a href="https://github.com/hjd1964/OnStepX-Plugins" target="_blank" rel="noopener">OnStepX website plugin</a> (AP at 192.168.0.1). The full SmartWebServer is a separate, optional upgrade. <span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/69064" target="_blank" rel="noopener">#69064</a></span>')}`,
    })}`;

  /* ---- troubleshooting ---- */
  C.troubleshooting = () => {
    const groups = [
      { category: 'Firmware & USB', color: '#f59e0b', items: [
        { problem: 'Cannot upload firmware — USB not recognized or upload fails silently', cause: 'Some E4 boards have bootloader timing issues with the auto-reset method used by Arduino IDE.', solutions: ['Add a 10µF capacitor across the reset button pins (negative to ground). This delays reset so the bootloader can catch it.', 'Use the browser-based <a href="https://graydigitalarts.com/OnStep-Web-Tools/" target="_blank" rel="noopener">OnStep Web Installer</a> — no USB timing dependency.', 'Ensure ESP32 board package v2.0.17 is installed.', 'Set "Erase All Flash Before Sketch Upload" to Enabled for first-time flashing.'] },
        { problem: 'Compilation error: "analogWriteResolution was not declared in this scope"', cause: 'Old ESP32 board package version — the analogWrite API was renamed.', solutions: ['Update to ESP32 board package v2.0.17 (recommended for E4).', 'Or downgrade to v2.0.11 if v2.0.17 causes other issues.'] },
        { problem: 'Compilation error: Multiple libraries found for "TMC2209.h"', cause: 'Conflicting TMC2209 libraries (TMC2209 by hjd1964 vs TMC2209Stepper).', solutions: ['Move/rename the TMC2209Stepper folder out of your Arduino/libraries directory.', 'Keep only the TMC2209 library by hjd1964.', 'Restart Arduino IDE after removing the conflicting library.'] },
        { problem: 'Compilation fails — missing required libraries (BME280, Sensor, Makuna RTC)', cause: 'Default E4 Config.h enables WEATHER and TIME_LOCATION_SOURCE even if you lack those devices; the libraries must still be installed.', solutions: ['Install all three: Adafruit BME280, Adafruit Sensor, Makuna RTC.', 'Or set WEATHER to OFF and TIME_LOCATION_SOURCE to NONE, then comment out the #includes in Extended.config.h.'] },
        { problem: 'First command in Serial Monitor returns "failed"', cause: 'Garbage data in the serial buffer at boot. Normal.', solutions: ['Just send the command again — the second attempt works.', 'This is bootloader noise before OnStepX initialises, not a bug.'] },
      ] },
      { category: 'WiFi & Connectivity', color: '#3b82f6', items: [
        { problem: 'WiFi drops connection or lags after a few minutes', cause: 'Known issue with some ESP32 board package versions; also dual AP+Station conflicts or interference.', solutions: ['Use ESP32 board package v2.0.11 or v2.0.17 — v2.0.15+ can break SWS connectivity.', 'Do NOT enable both AP and Station mode simultaneously.', 'Set SERIAL_B_BAUD_DEFAULT to 230400.', 'Change the WiFi channel if overlapping with other networks.', 'On Android: disable mobile data when connected to OnStep WiFi.'] },
        { problem: 'App cannot connect — "No internet connection" warning', cause: 'Android/iOS detects no internet on the AP and may route through cellular.', solutions: ['Disable mobile data (4G/5G) when connected.', 'Disable "Auto-switch to better network".', 'Set static IP 192.168.0.x / 255.255.255.0 / gw 192.168.0.1.', 'Browse to http://192.168.0.1 to confirm the server is up.'] },
        { problem: 'Web server won\'t start — 3 flashes from WiFi module', cause: 'SWS cannot talk to OnStepX over serial — often an ESP32 library version mismatch.', solutions: ['Downgrade ESP32 board package to v2.0.11 or earlier.', 'Confirm SERIAL_BAUD matches between Config.h and SWS.', 'If using swapped serial pins, force the SWS config to match.'] },
        { problem: 'Motors click/jerk at standstill or stutter during slews (often in time with the web UI)', cause: 'The E4\'s own 2.4GHz WiFi interferes with the steppers, and one ESP32 shares motion + web server + radio, so position-page updates briefly starve the motion task.', solutions: ['Lower WiFi TX power to ~2dB and use a 20MHz channel width (not 40MHz) — see the WiFi section.', 'Twist the motor cables and shield the enclosure (foil + tape); prefer the external-antenna board in a metal box.', 'Measure the 3.3V rail during a slew; if it sags, reduce motor current until brownouts stop.', 'Source: discussions #68360, #68365, #68438, #68563.'] },
      ] },
      { category: 'Stepper Motors & Drivers', color: '#ef4444', items: [
        { problem: 'Stepper motors run very hot (overheating)', cause: 'TMC2209 UART communication failure — Config.h current settings never reach the driver, which falls back to full current.', solutions: ['CHECK THE Z-MIN → TMC2209 PDN JUMPER. This is the #1 cause — it must be securely connected.', 'Reseat or replace the jumper wire.', 'Reduce IRUN/IHOLD in Config.h (start at ~30-50% of motor rated current).', 'Update to OnStepX v10.20a+ (TMC2209 GCONF register fix).'] },
        { problem: 'Driver status shows "Unknown" or "Comms Failure"', cause: 'TMC UART comms lost — wrong driver brand, missing PDN jumper or poor connection.', solutions: ['Use ONLY FYSETC TMC2209 v3.0/v3.1 or TMC2226 v1.1. Other brands have different UART pin assignments.', 'For BigTreeTech TMC2209: bridge/solder the two PDN pins on top, or jumper TX→RX, to enable UART mode.', 'Check the Z-MIN → PDN jumper is secure.', 'Verify the driver is fully seated with correct orientation.'] },
        { problem: 'Motors stall at full slew speed (often only one axis, or after going to finer microsteps)', cause: 'GOTO step rate × microsteps exceeds what the ESP32/driver/motor can deliver; too-fine GOTO microstepping or too-high target speed loses torque.', solutions: ['Use a COARSE goto microstep: AXISn_DRIVER_MICROSTEPS_GOTO 4 (or 8), with 32 for tracking. Fine goto microstepping (e.g. 4→ stalls) is a common cause.', 'Lower AXISn_SLEW_RATE_BASE_DESIRED until slews are reliable, then raise gradually.', 'Raise IRUN toward the motor rating (within thermal limits); confirm UART current actually applied (driver status page).', 'At 24V, motors slew faster but also run hotter — retune current. Source: discussions #65477, #68950.'] },
      ] },
      { category: 'ASCOM & Serial', color: '#8b5cf6', items: [
        { problem: 'ASCOM driver cannot connect — "Cannot find port"', cause: 'Windows CH340 USB-serial driver issues (common on Win11).', solutions: ['Install CH341SER-3.7 (older version known to work).', 'In ASCOM driver panel, uncheck "Enable Serial port DTR control".', 'Use the "9600-NO DTR" serial speed option.', 'Verify the COM port appears in Device Manager.'] },
      ] },
      { category: 'Mount Operation & Goto', color: '#10b981', items: [
        { problem: 'Goto fails with "Out of limit" — manual moves work', cause: 'ALIGN_AUTO_HOME or MFLIP_SKIP_HOME issues; mount tries to visit home before goto.', solutions: ['Set ALIGN_AUTO_HOME to OFF if you have no home switches.', 'Set MFLIP_SKIP_HOME to ON for gotos without visiting home.', 'Verify axis limits are correct for your mount.'] },
        { problem: 'PEC Hall sensor not detected', cause: 'Hall sensor outputs 5V but GPIO36 expects 3.3V; or incorrect wiring polarity to TE.', solutions: ['Use a voltage divider to drop 5V→3.3V, or power the sensor from 3.3V.', 'For US5881 (unipolar): flip the magnet if no detection.', 'Set PEC_SENSE to HIGH for Hall sensors.', 'The TE connector has a built-in 4.7k pull-up — correct for open-collector sensors.'] },
        { problem: 'Settings (UTC offset, park position) are not saved across a power cycle', cause: 'Values were not committed to non-volatile storage before power-off, or the NV is stale/corrupt.', solutions: ['After changing settings, give the board a few seconds before cutting power so NV writes complete.', 'Add a DS3231 RTC so time/location persist regardless.', 'If park/coords stay corrupt, re-flash with "Erase All Flash" to wipe stale NV, then reconfigure. Source: discussion #58501.'] },
      ] },
      { category: 'Imaging Clients & Alignment (ASIAIR / NINA)', color: '#22d3ee', items: [
        { problem: 'ASIAIR moves the mount in the OPPOSITE direction (N↔S / E↔W), even though the OnStepX web UI moves correctly', cause: 'Axis direction convention differs between the OnStep web UI and the ASIAIR mount profile.', solutions: ['Reverse the affected axis in Config.h: toggle AXIS1_DRIVER_REVERSE / AXIS2_DRIVER_REVERSE.', 'Confirm the correct mount type/profile is selected in ASIAIR (OnStep / "OnStep Electronics").', 'Verify N/S/E/W behave correctly from the web UI first, then re-test in ASIAIR. Source: discussion #68576.'] },
        { problem: 'ASIAIR polar alignment stops "hard" near the 60° rotation and errors "rotation stopped"', cause: 'Slew speed too high for the deceleration ASIAIR expects; the axis decelerates then halts abruptly like hitting a limit.', solutions: ['Set the slew speed to ~5°/sec — slower than that errored out for one user, faster also failed.', 'Make sure no limit is being tripped (check the limit pin / LIMIT_STRICT).', 'Use "Go Home" from ASIAIR to recover, then retry. Source: discussions #68119, #68264.'] },
        { problem: 'Meridian flip never completes — mount just slews to home and stops (or does nothing)', cause: 'Flip/home configuration; on GEM the mount visits home, and on fork the default slew logic can trigger an unwanted flip near park.', solutions: ['Verify meridian-limit and MFLIP settings; for GEM, set MFLIP_SKIP_HOME appropriately.', 'Update to a recent OnStepX — fork-mount slewing was reworked in newer releases.', 'As a workaround, manually slew several degrees past the meridian to the east, then issue the goto. Source: discussions #53807, #58501.'] },
      ] },
      { category: 'Hardware & Safety', color: '#f97316', items: [
        { problem: 'Board doesn\'t work at all — no LED, no USB, nothing', cause: 'Factory shunts still installed. The board ships with jumpers for 3D-printer mode that conflict with OnStepX.', solutions: ['REMOVE ALL factory shunts — every jumper.', 'Install ONLY the single Z-MIN (GPIO15) → TMC2209 PDN jumper wire.', 'Verify power (12-24V DC) is connected and the power LED lights.'] },
        { problem: 'Burning smell or smoke near USB / jumper pins get hot', cause: 'Jumpering pins near the USB connector while 12-24V is applied creates a direct short.', solutions: ['NEVER jumper the two pins closest to the USB connector while main power is connected.', 'Always disconnect main power before changing jumpers.', 'If you see smoke: disconnect all power immediately and inspect for damage.'] },
        { problem: '24V supply makes motors / dew heaters run hot', cause: 'The E4 dew-heater outputs are designed for 12V; 24V also raises driver heat.', solutions: ['Stick with 12V unless you have a specific reason for 24V.', 'At 24V, 12V heaters run at ~4× power (P=V²/R) and may burn out.', 'At 24V, reduce AXISn_DRIVER_IRUN to compensate.'] },
        { problem: 'Board flashes OK but won\'t boot — logs "LEDC not initialized" then nothing', cause: 'Often a "compatible" E4 clone or a marginal board; the firmware uploads and verifies but the ESP32 hangs at start-up.', solutions: ['Re-flash with "Erase All Flash" enabled, using ESP32 board package v2.0.17.', 'Confirm all factory shunts are removed and only the Z-MIN→PDN jumper is fitted.', 'If it still hangs, suspect the clone hardware — test with a genuine FYSETC E4. Source: discussion #68362.'] },
        { problem: 'External-antenna board: weak WiFi or damaged radio', cause: 'Powering the board with the u.FL antenna disconnected can damage the ESP32 RF amplifier; on-board-antenna boards simply have short range.', solutions: ['NEVER power up an external-antenna board without its antenna attached.', 'For range: use WIFI_STATION mode + a better router antenna or a WiFi extender, or the external-antenna E4 variant.', 'Source: discussions #68361, #68795.'] },
        { problem: 'One axis (often DEC) runs weak/jerky when connected to USB', cause: 'The board is being partly powered through the USB 5V line; under load that rail sags and a motor misbehaves.', solutions: ['Always run the board from the 12–24V input (5A+); USB is for data/flashing only.', 'Use a cut-down USB-2 data cable with the 5V wire LEFT DISCONNECTED, so the board is only powered by the 12V supply and is truly off when 12V is removed.', 'Connect the cable shield at one end only. Source: discussions #66142, #67866.'] },
        { problem: 'I2C device (BME280 / DS3231) wired to 5V', cause: 'The ESP32 I2C pins are 3.3V; feeding 5V logic eventually destroys the inputs and can kill the board.', solutions: ['Use the 3.3V variant of the module, or drop the 5V rail: a plain red LED in series gives ~3.1–3.4V (it drops ~1.6–1.9V) and the <1mA draw is fine.', 'Remove the power-on LED from DS3231 modules to cut idle current.', 'Source: discussions #66613, #66616.'] },
      ] },
    ];
    let html = `<h2 class="e4-h2">Troubleshooting &amp; Known Fixes</h2>
      <p class="e4-desc">Common problems and verified solutions collected from the OnStep
      <a href="https://onstep.groups.io/g/main" target="_blank" rel="noopener">Groups.io</a> community forum. Each issue lists the root cause and fixes.</p>`;
    groups.forEach((g) => {
      html += `<h3 class="e4-cat" style="border-left-color:${g.color};color:${g.color}">${g.category}</h3>`;
      g.items.forEach((it) => {
        html += `<div class="e4-card" style="border-left:3px solid ${g.color}">
          <h3 style="color:${g.color};font-size:14px">${it.problem}</h3>
          <p style="font-size:12px;color:var(--e4-dim);margin-bottom:8px"><strong>Root cause:</strong> ${it.cause}</p>
          <p style="font-size:12px;font-weight:600;margin-bottom:4px">Solutions:</p>
          <ol style="font-size:12px;line-height:1.85">${it.solutions.map((s) => `<li>${s}</li>`).join('')}</ol>
        </div>`;
      });
    });
    return html;
  };

  /* ---- firmware + community discussions ---- */
  C.firmware = () => {
    const discussions = [
      { title: 'Stepper Motor Overheating — UART Current Fix', author: 'community', tag: 'stepper', link: 'https://onstep.groups.io/g/main/message/58342', desc: 'Motors run hot on 12V. Root cause: TMC2209 UART comms failure means Config.h current never reaches the driver — it runs at full VRef current.', notes: 'Fix order: (1) check Z-MIN→PDN jumper, (2) reseat the jumper, (3) reduce IRUN to ~400mA / IHOLD ~200mA, (4) update to OnStepX v10.20a+, (5) set TMC2209 VRef pot to max (~2.5V) for UART current control.' },
      { title: 'PEC Wiring KY-003 / A3144 — Step by Step', author: 'community', tag: 'pec', link: 'https://onstep.groups.io/g/main/topic/fysetc_e4_pec_wiring/102827741', desc: 'KY-003 (A3144 latch) open-collector output with the built-in 4.7kΩ pull-up on TE. Test with the Sky Planetarium flash indicator.', notes: 'KY-003 outputs 5V — power it from 3.3V or use a divider, GPIO36 is not 5V-tolerant. Wiring: TE Pin 1 (GPIO36) ← Hall OUT, TE Pin 2 ← GND. Config: PEC_SENSE HIGH, PEC_SENSE_PIN 36.' },
      { title: 'GPS Module v2 — X-MIN Single-Wire Mode', author: 'community', tag: 'gps', link: 'https://onstep.groups.io/g/main/message/69157', desc: 'NEO-M8N on X-MIN (GPIO34) single-wire bit-banged mode. Capacitor removal required for reliable 9600-baud data.', notes: 'Remove C22 (10µF), C23 (0.1µF), C24 near the X-MIN header. GY-GPSV3 is 3.3V only. Alternative: Serial2 (GPIO16 RX, GPIO17 TX) — no cap removal but conflicts with Axis4 focuser. Config: TIME_LOCATION_SOURCE GPS, SERIAL_GPS_BAUD 9600.' },
      { title: 'Win11 CH340 USB Fix — Driver & DTR', author: 'community', tag: 'software', link: 'https://onstep.groups.io/g/main/message/62877', desc: 'CH340 USB-serial issues on Windows 11 solved by driver downgrade and DTR configuration.', notes: '(1) Uninstall current CH340 driver, (2) install CH341SER-3.7, (3) in ASCOM config select "9600-NO DTR", (4) in Device Manager → Ports → Advanced enable DisableModemHandshake.' },
      { title: 'Official FYSETC E4 Wiki — Complete Reference', author: 'Howard Dutton', tag: 'reference', link: 'https://onstep.groups.io/g/main/wiki/32747', desc: 'Complete E4 reference: pinout, safety, schematics, power recommendations (12VDC/5A), peripheral wiring and the 10µF cap upload fix.', notes: 'Remember: remove all factory shunts, install only the Z-MIN → TMC2209 PDN jumper. 12V recommended (24V dew heaters run at 4× power). Two E4 versions exist (internal ceramic vs external IPEX antenna) — both work identically.' },
    ];
    const discHtml = discussions.map((d) => `
      <details class="e4-disc">
        <summary>${d.title}</summary>
        <div class="e4-disc-meta">by <strong>${d.author}</strong> · <a href="${d.link}" target="_blank" rel="noopener">View original →</a></div>
        <p style="font-size:13px;color:var(--e4-dim);margin-bottom:6px">${d.desc}</p>
        <p style="font-size:12px">${d.notes}</p>
      </details>`).join('');
    return `
      <h2 class="e4-h2">Firmware Upload &amp; Default Config</h2>
      ${callout('info', 'Easiest option: build &amp; flash right here with this configurator\'s <a data-gototab="compile" style="color:#60a5fa;font-weight:600;cursor:pointer;text-decoration:underline">Compile &amp; Flash</a> tab — it compiles online and flashes over USB in your browser. The manual Arduino IDE method is below.')}
      ${callout('info', `<strong>Community recipe — systematic first light</strong> (the fastest way to isolate problems on a new board): <ol style="margin-top:6px;line-height:1.8"><li>Strip everything: only <strong>12V</strong> + USB connected, <strong>no steppers</strong>, all factory shunts off, Z-MIN→PDN jumper on.</li><li>Build &amp; flash a clean firmware from this configurator's <a data-gototab="compile" style="color:#60a5fa;font-weight:600;cursor:pointer;text-decoration:underline">Compile &amp; Flash</a> tab (rules out Arduino/library issues).</li><li>Power off, connect <strong>one</strong> motor to <strong>MOT-X (RA)</strong>; set the PSU current limit to ≥3A.</li><li>Power on, connect to the "OnStepX" WiFi → 192.168.0.1, and test that one axis before adding the rest.</li></ol><span style="color:var(--e4-dim)">Source: <a href="https://onstep.groups.io/g/main/message/66848" target="_blank" rel="noopener">#66848</a></span>`)}
      <div class="e4-card"><h3>1. Install Arduino IDE &amp; ESP32 Platform</h3>
        <ul style="font-size:13px;line-height:1.9">
          <li>Install <a href="https://www.arduino.cc/en/software" target="_blank" rel="noopener">Arduino IDE</a></li>
          <li>Add board URL ${code('https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json')} in File → Preferences</li>
          <li>Install ESP32 via Boards Manager (v2.0.17 recommended)</li>
        </ul></div>
      <div class="e4-card"><h3>2. Required Libraries</h3>
        <ul style="font-size:13px;line-height:1.9">
          <li><a href="https://github.com/Makuna/Rtc/releases" target="_blank" rel="noopener">Makuna RTC</a> v2.3.5</li>
          <li><a href="https://github.com/adafruit/Adafruit_BME280_Library/releases" target="_blank" rel="noopener">Adafruit BME280</a> v2.2.2</li>
          <li><a href="https://github.com/adafruit/Adafruit_Sensor/releases" target="_blank" rel="noopener">Adafruit Sensor</a> v1.1.7</li>
          <li><a href="https://github.com/hjd1964/TMC2209" target="_blank" rel="noopener">TMC2209</a> by hjd1964</li>
        </ul></div>
      <div class="e4-card"><h3>3. Source &amp; Preparation</h3>
        <ul style="font-size:13px;line-height:1.9">
          <li>Download from <a href="https://github.com/hjd1964/OnStepX/tree/E4" target="_blank" rel="noopener">OnStepX (E4 branch)</a></li>
          <li>Extract to a folder named ${code('OnStepX')}, open ${code('OnStepX.ino')}</li>
          <li>Remove ALL factory shunts; connect Z-MIN → TMC PDN jumper</li>
          <li>Do NOT attach stepper motors while flashing</li>
        </ul></div>
      <div class="e4-card"><h3>4. Arduino IDE Settings</h3>
        ${table(['Setting', 'Value'], [['Board', code('ESP32 Dev Module')], ['CPU Frequency', code('240 MHz')], ['Partition Scheme', code('Huge App')], ['Erase All Flash Before Upload', code('Enabled') + ' (first time only)'], ['Port', 'USB serial of E4 board']])}
      </div>
      <div class="e4-card"><h3>5. Default Config.h Values</h3>
        ${table(['Directive', 'Default', 'Purpose'], [
          [code('PINMAP'), code('FYSETC_E4'), 'Selects E4 pin layout'],
          [code('SERIAL_A_BAUD_DEFAULT'), code('9600'), 'USB serial baud rate'],
          [code('SERIAL_RADIO'), code('WIFI_ACCESS_POINT'), 'Built-in WiFi AP mode'],
          [code('AXIS1_DRIVER_MODEL'), code('TMC2209'), 'Axis1 stepper driver'],
          [code('AXIS2_DRIVER_MODEL'), code('TMC2209'), 'Axis2 stepper driver'],
          [code('AXIS1_STEPS_PER_DEGREE'), code('12800'), 'Steps/° for Axis1'],
          [code('MOUNT_TYPE'), code('GEM'), 'Mount type (change to ALTAZM as needed)'],
          [code('TIME_LOCATION_SOURCE'), code('DS3231'), 'RTC for timekeeping'],
          [code('FEATURE1_PURPOSE'), code('DEW_HEATER'), 'GPIO2 = Dew Heater 1'],
          [code('FEATURE2_PURPOSE'), code('DEW_HEATER'), 'GPIO4 = Dew Heater 2'],
        ])}
      </div>
      <h3 class="e4-cat" style="border-left-color:#a3a3a3;color:#a3a3a3">Community Discussions</h3>
      <p class="e4-desc">Key technical findings extracted from the OnStep Groups.io forum so you don't need to click through.</p>
      ${discHtml}`;
  };

  /* ---- hardware guide ---- */
  C.compatible = () => {
    const cat = (color, title) => `<h3 class="e4-cat" style="border-left-color:${color};color:${color}">${title}</h3>`;
    return `
      <h2 class="e4-h2">Compatible Hardware Guide</h2>
      <p class="e4-desc">Quick-reference shopping list of sensors, actuators and components compatible with the FYSETC E4. Use the
        configurator's own <strong>Calculator</strong> and <strong>Output</strong> tabs to turn your choices into a ready-to-use Config.h.</p>

      ${cat('#ef4444', '🔌 Stepper Motors')}
      ${table(['Use', 'Model', 'Specs', 'Wiring'], [
        ['Mount RA/Azm', '<strong>NEMA17</strong> (17HS19-2004S1)', '200 steps/rev, 1.0–1.7A', 'MOT-X screw terminals'],
        ['Mount Dec/Alt', '<strong>NEMA17</strong>', '200 steps/rev, 1.0–1.7A', 'MOT-Y screw terminals'],
        ['Focuser 1', '<strong>NEMA8/11</strong> (8HS15-0604S)', '200 steps/rev, 0.4–0.8A', 'MOT-Z 4-pin header'],
        ['Rotator', '<strong>28BYJ-48</strong> (mod to bipolar) / NEMA11', '64 steps/rev, 0.1A', 'Axis3 via MOT-Z header'],
      ])}
      ${callout('info', `<strong>💡 Motor VRef:</strong> set all TMC2209 VRef pots to max (~2.5V). Current is set via UART — use ${code('AXISn_DRIVER_IRUN')} / ${code('_IHOLD')} in Config.h, not the pot.`)}

      ${cat('#3b82f6', '🛤️ Home & Limit Switches')}
      ${table(['Type', 'Model', 'Output', 'Notes'], [
        ['Mechanical', '<strong>SS-5GL2</strong> / D2F-L', 'NO to GND', 'Cheapest. Add RC debounce (10kΩ + 0.1µF).'],
        ['Hall (bipolar)', '<strong>A3144</strong> / KY-003', 'Open-collector, LOW on magnet', 'Both poles trigger. Most reliable for PEC.'],
        ['Hall (unipolar)', '<strong>US5881</strong>', 'Open-collector, LOW on south pole', 'Only one pole triggers — flip magnet if no detection.'],
        ['Hall (3.3V)', '<strong>US1881</strong> / OH090U', 'Open-collector', 'Works at 3.3V — no divider needed.'],
      ])}

      ${cat('#8b5cf6', '🧲 PEC Index Sensors')}
      ${table(['Sensor', 'Type', 'Power', 'Level Shift'], [
        ['<strong>A3144</strong>', 'Bipolar Hall latch', '4.5–24V (3.3V OK)', 'Not needed at 3.3V'],
        ['<strong>KY-003</strong>', 'A3144 on PCB', '3.3–5V', 'Divider (2kΩ+1kΩ) if 5V'],
        ['<strong>US5881</strong>', 'Unipolar Hall', '3.5–24V', 'Required (2kΩ+1kΩ)'],
        ['<strong>US1881</strong>', 'Bipolar Hall latch', '3.3–24V', 'Not needed'],
      ])}
      ${callout('warn', '<strong>⚠ Magnet:</strong> use a small neodymium magnet (3×2mm disc) epoxied to the worm wheel. For unipolar (US5881) only the south pole triggers — mark the pole.')}

      ${cat('#10b981', '🛰️ GPS Modules')}
      ${table(['Module', 'Chip', 'Voltage', 'Baud', 'PPS', 'Notes'], [
        ['<strong>GY-GPSV3</strong>', 'NEO-8M', '3.3V', '9600', 'Yes', 'Most recommended. Works via X-MIN or Serial2.'],
        ['<strong>NEO-6M</strong>', 'NEO-6M', '3.3V', '9600', 'No', 'Older, slower cold start (up to 30 min).'],
        ['<strong>NEO-M8N</strong>', 'NEO-M8N', '3.3V', '9600', 'Yes', 'Multi-GNSS, better sensitivity.'],
        ['<strong>BN-880</strong>', 'NEO-M8N', '3.3–5V', '9600', 'Yes', 'Compass + GPS, external SMA antenna.'],
      ])}
      ${callout('warn', '<strong>⚠ Cap removal:</strong> for single-wire GPS on X-MIN remove C22/C23/C24 near the header. Not needed with Serial2 (GPIO16/17).')}

      ${cat('#f59e0b', '🌡️ Temperature Sensors')}
      ${table(['Sensor', 'Interface', 'E4 Pin', 'Config'], [
        ['<strong>NTC 100kΩ</strong> (3950β)', 'Analog (divider)', 'TE (GPIO36) / TB (GPIO39)', code('FOCUSER_TEMPERATURE THERMISTOR')],
        ['<strong>DS18B20</strong> (probe)', 'OneWire', 'AUX7 + 4.7kΩ pull-up', code('FOCUSER_TEMPERATURE DS18B20')],
        ['<strong>BME280</strong>', 'I2C', 'I2C header (21/22)', code('WEATHER BME280_0x76')],
      ])}

      ${cat('#f97316', '💧 Dew Heater Components')}
      ${table(['Item', 'Part', 'Notes'], [
        ['Heater tape', 'Kendrick / generic 12V silicone strip', '5–15W per heater; match to OTA diameter.'],
        ['MOSFET', '<strong>IRLZ44N</strong> (TO-220)', 'Logic-level — fully ON at 3.3V gate. NOT IRFZ44N (needs 10V).'],
        ['Gate resistor', '1kΩ 1/4W', 'In series GPIO → gate.'],
        ['Pull-down', '10kΩ 1/4W', 'Gate→GND. Critical for GPIO2 (must be LOW at boot).'],
        ['Fuse', '<strong>3A ATO</strong> blade', 'Between 12V and heater tape. Fire safety — mandatory.'],
      ])}

      ${cat('#ec4899', '📷 Intervalometer / DSLR')}
      ${table(['Component', 'Part', 'Purpose'], [
        ['Optocoupler', '<strong>PC817</strong> / 4N35', 'Galvanic isolation — mandatory, never connect GPIO directly.'],
        ['Current limit R', '1kΩ 1/4W', 'In series with optocoupler LED from GPIO13.'],
        ['TRS jack', '2.5mm or 3.5mm stereo', 'Camera connection. 2.5mm for Canon.'],
      ])}

      ${cat('#a78bfa', '⏰ RTC & Timekeeping')}
      ${table(['Module', 'Chip', 'Address', 'Notes'], [
        ['<strong>ZS-042</strong>', 'DS3231', '0x68', 'Most common, ~$2, ±2ppm. CR2032 backup.'],
        ['<strong>DS3231 + AT24C32</strong>', 'DS3231 + EEPROM', '0x68 + 0x57', 'Includes 32KB EEPROM.'],
      ])}
      ${callout('warn', '<strong>⚠ 3.3V I2C:</strong> the E4 I2C header provides 5V but the ESP32 pins are 3.3V. Use 3.3V-rated modules; remove module pull-ups (ESP32 has built-in 4.7kΩ).')}

      ${cat('#94a3b8', '⚡ USB / Serial / Power')}
      ${table(['Item', 'Part', 'Notes'], [
        ['USB bridge', '<strong>CH340C</strong> (built-in)', 'Win10/11 may need CH341SER-3.7. Use 9600-NO DTR in ASCOM.'],
        ['Power supply', '12VDC, 5A (+ center)', '5A min with peripherals. 24V dew heaters draw 4× power.'],
        ['Upload-fix cap', '10µF 16V electrolytic', 'Across EN and GND on the ESP32 module if uploads fail.'],
        ['Jumper wire', 'F-F Dupont 10cm', 'Z-MIN → TMC2209 PDN. Required for UART.'],
      ])}`;
  };

  /* ----------------------------------------------------------------- render */
  function setSection(id) {
    const root = document.getElementById('tab-e4guide');
    if (!root) return;
    root.querySelectorAll('.e4-section').forEach((s) => s.classList.toggle('active', s.dataset.section === id));
    root.querySelectorAll('.e4-navcard').forEach((n) => n.classList.toggle('active', n.dataset.section === id));
    const panel = root.querySelector('.e4-content');
    if (panel) panel.scrollIntoView({ block: 'nearest' });
  }

  function renderBoardDetail(root, el) {
    const wrap = root.querySelector('.e4-board-detail');
    if (!wrap) return;
    if (!el) { wrap.style.display = 'none'; return; }
    const c = TYPE_COLORS[el.type];
    const sec = SECTIONS.find((s) => s.id === el.section);
    wrap.style.borderTopColor = c.active;
    wrap.innerHTML = `
      <div class="e4-board-detail-head">
        <h4 style="color:${c.active}">${el.label.replace('|', ' ')}</h4>
        <span class="e4-board-badge" style="background:${c.bg};border-color:${c.border};color:${c.active}">${c.badge}</span>
        <span style="font-size:12px;color:var(--e4-dim)">GPIO: <strong>${el.gpio}</strong></span>
      </div>
      <p><strong>Function:</strong> ${el.fn}</p>
      <p><strong>Description:</strong> ${el.desc}</p>
      <p><strong>Connections:</strong> ${el.conn}</p>
      ${sec ? `<button type="button" class="e4-board-link" data-goto="${el.section}">View in ${sec.label} →</button>` : ''}`;
    wrap.style.display = 'block';
  }

  function wireBoard(root) {
    const svg = root.querySelector('svg.e4-board-svg');
    const hint = root.querySelector('.e4-board-hint');
    if (!svg) return;
    let selected = null;
    svg.querySelectorAll('g[data-id]').forEach((g) => {
      const el = findNode(g.dataset.id);
      const rect = g.querySelector('rect');
      const c = TYPE_COLORS[el.type];
      g.addEventListener('mouseenter', () => {
        if (selected !== el.id) { rect.setAttribute('fill', c.bg === '#151515' ? '#1f1f1f' : c.bg); rect.setAttribute('stroke', c.active); }
        if (hint) { hint.textContent = el.label.replace('|', ' ') + ' — ' + el.gpio; hint.style.display = selected ? 'none' : 'block'; }
      });
      g.addEventListener('mouseleave', () => {
        if (selected !== el.id) { rect.setAttribute('stroke', c.border); rect.setAttribute('stroke-width', '1'); }
        if (hint) hint.style.display = 'none';
      });
      g.addEventListener('click', () => {
        // reset previous
        svg.querySelectorAll('g[data-id] rect').forEach((r) => {
          const e = findNode(r.parentNode.dataset.id);
          r.setAttribute('stroke', TYPE_COLORS[e.type].border); r.setAttribute('stroke-width', '1');
        });
        if (selected === el.id) { selected = null; renderBoardDetail(root, null); return; }
        selected = el.id;
        rect.setAttribute('stroke', c.active); rect.setAttribute('stroke-width', '2');
        renderBoardDetail(root, el);
      });
    });
    // delegate "View in section" + "go to configurator tab" buttons
    root.addEventListener('click', (ev) => {
      const goto = ev.target.closest('[data-goto]');
      if (goto) { setSection(goto.getAttribute('data-goto')); return; }
      const tabBtn = ev.target.closest('[data-gototab]');
      if (tabBtn && typeof window.showTab === 'function') { window.showTab(tabBtn.getAttribute('data-gototab')); }
    });
  }

  function render() {
    const root = document.getElementById('tab-e4guide');
    if (!root) return;
    if (root.querySelector('.e4-navcard')) return; // already rendered

    const navCards = SECTIONS.map((s) =>
      `<div class="e4-navcard" data-section="${s.id}" role="button" tabindex="0" style="--card-accent:${s.color}">
        <span class="e4-navcard-icon">${s.icon}</span>
        <span class="e4-navcard-label">${s.label}</span>
        <span class="e4-navcard-desc">${s.desc}</span>
      </div>`).join('');

    const sections = SECTIONS.map((s) =>
      `<div class="e4-section${s.id === 'pinmap' ? ' active' : ''}" data-section="${s.id}">${(C[s.id] || (() => ''))()}</div>`).join('');

    root.innerHTML = `
      <div style="max-width:1100px;margin:0 auto">
        <input type="text" class="e4-search" placeholder="Search features, pins, directives…" aria-label="Search the E4 guide">
        <div class="e4-navcards">${navCards}</div>
        <div class="e4-content">${sections}</div>
        <p style="font-size:11px;color:var(--e4-dim);margin-top:18px;text-align:center">
          Data from <a href="https://github.com/hjd1964/OnStepX/tree/E4" target="_blank" rel="noopener">OnStepX E4 branch</a> ·
          <a href="https://onstep.groups.io/g/main" target="_blank" rel="noopener">OnStep Groups.io</a> ·
          <a href="https://wiki.fysetc.com/docs/E4" target="_blank" rel="noopener">FYSETC E4 Wiki</a> · GPLv3</p>
      </div>`;

    // nav clicks
    root.querySelectorAll('.e4-navcard').forEach((n) => {
      n.addEventListener('click', () => setSection(n.dataset.section));
      n.addEventListener('keydown', (e) => { if (e.key === 'Enter') setSection(n.dataset.section); });
    });

    // search filters nav cards + jumps to first match
    const search = root.querySelector('.e4-search');
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      let first = null;
      SECTIONS.forEach((s) => {
        const hay = (s.label + ' ' + s.desc + ' ' + (SEARCH[s.id] || '')).toLowerCase();
        const match = !q || hay.indexOf(q) >= 0;
        const cardEl = root.querySelector(`.e4-navcard[data-section="${s.id}"]`);
        if (cardEl) cardEl.style.display = match ? '' : 'none';
        if (match && !first) first = s.id;
      });
      if (q && first) setSection(first);
    });

    wireBoard(root);
  }

  window.renderE4Guide = render;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { try { render(); } catch (e) { console.error('E4 guide render failed:', e); } });
  } else {
    try { render(); } catch (e) { console.error('E4 guide render failed:', e); }
  }
})();
