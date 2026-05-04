The online configurator can be used from https://christm45.github.io/OnStepX-Configurator/ .

Get firmware ready to flash onto your OnStepX controller — without installing Arduino IDE, PlatformIO, or any C++ toolchain on your computer.

Everything happens inside your browser tab and uses free cloud services (GitHub Pages, GitHub Actions, Cloudflare Workers). 
The project source is always the latest - hjd1964/OnStepX — we never bundle a stale copy.

Before you flash anything: make sure your wiring and PINMAP selection match the board you're flashing. A mismatched pinmap can drive step/enable pins that are tied to other things and damage stepper drivers, limit switches, or the MCU. When in doubt, flash once with no motors connected, watch the serial output, and only then plug in the steppers.
Contents
How it works (behind the curtain)
OnStepX vs SmartHandController — the mode switch
Quick start — board to firmware in 8 steps
What each tab does
The settings you actually have to change
Picking an OnStepX version
The preflight checklist
OnStepX plugins — how the bundling works
Board-by-board USB preparation
Browser requirements
Privacy & what gets logged
Troubleshooting
FAQ
1 · How it works (behind the curtain)
A normal OnStepX workflow looks like: install Arduino IDE or PlatformIO → clone the source → edit Config.h → wait for the toolchain to download → build → flash. That's a lot of setup just to try the firmware once. This site replaces every step with a click.

Here's what actually happens when you click Compile Firmware:

  +--------------------------------------+
  |  1. YOUR BROWSER                     |
  |     You pick mount/motor/driver      |
  |     settings. Your browser builds    |
  |     a Config.h file locally. No      |
  |     data is sent until you click     |
  |     Compile.                         |
  +-----------------+--------------------+
                    |  POST /compile
                    |  { config.h, board, onstepx_ref }
                    v
  +--------------------------------------+
  |  2. CLOUDFLARE WORKER (a "bridge")   |
  |     Tiny serverless endpoint at      |
  |     onstepx-build-bridge.*.workers.dev
  |     Validates your inputs, adds a    |
  |     GitHub token (which your browser |
  |     shouldn't see), and asks GitHub  |
  |     Actions to start a build.        |
  +-----------------+--------------------+
                    |  workflow_dispatch
                    v
  +--------------------------------------+
  |  3. GITHUB ACTIONS (the build farm)  |
  |     In christm45/onstepx-build-      |
  |     service, a fresh Ubuntu VM:
  |       a) clones hjd1964/OnStepX at   |
  |          your chosen branch/tag/SHA  |
  |       b) overwrites its Config.h     |
  |          with the one you sent       |
  |       c) runs PlatformIO to compile  |
  |          for your chosen MCU         |
  |       d) packages firmware as a zip  |
  |          and publishes it as a       |
  |          "workflow artifact"         |
  +-----------------+--------------------+
                    |  firmware.zip
                    |  (bootloader, partitions, firmware.bin, merged.bin…)
                    v
  +--------------------------------------+
  |  4. WORKER FETCHES THE ARTIFACT      |
  |     and streams it back to your      |
  |     browser.                         |
  +-----------------+--------------------+
                    |
                    v
  +--------------------------------------+
  |  5. YOUR BROWSER                     |
  |     Unzips the archive in memory,    |
  |     talks to your board over USB     |
  |     (Web Serial / WebUSB), and       |
  |     writes the firmware. The board   |
  |     reboots into OnStepX.            |
  +--------------------------------------+
    
Piece by piece:

The configurator (this page)
Runs entirely in your browser. The HTML/CSS/JavaScript was served by GitHub Pages when you loaded the tab, and from then on everything is local — even the Config.h generation and the browser-based flasher. The page never phones home just for you being here.

A few UI niceties worth knowing:

The little ? icons next to field names open a one-sentence explanation for that specific setting, plus (for most fields) a "Learn more →" link that jumps to the relevant help section. Hover to preview, click to pin, Esc to dismiss.
"Apply board defaults" (under the PINMAP field) autofills driver model, microsteps, run current, and mount type with the known-good values for whichever PINMAP you picked — MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3, etc. A one-click starting point you then tweak.
PINMAP → MCU target auto-resolves. Pick MaxPCB4 in the Controller section and the Compile & Flash tab's Target MCU switches to teensy41 for you. Changing it manually to something incompatible fires a preflight warning before you spend a build minute.
Form state is saved to local storage on every change, so a refresh or closed tab doesn't lose your work. The header ↻ Reset to Defaults clears it.
The Cloudflare Worker (the "bridge")
A ~200-line JavaScript function that Cloudflare runs on-demand when your browser pings it. Its only job is to accept your /compile request, attach a private GitHub API token (which, critically, your browser shouldn't see), and tell GitHub Actions to start a build. It also proxies the resulting firmware zip back to you. The Worker doesn't store anything — each request is independent.

Why it's needed: GitHub Pages is static-only (it serves files, it can't call protected APIs). A tiny serverless function is the simplest way to bridge a static site to an authenticated API without standing up a server you have to maintain.

