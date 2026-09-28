/* ============================================================================
   French dictionary — E4 Guide batch D. Covers the guide text rewritten
   against the FYSETC E4 V1.0 schematic, plus every guide text node the
   earlier batches never matched (they were keyed on merged strings, while
   i18n.js looks up one text node at a time). Merged into window.I18N_FR;
   loaded before i18n.js.
   ========================================================================== */
window.I18N_FR = Object.assign(window.I18N_FR || {}, {
  "(WEATHER OFF, no DS3231 fallback). The preflight check flags the combination.":
    "(WEATHER OFF, pas de repli DS3231). La vérification préalable signale cette combinaison.",
  "(focuser2), both on":
    "(focuseur 2), tous deux sur",
  "(msg #69284). Requires removing X-MIN's filter capacitor (the centre of the three SMD parts beside the header; the outer two are resistors) and gives up the Axis1 home/limit input:":
    "(msg #69284). Nécessite de retirer le condensateur de filtrage de X-MIN (le composant central des trois CMS à côté du connecteur ; les deux extérieurs sont des résistances) et sacrifie l'entrée home/fin de course de l'Axe1 :",
  "(no 3.3V pin). Most breakout boards (GY-GPSV3, GY-NEO6MV2, BN-880) carry their own 3.3V regulator and take 5V directly. A bare 3.3V-only module needs a small 3.3V regulator (e.g. AMS1117-3.3 / LM1117-3.3) fed from that 5V pin. The GPS TX line is 3.3V logic either way, which is safe for the ESP32.":
    "(pas de broche 3.3V). La plupart des cartes breakout (GY-GPSV3, GY-NEO6MV2, BN-880) intègrent leur propre régulateur 3.3V et acceptent directement le 5V. Un module nu uniquement 3.3V nécessite un petit régulateur 3.3V (p. ex. AMS1117-3.3 / LM1117-3.3) alimenté par cette broche 5V. La ligne TX du GPS est de toute façon en logique 3.3V, ce qui est sans danger pour l'ESP32.",
  "(one pole sets, the other resets). All of them need 3.5V or more — run them from a 5V pin.":
    "(un pôle l'active, l'autre le réinitialise). Tous nécessitent 3.5V ou plus — alimentez-les depuis une broche 5V.",
  "(sensor pulls LOW on magnet). Place the magnet on the rotating part, the sensor on the stationary part.":
    "(le capteur tire à LOW en présence de l'aimant). Placez l'aimant sur la partie mobile et le capteur sur la partie fixe.",
  "(±0.5°C typical, ±0.25° over a narrow band), but the E4 has no OneWire pin — AUX7 is OFF, and the only broken-out bidirectional GPIOs are SDA/SCL on the I2C header, so it rules out I2C devices and a GPS there. Reading each device's 64-bit serial number is the other fiddly part.":
    "(±0.5°C typique, ±0.25° sur une plage étroite), mais la E4 n'a pas de broche OneWire — AUX7 est OFF, et les seuls GPIO bidirectionnels accessibles sont SDA/SCL sur le connecteur I2C, ce qui exclut alors les périphériques I2C et un GPS à cet endroit. Lire le numéro de série 64 bits de chaque capteur est l'autre partie délicate.",
  ") and":
    ") et",
  ") and the three":
    ") ainsi que les trois cavaliers",
  ", and":
    ", et",
  ", back into Config.h in place of the":
    ", dans Config.h à la place du",
  ", choosing a genuinely free GPIO — and remember GPIO34/35/36/39 are input-only and cannot drive a bidirectional OneWire bus. The only broken-out bidirectional GPIOs are":
    ", en choisissant une GPIO réellement libre — et n'oubliez pas que GPIO34/35/36/39 sont en entrée seule et ne peuvent pas piloter un bus OneWire bidirectionnel. Les seules GPIO bidirectionnelles accessibles sont",
  ", factory jumper caps off, GPIO15 → M-TX wire fitted.":
    ", cavaliers d'usine retirés, fil GPIO15 → M-TX posé.",
  ", its own dedicated pins. The":
    ", ses propres broches dédiées. La sortie",
  ", not \"NONE\" — NONE is not a valid OnStepX value and will not compile.":
    ", et non « NONE » — NONE n'est pas une valeur OnStepX valide et ne compilera pas.",
  ", then flash and open the serial monitor. Every detected device is listed. Copy the one you want, e.g.":
    ", puis flashez et ouvrez le moniteur série. Chaque périphérique détecté est listé. Copiez celui que vous voulez, p. ex.",
  ". A KY-003-style module adds its own pull-up to 5V — that one does need a divider (1kΩ series + 2kΩ to GND). OUT → X-MIN, VCC → 5V, GND → GND. Configure":
    ". Un module de type KY-003 ajoute son propre pull-up vers 5V — celui-là nécessite bien un diviseur (1kΩ en série + 2kΩ vers GND). OUT → X-MIN, VCC → 5V, GND → GND. Configurez",
  ". Note the value is":
    ". Notez que la valeur est",
  ". With the normal E4 setup (4× TMC2209 on UART) there is therefore":
    ". Avec la configuration E4 normale (4× TMC2209 en UART), il n'y a donc",
  "1-Wire temp":
    "Temp. 1-Wire",
  "10µF 16V electrolytic":
    "Électrolytique 10µF 16V",
  "12–24V DC on Vin (board max 22.5A); heater + bed outputs 15A max; onboard 5V buck (2A) and 3.3V LDO":
    "12–24V DC sur Vin (carte 22.5A max) ; sorties heater + bed 15A max ; convertisseur 5V intégré (2A) et régulateur LDO 3.3V",
  "12–24V PSU — Main DC power supply (12–24V)":
    "Alim 12–24V — Alimentation DC principale (12–24V)",
  "1kΩ → PC817/4N35 LED anode (+)":
    "1kΩ → anode (+) de la LED du PC817/4N35",
  "3.3V reg":
    "Régul. 3.3V",
  "3.3V regulator":
    "Régulateur 3.3V",
  "4.5–24V — not a 3.3V part":
    "4.5–24V — pas un composant 3.3V",
  "4.5–5V (it carries an A3144)":
    "4.5–5V (il embarque un A3144)",
  "4× TMC2209 soldered on board, UART at 460800 baud (addresses X=1, Y=3, Z=0, E=2), VREF unconnected — current is UART-only":
    "4× TMC2209 soudés sur la carte, UART à 460800 bauds (adresses X=1, Y=3, Z=0, E=2), VREF non connecté — le courant se règle uniquement par UART",
  ": SDA↔M-RX, SCL↔M-TX and the three xDIAG-EN caps":
    ": SDA↔M-RX, SCL↔M-TX et les trois cavaliers xDIAG-EN",
  ": Z-min pin of ZDIAG-EN to M-TX on the TMC UART header":
    ": broche Z-min de ZDIAG-EN vers M-TX sur le connecteur TMC UART",
  ": focuser1 is the":
    ": focuser1 est le",
  ": the ESP32 routes its hardware serial port (Serial2) to GPIO21/22, so nothing on the board has to be modified.":
    ": l'ESP32 redirige son port série matériel (Serial2) vers GPIO21/22, donc rien n'est à modifier sur la carte.",
  "A GPS module provides automatic date/time and location to OnStepX. The most common module is the GY-GPSV3 (NEO-M8N or NEO-6M). On the E4 the GPS goes on the":
    "Un module GPS fournit automatiquement la date, l'heure et la position à OnStepX. Le module le plus courant est le GY-GPSV3 (NEO-M8N ou NEO-6M). Sur la E4, le GPS se branche sur le",
  "A bare sensor has an open-collector output, so TE's on-board 4.7kΩ pull-up to 3.3V keeps it safe — no divider. A KY-003 module adds its own pull-up to 5V, and GPIO36 is NOT 5V-tolerant: use a divider — 1kΩ in series from the module output, 2kΩ from the GPIO node to GND (5V × 2/3 ≈ 3.3V). Swapping the two resistors gives ~1.7V, which the ESP32 will not read as a reliable HIGH.":
    "Un capteur nu a une sortie à collecteur ouvert, donc le pull-up embarqué de 4.7kΩ vers 3.3V sur TE le protège — pas de diviseur. Un module KY-003 ajoute son propre pull-up vers 5V, et GPIO36 ne tolère PAS le 5V : utilisez un diviseur — 1kΩ en série depuis la sortie du module, 2kΩ du nœud GPIO vers GND (5V × 2/3 ≈ 3.3V). Inverser les deux résistances donne ~1.7V, que l'ESP32 ne lira pas comme un HIGH fiable.",
  "AMS1117-3.3 / LM1117-3.3 module":
    "Module AMS1117-3.3 / LM1117-3.3",
  "Active LOW — short to GND = limit triggered. Already LOW in the stock E4 Config.h":
    "Actif LOW — court-circuit vers GND = limite déclenchée. Déjà à LOW dans le Config.h d'origine de la E4",
  "Almost always a pin conflict rather than a wiring fault: Axis3 and Axis5 share STEP/DIR, so if both (or the wrong one) are enabled they fight. Set":
    "Presque toujours un conflit de broches plutôt qu'un défaut de câblage : Axis3 et Axis5 partagent STEP/DIR, donc si les deux (ou le mauvais) sont activés, ils se contrarient. Réglez",
  "Alternative when the I2C bus is in use — X-MIN":
    "Alternative quand le bus I2C est utilisé — X-MIN",
  "Axis3 — shares MOT-Z with Axis5, see the Focuser section":
    "Axis3 — partage MOT-Z avec l'Axis5, voir la section Focuseur",
  "Axis4 DIR":
    "DIR Axis4",
  "Axis4 STEP":
    "STEP Axis4",
  "Axis4 is the MOT-E (E0-AXIS) output and uses dedicated pins (GPIO16 STEP, GPIO17 DIR) — no pin-sharing conflicts. Enabled as TMC2209 in the stock E4 Config.h.":
    "Axis4 est la sortie MOT-E (E0-AXIS) et utilise des broches dédiées (GPIO16 STEP, GPIO17 DIR) — aucun conflit de partage de broches. Activé en TMC2209 dans le Config.h d'origine du E4.",
  "Axis5 shares STEP/DIR pins with Axis3 (rotator). Only one can be active at a time. Enabled as TMC2209 in the stock E4 Config.h.":
    "Axis5 partage les broches STEP/DIR avec Axis3 (rotateur). Un seul peut être actif à la fois. Activé en TMC2209 dans le Config.h d'origine du E4.",
  "BME280 — Weather sensor — temp / humidity / pressure":
    "BME280 — Capteur météo — température / humidité / pression",
  "BME280, DS3231 — or GPS RX (Serial2)":
    "BME280, DS3231 — ou RX du GPS (Serial2)",
  "BME280, DS3231 — or GPS TX (Serial2)":
    "BME280, DS3231 — ou TX du GPS (Serial2)",
  "Battery-backed real-time clock":
    "Horloge temps réel sauvegardée par pile",
  "Board overview, GPIO map & interactive diagram":
    "Présentation de la carte, carte des GPIO et schéma interactif",
  "Boot-strap pin, held low by a 1.8kΩ pull-down":
    "Broche de strapping au démarrage, maintenue basse par une résistance de rappel de 1.8kΩ",
  "Both on GPIO13. Current OnStepX refuses both at once (this configurator's build service turns them OFF); on the FAN MOSFET the LED also needs STATUS_LED_ON_STATE HIGH":
    "Tous deux sur GPIO13. L'OnStepX actuel refuse les deux à la fois (le service de compilation de ce configurateur les met sur OFF) ; sur le MOSFET FAN, la LED nécessite aussi STATUS_LED_ON_STATE HIGH",
  "Built-in ESP32 wireless & Bluetooth":
    "WiFi et Bluetooth intégrés à l'ESP32",
  "Buzzer — Status buzzer (shared with the FAN output)":
    "Buzzer — Buzzer d'état (partagé avec la sortie FAN)",
  "CHECK THE GPIO15 → M-TX WIRE (Z-min pin of ZDIAG-EN → M-TX on the TMC UART header). This is the #1 cause — it must be securely connected.":
    "VÉRIFIEZ LE FIL GPIO15 → M-TX (broche Z-min de ZDIAG-EN → M-TX sur le connecteur TMC UART). C'est la cause n°1 — il doit être solidement connecté.",
  "Check the GPIO15 → M-TX wire and that the factory SDA↔M-RX / SCL↔M-TX caps are off.":
    "Vérifiez le fil GPIO15 → M-TX et que les cavaliers d'usine SDA↔M-RX / SCL↔M-TX sont retirés.",
  "Compatible sensors, part numbers & specs":
    "Capteurs compatibles, références et caractéristiques",
  "Confirm the factory jumper caps are removed and only the GPIO15 → M-TX wire is fitted.":
    "Vérifiez que les cavaliers d'usine sont retirés et que seul le fil GPIO15 → M-TX est posé.",
  "Confirmed against":
    "Vérifié dans",
  "Connect to the I2C header (4-pin 2.54mm header in the centre block: 5V, GND, SDA, SCL — no 3.3V). Remove the factory SDA↔M-RX / SCL↔M-TX caps first. A purple 3.3V-only GY-BME280 needs a 3.3V regulator; 5V-ready modules (regulator + level shifter) can use the 5V pin.":
    "Branchez-le sur le connecteur I2C (connecteur 4 broches 2.54mm dans le bloc central : 5V, GND, SDA, SCL — pas de 3.3V). Retirez d'abord les cavaliers d'usine SDA↔M-RX / SCL↔M-TX. Un GY-BME280 violet uniquement 3.3V nécessite un régulateur 3.3V ; les modules compatibles 5V (régulateur + adaptateur de niveau) peuvent utiliser la broche 5V.",
  "Connector positions mirror the real FYSETC E4 board: the":
    "La position des connecteurs reproduit la vraie carte FYSETC E4 : le bornier à vis",
  "Critical — jumpers and the TMC UART wire.":
    "Critique — cavaliers et fil TMC UART.",
  "DEC/Alt — Declination / Altitude stepper":
    "DEC/Alt — Moteur pas à pas déclinaison / altitude",
  "DS18B20 — OneWire digital temperature sensor":
    "DS18B20 — Capteur de température numérique OneWire",
  "DS3231 VCC — the ZS-042 pulls SDA/SCL up to its VCC, so keep it at 3.3V":
    "VCC du DS3231 — le ZS-042 tire SDA/SCL vers son VCC, gardez-le donc à 3.3V",
  "DS3231 — Battery-backed real-time clock (ZS-042)":
    "DS3231 — Horloge temps réel sauvegardée par pile (ZS-042)",
  "DSLR camera trigger for astrophotography":
    "Déclenchement d'appareil reflex pour l'astrophotographie",
  "DSLR shutter":
    "Déclencheur reflex",
  "DSLR shutter — DSLR shutter release (via optocoupler)":
    "Déclencheur reflex — Déclenchement de l'obturateur du reflex (via optocoupleur)",
  "Data from":
    "Données issues de",
  "Dew Heater":
    "Résistance chauffante anti-buée",
  "Dew Heater 1 — Dew heater strap 1 (onboard MOSFET)":
    "Résistance chauffante 1 — Bande chauffante anti-buée 1 (MOSFET intégré)",
  "Dew Heater 2 — Dew heater strap 2 (onboard MOSFET)":
    "Résistance chauffante 2 — Bande chauffante anti-buée 2 (MOSFET intégré)",
  "Dew heater via onboard MOSFET":
    "Anti-buée via le MOSFET intégré",
  "Digital temperature sensors on single wire":
    "Capteurs de température numériques sur un seul fil",
  "Divider: 1kΩ series + 2kΩ to GND ≈ 3.3V (the module pulls up to 5V)":
    "Pont diviseur : 1kΩ en série + 2kΩ vers GND ≈ 3.3V (le module tire à 5V)",
  "Drives the FAN MOSFET — status LED, buzzer, reticle or intervalometer":
    "Commande le MOSFET FAN — LED d'état, buzzer, réticule ou intervallomètre",
  "E4 wiring:":
    "Câblage E4 :",
  "ESP32 - Dual-core Xtensa LX6 @ 240MHz":
    "ESP32 - Xtensa LX6 double cœur à 240MHz",
  "ESP32-WROOM-32E / 32UE (external antenna) @ 240MHz, 16MB flash":
    "ESP32-WROOM-32E / 32UE (antenne externe) @ 240MHz, flash 16MB",
  "EXT-RST - EXT-RST — external reset header":
    "EXT-RST - EXT-RST — connecteur de réinitialisation externe",
  "Endstop / switch":
    "Butée / contacteur",
  "Every add-on OnStepX supports on the E4":
    "Tous les accessoires qu'OnStepX prend en charge sur la E4",
  "FAN - FAN — switched 2-pin output (AUX8 / FAN_E0)":
    "FAN - FAN — sortie commutée 2 broches (AUX8 / FAN_E0)",
  "FIRST: remove the factory SDA↔M-RX / SCL↔M-TX jumper caps — with them fitted, the I2C lines are wired to the TMC UART bus.":
    "D'ABORD : retirez les cavaliers d'usine SDA↔M-RX / SCL↔M-TX — tant qu'ils sont en place, les lignes I2C sont reliées au bus TMC UART.",
  "FYSETC E4 Wiki":
    "Wiki FYSETC E4",
  "FYSETC E4 board diagram with mounted peripherals":
    "Schéma de la carte FYSETC E4 avec les périphériques montés",
  "FYSETC E4 wiki":
    "wiki officiel FYSETC E4",
  "Factory Marlin jumper caps still installed — they tie the I2C lines to the TMC UART bus and the drivers' DIAG outputs to the endstop inputs.":
    "Cavaliers d'usine Marlin encore en place — ils relient les lignes I2C au bus TMC UART et les sorties DIAG des pilotes aux entrées de fin de course.",
  "Fed from a 5V header pin — the E4 has no 3.3V pin for 3.3V-only I2C modules, GPS or DS18B20.":
    "Alimenté depuis une broche 5V d'un connecteur — l'E4 n'a pas de broche 3.3V pour les modules I2C uniquement 3.3V, le GPS ou le DS18B20.",
  "Field de-rotator for Alt-Az mounts":
    "Dérotateur de champ pour montures alt-azimutales",
  "Finding the serial numbers:":
    "Trouver les numéros de série :",
  "Fit only the GPIO15 → M-TX wire (Z-min pin of ZDIAG-EN → M-TX).":
    "Posez uniquement le fil GPIO15 → M-TX (broche Z-min de ZDIAG-EN → M-TX).",
  "Fix order: (1) check the GPIO15 → M-TX wire, (2) confirm the factory SDA↔M-RX / SCL↔M-TX caps are off, (3) reduce IRUN to ~400mA / IHOLD ~200mA, (4) update to OnStepX v10.20a+. The E4 drivers have no VRef pot (VREF is not connected) — UART is the only current control.":
    "Ordre de correction : (1) vérifiez le fil GPIO15 → M-TX, (2) confirmez que les cavaliers d'usine SDA↔M-RX / SCL↔M-TX sont retirés, (3) réduisez IRUN à ~400mA / IHOLD à ~200mA, (4) passez à OnStepX v10.20a ou plus. Les pilotes de l'E4 n'ont pas de potentiomètre VRef (VREF n'est pas connecté) — l'UART est le seul moyen de régler le courant.",
  "Flash a plain I2C scanner sketch (Wire.begin(21,22), scan 0x03-0x77). Nothing found = hardware. 0x76/0x77/0x68 found = it is the address or chip type in Config.h.":
    "Flashez un simple sketch de scan I2C (Wire.begin(21,22), scan 0x03-0x77). Rien trouvé = matériel. 0x76/0x77/0x68 trouvé = c'est l'adresse ou le type de puce dans Config.h.",
  "Flashing guide & community discussions":
    "Guide de flashage et discussions de la communauté",
  "Foc2/Rot — Focuser 2 or rotator stepper":
    "Foc2/Rot — Moteur pas à pas du focuseur 2 ou du rotateur",
  "Focuser1 — Focuser 1 stepper":
    "Focuser1 — Moteur pas à pas du focuseur 1",
  "Focuser2 active by default on MOT-Z":
    "Focuser2 actif par défaut sur MOT-Z",
  "Full read-back needs the TMC UART on UART0 (jumper M-RX↔RXD0, M-TX↔TXD0) with SERIAL_A_BAUD_DEFAULT OFF — which also takes USB serial away, so remove those caps to flash.":
    "La relecture complète nécessite l'UART TMC sur UART0 (cavaliers M-RX↔RXD0, M-TX↔TXD0) avec SERIAL_A_BAUD_DEFAULT OFF — ce qui supprime aussi le port série USB : retirez donc ces cavaliers pour flasher.",
  "GPIO13 (FAN) — set STATUS_LED and STATUS_BUZZER OFF, they share this output":
    "GPIO13 (FAN) — mettez STATUS_LED et STATUS_BUZZER à OFF, ils partagent cette sortie",
  "GPIO16/17 are the default Serial2 pins, but on the E4 they run straight to the onboard MOT E driver — they are not on any header.":
    "GPIO16/17 sont les broches Serial2 par défaut, mais sur la E4 elles sont reliées directement au pilote MOT E intégré — elles ne sont sur aucun connecteur.",
  "GPIO21 on the I2C header (only if it is free) + 4.7kΩ pull-up":
    "GPIO21 sur le connecteur I2C (seulement s'il est libre) + résistance de rappel de 4.7kΩ",
  "GPIO21/22 are the I2C bus. A GPS there means":
    "GPIO21/22 constituent le bus I2C. Un GPS à cet endroit signifie",
  "GPIO34/GPIO35 are input-only on ESP32 — no internal pull-up/down. The E4 has discrete 10kΩ pull-ups to 3.3V on both X-MIN and Y-MIN.":
    "GPIO34/GPIO35 sont en entrée seule sur l'ESP32 — pas de pull-up/pull-down interne. La E4 dispose de pull-ups discrets de 10kΩ vers 3.3V sur X-MIN et Y-MIN.",
  "GPS Module":
    "Module GPS",
  "GPS VCC (through a 3.3V regulator if the module has none)":
    "GPS VCC (via un régulateur 3.3V si le module n'en a pas)",
  "GPS — GPS module — auto time & location":
    "GPS — Module GPS — heure et position automatiques",
  "H1 - H1 — Heater output 1 (AUX5)":
    "H1 - H1 — Sortie chauffante 1 (AUX5)",
  "H1 strap":
    "bande H1",
  "H2 - H2 — Heater output 2 (AUX6)":
    "H2 - H2 — Sortie chauffante 2 (AUX6)",
  "H2 strap":
    "bande H2",
  "Hall (latch)":
    "Hall (à verrouillage)",
  "Hall VCC — the E4 has no 3.3V pin":
    "VCC du capteur Hall — le E4 n'a pas de broche 3.3V",
  "Hardware Guide":
    "Guide matériel",
  "Home SW Axis1, limit":
    "Contacteur d'origine Axis1, limite",
  "Home Y":
    "Origine Y",
  "Home Y — Axis2 home / limit sensor":
    "Origine Y — Capteur d'origine / de limite Axis2",
  "Home sensors & hardware endstops":
    "Capteurs d'origine et butées matérielles",
  "Home/Limit X":
    "Origine/Limite X",
  "Home/Limit X — Axis1 home & emergency-stop limit":
    "Origine/Limite X — Origine Axis1 et limite d'arrêt d'urgence",
  "I2C UART - Centre 12-pin block — I2C · TMC UART · UART0":
    "I2C UART - Bloc central de 12 broches — I2C · TMC UART · UART0",
  "I2C header":
    "connecteur I2C",
  "I2C header SCL → GPS RX":
    "Connecteur I2C SCL → GPS RX",
  "I2C header SDA ← GPS TX":
    "Connecteur I2C SDA ← GPS TX",
  "I2C module":
    "Module I2C",
  "In series with the optocoupler LED on the FAN output (FAN jumper on 5V).":
    "En série avec la LED de l'optocoupleur sur la sortie FAN (cavalier FAN sur 5V).",
  "Interactive Board Diagram & Mounted Hardware":
    "Schéma interactif de la carte et matériel raccordé",
  "JST-XH for motors, endstops, thermistors and fan; screw terminals for power and heaters; 12-pin I2C / TMC UART / UART0 block (5V and GND only, no 3.3V)":
    "JST-XH pour moteurs, butées, thermistances et ventilateur ; borniers à vis pour l'alimentation et les chauffages ; bloc 12 broches I2C / TMC UART / UART0 (5V et GND uniquement, pas de 3.3V)",
  "Judge the UART by its effect: change AXISn_DRIVER_IRUN and check that holding torque and motor temperature follow.":
    "Jugez l'UART par son effet : modifiez AXISn_DRIVER_IRUN et vérifiez que le couple de maintien et la température du moteur suivent.",
  "KY-003 needs 4.5V+, so power it from 5V; its own pull-up then puts 5V on the output, so use a divider (1kΩ + 2kΩ) — GPIO36 is not 5V-tolerant. Wiring: TE Pin 1 (GPIO36) ← Hall OUT, TE Pin 2 ← GND. Config: PEC_SENSE HIGH, PEC_SENSE_PIN 36.":
    "Le KY-003 nécessite 4.5V ou plus, alimentez-le donc en 5V ; sa propre résistance de rappel met alors 5V sur la sortie, utilisez donc un pont diviseur (1kΩ + 2kΩ) — GPIO36 ne tolère pas le 5V. Câblage : TE broche 1 (GPIO36) ← sortie Hall, TE broche 2 ← GND. Config : PEC_SENSE HIGH, PEC_SENSE_PIN 36.",
  "Known issues with verified fixes":
    "Problèmes connus et correctifs vérifiés",
  "LED / Buzzer (switched)":
    "LED / Buzzer (commuté)",
  "LM1117-3.3 — LM1117-3.3 / AMS1117-3.3 regulator":
    "LM1117-3.3 — Régulateur LM1117-3.3 / AMS1117-3.3",
  "Limit on X-MIN armed (switch to GND stops motion)":
    "Limite sur X-MIN armée (un contacteur à la masse arrête le mouvement)",
  "MOT-X (JST-XH 4-pin)":
    "MOT-X (JST-XH 4 broches)",
  "MOT-Y (JST-XH 4-pin)":
    "MOT-Y (JST-XH 4 broches)",
  "MOTE Foc1 - MOT E — Focuser1 motor output (Axis4)":
    "MOTE Foc1 - MOT E — sortie moteur du Focuser1 (Axis4)",
  "MOTX Ra/Azm - MOT X — Ra/Azm motor output":
    "MOTX Ra/Azm - MOT X — sortie moteur AD/Azm",
  "MOTY DEC - MOT Y — DEC/Alt motor output":
    "MOTY DEC - MOT Y — sortie moteur Déc/Alt",
  "MOTZ Rot/Foc2 - MOT Z — rotator (Axis3) or Focuser2 (Axis5)":
    "MOTZ Rot/Foc2 - MOT Z — rotateur (Axis3) ou Focuser2 (Axis5)",
  "MUST be set explicitly on the E4 — see the warning above. Put it in Extended.config.h, e.g. #define ONE_WIRE_PIN 21 (I2C header SDA, with nothing else on it)":
    "DOIT être défini explicitement sur le E4 — voir l'avertissement ci-dessus. Placez-le dans Extended.config.h, p. ex. #define ONE_WIRE_PIN 21 (SDA du connecteur I2C, sans rien d'autre dessus)",
  "Make sure the factory SDA↔M-RX / SCL↔M-TX caps and the ZDIAG-EN cap are removed.":
    "Assurez-vous que les cavaliers d'usine SDA↔M-RX / SCL↔M-TX et le cavalier ZDIAG-EN sont retirés.",
  "Most recommended. On the E4: I2C header (GPIO21/22).":
    "Le plus recommandé. Sur l'E4 : connecteur I2C (GPIO21/22).",
  "Motor / LED":
    "Moteur / LED",
  "Motorized autofocus with temp compensation":
    "Mise au point motorisée avec compensation en température",
  "Motors run hot on 12V. Root cause: TMC2209 UART comms failure means Config.h current never reaches the driver, and with VREF unconnected the current is uncontrolled.":
    "Les moteurs chauffent en 12V. Cause : un échec de communication UART avec les TMC2209 fait que le courant défini dans Config.h n'atteint jamais le pilote, et comme VREF n'est pas connecté, le courant n'est pas contrôlé.",
  "NEO-M8N / NEO-6M auto time & location":
    "Heure et position automatiques par NEO-M8N / NEO-6M",
  "NTC temperature sensing via TE/TB":
    "Mesure de température par CTN via TE/TB",
  "Needs 3.5V+ — power at 5V, no divider.":
    "Nécessite 3.5V ou plus — alimentez en 5V, sans pont diviseur.",
  "Needs 3.5V+ — power at 5V, no divider. Only one pole triggers — flip the magnet if nothing is detected.":
    "Nécessite 3.5V ou plus — alimentez en 5V, sans pont diviseur. Un seul pôle déclenche — retournez l'aimant si rien n'est détecté.",
  "Needs 4.5V+ — power at 5V. Bare A3144: no divider. KY-003 module: divider (its pull-up goes to 5V).":
    "Nécessite 4.5V ou plus — alimentez en 5V. A3144 nu : pas de pont diviseur. Module KY-003 : pont diviseur (sa résistance de rappel va au 5V).",
  "None — open collector, TE is pulled up to 3.3V on board. Power at 5V":
    "Aucune — collecteur ouvert, TE est tiré à 3.3V sur la carte. Alimentez en 5V",
  "None — open collector. Power at 5V":
    "Aucune — collecteur ouvert. Alimentez en 5V",
  "Not available":
    "Non disponible",
  "OFF in the stock E4 Config.h, which gives MOT-Z to Axis5 (focuser2). Set AXIS5_DRIVER_MODEL OFF first":
    "OFF dans le Config.h d'origine du E4, qui attribue MOT-Z à Axis5 (focuseur 2). Réglez d'abord AXIS5_DRIVER_MODEL sur OFF",
  "OFF on the E4 — define ONE_WIRE_PIN yourself (GPIO21/22 only)":
    "OFF sur la E4 — définissez ONE_WIRE_PIN vous-même (GPIO21/22 uniquement)",
  "On-board pull-up on X-MIN/Y-MIN":
    "Pull-up intégré sur X-MIN/Y-MIN",
  "OnStepX E4 branch":
    "la branche E4 d'OnStepX",
  "OnStepX supports home sensors (end-stops) and limit switches on each axis. The E4 has dedicated pins for Axis1 home (X-MIN / GPIO34) and Axis2 home (Y-MIN / GPIO35). GPIO34 is input-only (no internal pull-up) — the E4 has a 10kΩ pull-up to 3.3V, a 100nF filter capacitor and a 100Ω series resistor on each of X-MIN and Y-MIN. Remove the XDIAG-EN / YDIAG-EN jumper caps, or the drivers' DIAG outputs drive these inputs.":
    "OnStepX prend en charge des capteurs d'origine (butées) et des contacteurs de fin de course sur chaque axe. La E4 possède des broches dédiées pour l'origine d'Axis1 (X-MIN / GPIO34) et d'Axis2 (Y-MIN / GPIO35). GPIO34 est en entrée seule (pas de pull-up interne) — la E4 a un pull-up de 10kΩ vers 3.3V, un condensateur de filtrage de 100nF et une résistance série de 100Ω sur X-MIN comme sur Y-MIN. Retirez les cavaliers XDIAG-EN / YDIAG-EN, sinon les sorties DIAG des pilotes commandent ces entrées.",
  "OnStepX supports up to 6 focusers (Axis4–Axis9). The E4 has two:":
    "OnStepX prend en charge jusqu'à 6 focuseurs (Axis4–Axis9). Le E4 en a deux :",
  "Onboard driver only — no header":
    "Pilote intégré uniquement — pas de connecteur",
  "Or set both to OFF:":
    "Ou réglez les deux sur OFF :",
  "PC817/4N35 LED cathode (–)":
    "Cathode (–) de la LED du PC817/4N35",
  "PEC Hall":
    "Hall PEC",
  "PEC Hall — PEC index Hall sensor":
    "PEC Hall — Capteur Hall d'index PEC",
  "PEC Index":
    "Index PEC",
  "PWM heater control & dew point compensation":
    "Commande PWM du chauffage et compensation du point de rosée",
  "PWR Vin·GND - Main power input — Vin / GND screw terminal":
    "PWR Vin·GND - Entrée d'alimentation principale — bornier à vis Vin / GND",
  "Periodic error correction with Hall sensor":
    "Correction d'erreur périodique avec capteur à effet Hall",
  "Pins.FYSETC_E4.h defines SPARE_RX_PIN as OFF in both TMC-UART branches":
    "Pins.FYSETC_E4.h définit SPARE_RX_PIN à OFF dans les deux branches TMC-UART",
  "Plug in the motors":
    "Branchez les moteurs",
  "Power / regulator":
    "Alimentation / régulateur",
  "Power LED":
    "LED d'alimentation",
  "Power LED — Power-on indicator LED":
    "LED d'alimentation — Voyant de mise sous tension",
  "Power the sensor from 5V (the E4 has no 3.3V pin). A bare open-collector sensor needs no divider; a KY-003 module (own 5V pull-up) needs 1kΩ series + 2kΩ to GND.":
    "Alimentez le capteur en 5V (la E4 n'a pas de broche 3.3V). Un capteur nu à collecteur ouvert n'a pas besoin de diviseur ; un module KY-003 (avec son propre pull-up 5V) nécessite 1kΩ en série + 2kΩ vers GND.",
  "Ra/Azm — Right-Ascension / Azimuth stepper":
    "Ra/Azm — Moteur pas à pas ascension droite / azimut",
  "Remember: remove the factory jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) and fit only the GPIO15 → M-TX wire. 12V recommended (24V dew heaters run at 4× power). Two E4 versions exist (internal ceramic vs external IPEX antenna) — both work identically.":
    "À retenir : retirez les cavaliers d'usine (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) et installez uniquement le fil GPIO15 → M-TX. 12V recommandé (les résistances chauffantes fonctionnent à 4× la puissance en 24V). Il existe deux versions de l'E4 (antenne céramique interne ou antenne IPEX externe) — les deux fonctionnent de manière identique.",
  "Remove the Marlin jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) before use and ignore the board's Marlin heater wiring notes — OnStepX drives these pins directly.":
    "Retirez les cavaliers Marlin (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) avant utilisation et ignorez les indications de câblage des résistances chauffantes Marlin de la carte — OnStepX pilote ces broches directement.",
  "Remove the SDA↔M-RX and SCL↔M-TX caps and the three xDIAG-EN caps.":
    "Retirez les cavaliers SDA↔M-RX et SCL↔M-TX ainsi que les trois cavaliers xDIAG-EN.",
  "Remove the factory jumper caps":
    "Retirez les cavaliers d'usine",
  "Remove the factory jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN); wire the Z-min pin of ZDIAG-EN (GPIO15) to M-TX":
    "Retirez les cavaliers d'usine (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) ; reliez la broche Z-min de ZDIAG-EN (GPIO15) à M-TX",
  "Remove the single centre SMD filter capacitor beside the X-MIN pins — the two outer parts are resistors, leave them. No-modification alternative: the I2C header (GPS TX → SDA/GPIO21, SERIAL_GPS Serial2, SERIAL_GPS_RX 21, SERIAL_GPS_TX 22) when no DS3231/BME280 is fitted. Config: TIME_LOCATION_SOURCE GPS, SERIAL_GPS_BAUD 9600.":
    "Retirez le seul condensateur de filtrage CMS central à côté des broches X-MIN — les deux composants extérieurs sont des résistances, laissez-les. Alternative sans modification : le connecteur I2C (GPS TX → SDA/GPIO21, SERIAL_GPS Serial2, SERIAL_GPS_RX 21, SERIAL_GPS_TX 22) lorsqu'aucun DS3231/BME280 n'est installé. Config : TIME_LOCATION_SOURCE GPS, SERIAL_GPS_BAUD 9600.",
  "Required — the E4 pinmap assigns no GPS port":
    "Obligatoire — le pinmap E4 n'attribue aucun port GPS",
  "Reset btn":
    "Bouton reset",
  "Reset btn — External reset button":
    "Bouton reset — Bouton de réinitialisation externe",
  "Reticle — Illuminated reticle lamp":
    "Réticule — Éclairage de réticule",
  "Rotator off — MOT-Z goes to Focuser2":
    "Rotateur désactivé — MOT-Z passe au Focuser2",
  "SD - MicroSD card slot":
    "SD - Emplacement pour carte MicroSD",
  "Same, at supply voltage — use 2.2kΩ at 12V, 4.7kΩ at 24V":
    "Idem, à la tension d'alimentation — utilisez 2.2kΩ en 12V, 4.7kΩ en 24V",
  "Search features, pins, directives…":
    "Rechercher fonctions, broches, directives…",
  "Search the E4 guide":
    "Rechercher dans le guide E4",
  "Status LED, buzzer, reticle, intervalometer":
    "LED d'état, buzzer, réticule, intervallomètre",
  "Steps/° for Axis1 (Axis2 too) — a placeholder, you MUST set this for your gearing (Calculator tab)":
    "Pas/° pour l'Axis1 (et l'Axis2) — valeur provisoire, vous DEVEZ la régler selon vos engrenages (onglet Calculateur)",
  "Switched low-side output, not a logic pin":
    "Sortie commutée côté masse, pas une broche logique",
  "TB - TB — Thermistor input 2":
    "TB - TB — Entrée thermistance 2",
  "TE - TE — Thermistor input 1 / PEC":
    "TE - TE — Entrée thermistance 1 / PEC",
  "TMC driver":
    "Pilote TMC",
  "TMC1 Ra/Azm - Axis1 (Ra/Azm) stepper driver — TMC2209 UART":
    "TMC1 Ra/Azm - Pilote pas à pas Axis1 (AD/Azm) — TMC2209 UART",
  "TMC2 DEC - Axis2 (DEC/Alt) stepper driver — TMC2209 UART":
    "TMC2 DEC - Pilote pas à pas Axis2 (Déc/Alt) — TMC2209 UART",
  "TMC3 Rot/Foc2 - Axis3 rotator / Axis5 focuser2 — TMC2209 UART":
    "TMC3 Rot/Foc2 - Rotateur Axis3 / focuseur2 Axis5 — TMC2209 UART",
  "Temp, humidity, pressure for dew point":
    "Température, humidité, pression pour le point de rosée",
  "The E4 ships set up for Marlin. Remove the two jumper caps that bridge the I2C and TMC UART headers (":
    "La E4 est livrée configurée pour Marlin. Retirez les deux cavaliers qui relient les connecteurs I2C et TMC UART (",
  "The I2C bus is taken by the GPS":
    "Le bus I2C est occupé par le GPS",
  "The I2C header only has":
    "Le connecteur I2C ne fournit que",
  "The OneWire bus allows multiple DS18B20 temperature sensors on a single wire. Up to 8 devices supported.":
    "Le bus OneWire permet de brancher plusieurs capteurs de température DS18B20 sur un seul fil. Jusqu'à 8 périphériques pris en charge.",
  "The TMC UART is not reaching the drivers, so the Config.h currents never arrive. The E4's TMC2209s have their VREF pin unconnected, so without UART the current is uncontrolled.":
    "L'UART TMC n'atteint pas les pilotes, donc les courants de Config.h ne sont jamais appliqués. Les TMC2209 de la E4 ont leur broche VREF non connectée : sans UART, le courant n'est pas contrôlé.",
  "The Z-MIN connector is opto-isolated — not usable":
    "Le connecteur Z-MIN est opto-isolé — inutilisable",
  "The pinmap sets":
    "Le pinmap définit",
  "Thermistor / Hall":
    "Thermistance / Hall",
  "Thermistor — NTC thermistor — focuser / dew temp":
    "Thermistance — Thermistance CTN — température focuseur / anti-buée",
  "USB - Firmware upload & serial monitor":
    "USB - Téléversement du firmware et moniteur série",
  "USB / PC — Host computer / firmware upload":
    "USB / PC — Ordinateur hôte / téléversement du firmware",
  "Unipolar Hall switch":
    "Interrupteur Hall unipolaire",
  "Use the 3.3V variant of the module, or drop the 5V rail: a plain red LED in series gives ~3.1–3.4V (it drops ~1.6–1.9V) and the <1mA draw is fine.":
    "Utilisez la variante 3.3V du module, ou abaissez le rail 5V : une simple LED rouge en série donne ~3.1–3.4V (chute de ~1.6–1.9V) et la consommation <1mA ne pose pas de problème.",
  "Verify 12–24V DC on Vin/GND and that the power LED lights.":
    "Vérifiez la présence de 12–24V DC sur Vin/GND et que la LED d'alimentation s'allume.",
  "Vin / GND screw terminal":
    "bornier à vis Vin / GND",
  "Vin GND - Vin / GND tap — 3×2 pin header":
    "Vin GND - Dérivation Vin / GND — connecteur 3×2 broches",
  "Why the I2C header:":
    "Pourquoi le connecteur I2C :",
  "Wire GPIO15 → M-TX":
    "Câblez GPIO15 → M-TX",
  "Wire from the Z-min pin of ZDIAG-EN to M-TX on the TMC UART header":
    "Fil de la broche Z-min de ZDIAG-EN vers M-TX sur le connecteur TMC UART",
  "With USB serial on, the E4 pinmap runs the TMC UART transmit-only: SERIAL_TMC_RX is a dummy pin (GPIO0), so driver status cannot be read back. The drivers are soldered on — there is no module brand or seating to check.":
    "Avec le port série USB actif, le pinmap E4 utilise l'UART TMC en émission seule : SERIAL_TMC_RX est une broche factice (GPIO0), donc l'état des pilotes ne peut pas être relu. Les pilotes sont soudés — il n'y a ni marque de module ni mise en place à vérifier.",
  "Wrong chip: many boards sold as \"BME280\" are actually BMP280 (no humidity, different chip ID). Use BMP280 / BMP280_0x76 instead.":
    "Mauvaise puce : beaucoup de cartes vendues comme « BME280 » sont en réalité des BMP280 (pas d'humidité, ID de puce différent). Utilisez plutôt BMP280 / BMP280_0x76.",
  "X-MIN - X-MIN — Home Axis1 / Limit / GPS":
    "X-MIN - X-MIN — Origine Axis1 / Limite / GPS",
  "X-MIN alternative only — which cap to remove:":
    "Alternative X-MIN uniquement — quel condensateur retirer :",
  "Y-MIN - Y-MIN — Home Axis2":
    "Y-MIN - Y-MIN — Origine Axis2",
  "Z-MIN - Z-MIN — opto-isolated probe input (GPIO15 = TMC UART TX)":
    "Z-MIN - Z-MIN — entrée de sonde opto-isolée (GPIO15 = TMC UART TX)",
  "Z-min pin of ZDIAG-EN (GPIO15) → M-TX on the TMC UART header. Required for driver current control.":
    "Broche Z-min de ZDIAG-EN (GPIO15) → M-TX sur le connecteur UART TMC. Indispensable pour le contrôle du courant des pilotes.",
  "Z-min pin of the ZDIAG-EN header (GPIO15)":
    "broche Z-min du connecteur ZDIAG-EN (GPIO15)",
  "ZDIAG-EN (Z-min pin)":
    "ZDIAG-EN (broche Z-min)",
  "a free GPIO":
    "une GPIO libre",
  "accepts only OFF, DS3231, SD3031, TEENSY, GPS or NTP, and GPS means a serial connection — so the header is simply used as two serial pins.":
    "n'accepte que OFF, DS3231, SD3031, TEENSY, GPS ou NTP, et GPS signifie une liaison série — le connecteur est donc simplement utilisé comme deux broches série.",
  "and that GPS TX goes to the pin set in":
    "et que le TX du GPS va bien sur la broche définie dans",
  "at OFF until Focuser 1 works, then add the second axis.":
    "à OFF jusqu'à ce que le focuseur 1 fonctionne, puis ajoutez le second axe.",
  "bipolar latch":
    "verrou bipolaire",
  "calculate it":
    "à calculer",
  "caps. Then fit one wire from the":
    ". Posez ensuite un fil de la",
  "connector with its own GPIO16 (STEP) / GPIO17 (DIR), and":
    "avec ses propres GPIO16 (STEP) / GPIO17 (DIR), et",
  "connector, sharing GPIO14/GPIO12 with Axis3 (rotator). The stock E4 Config.h enables both focusers (Axis3 OFF).":
    ", partageant GPIO14/GPIO12 avec Axis3 (rotateur). Le Config.h d'origine du E4 active les deux focuseurs (Axis3 à OFF).",
  "delay between frames (1–3600),":
    "délai entre les images (1–3600),",
  "drivers and central":
    "pilotes et le bloc central de connecteurs",
  "endstops along the top,":
    "en haut,",
  "exposure length (0–3600),":
    "durée d'exposition (0–3600),",
  "for":
    "pour",
  "for Focuser 1 and hold":
    "pour le focuseur 1 et laissez",
  "frame count (0–255),":
    "nombre d'images (0–255),",
  "header block in the middle, and":
    "au milieu, et les sorties moteur",
  "in OnStepX —":
    "dans OnStepX —",
  "index sensor":
    "capteur d'index",
  "is the FEATURE number (so":
    "est le numéro de FEATURE (donc",
  "is wired in around it — power supply & regulator, 4 motors, GPS, RTC, BME280, DS18B20, thermistor, PEC Hall, 2 dew heaters, DSLR shutter, reticle, buzzer, power LED, endstops and USB. Click any board connector":
    "sont raccordés autour — alimentation et régulateur, 4 moteurs, GPS, RTC, BME280, DS18B20, thermistance, Hall PEC, 2 résistances chauffantes anti-buée, déclencheur reflex, réticule, buzzer, LED d'alimentation, butées et USB. Cliquez sur n'importe quel connecteur de la carte",
  "motor outputs with":
    "avec les thermistances",
  "no DS3231 RTC and no BME280":
    "pas de RTC DS3231 ni de BME280",
  "no I2C GPS option":
    "aucune option GPS I2C",
  "no OneWire pin at all":
    "aucune broche OneWire",
  "no divider":
    "ne nécessite aucun diviseur",
  "on the":
    "sur le connecteur",
  "on the E4 (it goes through an optocoupler). If you use the X-MIN alternative and X-MIN and Y-MIN are both home sensors, move one":
    "sur la E4 (elle passe par un optocoupleur). Si vous utilisez l'alternative X-MIN et que X-MIN et Y-MIN sont tous deux des capteurs de position d'origine, déplacez un",
  "on the I2C header, so OneWire rules out I2C devices and a GPS there — the TE/TB thermistor inputs are usually the easier route.":
    "sur le connecteur I2C, donc le OneWire exclut les périphériques I2C et un GPS à cet endroit — les entrées thermistance TE/TB sont généralement la voie la plus simple.",
  "on the JST-XH MOT connectors (4-wire bipolar steppers)":
    "sur les connecteurs JST-XH MOT (moteurs pas à pas bipolaires 4 fils)",
  "on the TMC UART header — that is how OnStepX sets the driver currents. Leave the FAN and Z-probe voltage jumpers; put the FAN one on 5V if you use the status LED or buzzer.":
    "sur le connecteur TMC UART — c'est ainsi qu'OnStepX règle le courant des pilotes. Laissez les cavaliers de tension FAN et Z-probe ; placez celui du FAN sur 5V si vous utilisez la LED d'état ou le buzzer.",
  "on the right, the 4":
    "à droite, les 4",
  "one is the filter capacitor.":
    "est le condensateur de filtrage.",
  "output (MOT-Z) carries":
    "(MOT-Z) porte",
  "over the TMC UART. If the GPIO15 → M-TX wire is missing or loose, the drivers never get those values and the current is uncontrolled — the usual cause of \"motors run scorching hot\". On first power-up, touch-check the motors and confirm that changing IRUN changes holding torque.":
    "via l'UART TMC. Si le fil GPIO15 → M-TX est absent ou mal fixé, les pilotes ne reçoivent jamais ces valeurs et le courant n'est pas contrôlé — la cause habituelle des « moteurs brûlants ». À la première mise sous tension, touchez les moteurs pour vérifier et confirmez que modifier IRUN change le couple de maintien.",
  "per the comment in Config.h itself — temporarily set":
    "selon le commentaire de Config.h lui-même — réglez temporairement",
  "peripheral for details, GPIO mapping and wiring guidance.":
    "périphérique pour afficher les détails, la correspondance GPIO et les conseils de câblage.",
  "pin of the header block. Their outputs are open-collector: the E4's 10kΩ pull-up to 3.3V is the pull-up, so a bare sensor needs":
    "du bloc de connecteurs. Leurs sorties sont à collecteur ouvert : le pull-up de 10kΩ vers 3.3V de la E4 fait office de résistance de rappel, donc un capteur nu",
  "power supply":
    "alimentation",
  "put the GPS on the I2C header (TX → SDA/GPIO21, RX → SCL/GPIO22) with":
    "placez le GPS sur le connecteur I2C (TX → SDA/GPIO21, RX → SCL/GPIO22) avec",
  "screw terminal and":
    "et les butées",
  "start /":
    "démarrer /",
  "stop, and":
    "arrêter, et",
  "switch / Hall":
    "contacteur / Hall",
  "tab fetches the right source for you.)":
    "récupère pour vous les bonnes sources.)",
  "the E4 brings no spare serial pins out. GPIO16/17 (default Serial2) go only to the onboard MOT E driver, and X-MIN has a 100nF filter capacitor that corrupts 9600-baud data unless it is removed. The I2C header lines have no filter parts, and the ESP32 can put Serial2 on any GPIO. There is":
    "la E4 ne sort aucune broche série libre. GPIO16/17 (Serial2 par défaut) ne vont qu'au pilote MOT E intégré, et X-MIN comporte un condensateur de filtrage de 100nF qui corrompt les données à 9600 bauds s'il n'est pas retiré. Les lignes du connecteur I2C n'ont aucun composant de filtrage, et l'ESP32 peut placer Serial2 sur n'importe quel GPIO. Il n'existe",
  "the four TMC2209s are soldered on with their VREF pin unconnected, so motor current is set only by":
    "les quatre TMC2209 sont soudés avec leur broche VREF non connectée, le courant moteur est donc réglé uniquement par",
  "the intervalometer is driven through the auxiliary-feature commands, where":
    "l'intervallomètre est piloté par les commandes des fonctions auxiliaires, où",
  "thermistors along the bottom.":
    "en bas.",
  "to read back count, exposure and delay. Or just use SWS → Camera tab → Duration / Delay / Frames.":
    "pour relire le nombre, l'exposition et le délai. Ou utilisez simplement SWS → onglet Camera → Duration / Delay / Frames.",
  "unipolar switch":
    "interrupteur unipolaire",
  "unless you override it yourself. Add an explicit":
    "sauf si vous la redéfinissez vous-même. Ajoutez explicitement un",
  "v1.1.7 or newer (build service: 1.1.14)":
    "v1.1.7 ou plus récente (service de compilation : 1.1.14)",
  "v2.2.2 or newer (build service: 2.2.4)":
    "v2.2.2 ou plus récente (service de compilation : 2.2.4)",
  "v2.3.5 or newer (this configurator's build service uses 2.4.2)":
    "v2.3.5 ou plus récente (le service de compilation de ce configurateur utilise la 2.4.2)",
  "your gearing":
    "votre démultiplication",
  "~2048 full steps/rev at the output shaft (32 steps/rev motor × 1/64 gearbox), ~0.1–0.3A":
    "~2048 pas entiers/tour sur l'arbre de sortie (moteur 32 pas/tour × réducteur 1/64), ~0.1–0.3A",
  "— A3144, US1881, US5881 and SS441A all need 3.5–4.5V or more, and the E4 has no 3.3V pin anyway, so power them from a":
    "— les A3144, US1881, US5881 et SS441A exigent tous 3.5–4.5V ou plus, et la E4 n'a de toute façon pas de broche 3.3V : alimentez-les donc depuis une broche",
  "— check the branch list for an E4-specific branch, otherwise take the current release. (Simpler: the":
    "— consultez la liste des branches pour une branche spécifique à l'E4, sinon prenez la version actuelle. (Plus simple : l'onglet",
  "— no board modification. The header has only 5V, so a 3.3V-only module needs a small 3.3V regulator. Fall back to X-MIN (which needs its filter capacitor removed) only if a DS3231 or BME280 must stay on the I2C bus.":
    "— sans modification de la carte. Le connecteur ne fournit que du 5V, un module uniquement 3.3V nécessite donc un petit régulateur 3.3V. Ne vous rabattez sur X-MIN (dont il faut retirer le condensateur de filtrage) que si un DS3231 ou un BME280 doit rester sur le bus I2C.",
  "— the E4 has no barrel jack, so a plug-and-socket PSU needs a screw-terminal pigtail. 5A min with peripherals. Watch polarity: Vin = +, GND = –.":
    "— l'E4 n'a pas de prise jack d'alimentation, une alimentation à fiche nécessite donc un câble adaptateur pour bornier à vis. 5A minimum avec les périphériques. Attention à la polarité : Vin = +, GND = –.",
  "— the south pole turns it on, removing the magnet turns it off, so magnet polarity matters. US5881: also unipolar. US1881 is a":
    "— le pôle sud l'active, retirer l'aimant le désactive, donc la polarité de l'aimant compte. US5881 : également unipolaire. Le US1881 est un",
  "— which is why only one of those two can ever be enabled. If a focuser motor has no holding torque, this swap is the usual reason.":
    "— c'est pourquoi un seul des deux peut être activé. Si un moteur de focuseur n'a aucun couple de maintien, cette inversion en est la cause habituelle.",
  "⚠ AUX7 is not available:":
    "⚠ AUX7 n'est pas disponible :",
  "⚠ Factory jumpers:":
    "⚠ Cavaliers d'usine :",
  "⚠ Focuser 1 goes on MOT-E, not MOT-Z.":
    "⚠ Le focuseur 1 se branche sur MOT-E, pas sur MOT-Z.",
  "⚠ I2C header is shared:":
    "⚠ Le connecteur I2C est partagé :",
  "⚠ Read this before buying DS18B20s for an E4.":
    "⚠ Lisez ceci avant d'acheter des DS18B20 pour un E4.",
  "💡 No VRef pot on the E4:":
    "💡 Pas de potentiomètre VRef sur l'E4 :",
});
