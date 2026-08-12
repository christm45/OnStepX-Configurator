/* ============================================================================
   French dictionary — E4 Guide batch C. Covers the strings introduced by the
   factual-corrections pass (I2C pull-ups, Hall divider, GPS capacitor, focuser
   MOT-E/MOT-Z, OneWire pin availability, PEC formula, stock Config.h values).
   Merged into window.I18N_FR; loaded after batches A and B, before i18n.js.

   Keys are the exact browser-decoded, trimmed text nodes — note that callouts
   split at their <strong> boundaries, so a callout contributes several keys.
   Hardware identifiers, pin names, directives and part numbers (GPIO21,
   BME280, ONE_WIRE_PIN, DS1820 …) are intentionally left untranslated.
   ========================================================================== */
window.I18N_FR = Object.assign(window.I18N_FR || {}, {

  /* ---------------------------------------------------------------- I2C bus */
  /* "Shared bus:" / "Shared I2C bus:" / "Hall (unipolar)" /
     "Open-collector, LOW on south pole" already live in batch A/B with
     identical translations — not repeated here so batch C stays additive. */
  "BME280 and DS3231 use different addresses, so they coexist on the same I2C bus.": "Le BME280 et le DS3231 utilisent des adresses différentes, ils coexistent donc sur le même bus I2C.",
  "Keep the pull-up resistors that came on your breakout": "Conservez les résistances de tirage présentes sur votre module",
  "(typically 4.7–10kΩ to VCC) — the bus needs them. Do not rely on the ESP32's internal pull-ups: those are ~45kΩ, far too weak for I2C.": "(typiquement 4,7–10kΩ vers VCC) — le bus en a besoin. Ne comptez pas sur les tirages internes de l'ESP32 : ils font ~45kΩ, bien trop faibles pour l'I2C.",

  "both BME280 and DS3231 share the bus at different addresses. The bus needs one pair of pull-ups (SDA→3.3V, SCL→3.3V, 4.7kΩ) — nearly every GY-BME280 and ZS-042 breakout already has them, so leave them alone. Only add your own if a scan finds no device and you have confirmed your modules carry none.": "le BME280 et le DS3231 partagent le bus à des adresses différentes. Le bus nécessite une paire de résistances de tirage (SDA→3,3V, SCL→3,3V, 4,7kΩ) — presque tous les modules GY-BME280 et ZS-042 en possèdent déjà, alors n'y touchez pas. N'en ajoutez que si un scan ne trouve aucun périphérique et que vous avez vérifié que vos modules n'en ont pas.",

  "the E4 I2C header provides 5V but the ESP32 pins are 3.3V. Power your modules from 3.3V (or drop the 5V rail — see Troubleshooting), and use 3.3V-rated modules.": "le connecteur I2C de l'E4 fournit du 5V alors que les broches de l'ESP32 sont en 3,3V. Alimentez vos modules en 3,3V (ou abaissez le rail 5V — voir Dépannage), et utilisez des modules prévus pour 3,3V.",
  "Do not remove the pull-up resistors from your breakouts": "Ne retirez pas les résistances de tirage de vos modules",
  "— the ESP32's internal pull-ups are ~45kΩ, nowhere near enough to run an I2C bus, and stripping the module pull-ups is a common way to end up with a completely dead bus.": "— les tirages internes de l'ESP32 font ~45kΩ, très loin de ce qu'il faut pour un bus I2C, et retirer ceux des modules est une façon courante de se retrouver avec un bus totalement mort.",

  /* --------------------------------------------- I2C troubleshooting entry */
  "BME280 and/or DS3231 not detected — no weather data, time never restored": "BME280 et/ou DS3231 non détectés — aucune donnée météo, heure jamais restaurée",
  "The I2C bus is not communicating at all. On the E4 this is nearly always wiring, power or pull-ups rather than Config.h — the only I2C settings the firmware has are WEATHER and TIME_LOCATION_SOURCE; SDA/SCL come from the pinmap (GPIO21/22) and cannot be set wrongly.": "Le bus I2C ne communique pas du tout. Sur l'E4, c'est presque toujours le câblage, l'alimentation ou les tirages plutôt que Config.h — les seuls réglages I2C du firmware sont WEATHER et TIME_LOCATION_SOURCE ; SDA/SCL proviennent du pinmap (GPIO21/22) et ne peuvent pas être mal réglés.",
  "FIRST: flash a plain I2C scanner sketch (Wire.begin(21,22), scan 0x03-0x77). Nothing found = hardware. 0x76/0x77/0x68 found = it is the address or chip type in Config.h.": "D'ABORD : flashez un simple sketch scanner I2C (Wire.begin(21,22), scan 0x03-0x77). Rien trouvé = matériel. 0x76/0x77/0x68 trouvés = c'est l'adresse ou le type de puce dans Config.h.",
  "Check the pull-ups: SDA and SCL each need ~4.7kΩ to 3.3V. Most breakouts have them — if you removed them, the bus is dead. Put them back.": "Vérifiez les tirages : SDA et SCL nécessitent chacun ~4,7kΩ vers 3,3V. La plupart des modules en ont — si vous les avez retirés, le bus est mort. Remettez-les.",
  "Check the supply: the E4 I2C header pin is 5V, not 3.3V. Power the modules from 3.3V, and prefer the external LM1117 tap — the onboard 3.3V regulator is already loaded by the ESP32 + WiFi and can brown out with two modules on it.": "Vérifiez l'alimentation : la broche du connecteur I2C de l'E4 est en 5V, pas en 3,3V. Alimentez les modules en 3,3V, et préférez le piquage sur un LM1117 externe — le régulateur 3,3V embarqué est déjà chargé par l'ESP32 + le WiFi et peut décrocher avec deux modules dessus.",
  "Address mismatch: most purple GY-BME280 boards are 0x76 (SDO→GND) so you need WEATHER BME280_0x76. Plain BME280 means 0x77 and fails silently.": "Adresse incorrecte : la plupart des cartes GY-BME280 violettes sont en 0x76 (SDO→GND), il faut donc WEATHER BME280_0x76. BME280 seul signifie 0x77 et échoue silencieusement.",
  "Keep the wires short — over ~20cm of unshielded wire next to the stepper drivers, I2C drops out.": "Gardez les fils courts — au-delà d'environ 20 cm de fil non blindé à côté des drivers pas-à-pas, l'I2C décroche.",

  /* ------------------------------------------------------------ Hall / PEC */
  "KY-003 modules output 5V logic. GPIO36 is NOT 5V-tolerant. Use a divider — 1kΩ in series from the sensor output, 2kΩ from the GPIO node to GND, giving 5V × 2/3 ≈ 3.3V. Getting the two resistors the wrong way round gives ~1.7V, which the ESP32 will not read as a reliable HIGH.": "Les modules KY-003 sortent une logique 5V. GPIO36 n'est PAS tolérant au 5V. Utilisez un diviseur — 1kΩ en série depuis la sortie du capteur, 2kΩ entre le nœud GPIO et la masse, ce qui donne 5V × 2/3 ≈ 3,3V. Inverser les deux résistances donne ~1,7V, que l'ESP32 ne lira pas comme un HIGH fiable.",
  "A3144 / KY-003: unipolar switch — the south pole turns it on, removing the magnet turns it off, so magnet polarity matters. US5881: also unipolar. US1881 is the true bipolar latch (one pole sets, the other resets) and is the only one of the four that natively runs at 3.3V.": "A3144 / KY-003 : interrupteur unipolaire — le pôle sud l'active, retirer l'aimant le désactive, donc la polarité de l'aimant compte. US5881 : unipolaire également. L'US1881 est la véritable bascule bipolaire (un pôle arme, l'autre désarme) et c'est le seul des quatre qui fonctionne nativement en 3,3V.",
  "Needs 4.5V+ — power at 5V and divide the output down.": "Nécessite 4,5V minimum — alimentez en 5V et abaissez la sortie par un diviseur.",
  "Run it at 5V + divider (1kΩ series, 2kΩ to GND)": "À utiliser en 5V + diviseur (1kΩ en série, 2kΩ vers la masse)",
  "Divider: 1kΩ series + 2kΩ to GND ≈ 3.3V": "Diviseur : 1kΩ en série + 2kΩ vers la masse ≈ 3,3V",
  "None if powered from 3.3V; divider only if run at 5V": "Aucun si alimenté en 3,3V ; diviseur seulement en 5V",
  "Not needed — the 3.3V-native choice": "Inutile — le choix nativement 3,3V",
  "(AXIS1_STEPS_PER_DEGREE × 360) / worm_wheel_teeth — see the formula below. There is no universal default; a wrong value makes PEC useless.": "(AXIS1_STEPS_PER_DEGREE × 360) / nombre_de_dents_de_la_roue — voir la formule ci-dessous. Il n'y a pas de valeur par défaut universelle ; une valeur erronée rend la PEC inutile.",
  "Max recording length in seconds (720s = 12 min)": "Durée d'enregistrement maximale en secondes (720s = 12 min)",
  "Must match your mount — use the configurator's Calculator tab": "Doit correspondre à votre monture — utilisez l'onglet Calculateur du configurateur",

  /* ------------------------------------------------------------------- GPS */
  "X-MIN has an SMD filter capacitor that must be lifted for reliable GPS data at 9600 baud. There are three SMD parts beside the X-MIN pins: the two outer ones are resistors — leave them (one is the pull-up the endstop needs), the centre one is the capacitor to remove. Identify it with a multimeter before touching an iron; part designators vary between board revisions, so do not go by a printed reference number.": "X-MIN possède un condensateur de filtrage CMS qu'il faut retirer pour des données GPS fiables à 9600 bauds. Il y a trois composants CMS à côté des broches X-MIN : les deux extérieurs sont des résistances — laissez-les (l'une est le tirage dont la butée a besoin), celui du centre est le condensateur à retirer. Identifiez-le au multimètre avant de sortir le fer ; les repères de composants varient selon les révisions de carte, ne vous fiez donc pas à une référence imprimée.",
  "A cold start is ~30s with a clear sky view (u-blox spec ~27–32s). Allow a few minutes in practice through a window or under partial sky. Subsequent starts: 1–5s (hot start, if the module has a backup battery). If you are still waiting after 10 minutes, suspect the antenna or the wiring rather than the fix time.": "Un démarrage à froid prend ~30s avec une vue dégagée du ciel (spec u-blox ~27–32s). Comptez quelques minutes en pratique derrière une fenêtre ou sous un ciel partiel. Démarrages suivants : 1–5s (démarrage à chaud, si le module a une pile de sauvegarde). Si vous attendez encore après 10 minutes, suspectez l'antenne ou le câblage plutôt que le temps de fixation.",
  "for single-wire GPS on X-MIN, lift only the": "pour un GPS monofilaire sur X-MIN, ne retirez que le composant",
  "SMD part beside the header — it is the filter capacitor; the two either side are resistors and must stay. Not needed at all with Serial2 (GPIO16/17).": "CMS central à côté du connecteur — c'est le condensateur de filtrage ; les deux de part et d'autre sont des résistances et doivent rester. Totalement inutile avec Serial2 (GPIO16/17).",
  "Older, GPS-only, less sensitive than M8N. Cold start ~30s.": "Plus ancien, GPS seul, moins sensible que le M8N. Démarrage à froid ~30s.",
  "Yes (pin present)": "Oui (broche présente)",

  /* ------------------------------------------------------- Focuser / motors */
  "Axis3 rotator / Axis5 focuser2 — TMC2209 UART": "Rotateur Axe3 / Focuser2 Axe5 — TMC2209 UART",
  "Driver socket for MOT Z. Per Pins.FYSETC_E4.h this is the Z-AXIS: Axis3 (rotator) and Axis5 (focuser2) BOTH sit here on GPIO14 (STEP) / GPIO12 (DIR) — enable only one of them.": "Emplacement de driver pour MOT Z. D'après Pins.FYSETC_E4.h, c'est l'axe Z : l'Axe3 (rotateur) et l'Axe5 (focuser2) s'y trouvent TOUS DEUX sur GPIO14 (STEP) / GPIO12 (DIR) — n'en activez qu'un seul.",
  "Axis4 (Focuser1) — TMC2209 UART": "Axe4 (Focuser1) — TMC2209 UART",
  "Driver socket for MOT E. Per Pins.FYSETC_E4.h focuser1 is the E0-AXIS: GPIO16 (STEP), GPIO17 (DIR) — its own pins, no sharing.": "Emplacement de driver pour MOT E. D'après Pins.FYSETC_E4.h, le focuser1 est l'axe E0 : GPIO16 (STEP), GPIO17 (DIR) — ses propres broches, sans partage.",
  "MOT Z — rotator (Axis3) or Focuser2 (Axis5)": "MOT Z — rotateur (Axe3) ou Focuser2 (Axe5)",
  "Motor output on the Z-AXIS. Axis3 and Axis5 share these pins — only one may be enabled.": "Sortie moteur sur l'axe Z. L'Axe3 et l'Axe5 partagent ces broches — un seul peut être activé.",
  "Wire the rotator OR the Focuser2 stepper coils.": "Câblez les bobines du rotateur OU celles du Focuser2.",
  "MOT E — Focuser1 motor output (Axis4)": "MOT E — sortie moteur Focuser1 (Axe4)",
  "Motor output for Focuser1 on the E0-AXIS.": "Sortie moteur pour le Focuser1 sur l'axe E0.",
  "Wire the Focuser1 stepper coils.": "Câblez les bobines du moteur Focuser1.",
  "Rotator / Focuser 2 stepper": "Moteur rotateur / Focuser 2",
  "Stepper on the Z-AXIS socket — Axis3 (rotator) or Axis5 (focuser2), which share GPIO14/GPIO12. Enable only one.": "Moteur sur l'emplacement de l'axe Z — Axe3 (rotateur) ou Axe5 (focuser2), qui partagent GPIO14/GPIO12. N'en activez qu'un.",
  "Rotator or Focuser2 stepper coils to MOT Z.": "Bobines du rotateur ou du Focuser2 vers MOT Z.",
  "Stepper for the first focuser, driven by the Axis4 TMC2209 on the E0-AXIS socket (GPIO16/17).": "Moteur du premier focuser, piloté par le TMC2209 de l'Axe4 sur l'emplacement de l'axe E0 (GPIO16/17).",
  "Focuser1 stepper coils to MOT E.": "Bobines du moteur Focuser1 vers MOT E.",
  "Axis4 is the MOT-E (E0-AXIS) socket and uses dedicated pins (GPIO16 STEP, GPIO17 DIR) — no pin-sharing conflicts. Enabled as TMC2209 in the stock E4 Config.h.": "L'Axe4 est l'emplacement MOT-E (axe E0) et utilise des broches dédiées (GPIO16 STEP, GPIO17 DIR) — aucun conflit de partage. Activé en TMC2209 dans le Config.h E4 d'origine.",
  "Already TMC2209 in the stock E4 Config.h — set it OFF if you want Axis5/focuser2 on that socket instead": "Déjà en TMC2209 dans le Config.h E4 d'origine — mettez-le sur OFF si vous voulez y placer l'Axe5/focuser2 à la place",

  /* --------------------------------------------------------------- OneWire */
  "AUX7 is not available:": "AUX7 n'est pas disponible :",
  "AUX7 maps to SPARE_RX_PIN, which Pins.FYSETC_E4.h hard-defines as OFF whenever the TMC UART drivers are in use — i.e. the standard E4 build. You must pick and define your own ONE_WIRE_PIN; there is no working default.": "AUX7 pointe vers SPARE_RX_PIN, que Pins.FYSETC_E4.h définit en dur à OFF dès que les drivers TMC en UART sont utilisés — c'est-à-dire la configuration E4 standard. Vous devez choisir et définir vous-même ONE_WIRE_PIN ; il n'existe aucune valeur par défaut fonctionnelle.",
  "MUST be set explicitly on the E4 — see the warning above. Put it in Extended.config.h, e.g. #define ONE_WIRE_PIN 13": "DOIT être défini explicitement sur l'E4 — voir l'avertissement ci-dessus. Placez-le dans Extended.config.h, ex. #define ONE_WIRE_PIN 13",
  "Or the specific sensor's 64-bit serial": "Ou le numéro de série 64 bits du capteur voulu",
  "Use the bare DS1820 keyword + DEBUG VERBOSE to LIST serial numbers; then replace it with the serial of the sensor you want": "Utilisez le mot-clé DS1820 seul + DEBUG VERBOSE pour LISTER les numéros de série ; remplacez-le ensuite par le numéro du capteur voulu",
  "Set DEBUG VERBOSE plus FEATURE1_TEMP DS1820, flash, and read the serial numbers off the serial monitor — then assign each sensor by its own 64-bit serial. (There is no FEATURE_LIST_DS directive in OnStepX.)": "Réglez DEBUG sur VERBOSE avec FEATURE1_TEMP DS1820, flashez, puis lisez les numéros de série dans le moniteur série — attribuez ensuite chaque capteur par son propre numéro 64 bits. (Il n'existe pas de directive FEATURE_LIST_DS dans OnStepX.)",
  "A 4.7kΩ resistor is required between DATA and VCC (3.3V). Use normal 3-wire power (VCC/GND/DATA) — parasitic power is unreliable here and is not worth the saved wire.": "Une résistance de 4,7kΩ est requise entre DATA et VCC (3,3V). Utilisez l'alimentation classique à 3 fils (VCC/GND/DATA) — l'alimentation parasite n'est pas fiable ici et ne vaut pas le fil économisé.",
  "Your chosen ONE_WIRE_PIN": "Le ONE_WIRE_PIN que vous avez choisi",
  "output-capable GPIO": "GPIO capable de sortie",

  /* ---------------------------------------------- thermistor / dew / config */
  "The onboard filter cap works with the 4.7kΩ series resistor to slow the input (roughly 50ms with a 10µF part). That is harmless for ambient and dew sensing. Only if a focuser needs fast thermal response would you lift the cap next to that specific TE/TB input — meter it first, and note this is a different part from the one beside X-MIN.": "Le condensateur de filtrage embarqué agit avec la résistance série de 4,7kΩ pour ralentir l'entrée (environ 50 ms avec un composant de 10µF). C'est sans conséquence pour la mesure d'ambiance et de buée. Ce n'est que si un focuser exige une réponse thermique rapide que vous retireriez le condensateur situé près de cette entrée TE/TB précise — mesurez-le d'abord, et notez que c'est un composant différent de celui situé près de X-MIN.",
  "OFF in the stock Config.h — Dew Heat 1 then runs on ambient-vs-dew-point alone. Set THERMISTOR only if you add a probe on TE": "OFF dans le Config.h d'origine — Dew Heat 1 fonctionne alors uniquement sur l'écart ambiante/point de rosée. Ne mettez THERMISTOR que si vous ajoutez une sonde sur TE",
  "Steps/° for Axis1 — a placeholder, you MUST set this for your gearing (Calculator tab)": "Pas/° pour l'Axe1 — valeur indicative, vous DEVEZ la régler selon votre démultiplication (onglet Calculateur)",
  "Overrides the pinmap default of 39, moving limit sense to X-MIN": "Remplace la valeur 39 par défaut du pinmap, déplaçant la détection de limite sur X-MIN",
  "Rotator active by default on MOT-Z": "Rotateur actif par défaut sur MOT-Z",
  "Focuser1 active by default on MOT-E": "Focuser1 actif par défaut sur MOT-E",
  "Focuser2 off — it would clash with Axis3": "Focuser2 désactivé — il entrerait en conflit avec l'Axe3",
  "BME280 at 0x76": "BME280 à l'adresse 0x76",

  /* ------------------------------------------------------- misc corrections */
  "Building through this configurator's Compile & Flash tab avoids this entirely — the libraries are already in the build environment.": "Compiler via l'onglet Compile & Flash de ce configurateur évite complètement le problème — les bibliothèques sont déjà présentes dans l'environnement de compilation.",
  "Sleeve is ground, as on every brand here. Many modern Sony bodies use Multi-terminal (USB) instead of a 2.5mm jack — check the manual.": "Le corps (sleeve) est la masse, comme pour toutes les marques ici. Beaucoup de boîtiers Sony récents utilisent le Multi-terminal (USB) au lieu d'un jack 2,5 mm — consultez le manuel.",
  "Sleeve is ground. Fuji RR-90 bodies use micro-USB, not the 2.5mm jack — verify yours.": "Le corps (sleeve) est la masse. Les boîtiers Fuji RR-90 utilisent le micro-USB, pas le jack 2,5 mm — vérifiez le vôtre.",
  "Red reticle illumination LED on the FAN/AUX output (RETICLE_LED_PIN defaults to AUX8 = GPIO13, shared with the status LED and buzzer — pick one). Pins.FYSETC_E4.h specifies a 10kΩ series resistor.": "LED rouge d'éclairage du réticule sur la sortie FAN/AUX (RETICLE_LED_PIN vaut AUX8 = GPIO13 par défaut, partagé avec la LED d'état et le buzzer — choisissez-en un seul). Pins.FYSETC_E4.h indique une résistance série de 10kΩ.",
  "LED (+) → FAN/AUX via 10kΩ, LED (–) → GND. OnStepX PWMs it for brightness.": "LED (+) → FAN/AUX via 10kΩ, LED (–) → GND. OnStepX la pilote en PWM pour la luminosité.",
  "Lands on the": "Se raccorde sur le",
  "— the E4 has no barrel jack, so a plug-and-socket PSU needs a screw-terminal pigtail. 5A min with peripherals. Watch polarity: 12V = +, 0V = GND.": "— l'E4 n'a pas de prise jack d'alimentation, une alimentation à fiche nécessite donc une queue de cochon vers bornier à vis. 5A minimum avec les périphériques. Attention à la polarité : 12V = +, 0V = GND.",
});