GitHub Actions + the build-service repo
The repo christm45/onstepx-build-service holds a platformio.ini (build recipe) and a workflow file (.github/workflows/build.yml). When the Worker triggers the workflow, GitHub spins up a fresh Ubuntu virtual machine, runs the steps, then throws the VM away. The steps are:

Check out this repo's build recipe
Install PlatformIO (Python package)
git clone https://github.com/hjd1964/OnStepX.git, then git checkout at the branch/tag/commit you typed in the OnStepX source field (default: latest main)
Write your generated Config.h over OnStepX's default
Run pio run -e esp32 (or one of teensy32 / teensy40 / teensy41 / blackpill_f411 / f446_fysetc_s6 / skr_pro_f407, plus the SHC and SWS variants). PlatformIO downloads the MCU toolchain and any external libraries OnStepX needs, then compiles.
Bundle the outputs (firmware binary, bootloader, partitions, and — for ESP32 — a pre-merged single-file image) into firmware-<uuid>.zip, published as a 1-day-retention workflow artifact
The browser flasher
Once your browser has the firmware zip, it unzips in memory and uses one of the Web APIs modern Chromium browsers expose to talk to USB devices:

Web Serial for ESP32 — same protocol as esptool.py, using the esptool-js library loaded from a CDN on first use.
WebUSB + DFU for STM32 BlackPill — we wrote a small DFU client that speaks the same protocol as dfu-util.
WebHID for Teensy 3.2 / 4.0 / 4.1 — we speak the HalfKay bootloader protocol directly from the browser (same wire format as teensy_loader_cli: 1024-byte blocks, 64-byte header with a little-endian flash offset, final 0xFFFFFF report to reboot into the app). You still have to press the white program button to put the Teensy into bootloader mode — HalfKay is only reachable after that. On browsers without WebHID we fall back to downloading firmware.hex for the PJRC Teensy Loader app.
Under the hood: the Teensy WebHID flasher
Of the three browser flashers, the Teensy one is the most custom. PJRC's official tool is teensy_loader_cli, a small C program that talks to the Teensy's HalfKay bootloader over USB HID using libusb/hidapi. The Teensy has no serial bootloader and no DFU interface — HalfKay is the only path in. To do the same thing from a browser we need an API that can send HID output reports to an arbitrary vendor device, and that's exactly what WebHID gives us (Chrome/Edge only; no Firefox or Safari support yet).

Every Teensy 3.2 / 4.0 / 4.1 sits in ROM as HalfKay whenever you press the white program button. In that mode it appears as a USB HID device with vendor/product IDs 0x16C0 / 0x0478 — same VID:PID across models. The browser's device picker filters on those IDs, so only a Teensy in bootloader mode shows up in the dialog; the running OnStepX sketch, with its own USB identity, is ignored. That also means the dialog is empty until you press the program button — Chrome polls for new devices, so the Teensy pops in as soon as HalfKay activates.

Once the device is open, flashing is a loop of 1088-byte HID output reports with this layout:

 byte  0   1   2   3 ............. 63  64 ........................ 1087
      +---+---+---+------ zeros ------+------ 1024 bytes of data -------+
      |   flash offset  |  padding    |    .hex payload for this page   |
      |  little-endian  |  (61 bytes) |                                 |
      |    3 bytes      |             |                                 |
      +---+---+---+-----+-------------+---------------------------------+
    
Block 0 is always sent, even if blank, because that's the trigger that erases the whole chip; subsequent all-0xFF pages are skipped to speed things up. The first five blocks get a long 45-second timeout because the chip erase takes a few seconds before the first write is acknowledged; later blocks complete in milliseconds. After the last data block we send one more 1088-byte report with the offset bytes set to 0xFF 0xFF 0xFF — HalfKay reads that as "reboot into the app." The bootloader often resets mid-ACK, so a missing reply on that final packet is expected, not an error.

Parsing the firmware is its own step. On Teensy 4.x, PlatformIO emits an Intel HEX file whose data records carry absolute addresses starting at 0x60000000 (the IMXRT1062 flash base); on Teensy 3.2 the addresses start at 0. The parser auto-detects which by looking at the first data record, handles extended-linear-address prefixes (record type 0x04), verifies each line's checksum, and collapses everything into a flat Uint8Array indexed from offset 0. Unused gaps are filled with 0xFF so they look like erased flash. The code_size picked from the env name (2 MB for 4.0, 8 MB for 4.1, 256 KB for 3.2) bounds the write and catches "wrong firmware for this board" early.

Everything above lives in flash/teensy.js — roughly 300 lines, no external dependencies beyond the ES-module imports this page uses everywhere. If the browser doesn't expose WebHID, or you dismiss the device picker, or any step throws mid-flash, we fall back to the original path: save firmware.hex and show the Teensy Loader instructions. HalfKay is in ROM and cannot be overwritten, so a partial flash never bricks the board — worst case you click Flash again and retry.

Nothing runs on anyone's private server. All three free-tier services are transparent: you can inspect the configurator source (GitHub Pages serves it), the Worker source, the build workflow, the PlatformIO config. If the whole thing disappeared tomorrow, you could clone all three repos and deploy your own in under an hour — see SETUP-COMPILE-SERVICE.md in the configurator repo.
1b · OnStepX vs SmartHandController — the mode switch
The big toggle at the top of the page picks which firmware you're building:

OnStepX (Mount controller firmware) — the brain of the telescope. Runs on the controller board attached to the mount, drives the stepper drivers, talks LX200 to your client app (SkySafari, KStars, etc.). This is the default and what most people want.
SmartHandController (Hand pendant firmware) — a separate small device with an OLED screen and physical buttons that you hold while observing. Talks to the OnStep mount over a short cable (ST4 port), serial, WiFi, or Bluetooth. Lets you slew, pick targets, and adjust settings without a phone or laptop.
SmartWebServer (Web UI & WiFi bridge firmware) — a third small device (usually an ESP32 or ESP8266) that hosts the OnStep web interface and bridges a WiFi or Ethernet connection into the mount. Lets you point a phone / tablet / laptop browser at the telescope and control it without cables, and exposes the mount to ASCOM / INDI clients over the network. Optional axis encoders plug into the SWS board for real-pointing feedback; optional BLE gamepad works on ESP32.
The three firmwares run on separate MCUs — you don't combine them onto one chip. A typical full setup is: one board (ESP32 / Teensy / STM32) running OnStepX inside the mount, plus one ESP32 running SWS for the web UI, plus (optionally) one ESP32 running SHC inside a hand pendant. They all talk to each other at runtime over the links you configure (ST4 cable, serial, WiFi, BLE).

When you flip the mode switch:

The configurator tabs change — you see Calculator/Axis/Mount in OnStepX mode, or Hand Controller / Communication / Sensors in SHC mode.
Your form values are preserved per mode: switching from OnStepX to SHC and back doesn't lose your work in either.
The Compile & Flash tab's MCU target list changes: SHC supports ESP32 / Teensy 4.0 / Teensy 3.2; OnStepX adds Teensy 4.1, STM32 BlackPill F411, and STM32F407 / BTT SKR PRO.
The "Source ref" field resolves against the right upstream repo (hjd1964/OnStepX or hjd1964/SmartHandController).
The Output tab shows the Config.h for the currently-selected firmware.
Building both? Configure OnStepX in OnStepX mode → Compile & Flash to your mount controller board. Then flip to SHC mode, configure the hand pendant, Compile & Flash to your SHC board. Two separate flashes, one site.
2 · Quick start — board to firmware in 8 steps
Open the Controller tab. Set PINMAP to whatever board you have — MaxPCB4 (covers MaxPCB4w/MaxPCB4e variants), MaxESP3/MaxESP4 (covers MaxESP4i + FRAM), MaxSTM3/MaxSTM3I, FYSETC_E4, FYSETC_S6 (V1.2 / V2.0 — STM32F446, 6-axis), CNC3 (WeMos R32 — deprecated), MiniPCB (v1 embed-in-mount or v2 stand-alone case), or BTT_SKR_PRO. Click Apply board defaults right below the PINMAP dropdown to autofill driver model, microsteps, and run current for that board.
Open the Calculator tab. Fill in your mount's worm teeth, motor steps/rev, and gear ratio for each axis — the steps/deg values used by Axis1/Axis2 are calculated from this.
Open Axis1 and Axis2. Set AXIS_DRIVER_MODEL to whatever you're using (TMC2209, TMC5160, DRV8825, …) and pick the microstepping. Review the pre-filled steps/deg values.
Open Mount. Pick MOUNT_TYPE (GEM, FORK, or ALTAZM).
Optional: extras on Rotator, Focuser, Auxiliary.
Click the sticky Generate & View Config.h button at the bottom. Skim the output; the #define PINMAP, driver, and mount lines should look right.
Open Compile & Flash. The MCU target auto-follows your PINMAP. The preflight checklist tells you whether the build will even try. Click Compile Firmware. Wait 1–3 min.
Put the board in bootloader mode (see below), plug in USB, click Flash to Board, pick the device in the browser prompt. Done.
First build is slower (~2–3 min) because GitHub Actions has to download the PlatformIO toolchain and OnStepX's external libraries. Subsequent builds of the same board are ~30–60 s thanks to caching.
3 · What each tab does
Calculator — enter physical mount/motor numbers (worm teeth, motor full steps, gear ratio, belt ratio). It computes steps/deg, PEC period, and maximum slew rate for each axis. Copy results into the Axis tabs.
Controller — board-level settings: PINMAP, serial/WiFi, weather/IMU sensors, GPS, display.
Axis1 / Axis2 — per-axis driver config: steps/deg, microsteps, driver model, motor current (for TMC drivers), soft limits, reverse direction, tracking compensation.
Mount — mount type (GEM / FORK / ALTAZM), guide rates, parking, meridian flip behavior, PEC.
Rotator / Focuser — enable and configure up to one camera rotator and up to four focusers.
Auxiliary — feature toggles (dew heaters, aux switches, TMC stall guard, …).
Output — the generated Config.h. Copy, download, or load an existing one to back-fill the form. The ↻ Reset to Defaults button in the header clears every tab's saved state and reloads.
Compile & Flash — compile online and flash over USB.
? Help — this page.
4 · The settings you actually have to change
Most defaults are fine. These are the ones you almost always have to set:

Shortcut: once you've picked your PINMAP, click the Apply board defaults button right under the dropdown. For MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3, and FYSETC_E4, that fills in the driver model, microsteps, run current, and mount type with known-good values — so you only need to touch the steps/deg (from the Calculator) and the values specific to your scope.
Required (compile will fail without these)
PINMAP (Controller) — pick the board you have. Wrong value = firmware drives wrong pins.
MOUNT_TYPE (Mount) — GEM, FORK, or ALTAZM.
AXIS1_STEPS_PER_DEGREE and AXIS2_STEPS_PER_DEGREE (Axis1/Axis2) — from the Calculator.
AXIS1_DRIVER_MODEL / AXIS2_DRIVER_MODEL — TMC2209, TMC5160, DRV8825, A4988, LV8729, etc.
AXIS1_DRIVER_MICROSTEPS / AXIS2_DRIVER_MICROSTEPS — 16, 32, 64, 128, 256. Higher = smoother tracking but more step rate on slews.
Very common adjustments
AXIS*_DRIVER_REVERSE — flip if the axis moves the wrong way.
AXIS*_LIMIT_MIN / _MAX — soft limits in degrees.
AXIS*_DRIVER_IRUN / _IHOLD — motor current (mA) for TMC drivers. Start low, raise only as needed. Too high = hot driver, skipped steps, burned stepper.
TRACK_REFRACTION (Mount) — refraction-compensated tracking. Fine to leave OFF for visual use.
WIFI (Controller, ESP32 only) — enable if you want SkySafari over WiFi.
Leave alone unless you know why
Serial baud rates — 9600 on SERIAL_A matches SkySafari defaults.
Guide rates — defaults match most autoguiders.
Meridian flip offsets — set after you have the mount tracking, using the hand controller, not in Config.h.
You can load an existing Config.h on the Output tab. The form fields will populate from the file, so you can take a working config from your current firmware and tweak from there.
5 · Picking an OnStepX version
On the Compile & Flash tab, the OnStepX source field controls which version of the firmware gets compiled. The default is main — the latest commit on hjd1964/OnStepX's main branch.

You can type any of:

A branch name — main, develop, or any feature branch that exists upstream
A tag — e.g. v10.24 to pin to a released version for reproducibility
A commit SHA — e.g. 1a2b3c4 for exact reproducibility or to try a specific in-progress change
Just below the field you'll see a live preview that resolves your input against GitHub and shows the commit hash, author, date, and the first line of the commit message, so you know exactly what's about to be compiled:

  Will build: hjd1964/OnStepX @ main · 1a2b3c4 · Howard Dutton · 3 days ago
              Add X-axis soft-limit check to mount park routine
    
If the ref doesn't exist (typo, or tag hasn't been published yet), you'll see a red "could not resolve" message.

6 · The preflight checklist
Before any Compile actually goes to the cloud, a local validator scans your form for common mistakes so you don't waste a 2-minute build on an obvious oversight:

PINMAP ↔ MCU match — every PINMAP is pinned to a specific MCU family in the validator. Current map: MaxESP3/MaxESP4/FYSETC_E4 → esp32; MaxPCB4 → teensy41; CNC3 (WeMos D1 R32) → esp32; MiniPCB (v1 / v2) → teensy32 by default — switch the Compile-tab MCU to teensy40 if you have a Teensy 4.0 mounted; MaxSTM3 / MaxSTM3I → blackpill_f411; FYSETC_S6 (V1.2 / V2.0) → f446_fysetc_s6; BTT_SKR_PRO → skr_pro_f407. Mismatches are caught before they hit the runner.
Required fields — PINMAP, MOUNT_TYPE, axis driver model, and steps/deg must all be set.
Driver microsteps — A4988 won't do 256, DRV8825 maxes at 32, etc.
Unusual steps/deg — typical values are 5,000–50,000; anything outside 500–200,000 is flagged.
Teensy 4.x step waveform — on teensy40/teensy41 the OnStepX source requires STEP_WAVE_FORM=SQUARE. The form auto-corrects this when you switch envs, and the preflight catches it if you override.
Secret-looking values — if your Config.h has a non-empty field whose name contains PASSWORD, KEY, SECRET, or TOKEN, you're warned because it would appear in the public GitHub Actions log.
You see each issue listed with a red ✗ (error) or yellow ⚠ (warning) icon. The Compile button stays disabled until you either resolve the issues or tick the "I understand the issues above — build anyway" override. This is intentional: the checklist is a safety net for beginners, not a straightjacket for power users who know what they're doing.

Your form state is saved automatically to your browser's local storage every time you change a field, so a refresh won't lose your work. The ↻ Reset to Defaults button in the header clears it.
7 · OnStepX plugins — how the bundling works
Plugins live in their own repo — hjd1964/OnStepX-Plugins — and the OnStepX main branch deliberately doesn't ship them. When you tick a plugin checkbox in the Compile tab's OnStepX plugins box, the build service does this for you:

GitHub Actions runner:
  1. git clone hjd1964/OnStepX (the version you picked in Source ref)
  2. git clone hjd1964/OnStepX-Plugins
  3. For each ticked plugin (e.g. "website"):
       cp -r plugins-src/website   →   OnStepX/src/plugins/website/
  4. Generate OnStepX/src/plugins/Plugins.config.h:
       #define PLUGIN1                   website
       #include "website/Website.h"
       #define PLUGIN1_COMMAND_PROCESSING    OFF
       (slots 2-8 → OFF)
  5. Drop your Config.h on top of OnStepX/Config.h
  6. pio run -e <your env>
       → compiles src/plugins/website/*.cpp into the firmware binary
  7. Bundle firmware.bin (+ manifest.json + Plugins.config.h) into the
     artifact zip you download.
    
Concrete example: FYSETC E4 + Website plugin (ESP32). Click Apply FYSETC E4 defaults and the configurator auto-ticks the Website checkbox. Click Compile and the workflow ends up with OnStepX/Config.h from the E4 branch + OnStepX/src/plugins/website/ from OnStepX-Plugins + Plugins.config.h wiring Website to slot 1. After flashing, the ESP32 boots OnStepX, exposes its WiFi (SSID and password live in src/plugins/website/Config.h — the plugin's own config, not yours), and the web UI is reachable at the IP it prints on the serial console.

How to verify a plugin is actually compiled in
Four places, in increasing order of "you really want to be sure":

The compile log on this page. When you click Compile, the log streams these lines:
> POST .../compile { project: onstepx, board: esp32, ref: main, plugins: [website] }
  plugins: website — workflow will copy each into src/plugins/<name>/ and wire up Plugins.config.h
  request_id = …
and after success:
✓ Plugins compiled into this firmware: website
  --- Plugins.config.h (from artifact) ---
  #define PLUGIN1                   website
  #include "website/Website.h"
  #define PLUGIN1_COMMAND_PROCESSING    OFF
  …
  --- end Plugins.config.h ---
That's the source of truth — the Plugins.config.h block is the actual file the workflow used to build your firmware, copied straight out of your downloaded artifact.
Flash size. Without Website, an ESP32 OnStepX build is ~600KB. With Website it's ~1.0–1.1MB. The Flash: indicator that appears under the Compile button after a successful build will jump accordingly. If you tick Website and the size barely moves, something's wrong — open the run URL and read the workflow log.
The downloaded firmware zip. Unzip it; you should see Plugins.config.h next to firmware.bin / merged-firmware.bin (and a manifest.json with a "plugins": ["website", …] field). If those are missing, your build server is running an older workflow that didn't include them — the firmware is still correctly built, you just have to fall back to method (4) to confirm.
The GitHub Actions log. The compile log on this page prints run URL: https://github.com/…/runs/<id> after the build queues. Open it, expand the step "Bundle OnStepX plugins", and search for === Generated Plugins.config.h ===. The next ~10 lines are the exact file the workflow wrote into the source tree before compiling.
Why you don't see src/plugins/website/ in any repo on disk
The bundling happens on a fresh ephemeral GitHub-hosted runner that's torn down the moment the workflow finishes. Nothing is committed back to a repo — not to the build-service repo, not to OnStepX, not to anywhere. The only persistent output is the firmware artifact, and (with the workflow change shipped alongside this help section) the Plugins.config.h dropped next to it.

If you want to inspect the plugin source before a build, browse it directly at github.com/hjd1964/OnStepX-Plugins/website — it's a normal folder of .h / .cpp files plus the plugin's own Config.h.

Plugins that need extras
Website — ESP32 only in practice (needs WiFi). Make sure your SERIAL_RADIO on the Controller tab is WIFI_ACCESS_POINT or WIFI_STATION, otherwise the plugin will compile but the radio won't come up. Configure SSID / password in the plugin's own src/plugins/website/Config.h (we don't expose those fields in this configurator yet — you can edit the generated config after compile, or fork OnStepX-Plugins).
ElegantOTA — pairs with Website. Doesn't work on its own.
Metrics — ESP32 only. Exposes a Prometheus-compatible /metrics endpoint; you need a scraper running somewhere.
Serial Bluetooth Config — needs an external HC-05 / HC-06 module wired to a serial port; configures it via AT commands at startup.
Guide Rate Rheostat — needs a physical analog potentiometer on a free analog input.
USB Power Control — needs a free aux-switch GPIO available on your board.
8 · Board-by-board USB preparation
ESP32 (MaxESP3, MaxESP4, FYSETC_E4, generic ESP32 dev boards)
Connect USB. Most dev boards (and MaxESP*) auto-reset into bootloader when esptool grabs the port.
If auto-reset fails: hold BOOT / IO0, tap EN / RST, release BOOT.
Click Flash to Board, pick the port in the browser prompt (it'll be labeled something like CP2102, CH340, or USB JTAG/serial debug unit).
Flashing takes 15–40 s. Board auto-resets into firmware when done.
Reference wikis: MaxESP v3 · MaxESP build notes.

ESP8266 (NodeMCU, Wemos D1 mini, ESP-01 — SWS only)
Connect USB.
NodeMCU / Wemos D1 mini auto-reset into the ROM bootloader (DTR/RTS wiring on their USB bridge). Bare ESP-01 modules don't — you need to pull GPIO0 to GND, power cycle, and release.
Click Flash to Board, pick the port (same USB-UART families as ESP32: CP2102, CH340, FTDI).
ESP8266 flash is a single firmware.bin written at 0x0 — much simpler than ESP32's four-partition layout. Takes 20–60 s.
If you see "Failed to connect", drop the baud: most ESP8266 modules prefer 460 800 or 115 200. Our flasher already uses 460 800 by default; if that fails, the chip itself is the issue (check USB cable, try the boot procedure manually).
STM32 BlackPill F411CE (and MaxSTM3)
Connect USB.
Hold BOOT0, tap NRST, release BOOT0. The board re-enumerates as STM32 BOOTLOADER (VID 0483 / PID DF11).
Click Flash to Board, pick STM32 BOOTLOADER in the browser prompt.
Wait for "Flash complete", then tap NRST to run your firmware.
Windows driver note: on Windows you may need the WinUSB driver for the DFU device. If the browser can't open the device, install Zadig, select "STM32 BOOTLOADER", and replace the driver with WinUSB.
BTT SKR PRO V1.2 (STM32F407)
BigTreeTech's 3D-printer board repurposed for OnStep. Same ST DFU protocol as the BlackPill, just a different entry procedure:

Power off the board.
Place the BOOT0 jumper (pins are silkscreened next to the reset button) to hold BOOT0 high.
Power on via USB — the board comes up as STM32 BOOTLOADER (VID 0483 / PID DF11) instead of running the old firmware.
Click Flash to Board, pick STM32 BOOTLOADER in the picker.
After "Flash complete", power off, remove the BOOT0 jumper, power back on. Board boots into OnStepX.
Reference wiki: BTT SKR PRO on OnStep wiki. Same Windows WinUSB / Zadig note as the BlackPill applies.

FYSETC S6 V1.2 / V2.0 (STM32F446VE)
FYSETC's 6-axis 3D-printer board. Same ST DFU protocol as the SKR PRO, but the BOOT0 control on newer S6 revisions is a 3-pin header instead of a jumper (centre + right pin = boot to DFU).

Hold BOOT0 (jumper or 3-pin header → centre + right) high.
Tap NRST — board comes up as STM32 BOOTLOADER (VID 0483 / PID DF11).
Click Flash to Board, pick the device in the browser picker.
After "Flash complete", remove the BOOT0 link and tap NRST.
⚠ Driver compatibility: per the OnStep wiki, FYSETC S6 only supports TMC2130 / TMC5160 (SPI), LV8729 or S109. The UART steppers (TMC2208 / TMC2209 / TMC2226) will not work on this board even though they're in the dropdown — picking one fires a preflight error.

Reference wiki: FYSETC S6 on OnStep wiki. Same Windows WinUSB / Zadig note as the BlackPill applies.

MiniPCB v1 / v2 (Teensy 3.2 or Teensy 4.0)
Two iterations on the OnStep wiki:

MiniPCB v1 — embeds inside the mount body. External: power, ST4, USB. Internal: limit sense, PEC, WiFi (ESP-01) or Bluetooth (HC-05). Horizontal connectors so it sits flat behind a cover plate.
MiniPCB v2 — stand-alone controller for a small aluminium project box. External connectors for power, limit sense, illuminated reticle, PEC, ST4, USB. Internal header for a WeMos D1 Mini (WiFi).
Both run on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast). Both work with most StepStick drivers (DRV8825 / A4988 / LV8729) plus TMC2130 and TMC5160. Teensy 3.2 uses the HalfKay bootloader in the same "block_size ≥ 512" branch as 4.0/4.1 — the WebHID flasher covers all of them:

Plug the Teensy into USB.
Click Flash to Board.
When the browser picker appears, press the white program button — "Teensy" shows up in the dialog, pick it and click Connect.
Progress streams to the flash log; the board reboots into OnStepX when done.
If you have a Teensy 4.0 mounted instead of 3.2, switch the Target MCU on the Compile & Flash tab from teensy32 to teensy40 before clicking Compile.

Fallback (Firefox / Safari / WebHID unavailable): we save firmware.hex; drop it into Teensy Loader and press the white program button. CLI alternative: teensy_loader_cli --mcu=mk20dx256 -w -v firmware.hex (Teensy 3.2) or teensy_loader_cli --mcu=imxrt1062 -w -v firmware.hex (Teensy 4.0).

Reference wikis: MiniPCB overview · MiniPCB v2.

Teensy 4.0 / 4.1 / MaxPCB4
One-click browser flash (Chrome / Edge):

Plug the Teensy into USB.
Click Flash to Board.
When the browser picker appears, press the white program button on the Teensy. It'll show up as "Teensy" in the dialog — pick it and click Connect.
Progress streams to the flash log; the Teensy reboots into the new firmware when it's done. Typical time: 3–8 seconds.
If the browser dialog is empty, the Teensy isn't in HalfKay bootloader mode yet — just press the white program button and it'll pop in.

Fallback (Firefox / Safari / WebHID unavailable): we save firmware.hex to your Downloads folder. Then:

Open Teensy Loader (comes with Teensyduino).
Drop firmware.hex onto the window.
Press the white program button on the Teensy — it flashes and reboots automatically.
CLI alternative if you have Teensyduino installed:

teensy_loader_cli --mcu=TEENSY41 -w -v firmware.hex   # 4.1 / MaxPCB4
teensy_loader_cli --mcu=TEENSY40 -w -v firmware.hex   # 4.0
9 · Browser requirements
Browser	Configurator & Compile	ESP32 / ESP8266 flash	STM32 DFU flash	Teensy 3.2 / 4.0 / 4.1 flash
Chrome, Edge, Opera, Brave (Chromium)	yes	yes (Web Serial)	yes (WebUSB)	yes (WebHID)
Firefox	yes	no	no	no (download .hex)
Safari	yes	no	no	no (download .hex)
Firefox / Safari can generate a config, trigger a compile, and download the firmware — they just can't flash via the browser. If you're on one of those, download the firmware and use esptool.py (ESP32), dfu-util (STM32), or Teensy Loader (Teensy) locally.

10 · Privacy & what gets logged
Here's exactly what leaves your browser and where it ends up:

Data	Where it goes	How long it stays
Your Config.h (base64-encoded)	Cloudflare Worker → GitHub Actions as a workflow input	Logged in the Actions run metadata indefinitely (public repo)
Board selection & OnStepX ref	Same as above	Same
Your IP address (for rate limiting only)	Cloudflare Worker KV (if rate limit is enabled)	1 hour
The compiled firmware	GitHub Actions artifact storage	24 hours, then deleted automatically
Form state (all your settings)	Your browser's localStorage	Until you click Reset to Defaults or clear site data
Don't put WiFi passwords, API keys, or other secrets in Config.h. The workflow input is visible in the public Actions log. Leave those fields at OFF / empty and configure them over the OnStepX web UI after flashing, where they only live on your board.
The configurator itself sends no analytics, no telemetry, no trackers. Nothing leaves your browser until you click Compile.

11 · Troubleshooting
"Compile service is not configured yet"
The site owner hasn't deployed the Cloudflare Worker, or WORKER_URL in compile.js still has the placeholder. For the owner: follow SETUP-COMPILE-SERVICE.md.

Compile starts but fails
Click the run URL printed in the compile log. That opens the GitHub Actions page for your build. The "PlatformIO build" step contains the compiler error. Common causes:

A PINMAP incompatible with the MCU target (the preflight usually catches this — override it only if you're sure).
A driver model or feature enabled that the selected pinmap doesn't have pins for.
A required field left at OFF — scroll up in the log for #error lines from Validate.h.
You picked a branch/tag that doesn't exist. The "Fetch upstream OnStepX" step will fail at git checkout.
Build succeeded, Flash button is disabled
The firmware artifact couldn't be downloaded. Reload the page, re-compile, and watch for a firmware download failed line in the compile log. Usually means the artifact already expired (24 h retention) or the Worker URL is wrong.

"Your config has changed since this firmware was built"
You edited the form after compiling. The firmware on disk is stale. Click Compile Firmware again, or click Cancel to flash the outdated firmware anyway (rarely what you want).

Flashing ESP32: "Failed to connect"
Close any other program holding the port (Arduino Serial Monitor, screen, PuTTY).
Unplug USB, replug.
Hold BOOT, tap EN, release BOOT, then click Flash.
Try a different USB cable — a surprising number are charge-only.
Flashing STM32: device doesn't appear in the picker
Make sure you actually entered DFU. BlackPill: hold BOOT0, tap NRST, release. BTT SKR PRO V1.2: set the BOOT0 jumper, then power-cycle — the device name in Device Manager / lsusb should change.
On Windows: install the WinUSB driver via Zadig (see the BlackPill warning above).
Confirm VID:PID 0483:DF11 is present.
Flashing Teensy: device picker is empty
The Teensy isn't in HalfKay bootloader mode yet. Leave the browser dialog open and press the white program button on the Teensy — Chrome polls for new devices and it'll appear. This applies to 3.2, 4.0, 4.1, and MaxPCB4. If the picker still won't show it after the button press, the USB cable may be charge-only (try another).

Flashing Teensy: "WebHID not available in this browser"
WebHID is Chromium-only. On Firefox/Safari the flasher silently falls back to saving firmware.hex which you then drop into the PJRC Teensy Loader app. Same result, one more step.

Teensy Loader doesn't see my .hex
Drag the file onto the Teensy Loader window, or File → Open HEX File. If it opens but doesn't flash, press the white program button on the Teensy — it flashes on button press, not on file open.

Flash log stops at "First block sent (chip erase…)"
Normal. Block 0 on a Teensy triggers a full chip erase; the ACK for that first write arrives only after the erase finishes (a few seconds on 3.2, a bit longer on 4.1's 8 MB flash). The flasher allows up to 45 s per block for the first five blocks. If it actually times out, unplug / replug the Teensy and retry — HalfKay is ROM-resident, nothing can be bricked.

Firmware runs but axis moves wrong direction / doesn't move
That's config, not firmware. Toggle AXIS1_DRIVER_REVERSE / AXIS2_DRIVER_REVERSE, re-generate, re-compile, re-flash. If nothing moves at all, check the wiring — if step/dir pins aren't connected, the firmware is fine but the stepper won't move.

Rate limit hit
If the service enforces rate limits (default: 10 builds/hour/IP), wait an hour. If you're iterating heavily, set up a local PlatformIO checkout: clone hjd1964/OnStepX, drop your Config.h in, pio run -e <env>.

12 · FAQ
Which OnStepX version does this build?
Whatever you type in the OnStepX source field on the Compile & Flash tab — defaults to main (latest). The live preview under the field shows the exact commit. See Picking an OnStepX version.

Is my Config.h sent anywhere permanent?
Yes — each compile request base64-encodes your Config.h and sends it as a GitHub Actions workflow input. Public-repo Actions logs are visible to anyone, so treat Config.h as public. See Privacy.

Where do I configure network / WiFi / Ethernet?
Depends on the flow:

OnStepX on ESP32 with the Website plugin → network settings live in src/plugins/website/Config.h (the plugin's own config, bundled automatically by the workflow when you tick the plugin).
Separate SmartWebServer board → configure on the SWS side in SmartWebServer mode of this page (Network / Web UI / Encoders & BLE tabs).
OnStepX with raw LX200 TCP (no web UI) — e.g. Teensy 4.1 native Ethernet — hand-edit the generated Config.h on the Output tab: add #define OPERATIONAL_MODE ETHERNET_TEENSY41 before #include "Extended.config.h", and optionally #define SERIAL_IP_MODE ETHERNET_W5500 for W5x00 shields. The textarea is editable and Compile sends it as-is.
Which boards can I build for?
Everything in the PINMAP dropdown is wired to a matching PlatformIO env on the build side. Today that covers:

ESP32 — MaxESP3, MaxESP4, FYSETC_E4, CNC3 (WeMos D1 R32 — deprecated), generic dev boards.
Teensy 3.2 / 4.0 — MiniPCB v1 (embed-in-mount) and MiniPCB v2 (stand-alone case).
Teensy 4.1 — MaxPCB4.
STM32F411 BlackPill — MaxSTM3.
STM32F407 — BTT SKR PRO V1.2.
To add a board that's not listed, the build service needs a new PlatformIO env — edit build-service/platformio.ini (plus the whitelist in build.yml and the Worker's ALLOWED_BOARDS set), then update the PINMAP dropdown and PINMAP_TO_ENV / PINMAP_MCU mappings here.

Can I run this offline?
You can generate Config.h offline — this page works fully offline once loaded. Compiling needs the online service. For a fully offline toolchain, install PlatformIO, clone hjd1964/OnStepX, and run pio run -e esp32 (or whatever env).

Why did the form change after I flashed?
In OnStepX mode, after a successful flash the form auto-resets to the selected board's starter defaults, so the next build starts from a clean baseline for that board. This only happens for boards where a starter config is shipped (see the hint next to the "Apply board defaults" button on the Controller tab). Your pre-flash state is stashed in localStorage under onstepx-configurator-v2-preflash — to restore it, open DevTools → Console and run:

localStorage.setItem('onstepx-configurator-v2', localStorage.getItem('onstepx-configurator-v2-preflash'));
location.reload();
The simpler alternative: before flashing, click Download Config.h on the Output tab to save a copy; re-load it later with Load Existing Config.h.

SHC / SWS modes do not auto-reset — their configs are small enough that overwriting would be annoying rather than helpful.

How much does this cost the site owner?
Zero at the scale of a hobby project. GitHub Pages, GitHub Actions (on public repos), and Cloudflare Workers all have free tiers that comfortably fit hundreds of builds per day.

Can someone else clone this and run their own instance?
Yes. Everything is open-source. Fork christm45/OnStepX-Configurator, follow SETUP-COMPILE-SERVICE.md, redeploy. The whole pipeline takes under an hour end-to-end.

The configurator is broken / giving weird output
File an issue at the configurator repo. If the issue is with OnStepX itself (firmware behavior, missing features), use the OnStep group or the upstream repo.
