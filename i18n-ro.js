/* ============================================================================
   Romanian (ro) dictionary for the OnStepX Configurator.
   Same keys as the French dictionaries: the exact trimmed English text node /
   attribute, translated fragment by fragment so pieces split around <code> /
   <strong> still read in order. Fills window.I18N_RO (see LANGS in i18n.js);
   loaded before i18n.js. Directive names, pin names, part numbers and product
   names are left untranslated. Machine-translated; pending review by a native speaker.
   ========================================================================== */
window.I18N_RO = Object.assign(window.I18N_RO || {}, {
  "\" — change it! BLUETOOTH = pair over Bluetooth instead of WiFi.":
    "” — schimbați-o! BLUETOOTH = asociere prin Bluetooth în loc de WiFi.",
  "\"Apply board defaults\"":
    "„Aplicați valorile implicite ale plăcii”",
  "\"Compile service is not configured yet\"":
    "„Serviciul de compilare nu este încă configurat”",
  "\"Dew Heat 1\" regulates from":
    "„Dew Heat 1” reglează pe baza",
  "\"Failed to connect\"":
    "„Failed to connect”",
  "\"I understand the issues above — build anyway\"":
    "„Înțeleg problemele de mai sus — compilați oricum”",
  "\"Learn more →\"":
    "„Aflați mai multe →”",
  "\"PINMAP must be set to a valid board (from Constants.h) or OFF (for user pin defs in Config.h)\"":
    "„PINMAP must be set to a valid board (from Constants.h) or OFF (for user pin defs in Config.h)”",
  "\"Your config has changed since this firmware was built\"":
    "„Configurația dumneavoastră s-a modificat de la compilarea acestui firmware”",
  "\"Zero\" is the 100%-power point":
    "„Zero” este punctul de putere 100%",
  "\"password\" ships in every install — change AP_PASSWORD and (for SmartWebServer) PASSWORD_DEFAULT before putting the mount on a shared or outdoor network.":
    "„password” este livrată în fiecare instalare — schimbați AP_PASSWORD și (pentru SmartWebServer) PASSWORD_DEFAULT înainte de a conecta montura la o rețea partajată sau în aer liber.",
  "(1) Uninstall current CH340 driver, (2) install CH341SER-3.7, (3) in ASCOM config select \"9600-NO DTR\", (4) in Device Manager → Ports → Advanced enable DisableModemHandshake.":
    "(1) Dezinstalați driverul CH340 actual, (2) instalați CH341SER-3.7, (3) în configurația ASCOM selectați „9600-NO DTR”, (4) în Manager dispozitive → Porturi → Avansat activați DisableModemHandshake.",
  "(AP at 192.168.0.1). The full SmartWebServer is a separate, optional upgrade.":
    "(AP la 192.168.0.1). SmartWebServer complet este o actualizare separată, opțională.",
  "(AXIS1_STEPS_PER_DEGREE × 360) / worm_wheel_teeth — see the formula below. There is no universal default; a wrong value makes PEC useless.":
    "(AXIS1_STEPS_PER_DEGREE × 360) / dinți_roată_melcată — vedeți formula de mai jos. Nu există o valoare implicită universală; o valoare greșită face PEC inutil.",
  "(Axis1/Axis2) — from the Calculator.":
    "(Axis1/Axis2) — din Calculator.",
  "(Controller) — pick the board you have. Wrong value = firmware drives wrong pins.":
    "(Controler) — alegeți placa pe care o aveți. Valoare greșită = firmware-ul comandă pinii greșiți.",
  "(Controller, ESP32 only) — enable if you want SkySafari over WiFi.":
    "(Controler, doar ESP32) — activați dacă doriți SkySafari prin WiFi.",
  "(E4 branch) — erase all flash the first time":
    "(ramura E4) — ștergeți întreaga memorie flash prima dată",
  "(ESP32). Click":
    "(ESP32). Faceți clic pe",
  "(ESP8266/ESP32) flashed with SmartWebServer, wired to a serial port.":
    "(ESP8266/ESP32) programat cu SmartWebServer, conectat la un port serial.",
  "(Firefox / Safari / WebHID unavailable): we save":
    "(Firefox / Safari / WebHID indisponibil): salvăm",
  "(GPIO0 is the ESP32 boot-strap pin here),":
    "(GPIO0 este aici pinul de bootstrap al ESP32),",
  "(GPIO4 is now AXIS1 DIR, so AUX2 is freed), and":
    "(GPIO4 este acum AXIS1 DIR, deci AUX2 este eliberat) și",
  "(HEAT_BED), both":
    "(HEAT_BED), ambele",
  "(Mount) —":
    "(Montură) —",
  "(Mount) — refraction-compensated tracking. Fine to leave OFF for visual use.":
    "(Montură) — urmărire cu compensarea refracției. Poate rămâne OFF pentru uz vizual.",
  "(NodeMCU / Wemos D1) — most boards auto-reset. Bare ESP-01 modules: pull GPIO0 to GND, power cycle.":
    "(NodeMCU / Wemos D1) — majoritatea plăcilor se resetează automat. Module ESP-01 simple: conectați GPIO0 la GND, reporniți alimentarea.",
  "(STM32), or Teensy Loader (Teensy) locally.":
    "(STM32) sau Teensy Loader (Teensy) local.",
  "(TB) and":
    "(TB) și",
  "(TB), or a DS18B20 serial number. The E4 default Config.h already ties a thermistor to the 2nd channel.":
    "(TB) sau un număr de serie DS18B20. Config.h implicit pentru E4 leagă deja un termistor de canalul 2.",
  "(Teensy 3.2) or":
    "(Teensy 3.2) sau",
  "(V1.2 / V2.0 — STM32F446, 6-axis),":
    "(V1.2 / V2.0 — STM32F446, 6 axe),",
  "(WEATHER OFF, no DS3231 fallback). The preflight check flags the combination.":
    "(WEATHER OFF, fără rezervă DS3231). Verificarea preliminară semnalează această combinație.",
  "(WeMos R32 — deprecated),":
    "(WeMos R32 — depreciat),",
  "(Web UI / WiFi·Ethernet bridge).":
    "(interfață web / punte WiFi·Ethernet).",
  "(always confirm against your datasheet):":
    "(verificați întotdeauna în fișa tehnică):",
  "(and a":
    "(și un",
  "(build recipe) and a workflow file (":
    "(rețetă de compilare) și un fișier de workflow (",
  "(built-in)":
    "(integrat)",
  "(comes with":
    "(inclus în",
  "(covers MaxESP4i + FRAM),":
    "(acoperă MaxESP4i + FRAM),",
  "(covers MaxPCB4w/MaxPCB4e variants),":
    "(acoperă variantele MaxPCB4w/MaxPCB4e),",
  "(dew-heater section).":
    "(secțiunea despre încălzitorul anti-rouă).",
  "(first time only)":
    "(doar prima dată)",
  "(focuser2), both on":
    "(focuser2), ambele pe",
  "(hand pendant), or":
    "(telecomandă de mână), sau",
  "(jumper or 3-pin header → centre + right) high.":
    "(jumper sau conector cu 3 pini → centru + dreapta) în stare HIGH.",
  "(latest). The upstream repo it resolves against depends on the mode (OnStepX, SHC, or SWS). The live preview under the field shows the exact commit. See":
    "(cea mai recentă). Depozitul upstream față de care se rezolvă depinde de mod (OnStepX, SHC sau SWS). Previzualizarea live de sub câmp arată commit-ul exact. Vedeți",
  "(left) before flashing, and put it back to centre afterwards. The V5 Pro shares one USB port between the ESP32 and the ESP8266.":
    "(stânga) înainte de programare și readuceți-l la centru după aceea. V5 Pro folosește un singur port USB comun pentru ESP32 și ESP8266.",
  "(mod to bipolar) / NEMA11":
    "(modificat în bipolar) / NEMA11",
  "(mount controller),":
    "(controler de montură),",
  "(msg #69284). Requires removing X-MIN's filter capacitor (the centre of the three SMD parts beside the header; the outer two are resistors) and gives up the Axis1 home/limit input:":
    "(mesajul #69284). Necesită îndepărtarea condensatorului de filtrare al X-MIN (componenta din mijloc dintre cele trei SMD de lângă conector; cele două exterioare sunt rezistoare) și sacrifică intrarea home/limită a Axis1:",
  "(needs a BME280). \"Dew Heat 2\" has its own point thermistor for precise control of a specific surface — e.g. a Newtonian secondary or a corrector plate.":
    "(necesită un BME280). „Dew Heat 2” are propriul termistor punctual pentru controlul precis al unei anumite suprafețe — de ex. secundarul unui Newton sau o lamă corectoare.",
  "(no 3.3V pin). Most breakout boards (GY-GPSV3, GY-NEO6MV2, BN-880) carry their own 3.3V regulator and take 5V directly. A bare 3.3V-only module needs a small 3.3V regulator (e.g. AMS1117-3.3 / LM1117-3.3) fed from that 5V pin. The GPS TX line is 3.3V logic either way, which is safe for the ESP32.":
    "(fără pin de 3.3V). Majoritatea plăcilor breakout (GY-GPSV3, GY-NEO6MV2, BN-880) au propriul regulator de 3.3V și acceptă direct 5V. Un modul simplu, doar de 3.3V, are nevoie de un mic regulator de 3.3V (de ex. AMS1117-3.3 / LM1117-3.3) alimentat din acel pin de 5V. Linia TX a GPS-ului are oricum logică de 3.3V, ceea ce este sigur pentru ESP32.",
  "(not the default 40MHz). This alone cured the stepper clicking for several users.":
    "(nu 40MHz, valoarea implicită). Doar aceasta a eliminat țăcănitul motoarelor pas cu pas pentru mai mulți utilizatori.",
  "(one pole sets, the other resets). All of them need 3.5V or more — run them from a 5V pin.":
    "(un pol îl activează, celălalt îl resetează). Toți necesită 3.5V sau mai mult — alimentați-i de la un pin de 5V.",
  "(plus the whitelist in":
    "(plus lista albă din",
  "(probe)":
    "(sondă)",
  "(richer UI). On a non-ESP board, \"adding WiFi\" literally means bolting on an ESP module running SmartWebServer.":
    "(interfață mai bogată). Pe o placă fără ESP, „adăugarea WiFi” înseamnă literalmente atașarea unui modul ESP care rulează SmartWebServer.",
  "(rule of thumb ≈1W per inch of aperture at 12V):":
    "(regulă practică ≈1W per țol de apertură la 12V):",
  "(rules out Arduino/library issues).":
    "(exclude problemele legate de Arduino/biblioteci).",
  "(sensor pulls LOW on magnet). Place the magnet on the rotating part, the sensor on the stationary part.":
    "(senzorul trage la LOW în prezența magnetului). Montați magnetul pe partea care se rotește și senzorul pe partea fixă.",
  "(simple page, served by OnStepX) and the full":
    "(pagină simplă, servită de OnStepX) și varianta completă",
  "(the":
    "(",
  "(the IMXRT1062 flash base); on Teensy 3.2 the addresses start at 0. The parser auto-detects which by looking at the first data record, handles extended-linear-address prefixes (record type":
    "(baza memoriei flash a IMXRT1062); pe Teensy 3.2 adresele încep de la 0. Parserul detectează automat varianta examinând prima înregistrare de date, tratează prefixele de adresă liniară extinsă (tipul de înregistrare",
  "(the fastest way to isolate problems on a new board):":
    "(cea mai rapidă metodă de a izola problemele pe o placă nouă):",
  "(the plugin's own config, bundled automatically by the workflow when you tick the plugin).":
    "(configurația proprie a plugin-ului, inclusă automat de workflow când bifați plugin-ul).",
  "(the settings shown above).":
    "(setările afișate mai sus).",
  "(typically 4.7–10kΩ to VCC) — the bus needs them. Do not rely on the ESP32's internal pull-ups: those are ~45kΩ, far too weak for I2C.":
    "(de obicei 4,7–10kΩ spre VCC) — magistrala are nevoie de ele. Nu vă bazați pe rezistențele pull-up interne ale ESP32: acestea au ~45kΩ, mult prea slabe pentru I2C.",
  "(under the PINMAP field) autofills driver model, microsteps, run current, and mount type with the known-good values for whichever PINMAP you picked — MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3, etc. A one-click starting point you then tweak.":
    "(sub câmpul PINMAP) completează automat modelul de driver, micropașii, curentul de funcționare și tipul de montură cu valorile verificate pentru PINMAP-ul ales — MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3 etc. Un punct de plecare dintr-un singur clic, pe care apoi îl ajustați.",
  "(v1 embed-in-mount or v2 stand-alone case), or":
    "(v1 integrată în montură sau v2 în carcasă separată) sau",
  "(we don't expose those fields in this configurator yet — you can edit the generated config after compile, or fork OnStepX-Plugins).":
    "(aceste câmpuri nu sunt încă expuse în acest configurator — puteți edita configurația generată după compilare sau puteți face un fork al OnStepX-Plugins).",
  "(web/WiFi bridge) — then":
    "(punte web/WiFi) — apoi",
  "(~2–3 min) because GitHub Actions has to download the PlatformIO toolchain and OnStepX's external libraries. Subsequent builds of the same board are ~30–60 s thanks to caching.":
    "(~2–3 min) deoarece GitHub Actions trebuie să descarce toolchain-ul PlatformIO și bibliotecile externe ale OnStepX. Compilările ulterioare pentru aceeași placă durează ~30–60 s datorită cache-ului.",
  "(±0.5°C typical, ±0.25° over a narrow band), but the E4 has no OneWire pin — AUX7 is OFF, and the only broken-out bidirectional GPIOs are SDA/SCL on the I2C header, so it rules out I2C devices and a GPS there. Reading each device's 64-bit serial number is the other fiddly part.":
    "(±0.5°C tipic, ±0.25° într-un interval restrâns), dar E4 nu are pin OneWire — AUX7 este OFF, iar singurele GPIO bidirecționale accesibile sunt SDA/SCL de pe conectorul I2C, ceea ce exclude în acest caz dispozitivele I2C și un GPS acolo. Citirea numărului de serie pe 64 de biți al fiecărui dispozitiv este cealaltă parte dificilă.",
  "(≈64 ≈ 25%), or feed the heaters from a separate 12V rail.":
    "(≈64 ≈ 25%) sau alimentați încălzitoarele dintr-o linie separată de 12V.",
  ") and":
    ") și",
  ") and the three":
    ") și cele trei jumpere",
  ") instead of running the old firmware.":
    ") în loc să ruleze vechiul firmware.",
  ") is written on top.":
    ") este scris peste acesta.",
  ") reflects the current mode — the example below is from OnStepX mode:":
    ") reflectă modul curent — exemplul de mai jos este din modul OnStepX:",
  ") will":
    ")",
  "), plug in USB, click":
    "), conectați cablul USB, faceți clic pe",
  "), verifies each line's checksum, and collapses everything into a flat":
    "), verifică suma de control a fiecărei linii și comprimă totul într-o structură plată",
  "). Leave empty to pull the FYSETC E4 reference config.":
    "). Lăsați gol pentru a prelua configurația de referință FYSETC E4.",
  "). The project source is always the latest upstream —":
    "). Sursa proiectului este întotdeauna cea mai recentă versiune upstream —",
  "). When the Worker triggers the workflow, GitHub spins up a fresh Ubuntu virtual machine, runs the steps, then throws the VM away. The steps are:":
    "). Când Worker-ul declanșează workflow-ul, GitHub pornește o mașină virtuală Ubuntu nouă, execută pașii, apoi elimină VM-ul. Pașii sunt:",
  "+ USB connected,":
    "+ USB conectate,",
  ", a small C program that talks to the Teensy's HalfKay bootloader over USB HID using libusb/hidapi. The Teensy has no serial bootloader and no DFU interface — HalfKay is the only path in. To do the same thing from a browser we need an API that can send HID output reports to an arbitrary vendor device, and that's exactly what":
    ", un mic program C care comunică cu bootloader-ul HalfKay al Teensy prin USB HID folosind libusb/hidapi. Teensy nu are bootloader serial și nici interfață DFU — HalfKay este singura cale de acces. Pentru a face același lucru dintr-un browser avem nevoie de un API care poate trimite rapoarte de ieșire HID către un dispozitiv arbitrar al unui producător, iar exact asta oferă",
  ", and":
    ", și",
  ", and optionally":
    ", și opțional",
  ", and search for":
    ", și căutați",
  ", and wire up":
    ", și configurează",
  ", axis driver model, and steps/deg must all be set.":
    ", modelul de driver al axei și pașii/grad trebuie toate setate.",
  ", back into Config.h in place of the":
    ", înapoi în Config.h, în locul",
  ", choosing a genuinely free GPIO — and remember GPIO34/35/36/39 are input-only and cannot drive a bidirectional OneWire bus. The only broken-out bidirectional GPIOs are":
    ", alegând un GPIO cu adevărat liber — și rețineți că GPIO34/35/36/39 sunt doar de intrare și nu pot comanda o magistrală OneWire bidirecțională. Singurele GPIO bidirecționale accesibile sunt",
  ", click the":
    ", faceți clic pe butonul",
  ", clone the upstream that matches the firmware you're building (":
    ", clonați depozitul upstream corespunzător firmware-ului pe care îl compilați (",
  ", copy the selected folders into":
    ", copiază folderele selectate în",
  ", driver, and mount lines should look right.":
    ", driver și montură ar trebui să arate corect.",
  ", drop the baud: most ESP8266 modules prefer 460 800 or 115 200. Our flasher already uses 460 800 by default; if that fails, the chip itself is the issue (check USB cable, try the boot procedure manually).":
    ", reduceți viteza (baud): majoritatea modulelor ESP8266 preferă 460 800 sau 115 200. Programatorul nostru folosește deja implicit 460 800; dacă nu merge, problema este chiar cipul (verificați cablul USB, încercați manual procedura de boot).",
  ", factory jumper caps off, GPIO15 → M-TX wire fitted.":
    ", jumperele din fabrică scoase, firul GPIO15 → M-TX montat.",
  ", follow":
    ", urmați",
  ", its own dedicated pins. The":
    ", pinii săi dedicați. Ieșirea",
  ", making GPIO34 (X-MIN) the shared input for BOTH":
    ", făcând din GPIO34 (X-MIN) intrarea comună pentru AMBELE",
  ", not":
    ", nu",
  ", not \"NONE\" — NONE is not a valid OnStepX value and will not compile.":
    ", nu „NONE” — NONE nu este o valoare OnStepX validă și nu se va compila.",
  ", open":
    ", deschideți",
  ", or":
    ", sau",
  ", or any feature branch that exists upstream":
    ", sau orice ramură de funcționalitate existentă upstream",
  ", or by the full SmartWebServer running on the same ESP32.":
    ", sau de SmartWebServer complet care rulează pe același ESP32.",
  ", otherwise the plugin will compile but the radio won't come up. Configure SSID / password in the plugin's own":
    ", altfel plugin-ul se va compila, dar radioul nu va porni. Configurați SSID / parola în configurația proprie a plugin-ului",
  ", pick":
    ", alegeți",
  ", pick the device in the browser picker.":
    ", alegeți dispozitivul în selectorul browserului.",
  ", pick the device in the browser prompt. Done.":
    ", alegeți dispozitivul în fereastra de dialog a browserului. Gata.",
  ", pick the port (same USB-UART families as ESP32: CP2102, CH340, FTDI).":
    ", alegeți portul (aceleași familii USB-UART ca la ESP32: CP2102, CH340, FTDI).",
  ", pick the port in the browser prompt (it'll be labeled something like":
    ", alegeți portul în fereastra de dialog a browserului (va avea o denumire de tipul",
  ", published as a 1-day-retention workflow artifact":
    ", publicat ca artefact de workflow păstrat 1 zi",
  ", re-generate, re-compile, re-flash. If nothing moves at all, check the wiring — if step/dir pins aren't connected, the firmware is fine but the stepper won't move.":
    ", regenerați, recompilați, reprogramați. Dacă nimic nu se mișcă, verificați cablajul — dacă pinii step/dir nu sunt conectați, firmware-ul este în regulă, dar motorul nu se va mișca.",
  ", redeploy. The whole pipeline takes under an hour end-to-end.":
    ", reimplementați. Întregul flux durează sub o oră de la cap la coadă.",
  ", release BOOT,":
    ", eliberați BOOT,",
  ", release BOOT.":
    ", eliberați BOOT.",
  ", release BOOT0. The board re-enumerates as":
    ", eliberați BOOT0. Placa se re-enumeră ca",
  ", select \"STM32 BOOTLOADER\", and replace the driver with":
    ", selectați „STM32 BOOTLOADER” și înlocuiți driverul cu",
  ", serial/WiFi, weather/IMU sensors, GPS, display.":
    ", serial/WiFi, senzori meteo/IMU, GPS, afișaj.",
  ", so the driver model is":
    ", deci modelul de driver este",
  ", so — unlike most OnStep main boards — it already":
    ", așa că — spre deosebire de majoritatea plăcilor principale OnStep — deja",
  ", tap":
    ", apăsați scurt",
  ", then flash and open the serial monitor. Every detected device is listed. Copy the one you want, e.g.":
    ", apoi programați și deschideți monitorul serial. Fiecare dispozitiv detectat este listat. Copiați-l pe cel dorit, de ex.",
  ", then power-cycle — the device name in Device Manager /":
    ", apoi reporniți alimentarea — numele dispozitivului în Manager dispozitive /",
  ", using the":
    ", folosind",
  ", while":
    ", în timp ce",
  ", you're warned because it would appear in the public GitHub Actions log.":
    ", sunteți avertizat, deoarece ar apărea în jurnalul public GitHub Actions.",
  ", …) and pick the microstepping. Review the pre-filled steps/deg values.":
    ", …) și alegeți micropașii. Verificați valorile pași/grad precompletate.",
  "-360..0 degrees":
    "-360..0 grade",
  "-90..-360 degrees":
    "-90..-360 grade",
  "-90..0 degrees":
    "-90..0 grade",
  ". A 10k NTC raises the divider voltage, so do NOT also add the 10k RPARALLEL mod. The 4.7kΩ in the E4 config is simply the onboard series resistor.":
    ". Un NTC de 10k crește tensiunea divizorului, deci NU adăugați și modificarea RPARALLEL de 10k. Rezistența de 4,7kΩ din configurația E4 este pur și simplu rezistența serie de pe placă.",
  ". A KY-003-style module adds its own pull-up to 5V — that one does need a divider (1kΩ series + 2kΩ to GND). OUT → X-MIN, VCC → 5V, GND → GND. Configure":
    ". Un modul de tip KY-003 are propriul pull-up la 5V — acela chiar necesită un divizor (1kΩ în serie + 2kΩ la GND). OUT → X-MIN, VCC → 5V, GND → GND. Configurați",
  ". A tester has volunteered and this notice will be removed once a build has been confirmed working on an actual V5 Pro. Until then: read the generated Config.h before you flash, and keep a copy of your working firmware.":
    ". Un tester s-a oferit voluntar, iar această notificare va fi eliminată după ce o compilare va fi confirmată funcțională pe un V5 Pro real. Până atunci: citiți Config.h generat înainte de programare și păstrați o copie a firmware-ului funcțional.",
  ". Click":
    ". Faceți clic pe",
  ". Copy, download, or load an existing one to back-fill the form. The":
    ". Copiați, descărcați sau încărcați unul existent pentru a completa formularul. Butonul",
  ". Enable":
    ". Activați",
  ". If the issue is with the firmware itself (mount behavior on OnStepX, hand-pendant behavior on SHC, or web-UI / network behavior on SWS), use":
    ". Dacă problema ține de firmware-ul însuși (comportamentul monturii în OnStepX, al telecomenzii în SHC sau al interfeței web / rețelei în SWS), folosiți",
  ". If the optic still dews up, lower Zero so full power kicks in sooner.":
    ". Dacă optica tot se aburește, reduceți Zero astfel încât puterea maximă să intervină mai devreme.",
  ". Mismatches are caught before they hit the runner.":
    ". Nepotrivirile sunt detectate înainte să ajungă la runner.",
  ". No build-service or firmware-source change is involved.":
    ". Nu este necesară nicio modificare a serviciului de compilare sau a sursei firmware-ului.",
  ". Note the value is":
    ". Rețineți că valoarea este",
  ". On Android, turn off mobile data first so it does not route around the access point.":
    ". Pe Android, dezactivați mai întâi datele mobile, ca telefonul să nu ocolească punctul de acces.",
  ". Pick":
    ". Alegeți",
  ". PlatformIO downloads the MCU toolchain and any external libraries the project needs, then compiles.":
    ". PlatformIO descarcă toolchain-ul pentru MCU și toate bibliotecile externe necesare proiectului, apoi compilează.",
  ". Same Windows WinUSB / Zadig note as the BlackPill applies.":
    ". Se aplică aceeași observație pentru Windows despre WinUSB / Zadig ca la BlackPill.",
  ". Set":
    ". Setați",
  ". The MCU target auto-follows your PINMAP. The preflight checklist tells you whether the build will even try. Click":
    ". Ținta MCU urmează automat PINMAP-ul. Lista de verificare preliminară vă arată dacă se va încerca măcar compilarea. Faceți clic pe",
  ". The UART steppers (":
    ". Driverele UART (",
  ". The form auto-corrects this when you switch envs, and the preflight catches it if you override.":
    ". Formularul corectează automat acest lucru când schimbați mediul (env), iar verificarea preliminară semnalează problema dacă îl suprascrieți.",
  ". The next ~10 lines are the exact file the workflow wrote into the source tree before compiling.":
    ". Următoarele ~10 linii reprezintă exact fișierul pe care workflow-ul l-a scris în arborele sursă înainte de compilare.",
  ". The workflow detects the pre-existing":
    ". Workflow-ul detectează directorul preexistent",
  ". Use one switch at the home position (home = limit), or use separate switches: home to X-MIN, limit to TB (GPIO39) with":
    ". Folosiți un singur comutator la poziția de origine (home = limită) sau comutatoare separate: home pe X-MIN, limită pe TB (GPIO39) cu",
  ". WIFI_STATION = the board JOINS your existing home WiFi/router — best indoors with internet on the same device; find its IP in the serial monitor or your router's client list. Default WiFi password: \"":
    ". WIFI_STATION = placa SE CONECTEAZĂ la WiFi-ul/routerul existent de acasă — ideal în interior, cu internet pe același dispozitiv; găsiți IP-ul ei în monitorul serial sau în lista de clienți a routerului. Parola WiFi implicită: „",
  ". Wait 1–3 min.":
    ". Așteptați 1–3 min.",
  ". With the normal E4 setup (4× TMC2209 on UART) there is therefore":
    ". Cu configurația E4 obișnuită (4× TMC2209 pe UART) prin urmare nu există",
  "/ empty and configure them over the OnStepX web UI":
    "/ gol și configurați-le prin interfața web OnStepX",
  "// AB, AB_ESP32, CW_CCW, PULSE_DIR, AS37_H39B_B. RA/Azm (A/MA) & (B/SLO.)":
    "// AB, AB_ESP32, CW_CCW, PULSE_DIR, AS37_H39B_B. AR/Azm (A/MA) & (B/SLO.)",
  "// Allow BLUETOOTH, WIFI_STATION, or BOTH OnStep connections (ESP32 only.)":
    "// Permite conexiuni OnStep BLUETOOTH, WIFI_STATION sau BOTH (doar ESP32.)",
  "// Allow SERIAL_ST4 OnStep connections using its ST4 port synchronous":
    "// Permite conexiuni OnStep SERIAL_ST4 folosind portul său ST4 sincron",
  "// Applies refraction to coordinates to/from OnStep, except exactly":
    "// Aplică refracția coordonatelor către/de la OnStep, cu excepția exactă",
  "// Automatic check both, ON for swapped port or OFF for default port only.":
    "// Automat verifică ambele, ON pentru portul inversat sau OFF doar pentru portul implicit.",
  "// Automatically sync Encoders to OnStep.":
    "// Sincronizează automat encoderele cu OnStep.",
  "// BEST Stays on current side if possible. EAST or WEST switch if possible.":
    "// BEST rămâne pe partea curentă dacă este posibil. EAST sau WEST schimbă partea dacă este posibil.",
  "// BME280 (I2C 0x77,) BME280_0x76, BME280_SPI (see pinmap for CS.)":
    "// BME280 (I2C 0x77,) BME280_0x76, BME280_SPI (vedeți pinmap-ul pentru CS.)",
  "// Causes the defaults to be written back into NV (FLASH,EEPROM,etc.)":
    "// Face ca valorile implicite să fie rescrise în NV (FLASH,EEPROM,etc.)",
  "// Choose from: MiniPCB, MiniPCB2, MaxPCB4, MaxESP4, MaxSTM3, FYSETC_E4,":
    "// Alegeți dintre: MiniPCB, MiniPCB2, MaxPCB4, MaxESP4, MaxSTM3, FYSETC_E4,",
  "// Common baud rates for these parameters are 9600,19200,57600,115200.":
    "// Vitezele baud uzuale pentru acești parametri sunt 9600,19200,57600,115200.",
  "// Common baud rates for this parameter are 9600,19200,57600,115200,etc.":
    "// Vitezele baud uzuale pentru acest parametru sunt 9600,19200,57600,115200,etc.",
  "// DS3231 (I2C,) SD3031 (I2C,) TEENSY (T3.2 etc,) GPS, or NTP source.":
    "// Sursă DS3231 (I2C,) SD3031 (I2C,) TEENSY (T3.2 etc,) GPS sau NTP.",
  "// Decay mode goto default override. TMC default is SPREADCYCLE.":
    "// Suprascrie modul decay implicit pentru GOTO. Implicit TMC este SPREADCYCLE.",
  "// Disable backlash takeup during guiding at <= 1X.":
    "// Dezactivează compensarea jocului (backlash) în timpul ghidării la <= 1X.",
  "// Enable LED flashes while connecting then steady once connected.":
    "// Activează clipirea LED-ului în timpul conectării, apoi lumină continuă după conectare.",
  "// English. Or L_ca, L_cn, L_de, L_en, L_es, L_fr, L_it, L_jp, L_ro, L_us.":
    "// Engleză. Sau L_ca, L_cn, L_de, L_en, L_es, L_fr, L_it, L_jp, L_ro, L_us.",
  "// English. Specify language with two letter country code, if supported.":
    "// Engleză. Specificați limba cu codul de țară din două litere, dacă este suportată.",
  "// Enter motor driver model (above) in both axes to activate the mount.":
    "// Introduceți modelul de driver al motorului (mai sus) pe ambele axe pentru a activa montura.",
  "// Enter motor driver model (above) to activate the focuser.":
    "// Introduceți modelul de driver al motorului (mai sus) pentru a activa focuserul.",
  "// Enter motor driver model (above) to activate the rotator.":
    "// Introduceți modelul de driver al motorului (mai sus) pentru a activa rotatorul.",
  "// Ethernet unique MAC address.":
    "// Adresă MAC Ethernet unică.",
  "// For access to these settings, this can be changed at runtime also.":
    "// Pentru acces la aceste setări; se poate modifica și în timpul rulării.",
  "// GEM German Equatorial Mount, etc. that need meridian flips.":
    "// GEM montură ecuatorială germană etc., care necesită întoarceri la meridian.",
  "// GamePad MAC address #1":
    "// Adresa MAC a gamepadului #1",
  "// GamePad MAC address #2":
    "// Adresa MAC a gamepadului #2",
  "// HIGH or LOW enables & state clockwise home position, as seen from above.":
    "// HIGH sau LOW activează și indică starea poziției de origine în sens orar, văzut de sus.",
  "// HIGH or LOW enables & state clockwise home position, as seen from front.":
    "// HIGH sau LOW activează și indică starea poziției de origine în sens orar, văzut din față.",
  "// HIGH or LOW state indicates mount is in the park orientation.":
    "// Starea HIGH sau LOW indică faptul că montura este în orientarea de parcare.",
  "// HIGH or LOW state on limit sense switch stops movement.":
    "// Starea HIGH sau LOW pe limitatorul de cursă oprește mișcarea.",
  "// HIGH or LOW state park input signal triggers parking.":
    "// Starea HIGH sau LOW a semnalului de intrare de parcare declanșează parcarea.",
  "// HIGH senses PPS (pulse per second,) signal rising edge, or use LOW for":
    "// HIGH detectează frontul crescător al semnalului PPS (puls pe secundă,) sau folosiți LOW pentru",
  "// HIGH. Senses the PEC signal rising edge or use LOW for falling edge.":
    "// HIGH. Detectează frontul crescător al semnalului PEC sau folosiți LOW pentru frontul descrescător.",
  "// Hostname for this device up to 16 chars.":
    "// Numele de gazdă (hostname) al acestui dispozitiv, până la 16 caractere.",
  "// JS1 for Jerry's analog joystick":
    "// JS1 pentru joystick-ul analogic al lui Jerry",
  "// No compensation or REFRACTION, REFRACTION_DUAL, MODEL, MODEL_DUAL.":
    "// Fără compensare sau REFRACTION, REFRACTION_DUAL, MODEL, MODEL_DUAL.",
  "// OFF to use 12 hour format for entering time.":
    "// OFF pentru a folosi formatul de 12 ore la introducerea orei.",
  "// OLED 1.3\" I2C display commonly used. SSD1306 is a 0.96\" OLED display.":
    "// Afișaj OLED I2C de 1.3\" folosit frecvent. SSD1306 este un afișaj OLED de 0.96\".",
  "// ON Allows sync to change pier side, for GEM mounts.":
    "// ON permite sincronizării să schimbe partea pilonului, pentru monturile GEM.",
  "// ON Enables Meridian Flips for FORK mounts and passing through the":
    "// ON activează întoarcerile la meridian pentru monturile FORK și trecerea prin",
  "// ON Enables mount motor drivers while in standby.":
    "// ON activează driverele motoarelor monturii în standby.",
  "// ON Flashes proportional to rate of movement or solid on for slews.":
    "// ON clipește proporțional cu viteza de mișcare sau rămâne aprins continuu la deplasările rapide.",
  "// ON Goto directly to the destination without visiting home position.":
    "// ON GOTO direct la destinație fără a trece prin poziția de origine.",
  "// ON Inverts control for cases where 0V is max brightness.":
    "// ON inversează comanda pentru cazurile în care 0V înseamnă luminozitate maximă.",
  "// ON Powers off 30 seconds after movement stops.":
    "// ON oprește alimentarea la 30 de secunde după oprirea mișcării.",
  "// ON Powers off 30sec after movement stops or 10min after last<=1x guide.":
    "// ON oprește alimentarea la 30s după oprirea mișcării sau la 10min după ultima ghidare <=1x.",
  "// ON Remember automatic meridian flip setting across power cycles.":
    "// ON reține setarea de întoarcere automată la meridian între reporniri.",
  "// ON Remember automatic sync setting across power cycles.":
    "// ON reține setarea de sincronizare automată între reporniri.",
  "// ON Remember meridian flip pause at home setting across power cycles.":
    "// ON reține setarea de pauză la origine pentru întoarcerea la meridian între reporniri.",
  "// ON Remember preferred pier side setting across power cycles.":
    "// ON reține setarea pentru partea preferată a pilonului între reporniri.",
  "// ON Remember reticle brightness across power cycles.":
    "// ON reține luminozitatea reticulului între reporniri.",
  "// ON Remembers approximate mount coordinates across power cycles.":
    "// ON reține coordonatele aproximative ale monturii între reporniri.",
  "// ON Remembers rates set across power cycles.":
    "// ON reține vitezele setate între reporniri.",
  "// ON Remembers refraction/pointing model compensated tracking settings.":
    "// ON reține setările de urmărire compensată prin refracție/model de pointare.",
  "// ON Restores any pointing model saved in NV at startup.":
    "// ON restaurează la pornire orice model de pointare salvat în NV.",
  "// ON Reverses movement direction, or reverse wiring instead to correct.":
    "// ON inversează direcția de mișcare; alternativ, inversați cablajul pentru corectare.",
  "// ON Start with automatic meridian flips enabled.":
    "// ON pornește cu întoarcerile automate la meridian activate.",
  "// ON Start with meridian flip pause at home enabed.":
    "// ON pornește cu pauza la origine pentru întoarcerea la meridian activată.",
  "// ON Start with tracking enabled.":
    "// ON pornește cu urmărirea activată.",
  "// ON Upload ESP8266 WiFi firmware through SERIAL_B with :ESPFLASH# cmd.":
    "// ON încarcă firmware-ul WiFi ESP8266 prin SERIAL_B cu comanda :ESPFLASH#.",
  "// ON allows menus to wrap so moving past bottom returns to top, etc.":
    "// ON permite meniurilor să se reia circular, astfel încât trecerea de jos revine sus etc.",
  "// ON allows reset if supported, FWU for STM32 firmware upload pin HIGH.":
    "// ON permite resetarea dacă este suportată, FWU pentru pinul de încărcare firmware STM32 pe HIGH.",
  "// ON alternate to above: Focuser move [E]f1 [W]f2 [N]- [S]+":
    "// ON alternativă la cele de mai sus: deplasare focuser [E]f1 [W]f2 [N]- [S]+",
  "// ON ambient conditions in locale default units.":
    "// ON condiții ambientale în unitățile implicite ale localizării.",
  "// ON enables auxillary \"pass-through\" ST4 interface.":
    "// ON activează interfața ST4 auxiliară „pass-through”.",
  "// ON enables interface. <= 1X guides unless hand control mode.":
    "// ON activează interfața. <= 1X ghidează, cu excepția modului de control manual.",
  "// ON for hand controller special features and SHC support.":
    "// ON pentru funcțiile speciale ale telecomenzii (hand controller) și suport SHC.",
  "// ON high resolution encoders correct pointing even for gotos.":
    "// ON encoderele de înaltă rezoluție corectează pointarea chiar și la GOTO.",
  "// ON internal MCU temp. in locale default units.":
    "// ON temperatura internă a MCU în unitățile implicite ale localizării.",
  "// ON skips final phase of goto for align stars so user tends to approach":
    "// ON omite faza finală a GOTO pentru stelele de aliniere, astfel încât utilizatorul tinde să se apropie",
  "// ON starts w/buzzer sound enabled.":
    "// ON pornește cu sunetul buzzerului activat.",
  "// ON to allow BLE gamepad connection for ESP32 only.":
    "// ON pentru a permite conectarea unui gamepad BLE, doar pentru ESP32.",
  "// ON to display the coordinate origin control tile on the mount page.":
    "// ON pentru a afișa panoul de control al originii coordonatelor pe pagina monturii.",
  "// ON to display the servo monitor for OnStepX (any axis.)":
    "// ON pentru a afișa monitorul servo pentru OnStepX (orice axă.)",
  "// ON to remember buzzer sound setting across power cycles.":
    "// ON pentru a reține setarea sunetului buzzerului între reporniri.",
  "// ON to reverse the count direction.":
    "// ON pentru a inversa sensul de numărare.",
  "// ON to show ambient conditions in the display rotation":
    "// ON pentru a afișa condițiile ambientale în rotația afișajului",
  "// ON uses home switches to find home first when starting an align.":
    "// ON folosește comutatoarele de origine pentru a găsi mai întâi originea la începerea unei alinieri.",
  "// ON, HIGH, or LOW. For driver status info/fault detection.":
    "// ON, HIGH sau LOW. Pentru informații de stare / detectarea defectelor driverului.",
  "// ON, HIGH, or LOW. Polling for driver status info/fault detection.":
    "// ON, HIGH sau LOW. Interogare pentru informații de stare / detectarea defectelor driverului.",
  "// ON, n. Where n=100..6000 (Hz freq.) for speaker. ON for piezo buzzer.":
    "// ON, n. Unde n=100..6000 (frecv. Hz) pentru difuzor. ON pentru buzzer piezo.",
  "// Offset in deg's for goto target unidirectional approach, 0.0 disables":
    "// Decalaj în grade pentru apropierea unidirecțională de ținta GOTO, 0.0 dezactivează",
  "// Only MaxSTM3, SKR PRO, FYSETC S6 and Manticore pinmaps assign one; all other boards must set it.":
    "// Doar pinmap-urile MaxSTM3, SKR PRO, FYSETC S6 și Manticore atribuie unul; toate celelalte plăci trebuie să îl seteze.",
  "// Or use 19200,57600,115200,230400,460800 (not all devices support > 115200)":
    "// Sau folosiți 19200,57600,115200,230400,460800 (nu toate dispozitivele suportă > 115200)",
  "// Or use ETHERNET_W5100 or ETHERNET_W5500":
    "// Sau folosiți ETHERNET_W5100 sau ETHERNET_W5500",
  "// Or use any h/w serial port. Serial1 or Serial2, etc. as supported.":
    "// Sau folosiți orice port serial hardware. Serial1 sau Serial2 etc., după caz.",
  "// PULSE Step signal wave form faster rates. SQUARE best signal integrity.":
    "// PULSE formă de undă a semnalului Step, viteze mai mari. SQUARE cea mai bună integritate a semnalului.",
  "// SA_STRICT, or SA_PERMISSIVE. Controls when startup trust is granted.":
    "// SA_STRICT sau SA_PERMISSIVE. Controlează când se acordă încrederea la pornire.",
  "// Seconds of PEC buffer allowed.":
    "// Secunde de buffer PEC permise.",
  "// Sensitivity of joystick in ADC counts (larger is less sensitive)":
    "// Sensibilitatea joystickului în unități ADC (mai mare = mai puțin sensibil)",
  "// Steady illumination if no error, blinks w/error code otherwise.":
    "// Iluminare constantă dacă nu există erori, altfel clipește cu codul de eroare.",
  "// THERMISTOR or n. Where n is the ds18b20 s/n for focuser temp.":
    "// THERMISTOR sau n. Unde n este nr. de serie al ds18b20 pentru temperatura focuserului.",
  "// This devices name up to 16 chars (collapses to mDNS name \"onstepsws\".)":
    "// Numele acestui dispozitiv, până la 16 caractere (se reduce la numele mDNS „onstepsws”.)",
  "// Tracking decay mode default override. TMC default is STEALTHCHOP.":
    "// Suprascrierea modului decay implicit la urmărire. Implicit TMC: STEALTHCHOP.",
  "// Use 0 to 3 for Min, Low, High, Max respectively.":
    "// Folosiți 0 până la 3 pentru Min, Scăzut, Ridicat, respectiv Max.",
  "// Use BLUETOOTH or WIFI_ACCESS_POINT or WIFI_STATION (ESP32 only.)":
    "// Folosiți BLUETOOTH sau WIFI_ACCESS_POINT sau WIFI_STATION (doar ESP32.)",
  "// Use OFF to disable mount Goto features.":
    "// Folosiți OFF pentru a dezactiva funcțiile GOTO ale monturii.",
  "// Use ON for background error messages only, use VERBOSE for all":
    "// Folosiți ON doar pentru mesaje de eroare în fundal, VERBOSE pentru toate",
  "// Use platforms default non-volatile device to remember runtime settings.":
    "// Folosește dispozitivul nevolatil implicit al platformei pentru a memora setările de rulare.",
  "// Uses HAL specified default (either 6 or 9 stars.)":
    "// Folosește valoarea implicită specificată de HAL (6 sau 9 stele.)",
  "// Wifi Access Point Enabled.":
    "// Punct de acces WiFi activat.",
  "// Wifi Access Point GATEWAY Address.":
    "// Adresa GATEWAY a punctului de acces WiFi.",
  "// Wifi Access Point IP Address.":
    "// Adresa IP a punctului de acces WiFi.",
  "// Wifi Access Point SUBNET Mask.":
    "// Masca SUBNET a punctului de acces WiFi.",
  "// Wifi Access Point channel.":
    "// Canalul punctului de acces WiFi.",
  "// Wifi Access Point password.":
    "// Parola punctului de acces WiFi.",
  "// Wifi Station Enabled.":
    "// Mod Station WiFi activat.",
  "// Wifi Station mode password.":
    "// Parola modului Station WiFi.",
  "// Wifi Station/Ethernet DHCP Enabled.":
    "// DHCP Station WiFi/Ethernet activat.",
  "// Wifi Station/Ethernet GATEWAY Address.":
    "// Adresa GATEWAY Station WiFi/Ethernet.",
  "// Wifi Station/Ethernet IP Address.":
    "// Adresa IP Station WiFi/Ethernet.",
  "// Wifi Station/Ethernet SUBNET Mask.":
    "// Masca SUBNET Station WiFi/Ethernet.",
  "// n, (arcsec.) Maximum diff. between encoder/OnStep for sync. from OnStep.":
    "// n, (arcsec.) Diferența maximă dintre encoder/OnStep pentru sincronizarea de la OnStep.",
  "// n, (arcsec.) Minimum diff. between encoder/OnStep for sync. to OnStep.":
    "// n, (arcsec.) Diferența minimă dintre encoder/OnStep pentru sincronizarea către OnStep.",
  "// n, (degrees.) Approx. distance for acceleration (and deceleration.)":
    "// n, (grade.) Distanța aproximativă pentru accelerare (și decelerare.)",
  "// n, (degrees.) Approx. distance required to stop when a slew":
    "// n, (grade.) Distanța aproximativă necesară pentru oprire când o deplasare rapidă",
  "// n, (mA.) Current during slews. OFF uses IRUN.":
    "// n, (mA.) Curent în timpul deplasărilor rapide. OFF folosește IRUN.",
  "// n, (mA.) Current during standstill. OFF uses IRUN/2.0":
    "// n, (mA.) Curent în repaus. OFF folosește IRUN/2.0",
  "// n, (mA.) Current during tracking, appropriate for stepper/driver/etc.":
    "// n, (mA.) Curent în timpul urmăririi, adecvat pentru motor/driver etc.",
  "// n, (ticks/degree.) Encoder ticks per degree.":
    "// n, (impulsuri/grad.) Impulsuri de encoder pe grad.",
  "// n, Where n=200..5000 (um/s.) Adjustable at run-time from":
    "// n, Unde n=200..5000 (um/s.) Reglabil în timpul rulării din",
  "// n. Baud rate as above. See (src/pinmaps/) for Serial port assignments.":
    "// n. Baud rate ca mai sus. Vedeți (src/pinmaps/) pentru alocarea porturilor seriale.",
  "// n. Baud rate of the GPS module.":
    "// n. Baud rate-ul modulului GPS.",
  "// n. Desired slew rate in deg/sec. Adjustable at run-time from":
    "// n. Viteza dorită de deplasare rapidă în grade/s. Reglabilă în timpul rulării din",
  "// n. Microstep mode used during slews. OFF uses _DRIVER_MICROSTEPS.":
    "// n. Modul de micropași folosit în timpul deplasărilor rapide. OFF folosește _DRIVER_MICROSTEPS.",
  "// n. Microstep mode when tracking.":
    "// n. Modul de micropași la urmărire.",
  "// n. Number of steps per degree for rotator/de-rotator.":
    "// n. Numărul de pași pe grad pentru rotator/de-rotator.",
  "// n. Number of steps per degree:":
    "// n. Numărul de pași pe grad:",
  "// n. RX pin for the GPS port. Required for SoftSerial/HardSerial; ESP32 Serial1/2 remap with RX+TX.":
    "// n. Pinul RX pentru portul GPS. Necesar pentru SoftSerial/HardSerial; ESP32 Serial1/2 se remapează cu RX+TX.",
  "// n. Steps per micrometer. Figure this out by testing or other means.":
    "// n. Pași pe micrometru. Determinați prin testare sau alte metode.",
  "// n. Steps per worm rotation (0 disables else 720 sec buffer allocated.)":
    "// n. Pași pe rotație a melcului (0 dezactivează, altfel se alocă un buffer de 720 s.)",
  "// n. TX pin for the GPS port (to GPS RX, often left unwired).":
    "// n. Pinul TX pentru portul GPS (către RX-ul GPS, adesea lăsat neconectat).",
  "// n. Time limit n=0..120 seconds. Use 0 to disable.":
    "// n. Limită de timp n=0..120 secunde. Folosiți 0 pentru a dezactiva.",
  "// n. Where n= -90..-360 (degrees.) Minimum \"Hour Angle\" or Azimuth.":
    "// n. Unde n= -90..-360 (grade.) „Unghi orar” sau azimut minim.",
  "// n. Where n= 0..90 (degrees.) Allow sync/reset only within this +/-range.":
    "// n. Unde n= 0..90 (grade.) Permite sync/reset doar în acest interval +/-.",
  "// n. Where n= 0..90 (degrees.) Maximum allowed Declination or Altitude.":
    "// n. Unde n= 0..90 (grade.) Declinația sau altitudinea maximă permisă.",
  "// n. Where n= 90.. 360 (degrees.) Maximum \"Hour Angle\" or Azimuth.":
    "// n. Unde n= 90.. 360 (grade.) „Unghi orar” sau azimut maxim.",
  "// n. Where n=-360..0 (degrees.) Minimum allowed rotator angle.":
    "// n. Unde n=-360..0 (grade.) Unghiul minim permis al rotatorului.",
  "// n. Where n=-90..0 (degrees.) Minimum allowed Declination or Altitude.":
    "// n. Unde n=-90..0 (grade.) Declinația sau altitudinea minimă permisă.",
  "// n. Where n=0..255 (0..100%) activates feature sets default brightness.":
    "// n. Unde n=0..255 (0..100%) activează funcția, setează luminozitatea implicită.",
  "// n. Where n=0..360 (degrees.) Maximum allowed rotator angle.":
    "// n. Unde n=0..360 (grade.) Unghiul maxim permis al rotatorului.",
  "// n. Where n=0..500 (millimeters.) Maximum allowed position.":
    "// n. Unde n=0..500 (milimetri.) Poziția maximă permisă.",
  "// n. Where n=0..500 (millimeters.) Minimum allowed position.":
    "// n. Unde n=0..500 (milimetri.) Poziția minimă permisă.",
  "// n. Where n=2..50 (x sidereal rate) during backlash takeup.":
    "// n. Unde n=2..50 (x viteza siderală) în timpul compensării jocului mecanic.",
  "// n. Where n=5..200 (um/s.) Minimum microns/second.":
    "// n. Unde n=5..200 (um/s.) Microni/secundă minim.",
  "// n. Where n=9600,19200,57600,115200 (common baud rates.)":
    "// n. Unde n=9600,19200,57600,115200 (baud rate-uri uzuale.)",
  "// n. Where n=9600,19200,57600,115200,230400,460800 (common baud rates.)":
    "// n. Unde n=9600,19200,57600,115200,230400,460800 (baud rate-uri uzuale.)",
  "// signals with a HIGH or LOW state when successfully parked.":
    "// semnalizează cu o stare HIGH sau LOW când parcarea a reușit.",
  "0 disables, use Calculator tab":
    "0 dezactivează, folosiți fila Calculator",
  "0..120 seconds (0 = disabled)":
    "0..120 secunde (0 = dezactivat)",
  "0..360 degrees":
    "0..360 grade",
  "0..500 mm maximum":
    "0..500 mm maxim",
  "0..500 mm minimum":
    "0..500 mm minim",
  "0..90 degrees":
    "0..90 grade",
  "1 (Low)":
    "1 (Scăzut)",
  "1 (full step)":
    "1 (pas întreg)",
  "1 hour":
    "1 oră",
  "1 · How it works (behind the curtain)":
    "1 · Cum funcționează (în culise)",
  "1) power the board → 2) on your phone/PC join the":
    "1) alimentați placa → 2) pe telefon/PC conectați-vă la rețeaua",
  "1-Wire temp":
    "Temp. 1-Wire",
  "1. Install Arduino IDE & ESP32 Platform":
    "1. Instalați Arduino IDE și platforma ESP32",
  "10 · Privacy & what gets logged":
    "10 · Confidențialitate și ce se înregistrează",
  "10µF 16V electrolytic":
    "Electrolitic 10µF 16V",
  "11 · Troubleshooting":
    "11 · Depanare",
  "12 · FAQ":
    "12 · Întrebări frecvente",
  "12–24V DC on Vin (board max 22.5A); heater + bed outputs 15A max; onboard 5V buck (2A) and 3.3V LDO":
    "12–24V DC pe Vin (placa max. 22.5A); ieșirile heater + bed max. 15A; convertor buck 5V integrat (2A) și regulator LDO 3.3V",
  "12–24V PSU — Main DC power supply (12–24V)":
    "Sursă 12–24V — Sursa principală de alimentare DC (12–24V)",
  "1b · OnStepX vs SmartHandController vs SmartWebServer — the mode switch":
    "1b · OnStepX vs SmartHandController vs SmartWebServer — comutatorul de mod",
  "1kΩ → PC817/4N35 LED anode (+)":
    "1kΩ → anodul (+) LED-ului PC817/4N35",
  "2 (High)":
    "2 (Ridicat)",
  "2 mount + 1 rotator + 2 focusers (shared pins)":
    "2 montură + 1 rotator + 2 focusere (pini partajați)",
  "2 · Quick start — board to firmware in 8 steps":
    "2 · Start rapid — de la placă la firmware în 8 pași",
  "2-pin screw terminal":
    "Bornă cu șurub cu 2 pini",
  "2. Required Libraries":
    "2. Biblioteci necesare",
  "2..50 (x sidereal rate)":
    "2..50 (x viteza siderală)",
  "2.4 GHz channel 1–13":
    "Canal 2.4 GHz 1–13",
  "2.5mm TRS (stereo)":
    "TRS 2.5mm (stereo)",
  "2.5mm TRS Sleeve (camera GND)":
    "Manșon TRS 2.5mm (GND cameră)",
  "2.5mm TRS Tip (shutter signal)":
    "Vârf TRS 2.5mm (semnal declanșator)",
  "2.5mm TS (mono)":
    "TS 2.5mm (mono)",
  "2.5mm or 3.5mm stereo":
    "2.5mm sau 3.5mm stereo",
  "200 steps/rev, 0.4–0.8A":
    "200 pași/rot., 0.4–0.8A",
  "200 steps/rev, 1.0–1.7A":
    "200 pași/rot., 1.0–1.7A",
  "200..5000 μm/s slew rate":
    "200..5000 μm/s viteză de deplasare rapidă",
  "20MHz channel width":
    "lățime de canal de 20MHz",
  "24 hours, then deleted automatically":
    "24 de ore, apoi șters automat",
  "24V supply makes motors / dew heaters run hot":
    "Alimentarea la 24V face ca motoarele / încălzitoarele anti-rouă să se încălzească",
  "24V supply:":
    "Alimentare 24V:",
  "3 · What each tab does":
    "3 · Ce face fiecare filă",
  "3. Source & Preparation":
    "3. Sursă și pregătire",
  "3.3V reg":
    "Reg. 3.3V",
  "3.3V regulator":
    "Regulator 3.3V",
  "3435 (set RNOM 10000)":
    "3435 (setați RNOM 10000)",
  "3950 — E4 default":
    "3950 — implicit E4",
  "4 · The settings you actually have to change":
    "4 · Setările pe care chiar trebuie să le modificați",
  "4. Arduino IDE Settings":
    "4. Setări Arduino IDE",
  "4.5–24V — not a 3.3V part":
    "4.5–24V — nu este o componentă de 3.3V",
  "4.5–5V (it carries an A3144)":
    "4.5–5V (conține un A3144)",
  "4× TMC2209 soldered on board, UART at 460800 baud (addresses X=1, Y=3, Z=0, E=2), VREF unconnected — current is UART-only":
    "4× TMC2209 lipite pe placă, UART la 460800 baud (adrese X=1, Y=3, Z=0, E=2), VREF neconectat — curentul se setează doar prin UART",
  "5 · Picking an upstream version (Source ref)":
    "5 · Alegerea unei versiuni upstream (Source ref)",
  "5. Default Config.h Values":
    "5. Valori implicite din Config.h",
  "5–15W per heater; match to OTA diameter and to your supply voltage (12V strap on 12V, 24V-rated on 24V).":
    "5–15W per încălzitor; alegeți în funcție de diametrul tubului optic și de tensiunea sursei (bandă de 12V la 12V, bandă de 24V la 24V).",
  "6 · The preflight checklist":
    "6 · Lista de verificare preliminară",
  "60–80mm finder / guide":
    "Căutător / ghid 60–80mm",
  "7 · OnStepX plugins — how the bundling works":
    "7 · Pluginuri OnStepX — cum funcționează includerea lor",
  "8 · Board-by-board USB preparation":
    "8 · Pregătirea USB placă cu placă",
  "9 · Browser requirements":
    "9 · Cerințe pentru browser",
  "90..360 degrees":
    "90..360 grade",
  ": 1024-byte blocks, 64-byte header with a little-endian flash offset, final":
    ": blocuri de 1024 de octeți, antet de 64 de octeți cu un offset de flash little-endian, un raport final",
  ": SDA↔M-RX, SCL↔M-TX and the three xDIAG-EN caps":
    ": SDA↔M-RX, SCL↔M-TX și cele trei jumpere xDIAG-EN",
  ": Z-min pin of ZDIAG-EN to M-TX on the TMC UART header":
    ": pinul Z-min al ZDIAG-EN la M-TX pe conectorul cu pini TMC UART",
  ": focuser1 is the":
    ": focuser1 este",
  ": switching from OnStepX to SHC and back doesn't lose your work in either.":
    ": trecerea de la OnStepX la SHC și înapoi nu vă pierde munca în niciunul dintre ele.",
  ": the ESP32 routes its hardware serial port (Serial2) to GPIO21/22, so nothing on the board has to be modified.":
    ": ESP32 își redirecționează portul serial hardware (Serial2) către GPIO21/22, deci nu trebuie modificat nimic pe placă.",
  "; SHC builds use the":
    "; compilările SHC folosesc",
  "; drop it into Teensy Loader and press the white program button. CLI alternative:":
    "; trageți-l în Teensy Loader și apăsați butonul alb de programare. Alternativă în linia de comandă:",
  "; set":
    "; setați",
  "; set the PSU current limit to ≥3A.":
    "; setați limita de curent a sursei la ≥3A.",
  "= (AXIS1_STEPS_PER_DEGREE × 360) / worm_gear":
    "= (AXIS1_STEPS_PER_DEGREE × 360) / roată_melcată",
  "= (diagonal_pixels × 2) / 360":
    "= (pixeli_diagonală × 2) / 360",
  "= (motor_steps × microsteps × gear_ratio) / 360":
    "= (pași_motor × micropași × raport_transmisie) / 360",
  "= (motor_steps × microsteps × worm × pulley) / 360":
    "= (pași_motor × micropași × melc × fulie) / 360",
  "= 3600 / steps_per_degree":
    "= 3600 / pași_pe_grad",
  "= too fast for this MCU at fastest (2x) slew:":
    "= prea rapid pentru acest MCU la cea mai rapidă deplasare rapidă (2x):",
  "? Help":
    "? Ajutor",
  "A 4.7kΩ resistor is required between DATA and VCC (3.3V). Use normal 3-wire power (VCC/GND/DATA) — parasitic power is unreliable here and is not worth the saved wire.":
    "Este necesar un rezistor de 4.7kΩ între DATA și VCC (3.3V). Folosiți alimentarea normală pe 3 fire (VCC/GND/DATA) — alimentarea parazită nu este fiabilă aici și nu merită firul economisit.",
  "A DS3231 RTC provides accurate date/time and preserves it across power cycles. OnStepX uses it for timekeeping, optional PPS sync and remembering mount position.":
    "Un RTC DS3231 oferă dată/oră precisă și le păstrează între ciclurile de alimentare. OnStepX îl folosește pentru măsurarea timpului, sincronizarea PPS opțională și memorarea poziției monturii.",
  "A GPS module provides automatic date/time and location to OnStepX. The most common module is the GY-GPSV3 (NEO-M8N or NEO-6M). On the E4 the GPS goes on the":
    "Un modul GPS furnizează automat data/ora și locația către OnStepX. Cel mai comun modul este GY-GPSV3 (NEO-M8N sau NEO-6M). Pe E4, GPS-ul se conectează la",
  "A Hall sensor detects a magnet on the worm wheel. Each rotation triggers one pulse, synchronising the PEC buffer.":
    "Un senzor Hall detectează un magnet de pe roata melcată. Fiecare rotație declanșează un impuls, sincronizând bufferul PEC.",
  "A PINMAP incompatible with the MCU target (the preflight usually catches this — override it only if you're sure).":
    "Un PINMAP incompatibil cu MCU-ul țintă (verificarea preliminară de obicei îl detectează — suprascrieți doar dacă sunteți sigur).",
  "A bare sensor has an open-collector output, so TE's on-board 4.7kΩ pull-up to 3.3V keeps it safe — no divider. A KY-003 module adds its own pull-up to 5V, and GPIO36 is NOT 5V-tolerant: use a divider — 1kΩ in series from the module output, 2kΩ from the GPIO node to GND (5V × 2/3 ≈ 3.3V). Swapping the two resistors gives ~1.7V, which the ESP32 will not read as a reliable HIGH.":
    "Un senzor simplu are ieșire open-collector, deci rezistorul pull-up integrat de 4.7kΩ la 3.3V de pe TE îl menține în siguranță — fără divizor. Un modul KY-003 adaugă propriul pull-up la 5V, iar GPIO36 NU tolerează 5V: folosiți un divizor — 1kΩ în serie de la ieșirea modulului, 2kΩ de la nodul GPIO la GND (5V × 2/3 ≈ 3.3V). Inversarea celor două rezistoare dă ~1.7V, pe care ESP32 nu îl va citi ca un HIGH fiabil.",
  "A cold start is ~30s with a clear sky view (u-blox spec ~27–32s). Allow a few minutes in practice through a window or under partial sky. Subsequent starts: 1–5s (hot start, if the module has a backup battery). If you are still waiting after 10 minutes, suspect the antenna or the wiring rather than the fix time.":
    "O pornire la rece durează ~30s cu cerul liber (specificația u-blox ~27–32s). În practică, prin fereastră sau sub cer parțial acoperit, așteptați câteva minute. Pornirile ulterioare: 1–5s (pornire la cald, dacă modulul are baterie de rezervă). Dacă încă așteptați după 10 minute, suspectați antena sau cablajul, nu timpul de fixare.",
  "A driver model or feature enabled that the selected pinmap doesn't have pins for.":
    "Un model de driver sau o funcție activată pentru care pinmap-ul selectat nu are pini.",
  "A few UI niceties worth knowing:":
    "Câteva detalii utile ale interfeței:",
  "A normal OnStepX workflow looks like:":
    "Un flux de lucru OnStepX obișnuit arată astfel:",
  "A recurring, E4-specific gotcha: its own 2.4GHz WiFi can disturb the steppers, because one ESP32 juggles motion, the web server and the radio.":
    "O problemă recurentă, specifică E4: propriul WiFi de 2.4GHz poate perturba motoarele pas cu pas, deoarece un singur ESP32 gestionează mișcarea, serverul web și radioul.",
  "A required field left at":
    "Un câmp obligatoriu lăsat la",
  "A ~200-line JavaScript function that Cloudflare runs on-demand when your browser pings it. Its only job is to accept your":
    "O funcție JavaScript de ~200 de linii pe care Cloudflare o rulează la cerere când browserul dumneavoastră o apelează. Singurul ei rol este să accepte cererea dumneavoastră",
  "A3144 on PCB":
    "A3144 pe PCB",
  "ALIGN_AUTO_HOME or MFLIP_SKIP_HOME issues; mount tries to visit home before goto.":
    "Probleme cu ALIGN_AUTO_HOME sau MFLIP_SKIP_HOME; montura încearcă să treacă prin poziția de origine (home) înainte de GOTO.",
  "ALTAZM - Alt/Az, Dobsonians":
    "ALTAZM - Alt/Az, Dobson",
  "ALTAZM_UNL - Unlimited Azimuth":
    "ALTAZM_UNL - Azimut nelimitat",
  "AMS1117-3.3 / LM1117-3.3 module":
    "Modul AMS1117-3.3 / LM1117-3.3",
  "ASCOM & Serial":
    "ASCOM și serial",
  "ASCOM driver cannot connect — \"Cannot find port\"":
    "Driverul ASCOM nu se poate conecta — „Cannot find port”",
  "ASIAIR moves the mount in the OPPOSITE direction (N↔S / E↔W), even though the OnStepX web UI moves correctly":
    "ASIAIR mișcă montura în direcția OPUSĂ (N↔S / E↔W), deși interfața web OnStepX o mișcă corect",
  "ASIAIR polar alignment stops \"hard\" near the 60° rotation and errors \"rotation stopped\"":
    "Alinierea polară ASIAIR se oprește „brusc” în apropierea rotației de 60° și afișează eroarea „rotation stopped”",
  "AUTO (try both)":
    "AUTO (încearcă ambele)",
  "AUTO or 1, 3..9":
    "AUTO sau 1, 3..9",
  "AUX7 maps to SPARE_RX_PIN, which Pins.FYSETC_E4.h hard-defines as OFF whenever the TMC UART drivers are in use — i.e. the standard E4 build. You must pick and define your own ONE_WIRE_PIN; there is no working default.":
    "AUX7 corespunde lui SPARE_RX_PIN, pe care Pins.FYSETC_E4.h îl definește fix ca OFF ori de câte ori sunt folosite driverele TMC prin UART — adică în configurația E4 standard. Trebuie să alegeți și să definiți propriul ONE_WIRE_PIN; nu există o valoare implicită funcțională.",
  "AXIS3_STEPS_PER_DEGREE (mechanical)":
    "AXIS3_STEPS_PER_DEGREE (mecanic)",
  "Absent. The MCU (Teensy 4.x, STM32 MaxPCB…) has no radio at all.":
    "Absent. MCU-ul (Teensy 4.x, STM32 MaxPCB…) nu are deloc radio.",
  "Access Point (SWS hosts its own WiFi)":
    "Punct de acces (SWS își găzduiește propriul WiFi)",
  "Access Point mode (default — the board makes its own network)":
    "Mod punct de acces (implicit — placa își creează propria rețea)",
  "Across EN and GND on the ESP32 module if uploads fail.":
    "Între EN și GND pe modulul ESP32 dacă încărcările eșuează.",
  "Active LOW = switch to GND triggers home":
    "Activ LOW = contactul la GND declanșează poziția de origine (home)",
  "Active LOW for Axis2 home":
    "Activ LOW pentru poziția de origine (home) a Axis2",
  "Active LOW — short to GND = limit triggered":
    "Activ LOW — scurtcircuit la GND = limitator declanșat",
  "Active LOW — short to GND = limit triggered. Already LOW in the stock E4 Config.h":
    "Activ LOW — scurtcircuit la GND = limitator declanșat. Deja LOW în Config.h standard al E4",
  "Add a 10µF capacitor across the reset button pins (negative to ground). This delays reset so the bootloader can catch it.":
    "Adăugați un condensator de 10µF la bornele butonului de reset (negativul la masă). Acesta întârzie resetul astfel încât bootloaderul să îl poată prinde.",
  "Add a DS3231 RTC so time/location persist regardless.":
    "Adăugați un RTC DS3231 pentru ca ora/locația să se păstreze oricum.",
  "Add board URL":
    "Adăugați URL-ul plăcii",
  "Additional reduction ratio (1 if none)":
    "Raport de reducție suplimentar (1 dacă nu există)",
  "Address":
    "Adresă",
  "Address mismatch: most purple GY-BME280 boards are 0x76 (SDO→GND) so you need WEATHER BME280_0x76. Plain BME280 means 0x77 and fails silently.":
    "Adresă greșită: majoritatea plăcilor GY-BME280 mov sunt pe 0x76 (SDO→GND), deci aveți nevoie de WEATHER BME280_0x76. BME280 simplu înseamnă 0x77 și eșuează fără niciun mesaj.",
  "Adds dedicated USB power port control to the aux-switching system.":
    "Adaugă controlul unui port de alimentare USB dedicat în sistemul de comutare auxiliar.",
  "Adjust":
    "Ajustați",
  "Adjust to your focuser (calibrate by measuring)":
    "Ajustați pentru focuserul dumneavoastră (calibrați prin măsurare)",
  "Admin password for the SWS web UI. Change from \"password\" before deploying.":
    "Parola de administrator pentru interfața web SWS. Schimbați „password” înainte de utilizare.",
  "After \"Flash complete\", power off, remove the BOOT0 jumper, power back on. Board boots into OnStepX.":
    "După „Flash complete”, opriți alimentarea, scoateți jumperul BOOT0 și reporniți. Placa pornește în OnStepX.",
  "After \"Flash complete\", remove the BOOT0 link and tap":
    "După „Flash complete”, scoateți puntea BOOT0 și apăsați scurt",
  "After changing settings, give the board a few seconds before cutting power so NV writes complete.":
    "După modificarea setărilor, lăsați placa câteva secunde înainte de a întrerupe alimentarea, pentru ca scrierile în memoria NV să se finalizeze.",
  "After reflashing OnStepX, power-cycle the whole board.":
    "După reprogramarea OnStepX, opriți și reporniți întreaga placă.",
  "All axes share this":
    "Toate axele o partajează",
  "All three free-tier services are transparent: you can inspect the configurator source (GitHub Pages serves it), the Worker source, the build workflow, the PlatformIO config. If the whole thing disappeared tomorrow, you could clone all three repos and deploy your own in under an hour — see":
    "Toate cele trei servicii gratuite sunt transparente: puteți inspecta sursa configuratorului (servită de GitHub Pages), sursa Worker-ului, workflow-ul de compilare, configurația PlatformIO. Dacă totul ar dispărea mâine, ați putea clona toate cele trei repository-uri și implementa propria versiune în mai puțin de o oră — vedeți",
  "Allow menus to wrap around (bottom → top)":
    "Permite meniurilor să se reia circular (jos → sus)",
  "Almost always a pin conflict rather than a wiring fault: Axis3 and Axis5 share STEP/DIR, so if both (or the wrong one) are enabled they fight. Set":
    "Aproape întotdeauna un conflict de pini, nu o greșeală de cablaj: Axis3 și Axis5 partajează STEP/DIR, deci dacă ambele (sau cea greșită) sunt activate, intră în conflict. Setați",
  "Already set to 34 in the stock E4 Config.h, overriding the pinmap default of 39 (TB)":
    "Deja setat la 34 în Config.h standard al E4, suprascriind valoarea implicită 39 (TB) din pinmap",
  "Alt-Az de-rotation:":
    "De-rotație Alt-Az:",
  "Alternative when the I2C bus is in use — X-MIN":
    "Alternativă când magistrala I2C este ocupată — X-MIN",
  "Alternative: Bluetooth serial (SHC app)":
    "Alternativă: serial Bluetooth (aplicația SHC)",
  "Alternative: Hall effect sensor":
    "Alternativă: senzor cu efect Hall",
  "Alternative: join an existing WiFi (router/hotspot)":
    "Alternativă: conectare la un WiFi existent (router/hotspot)",
  "Always disconnect main power before changing jumpers.":
    "Deconectați întotdeauna alimentarea principală înainte de a schimba jumperele.",
  "Always run the board from the 12–24V input (5A+); USB is for data/flashing only.":
    "Alimentați întotdeauna placa de la intrarea de 12–24V (5A+); USB-ul este doar pentru date/programare.",
  "Ambient temp + humidity → dew point":
    "Temperatură ambientală + umiditate → punct de rouă",
  "Analog (divider)":
    "Analogic (divizor)",
  "Analog potentiometer on guide rate for hand-controller extensions.":
    "Potențiometru analogic pentru viteza de ghidare, pentru extensii ale telecomenzii (hand controller).",
  "Android/iOS detects no internet on the AP and may route through cellular.":
    "Android/iOS nu detectează internet pe AP și poate direcționa traficul prin rețeaua mobilă.",
  "App cannot connect — \"No internet connection\" warning":
    "Aplicația nu se poate conecta — avertisment „Nicio conexiune la internet”",
  "Apply FYSETC E4 defaults":
    "Aplicați valorile implicite FYSETC E4",
  "Apply MaxSTM3 defaults":
    "Aplicați valorile implicite MaxSTM3",
  "Apply board defaults":
    "Aplicați valorile implicite ale plăcii",
  "Arc-second offset for Axis2":
    "Decalaj în secunde de arc pentru Axis2",
  "Arc-second offset from switch to true home":
    "Decalaj în secunde de arc de la contact până la poziția de origine reală",
  "Arduino CNC Shield V3 on WeMos D1 R32 (ESP32). Deprecated per the OnStep wiki — kept for legacy builds. Recommended drivers per the wiki: LV8729 or S109 at 12V. Default below uses LV8729.":
    "Arduino CNC Shield V3 pe WeMos D1 R32 (ESP32). Învechit conform wiki-ului OnStep — păstrat pentru configurații vechi. Drivere recomandate de wiki: LV8729 sau S109 la 12V. Valoarea implicită de mai jos folosește LV8729.",
  "As a workaround, manually slew several degrees past the meridian to the east, then issue the goto. Source: discussions #53807, #58501.":
    "Ca soluție temporară, deplasați manual montura cu câteva grade dincolo de meridian spre est, apoi lansați GOTO-ul. Sursă: discuțiile #53807, #58501.",
  "Assign Feature3 as camera trigger":
    "Atribuiți Feature3 ca declanșator pentru cameră",
  "At 24V, 12V heaters run at ~4× power (P=V²/R) and may burn out.":
    "La 24V, încălzitoarele de 12V funcționează la ~4× puterea nominală (P=V²/R) și se pot arde.",
  "At 24V, motors slew faster but also run hotter — retune current. Source: discussions #65477, #68950.":
    "La 24V, motoarele se deplasează mai rapid, dar se și încălzesc mai tare — reajustați curentul. Sursă: discuțiile #65477, #68950.",
  "At 24V, reduce AXISn_DRIVER_IRUN to compensate.":
    "La 24V, reduceți AXISn_DRIVER_IRUN pentru compensare.",
  "Auto Regulation, Sizing & 24V Derating":
    "Reglare automată, dimensionare și reducerea puterii la 24V",
  "Auto meridian flips at startup":
    "Întoarceri automate la meridian la pornire",
  "Auto-filled from Axis1 worm gear":
    "Completat automat din roata melcată a Axis1",
  "Auto-home at startup before alignment":
    "Revenire automată la poziția de origine (home) la pornire, înainte de aliniere",
  "Auto-selected from your PINMAP choice":
    "Selectat automat pe baza PINMAP-ului ales",
  "Automatically sync encoders → OnStep":
    "Sincronizare automată encodere → OnStep",
  "Auxiliary":
    "Auxiliar",
  "Available For":
    "Disponibil pentru",
  "Available GPIO Reference":
    "Referință GPIO disponibile",
  "Axis 1 encoder (RA / Azm)":
    "Encoder axa 1 (RA / Azm)",
  "Axis 1 encoder type":
    "Tipul encoderului axei 1",
  "Axis 2 encoder (Dec / Alt)":
    "Encoder axa 2 (Dec / Alt)",
  "Axis 2 encoder type":
    "Tipul encoderului axei 2",
  "Axis direction convention differs between the OnStep web UI and the ASIAIR mount profile.":
    "Convenția de direcție a axelor diferă între interfața web OnStep și profilul de montură ASIAIR.",
  "Axis1 GOTO Microsteps":
    "Micropași GOTO Axis1",
  "Axis1 RA/Azimuth — Driver":
    "Axis1 RA/Azimut — Driver",
  "Axis1 RA/Azimuth — Steps Per Degree Calculator":
    "Axis1 RA/Azimut — Calculator pași pe grad",
  "Axis1 stepper driver":
    "Driverul motorului pas cu pas Axis1",
  "Axis1 — Advanced":
    "Axis1 — Avansat",
  "Axis1 — Microsteps & Current":
    "Axis1 — Micropași și curent",
  "Axis2 Dec/Altitude — Driver":
    "Axis2 Dec/Altitudine — Driver",
  "Axis2 Dec/Altitude — Steps Per Degree Calculator":
    "Axis2 Dec/Altitudine — Calculator de pași pe grad",
  "Axis2 stepper driver":
    "Driverul motorului pas cu pas Axis2",
  "Axis2 — Advanced":
    "Axis2 — Avansat",
  "Axis2 — Microsteps & Current":
    "Axis2 — Micropași și curent",
  "Axis3 Rotator/De-Rotator — Steps Per Degree Calculator":
    "Axis3 Rotator/De-rotator — Calculator de pași pe grad",
  "Axis3 — shares MOT-Z with Axis5, see the Focuser section":
    "Axis3 — partajează MOT-Z cu Axis5, consultați secțiunea Focuser",
  "Axis4 is the MOT-E (E0-AXIS) output and uses dedicated pins (GPIO16 STEP, GPIO17 DIR) — no pin-sharing conflicts. Enabled as TMC2209 in the stock E4 Config.h.":
    "Axis4 este ieșirea MOT-E (E0-AXIS) și folosește pini dedicați (GPIO16 STEP, GPIO17 DIR) — fără conflicte de partajare a pinilor. Activat ca TMC2209 în Config.h original al E4.",
  "Axis5 shares STEP/DIR pins with Axis3 (rotator). Only one can be active at a time. Enabled as TMC2209 in the stock E4 Config.h.":
    "Axis5 partajează pinii STEP/DIR cu Axis3 (rotator). Doar unul poate fi activ la un moment dat. Activat ca TMC2209 în Config.h original al E4.",
  "Axis5 uses GPIO14 (STEP) and GPIO12 (DIR) — the SAME pins as Axis3 (rotator). Enable only ONE: if AXIS5_DRIVER_MODEL is set, set AXIS3_DRIVER_MODEL to OFF and vice versa.":
    "Axis5 folosește GPIO14 (STEP) și GPIO12 (DIR) — ACEIAȘI pini ca Axis3 (rotator). Activați doar UNUL: dacă AXIS5_DRIVER_MODEL este setat, setați AXIS3_DRIVER_MODEL pe OFF și invers.",
  "BLE gamepad (ESP32 only)":
    "Gamepad BLE (doar ESP32)",
  "BLUETOOTH (ESP32 only)":
    "BLUETOOTH (doar ESP32)",
  "BME280 Weather Sensor":
    "Senzor meteo BME280",
  "BME280 and DS3231 use different addresses, so they coexist on the same I2C bus.":
    "BME280 și DS3231 folosesc adrese diferite, deci coexistă pe aceeași magistrală I2C.",
  "BME280 and/or DS3231 not detected — no weather data, time never restored":
    "BME280 și/sau DS3231 nedetectate — fără date meteo, ora nu este niciodată restaurată",
  "BME280 at 0x76":
    "BME280 la adresa 0x76",
  "BME280 — Temperature / Humidity / Pressure":
    "BME280 — Temperatură / Umiditate / Presiune",
  "BME280 — Weather sensor — temp / humidity / pressure":
    "BME280 — Senzor meteo — temperatură / umiditate / presiune",
  "BME280, DS3231 — or GPS RX (Serial2)":
    "BME280, DS3231 — sau RX GPS (Serial2)",
  "BME280, DS3231 — or GPS TX (Serial2)":
    "BME280, DS3231 — sau TX GPS (Serial2)",
  "BOOT0 jumper":
    "jumperul BOOT0",
  "BOTH (ESP32 only)":
    "BOTH (doar ESP32)",
  "BTT SKR PRO on OnStep wiki":
    "BTT SKR PRO pe wiki-ul OnStep",
  "BULB mode":
    "modul BULB",
  "Background":
    "Fundal",
  "Background settings":
    "Setări de fundal",
  "Base avg step rate":
    "Rată medie de pași de bază",
  "Battery-backed real-time clock":
    "Ceas în timp real cu baterie de rezervă",
  "Baud rate for async serial mode (ignored for SERIAL_ST4)":
    "Rata baud pentru modul serial asincron (ignorată pentru SERIAL_ST4)",
  "Baud rate for debug UART":
    "Rata baud pentru UART-ul de depanare",
  "Because":
    "Deoarece",
  "Before any Compile actually goes to the cloud, a local validator scans your form for common mistakes so you don't waste a 2-minute build on an obvious oversight:":
    "Înainte ca o compilare să plece efectiv în cloud, un validator local vă verifică formularul pentru greșeli frecvente, ca să nu irosiți o compilare de 2 minute pe o scăpare evidentă:",
  "Before you flash":
    "Înainte de a scrie firmware-ul (flash)",
  "Before you flash anything:":
    "Înainte de a scrie orice firmware (flash):",
  "Best accuracy:":
    "Cea mai bună precizie:",
  "Beta coefficient (often 3950 or 3435)":
    "Coeficient beta (adesea 3950 sau 3435)",
  "BigTreeTech 3D-printer board repurposed for OnStep (STM32F407ZGT6). Defaults assume TMC2209 UART step-sticks — if you've got TMC5160 SPI drivers plugged in, override the driver-model fields. Flash via WebUSB DFU (BOOT0 jumper + reset to enter DFU mode).":
    "Placă BigTreeTech pentru imprimante 3D reutilizată pentru OnStep (STM32F407ZGT6). Valorile implicite presupun module step-stick TMC2209 UART — dacă aveți montate drivere TMC5160 SPI, modificați câmpurile de model de driver. Se programează prin WebUSB DFU (jumper BOOT0 + reset pentru a intra în modul DFU).",
  "BigTreeTech's 3D-printer board repurposed for OnStep. Same ST DFU protocol as the BlackPill, just a different entry procedure:":
    "Placa BigTreeTech pentru imprimante 3D reutilizată pentru OnStep. Același protocol ST DFU ca la BlackPill, doar cu o procedură de intrare diferită:",
  "Bipolar Hall latch":
    "Comutator Hall bipolar cu zăvorâre (latch)",
  "Block 0 is always sent, even if blank, because that's the trigger that erases the whole chip; subsequent all-":
    "Blocul 0 este trimis întotdeauna, chiar dacă este gol, deoarece el declanșează ștergerea întregului cip; paginile ulterioare formate doar din",
  "Board":
    "Placă",
  "Board address":
    "Adresa plăcii",
  "Board address in AP mode":
    "Adresa plăcii în modul AP",
  "Board doesn't work at all — no LED, no USB, nothing":
    "Placa nu funcționează deloc — niciun LED, niciun USB, nimic",
  "Board flashes OK but won't boot — logs \"LEDC not initialized\" then nothing":
    "Firmware-ul se scrie pe placă fără erori, dar aceasta nu pornește — afișează „LEDC not initialized” și apoi nimic",
  "Board overview, GPIO map & interactive diagram":
    "Prezentarea plăcii, harta GPIO și diagrama interactivă",
  "Board pinmap selection. MaxPCB4w (WiFi) and MaxPCB4e (Ethernet) variants share the":
    "Selectarea pinmap-ului plăcii. Variantele MaxPCB4w (WiFi) și MaxPCB4e (Ethernet) folosesc același",
  "Board selection & OnStepX ref":
    "Selectarea plăcii și referința OnStepX",
  "Board-by-board USB preparation":
    "Pregătirea USB placă cu placă",
  "Boot-strap pin, held low by a 1.8kΩ pull-down":
    "Pin de bootstrap, ținut LOW de un rezistor pull-down de 1.8kΩ",
  "Bosch BME280 3-in-1 environmental sensor. I2C address 0x76 (SDO→GND) or 0x77 (SDO→VCC). Requires Adafruit libraries.":
    "Senzor de mediu Bosch BME280 3-în-1. Adresa I2C 0x76 (SDO→GND) sau 0x77 (SDO→VCC). Necesită bibliotecile Adafruit.",
  "Both on GPIO13. Current OnStepX refuses both at once (this configurator's build service turns them OFF); on the FAN MOSFET the LED also needs STATUS_LED_ON_STATE HIGH":
    "Ambele pe GPIO13. OnStepX actual refuză ambele simultan (serviciul de compilare al acestui configurator le setează pe OFF); pe MOSFET-ul FAN, LED-ul necesită și STATUS_LED_ON_STATE HIGH",
  "Both run on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast). Both work with most StepStick drivers (DRV8825 / A4988 / LV8729) plus TMC2130 and TMC5160. Teensy 3.2 uses the HalfKay bootloader in the same \"block_size ≥ 512\" branch as 4.0/4.1 — the WebHID flasher covers all of them:":
    "Ambele rulează pe Teensy 3.2 (moderat de rapid) sau Teensy 4.0 (foarte rapid). Ambele funcționează cu majoritatea driverelor StepStick (DRV8825 / A4988 / LV8729), plus TMC2130 și TMC5160. Teensy 3.2 folosește bootloader-ul HalfKay în aceeași ramură „block_size ≥ 512” ca 4.0/4.1 — programatorul WebHID le acoperă pe toate:",
  "Branch / tag / commit SHA of the upstream repo. Leave as":
    "Ramura / tag-ul / SHA-ul commit-ului din depozitul upstream. Lăsați",
  "Brand":
    "Marcă",
  "Browse to http://192.168.0.1 to confirm the server is up.":
    "Accesați http://192.168.0.1 pentru a confirma că serverul funcționează.",
  "Browser requirements":
    "Cerințe pentru browser",
  "Build & flash a clean firmware from this configurator's":
    "Compilați și scrieți (flash) un firmware curat din fila",
  "Build succeeded, Flash button is disabled":
    "Compilare reușită, butonul Flash este dezactivat",
  "Building both?":
    "Le compilați pe amândouă?",
  "Building through this configurator's Compile & Flash tab avoids this entirely — the libraries are already in the build environment.":
    "Compilarea prin fila Compile & Flash a acestui configurator evită complet problema — bibliotecile sunt deja în mediul de compilare.",
  "Built into the E4 — already there, nothing to add.":
    "Integrat în E4 — există deja, nimic de adăugat.",
  "Built-in ESP32":
    "ESP32 integrat",
  "Built-in ESP32 wireless & Bluetooth":
    "WiFi și Bluetooth integrate în ESP32",
  "Built-in WiFi AP mode":
    "Mod punct de acces WiFi integrat",
  "Built-in series resistor":
    "Rezistor serie integrat",
  "Built-in web UI (SmartWebServer features as a plugin instead of a separate MCU). ESP32 only in practice.":
    "Interfață web integrată (funcțiile SmartWebServer ca plugin în loc de un MCU separat). În practică, doar ESP32.",
  "Bundle the outputs (firmware binary, bootloader, partitions, and — for ESP32 — a pre-merged single-file image) into":
    "Împachetează rezultatele (binarul firmware-ului, bootloader-ul, partițiile și — pentru ESP32 — o imagine pre-combinată într-un singur fișier) în",
  "Burning smell or smoke near USB / jumper pins get hot":
    "Miros de ars sau fum lângă USB / pinii jumperelor se încălzesc",
  "Buzzer — Status buzzer (shared with the FAN output)":
    "Buzzer — Buzzer de stare (partajat cu ieșirea FAN)",
  "CALIBRATION REQUIRED: AXIS4_STEPS_PER_MICRON must be measured for your focuser.":
    "CALIBRARE NECESARĂ: AXIS4_STEPS_PER_MICRON trebuie măsurat pentru focuser-ul dumneavoastră.",
  "CH340 USB-serial issues on Windows 11 solved by driver downgrade and DTR configuration.":
    "Probleme USB-serial CH340 pe Windows 11 rezolvate prin revenirea la o versiune mai veche a driverului și configurarea DTR.",
  "CHANGE THIS — 8+ chars for WPA2":
    "SCHIMBAȚI ACEST LUCRU — minimum 8 caractere pentru WPA2",
  "CHECK THE GPIO15 → M-TX WIRE (Z-min pin of ZDIAG-EN → M-TX on the TMC UART header). This is the #1 cause — it must be securely connected.":
    "VERIFICAȚI FIRUL GPIO15 → M-TX (pinul Z-min de pe ZDIAG-EN → M-TX pe conectorul TMC UART). Aceasta este cauza nr. 1 — trebuie conectat ferm.",
  "CLI alternative if you have Teensyduino installed:":
    "Alternativă în linia de comandă, dacă aveți Teensyduino instalat:",
  "CNC3 — WeMos D1 R32 (ESP32) — Deprecated":
    "CNC3 — WeMos D1 R32 (ESP32) — Învechit",
  "CPU Frequency":
    "Frecvența CPU",
  "Calibration:":
    "Calibrare:",
  "Camera Resolution X (pixels)":
    "Rezoluție cameră X (pixeli)",
  "Camera Resolution Y (pixels)":
    "Rezoluție cameră Y (pixeli)",
  "Camera connection. 2.5mm for Canon.":
    "Conexiune cameră. 2.5mm pentru Canon.",
  "Can I run this offline?":
    "Îl pot folosi offline?",
  "Can someone else clone this and run their own instance?":
    "Poate altcineva să cloneze acest proiect și să ruleze propria instanță?",
  "Cannot upload firmware — USB not recognized or upload fails silently":
    "Nu se poate încărca firmware-ul — USB nerecunoscut sau încărcarea eșuează fără mesaj",
  "Canon and Nikon use the same 2.5mm TRS plug but with Tip/Ring swapped. Check the table below before soldering.":
    "Canon și Nikon folosesc aceeași mufă TRS de 2.5mm, dar cu Tip/Ring inversate. Verificați tabelul de mai jos înainte de a lipi.",
  "Cap max duty — set ~64 (≈25%) when running 24V":
    "Limitați factorul de umplere maxim — setați ~64 (≈25%) la 24V",
  "Change it.":
    "Schimbați-o.",
  "Change the WiFi channel if overlapping with other networks.":
    "Schimbați canalul WiFi dacă se suprapune cu alte rețele.",
  "Channel 2 (TB/GPIO39) nominal temp °C":
    "Canal 2 (TB/GPIO39) temperatură nominală °C",
  "Cheap dew-strap NTC":
    "NTC ieftin pentru bandă anti-rouă",
  "Cheapest. Works as-is (firmware debounce + built-in pull-up); add a 1–2kΩ pull-up or RC only if a long cable picks up noise.":
    "Cel mai ieftin. Funcționează ca atare (debounce în firmware + pull-up integrat); adăugați un pull-up de 1–2kΩ sau un filtru RC doar dacă un cablu lung captează zgomot.",
  "Check for 3.3V sag:":
    "Verificați căderea de tensiune pe 3.3V:",
  "Check out this repo's build recipe":
    "Consultați rețeta de compilare a acestui depozit",
  "Check the GPIO15 → M-TX wire and that the factory SDA↔M-RX / SCL↔M-TX caps are off.":
    "Verificați firul GPIO15 → M-TX și că jumperele din fabrică SDA↔M-RX / SCL↔M-TX sunt scoase.",
  "Check the plugins you want":
    "Bifați plugin-urile dorite",
  "Check the pull-ups: SDA and SCL each need ~4.7kΩ to 3.3V. Most breakouts have them — if you removed them, the bus is dead. Put them back.":
    "Verificați rezistoarele pull-up: SDA și SCL au nevoie fiecare de ~4.7kΩ spre 3.3V. Majoritatea modulelor le au — dacă le-ați scos, magistrala nu funcționează. Puneți-le la loc.",
  "Check the supply: the E4 I2C header pin is 5V, not 3.3V. Power the modules from 3.3V, and prefer the external LM1117 tap — the onboard 3.3V regulator is already loaded by the ESP32 + WiFi and can brown out with two modules on it.":
    "Verificați alimentarea: pinul conectorului I2C al E4 este de 5V, nu de 3.3V. Alimentați modulele de la 3.3V și preferați o derivație dintr-un LM1117 extern — regulatorul de 3.3V de pe placă este deja încărcat de ESP32 + WiFi și poate cădea sub tensiune cu două module pe el.",
  "Checking…":
    "Se verifică…",
  "Chip":
    "Cip",
  "Clear all saved form state (every tab, every mode) and reload the page":
    "Ștergeți toată starea salvată a formularului (toate filele, toate modurile) și reîncărcați pagina",
  "Click":
    "Apăsați",
  "Click the":
    "Apăsați pe",
  "Click the sticky":
    "Apăsați butonul fix",
  "Click: fetches the Config.h from hjd1964/OnStepX branch \"E4\" (180+ fields) into the Output tab, keeps Source ref on main (latest OnStepX), and ticks the Website plugin. Matches Howard's documented E4 + Website build.":
    "Clic: preia Config.h din ramura „E4” a hjd1964/OnStepX (180+ câmpuri) în fila Output, păstrează referința sursă pe main (cel mai recent OnStepX) și bifează plugin-ul Website. Corespunde compilării E4 + Website documentate de Howard.",
  "Close any other program holding the port (Arduino Serial Monitor, screen, PuTTY).":
    "Închideți orice alt program care ocupă portul (Serial Monitor din Arduino, screen, PuTTY).",
  "Cloudflare Worker KV (if rate limit is enabled)":
    "Cloudflare Worker KV (dacă limitarea ratei este activată)",
  "Cloudflare Worker → GitHub Actions as a workflow input":
    "Cloudflare Worker → GitHub Actions ca intrare de workflow",
  "Commercial dew rings use a 10kΩ NTC.":
    "Inelele anti-rouă comerciale folosesc un NTC de 10kΩ.",
  "Common NTC beta values":
    "Valori beta NTC uzuale",
  "Common problems and verified solutions collected from the OnStep":
    "Probleme frecvente și soluții verificate, adunate de pe forumul comunității",
  "Communication":
    "Comunicație",
  "Community Discussions":
    "Discuții ale comunității",
  "Community note — \"focuser has no torque / does not move\".":
    "Notă din comunitate — „focuser-ul nu are cuplu / nu se mișcă”.",
  "Community note — default limit behaviour:":
    "Notă din comunitate — comportamentul implicit al limitelor:",
  "Community note — the E4 has NO onboard clock.":
    "Notă din comunitate — E4 NU are ceas pe placă.",
  "Community notes (OnStep forum)":
    "Note din comunitate (forumul OnStep)",
  "Community notes — WiFi self-interference & range":
    "Note din comunitate — auto-interferență WiFi și rază de acțiune",
  "Community recipe — systematic first light":
    "Rețetă din comunitate — prima punere în funcțiune metodică",
  "Compact 2-axis OnStep design intended to embed inside the mount body. Runs on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast — pick teensy40 on the Compile tab). Works with most StepStick drivers (DRV8825 / A4988 / LV8729), plus TMC2130 and TMC5160. Defaults below assume DRV8825 step-sticks; override AXIS_DRIVER_MODEL if you have TMC SPI drivers wired in. Note: Teensy 4.0 has only ~1KB EEPROM emulation vs Teensy 3.2's 2KB — affects catalog/PEC storage size.":
    "Design OnStep compact cu 2 axe, destinat integrării în corpul monturii. Rulează pe Teensy 3.2 (moderat de rapid) sau Teensy 4.0 (foarte rapid — alegeți teensy40 în fila Compile). Funcționează cu majoritatea driverelor StepStick (DRV8825 / A4988 / LV8729), plus TMC2130 și TMC5160. Valorile implicite de mai jos presupun module step-stick DRV8825; modificați AXIS_DRIVER_MODEL dacă aveți drivere TMC SPI conectate. Notă: Teensy 4.0 are doar ~1KB de emulare EEPROM față de 2KB la Teensy 3.2 — afectează dimensiunea de stocare pentru catalog/PEC.",
  "Companion 3D designs:":
    "Modele 3D însoțitoare:",
  "Compass + GPS, external SMA antenna.":
    "Busolă + GPS, antenă SMA externă.",
  "Compatible Hardware Guide":
    "Ghid de hardware compatibil",
  "Compatible sensors, part numbers & specs":
    "Senzori compatibili, coduri de piesă și specificații",
  "Compilation error: \"analogWriteResolution was not declared in this scope\"":
    "Eroare de compilare: „analogWriteResolution was not declared in this scope”",
  "Compilation error: Multiple libraries found for \"TMC2209.h\"":
    "Eroare de compilare: s-au găsit mai multe biblioteci pentru „TMC2209.h”",
  "Compilation fails — missing required libraries (BME280, Sensor, Makuna RTC)":
    "Compilarea eșuează — lipsesc biblioteci necesare (BME280, Sensor, Makuna RTC)",
  "Compile & Flash":
    "Compilare și scriere firmware (flash)",
  "Compile Firmware":
    "Compilați firmware-ul",
  "Compile Online":
    "Compilare online",
  "Compile starts but fails":
    "Compilarea pornește, dar eșuează",
  "Compile uses whatever is in this textarea.":
    "Compilarea folosește ce se află în această zonă de text.",
  "Complete E4 reference: pinout, safety, schematics, power recommendations (12VDC/5A), peripheral wiring and the 10µF cap upload fix.":
    "Referință completă E4: pinout, siguranță, scheme, recomandări de alimentare (12VDC/5A), cablarea perifericelor și remedierea cu condensatorul de 10µF pentru încărcare.",
  "Component":
    "Componentă",
  "Concrete example:":
    "Exemplu concret:",
  "Config":
    "Configurație",
  "Configuration (Config.h)":
    "Configurație (Config.h)",
  "Configuration Generator":
    "Generator de configurație",
  "Configurator & Compile":
    "Configurator și compilare",
  "Configure OnStepX in OnStepX mode → Compile & Flash to your mount controller board. Then flip to SHC mode, configure the hand pendant, Compile & Flash to your SHC board. Two separate flashes, one site.":
    "Configurați OnStepX în modul OnStepX → Compile & Flash pe placa controlerului monturii. Apoi treceți în modul SHC, configurați telecomanda, Compile & Flash pe placa SHC. Două programări separate, un singur site.",
  "Configures external HC-05/HC-06 Bluetooth modules via AT commands at startup.":
    "Configurează la pornire modulele Bluetooth externe HC-05/HC-06 prin comenzi AT.",
  "Confirm SERIAL_BAUD matches between Config.h and SWS.":
    "Verificați ca SERIAL_BAUD să fie identic în Config.h și SWS.",
  "Confirm VID:PID":
    "Verificați ca VID:PID",
  "Confirm the correct mount type/profile is selected in ASIAIR (OnStep / \"OnStep Electronics\").":
    "Verificați ca tipul/profilul corect de montură să fie selectat în ASIAIR (OnStep / „OnStep Electronics”).",
  "Confirm the factory jumper caps are removed and only the GPIO15 → M-TX wire is fitted.":
    "Verificați ca jumperele din fabrică să fie scoase și să fie montat doar firul GPIO15 → M-TX.",
  "Confirmed against":
    "Confirmat în",
  "Conflicting TMC2209 libraries (TMC2209 by hjd1964 vs TMC2209Stepper).":
    "Biblioteci TMC2209 în conflict (TMC2209 de hjd1964 vs TMC2209Stepper).",
  "Connect To":
    "Conectare la",
  "Connect USB.":
    "Conectați cablul USB.",
  "Connect USB. Most dev boards (and MaxESP*) auto-reset into bootloader when esptool grabs the port.":
    "Conectați cablul USB. Majoritatea plăcilor de dezvoltare (și MaxESP*) intră automat în bootloader când esptool preia portul.",
  "Connect the cable shield at one end only. Source: discussions #66142, #67866.":
    "Conectați ecranul cablului la un singur capăt. Sursă: discuțiile #66142, #67866.",
  "Connect to \"OnStepX\" WiFi":
    "Conectați-vă la rețeaua WiFi „OnStepX”",
  "Connect to the I2C header (4-pin 2.54mm header in the centre block: 5V, GND, SDA, SCL — no 3.3V). Remove the factory SDA↔M-RX / SCL↔M-TX caps first. A purple 3.3V-only GY-BME280 needs a 3.3V regulator; 5V-ready modules (regulator + level shifter) can use the 5V pin.":
    "Conectați la conectorul cu pini I2C (conector cu 4 pini de 2.54mm în blocul central: 5V, GND, SDA, SCL — fără 3.3V). Scoateți mai întâi jumperele din fabrică SDA↔M-RX / SCL↔M-TX. Un GY-BME280 mov, doar de 3.3V, necesită un regulator de 3.3V; modulele compatibile cu 5V (regulator + convertor de nivel) pot folosi pinul de 5V.",
  "Connect your board via USB and put it into programming mode:":
    "Conectați placa prin USB și puneți-o în modul de programare:",
  "Connection":
    "Conexiune",
  "Connection to OnStep mount":
    "Conexiune la montura OnStep",
  "Connector positions mirror the real FYSETC E4 board: the":
    "Pozițiile conectorilor reproduc placa FYSETC E4 reală: blocul de borne cu șurub",
  "Connectors":
    "Conectori",
  "Constraints":
    "Constrângeri",
  "Contents":
    "Cuprins",
  "Controller":
    "Controler",
  "Controls a DSLR shutter with full galvanic isolation. Compatible with Canon, Nikon, Sony, Fujifilm and most cameras with a remote port.":
    "Comandă declanșatorul unui DSLR cu izolare galvanică completă. Compatibil cu Canon, Nikon, Sony, Fujifilm și majoritatea camerelor cu port de telecomandă.",
  "Coordinate refraction mode":
    "Modul de refracție pentru coordonate",
  "Copy the plugin folder into your OnStepX sketch under":
    "Copiați folderul plugin-ului în sketch-ul OnStepX, în",
  "Copy to Clipboard":
    "Copiere în clipboard",
  "Correction circuitry to improve ESP32 thermistor readings is documented in the official":
    "Circuitul de corecție pentru îmbunătățirea citirilor termistorului pe ESP32 este documentat în",
  "Critical — jumpers and the TMC UART wire.":
    "Critic — jumperele și firul TMC UART.",
  "Current @12V":
    "Curent @12V",
  "Current @24V":
    "Curent @24V",
  "Current limit R":
    "Rezistor de limitare a curentului",
  "DEC/Alt — Declination / Altitude stepper":
    "DEC/Alt — Motor pas cu pas declinație / altitudine",
  "DS18B20 DATA (with 4.7kΩ to 3.3V)":
    "DATA DS18B20 (cu 4.7kΩ spre 3.3V)",
  "DS18B20 Temperature Sensors":
    "Senzori de temperatură DS18B20",
  "DS18B20 is the reliable alternative":
    "DS18B20 este alternativa fiabilă",
  "DS18B20 — OneWire digital temperature sensor":
    "DS18B20 — Senzor digital de temperatură OneWire",
  "DS3231 = 0x68. No conflict with BME280 (0x76/0x77).":
    "DS3231 = 0x68. Niciun conflict cu BME280 (0x76/0x77).",
  "DS3231 RTC Module":
    "Modul RTC DS3231",
  "DS3231 VCC — the ZS-042 pulls SDA/SCL up to its VCC, so keep it at 3.3V":
    "VCC DS3231 — ZS-042 trage SDA/SCL la VCC-ul său, deci mențineți-l la 3.3V",
  "DS3231 — Battery-backed real-time clock (ZS-042)":
    "DS3231 — Ceas în timp real cu baterie de rezervă (ZS-042)",
  "DSLR camera trigger for astrophotography":
    "Declanșator pentru camera DSLR în astrofotografie",
  "DSLR remote plug wiring by brand:":
    "Cablajul mufei de telecomandă DSLR, în funcție de marcă:",
  "DSLR shutter":
    "Declanșator DSLR",
  "DSLR shutter — DSLR shutter release (via optocoupler)":
    "Declanșator DSLR — Declanșarea obturatorului DSLR (prin optocuplor)",
  "Data":
    "Date",
  "Data from":
    "Date din",
  "Date/Time source":
    "Sursă dată/oră",
  "Debounce RC circuit (recommended for mechanical switches):":
    "Circuit RC anti-debounce (recomandat pentru comutatoarele mecanice):",
  "Debug":
    "Depanare",
  "Dec/Alt direction":
    "Direcție Dec/Alt",
  "Dec/Alt step":
    "Pas Dec/Alt",
  "Dedicated limit switch input (original pinmap)":
    "Intrare dedicată pentru limitatorul de cursă (pinmap original)",
  "Default":
    "Implicit",
  "Default Config.h FEATURE block:":
    "Blocul FEATURE implicit din Config.h:",
  "Default Config.h enables TMC2209 for Axis4. For a different driver, change AXIS4_DRIVER_MODEL.":
    "Config.h implicit activează TMC2209 pentru Axis4. Pentru alt driver, modificați AXIS4_DRIVER_MODEL.",
  "Default Config.h: LIMIT_SENSE_PIN = GPIO34 (X-MIN). GPIO34 therefore serves as BOTH Axis1 home AND limit. To separate them, change LIMIT_SENSE_PIN to 39 (TB).":
    "Config.h implicit: LIMIT_SENSE_PIN = GPIO34 (X-MIN). Astfel, GPIO34 servește ATÂT ca poziție de origine (home) pentru Axis1, CÂT ȘI ca limită. Pentru a le separa, schimbați LIMIT_SENSE_PIN în 39 (TB).",
  "Default E4 Config.h enables WEATHER and TIME_LOCATION_SOURCE even if you lack those devices; the libraries must still be installed.":
    "Config.h implicit pentru E4 activează WEATHER și TIME_LOCATION_SOURCE chiar dacă nu aveți aceste dispozitive; bibliotecile trebuie totuși instalate.",
  "Default driver":
    "Driver implicit",
  "Default driver for focuser":
    "Driver implicit pentru focuser",
  "Default is 9600 8N1. Some modules ship at 38400 or 115200. Verify with a serial monitor first.":
    "Implicit este 9600 8N1. Unele module vin setate la 38400 sau 115200. Verificați mai întâi cu un monitor serial.",
  "Default passwords are public.":
    "Parolele implicite sunt publice.",
  "Default value":
    "Valoare implicită",
  "Default: board creates its own WiFi network":
    "Implicit: placa își creează propria rețea WiFi",
  "Degrees for acceleration":
    "Grade pentru accelerare",
  "Degrees offset for unidirectional approach":
    "Decalaj în grade pentru apropierea unidirecțională",
  "Degrees to stop on abort":
    "Grade pentru oprire la anulare",
  "Density":
    "Densitate",
  "Depends on the flow:":
    "Depinde de situație:",
  "Desired base slew rate":
    "Viteza de bază dorită pentru deplasarea rapidă",
  "Detail":
    "Detaliu",
  "Device":
    "Dispozitiv",
  "Device name (≤16 chars). Becomes mDNS \"onstepsws.local\"":
    "Numele dispozitivului (≤16 caractere). Devine numele mDNS „onstepsws.local”",
  "Dew Heater":
    "Încălzitor anti-rouă",
  "Dew Heater 1":
    "Încălzitor anti-rouă 1",
  "Dew Heater 1 reads thermistor channel 1 (TE)":
    "Încălzitorul anti-rouă 1 citește canalul de termistor 1 (TE)",
  "Dew Heater 1 — Dew heater strap 1 (onboard MOSFET)":
    "Încălzitor anti-rouă 1 — Bandă de încălzire anti-rouă 1 (MOSFET pe placă)",
  "Dew Heater 2":
    "Încălzitor anti-rouă 2",
  "Dew Heater 2 reads thermistor channel 2 (TB)":
    "Încălzitorul anti-rouă 2 citește canalul de termistor 2 (TB)",
  "Dew Heater 2 — Dew heater strap 2 (onboard MOSFET)":
    "Încălzitor anti-rouă 2 — bandă încălzitoare anti-rouă 2 (MOSFET integrat)",
  "Dew Heater Control — Direct Connection":
    "Controlul încălzitoarelor anti-rouă — conexiune directă",
  "Dew Heater Implementation":
    "Implementarea încălzitorului anti-rouă",
  "Dew heater via onboard MOSFET":
    "Încălzitor anti-rouă prin MOSFET-ul integrat",
  "Dew point:":
    "Punct de rouă:",
  "Dew-heater strap 1 — both wires to the 2-pin terminal":
    "Bandă încălzitoare anti-rouă 1 — ambele fire la borna cu 2 pini",
  "Dew-heater strap 2 — both wires to the 2-pin terminal":
    "Bandă încălzitoare anti-rouă 2 — ambele fire la borna cu 2 pini",
  "Digital temperature sensors (±0.5°C). Used for focuser temp compensation, dew-heater feedback or ambient monitoring.":
    "Senzori digitali de temperatură (±0,5°C). Folosiți pentru compensarea termică a focuserului, feedbackul încălzitoarelor anti-rouă sau monitorizarea mediului.",
  "Digital temperature sensors on single wire":
    "Senzori digitali de temperatură pe un singur fir",
  "Directive":
    "Directivă",
  "Disable \"Auto-switch to better network\".":
    "Dezactivați „Comutare automată la o rețea mai bună”.",
  "Disable backlash during guiding":
    "Dezactivarea compensării jocului (backlash) în timpul ghidajului",
  "Disable mobile data (4G/5G) when connected.":
    "Dezactivați datele mobile (4G/5G) după conectare.",
  "Display":
    "Afișaj",
  "Display name":
    "Nume afișat",
  "Divider: 1kΩ series + 2kΩ to GND ≈ 3.3V":
    "Divizor: 1kΩ în serie + 2kΩ la GND ≈ 3,3V",
  "Divider: 1kΩ series + 2kΩ to GND ≈ 3.3V (the module pulls up to 5V)":
    "Divizor: 1kΩ în serie + 2kΩ la GND ≈ 3,3V (modulul trage linia la 5V)",
  "Do NOT attach stepper motors while flashing":
    "NU conectați motoarele pas cu pas în timpul programării firmware-ului",
  "Do NOT enable both AP and Station mode simultaneously.":
    "NU activați simultan modurile AP și Station.",
  "Do not remove the pull-up resistors from your breakouts":
    "Nu îndepărtați rezistențele pull-up de pe modulele dumneavoastră",
  "Does NOT work in ALTAZM mode":
    "NU funcționează în modul ALTAZM",
  "Don't put WiFi passwords, API keys, or other secrets in Config.h.":
    "Nu puneți parole WiFi, chei API sau alte secrete în Config.h.",
  "Downgrade ESP32 board package to v2.0.11 or earlier.":
    "Reveniți la pachetul de plăci ESP32 v2.0.11 sau mai vechi.",
  "Download":
    "Descărcați",
  "Download Config.h":
    "Descărcați Config.h",
  "Download Firmware":
    "Descărcați firmware-ul",
  "Download the":
    "Descărcați",
  "Drag the file onto the Teensy Loader window, or File → Open HEX File. If it opens but doesn't flash, press the white program button on the Teensy — it flashes on button press, not on file open.":
    "Trageți fișierul în fereastra Teensy Loader sau folosiți File → Open HEX File. Dacă se deschide dar nu se programează, apăsați butonul alb de programare de pe Teensy — programarea se face la apăsarea butonului, nu la deschiderea fișierului.",
  "Driver microstep mode":
    "Modul de micropași al driverului",
  "Driver microsteps":
    "Micropașii driverului",
  "Driver status shows \"Unknown\" or \"Comms Failure\"":
    "Starea driverului afișează „Unknown” sau „Comms Failure”",
  "Driver status/fault detection":
    "Detectarea stării/defectelor driverului",
  "Drivers":
    "Drivere",
  "Drives the FAN MOSFET — status LED, buzzer, reticle or intervalometer":
    "Comandă MOSFET-ul FAN — LED de stare, buzzer, reticul sau intervalometru",
  "Drop":
    "Plasați",
  "During slews, lower microsteps = faster but coarser":
    "În timpul deplasărilor rapide, mai puțini micropași = mai rapid, dar mai grosier",
  "E4 Config.h defaults to BME280_0x76. If your breakout pulls SDO to VCC, use BME280_0x77 (or BME280 for auto-detect).":
    "Config.h pentru E4 folosește implicit BME280_0x76. Dacă modulul dumneavoastră trage SDO la VCC, folosiți BME280_0x77 (sau BME280 pentru detectare automată).",
  "E4 Pin":
    "Pin E4",
  "E4 series resistor = 4.7kΩ":
    "Rezistența serie a E4 = 4,7kΩ",
  "E4 series resistor on TB":
    "Rezistența serie a E4 pe TB",
  "E4 wiki":
    "wiki-ul E4",
  "E4 wiring:":
    "Cablare E4:",
  "EQ3D and the V5 Lite / V4 Pro are different boards":
    "EQ3D și V5 Lite / V4 Pro sunt plăci diferite",
  "ESP, the E4 and the web page — what is what":
    "ESP-ul, E4 și pagina web — ce este fiecare",
  "ESP32 (MaxESP3, MaxESP4, FYSETC_E4, Terrans V5 Pro, generic ESP32 dev boards)":
    "ESP32 (MaxESP3, MaxESP4, FYSETC_E4, Terrans V5 Pro, plăci de dezvoltare ESP32 generice)",
  "ESP32 (recommended for SHC)":
    "ESP32 (recomandat pentru SHC)",
  "ESP32 (recommended — WiFi + BLE)":
    "ESP32 (recomandat — WiFi + BLE)",
  "ESP32 - Dual-core Xtensa LX6 @ 240MHz":
    "ESP32 - Xtensa LX6 dual-core la 240MHz",
  "ESP32 / ESP8266 flash":
    "Programare ESP32 / ESP8266",
  "ESP32 ADC accuracy is mediocre for thermistors":
    "Precizia ADC-ului ESP32 este mediocră pentru termistoare",
  "ESP32 Dev Module, 240MHz, Huge App partition":
    "ESP32 Dev Module, 240MHz, partiție Huge App",
  "ESP32 GPIO pins available for custom use on the FYSETC E4. Some have constraints.":
    "Pini GPIO ai ESP32 disponibili pentru utilizare personalizată pe FYSETC E4. Unii au restricții.",
  "ESP32 wireless mode — this enables the SmartWebServer that is built into OnStepX on ESP32 boards (no separate ESP needed). WIFI_ACCESS_POINT = the board creates its OWN WiFi network \"OnStepX\" — no router needed, best in the field; connect your phone/PC to it, then open http://":
    "Modul wireless ESP32 — activează SmartWebServer integrat în OnStepX pe plăcile ESP32 (nu este necesar un ESP separat). WIFI_ACCESS_POINT = placa își creează PROPRIA rețea WiFi „OnStepX” — fără router, ideal pe teren; conectați telefonul/PC-ul la ea, apoi deschideți http://",
  "ESP32 with 4× TMC2209 UART drivers on a shared serial bus. All axes use TMC2209. Note: STATUS_LED and STATUS_BUZZER both default to GPIO 12 on this pinmap, so we default the buzzer OFF — flip it back ON only if you set STATUS_LED=OFF.":
    "ESP32 cu 4× drivere TMC2209 UART pe o magistrală serială comună. Toate axele folosesc TMC2209. Notă: STATUS_LED și STATUS_BUZZER sunt ambele implicit pe GPIO 12 în acest pinmap, așa că buzzerul este implicit OFF — repuneți-l pe ON doar dacă setați STATUS_LED=OFF.",
  "ESP32-WROOM-32E / 32UE (external antenna) @ 240MHz, 16MB flash":
    "ESP32-WROOM-32E / 32UE (antenă externă) @ 240MHz, flash 16MB",
  "ESP32-based predecessor to MaxESP4. Default driver mix is TMC2209 UART on the mount axes and focuser; if your MaxESP3 was wired for SPI drivers (TMC2130 etc.) override the driver-model fields below. Note: this pinmap routes both STATUS_LED and STATUS_BUZZER to the same AUX8_PIN, so we default the buzzer OFF — flip it back ON only if you set STATUS_LED=OFF.":
    "Predecesorul MaxESP4, bazat pe ESP32. Combinația implicită de drivere este TMC2209 UART pe axele monturii și pe focuser; dacă MaxESP3-ul dumneavoastră a fost cablat pentru drivere SPI (TMC2130 etc.), modificați mai jos câmpurile pentru modelul driverului. Notă: acest pinmap direcționează atât STATUS_LED, cât și STATUS_BUZZER către același AUX8_PIN, așa că buzzerul este implicit OFF — repuneți-l pe ON doar dacă setați STATUS_LED=OFF.",
  "ESP8266 (NodeMCU, Wemos D1 mini, ESP-01 — SWS only)":
    "ESP8266 (NodeMCU, Wemos D1 mini, ESP-01 — doar SWS)",
  "ESP8266 flash is a single":
    "Programarea ESP8266 constă într-un singur",
  "ESP8266 or ESP32":
    "ESP8266 sau ESP32",
  "ESP8266-style TX/RX swap selection":
    "Selecția inversării TX/RX în stil ESP8266",
  "ETHERNET_W5100 (SPI shield)":
    "ETHERNET_W5100 (shield SPI)",
  "ETHERNET_W5500 (SPI shield)":
    "ETHERNET_W5500 (shield SPI)",
  "EXT-RST - EXT-RST — external reset header":
    "EXT-RST - EXT-RST — conector cu pini pentru reset extern",
  "Easiest option: build & flash right here with this configurator's":
    "Cea mai simplă opțiune: compilați și programați direct aici, cu fila",
  "Easiest way to reach it without hunting for the IP.":
    "Cea mai simplă cale de a-l accesa fără a căuta adresa IP.",
  "Emits":
    "Generează",
  "Enable":
    "Activare",
  "Enable BLE gamepad (ACGAM R1 etc.)":
    "Activare gamepad BLE (ACGAM R1 etc.)",
  "Enable BME280 at 0x76 (SDO→GND)":
    "Activare BME280 la 0x76 (SDO→GND)",
  "Enable BME280 for dew point calculation":
    "Activare BME280 pentru calculul punctului de rouă",
  "Enable Dew Heater 1":
    "Activare încălzitor anti-rouă 1",
  "Enable Dew Heater 2":
    "Activare încălzitor anti-rouă 2",
  "Enable Goto features":
    "Activare funcții GOTO",
  "Enable WiFi in Config.h:":
    "Activați WiFi în Config.h:",
  "Enable drivers in standby":
    "Drivere activate în standby",
  "Enable if using DS3231 32kHz PPS output":
    "Activați dacă folosiți ieșirea PPS 32kHz a DS3231",
  "Enable temp compensation (uses TE)":
    "Activare compensare termică (folosește TE)",
  "Encoder global behaviour":
    "Comportamentul global al encoderelor",
  "Encoders & BLE":
    "Encodere și BLE",
  "End result:":
    "Rezultat final:",
  "Endstop / switch":
    "Opritor de capăt / limitator",
  "Ensure ESP32 board package v2.0.17 is installed.":
    "Asigurați-vă că este instalat pachetul de plăci ESP32 v2.0.17.",
  "Epcos/TDK & some 100k brands":
    "Epcos/TDK și unele mărci 100k",
  "Erase All Flash Before Upload":
    "Ștergere completă a memoriei flash înainte de încărcare",
  "Erase entire flash before writing — fixes a stuck \"Init NV/EEPROM error\" (ESP32/ESP8266 only; wipes saved settings/PEC, adds ~10–30 s).":
    "Șterge întreaga memorie flash înainte de scriere — rezolvă o eroare persistentă „Init NV/EEPROM error” (doar ESP32/ESP8266; șterge setările/PEC salvate, adaugă ~10–30 s).",
  "Escape hatch:":
    "Soluție de rezervă:",
  "Ethernet (only if OPERATIONAL_MODE = ETHERNET_*)":
    "Ethernet (doar dacă OPERATIONAL_MODE = ETHERNET_*)",
  "Every Teensy 3.2 / 4.0 / 4.1 sits in ROM as HalfKay whenever you press the white program button. In that mode it appears as a USB HID device with vendor/product IDs":
    "Orice Teensy 3.2 / 4.0 / 4.1 rulează din ROM bootloaderul HalfKay ori de câte ori apăsați butonul alb de programare. În acest mod apare ca dispozitiv USB HID cu ID-urile de producător/produs",
  "Every add-on OnStepX supports on the E4":
    "Toate accesoriile pe care OnStepX le suportă pe E4",
  "Everything above lives in":
    "Tot ce este descris mai sus se află în",
  "Everything happens either inside your browser tab or on free cloud services (":
    "Totul se petrece fie în fila browserului dumneavoastră, fie pe servicii cloud gratuite (",
  "Everything in the":
    "Tot ce se află în lista",
  "External-antenna board: weak WiFi or damaged radio":
    "Placă cu antenă externă: WiFi slab sau modul radio deteriorat",
  "External-antenna boards:":
    "Plăci cu antenă externă:",
  "Extract to a folder named":
    "Extrageți într-un folder numit",
  "F-F Dupont 10cm":
    "Dupont F-F 10cm",
  "FAN - FAN — switched 2-pin output (AUX8 / FAN_E0)":
    "FAN - FAN — ieșire comutată cu 2 pini (AUX8 / FAN_E0)",
  "FAQ":
    "Întrebări frecvente",
  "FEATURE1 (GPIO2/HEAT_E0) and FEATURE2 (GPIO4/HEAT_BED) are separate channels — e.g. main objective strap on one with TE feedback, secondary/finder strap on the other with TB feedback.":
    "FEATURE1 (GPIO2/HEAT_E0) și FEATURE2 (GPIO4/HEAT_BED) sunt canale separate — de ex. banda obiectivului principal pe unul, cu feedback TE, și banda secundarului/căutătorului pe celălalt, cu feedback TB.",
  "FEATUREn_ON_STATE is HIGH for the onboard N-channel low-side MOSFET (GPIO HIGH → output on). Leave it HIGH; only change it if you insert an inverting stage of your own.":
    "FEATUREn_ON_STATE este HIGH pentru MOSFET-ul integrat cu canal N pe partea de jos (GPIO HIGH → ieșire activă). Lăsați-l pe HIGH; modificați-l doar dacă adăugați propriul etaj inversor.",
  "FIRST: remove the factory SDA↔M-RX / SCL↔M-TX jumper caps — with them fitted, the I2C lines are wired to the TMC UART bus.":
    "ÎNTÂI: îndepărtați jumperele din fabrică SDA↔M-RX / SCL↔M-TX — cât timp sunt montate, liniile I2C sunt legate la magistrala TMC UART.",
  "FORK_TA - w/tangent arm":
    "FORK_TA - cu braț tangent",
  "FORK_TAC - w/tangent arm + correction":
    "FORK_TAC - cu braț tangent + corecție",
  "FWU (STM32 firmware-upload)":
    "FWU (încărcare firmware STM32)",
  "FYSETC E4 + Website plugin":
    "FYSETC E4 + plugin Website",
  "FYSETC E4 Wiki":
    "Wiki FYSETC E4",
  "FYSETC E4 beginner guide":
    "Ghid pentru începători FYSETC E4",
  "FYSETC E4 board diagram with mounted peripherals":
    "Schema plăcii FYSETC E4 cu perifericele montate",
  "FYSETC E4 recipe (what will happen when you click Compile)":
    "Rețeta FYSETC E4 (ce se va întâmpla când apăsați Compilare)",
  "FYSETC E4 wiki":
    "wiki-ul oficial FYSETC E4",
  "FYSETC S6 on OnStep wiki":
    "FYSETC S6 pe wiki-ul OnStep",
  "FYSETC's 6-axis 3D-printer board. Same ST DFU protocol as the SKR PRO, but the BOOT0 control on newer S6 revisions is a 3-pin header instead of a jumper (centre + right pin = boot to DFU).":
    "Placa FYSETC pentru imprimante 3D, cu 6 axe. Același protocol ST DFU ca SKR PRO, dar pe reviziile S6 mai noi controlul BOOT0 este un conector cu 3 pini în loc de jumper (pinul din mijloc + cel din dreapta = pornire în DFU).",
  "FYSETC_E4 (ESP32) — beginner-friendly all-in-one":
    "FYSETC_E4 (ESP32) — placă all-in-one potrivită pentru începători",
  "FYSETC_S6 V1.2 (STM32F446VE) — 6-axis 3D-printer board":
    "FYSETC_S6 V1.2 (STM32F446VE) — placă de imprimantă 3D cu 6 axe",
  "FYSETC_S6 V2.0 (STM32F446VE) — 6-axis, V2 connector layout":
    "FYSETC_S6 V2.0 (STM32F446VE) — 6 axe, dispunerea conectorilor V2",
  "Factory Marlin jumper caps still installed — they tie the I2C lines to the TMC UART bus and the drivers' DIAG outputs to the endstop inputs.":
    "Jumperele Marlin din fabrică sunt încă montate — ele leagă liniile I2C la magistrala TMC UART și ieșirile DIAG ale driverelor la intrările limitatoarelor de cursă.",
  "Fallback":
    "Soluție de rezervă",
  "Fallback (Firefox / Safari / WebHID unavailable):":
    "Soluție de rezervă (Firefox / Safari / WebHID indisponibil):",
  "Fastest (2x)":
    "Cea mai rapidă (2x)",
  "Feature 1":
    "Funcția 1",
  "Feature 2":
    "Funcția 2",
  "Feature 3":
    "Funcția 3",
  "Feature 4":
    "Funcția 4",
  "Feature 5":
    "Funcția 5",
  "Feature 6":
    "Funcția 6",
  "Feature 7":
    "Funcția 7",
  "Feature 8":
    "Funcția 8",
  "Feature purpose":
    "Rolul funcției",
  "Fed from a 5V header pin — the E4 has no 3.3V pin for 3.3V-only I2C modules, GPS or DS18B20.":
    "Alimentat de la un pin de 5V al unui conector — E4 nu are pin de 3.3V pentru modulele I2C doar de 3.3V, GPS sau DS18B20.",
  "Fetch a Config.h from a raw URL and back-fill matching form fields":
    "Preia un Config.h de la un URL raw și completează câmpurile corespunzătoare din formular",
  "Field de-rotator for Alt-Az mounts":
    "Derotator de câmp pentru monturi Alt-Az",
  "Field-tested points from the OnStep group, specific to E4 dew heaters.":
    "Sfaturi verificate pe teren din grupul OnStep, specifice încălzitoarelor anti-rouă ale E4.",
  "Field-tested points from the OnStep group, specific to E4 thermistors.":
    "Sfaturi verificate pe teren din grupul OnStep, specifice termistoarelor E4.",
  "File an issue at":
    "Deschideți un tichet (issue) la",
  "Fill in driver model, microsteps, current, etc. for the selected PINMAP":
    "Completează modelul driverului, micropașii, curentul etc. pentru PINMAP-ul selectat",
  "Find it in the serial monitor at boot, in your router's client list, or via mDNS.":
    "O găsiți în monitorul serial la pornire, în lista de clienți a routerului sau prin mDNS.",
  "Finding the serial numbers:":
    "Găsirea numerelor de serie:",
  "Firefox / Safari can generate a config, trigger a compile, and":
    "Firefox / Safari pot genera o configurație, pot declanșa o compilare și pot",
  "Firmware & USB":
    "Firmware și USB",
  "Firmware Upload & Default Config":
    "Încărcare firmware și configurație implicită",
  "Firmware runs but axis moves wrong direction / doesn't move":
    "Firmware-ul rulează, dar axa se mișcă în sens greșit / nu se mișcă",
  "First build is slower":
    "Prima compilare durează mai mult",
  "First command in Serial Monitor returns \"failed\"":
    "Prima comandă din Serial Monitor returnează „failed”",
  "Fit only the GPIO15 → M-TX wire (Z-min pin of ZDIAG-EN → M-TX).":
    "Montați doar firul GPIO15 → M-TX (pinul Z-min al ZDIAG-EN → M-TX).",
  "Fix order: (1) check the GPIO15 → M-TX wire, (2) confirm the factory SDA↔M-RX / SCL↔M-TX caps are off, (3) reduce IRUN to ~400mA / IHOLD ~200mA, (4) update to OnStepX v10.20a+. The E4 drivers have no VRef pot (VREF is not connected) — UART is the only current control.":
    "Ordinea remedierii: (1) verificați firul GPIO15 → M-TX, (2) confirmați că jumperele din fabrică SDA↔M-RX / SCL↔M-TX sunt scoase, (3) reduceți IRUN la ~400mA / IHOLD la ~200mA, (4) actualizați la OnStepX v10.20a+. Driverele E4 nu au potențiometru VRef (VREF nu este conectat) — UART este singurul mod de reglare a curentului.",
  "Fixes that work, in order of ease:":
    "Soluții care funcționează, în ordinea ușurinței:",
  "Flash OnStepX":
    "Programați OnStepX",
  "Flash a plain I2C scanner sketch (Wire.begin(21,22), scan 0x03-0x77). Nothing found = hardware. 0x76/0x77/0x68 found = it is the address or chip type in Config.h.":
    "Programați un sketch simplu de scanare I2C (Wire.begin(21,22), scanare 0x03-0x77). Nimic găsit = problemă hardware. 0x76/0x77/0x68 găsit = problema este adresa sau tipul de cip din Config.h.",
  "Flash it with":
    "Programați-l cu",
  "Flash log stops at \"First block sent (chip erase…)\"":
    "Jurnalul de programare se oprește la „First block sent (chip erase…)”",
  "Flash size.":
    "Dimensiunea flash.",
  "Flash to Board":
    "Programare placă",
  "Flash to Board via USB":
    "Programare placă prin USB",
  "Flashing ESP32: \"Failed to connect\"":
    "Programare ESP32: „Failed to connect”",
  "Flashing STM32: device doesn't appear in the picker":
    "Programare STM32: dispozitivul nu apare în selector",
  "Flashing Teensy: \"WebHID not available in this browser\"":
    "Programare Teensy: „WebHID not available in this browser”",
  "Flashing Teensy: device picker is empty":
    "Programare Teensy: selectorul de dispozitive este gol",
  "Flashing guide & community discussions":
    "Ghid de programare și discuții ale comunității",
  "Flashing restarts only the ESP32; the ESP8266 keeps running and re-detects the mount and focusers as OnStepX comes back. SmartWebServer checks once and keeps the answer, so a check that lands mid-boot hides the axis settings (or a newly enabled focuser) until the link next drops. Starting both chips together avoids it.":
    "Programarea repornește doar ESP32; ESP8266 continuă să ruleze și redetectează montura și focuserele pe măsură ce OnStepX revine. SmartWebServer verifică o singură dată și păstrează răspunsul, așa că o verificare făcută în timpul pornirii ascunde setările axelor (sau un focuser nou activat) până la următoarea întrerupere a legăturii. Pornirea ambelor cipuri împreună evită problema.",
  "Flashing takes 15–40 s. Board auto-resets into firmware when done.":
    "Programarea durează 15–40 s. La final, placa repornește automat în firmware.",
  "Flip count direction":
    "Inversare sens de numărare",
  "Flip/home configuration; on GEM the mount visits home, and on fork the default slew logic can trigger an unwanted flip near park.":
    "Configurația de întoarcere (flip)/poziție de origine; pe GEM montura trece prin poziția de origine, iar pe furcă logica implicită de deplasare rapidă poate declanșa o întoarcere nedorită lângă poziția de parcare.",
  "Foc2/Rot — Focuser 2 or rotator stepper":
    "Foc2/Rot — motor pas cu pas pentru focuserul 2 sau rotator",
  "Focus":
    "Focalizare",
  "Focuser control via hand controller":
    "Controlul focuserului din telecomandă (hand controller)",
  "Focuser1 active by default on MOT-E":
    "Focuser1 activ implicit pe MOT-E",
  "Focuser1 stepper coils to MOT E.":
    "Bobinele motorului Focuser1 la MOT E.",
  "Focuser1 — Focuser 1 stepper":
    "Focuser1 — motor pas cu pas pentru focuserul 1",
  "Focuser2 active by default on MOT-Z":
    "Focuser2 activ implicit pe MOT-Z",
  "For US5881 (unipolar): flip the magnet if no detection.":
    "Pentru US5881 (unipolar): întoarceți magnetul dacă nu este detectat.",
  "For range: use WIFI_STATION mode + a better router antenna or a WiFi extender, or the external-antenna E4 variant.":
    "Pentru rază de acțiune: folosiți modul WIFI_STATION + o antenă de router mai bună sau un repetor WiFi, ori varianta E4 cu antenă externă.",
  "Form state (all your settings)":
    "Starea formularului (toate setările dumneavoastră)",
  "Form state is saved to local storage":
    "Starea formularului este salvată în stocarea locală",
  "Formula: steps_per_degree = (motor_steps × microsteps × overall_gear_reduction) / 360":
    "Formulă: pași_pe_grad = (pași_motor × micropași × reducție_totală) / 360",
  "Four places, in increasing order of \"you really want to be sure\":":
    "Patru locuri, în ordinea crescătoare a lui „chiar vreți să fiți siguri”:",
  "From pinmap":
    "Din pinmap",
  "Full read-back needs the TMC UART on UART0 (jumper M-RX↔RXD0, M-TX↔TXD0) with SERIAL_A_BAUD_DEFAULT OFF — which also takes USB serial away, so remove those caps to flash.":
    "Citirea completă necesită TMC UART pe UART0 (jumpere M-RX↔RXD0, M-TX↔TXD0) cu SERIAL_A_BAUD_DEFAULT OFF — ceea ce dezactivează și portul serial USB, așa că scoateți aceste jumpere pentru programare.",
  "Function":
    "Funcție",
  "Fuse":
    "Siguranță fuzibilă",
  "Fuse the main 12–24V input (shared by motors + heaters) so a shorted strap blows the fuse. Fire safety.":
    "Protejați cu siguranță fuzibilă intrarea principală de 12–24V (comună motoarelor și încălzitoarelor), astfel încât o bandă scurtcircuitată să ardă siguranța. Protecție împotriva incendiilor.",
  "GEM - German Equatorial":
    "GEM - montură ecuatorială germană",
  "GEM_TA - GEM w/tangent arm":
    "GEM_TA - GEM cu braț tangent",
  "GEM_TAC - GEM w/tangent arm + correction":
    "GEM_TAC - GEM cu braț tangent + corecție",
  "GENERIC — external step/dir (NEMA34+, big servo drives)":
    "GENERIC — step/dir extern (NEMA34+, drivere servo mari)",
  "GOTO step rate × microsteps exceeds what the ESP32/driver/motor can deliver; too-fine GOTO microstepping or too-high target speed loses torque.":
    "Frecvența pașilor GOTO × micropași depășește ce pot livra ESP32/driverul/motorul; micropașii GOTO prea fini sau o viteză țintă prea mare duc la pierderea cuplului.",
  "GPIO HIGH = heater on (matches the onboard low-side MOSFET)":
    "GPIO HIGH = încălzitor pornit (corespunde MOSFET-ului integrat pe partea de jos)",
  "GPIO goes HIGH to fire shutter":
    "GPIO trece pe HIGH pentru a declanșa obturatorul",
  "GPIO13 (FAN) — set STATUS_LED and STATUS_BUZZER OFF, they share this output":
    "GPIO13 (FAN) — setați STATUS_LED și STATUS_BUZZER pe OFF, deoarece folosesc aceeași ieșire",
  "GPIO16/17 are the default Serial2 pins, but on the E4 they run straight to the onboard MOT E driver — they are not on any header.":
    "GPIO16/17 sunt pinii Serial2 impliciți, dar pe E4 sunt legați direct la driverul MOT E integrat — nu se află pe niciun conector.",
  "GPIO2 (HEAT_E0) is an ESP32 boot-strap pin, but the board and OnStepX already hold it low at boot — you don't add anything. Either output works for dew heat.":
    "GPIO2 (HEAT_E0) este un pin de bootstrap al ESP32, dar placa și OnStepX îl mențin deja LOW la pornire — nu trebuie să adăugați nimic. Oricare ieșire funcționează pentru încălzirea anti-rouă.",
  "GPIO2 = Dew Heater 1":
    "GPIO2 = încălzitor anti-rouă 1",
  "GPIO2 note:":
    "Notă GPIO2:",
  "GPIO21 on the I2C header (only if it is free) + 4.7kΩ pull-up":
    "GPIO21 pe conectorul I2C (doar dacă este liber) + rezistență pull-up de 4.7kΩ",
  "GPIO21/22 are the I2C bus. A GPS there means":
    "GPIO21/22 formează magistrala I2C. Un GPS acolo înseamnă",
  "GPIO34/GPIO35 are input-only on ESP32 — no internal pull-up/down. The E4 has discrete 10kΩ pull-ups to 3.3V on both X-MIN and Y-MIN.":
    "GPIO34/GPIO35 sunt doar de intrare pe ESP32 — fără pull-up/pull-down intern. E4 are rezistențe pull-up discrete de 10kΩ la 3.3V atât pe X-MIN, cât și pe Y-MIN.",
  "GPIO36 (ADC1_CH0) and GPIO39 (ADC1_CH3) are the correct thermistor pins. Do NOT relocate a thermistor to an ADC2 pin (GPIO0/2/4/12–15/25–27) — analogRead() returns garbage once WiFi starts.":
    "GPIO36 (ADC1_CH0) și GPIO39 (ADC1_CH3) sunt pinii corecți pentru termistoare. NU mutați un termistor pe un pin ADC2 (GPIO0/2/4/12–15/25–27) — analogRead() returnează valori fără sens odată ce pornește WiFi.",
  "GPIO36 (TE) and GPIO39 (TB) are input-only — no internal pull-up. The 4.7kΩ series resistor to 3.3V acts as the pull-up.":
    "GPIO36 (TE) și GPIO39 (TB) sunt doar de intrare — fără pull-up intern. Rezistența serie de 4,7kΩ la 3,3V are rol de pull-up.",
  "GPIO36 is input-only. The E4 has a 4.7kΩ series resistor on TE (to 3.3V) which serves as the pull-up for open-collector sensors.":
    "GPIO36 este doar de intrare. E4 are o rezistență serie de 4,7kΩ pe TE (la 3,3V), care servește drept pull-up pentru senzorii cu colector deschis.",
  "GPIO4 = Dew Heater 2":
    "GPIO4 = încălzitor anti-rouă 2",
  "GPS + RTC together (auto-fallback):":
    "GPS + RTC împreună (revenire automată):",
  "GPS Module":
    "Modul GPS",
  "GPS Module Implementation":
    "Implementarea modulului GPS",
  "GPS Module v2 — X-MIN Single-Wire Mode":
    "Modul GPS v2 — mod cu un singur fir pe X-MIN",
  "GPS Module — GY-GPSV3 (NEO-M8N / NEO-6M)":
    "Modul GPS — GY-GPSV3 (NEO-M8N / NEO-6M)",
  "GPS RX (optional, for sending commands)":
    "GPS RX (opțional, pentru trimiterea comenzilor)",
  "GPS VCC (through a 3.3V regulator if the module has none)":
    "GPS VCC (printr-un regulator de 3.3V dacă modulul nu are unul)",
  "GPS serial port (used only when TIME_LOCATION_SOURCE is GPS)":
    "Portul serial al GPS-ului (folosit doar când TIME_LOCATION_SOURCE este GPS)",
  "GPS — GPS module — auto time & location":
    "GPS — modul GPS — oră și locație automate",
  "GT2 Gearbox — thanks to Chad for the original design 🙏":
    "Reductor GT2 — mulțumiri lui Chad pentru designul original 🙏",
  "GY-BME280, Adafruit BME280 or generic modules all work. Avoid BMP280 (no humidity).":
    "GY-BME280, Adafruit BME280 sau modulele generice funcționează toate. Evitați BMP280 (nu măsoară umiditatea).",
  "Galvanic isolation — mandatory, never connect GPIO directly.":
    "Izolare galvanică — obligatorie, nu conectați niciodată GPIO direct.",
  "Gamepad #1 MAC address (colon-separated)":
    "Adresa MAC a gamepadului nr. 1 (separată prin două puncte)",
  "Gamepad #2 MAC address (leave as ff:…:ff if unused)":
    "Adresa MAC a gamepadului nr. 2 (lăsați ff:…:ff dacă nu este folosit)",
  "Garbage data in the serial buffer at boot. Normal.":
    "Date parazite în bufferul serial la pornire. Normal.",
  "Gateway (usually identical to AP_IP_ADDR)":
    "Gateway (de obicei identic cu AP_IP_ADDR)",
  "Gear Ratio Denominator":
    "Numitorul raportului de transmisie",
  "Gear Ratio Numerator":
    "Numărătorul raportului de transmisie",
  "Generate & Copy":
    "Generare și copiere",
  "Generate & View Config.h":
    "Generare și vizualizare Config.h",
  "Generate Config.h":
    "Generare Config.h",
  "Generate Config.h for OnStepX telescope controller — based on OnStep Calculations v1.34":
    "Generați Config.h pentru controlerul de telescop OnStepX — bazat pe OnStep Calculations v1.34",
  "Generate Config.h for the OnStep SHC hand pendant — compile and flash online":
    "Generați Config.h pentru telecomanda OnStep SHC — compilare și programare online",
  "Generate Config.h for the OnStep web server / WiFi bridge — compile and flash online":
    "Generați Config.h pentru serverul web / puntea WiFi OnStep — compilare și programare online",
  "Generate Config.h, compile online, and flash over USB":
    "Generați Config.h, compilați online și programați prin USB",
  "Generic (2-pin)":
    "Generic (2 pini)",
  "Get a small":
    "Procurați-vă o placă mică",
  "GitHub Actions + the build-service repo":
    "GitHub Actions + depozitul build-service",
  "GitHub Actions artifact storage":
    "Stocarea artefactelor GitHub Actions",
  "GitHub URL (":
    "URL GitHub (",
  "Glass-bead astro NTC (most common)":
    "NTC astro cu perlă de sticlă (cel mai comun)",
  "Goto decay override":
    "Suprascriere decay pentru GOTO",
  "Goto decay override (default: SPREADCYCLE)":
    "Suprascriere decay pentru GOTO (implicit: SPREADCYCLE)",
  "Goto fails with \"Out of limit\" — manual moves work":
    "GOTO eșuează cu „Out of limit” — mișcările manuale funcționează",
  "Guide Rate Rheostat":
    "Reostat pentru viteza de ghidaj",
  "Guide rates — defaults match most autoguiders.":
    "Viteze de ghidaj — valorile implicite se potrivesc majorității autoghidoarelor.",
  "Guiding, Limits, Parking":
    "Ghidaj, limite, parcare",
  "H1 - H1 — Heater output 1 (AUX5)":
    "H1 - H1 — ieșire încălzitor 1 (AUX5)",
  "H1 strap":
    "bandă H1",
  "H1/H2 are the board's HEAT_E0 / HEAT_BED power outputs — the MOSFET is already onboard (~15A total stage). Do NOT add an IRLZ44N or any gate/pull-down parts; just land the heater strap on the 2-pin terminal.":
    "H1/H2 sunt ieșirile de putere HEAT_E0 / HEAT_BED ale plăcii — MOSFET-ul este deja integrat (etaj de ~15A în total). NU adăugați un IRLZ44N sau alte componente de grilă/pull-down; conectați pur și simplu banda încălzitorului la borna cu 2 pini.",
  "H2 - H2 — Heater output 2 (AUX6)":
    "H2 - H2 — Ieșire încălzitor 2 (AUX6)",
  "H2 strap":
    "bandă H2",
  "Hall (latch)":
    "Hall (cu zăvorâre)",
  "Hall VCC — the E4 has no 3.3V pin":
    "VCC senzor Hall — E4 nu are pin de 3.3V",
  "Hall sensor GND":
    "GND senzor Hall",
  "Hall sensor OUT (open-collector or digital)":
    "OUT senzor Hall (colector deschis sau digital)",
  "Hall sensor outputs 5V but GPIO36 expects 3.3V; or incorrect wiring polarity to TE.":
    "Senzorul Hall scoate 5V, dar GPIO36 așteaptă 3.3V; sau polaritate greșită a cablajului către TE.",
  "Hand Controller":
    "Telecomandă (hand controller)",
  "Hand controller features":
    "Funcții ale telecomenzii (hand controller)",
  "Hand pendant firmware":
    "Firmware-ul telecomenzii",
  "Hardware & Safety":
    "Hardware și siguranță",
  "Hardware Guide":
    "Ghid hardware",
  "Hardware limits stop ALL mount movement when triggered. The E4 Config.h overrides the default limit pin to GPIO34 instead of GPIO39.":
    "Limitatoarele hardware opresc ORICE mișcare a monturii când sunt declanșate. Config.h pentru E4 schimbă pinul implicit de limită pe GPIO34 în loc de GPIO39.",
  "Heater":
    "Încălzitor",
  "Heater power":
    "Puterea încălzitorului",
  "Heater sizing":
    "Dimensionarea încălzitorului",
  "Heater tape":
    "Bandă încălzitoare",
  "Help for AXIS1_DRIVER_MICROSTEPS":
    "Ajutor pentru AXIS1_DRIVER_MICROSTEPS",
  "Help for AXIS1_REVERSE":
    "Ajutor pentru AXIS1_REVERSE",
  "Help for AXIS1_STEPS_PER_DEGREE":
    "Ajutor pentru AXIS1_STEPS_PER_DEGREE",
  "Help for AXIS2_DRIVER_MICROSTEPS":
    "Ajutor pentru AXIS2_DRIVER_MICROSTEPS",
  "Help for AXIS2_REVERSE":
    "Ajutor pentru AXIS2_REVERSE",
  "Help for AXIS2_STEPS_PER_DEGREE":
    "Ajutor pentru AXIS2_STEPS_PER_DEGREE",
  "Help for MOUNT_TYPE":
    "Ajutor pentru MOUNT_TYPE",
  "Help for PEC_STEPS_PER_WORM_ROTATION":
    "Ajutor pentru PEC_STEPS_PER_WORM_ROTATION",
  "Help for PINMAP":
    "Ajutor pentru PINMAP",
  "Help for SERIAL_A_BAUD_DEFAULT":
    "Ajutor pentru SERIAL_A_BAUD_DEFAULT",
  "Help for SERIAL_GPS":
    "Ajutor pentru SERIAL_GPS",
  "Help for SLEW_RATE_BASE_DESIRED":
    "Ajutor pentru SLEW_RATE_BASE_DESIRED",
  "Help for STEP_WAVE_FORM":
    "Ajutor pentru STEP_WAVE_FORM",
  "Help for TIME_LOCATION_SOURCE":
    "Ajutor pentru TIME_LOCATION_SOURCE",
  "Here's exactly what leaves your browser and where it ends up:":
    "Iată exact ce părăsește browserul dumneavoastră și unde ajunge:",
  "Here's what actually happens when you click":
    "Iată ce se întâmplă de fapt când apăsați",
  "High-res encoders correct pointing mid-goto":
    "Encoderele de înaltă rezoluție corectează pointarea în timpul GOTO",
  "Highly accurate I2C RTC (±2ppm), battery-backed (CR2032). Connects to the E4 I2C header.":
    "RTC I2C foarte precis (±2ppm), cu baterie de rezervă (CR2032). Se conectează la conectorul cu pini I2C al E4.",
  "Hold":
    "Mențineți apăsat",
  "Hold current (mA)":
    "Curent de menținere (mA)",
  "Home / Limit":
    "Origine (home) / limită",
  "Home Axis1":
    "Poziție de origine Axis1",
  "Home Axis2":
    "Poziție de origine Axis2",
  "Home SW Axis1, limit":
    "Comutator de origine Axis1, limită",
  "Home SW Axis2":
    "Comutator de origine Axis2",
  "Home Switches — Mechanical Microswitch":
    "Comutatoare de origine (home) — microîntrerupător mecanic",
  "Home Y":
    "Origine Y",
  "Home Y — Axis2 home / limit sensor":
    "Origine Y — senzor de origine / limită Axis2",
  "Home position sense":
    "Detectarea poziției de origine (home)",
  "Home sense":
    "Detectare origine (home)",
  "Home sensors & hardware endstops":
    "Senzori de origine (home) și limitatoare de cursă hardware",
  "Home/Limit X":
    "Origine/Limită X",
  "Home/Limit X — Axis1 home & emergency-stop limit":
    "Origine/Limită X — origine Axis1 și limită de oprire de urgență",
  "Horizontal pixels":
    "Pixeli orizontali",
  "Hostname up to 16 chars — also the WiFi network name on E4":
    "Nume de gazdă de până la 16 caractere — și numele rețelei WiFi pe E4",
  "How apps (SkySafari, INDI, the SHC app) talk to the mount — over IP or Bluetooth.":
    "Cum comunică aplicațiile (SkySafari, INDI, aplicația SHC) cu montura — prin IP sau Bluetooth.",
  "How it works (behind the curtain)":
    "Cum funcționează (în culise)",
  "How long it stays":
    "Cât timp este păstrat",
  "How much does this cost the site owner?":
    "Cât costă acest lucru proprietarul site-ului?",
  "How to connect — IP addresses & default passwords":
    "Cum vă conectați — adrese IP și parole implicite",
  "How to verify a plugin is actually compiled in":
    "Cum verificați că un plugin este într-adevăr inclus în compilare",
  "I understand the issues above — build anyway":
    "Înțeleg problemele de mai sus — compilează oricum",
  "I2C Clock":
    "Ceas I2C",
  "I2C Data":
    "Date I2C",
  "I2C GPS":
    "GPS I2C",
  "I2C Pins":
    "Pini I2C",
  "I2C UART - Centre 12-pin block — I2C · TMC UART · UART0":
    "I2C UART - Blocul central de 12 pini — I2C · TMC UART · UART0",
  "I2C bus":
    "Magistrală I2C",
  "I2C device (BME280 / DS3231) wired to 5V":
    "Dispozitiv I2C (BME280 / DS3231) conectat la 5V",
  "I2C header":
    "conectorul cu pini I2C",
  "I2C header (21/22)":
    "Conector cu pini I2C (21/22)",
  "I2C header SCL → GPS RX":
    "Conector I2C SCL → GPS RX",
  "I2C header SDA ← GPS TX":
    "Conector I2C SDA ← GPS TX",
  "I2C module":
    "Modul I2C",
  "Idle — click \"Compile Firmware\" to begin.":
    "Inactiv — apăsați „Compile Firmware” pentru a începe.",
  "If auto-reset fails: hold":
    "Dacă resetarea automată eșuează: mențineți apăsat",
  "If it still hangs, suspect the clone hardware — test with a genuine FYSETC E4. Source: discussion #68362.":
    "Dacă tot se blochează, suspectați hardware-ul clonat — testați cu o placă FYSETC E4 originală. Sursă: discuția #68362.",
  "If park/coords stay corrupt, re-flash with \"Erase All Flash\" to wipe stale NV, then reconfigure. Source: discussion #58501.":
    "Dacă parcarea/coordonatele rămân corupte, reprogramați (flash) cu „Erase All Flash” pentru a șterge datele NV vechi, apoi reconfigurați. Sursă: discuția #58501.",
  "If the browser dialog is empty, the Teensy isn't in HalfKay bootloader mode yet — just press the white program button and it'll pop in.":
    "Dacă dialogul browserului este gol, Teensy nu este încă în modul bootloader HalfKay — apăsați pur și simplu butonul alb de programare și va apărea.",
  "If the ref doesn't exist (typo, or tag hasn't been published yet), you'll see a red \"could not resolve\" message.":
    "Dacă referința nu există (greșeală de tastare sau tag-ul nu a fost încă publicat), veți vedea un mesaj roșu „could not resolve”.",
  "If the service enforces rate limits (default: 10 builds/hour/IP), wait an hour. If you're iterating heavily, set up a local PlatformIO checkout: clone the upstream that matches the firmware you're building —":
    "Dacă serviciul impune limite de frecvență (implicit: 10 compilări/oră/IP), așteptați o oră. Dacă iterați intens, configurați o copie locală PlatformIO: clonați depozitul upstream care corespunde firmware-ului pe care îl compilați —",
  "If the web UI cannot edit axis settings, the ESP8266 is the part that's out of date.":
    "Dacă interfața web nu permite editarea setărilor axelor, ESP8266 este componenta neactualizată.",
  "If using swapped serial pins, force the SWS config to match.":
    "Dacă folosiți pini seriali inversați, forțați configurația SWS să corespundă.",
  "If you have a Teensy 4.0 mounted instead of 3.2, switch the":
    "Dacă aveți montat un Teensy 4.0 în loc de 3.2, schimbați",
  "If you see":
    "Dacă vedeți",
  "If you see smoke: disconnect all power immediately and inspect for damage.":
    "Dacă vedeți fum: deconectați imediat toate sursele de alimentare și verificați dacă există daune.",
  "If you want to inspect the plugin source":
    "Dacă doriți să inspectați sursa plugin-ului",
  "If your controller is NOT ESP-based (e.g. Teensy 4.0/4.1, STM32 MaxPCB) there is no radio on the board. There are two routes to a web page.":
    "Dacă controlerul dumneavoastră NU este bazat pe ESP (de ex. Teensy 4.0/4.1, STM32 MaxPCB), nu există niciun modul radio pe placă. Există două căi către o pagină web.",
  "Imaging Clients & Alignment (ASIAIR / NINA)":
    "Clienți de imagistică și aliniere (ASIAIR / NINA)",
  "Import from URL":
    "Importați dintr-un URL",
  "Imports and file loads preserve the raw source exactly. Clicking":
    "Importurile și încărcările de fișiere păstrează sursa brută exact așa cum este. Un clic pe",
  "In ASCOM driver panel, uncheck \"Enable Serial port DTR control\".":
    "În panoul driverului ASCOM, debifați „Enable Serial port DTR control”.",
  "In OnStepX mode, after a successful flash the form auto-resets to the selected board's starter defaults, so the next build starts from a clean baseline for that board. This only happens for boards where a starter config is shipped (see the hint next to the \"Apply board defaults\" button on the Controller tab). Your pre-flash state is stashed in":
    "În modul OnStepX, după o programare (flash) reușită, formularul revine automat la valorile inițiale ale plăcii selectate, astfel încât următoarea compilare pornește de la o bază curată pentru acea placă. Acest lucru se întâmplă doar pentru plăcile pentru care este furnizată o configurație inițială (vedeți indicația de lângă butonul „Apply board defaults” din fila Controller). Starea dumneavoastră dinainte de flash este salvată în",
  "In series with the optocoupler LED on the FAN output (FAN jumper on 5V).":
    "În serie cu LED-ul optocuplorului pe ieșirea FAN (jumperul FAN pe 5V).",
  "Includes 32KB EEPROM.":
    "Include EEPROM de 32KB.",
  "Infreq":
    "Rar",
  "Initial OLED contrast (user can change in-menu later)":
    "Contrast OLED inițial (utilizatorul îl poate modifica ulterior din meniu)",
  "Input only":
    "Doar intrare",
  "Input only — PEC index or temp":
    "Doar intrare — index PEC sau temperatură",
  "Input only — focuser/dew temp (FEATURE2). Limit is moved to X-MIN on the E4.":
    "Doar intrare — temperatură focuser/anti-rouă (FEATURE2). Limita este mutată pe X-MIN la E4.",
  "Input only — home sensor for Dec/Alt":
    "Doar intrare — senzor de origine pentru Dec/Alt",
  "Input only — home sensor for RA/Azm":
    "Doar intrare — senzor de origine pentru RA/Azm",
  "Input only — limit moved to X-MIN on E4":
    "Doar intrare — limita este mutată pe X-MIN la E4",
  "Install":
    "Instalați",
  "Install CH341SER-3.7 (older version known to work).":
    "Instalați CH341SER-3.7 (versiune mai veche despre care se știe că funcționează).",
  "Install ESP32 via Boards Manager (v2.0.17 recommended)":
    "Instalați ESP32 prin Boards Manager (se recomandă v2.0.17)",
  "Install PlatformIO (Python package)":
    "Instalați PlatformIO (pachet Python)",
  "Install a CR2032 to retain time when power is off.":
    "Instalați o baterie CR2032 pentru a păstra ora când alimentarea este oprită.",
  "Install all three: Adafruit BME280, Adafruit Sensor, Makuna RTC.":
    "Instalați toate trei: Adafruit BME280, Adafruit Sensor, Makuna RTC.",
  "Install libraries":
    "Instalați bibliotecile",
  "Interactive Board Diagram":
    "Diagramă interactivă a plăcii",
  "Interactive Board Diagram & Mounted Hardware":
    "Diagramă interactivă a plăcii și hardware montat",
  "Interface":
    "Interfață",
  "Intervalometer":
    "Intervalometru",
  "Intervalometer / DSLR Trigger":
    "Intervalometru / declanșator DSLR",
  "Intervalometer Circuit — Optocoupler Isolated":
    "Circuit intervalometru — izolat prin optocuplor",
  "Invert control (0V = max brightness)":
    "Inversare comandă (0V = luminozitate maximă)",
  "Is my Config.h sent anywhere permanent?":
    "Este Config.h-ul meu trimis undeva permanent?",
  "It has not been flashed on real hardware yet":
    "Nu a fost încă programată (flash) pe hardware real",
  "Item":
    "Element",
  "JS1 (Jerry's analog joystick)":
    "JS1 (joystick analogic al lui Jerry)",
  "JST-XH for motors, endstops, thermistors and fan; screw terminals for power and heaters; 12-pin I2C / TMC UART / UART0 block (5V and GND only, no 3.3V)":
    "JST-XH pentru motoare, limitatoare, termistori și ventilator; borne cu șurub pentru alimentare și încălzitoare; bloc de 12 pini I2C / TMC UART / UART0 (doar 5V și GND, fără 3.3V)",
  "Joystick deadband in ADC counts (larger = less sensitive)":
    "Zona moartă a joystickului în unități ADC (mai mare = mai puțin sensibil)",
  "Judge the UART by its effect: change AXISn_DRIVER_IRUN and check that holding torque and motor temperature follow.":
    "Judecați UART-ul după efectul său: modificați AXISn_DRIVER_IRUN și verificați dacă cuplul de menținere și temperatura motorului se schimbă corespunzător.",
  "Jumper wire":
    "Fir de jumper",
  "Jumpering pins near the USB connector while 12-24V is applied creates a direct short.":
    "Conectarea cu jumper a pinilor de lângă conectorul USB în timp ce sunt aplicați 12-24V creează un scurtcircuit direct.",
  "Just below the field you'll see a live preview that resolves your input against GitHub and shows the commit hash, author, date, and the first line of the commit message, so you know exactly what's about to be compiled. The repo prefix (":
    "Chiar sub câmp veți vedea o previzualizare în timp real care vă rezolvă intrarea pe GitHub și afișează hash-ul commit-ului, autorul, data și prima linie a mesajului de commit, astfel încât să știți exact ce urmează să fie compilat. Prefixul depozitului (",
  "Just send the command again — the second attempt works.":
    "Trimiteți pur și simplu comanda din nou — a doua încercare funcționează.",
  "KY-003 (A3144 latch) open-collector output with the built-in 4.7kΩ pull-up on TE. Test with the Sky Planetarium flash indicator.":
    "Ieșire cu colector deschis a KY-003 (A3144 cu zăvorâre) cu rezistența pull-up integrată de 4.7kΩ pe TE. Testați cu indicatorul de flash din Sky Planetarium.",
  "KY-003 needs 4.5V+, so power it from 5V; its own pull-up then puts 5V on the output, so use a divider (1kΩ + 2kΩ) — GPIO36 is not 5V-tolerant. Wiring: TE Pin 1 (GPIO36) ← Hall OUT, TE Pin 2 ← GND. Config: PEC_SENSE HIGH, PEC_SENSE_PIN 36.":
    "KY-003 necesită cel puțin 4.5V, deci alimentați-l de la 5V; propria sa rezistență pull-up pune atunci 5V pe ieșire, așa că folosiți un divizor (1kΩ + 2kΩ) — GPIO36 nu tolerează 5V. Cablaj: TE pin 1 (GPIO36) ← Hall OUT, TE pin 2 ← GND. Configurare: PEC_SENSE HIGH, PEC_SENSE_PIN 36.",
  "Keep only the TMC2209 library by hjd1964.":
    "Păstrați doar biblioteca TMC2209 de la hjd1964.",
  "Keep the pull-up resistors that came on your breakout":
    "Păstrați rezistențele pull-up care au venit pe modulul dumneavoastră",
  "Keep the wires short — over ~20cm of unshielded wire next to the stepper drivers, I2C drops out.":
    "Păstrați firele scurte — peste ~20cm de fir neecranat lângă driverele motoarelor pas cu pas, I2C-ul cade.",
  "Kendrick / generic silicone strip":
    "Kendrick / bandă generică din silicon",
  "Key technical findings extracted from the OnStep Groups.io forum so you don't need to click through.":
    "Concluzii tehnice cheie extrase de pe forumul OnStep Groups.io, ca să nu fie nevoie să căutați singur.",
  "Keypad":
    "Tastatură",
  "Known issue with some ESP32 board package versions; also dual AP+Station conflicts or interference.":
    "Problemă cunoscută la unele versiuni ale pachetului de plăci ESP32; de asemenea, conflicte în modul dublu AP+Station sau interferențe.",
  "Known issues with verified fixes":
    "Probleme cunoscute cu soluții verificate",
  "LED / Buzzer":
    "LED / buzzer",
  "LED / Buzzer (switched)":
    "LED / buzzer (comutat)",
  "LM1117-3.3 — LM1117-3.3 / AMS1117-3.3 regulator":
    "LM1117-3.3 — regulator LM1117-3.3 / AMS1117-3.3",
  "L_ca (Catalan)":
    "L_ca (catalană)",
  "L_cn (Chinese)":
    "L_cn (chineză)",
  "L_de (German)":
    "L_de (germană)",
  "L_en (English)":
    "L_en (engleză)",
  "L_es (Spanish)":
    "L_es (spaniolă)",
  "L_fr (French)":
    "L_fr (franceză)",
  "L_it (Italian)":
    "L_it (italiană)",
  "L_jp (Japanese)":
    "L_jp (japoneză)",
  "L_ro (Romanian)":
    "L_ro (română)",
  "L_us (US English)":
    "L_us (engleză SUA)",
  "L_us (US English, imperial units)":
    "L_us (engleză SUA, unități imperiale)",
  "Label":
    "Etichetă",
  "Label in SWS/App interface":
    "Etichetă în interfața SWS/aplicație",
  "Land both strap wires straight on the H1 / H2 terminal. Polarity does not matter for resistive tape.":
    "Conectați ambele fire ale benzii direct la borna H1 / H2. Polaritatea nu contează pentru o bandă rezistivă.",
  "Lands on the":
    "Se conectează la",
  "Language / Langue":
    "Language / Limbă",
  "Layer":
    "Strat",
  "Leave OFF for production. ON / VERBOSE prints to SERIAL_DEBUG; REMOTE streams over the network.":
    "Lăsați OFF în producție. ON / VERBOSE afișează pe SERIAL_DEBUG; REMOTE transmite prin rețea.",
  "Leave alone unless you know why":
    "Nu modificați decât dacă știți de ce",
  "Level Shift":
    "Adaptare de nivel",
  "Limit Switch Implementation":
    "Implementarea limitatoarelor de cursă",
  "Limit Switches":
    "Limitatoare de cursă",
  "Limit on X-MIN armed (switch to GND stops motion)":
    "Limită pe X-MIN activată (un comutator la GND oprește mișcarea)",
  "Limit switch NO → GND (shared with Axis1 home)":
    "Limitator de cursă NO → GND (comun cu originea Axis1)",
  "Limit switch state":
    "Starea limitatorului de cursă",
  "Load Existing Config.h":
    "Încărcați un Config.h existent",
  "Logged in the Actions run metadata indefinitely (public repo)":
    "Înregistrat pe termen nelimitat în metadatele rulării Actions (depozit public)",
  "Lower AXISn_SLEW_RATE_BASE_DESIRED until slews are reliable, then raise gradually.":
    "Reduceți AXISn_SLEW_RATE_BASE_DESIRED până când deplasările rapide sunt fiabile, apoi creșteți treptat.",
  "Lower WiFi TX power to ~2dB and use a 20MHz channel width (not 40MHz) — see the WiFi section.":
    "Reduceți puterea de emisie WiFi la ~2dB și folosiți o lățime de canal de 20MHz (nu 40MHz) — vedeți secțiunea WiFi.",
  "Lower the WiFi TX power":
    "Reduceți puterea de emisie WiFi",
  "MOSFET / driver parts":
    "MOSFET / componente de comandă",
  "MOT E — Focuser1 motor output (Axis4)":
    "MOT E — ieșire motor Focuser1 (Axis4)",
  "MOT Z — rotator (Axis3) or Focuser2 (Axis5)":
    "MOT Z — rotator (Axis3) sau Focuser2 (Axis5)",
  "MOT-X (JST-XH 4-pin)":
    "MOT-X (JST-XH 4 pini)",
  "MOT-Y (JST-XH 4-pin)":
    "MOT-Y (JST-XH 4 pini)",
  "MOTE Foc1 - MOT E — Focuser1 motor output (Axis4)":
    "MOTE Foc1 - MOT E — ieșire motor Focuser1 (Axis4)",
  "MOTX Ra/Azm - MOT X — Ra/Azm motor output":
    "MOTX Ra/Azm - MOT X — ieșire motor Ra/Azm",
  "MOTY DEC - MOT Y — DEC/Alt motor output":
    "MOTY DEC - MOT Y — ieșire motor DEC/Alt",
  "MOTZ Rot/Foc2 - MOT Z — rotator (Axis3) or Focuser2 (Axis5)":
    "MOTZ Rot/Foc2 - MOT Z — rotator (Axis3) sau Focuser2 (Axis5)",
  "MUST be set explicitly on the E4 — see the warning above. Put it in Extended.config.h, e.g. #define ONE_WIRE_PIN 21 (I2C header SDA, with nothing else on it)":
    "TREBUIE setat explicit pe E4 — vedeți avertismentul de mai sus. Puneți-l în Extended.config.h, de ex. #define ONE_WIRE_PIN 21 (SDA de pe conectorul cu pini I2C, fără nimic altceva pe el)",
  "Make sure no limit is being tripped (check the limit pin / LIMIT_STRICT).":
    "Asigurați-vă că nu este declanșată nicio limită (verificați pinul de limită / LIMIT_STRICT).",
  "Make sure the factory SDA↔M-RX / SCL↔M-TX caps and the ZDIAG-EN cap are removed.":
    "Asigurați-vă că jumperele din fabrică SDA↔M-RX / SCL↔M-TX și jumperul ZDIAG-EN sunt scoase.",
  "Make sure you actually entered DFU. BlackPill: hold BOOT0, tap NRST, release. BTT SKR PRO V1.2: set the":
    "Asigurați-vă că ați intrat într-adevăr în DFU. BlackPill: mențineți apăsat BOOT0, apăsați scurt NRST, eliberați. BTT SKR PRO V1.2: setați",
  "Max Axes":
    "Număr maxim de axe",
  "Max PWM duty (reduce if 24V supply)":
    "Factor de umplere PWM maxim (reduceți-l la alimentare de 24V)",
  "Max angle (degrees)":
    "Unghi maxim (grade)",
  "Max limit":
    "Limită maximă",
  "Max limit switch":
    "Limitator de cursă maxim",
  "Max recording length in seconds (720s = 12 min)":
    "Durata maximă de înregistrare în secunde (720s = 12 min)",
  "Max travel in mm":
    "Cursă maximă în mm",
  "Max µm/s":
    "µm/s max",
  "MaxESP build notes":
    "Note de construcție MaxESP",
  "MaxESP3 (ESP32) — older 3-axis ESP32, MaxESP4 recommended":
    "MaxESP3 (ESP32) — ESP32 mai vechi cu 3 axe, se recomandă MaxESP4",
  "MaxESP4 (ESP32) — covers MaxESP4i (dual-ESP32 + FRAM)":
    "MaxESP4 (ESP32) — include MaxESP4i (dual-ESP32 + FRAM)",
  "MaxPCB4 (Teensy 4.1) — covers MaxPCB4w (WiFi) / MaxPCB4e (Ethernet)":
    "MaxPCB4 (Teensy 4.1) — include MaxPCB4w (WiFi) / MaxPCB4e (Ethernet)",
  "MaxSTM3 with integrated STM32F411CE + onboard M24C64 EEPROM (8KB). Same TMC SPI driver bus as MaxSTM3 — defaults to TMC2130.":
    "MaxSTM3 cu STM32F411CE integrat + EEPROM M24C64 pe placă (8KB). Aceeași magistrală de drivere TMC SPI ca MaxSTM3 — implicit TMC2130.",
  "MaxSTM3I (STM32F411 + onboard M24C64 EEPROM)":
    "MaxSTM3I (STM32F411 + EEPROM M24C64 pe placă)",
  "Measure the 3.3V rail during a slew; if it sags, reduce motor current until brownouts stop.":
    "Măsurați linia de 3.3V în timpul unei deplasări rapide; dacă scade, reduceți curentul motorului până când căderile de tensiune încetează.",
  "Mechanical":
    "Mecanic",
  "Mechanical switches bounce for 5–20ms, but OnStepX debounces home/limit inputs in firmware and the E4's built-in pull-up holds the line — bare switches work as-is. Only if a long switch cable picks up RFI/EMI and causes false triggers, add a stronger 1–2kΩ pull-up to 3.3V (per the OnStep E4 wiki) or a small RC (10kΩ + 0.1µF).":
    "Comutatoarele mecanice au ricoșeuri de 5–20ms, dar OnStepX filtrează ricoșeurile intrărilor de origine/limită în firmware, iar rezistența pull-up integrată a E4 menține linia — comutatoarele simple funcționează ca atare. Doar dacă un cablu lung de comutator captează RFI/EMI și provoacă declanșări false, adăugați o rezistență pull-up mai puternică de 1–2kΩ la 3.3V (conform wiki-ului OnStep E4) sau un mic filtru RC (10kΩ + 0.1µF).",
  "Meridian flip never completes — mount just slews to home and stops (or does nothing)":
    "Întoarcerea la meridian nu se finalizează niciodată — montura doar se deplasează la poziția de origine și se oprește (sau nu face nimic)",
  "Meridian flip offsets — set":
    "Decalajele pentru întoarcerea la meridian — setați-le",
  "Meridian flips for FORK / Zenith pass for ALTAZM":
    "Întoarceri la meridian pentru FORK / trecere prin zenit pentru ALTAZM",
  "Metrics":
    "Metrici",
  "Microstep mode":
    "Mod micropași",
  "Microstep mode for slewing":
    "Mod micropași pentru deplasarea rapidă",
  "Microstep mode for tracking":
    "Mod micropași pentru urmărire",
  "Microstep mode slewing":
    "Mod micropași (deplasare rapidă)",
  "Microstep mode tracking":
    "Mod micropași (urmărire)",
  "Microsteps":
    "Micropași",
  "Microswitch COM terminal":
    "Borna COM a microîntrerupătorului",
  "Microswitch NO terminal (switch to GND when activated)":
    "Borna NO a microîntrerupătorului (se conectează la GND când este activat)",
  "Min 8 chars (WPA2). Empty string = open network.":
    "Minimum 8 caractere (WPA2). Șir gol = rețea deschisă.",
  "Min angle (degrees)":
    "Unghi minim (grade)",
  "Min limit":
    "Limită minimă",
  "Min limit switch":
    "Limitator de cursă minim",
  "MiniPCB overview":
    "Prezentare generală MiniPCB",
  "MiniPCB v1 (Teensy 3.2 or Teensy 4.0) — embed-in-mount":
    "MiniPCB v1 (Teensy 3.2 sau Teensy 4.0) — integrat în montură",
  "MiniPCB v1 / v2 (Teensy 3.2 or Teensy 4.0)":
    "MiniPCB v1 / v2 (Teensy 3.2 sau Teensy 4.0)",
  "MiniPCB v2 (Teensy 3.2 or Teensy 4.0) — standalone case":
    "MiniPCB v2 (Teensy 3.2 sau Teensy 4.0) — carcasă independentă",
  "Module":
    "Modul",
  "Most common, ~$2, ±2ppm. CR2032 backup.":
    "Cel mai răspândit, ~2$, ±2ppm. Baterie de rezervă CR2032.",
  "Most defaults are fine. These are the ones you almost always have to set:":
    "Majoritatea valorilor implicite sunt în regulă. Iată-le pe cele pe care aproape întotdeauna trebuie să le setați:",
  "Most recommended. On the E4: I2C header (GPIO21/22).":
    "Cel mai recomandat. Pe E4: conectorul cu pini I2C (GPIO21/22).",
  "Motor Steps (per revolution)":
    "Pași motor (pe rotație)",
  "Motor driver model":
    "Modelul driverului de motor",
  "Motor output for Focuser1 on the E0-AXIS.":
    "Ieșire motor pentru Focuser1 pe E0-AXIS.",
  "Motor output on the Z-AXIS. Axis3 and Axis5 share these pins — only one may be enabled.":
    "Ieșire motor pe Z-AXIS. Axis3 și Axis5 folosesc aceiași pini — doar una poate fi activată.",
  "Motorized Focuser":
    "Focuser motorizat",
  "Motorized Focuser (Axis4)":
    "Focuser motorizat (Axis4)",
  "Motorized autofocus with temp compensation":
    "Autofocus motorizat cu compensare de temperatură",
  "Motors click/jerk at standstill or stutter during slews (often in time with the web UI)":
    "Motoarele fac clic/smucesc în repaus sau se poticnesc în timpul deplasărilor rapide (adesea în ritmul interfeței web)",
  "Motors randomly click/jerk or stutter at standstill, and motion is not smooth — often a short hitch every ~1s that lines up with the web UI refreshing the position. At higher slew speeds the axis can briefly stall.":
    "Motoarele fac aleatoriu clic/smucesc sau se poticnesc în repaus, iar mișcarea nu este lină — adesea o scurtă sacadare la fiecare ~1s, sincronizată cu reîmprospătarea poziției de către interfața web. La viteze mari de deplasare rapidă, axa se poate bloca pentru scurt timp.",
  "Motors run hot on 12V. Root cause: TMC2209 UART comms failure means Config.h current never reaches the driver, and with VREF unconnected the current is uncontrolled.":
    "Motoarele se încălzesc la 12V. Cauza: eșecul comunicației UART cu TMC2209 face ca valoarea curentului din Config.h să nu ajungă niciodată la driver, iar cu VREF neconectat curentul este necontrolat.",
  "Motors stall at full slew speed (often only one axis, or after going to finer microsteps)":
    "Motoarele se blochează la viteza maximă de deplasare rapidă (adesea doar o axă sau după trecerea la micropași mai fini)",
  "Mount":
    "Montură",
  "Mount Dec/Alt":
    "Montură Dec/Alt",
  "Mount Operation & Goto":
    "Funcționarea monturii și GOTO",
  "Mount RA/Azm":
    "Montură RA/Azm",
  "Mount Type":
    "Tipul monturii",
  "Mount controller firmware":
    "Firmware-ul controlerului de montură",
  "Mount type":
    "Tip de montură",
  "Mount type (change to ALTAZM as needed)":
    "Tip de montură (schimbați în ALTAZM după caz)",
  "Move/rename the TMC2209Stepper folder out of your Arduino/libraries directory.":
    "Mutați/redenumiți folderul TMC2209Stepper în afara directorului Arduino/libraries.",
  "Movement rate LED":
    "LED pentru viteza de mișcare",
  "Multi-GNSS, better sensitivity.":
    "Multi-GNSS, sensibilitate mai bună.",
  "Must be low at boot":
    "Trebuie să fie LOW la pornire",
  "Must be low at boot; PWM dew or switch":
    "Trebuie să fie LOW la pornire; PWM anti-rouă sau comutator",
  "Must be ≥ 8 chars (WPA2), or leave empty for an open network.":
    "Trebuie să aibă ≥ 8 caractere (WPA2) sau lăsați gol pentru o rețea deschisă.",
  "Must match GPS module baud rate":
    "Trebuie să corespundă ratei baud a modulului GPS",
  "Must match the GPS module (most ship at 9600)":
    "Trebuie să corespundă modulului GPS (majoritatea sunt livrate la 9600)",
  "Must match your mount — use the configurator's Calculator tab":
    "Trebuie să corespundă monturii dumneavoastră — folosiți fila Calculator a configuratorului",
  "NEO-M8N / NEO-6M auto time & location":
    "Oră și locație automate cu NEO-M8N / NEO-6M",
  "NEO-M8N on X-MIN (GPIO34) single-wire bit-banged mode. Capacitor removal required for reliable 9600-baud data.":
    "NEO-M8N pe X-MIN (GPIO34) în mod bit-bang pe un singur fir. Este necesară îndepărtarea condensatorului pentru date fiabile la 9600 baud.",
  "NEVER connect the E4 GPIO directly to a camera. Always use an optocoupler (4N35, PC817). Direct connection can destroy both the ESP32 and the camera.":
    "Nu conectați NICIODATĂ GPIO-ul E4 direct la o cameră. Folosiți întotdeauna un optocuplor (4N35, PC817). Conectarea directă poate distruge atât ESP32, cât și camera.",
  "NEVER jumper the two pins closest to the USB connector while main power is connected.":
    "Nu puneți NICIODATĂ jumper pe cei doi pini cei mai apropiați de conectorul USB cât timp alimentarea principală este conectată.",
  "NEVER power the board up with the antenna disconnected — running the RF stage with no antenna can damage the ESP32 RF amplifier.":
    "Nu porniți NICIODATĂ placa cu antena deconectată — funcționarea etajului RF fără antenă poate deteriora amplificatorul RF al ESP32.",
  "NEVER power up an external-antenna board without its antenna attached.":
    "Nu porniți NICIODATĂ o placă cu antenă externă fără antena atașată.",
  "NO to GND":
    "NO la GND",
  "NTC temperature sensing via TE/TB":
    "Măsurarea temperaturii cu NTC prin TE/TB",
  "NTC thermistor leg 1 — leg 2 → GND":
    "Terminalul 1 al termistorului NTC — terminalul 2 → GND",
  "NTC type":
    "Tip NTC",
  "NV Storage":
    "Stocare NV",
  "NV_2416 — 2KB I2C EEPROM @ 0x50":
    "NV_2416 — EEPROM I2C de 2KB @ 0x50",
  "NV_2432 — 4KB I2C EEPROM @ 0x50":
    "NV_2432 — EEPROM I2C de 4KB @ 0x50",
  "NV_2464 — 8KB I2C EEPROM @ 0x50":
    "NV_2464 — EEPROM I2C de 8KB @ 0x50",
  "NV_AT24C32 — 4KB I2C EEPROM @ 0x57 (ZS042 module)":
    "NV_AT24C32 — EEPROM I2C de 4KB @ 0x57 (modul ZS042)",
  "NV_DEFAULT — platform default (use this for almost every board)":
    "NV_DEFAULT — implicit pentru platformă (folosiți-l pentru aproape orice placă)",
  "NV_MB85RC256 — 32KB I2C FRAM @ 0x50":
    "NV_MB85RC256 — FRAM I2C de 32KB @ 0x50",
  "NV_MB85RC64 — 8KB I2C FRAM @ 0x50 (MaxESP4i and similar)":
    "NV_MB85RC64 — FRAM I2C de 8KB @ 0x50 (MaxESP4i și similare)",
  "Needs 3.5V+ — power at 5V, no divider.":
    "Necesită 3.5V+ — alimentați la 5V, fără divizor.",
  "Needs 3.5V+ — power at 5V, no divider. Only one pole triggers — flip the magnet if nothing is detected.":
    "Necesită 3.5V+ — alimentați la 5V, fără divizor. Declanșează doar un pol — întoarceți magnetul dacă nu se detectează nimic.",
  "Needs 4.5V+ — power at 5V. Bare A3144: no divider. KY-003 module: divider (its pull-up goes to 5V).":
    "Necesită 4.5V+ — alimentați la 5V. A3144 simplu: fără divizor. Modul KY-003: cu divizor (rezistența sa pull-up merge la 5V).",
  "Needs a":
    "Necesită un",
  "Negotiated baud after connection (not all devices support > 115200)":
    "Rata baud negociată după conectare (nu toate dispozitivele acceptă > 115200)",
  "Network":
    "Rețea",
  "Network stack. WIFI is the most common choice on ESP32/ESP8266.":
    "Stiva de rețea. WIFI este alegerea cea mai obișnuită pe ESP32/ESP8266.",
  "Nikon uses opposite tip/ring polarity vs Canon.":
    "Nikon folosește polaritatea vârf/inel inversă față de Canon.",
  "No":
    "Nu",
  "No built-in ESP? Adding WiFi and the web page":
    "Fără ESP integrat? Adăugarea WiFi și a paginii web",
  "No extra ESP needed for the web UI:":
    "Nu este necesar un ESP suplimentar pentru interfața web:",
  "No focus control. Short tip→sleeve = shutter.":
    "Fără control al focalizării. Scurtcircuit vârf→manșon = declanșator.",
  "NodeMCU / Wemos D1 mini auto-reset into the ROM bootloader (DTR/RTS wiring on their USB bridge). Bare ESP-01 modules don't — you need to pull":
    "NodeMCU / Wemos D1 mini intră automat în bootloader-ul ROM (cablaj DTR/RTS pe puntea lor USB). Modulele ESP-01 simple nu — trebuie să conectați",
  "Nominal resistance (Ω) — typically 100kΩ":
    "Rezistență nominală (Ω) — de obicei 100kΩ",
  "Nominal temp of your NTC (°C)":
    "Temperatura nominală a NTC-ului dumneavoastră (°C)",
  "None — onboard":
    "Niciunul — integrat",
  "None — open collector, TE is pulled up to 3.3V on board. Power at 5V":
    "Niciunul — colector deschis, TE este tras la 3.3V pe placă. Alimentați la 5V",
  "None — open collector. Power at 5V":
    "Niciunul — colector deschis. Alimentați la 5V",
  "Normal. Block 0 on a Teensy triggers a full chip erase; the ACK for that first write arrives only after the erase finishes (a few seconds on 3.2, a bit longer on 4.1's 8 MB flash). The flasher allows up to 45 s per block for the first five blocks. If it actually times out, unplug / replug the Teensy and retry — HalfKay is ROM-resident, nothing can be bricked.":
    "Normal. Blocul 0 pe un Teensy declanșează ștergerea completă a cipului; ACK-ul pentru această primă scriere sosește abia după terminarea ștergerii (câteva secunde pe 3.2, puțin mai mult pe flash-ul de 8 MB al lui 4.1). Programatorul permite până la 45 s pe bloc pentru primele cinci blocuri. Dacă timpul chiar expiră, deconectați / reconectați Teensy și reîncercați — HalfKay este rezident în ROM, nimic nu poate fi blocat definitiv.",
  "Not available":
    "Indisponibil",
  "Notes":
    "Note",
  "Nothing runs on anyone's private server.":
    "Nimic nu rulează pe serverul privat al cuiva.",
  "OFF (12-hour)":
    "OFF (12 ore)",
  "OFF (default port)":
    "OFF (port implicit)",
  "OFF (normal operation)":
    "OFF (funcționare normală)",
  "OFF (radio only)":
    "OFF (doar radio)",
  "OFF (same as tracking)":
    "OFF (la fel ca urmărirea)",
  "OFF (uses tracking)":
    "OFF (folosește urmărirea)",
  "OFF in the stock Config.h — Dew Heat 1 then runs on ambient-vs-dew-point alone. Set THERMISTOR only if you add a probe on TE":
    "OFF în Config.h original — Dew Heat 1 funcționează atunci doar pe baza diferenței ambiant/punct de rouă. Setați THERMISTOR doar dacă adăugați o sondă pe TE",
  "OFF in the stock E4 Config.h, which gives MOT-Z to Axis5 (focuser2). Set AXIS5_DRIVER_MODEL OFF first":
    "OFF în Config.h original pentru E4, care atribuie MOT-Z lui Axis5 (focuser 2). Setați mai întâi AXIS5_DRIVER_MODEL pe OFF",
  "OFF on the E4 — define ONE_WIRE_PIN yourself (GPIO21/22 only)":
    "OFF pe E4 — definiți singur ONE_WIRE_PIN (doar GPIO21/22)",
  "OFF or 0..255 brightness":
    "OFF sau luminozitate 0..255",
  "OFF or 0..90 degrees":
    "OFF sau 0..90 grade",
  "OFF or mA":
    "OFF sau mA",
  "OFF or mA for slew current":
    "OFF sau mA pentru curentul la deplasare rapidă",
  "OFF or mA for standstill current":
    "OFF sau mA pentru curentul de menținere (în repaus)",
  "OFF or mA for tracking current":
    "OFF sau mA pentru curentul de urmărire",
  "OFF or pin number":
    "OFF sau număr de pin",
  "OFF or pin number (GPS TX wires here)":
    "OFF sau număr de pin (aici se conectează TX-ul GPS-ului)",
  "OFF, AUX, or pin number":
    "OFF, AUX sau număr de pin",
  "OFF, ON, or 0..255":
    "OFF, ON sau 0..255",
  "OFF, ON, or 100..6000 Hz":
    "OFF, ON sau 100..6000 Hz",
  "OFF, THERMISTOR, or DS18B20 s/n":
    "OFF, THERMISTOR sau nr. de serie DS18B20",
  "OFF, or 0–255 brightness (0–100%) for the utility LED":
    "OFF sau luminozitate 0–255 (0–100%) pentru LED-ul utilitar",
  "OLED model in your hand controller":
    "Modelul OLED din telecomanda (hand controller) dumneavoastră",
  "ON (24-hour)":
    "ON (24 de ore)",
  "ON (swapped port)":
    "ON (port inversat)",
  "ON state voltage level":
    "Nivelul de tensiune al stării ON",
  "ON ⚠ wipe NV on next boot":
    "ON ⚠ șterge NV la următoarea pornire",
  "Of the three browser flashers, the Teensy one is the most custom. PJRC's official tool is":
    "Dintre cele trei programatoare din browser, cel pentru Teensy este cel mai personalizat. Instrumentul oficial PJRC este",
  "Official FYSETC E4 Wiki — Complete Reference":
    "Wiki oficial FYSETC E4 — referință completă",
  "Often":
    "Adesea",
  "Often a \"compatible\" E4 clone or a marginal board; the firmware uploads and verifies but the ESP32 hangs at start-up.":
    "Adesea o clonă E4 „compatibilă” sau o placă la limită; firmware-ul se încarcă și se verifică, dar ESP32 se blochează la pornire.",
  "Old ESP32 board package version — the analogWrite API was renamed.":
    "Versiune veche a pachetului de plăci ESP32 — API-ul analogWrite a fost redenumit.",
  "Older, GPS-only, less sensitive than M8N. Cold start ~30s.":
    "Mai vechi, doar GPS, mai puțin sensibil decât M8N. Pornire la rece ~30s.",
  "On Android: disable mobile data when connected to OnStep WiFi.":
    "Pe Android: dezactivați datele mobile când sunteți conectat la WiFi-ul OnStep.",
  "On Windows: install the WinUSB driver via Zadig (see the BlackPill warning above).":
    "Pe Windows: instalați driverul WinUSB prin Zadig (vedeți avertismentul BlackPill de mai sus).",
  "On a board with no built-in WiFi":
    "Pe o placă fără WiFi integrat",
  "On the Compile & Flash tab, the":
    "În fila Compile & Flash, câmpul",
  "On the FYSETC E4":
    "Pe FYSETC E4",
  "On-board pull-up on X-MIN/Y-MIN":
    "Pull-up integrat pe X-MIN/Y-MIN",
  "OnStepX (Mount controller firmware)":
    "OnStepX (firmware pentru controlerul monturii)",
  "OnStepX Configuration Generator":
    "Generator de configurație OnStepX",
  "OnStepX Configurator":
    "Configurator OnStepX",
  "OnStepX E4 branch":
    "ramura E4 a OnStepX",
  "OnStepX E4 branch (v10.24c+)":
    "Ramura E4 a OnStepX (v10.24c+)",
  "OnStepX can act as an intervalometer (DSLR timer). It controls the camera shutter via a GPIO pin through an optocoupler. The camera MUST be set to":
    "OnStepX poate funcționa ca intervalometru (temporizator DSLR). Controlează declanșatorul camerei printr-un pin GPIO prin intermediul unui optocuplor. Camera TREBUIE setată în modul",
  "OnStepX can serve its own page via the":
    "OnStepX își poate servi propria pagină prin",
  "OnStepX on ESP32 with the Website plugin":
    "OnStepX pe ESP32 cu plugin-ul Website",
  "OnStepX opens a TCP/IP port on its own WiFi, and/or Bluetooth serial.":
    "OnStepX deschide un port TCP/IP pe propriul WiFi și/sau serial Bluetooth.",
  "OnStepX plugins":
    "Plugin-uri OnStepX",
  "OnStepX plugins (optional)":
    "Plugin-uri OnStepX (opțional)",
  "OnStepX plugins — how the bundling works":
    "Plugin-uri OnStepX — cum funcționează includerea lor",
  "OnStepX regulates dew-heater power with slow PWM (2-second period). Power is computed from the ambient-vs-dew-point difference (0–255 duty).":
    "OnStepX reglează puterea încălzitorului anti-rouă prin PWM lent (perioadă de 2 secunde). Puterea este calculată din diferența dintre temperatura ambiantă și punctul de rouă (factor de umplere 0–255).",
  "OnStepX regulates dew-heater power with slow PWM (2-second period). Power is computed from the ambient-vs-dew-point difference (0–255 duty). GPIO2/GPIO4 drive the E4's onboard MOSFETs — there is no external switching stage to build.":
    "OnStepX reglează puterea încălzitorului anti-rouă prin PWM lent (perioadă de 2 secunde). Puterea este calculată din diferența dintre temperatura ambiantă și punctul de rouă (factor de umplere 0–255). GPIO2/GPIO4 comandă tranzistoarele MOSFET integrate ale E4 — nu trebuie construit niciun etaj de comutare extern.",
  "OnStepX servo monitor panel (any axis)":
    "Panou de monitorizare servo OnStepX (orice axă)",
  "OnStepX supports home sensors (end-stops) and limit switches on each axis. The E4 has dedicated pins for Axis1 home (X-MIN / GPIO34) and Axis2 home (Y-MIN / GPIO35). GPIO34 is input-only (no internal pull-up) — the E4 has a 10kΩ pull-up to 3.3V, a 100nF filter capacitor and a 100Ω series resistor on each of X-MIN and Y-MIN. Remove the XDIAG-EN / YDIAG-EN jumper caps, or the drivers' DIAG outputs drive these inputs.":
    "OnStepX acceptă senzori de origine (opritoare) și limitatoare de cursă pe fiecare axă. E4 are pini dedicați pentru poziția de origine (home) a Axis1 (X-MIN / GPIO34) și a Axis2 (Y-MIN / GPIO35). GPIO34 este doar intrare (fără pull-up intern) — E4 are un pull-up de 10kΩ la 3.3V, un condensator de filtrare de 100nF și o rezistență serie de 100Ω pe fiecare dintre X-MIN și Y-MIN. Scoateți jumperele XDIAG-EN / YDIAG-EN, altfel ieșirile DIAG ale driverelor comandă aceste intrări.",
  "OnStepX supports up to 6 focusers (Axis4–Axis9). The E4 has two:":
    "OnStepX acceptă până la 6 focusere (Axis4–Axis9). E4 are două:",
  "OnStepX vs SmartHandController vs SmartWebServer — the mode switch":
    "OnStepX vs SmartHandController vs SmartWebServer — comutatorul de mod",
  "OnStepX website plugin":
    "plugin-ul website al OnStepX",
  "OnStepX with raw LX200 TCP (no web UI)":
    "OnStepX cu LX200 TCP brut (fără interfață web)",
  "Onboard LED blinks while connecting, steady once connected":
    "LED-ul integrat clipește în timpul conectării, rămâne aprins după conectare",
  "Onboard driver only — no header":
    "Doar driver integrat — fără conector cu pini",
  "Once the device is open, flashing is a loop of 1088-byte HID output reports with this layout:":
    "Odată ce dispozitivul este deschis, programarea este o buclă de rapoarte de ieșire HID de 1088 de octeți, cu următoarea structură:",
  "Once your browser has the firmware zip, it unzips in memory and uses one of the Web APIs modern Chromium browsers expose to talk to USB devices:":
    "După ce browserul dumneavoastră are arhiva zip a firmware-ului, o dezarhivează în memorie și folosește una dintre API-urile Web pe care browserele Chromium moderne le expun pentru a comunica cu dispozitivele USB:",
  "One axis (often DEC) runs weak/jerky when connected to USB":
    "O axă (adesea DEC) funcționează slab/sacadat când este conectată la USB",
  "One-click browser flash (Chrome / Edge):":
    "Programare din browser cu un clic (Chrome / Edge):",
  "OneWire / DS18B20 Sensors":
    "Senzori OneWire / DS18B20",
  "OneWire bus":
    "Magistrală OneWire",
  "Online build shortcut:":
    "Scurtătură pentru compilarea online:",
  "Only used if you disable DHCP (STA_DHCP_ENABLED = false).":
    "Folosită doar dacă dezactivați DHCP (STA_DHCP_ENABLED = false).",
  "Open":
    "Deschideți",
  "Open the":
    "Deschideți fila",
  "Open this in a browser once joined to the network.":
    "Deschideți aceasta într-un browser după conectarea la rețea.",
  "Open-collector":
    "Colector deschis",
  "Open-collector, LOW on south pole":
    "Colector deschis, LOW la polul sud",
  "Operation:":
    "Funcționare:",
  "Optic":
    "Optică",
  "Optic temp source → enables dew-point auto control":
    "Sursa de temperatură a opticii → activează controlul automat după punctul de rouă",
  "Option":
    "Opțiune",
  "Optional ambient sensor on the I2C bus":
    "Senzor ambiant opțional pe magistrala I2C",
  "Optional analog joystick add-on":
    "Modul opțional de joystick analogic",
  "Optional: extras on":
    "Opțional: extra pe",
  "Optocoupler":
    "Optocuplor",
  "Or downgrade to v2.0.11 if v2.0.17 causes other issues.":
    "Sau reveniți la v2.0.11 dacă v2.0.17 provoacă alte probleme.",
  "Or set both to OFF:":
    "Sau setați-le pe amândouă pe OFF:",
  "Or the specific sensor's 64-bit serial":
    "Sau numărul de serie pe 64 de biți al senzorului respectiv",
  "Output":
    "Ieșire",
  "Over-the-air firmware update via web browser. Pairs well with Website.":
    "Actualizare de firmware prin rețea (OTA) din browserul web. Se combină bine cu Website.",
  "Overrides the pinmap default of 39, moving limit sense to X-MIN":
    "Înlocuiește valoarea implicită 39 din pinmap, mutând detecția limitei pe X-MIN",
  "PC817/4N35 LED cathode (–)":
    "Catodul (–) LED-ului PC817/4N35",
  "PEC (Periodic Error Correction)":
    "PEC (Corecția erorii periodice)",
  "PEC / Thermistor":
    "PEC / Termistor",
  "PEC Calculator":
    "Calculator PEC",
  "PEC Hall":
    "Hall PEC",
  "PEC Hall sensor not detected":
    "Senzorul Hall PEC nu este detectat",
  "PEC Hall — PEC index Hall sensor":
    "PEC Hall — senzor Hall pentru indexul PEC",
  "PEC Index":
    "Index PEC",
  "PEC Index Implementation":
    "Implementarea indexului PEC",
  "PEC Index — Hall Effect Sensor (A3144 / KY-003 / US5881)":
    "Index PEC — senzor cu efect Hall (A3144 / KY-003 / US5881)",
  "PEC Wiring KY-003 / A3144 — Step by Step":
    "Cablare PEC KY-003 / A3144 — pas cu pas",
  "PEC index, thermistor":
    "Index PEC, termistor",
  "PEC is completely ignored in ALTAZM mode.":
    "PEC este complet ignorat în modul ALTAZM.",
  "PEC sensor edge":
    "Frontul senzorului PEC",
  "PIN SHARING — CRITICAL:":
    "PARTAJAREA PINILOR — CRITIC:",
  "PINMAP → MCU target auto-resolves.":
    "PINMAP → MCU-ul țintă se determină automat.",
  "PINMAP ↔ MCU match":
    "Potrivire PINMAP ↔ MCU",
  "PPS signal edge detection":
    "Detectarea frontului semnalului PPS",
  "PULSE allows ~1.6x faster rates than SQUARE":
    "PULSE permite viteze de ~1.6x mai mari decât SQUARE",
  "PULSE — ~1.6× higher step rate (short wiring runs only)":
    "PULSE — rată de pași ~1.6× mai mare (doar pentru cabluri scurte)",
  "PWM dew heater or switch":
    "Încălzitor anti-rouă PWM sau comutator",
  "PWM heater control & dew point compensation":
    "Control PWM al încălzitorului și compensare după punctul de rouă",
  "PWR Vin·GND - Main power input — Vin / GND screw terminal":
    "PWR Vin·GND - Intrarea principală de alimentare — bornă cu șurub Vin / GND",
  "Parameter":
    "Parametru",
  "Park input signal trigger":
    "Declanșare prin semnal de intrare pentru parcare",
  "Park orientation sensor":
    "Senzor de orientare pentru parcare",
  "Park status output":
    "Ieșire de stare a parcării",
  "Parsing the firmware is its own step. On Teensy 4.x, PlatformIO emits an Intel HEX file whose data records carry absolute addresses starting at":
    "Analiza firmware-ului este un pas separat. Pe Teensy 4.x, PlatformIO generează un fișier Intel HEX ale cărui înregistrări de date conțin adrese absolute începând de la",
  "Part":
    "Piesă",
  "Partition Scheme":
    "Schema de partiționare",
  "Pass-through ST4 jack for autoguider":
    "Mufă ST4 de trecere (pass-through) pentru autoghidor",
  "Password for your existing WiFi network":
    "Parola rețelei WiFi existente",
  "Paste a":
    "Lipiți un",
  "Pause at home during flip":
    "Pauză în poziția de origine (home) în timpul întoarcerii meridianului",
  "Per Config.h: OFF disables limits until an unpark goto or a sync; ON enables them at startup (the defaults file adds \"if date/time are set\"). The stock E4 Config.h ships OFF.":
    "Conform Config.h: OFF dezactivează limitele până la un GOTO de ieșire din parcare sau o sincronizare; ON le activează la pornire (fișierul de valori implicite adaugă „dacă data/ora sunt setate”). Config.h original pentru E4 este livrat cu OFF.",
  "Periodic Error Correction (PEC) compensates for worm-gear imperfections. OnStepX learns the error pattern over one worm rotation and applies real-time correction. Requires a sensor to detect the worm index pulse.":
    "Corecția erorii periodice (PEC) compensează imperfecțiunile angrenajului melcat. OnStepX învață tiparul erorii pe o rotație a melcului și aplică o corecție în timp real. Necesită un senzor pentru detectarea impulsului de index al melcului.",
  "Periodic error correction with Hall sensor":
    "Corecția erorii periodice cu senzor Hall",
  "Persist auto-sync setting across power cycles":
    "Păstrarea setării de sincronizare automată între reporniri",
  "Pick":
    "Alegeți",
  "Pick a PINMAP first.":
    "Alegeți mai întâi un PINMAP.",
  "Picking an upstream version":
    "Alegerea unei versiuni upstream",
  "Picking an upstream version (Source ref)":
    "Alegerea unei versiuni upstream (Source ref)",
  "Piece by piece:":
    "Bucată cu bucată:",
  "Pier Side & Alignment":
    "Partea pilonului și aliniere",
  "Pin / Header":
    "Pin / conector cu pini",
  "Pin Header Quick Reference":
    "Referință rapidă pentru conectorii cu pini",
  "Pin sharing:":
    "Partajarea pinilor:",
  "Pin#":
    "Pin nr.",
  "Pinmap & Overview":
    "Pinmap și prezentare generală",
  "Pins.FYSETC_E4.h defines SPARE_RX_PIN as OFF in both TMC-UART branches":
    "Pins.FYSETC_E4.h definește SPARE_RX_PIN ca OFF în ambele ramuri TMC-UART",
  "Place the":
    "Plasați",
  "Platform":
    "Platformă",
  "Platform Rate Limits (minimum μs/step) —":
    "Limitele de viteză ale platformei (μs/pas minim) —",
  "Plug":
    "Mufă",
  "Plug in the motors":
    "Conectați motoarele",
  "Plug the Teensy into USB.":
    "Conectați Teensy la USB.",
  "Plugins live in their own repo —":
    "Plugin-urile se află în propriul depozit —",
  "Plugins that need extras":
    "Plugin-uri care necesită extra",
  "Power":
    "Alimentare",
  "Power / regulator":
    "Alimentare / regulator",
  "Power LED":
    "LED de alimentare",
  "Power LED — Power-on indicator LED":
    "LED de alimentare — LED indicator de pornire",
  "Power off after movement stops":
    "Oprirea alimentării după oprirea mișcării",
  "Power off after stop":
    "Oprire alimentare după stop",
  "Power off the board.":
    "Opriți alimentarea plăcii.",
  "Power off, connect":
    "Opriți alimentarea, conectați",
  "Power on via USB — the board comes up as":
    "Porniți prin USB — placa apare ca",
  "Power on, connect to the \"OnStepX\" WiFi → 192.168.0.1, and test that one axis before adding the rest.":
    "Porniți, conectați-vă la WiFi-ul „OnStepX” → 192.168.0.1 și testați acea axă înainte de a le adăuga pe celelalte.",
  "Power supply":
    "Sursă de alimentare",
  "Power the sensor from 5V (the E4 has no 3.3V pin). A bare open-collector sensor needs no divider; a KY-003 module (own 5V pull-up) needs 1kΩ series + 2kΩ to GND.":
    "Alimentați senzorul de la 5V (E4 nu are pin de 3.3V). Un senzor simplu cu colector deschis nu necesită divizor; un modul KY-003 (cu propriul pull-up la 5V) necesită 1kΩ în serie + 2kΩ la GND.",
  "Power up: the ESP creates the":
    "Pornire: ESP-ul creează punctul de acces",
  "Power-cycle once after the first boot":
    "Opriți și reporniți o dată după prima pornire",
  "Powering the board with the u.FL antenna disconnected can damage the ESP32 RF amplifier; on-board-antenna boards simply have short range.":
    "Alimentarea plăcii cu antena u.FL deconectată poate deteriora amplificatorul RF al ESP32; plăcile cu antenă integrată au pur și simplu o rază de acțiune scurtă.",
  "Preferred pier side":
    "Partea preferată a pilonului",
  "Press the white program button on the Teensy — it flashes and reboots automatically.":
    "Apăsați butonul alb de programare de pe Teensy — se programează și repornește automat.",
  "Privacy":
    "Confidențialitate",
  "Privacy & what gets logged":
    "Confidențialitate și ce se înregistrează",
  "Progress streams to the flash log; the Teensy reboots into the new firmware when it's done. Typical time: 3–8 seconds.":
    "Progresul apare în jurnalul de programare; Teensy repornește cu noul firmware la final. Durată obișnuită: 3–8 secunde.",
  "Progress streams to the flash log; the board reboots into OnStepX when done.":
    "Progresul apare în jurnalul de programare; placa repornește în OnStepX la final.",
  "Project selector":
    "Selector de proiect",
  "Prometheus-compatible metrics endpoint for debugging / monitoring.":
    "Endpoint de metrici compatibil Prometheus pentru depanare / monitorizare.",
  "Provides UTC time, latitude, longitude via NMEA sentences. OnStepX parses $GPGGA and $GPRMC automatically at 1Hz.":
    "Furnizează ora UTC, latitudinea și longitudinea prin propoziții NMEA. OnStepX analizează automat $GPGGA și $GPRMC la 1Hz.",
  "Pulley/Belt Reduction":
    "Reducție fulie/curea",
  "Purpose":
    "Scop",
  "Put the board in bootloader mode (see":
    "Puneți placa în modul bootloader (vedeți",
  "Quick Start — First Time Setup":
    "Pornire rapidă — prima configurare",
  "Quick start — board to firmware in 8 steps":
    "Pornire rapidă — de la placă la firmware în 8 pași",
  "Quick-reference shopping list of sensors, actuators and components compatible with the FYSETC E4. Use the configurator's own":
    "Listă de cumpărături de referință rapidă cu senzori, actuatoare și componente compatibile cu FYSETC E4. Folosiți filele proprii ale configuratorului",
  "Quiet operation":
    "Funcționare silențioasă",
  "RA/Azm direction":
    "Direcție RA/Azm",
  "RA/Azm step":
    "Pas RA/Azm",
  "RTC for timekeeping":
    "RTC pentru menținerea orei",
  "RTC — DS3231 Real-Time Clock":
    "RTC — ceas în timp real DS3231",
  "Ra/Azm — Right-Ascension / Azimuth stepper":
    "Ra/Azm — motor pas cu pas pentru ascensie dreaptă / azimut",
  "Raise IRUN toward the motor rating (within thermal limits); confirm UART current actually applied (driver status page).":
    "Creșteți IRUN spre curentul nominal al motorului (în limitele termice); confirmați că valoarea curentului prin UART este efectiv aplicată (pagina de stare a driverului).",
  "Range too short?":
    "Rază de acțiune prea scurtă?",
  "Rate limit hit":
    "Limită de rată atinsă",
  "Re-flash with \"Erase All Flash\" enabled, using ESP32 board package v2.0.17.":
    "Reprogramați cu „Erase All Flash” activat, folosind pachetul de plăci ESP32 v2.0.17.",
  "Recompile & flash. The page is then served at":
    "Recompilați și programați (flash). Pagina este apoi servită la",
  "Recording:":
    "Înregistrare:",
  "Reduce IRUN/IHOLD in Config.h (start at ~30-50% of motor rated current).":
    "Reduceți IRUN/IHOLD în Config.h (începeți de la ~30-50% din curentul nominal al motorului).",
  "Reference build proving this config compiles against current OnStepX:":
    "Build de referință care dovedește că această configurație se compilează cu OnStepX actual:",
  "Reference wiki:":
    "Wiki de referință:",
  "Reference wikis:":
    "Wiki-uri de referință:",
  "Register it in":
    "Înregistrați-l în",
  "Remember across power cycles":
    "Memorare între cicluri de alimentare",
  "Remember auto flip setting":
    "Memorare setare de întoarcere automată",
  "Remember brightness across power cycles":
    "Memorare luminozitate între cicluri de alimentare",
  "Remember buzzer setting":
    "Memorare setare buzzer",
  "Remember compensation setting":
    "Memorare setare de compensare",
  "Remember coords across power cycles (needs FRAM)":
    "Memorare coordonate între cicluri de alimentare (necesită FRAM)",
  "Remember pause setting":
    "Memorare setare de pauză",
  "Remember pier side setting":
    "Memorare setare parte a pilonului",
  "Remember slew rate":
    "Memorare viteză de deplasare rapidă",
  "Remember: remove the factory jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) and fit only the GPIO15 → M-TX wire. 12V recommended (24V dew heaters run at 4× power). Two E4 versions exist (internal ceramic vs external IPEX antenna) — both work identically.":
    "De reținut: îndepărtați jumperii din fabrică (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) și montați doar firul GPIO15 → M-TX. Se recomandă 12V (încălzitoarele anti-rouă funcționează la 4× puterea la 24V). Există două versiuni de E4 (antenă ceramică internă sau antenă IPEX externă) — ambele funcționează identic.",
  "Remove the Marlin jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) before use and ignore the board's Marlin heater wiring notes — OnStepX drives these pins directly.":
    "Îndepărtați jumperii Marlin (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) înainte de utilizare și ignorați indicațiile de cablare a încălzitoarelor Marlin de pe placă — OnStepX comandă acești pini direct.",
  "Remove the SDA↔M-RX and SCL↔M-TX caps and the three xDIAG-EN caps.":
    "Îndepărtați jumperii SDA↔M-RX și SCL↔M-TX, precum și cei trei jumperi xDIAG-EN.",
  "Remove the factory jumper caps":
    "Îndepărtați jumperii din fabrică",
  "Remove the factory jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN); wire the Z-min pin of ZDIAG-EN (GPIO15) to M-TX":
    "Îndepărtați jumperii din fabrică (SDA↔M-RX, SCL↔M-TX, xDIAG-EN); conectați pinul Z-min al ZDIAG-EN (GPIO15) la M-TX",
  "Remove the power-on LED from DS3231 modules to cut idle current.":
    "Îndepărtați LED-ul de alimentare de pe modulele DS3231 pentru a reduce curentul în repaus.",
  "Remove the single centre SMD filter capacitor beside the X-MIN pins — the two outer parts are resistors, leave them. No-modification alternative: the I2C header (GPS TX → SDA/GPIO21, SERIAL_GPS Serial2, SERIAL_GPS_RX 21, SERIAL_GPS_TX 22) when no DS3231/BME280 is fitted. Config: TIME_LOCATION_SOURCE GPS, SERIAL_GPS_BAUD 9600.":
    "Îndepărtați singurul condensator SMD de filtrare din centru, de lângă pinii X-MIN — cele două componente exterioare sunt rezistoare, lăsați-le. Alternativă fără modificări: conectorul I2C (GPS TX → SDA/GPIO21, SERIAL_GPS Serial2, SERIAL_GPS_RX 21, SERIAL_GPS_TX 22) atunci când nu este montat niciun DS3231/BME280. Config: TIME_LOCATION_SOURCE GPS, SERIAL_GPS_BAUD 9600.",
  "Req'd":
    "Oblig.",
  "Required (compile will fail without these)":
    "Obligatorii (compilarea va eșua fără acestea)",
  "Required fields":
    "Câmpuri obligatorii",
  "Required — the E4 pinmap assigns no GPS port":
    "Obligatoriu — pinmap-ul E4 nu alocă niciun port GPS",
  "Requires Makuna RTC Library v2.3.5.":
    "Necesită biblioteca Makuna RTC v2.3.5.",
  "Reset btn":
    "Buton reset",
  "Reset btn — External reset button":
    "Buton reset — Buton de resetare extern",
  "Reset button on UI (FWU option exposes the STM32 bootloader pin)":
    "Buton de reset în interfață (opțiunea FWU expune pinul bootloader-ului STM32)",
  "Resolve Issues or Override to Compile":
    "Rezolvați problemele sau forțați compilarea",
  "Restart Arduino IDE after removing the conflicting library.":
    "Reporniți Arduino IDE după eliminarea bibliotecii aflate în conflict.",
  "Restore pointing model from NV":
    "Restaurare model de pointare din NV",
  "Restores where the mount was pointing after a power cycle. Default OFF. Uses NV storage, not the RTC — but it writes often, so FRAM is kinder than flash-backed EEPROM":
    "Restaurează direcția în care era orientată montura după un ciclu de alimentare. Implicit OFF. Folosește memoria NV, nu RTC-ul — dar scrie des, așa că FRAM-ul este mai potrivit decât un EEPROM emulat în flash",
  "Reticle":
    "Reticul",
  "Reticle — Illuminated reticle lamp":
    "Reticul — Lampă de iluminare a reticulului",
  "Reverse direction":
    "Inversare sens",
  "Reverse direction if needed":
    "Inversați sensul dacă este necesar",
  "Reverse movement direction":
    "Inversare sens de mișcare",
  "Reverse the affected axis in Config.h: toggle AXIS1_DRIVER_REVERSE / AXIS2_DRIVER_REVERSE.":
    "Inversați axa afectată în Config.h: comutați AXIS1_DRIVER_REVERSE / AXIS2_DRIVER_REVERSE.",
  "Ring":
    "Inel (Ring)",
  "Rising edge = index pulse detected":
    "Front crescător = impuls de index detectat",
  "Root cause:":
    "Cauza principală:",
  "Rotator / Field De-Rotator":
    "Rotator / de-rotator de câmp",
  "Rotator off — MOT-Z goes to Focuser2":
    "Rotator dezactivat — MOT-Z trece la Focuser2",
  "Route A — add a SmartWebServer ESP module (classic OnStep way):":
    "Varianta A — adăugați un modul ESP SmartWebServer (metoda OnStep clasică):",
  "Route B — the OnStepX website plugin (for ESP-based boards like the E4):":
    "Varianta B — plugin-ul website al OnStepX (pentru plăcile bazate pe ESP, precum E4):",
  "Rule of thumb:":
    "Regulă generală:",
  "Run":
    "Rulați",
  "Run current (mA)":
    "Curent de funcționare (mA)",
  "Runs entirely in your browser. The HTML/CSS/JavaScript was served by GitHub Pages when you loaded the tab, and from then on everything is local — even the Config.h generation and the browser-based flasher. The page never phones home just for you being here.":
    "Rulează în întregime în browserul dumneavoastră. HTML/CSS/JavaScript-ul a fost livrat de GitHub Pages la încărcarea filei, iar de atunci totul este local — inclusiv generarea Config.h și programatorul de firmware din browser. Pagina nu „sună acasă” doar pentru că sunteți aici.",
  "SCL for RTC, BME280, etc.":
    "SCL pentru RTC, BME280 etc.",
  "SD - MicroSD card slot":
    "SD - Slot pentru card MicroSD",
  "SDA for RTC, BME280, etc.":
    "SDA pentru RTC, BME280 etc.",
  "SERIAL_RADIO is a single choice. Do not run WIFI_ACCESS_POINT and WIFI_STATION at the same time on the E4 — it is a known cause of dropped connections.":
    "SERIAL_RADIO este o singură alegere. Nu rulați WIFI_ACCESS_POINT și WIFI_STATION în același timp pe E4 — este o cauză cunoscută de conexiuni întrerupte.",
  "SERIAL_ST4 (synchronous via ST4 port)":
    "SERIAL_ST4 (sincron prin portul ST4)",
  "SERVO_EE — DC servo, dual PWM (enable/enable)":
    "SERVO_EE — servo DC, PWM dublu (enable/enable)",
  "SERVO_PE — DC servo, phase + enable PWM":
    "SERVO_PE — servo DC, PWM fază + enable",
  "SERVO_TMC2209 — closed-loop TMC2209 (VACTUAL)":
    "SERVO_TMC2209 — TMC2209 în buclă închisă (VACTUAL)",
  "SERVO_TMC5160 — closed-loop TMC5160 (VMAX)":
    "SERVO_TMC5160 — TMC5160 în buclă închisă (VMAX)",
  "SH1106 (1.3\" I2C, common)":
    "SH1106 (1,3\" I2C, uzual)",
  "SHC / SWS modes do":
    "Modurile SHC / SWS",
  "SHC builds — pick the MCU in your hand controller":
    "Compilări SHC — alegeți MCU-ul din telecomanda (hand controller) dumneavoastră",
  "SQUARE — best signal integrity (required for Teensy 4.x)":
    "SQUARE — cea mai bună integritate a semnalului (obligatoriu pentru Teensy 4.x)",
  "SSD1306 (0.96\" I2C)":
    "SSD1306 (0,96\" I2C)",
  "SSD1309 (1.54\" / 2.3\" I2C)":
    "SSD1309 (1,54\" / 2,3\" I2C)",
  "ST4 Interface":
    "Interfață ST4",
  "ST4 guide interface":
    "Interfață de ghidare ST4",
  "STA_PASSWORD — replace with your real WiFi password.":
    "STA_PASSWORD — înlocuiți cu parola WiFi reală.",
  "STA_SSID — the router/hotspot to join.":
    "STA_SSID — routerul/hotspotul la care se conectează.",
  "STM32 BlackPill F411CE (and MaxSTM3)":
    "STM32 BlackPill F411CE (și MaxSTM3)",
  "STM32 DFU flash":
    "Programare firmware (flash) DFU STM32",
  "STM32F411. Pinmap is wired for TMC SPI drivers (shared MOSI/SCK/MISO bus). All axes use TMC2130 (TMC5160 also works — swap the #define).":
    "STM32F411. Pinmap-ul este cablat pentru drivere TMC SPI (magistrală MOSI/SCK/MISO comună). Toate axele folosesc TMC2130 (merge și TMC5160 — schimbați #define-ul).",
  "STM32F446VE, 6-axis 3D-printer board, V2.0 connector layout. ⚠ Per the OnStep wiki: only TMC2130 / TMC5160 (SPI), LV8729 or S109 are supported here — TMC2208 / TMC2209 / TMC2226 UART steppers will NOT work on this board. Defaults assume TMC2130 SPI. Flash via WebUSB DFU (BOOT0 jumper + reset).":
    "STM32F446VE, placă de imprimantă 3D cu 6 axe, dispunerea conectorilor V2.0. ⚠ Conform wiki-ului OnStep: aici sunt suportate doar TMC2130 / TMC5160 (SPI), LV8729 sau S109 — driverele UART TMC2208 / TMC2209 / TMC2226 NU vor funcționa pe această placă. Valorile implicite presupun TMC2130 SPI. Programare (flash) prin WebUSB DFU (jumper BOOT0 + reset).",
  "STM32F446VE, 6-axis 3D-printer board. ⚠ Per the OnStep wiki: only TMC2130 / TMC5160 (SPI), LV8729 or S109 are supported here — TMC2208 / TMC2209 / TMC2226 UART steppers will NOT work on this board. Defaults assume TMC2130 SPI on all stepper sticks. Flash via WebUSB DFU (BOOT0 jumper + reset).":
    "STM32F446VE, placă de imprimantă 3D cu 6 axe. ⚠ Conform wiki-ului OnStep: aici sunt suportate doar TMC2130 / TMC5160 (SPI), LV8729 sau S109 — driverele UART TMC2208 / TMC2209 / TMC2226 NU vor funcționa pe această placă. Valorile implicite presupun TMC2130 SPI pe toate modulele de driver. Programare (flash) prin WebUSB DFU (jumper BOOT0 + reset).",
  "SWS IP when in AP mode. Emitted as":
    "IP-ul SWS în modul AP. Generat sub forma",
  "SWS builds — pick the MCU hosting the web server":
    "Compilări SWS — alegeți MCU-ul care găzduiește serverul web",
  "SWS cannot talk to OnStepX over serial — often an ESP32 library version mismatch.":
    "SWS nu poate comunica cu OnStepX prin serial — adesea din cauza unei nepotriviri de versiune a bibliotecii ESP32.",
  "Same":
    "La fel",
  "Same as above":
    "La fel ca mai sus",
  "Same, at supply voltage — use 2.2kΩ at 12V, 4.7kΩ at 24V":
    "La fel, la tensiunea de alimentare — folosiți 2,2kΩ la 12V, 4,7kΩ la 24V",
  "Search features, pins, directives…":
    "Căutați funcții, pini, directive…",
  "Search the E4 guide":
    "Căutați în ghidul E4",
  "Second Focuser (Axis5)":
    "Al doilea focuser (Axis5)",
  "Second channel = THERMISTOR2.":
    "Al doilea canal = THERMISTOR2.",
  "Seconds of PEC buffer":
    "Secunde de buffer PEC",
  "Secret-looking values":
    "Valori care par secrete",
  "Select board:":
    "Selectați placa:",
  "Selects E4 pin layout":
    "Selectează dispunerea pinilor E4",
  "Sensor":
    "Senzor",
  "Sensor Steps/Degree (pixels)":
    "Pași senzor/grad (pixeli)",
  "Sensors & Aux":
    "Senzori & auxiliare",
  "Separate SmartWebServer board":
    "Placă SmartWebServer separată",
  "Serial A baud rate":
    "Viteză Serial A (baud)",
  "Serial B baud rate":
    "Viteză Serial B (baud)",
  "Serial Bluetooth Config":
    "Configurare Bluetooth serial",
  "Serial C baud rate":
    "Viteză Serial C (baud)",
  "Serial D baud rate":
    "Viteză Serial D (baud)",
  "Serial E baud rate":
    "Viteză Serial E (baud)",
  "Serial Ports":
    "Porturi seriale",
  "Serial baud rates — 9600 on":
    "Viteze seriale (baud) — 9600 pe",
  "Serial link to OnStep":
    "Legătură serială către OnStep",
  "Served by OnStepX itself via the lightweight":
    "Servită chiar de OnStepX prin",
  "Set \"Erase All Flash Before Sketch Upload\" to Enabled for first-time flashing.":
    "Setați „Erase All Flash Before Sketch Upload” pe Enabled la prima programare a firmware-ului.",
  "Set ALIGN_AUTO_HOME to OFF if you have no home switches.":
    "Setați ALIGN_AUTO_HOME pe OFF dacă nu aveți limitatoare pentru poziția de origine (home).",
  "Set DEBUG VERBOSE plus FEATURE1_TEMP DS1820, flash, and read the serial numbers off the serial monitor — then assign each sensor by its own 64-bit serial. (There is no FEATURE_LIST_DS directive in OnStepX.)":
    "Setați DEBUG pe VERBOSE împreună cu FEATURE1_TEMP DS1820, programați firmware-ul (flash) și citiți numerele de serie din monitorul serial — apoi atribuiți fiecare senzor după propriul număr de serie pe 64 de biți. (Nu există directiva FEATURE_LIST_DS în OnStepX.)",
  "Set MFLIP_SKIP_HOME to ON for gotos without visiting home.":
    "Setați MFLIP_SKIP_HOME pe ON pentru GOTO-uri fără trecere prin poziția de origine (home).",
  "Set PEC_SENSE to HIGH for Hall sensors.":
    "Setați PEC_SENSE pe HIGH pentru senzori Hall.",
  "Set SERIAL_B_BAUD_DEFAULT to 230400.":
    "Setați SERIAL_B_BAUD_DEFAULT la 230400.",
  "Set static IP 192.168.0.x / 255.255.255.0 / gw 192.168.0.1.":
    "Setați IP static 192.168.0.x / 255.255.255.0 / gateway 192.168.0.1.",
  "Set the board's switch to the ESP32 position":
    "Puneți comutatorul plăcii în poziția ESP32",
  "Set the slew speed to ~5°/sec — slower than that errored out for one user, faster also failed.":
    "Setați viteza de deplasare rapidă la ~5°/s — mai lent a dat eroare la un utilizator, mai rapid a eșuat de asemenea.",
  "Set to 10000 (10kΩ) for extended sub-zero range":
    "Setați la 10000 (10kΩ) pentru un domeniu extins sub zero",
  "Set to HIGH if GPS has PPS output":
    "Setați pe HIGH dacă GPS-ul are ieșire PPS",
  "Setting":
    "Setare",
  "Settings (UTC offset, park position) are not saved across a power cycle":
    "Setările (decalaj UTC, poziție de parcare) nu se păstrează după un ciclu de alimentare",
  "Settings stored in NV are not migrated — expect to redo date/time, site and alignment.":
    "Setările stocate în NV nu sunt migrate — va trebui să refaceți data/ora, locația și alinierea.",
  "Shared I2C bus:":
    "Magistrală I2C comună:",
  "Shared bus:":
    "Magistrală comună:",
  "Shared enable for all stepper drivers":
    "Enable comun pentru toate driverele de motoare pas cu pas",
  "Shared with Axis5":
    "Comun cu Axis5",
  "Short tip→sleeve = shutter. Short ring→sleeve = focus.":
    "Scurtcircuit vârf→manșon = declanșare. Scurtcircuit inel→manșon = focalizare.",
  "Shortcut:":
    "Scurtătură:",
  "Show ESP32 internal temp":
    "Afișare temperatură internă ESP32",
  "Show MCU internal temperature":
    "Afișare temperatură internă MCU",
  "Show ambient conditions (temp / pressure / humidity)":
    "Afișare condiții ambientale (temp. / presiune / umiditate)",
  "Show coordinate-origin tile on Mount page":
    "Afișare panou origine coordonate pe pagina Montură",
  "Show dew point & humidity in the SWS web UI":
    "Afișare punct de rouă și umiditate în interfața web SWS",
  "Show temp/humidity/pressure on SWS":
    "Afișare temp./umiditate/presiune pe SWS",
  "Show weather (temp/pressure/humidity) in display rotation":
    "Afișare meteo (temp./presiune/umiditate) în rotația afișajului",
  "Shutter":
    "Declanșator",
  "Single 12–24V supply also feeds the heater outputs":
    "O singură sursă de 12–24V alimentează și ieșirile de încălzire",
  "Six hex bytes for the W5100/W5500 Ethernet shield. Ignored in WIFI mode.":
    "Șase octeți hexazecimali pentru shield-ul Ethernet W5100/W5500. Ignorat în modul WIFI.",
  "Skip final goto phase for alignment stars":
    "Omitere fază finală GOTO pentru stelele de aliniere",
  "Skip home during meridian flip":
    "Omitere poziție de origine (home) la întoarcerea la meridian",
  "Sleeve":
    "Manșon (Sleeve)",
  "Sleeve is ground, as on every brand here. Many modern Sony bodies use Multi-terminal (USB) instead of a 2.5mm jack — check the manual.":
    "Manșonul (sleeve) este masa, ca la toate mărcile de aici. Multe aparate Sony moderne folosesc Multi-terminal (USB) în locul unei mufe jack de 2,5 mm — consultați manualul.",
  "Sleeve is ground. Fuji RR-90 bodies use micro-USB, not the 2.5mm jack — verify yours.":
    "Manșonul (sleeve) este masa. Aparatele Fuji RR-90 folosesc micro-USB, nu mufa jack de 2,5 mm — verificați modelul dumneavoastră.",
  "Slew Rate & Timing Calculator":
    "Calculator viteză de deplasare rapidă și temporizare",
  "Slew speed too high for the deceleration ASIAIR expects; the axis decelerates then halts abruptly like hitting a limit.":
    "Viteza de deplasare rapidă este prea mare pentru decelerația așteptată de ASIAIR; axa decelerează, apoi se oprește brusc ca și cum ar atinge o limită.",
  "Slowest (0.5x)":
    "Cea mai lentă (0,5x)",
  "SmartHandController (Hand pendant firmware)":
    "SmartHandController (firmware pentru telecomandă)",
  "SmartHandController Configuration Generator":
    "Generator de configurație SmartHandController",
  "SmartHandController and SmartWebServer don't use a plugin system — the OnStepX plugins box is hidden in those modes, and you can skip ahead to the next section.":
    "SmartHandController și SmartWebServer nu folosesc un sistem de plugin-uri — caseta de plugin-uri OnStepX este ascunsă în aceste moduri și puteți trece direct la secțiunea următoare.",
  "SmartWebServer (Web UI & WiFi bridge firmware)":
    "SmartWebServer (firmware pentru interfață web și punte WiFi)",
  "SmartWebServer Configuration Generator":
    "Generator de configurație SmartWebServer",
  "SmartWebServer admin password (PASSWORD_DEFAULT). The lightweight plugin has no login.":
    "Parola de administrator SmartWebServer (PASSWORD_DEFAULT). Plugin-ul ușor nu are autentificare.",
  "SmartWebServer bridges TCP/IP ↔ the controller's serial port.":
    "SmartWebServer face puntea TCP/IP ↔ portul serial al controlerului.",
  "SmartWebServer mode":
    "modul SmartWebServer",
  "Solutions:":
    "Soluții:",
  "Some E4 boards have bootloader timing issues with the auto-reset method used by Arduino IDE.":
    "Unele plăci E4 au probleme de sincronizare a bootloader-ului cu metoda de auto-reset folosită de Arduino IDE.",
  "Source ref":
    "Ref. sursă",
  "Source ref stays on":
    "Ref. sursă rămâne pe",
  "Source:":
    "Sursă:",
  "Source: discussions #66613, #66616.":
    "Sursă: discuțiile #66613, #66616.",
  "Source: discussions #68360, #68365, #68438, #68563.":
    "Sursă: discuțiile #68360, #68365, #68438, #68563.",
  "Source: discussions #68361, #68795.":
    "Sursă: discuțiile #68361, #68795.",
  "Specifications":
    "Specificații",
  "Specs":
    "Specif.",
  "Speed":
    "Viteză",
  "Stand-alone 2-axis OnStep controller designed for a small aluminium project box. Runs on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast — pick teensy40 on the Compile tab). Works with most StepStick drivers (DRV8825 / A4988 / LV8729), plus TMC2130 and TMC5160. Defaults below assume DRV8825 step-sticks; override AXIS_DRIVER_MODEL for TMC. Onboard WeMos D1 Mini header for WiFi.":
    "Controler OnStep autonom cu 2 axe, conceput pentru o cutie mică din aluminiu. Rulează pe Teensy 3.2 (moderat de rapid) sau Teensy 4.0 (foarte rapid — alegeți teensy40 în fila Compilare). Funcționează cu majoritatea driverelor StepStick (DRV8825 / A4988 / LV8729), plus TMC2130 și TMC5160. Valorile implicite de mai jos presupun module DRV8825; modificați AXIS_DRIVER_MODEL pentru TMC. Conector cu pini WeMos D1 Mini integrat pentru WiFi.",
  "Standard NTC 100kΩ glass-bead thermistors (beta 3950). The onboard 4.7kΩ series resistor and the NTC form a voltage divider read by the ESP32 ADC.":
    "Termistoare NTC standard de 100kΩ cu perlă de sticlă (beta 3950). Rezistorul serie integrat de 4,7kΩ și NTC-ul formează un divizor de tensiune citit de ADC-ul ESP32.",
  "Standard config: -10°C to +85°C. For sub-freezing, add THERMISTOR_RPARALLEL 10000 (10kΩ) to extend down to -20°C.":
    "Configurație standard: -10°C până la +85°C. Pentru temperaturi sub zero, adăugați THERMISTOR_RPARALLEL 10000 (10kΩ) pentru a extinde până la -20°C.",
  "Standard mechanical microswitches (e.g. Omron D2F, D2MV) provide reliable homing. Normally-open (NO) to GND is recommended for failsafe operation.":
    "Microîntrerupătoarele mecanice standard (ex. Omron D2F, D2MV) asigură o revenire fiabilă în poziția de origine (home). Se recomandă contact normal deschis (NO) la GND pentru funcționare sigură la defectare.",
  "Stars":
    "Stele",
  "Start with buzzer enabled":
    "Pornire cu buzzer activat",
  "Start with tracking enabled":
    "Pornire cu urmărire activată",
  "Startup baud used to talk to OnStep":
    "Viteza (baud) de pornire folosită pentru comunicarea cu OnStep",
  "Startup state — OFF, or 0–255 for a fixed PWM level":
    "Stare la pornire — OFF sau 0–255 pentru un nivel PWM fix",
  "Startup trust mode":
    "Mod de încredere la pornire",
  "Static IP (optional)":
    "IP static (opțional)",
  "Static IP — only used when STA_DHCP_ENABLED = false":
    "IP static — folosit doar când STA_DHCP_ENABLED = false",
  "Static gateway — only used when STA_DHCP_ENABLED = false":
    "Gateway static — folosit doar când STA_DHCP_ENABLED = false",
  "Static subnet mask — only used when STA_DHCP_ENABLED = false":
    "Mască de subrețea statică — folosită doar când STA_DHCP_ENABLED = false",
  "Station Mode (SWS joins your existing WiFi)":
    "Mod Station (SWS se conectează la rețeaua WiFi existentă)",
  "Station mode (the board joins your existing WiFi)":
    "Mod Station (placa se conectează la rețeaua WiFi existentă)",
  "Status":
    "Stare",
  "Status & Misc":
    "Stare & diverse",
  "Status LED":
    "LED de stare",
  "Status LED on controller":
    "LED de stare pe controler",
  "Status LED, buzzer, reticle, intervalometer":
    "LED de stare, buzzer, reticul, intervalometru",
  "Status/fault detection":
    "Detectare stare/defect",
  "Step Wave Form (for limit check)":
    "Formă de undă a pașilor (pentru verificarea limitei)",
  "Step pulse waveform. Use SQUARE on long wiring or Teensy 4.x; PULSE squeezes more rate out of slower MCUs.":
    "Forma de undă a impulsului de pas. Folosiți SQUARE la cablaje lungi sau pe Teensy 4.x; PULSE scoate o frecvență mai mare de la MCU-urile mai lente.",
  "Stepper Motor Overheating — UART Current Fix":
    "Supraîncălzirea motoarelor pas cu pas — corecție de curent UART",
  "Stepper Motors & Drivers":
    "Motoare pas cu pas & drivere",
  "Stepper motor steps":
    "Pași motor pas cu pas",
  "Stepper motors run very hot (overheating)":
    "Motoarele pas cu pas se încălzesc foarte tare (supraîncălzire)",
  "Steps (AP mode):":
    "Pași (modul AP):",
  "Steps per degree (use Calculator)":
    "Pași pe grad (folosiți Calculatorul)",
  "Steps per micrometer":
    "Pași pe micrometru",
  "Steps/degree defaults (7680) are for the":
    "Valorile implicite de pași/grad (7680) sunt pentru clasa",
  "Steps/° for Axis1":
    "Pași/° pentru Axis1",
  "Steps/° for Axis1 (Axis2 too) — a placeholder, you MUST set this for your gearing (Calculator tab)":
    "Pași/° pentru Axis1 (și Axis2) — valoare provizorie, TREBUIE să o setați pentru angrenajul dumneavoastră (fila Calculator)",
  "Stick with 12V unless you have a specific reason for 24V.":
    "Rămâneți la 12V dacă nu aveți un motiv anume pentru 24V.",
  "Stock drivers are":
    "Driverele de origine sunt",
  "Stock value. OFF = limits off until an unpark goto or sync; ON = armed at startup":
    "Valoare implicită. OFF = limite inactive până la un GOTO de ieșire din parcare sau o sincronizare; ON = active de la pornire",
  "Strip everything: only":
    "Eliminați tot: doar",
  "Sub-zero mod:":
    "Modificare pentru sub zero:",
  "Subnet mask":
    "Mască de subrețea",
  "Supports both rotator (field orientation) and Alt-Az de-rotation. Steps per degree is typically much lower than mount axes.":
    "Suportă atât rotatorul (orientarea câmpului), cât și de-rotația Alt-Az. Pașii pe grad sunt de obicei mult mai puțini decât la axele monturii.",
  "Switched low-side output, not a logic pin":
    "Ieșire comutată pe partea de masă, nu un pin logic",
  "Sync can change pier side (GEM)":
    "Sincronizarea poate schimba partea pilonului (GEM)",
  "TB - TB — Thermistor input 2":
    "TB - TB — Intrare termistor 2",
  "TB NTC nominal resistance (10000 for a 10k NTC)":
    "Rezistența nominală a NTC-ului TB (10000 pentru un NTC de 10k)",
  "TB beta coefficient (datasheet value)":
    "Coeficientul beta al TB (valoare din fișa tehnică)",
  "TB feedback for Dew Heater 2":
    "Reacție TB pentru încălzitorul anti-rouă 2",
  "TE - TE — Thermistor input 1 / PEC":
    "TE - TE — Intrare termistor 1 / PEC",
  "TE feedback for Dew Heater 1":
    "Reacție TE pentru încălzitorul anti-rouă 1",
  "TMC driver":
    "Driver TMC",
  "TMC driver microstep mode for tracking":
    "Mod de micropași al driverului TMC pentru urmărire",
  "TMC1 Ra/Azm - Axis1 (Ra/Azm) stepper driver — TMC2209 UART":
    "TMC1 Ra/Azm - Driver pas cu pas Axis1 (Ra/Azm) — TMC2209 UART",
  "TMC2 DEC - Axis2 (DEC/Alt) stepper driver — TMC2209 UART":
    "TMC2 DEC - Driver pas cu pas Axis2 (DEC/Alt) — TMC2209 UART",
  "TMC2100 — standalone only (spreadCycle, max 16x)":
    "TMC2100 — doar autonom (spreadCycle, max. 16x)",
  "TMC2130S — standalone TMC2130 (step/dir, no SPI)":
    "TMC2130S — TMC2130 autonom (step/dir, fără SPI)",
  "TMC2208 (UART) ⚠ legacy — no stall detect":
    "TMC2208 (UART) ⚠ vechi — fără detectare a blocării",
  "TMC2208S — standalone TMC2208 (step/dir, no UART)":
    "TMC2208S — TMC2208 autonom (step/dir, fără UART)",
  "TMC2209 (UART) — recommended":
    "TMC2209 (UART) — recomandat",
  "TMC2209S — standalone TMC2209 (step/dir, no UART)":
    "TMC2209S — TMC2209 autonom (step/dir, fără UART)",
  "TMC2225 \"Dual V2\" modules strapped standalone":
    "module TMC2225 „Dual V2” configurate în mod autonom",
  "TMC2225 (UART) ⚠ legacy — no stall detect":
    "TMC2225 (UART) ⚠ vechi — fără detectare a blocării",
  "TMC2225S — standalone TMC2225 (Terrans V5 Pro stock)":
    "TMC2225S — TMC2225 autonom (standard pe Terrans V5 Pro)",
  "TMC2226 (UART) — SMD equiv. of TMC2209":
    "TMC2226 (UART) — echivalent SMD al TMC2209",
  "TMC2226S — standalone TMC2226 (step/dir, no UART)":
    "TMC2226S — TMC2226 autonom (step/dir, fără UART)",
  "TMC3 Rot/Foc2 - Axis3 rotator / Axis5 focuser2 — TMC2209 UART":
    "TMC3 Rot/Foc2 - Rotator Axis3 / focuser2 Axis5 — TMC2209 UART",
  "TRS jack":
    "Mufă TRS",
  "Tap":
    "Apăsați scurt",
  "Target MCU":
    "MCU țintă",
  "Teensy 3.2 / 4.0 / 4.1 flash":
    "Programare firmware (flash) Teensy 3.2 / 4.0 / 4.1",
  "Teensy 4.1. Pinmap is wired for 4× TMC2209 UART step drivers (Serial8, 460800 baud). All axes use TMC2209.":
    "Teensy 4.1. Pinmap-ul este cablat pentru 4× drivere de pas TMC2209 UART (Serial8, 460800 baud). Toate axele folosesc TMC2209.",
  "Teensy 4.x step waveform":
    "Formă de undă a pașilor Teensy 4.x",
  "Teensy Loader doesn't see my .hex":
    "Teensy Loader nu vede fișierul meu .hex",
  "Temp, humidity, pressure for dew point":
    "Temperatură, umiditate, presiune pentru punctul de rouă",
  "Terrans Industry V5 Pro (ESP32) — ⚠ UNDER TEST / EN TEST":
    "Terrans Industry V5 Pro (ESP32) — ⚠ ÎN TESTARE",
  "Thanks to Chad for the original gearbox design 🙏":
    "Mulțumiri lui Chad pentru designul original al reductorului 🙏",
  "That's a lot of setup just to try the firmware once. This site replaces every step with a click.":
    "Este multă configurare doar pentru a încerca firmware-ul o dată. Acest site înlocuiește fiecare pas cu un clic.",
  "That's config, not firmware. Toggle":
    "Este o problemă de configurare, nu de firmware. Comutați",
  "That's the source of truth — the Plugins.config.h block is the actual file the workflow used to build your firmware, copied straight out of your downloaded artifact.":
    "Aceasta este sursa de adevăr — blocul Plugins.config.h este fișierul real folosit de workflow pentru a compila firmware-ul dumneavoastră, copiat direct din artefactul descărcat.",
  "The \"Source ref\" field resolves against the right upstream repo (":
    "Câmpul „Referință sursă” se rezolvă în raport cu depozitul upstream corect (",
  "The BME280 provides ambient temperature, humidity and barometric pressure over I2C. OnStepX uses it for dew-point calculation and weather display on the SWS web interface. Connect to the E4's dedicated I2C header.":
    "BME280 furnizează temperatura ambientală, umiditatea și presiunea barometrică prin I2C. OnStepX îl folosește pentru calculul punctului de rouă și afișarea meteo în interfața web SWS. Conectați-l la conectorul cu pini I2C dedicat al plăcii E4.",
  "The Celestron Dew Heater Ring thermistor is 10kΩ, not 100kΩ — set":
    "Termistorul inelului încălzitor anti-rouă Celestron are 10kΩ, nu 100kΩ — setați",
  "The Cloudflare Worker (the \"bridge\")":
    "Cloudflare Worker („puntea”)",
  "The Compile & Flash tab's MCU target list changes: SHC supports ESP32 / Teensy 4.0 / Teensy 3.2; OnStepX adds Teensy 4.1, STM32 BlackPill F411, and STM32F407 / BTT SKR PRO.":
    "Lista de MCU-uri țintă din fila Compilare și programare se schimbă: SHC suportă ESP32 / Teensy 4.0 / Teensy 3.2; OnStepX adaugă Teensy 4.1, STM32 BlackPill F411 și STM32F407 / BTT SKR PRO.",
  "The Config.h you've generated will be sent to a GitHub Actions runner that clones the latest":
    "Config.h generat de dumneavoastră va fi trimis unui runner GitHub Actions care clonează cea mai recentă versiune a",
  "The E4 Config.h default enables WIFI_ACCESS_POINT mode — the board creates its own WiFi network for direct connection in the field, no router required.":
    "Config.h implicit pentru E4 activează modul WIFI_ACCESS_POINT — placa își creează propria rețea WiFi pentru conectare directă pe teren, fără router.",
  "The E4 already switches H1/H2 with onboard power MOSFETs. There is no IRLZ44N to source or wire; the strap lands straight on the terminal.":
    "E4 comută deja H1/H2 cu MOSFET-uri de putere integrate. Nu există niciun IRLZ44N de procurat sau de cablat; banda încălzitoare se conectează direct la bornă.",
  "The E4 dew-heater outputs are designed for 12V; 24V also raises driver heat.":
    "Ieșirile pentru încălzitorul anti-rouă ale plăcii E4 sunt proiectate pentru 12V; 24V crește și încălzirea driverelor.",
  "The E4 exposes two analog inputs — TE (GPIO36) and TB (GPIO39) — so you can run two independent temperature feeds (e.g. focuser on TE, dew strap on TB). Both sit on the ESP32 ADC1, which matters: ADC2 cannot be read while WiFi is active, and the E4 runs WiFi by default. Because TE/TB are ADC1, they keep working with WiFi on.":
    "E4 oferă două intrări analogice — TE (GPIO36) și TB (GPIO39) — astfel încât puteți folosi două surse de temperatură independente (de ex. focuser pe TE, banda anti-rouă pe TB). Ambele se află pe ADC1 al ESP32, ceea ce contează: ADC2 nu poate fi citit cât timp WiFi-ul este activ, iar E4 rulează WiFi în mod implicit. Deoarece TE/TB sunt pe ADC1, ele continuă să funcționeze cu WiFi-ul pornit.",
  "The E4 has a 4.7kΩ series resistor to 3.3V on each input. THERMISTORn_RSERIES must be 4700 or every reading is offset. If you change that resistor, update the directive to match.":
    "E4 are un rezistor serie de 4,7kΩ către 3,3V pe fiecare intrare. THERMISTORn_RSERIES trebuie să fie 4700, altfel fiecare citire este decalată. Dacă schimbați acel rezistor, actualizați directiva în consecință.",
  "The E4 has two dedicated heater outputs — HEAT_E0 / H1 (GPIO2) and HEAT_BED / H2 (GPIO4) — carried over from its 3D-printer origins. Each is a switched 12–24V power terminal driven by an onboard power MOSFET (the board's \"BED+Heater\" stage is rated ~15A total), so a dew-heater strap connects directly to the 2-pin screw terminal — no external MOSFET, gate resistor, or pull-down is needed. GPIO2/GPIO4 only drive the MOSFET gates. Controlled via the FEATURE system as DEW_HEATER type.":
    "E4 are două ieșiri dedicate pentru încălzitoare — HEAT_E0 / H1 (GPIO2) și HEAT_BED / H2 (GPIO4) — moștenite din originile sale de imprimantă 3D. Fiecare este o bornă de putere comutată de 12–24V, comandată de un MOSFET de putere integrat (etajul „BED+Heater” al plăcii este dimensionat pentru ~15A în total), astfel încât o bandă încălzitoare anti-rouă se conectează direct la borna cu șurub cu 2 pini — nu este nevoie de MOSFET extern, rezistor de grilă sau rezistor pull-down. GPIO2/GPIO4 comandă doar grilele MOSFET-urilor. Controlat prin sistemul FEATURE, ca tip DEW_HEATER.",
  "The E4 has two thermistor inputs (TE and TB) with built-in 4.7kΩ pull-up resistors and 10µF filter caps. Used for focuser temperature compensation, dew-heater control or ambient monitoring (3.3V → 4.7kΩ → GPIO → NTC → GND).":
    "E4 are două intrări pentru termistor (TE și TB) cu rezistoare pull-up integrate de 4,7kΩ și condensatoare de filtrare de 10µF. Folosite pentru compensarea termică a focuserului, controlul încălzitorului anti-rouă sau monitorizarea ambientală (3,3V → 4,7kΩ → GPIO → NTC → GND).",
  "The E4 shares one 12–24V input across the motors and both heaters. Fuse the main supply appropriately so a shorted strap blows the fuse, not the board.":
    "E4 folosește o singură intrare de 12–24V pentru motoare și ambele încălzitoare. Protejați alimentarea principală cu o siguranță adecvată, astfel încât o bandă scurtcircuitată să ardă siguranța, nu placa.",
  "The E4 ships set up for Marlin. Remove the two jumper caps that bridge the I2C and TMC UART headers (":
    "E4 este livrată configurată pentru Marlin. Scoateți cele două jumpere care leagă conectorii cu pini I2C și TMC UART (",
  "The E4's H1/H2 (HEAT_E0/HEAT_BED) outputs already have onboard power MOSFETs. No IRLZ44N, gate resistor, or pull-down to buy.":
    "Ieșirile H1/H2 (HEAT_E0/HEAT_BED) ale plăcii E4 au deja MOSFET-uri de putere integrate. Nu trebuie cumpărat niciun IRLZ44N, rezistor de grilă sau pull-down.",
  "The E4's own 2.4GHz WiFi interferes with the steppers, and one ESP32 shares motion + web server + radio, so position-page updates briefly starve the motion task.":
    "WiFi-ul propriu de 2,4 GHz al plăcii E4 interferează cu motoarele pas cu pas, iar un singur ESP32 împarte mișcarea + serverul web + radioul, astfel încât actualizările paginii de poziție privează pentru scurt timp sarcina de mișcare de resurse.",
  "The ESP32 ADC is not perfectly linear (0–3.3V → 0–4095). OnStepX applies the Steinhart-Hart equation internally.":
    "ADC-ul ESP32 nu este perfect liniar (0–3,3V → 0–4095). OnStepX aplică intern ecuația Steinhart-Hart.",
  "The ESP32 I2C pins are 3.3V; feeding 5V logic eventually destroys the inputs and can kill the board.":
    "Pinii I2C ai ESP32 funcționează la 3,3V; alimentarea cu logică de 5V distruge în timp intrările și poate distruge placa.",
  "The ESP8266 is a separate flash, and you do not have to do it.":
    "ESP8266 se programează separat și nu este obligatoriu să o faceți.",
  "The FYSETC E4 is an ESP32-based 3D-printer controller repurposed for telescope control with OnStepX. It has 4× TMC2209 UART stepper drivers, built-in WiFi/BT, dew-heater outputs, thermistor inputs and I2C — all from a single 12–24V supply.":
    "FYSETC E4 este un controler de imprimantă 3D bazat pe ESP32, reutilizat pentru controlul telescopului cu OnStepX. Are 4× drivere de motoare pas cu pas TMC2209 în mod UART, WiFi/BT integrat, ieșiri pentru încălzitor anti-rouă, intrări pentru termistor și I2C — totul de la o singură sursă de 12–24V.",
  "The GitHub Actions log.":
    "Jurnalul GitHub Actions.",
  "The HTML control panel you open in a browser.":
    "Panoul de control HTML pe care îl deschideți în browser.",
  "The I2C bus is not communicating at all. On the E4 this is nearly always wiring, power or pull-ups rather than Config.h — the only I2C settings the firmware has are WEATHER and TIME_LOCATION_SOURCE; SDA/SCL come from the pinmap (GPIO21/22) and cannot be set wrongly.":
    "Magistrala I2C nu comunică deloc. Pe E4, cauza este aproape întotdeauna cablajul, alimentarea sau rezistoarele pull-up, nu Config.h — singurele setări I2C din firmware sunt WEATHER și TIME_LOCATION_SOURCE; SDA/SCL provin din pinmap (GPIO21/22) și nu pot fi setate greșit.",
  "The I2C bus is taken by the GPS":
    "Magistrala I2C este ocupată de GPS",
  "The I2C header only has":
    "Conectorul cu pini I2C are doar",
  "The OneWire bus allows multiple DS18B20 temperature sensors on a single wire. Up to 8 devices supported.":
    "Magistrala OneWire permite conectarea mai multor senzori de temperatură DS18B20 pe un singur fir. Sunt suportate până la 8 dispozitive.",
  "The Output tab shows the Config.h for the currently-selected firmware.":
    "Fila Ieșire afișează Config.h pentru firmware-ul selectat în prezent.",
  "The SHC needs to talk to your OnStep/OnStepX mount controller. Pick whichever cabling matches your hardware.":
    "SHC trebuie să comunice cu controlerul monturii OnStep/OnStepX. Alegeți cablajul care corespunde hardware-ului dumneavoastră.",
  "The TE connector has a built-in 4.7k pull-up — correct for open-collector sensors.":
    "Conectorul TE are un pull-up integrat de 4,7k — corect pentru senzorii cu colector deschis.",
  "The TMC UART is not reaching the drivers, so the Config.h currents never arrive. The E4's TMC2209s have their VREF pin unconnected, so without UART the current is uncontrolled.":
    "UART-ul TMC nu ajunge la drivere, așa că curenții din Config.h nu sunt aplicați niciodată. Driverele TMC2209 ale plăcii E4 au pinul VREF neconectat, deci fără UART curentul nu este controlat.",
  "The Teensy isn't in HalfKay bootloader mode yet. Leave the browser dialog open and press the white program button on the Teensy — Chrome polls for new devices and it'll appear. This applies to 3.2, 4.0, 4.1, and MaxPCB4. If the picker still won't show it after the button press, the USB cable may be charge-only (try another).":
    "Teensy nu este încă în modul bootloader HalfKay. Lăsați deschisă fereastra de dialog a browserului și apăsați butonul alb de programare de pe Teensy — Chrome caută periodic dispozitive noi și acesta va apărea. Acest lucru se aplică pentru 3.2, 4.0, 4.1 și MaxPCB4. Dacă selectorul tot nu îl afișează după apăsarea butonului, cablul USB poate fi doar pentru încărcare (încercați altul).",
  "The Z-MIN connector is opto-isolated — not usable":
    "Conectorul Z-MIN este optoizolat — inutilizabil",
  "The actual 2.4 GHz WiFi + Bluetooth hardware.":
    "Hardware-ul propriu-zis WiFi 2,4 GHz + Bluetooth.",
  "The big toggle at the top of the page picks which firmware you're building:":
    "Comutatorul mare din partea de sus a paginii alege firmware-ul pe care îl compilați:",
  "The board is being partly powered through the USB 5V line; under load that rail sags and a motor misbehaves.":
    "Placa este alimentată parțial prin linia de 5V a USB-ului; sub sarcină, această tensiune scade și un motor funcționează defectuos.",
  "The browser flasher":
    "Programatorul din browser",
  "The bundling happens on a fresh ephemeral GitHub-hosted runner that's torn down the moment the workflow finishes. Nothing is committed back to a repo — not to the build-service repo, not to OnStepX, not to anywhere. The only persistent output is the firmware artifact, and (with the workflow change shipped alongside this help section) the":
    "Împachetarea are loc pe un runner efemer nou, găzduit de GitHub, care este distrus imediat ce workflow-ul se termină. Nimic nu este trimis înapoi (commit) într-un depozit — nici în depozitul build-service, nici în OnStepX, nicăieri. Singurul rezultat persistent este artefactul firmware-ului și (odată cu modificarea workflow-ului livrată împreună cu această secțiune de ajutor) fișierul",
  "The camera body MUST be set to BULB. OnStep controls exposure duration via :CAn# (n = seconds).":
    "Corpul camerei TREBUIE setat pe BULB. OnStep controlează durata expunerii prin :CAn# (n = secunde).",
  "The command channel":
    "Canalul de comenzi",
  "The compile log on this page prints":
    "Jurnalul de compilare de pe această pagină afișează",
  "The compile log on this page.":
    "Jurnalul de compilare de pe această pagină.",
  "The compiled firmware":
    "Firmware-ul compilat",
  "The configurator (this page)":
    "Configuratorul (această pagină)",
  "The configurator is broken / giving weird output":
    "Configuratorul nu funcționează / produce rezultate ciudate",
  "The configurator itself sends no analytics, no telemetry, no trackers. Nothing leaves your browser until you click Compile.":
    "Configuratorul în sine nu trimite statistici, telemetrie sau trackere. Nimic nu părăsește browserul dumneavoastră până când nu faceți clic pe Compilare.",
  "The configurator tabs change — you see Calculator/Axis/Mount in OnStepX mode, or Hand Controller / Communication / Sensors in SHC mode.":
    "Filele configuratorului se schimbă — vedeți Calculator/Axă/Montură în modul OnStepX sau Telecomandă (hand controller) / Comunicație / Senzori în modul SHC.",
  "The default Config.h sets":
    "Config.h implicit setează",
  "The downloaded firmware zip.":
    "Arhiva zip a firmware-ului descărcat.",
  "The firmware artifact couldn't be downloaded. Reload the page, re-compile, and watch for a":
    "Artefactul firmware-ului nu a putut fi descărcat. Reîncărcați pagina, recompilați și urmăriți apariția unei linii",
  "The little":
    "Micile",
  "The network you join from your phone/PC.":
    "Rețeaua la care vă conectați de pe telefon/PC.",
  "The onboard 10µF cap gives steady ambient readings (~50ms). Keep it for dew/ambient sensing; remove it only when a focuser needs fast thermal response.":
    "Condensatorul integrat de 10µF oferă citiri ambientale stabile (~50ms). Păstrați-l pentru măsurarea anti-rouă/ambientală; scoateți-l doar când un focuser are nevoie de un răspuns termic rapid.",
  "The onboard filter cap works with the 4.7kΩ series resistor to slow the input (roughly 50ms with a 10µF part). That is harmless for ambient and dew sensing. Only if a focuser needs fast thermal response would you lift the cap next to that specific TE/TB input — meter it first, and note this is a different part from the one beside X-MIN.":
    "Condensatorul de filtrare integrat lucrează împreună cu rezistorul serie de 4,7kΩ pentru a încetini intrarea (aproximativ 50ms cu o componentă de 10µF). Acest lucru este inofensiv pentru măsurarea ambientală și anti-rouă. Doar dacă un focuser are nevoie de un răspuns termic rapid ar trebui să scoateți condensatorul de lângă acea intrare TE/TB — măsurați-l mai întâi și rețineți că este o componentă diferită de cea de lângă X-MIN.",
  "The pin map is stock":
    "Pinmap-ul este fișierul standard",
  "The pinmap sets":
    "Pinmap-ul setează",
  "The preflight checklist":
    "Lista de verificare prealabilă",
  "The radio (ESP32)":
    "Radioul (ESP32)",
  "The repo":
    "Depozitul",
  "The rotator (Axis3) controls a camera rotator or field de-rotator for Alt-Az mounts. Shares STEP/DIR pins with Axis5 (focuser 2).":
    "Rotatorul (Axis3) controlează un rotator de cameră sau un derotator de câmp pentru monturile Alt-Az. Folosește aceiași pini STEP/DIR ca Axis5 (focuser 2).",
  "The settings you actually have to change":
    "Setările pe care chiar trebuie să le modificați",
  "The simpler alternative: before flashing, click":
    "Alternativa mai simplă: înainte de programare, faceți clic pe",
  "The site owner hasn't deployed the Cloudflare Worker, or":
    "Proprietarul site-ului nu a implementat Cloudflare Worker sau",
  "The terminal outputs your full input voltage. Run a 12V strap on a 12V supply. If the board runs at 24V, use 24V-rated tape or cap the duty via FEATUREn_VALUE_LIMIT — 24V into 12V tape is ~4× the rated power.":
    "Borna furnizează întreaga tensiune de intrare. Folosiți o bandă de 12V cu o sursă de 12V. Dacă placa funcționează la 24V, folosiți o bandă pentru 24V sau limitați factorul de umplere prin FEATUREn_VALUE_LIMIT — 24V pe o bandă de 12V înseamnă ~4× puterea nominală.",
  "The three firmwares run on":
    "Cele trei firmware-uri rulează pe",
  "The two channels behave differently.":
    "Cele două canale se comportă diferit.",
  "The web page":
    "Pagina web",
  "The website plugin is the simplest and lightest (one ESP32 doing everything). Use the full SmartWebServer when you want its richer UI and can accept the extra load on the shared ESP32.":
    "Plugin-ul website este cel mai simplu și mai ușor (un singur ESP32 face totul). Folosiți SmartWebServer complet atunci când doriți interfața sa mai bogată și puteți accepta încărcarea suplimentară a ESP32-ului partajat.",
  "The workflow clones":
    "Workflow-ul clonează",
  "The workflow input is visible in the public Actions log. Leave those fields at":
    "Intrarea workflow-ului este vizibilă în jurnalul public Actions. Lăsați aceste câmpuri pe",
  "Thermistor":
    "Termistor",
  "Thermistor (FEATURE2 / focuser temp)":
    "Termistor (FEATURE2 / temperatură focuser)",
  "Thermistor (FEATURE2)":
    "Termistor (FEATURE2)",
  "Thermistor / Hall":
    "Termistor / Hall",
  "Thermistor Configuration — NTC 3950 100kΩ":
    "Configurarea termistorului — NTC 3950 100kΩ",
  "Thermistor Implementation":
    "Implementarea termistorului",
  "Thermistor — NTC thermistor — focuser / dew temp":
    "Termistor — termistor NTC — temperatură focuser / anti-rouă",
  "Thermistors":
    "Termistoare",
  "These map the computed demand onto PWM duty;":
    "Acestea transformă cererea calculată în factor de umplere PWM;",
  "This board profile was derived from source,":
    "Acest profil de placă a fost dedus din codul sursă,",
  "This is bootloader noise before OnStepX initialises, not a bug.":
    "Acesta este zgomot al bootloaderului înainte de inițializarea OnStepX, nu o eroare.",
  "This is the part beginners trip over most, because three different things all get called \"the WiFi\". The FYSETC E4 is built around an":
    "Aceasta este partea la care începătorii se împiedică cel mai des, deoarece trei lucruri diferite sunt numite toate „WiFi-ul”. FYSETC E4 este construită în jurul unui",
  "This profile rebuilds only the ESP32 (OnStepX) half, which is all the newer OnStepX features need. The factory SmartWebServer on the ESP8266 keeps working for status and slewing.":
    "Acest profil recompilează doar jumătatea ESP32 (OnStepX), care este tot ce au nevoie funcțiile mai noi ale OnStepX. SmartWebServer-ul din fabrică de pe ESP8266 continuă să funcționeze pentru stare și deplasări rapide.",
  "This section applies to OnStepX mode only.":
    "Această secțiune se aplică doar modului OnStepX.",
  "Those controls ride on the :GXA / :SXA command set, which SmartWebServer only draws when OnStepX reports version 10.26 or newer. An older SWS renders the rest of the page normally and simply does nothing when you press \"Enable Advanced Configuration\", so it reads as a partial failure rather than a version gap. Build a current SmartWebServer here (mode SWS, board ESP8266, SERIAL_BAUD_DEFAULT 9600 to match SERIAL_B_BAUD_DEFAULT above) and flash it with the board switch in the ESP8266 position (right). Terrans' web firmware is stock SmartWebServer plus a config file, so nothing board-specific is lost — but reflashing it resets the WiFi settings, so have the AP password to hand.":
    "Aceste controale se bazează pe setul de comenzi :GXA / :SXA, pe care SmartWebServer le afișează doar când OnStepX raportează versiunea 10.26 sau mai nouă. Un SWS mai vechi afișează restul paginii normal și pur și simplu nu face nimic când apăsați „Enable Advanced Configuration”, astfel încât pare o defecțiune parțială, nu o diferență de versiune. Compilați aici un SmartWebServer actual (modul SWS, placa ESP8266, SERIAL_BAUD_DEFAULT 9600 pentru a corespunde cu SERIAL_B_BAUD_DEFAULT de mai sus) și programați-l cu comutatorul plăcii în poziția ESP8266 (dreapta). Firmware-ul web Terrans este un SmartWebServer standard plus un fișier de configurare, deci nu se pierde nimic specific plăcii — dar reprogramarea resetează setările WiFi, așa că țineți la îndemână parola AP-ului.",
  "Three layers that are easy to confuse. Knowing which one you are dealing with tells you what to flash and where to connect.":
    "Trei niveluri ușor de confundat. Știind cu care aveți de-a face, veți ști ce să programați și unde să vă conectați.",
  "Ticks per degree":
    "Impulsuri pe grad",
  "Time & Location":
    "Oră și locație",
  "Time entry / display format":
    "Format de introducere / afișare a orei",
  "Tip":
    "Vârf (Tip)",
  "To add a board that's not listed, the build service needs a new PlatformIO env — edit":
    "Pentru a adăuga o placă care nu este în listă, serviciul de compilare are nevoie de un nou env PlatformIO — editați",
  "Total Steps / Revolution":
    "Total pași / rotație",
  "Total steps for a full 360°":
    "Total pași pentru o rotație completă de 360°",
  "Tracking & Slewing":
    "Urmărire și deplasare rapidă",
  "Tracking compensation":
    "Compensarea urmăririi",
  "Tracking decay override":
    "Suprascrierea modului decay la urmărire",
  "Tracking decay override (default: STEALTHCHOP)":
    "Suprascrierea modului decay la urmărire (implicit: STEALTHCHOP)",
  "Tracking resolution (arc-sec) Axis1":
    "Rezoluția de urmărire (arcsec) Axis1",
  "Tracking resolution (arc-sec) Axis2":
    "Rezoluția de urmărire (arcsec) Axis2",
  "Troubleshooting":
    "Depanare",
  "Troubleshooting & Known Fixes":
    "Depanare și remedieri cunoscute",
  "Try a different USB cable — a surprising number are charge-only.":
    "Încercați alt cablu USB — un număr surprinzător de cabluri sunt doar pentru încărcare.",
  "Tune with the SWS \"Span\" and \"Zero\" sliders.":
    "Reglați cu glisoarele „Span” și „Zero” din SWS.",
  "Twinkle animation":
    "Animație de sclipire",
  "Twist the motor cables and shield the enclosure (foil + tape); prefer the external-antenna board in a metal box.":
    "Răsuciți cablurile motoarelor și ecranați carcasa (folie + bandă adezivă); preferați placa cu antenă externă într-o cutie metalică.",
  "Twist the motor cables tightly":
    "Răsuciți strâns cablurile motoarelor",
  "Two Channels, ADC Notes & Calibration":
    "Două canale, note despre ADC și calibrare",
  "Two iterations on the OnStep wiki:":
    "Două iterații pe wiki-ul OnStep:",
  "Two regulated zones:":
    "Două zone reglate:",
  "Two ways to reach the board. AP mode is the default and the simplest in the field; Station mode is best at home where you want internet on the same device.":
    "Două moduri de a accesa placa. Modul AP este cel implicit și cel mai simplu pe teren; modul Station este cel mai potrivit acasă, unde doriți internet pe același dispozitiv.",
  "Type":
    "Tip",
  "Typical beta":
    "Beta tipic",
  "Typical for a direct-drive rotator":
    "Tipic pentru un rotator cu acționare directă",
  "Typical: 200 (1.8°) or 400 (0.9°)":
    "Tipic: 200 (1,8°) sau 400 (0,9°)",
  "UI language & default locale units":
    "Limba interfeței și unitățile implicite",
  "UI language as declared in upstream SHC src/locales. Strings_xx.h shipped upstream for en/us, cn, de and ro (Romanian); es/fr are declared but have no Strings file yet.":
    "Limba interfeței, așa cum este declarată în src/locales din SHC upstream. Fișierele Strings_xx.h sunt livrate upstream pentru en/us, cn, de și ro (română); es/fr sunt declarate, dar nu au încă un fișier Strings.",
  "USB - Firmware upload & serial monitor":
    "USB - Încărcare firmware și monitor serial",
  "USB / PC — Host computer / firmware upload":
    "USB / PC — Calculator gazdă / încărcare firmware",
  "USB JTAG/serial debug unit":
    "Unitate de depanare USB JTAG/serială",
  "USB Power Control":
    "Controlul alimentării USB",
  "USB bridge":
    "Punte USB",
  "USB serial baud rate":
    "Viteză serială USB (baud)",
  "USB serial of E4 board":
    "Portul serial USB al plăcii E4",
  "Under the hood: the Teensy WebHID flasher":
    "În culise: programatorul WebHID pentru Teensy",
  "Unipolar Hall":
    "Hall unipolar",
  "Unipolar Hall switch":
    "Comutator Hall unipolar",
  "Unplug USB, replug.":
    "Deconectați USB-ul, reconectați-l.",
  "Until you click Reset to Defaults or clear site data":
    "Până când faceți clic pe Resetare la valorile implicite sau ștergeți datele site-ului",
  "Unusual steps/deg":
    "Pași/grad neobișnuiți",
  "Unzip it; you should see":
    "Dezarhivați-l; ar trebui să vedeți",
  "Update to ESP32 board package v2.0.17 (recommended for E4).":
    "Actualizați la pachetul de plăci ESP32 v2.0.17 (recomandat pentru E4).",
  "Update to OnStepX v10.20a+ (TMC2209 GCONF register fix).":
    "Actualizați la OnStepX v10.20a+ (corecție a registrului GCONF al TMC2209).",
  "Update to a recent OnStepX — fork-mount slewing was reworked in newer releases.":
    "Actualizați la un OnStepX recent — deplasarea rapidă pentru monturile cu furcă a fost refăcută în versiunile mai noi.",
  "Upload ESP8266 firmware via Serial B":
    "Încărcați firmware-ul ESP8266 prin Serial B",
  "Upload-fix cap":
    "Condensator pentru corectarea încărcării",
  "Use":
    "Folosiți",
  "Use \"Go Home\" from ASIAIR to recover, then retry. Source: discussions #68119, #68264.":
    "Folosiți „Go Home” din ASIAIR pentru recuperare, apoi reîncercați. Sursă: discuțiile #68119, #68264.",
  "Use Calculator tab!":
    "Folosiți fila Calculator!",
  "Use Calculator tab! steps/degree":
    "Folosiți fila Calculator! pași/grad",
  "Use DS3231 RTC as time source":
    "Folosiți ceasul RTC DS3231 ca sursă de timp",
  "Use ESP32 board package v2.0.11 or v2.0.17 — v2.0.15+ can break SWS connectivity.":
    "Folosiți pachetul de plăci ESP32 v2.0.11 sau v2.0.17 — v2.0.15+ poate strica conectivitatea SWS.",
  "Use GPS for date/time and location":
    "Folosiți GPS-ul pentru dată/oră și locație",
  "Use Normally-Open (NO) connecting to GND when activated. Configure AXISn_SENSE_HOME LOW. NC is possible but less failsafe (broken wire = false trigger).":
    "Folosiți un contact normal deschis (NO) care se conectează la GND când este activat. Configurați AXISn_SENSE_HOME LOW. NC este posibil, dar mai puțin sigur (fir rupt = declanșare falsă).",
  "Use TE thermistor for focuser temp":
    "Folosiți termistorul TE pentru temperatura focuserului",
  "Use a COARSE goto microstep: AXISn_DRIVER_MICROSTEPS_GOTO 4 (or 8), with 32 for tracking. Fine goto microstepping (e.g. 4→ stalls) is a common cause.":
    "Folosiți un micropas GOTO GROSIER: AXISn_DRIVER_MICROSTEPS_GOTO 4 (sau 8), cu 32 pentru urmărire. Un micropas GOTO fin (de ex. 4→ blocări) este o cauză frecventă.",
  "Use a cut-down USB-2 data cable with the 5V wire LEFT DISCONNECTED, so the board is only powered by the 12V supply and is truly off when 12V is removed.":
    "Folosiți un cablu de date USB-2 modificat, cu firul de 5V LĂSAT DECONECTAT, astfel încât placa să fie alimentată doar de sursa de 12V și să fie cu adevărat oprită când 12V este întrerupt.",
  "Use home switches for alignment":
    "Folosiți limitatoarele de poziție de origine (home) pentru aliniere",
  "Use only when you need the values below to actually take effect — SWS reads them from NV after the first flash and ignores any later changes here unless NV is wiped. Workflow: set":
    "Folosiți doar când aveți nevoie ca valorile de mai jos să intre efectiv în vigoare — SWS le citește din NV după prima programare și ignoră orice modificări ulterioare făcute aici, cu excepția cazului în care NV este șters. Procedură: setați",
  "Use the \"9600-NO DTR\" serial speed option.":
    "Folosiți opțiunea de viteză serială „9600-NO DTR”.",
  "Use the 3.3V variant of the module, or drop the 5V rail: a plain red LED in series gives ~3.1–3.4V (it drops ~1.6–1.9V) and the":
    "Folosiți varianta de 3,3V a modulului sau coborâți tensiunea de 5V: un simplu LED roșu în serie oferă ~3,1–3,4V (are o cădere de ~1,6–1,9V), iar",
  "Use the 3.3V variant of the module, or drop the 5V rail: a plain red LED in series gives ~3.1–3.4V (it drops ~1.6–1.9V) and the <1mA draw is fine.":
    "Folosiți varianta de 3,3V a modulului sau coborâți tensiunea de 5V: un simplu LED roșu în serie oferă ~3,1–3,4V (are o cădere de ~1,6–1,9V), iar consumul de <1mA nu este o problemă.",
  "Use the bare DS1820 keyword + DEBUG VERBOSE to LIST serial numbers; then replace it with the serial of the sensor you want":
    "Folosiți doar cuvântul cheie DS1820 + DEBUG VERBOSE pentru a LISTA numerele de serie; apoi înlocuiți-l cu numărul de serie al senzorului dorit",
  "Use the browser-based":
    "Folosiți instrumentul din browser",
  "Use the external-antenna E4 variant, or run the board in WIFI_STATION mode and improve your router/AP side (directional antenna or a WiFi extender).":
    "Folosiți varianta E4 cu antenă externă sau rulați placa în modul WIFI_STATION și îmbunătățiți partea de router/AP (antenă direcțională sau un repetor WiFi).",
  "User Guide":
    "Ghid de utilizare",
  "Uses shared LIMIT_SENSE":
    "Folosește LIMIT_SENSE partajat",
  "Value":
    "Valoare",
  "Values were not committed to non-volatile storage before power-off, or the NV is stale/corrupt.":
    "Valorile nu au fost salvate în memoria nevolatilă înainte de oprire sau NV este învechită/coruptă.",
  "Verify 12–24V DC on Vin/GND and that the power LED lights.":
    "Verificați prezența a 12–24V DC pe Vin/GND și că LED-ul de alimentare se aprinde.",
  "Verify N/S/E/W behave correctly from the web UI first, then re-test in ASIAIR. Source: discussion #68576.":
    "Verificați mai întâi că N/S/E/V funcționează corect din interfața web, apoi testați din nou în ASIAIR. Sursă: discuția #68576.",
  "Verify axis limits are correct for your mount.":
    "Verificați că limitele axelor sunt corecte pentru montura dumneavoastră.",
  "Verify meridian-limit and MFLIP settings; for GEM, set MFLIP_SKIP_HOME appropriately.":
    "Verificați setările pentru limita de meridian și MFLIP; pentru GEM, setați MFLIP_SKIP_HOME corespunzător.",
  "Verify the COM port appears in Device Manager.":
    "Verificați că portul COM apare în Manager dispozitive.",
  "Verify the module first:":
    "Verificați mai întâi modulul:",
  "Vertical pixels":
    "Pixeli verticali",
  "Very common adjustments":
    "Ajustări foarte frecvente",
  "View original →":
    "Vedeți originalul →",
  "Vin / GND screw terminal":
    "borna cu șurub Vin / GND",
  "Vin GND - Vin / GND tap — 3×2 pin header":
    "Vin GND - Derivație Vin / GND — conector cu pini 3×2",
  "Voltage":
    "Tensiune",
  "WIFI_STATION (ESP32 only)":
    "WIFI_STATION (doar ESP32)",
  "Wait for \"Flash complete\", then tap":
    "Așteptați „Flash complete”, apoi apăsați",
  "Weather sensor":
    "Senzor meteo",
  "Weather sensor type":
    "Tipul senzorului meteo",
  "Web UI":
    "Interfață web",
  "Web UI & WiFi bridge firmware":
    "Firmware pentru interfața web și puntea WiFi",
  "Web UI access":
    "Acces la interfața web",
  "Web UI appearance":
    "Aspectul interfeței web",
  "Web UI login (SWS only)":
    "Autentificare în interfața web (doar SWS)",
  "Web server won't start — 3 flashes from WiFi module":
    "Serverul web nu pornește — 3 clipiri ale modulului WiFi",
  "WebHID is Chromium-only. On Firefox/Safari the flasher silently falls back to saving":
    "WebHID funcționează doar în Chromium. În Firefox/Safari, programatorul revine automat la salvarea fișierului",
  "What each tab does":
    "Ce face fiecare filă",
  "What it is":
    "Ce este",
  "What this profile does":
    "Ce face acest profil",
  "What this site does:":
    "Ce face acest site:",
  "Whatever you type in the":
    "Orice introduceți în câmpul",
  "When any limit triggers: all gotos abort, tracking stops, the mount freezes. Recover by clearing the condition (move off the switch) and then unparking or syncing — with LIMIT_STRICT OFF, an unpark goto or a sync re-arms normal operation.":
    "Când se declanșează orice limită: toate GOTO-urile sunt anulate, urmărirea se oprește, montura se blochează. Recuperați eliminând cauza (îndepărtați montura de pe limitator) și apoi scoateți din parcare sau sincronizați — cu LIMIT_STRICT OFF, un GOTO de ieșire din parcare sau o sincronizare repune în funcțiune operarea normală.",
  "When the browser picker appears, press the white program button on the Teensy. It'll show up as \"Teensy\" in the dialog — pick it and click Connect.":
    "Când apare selectorul browserului, apăsați butonul alb de programare de pe Teensy. Acesta va apărea ca „Teensy” în fereastra de dialog — selectați-l și faceți clic pe Connect.",
  "When the browser picker appears, press the white program button — \"Teensy\" shows up in the dialog, pick it and click Connect.":
    "Când apare selectorul browserului, apăsați butonul alb de programare — „Teensy” apare în fereastra de dialog; selectați-l și faceți clic pe Connect.",
  "When you click Compile, the log streams these lines:":
    "Când faceți clic pe Compilare, jurnalul afișează aceste linii:",
  "When you flip the mode switch:":
    "Când comutați selectorul de mod:",
  "Where OnStepX stores runtime settings. Leave on NV_DEFAULT unless your board has a documented external EEPROM/FRAM (e.g. MaxESP4i ⇒ NV_MB85RC64).":
    "Locul unde OnStepX stochează setările de rulare. Lăsați NV_DEFAULT, cu excepția cazului în care placa dumneavoastră are o memorie EEPROM/FRAM externă documentată (de ex. MaxESP4i ⇒ NV_MB85RC64).",
  "Where do I configure network / WiFi / Ethernet?":
    "Unde configurez rețeaua / WiFi / Ethernet?",
  "Where it goes":
    "Unde se conectează",
  "Which UART to use for debug prints (only meaningful when DEBUG ≠ OFF)":
    "Ce UART se folosește pentru mesajele de depanare (relevant doar când DEBUG ≠ OFF)",
  "Which boards can I build for?":
    "Pentru ce plăci pot compila?",
  "Which to choose on the E4?":
    "Ce să alegeți pe E4?",
  "Which upstream version does this build?":
    "Ce versiune upstream compilează?",
  "Why did the form change after I flashed?":
    "De ce s-a schimbat formularul după programare?",
  "Why it's needed: GitHub Pages is static-only (it serves files, it can't call protected APIs). A tiny serverless function is the simplest way to bridge a static site to an authenticated API without standing up a server you have to maintain.":
    "De ce este necesar: GitHub Pages este doar static (servește fișiere, nu poate apela API-uri protejate). O mică funcție serverless este cea mai simplă cale de a conecta un site static la un API autentificat, fără a monta un server pe care să trebuiască să-l întrețineți.",
  "Why the I2C header:":
    "De ce conectorul cu pini I2C:",
  "Why you don't see":
    "De ce nu vedeți",
  "WiFi & Bluetooth setup (E4 / OnStepX)":
    "Configurare WiFi și Bluetooth (E4 / OnStepX)",
  "WiFi & Connectivity":
    "WiFi și conectivitate",
  "WiFi drops connection or lags after a few minutes":
    "WiFi-ul pierde conexiunea sau devine lent după câteva minute",
  "WiFi network (SSID)":
    "Rețea WiFi (SSID)",
  "WiFi network name in AP mode":
    "Numele rețelei WiFi în modul AP",
  "WiFi password":
    "Parolă WiFi",
  "WiFi with the password above → 3) browse to":
    "WiFi cu parola de mai sus → 3) accesați în browser",
  "WiFi, the web page & how it all connects":
    "WiFi-ul, pagina web și cum se conectează totul",
  "Will build:":
    "Se va compila:",
  "Win10/11 may need CH341SER-3.7. Use 9600-NO DTR in ASCOM.":
    "Win10/11 poate necesita CH341SER-3.7. Folosiți 9600-NO DTR în ASCOM.",
  "Win11 CH340 USB Fix — Driver & DTR":
    "Remediere USB CH340 pe Win11 — driver și DTR",
  "Windows CH340 USB-serial driver issues (common on Win11).":
    "Probleme cu driverul USB-serial CH340 pe Windows (frecvente pe Win11).",
  "Windows driver note:":
    "Notă despre driverul Windows:",
  "Wipes all stored network credentials on boot.":
    "Șterge toate datele de autentificare de rețea stocate la pornire.",
  "Wire GPIO15 → M-TX":
    "Conectați GPIO15 → M-TX",
  "Wire from the Z-min pin of ZDIAG-EN to M-TX on the TMC UART header":
    "Fir de la pinul Z-min al ZDIAG-EN la M-TX pe conectorul cu pini TMC UART",
  "Wire the ESP's serial TX/RX (cross-over: TX→RX, RX→TX) to a free serial port on the controller, plus a common GND; make SERIAL_BAUD match on both sides.":
    "Conectați TX/RX serial al ESP (încrucișat: TX→RX, RX→TX) la un port serial liber al controlerului, plus un GND comun; setați aceeași valoare SERIAL_BAUD pe ambele părți.",
  "Wire the Focuser1 stepper coils.":
    "Conectați bobinele motorului pas cu pas Focuser1.",
  "Wire the rotator OR the Focuser2 stepper coils.":
    "Conectați bobinele motorului pas cu pas al rotatorului SAU ale Focuser2.",
  "Wired link to the mount controller":
    "Legătură prin cablu către controlerul monturii",
  "Wireless link to OnStep (ESP32 builds only)":
    "Legătură wireless către OnStep (doar pentru compilări ESP32)",
  "Wiring":
    "Cablaj",
  "With BME280 active, OnStepX calculates dew point from ambient temp + RH and adjusts PWM to keep optics ≥2°C above dew point. Configure the target delta in the SWS Dew tab.":
    "Cu BME280 activ, OnStepX calculează punctul de rouă din temperatura ambientală + umiditatea relativă și ajustează PWM-ul pentru a menține optica la ≥2°C peste punctul de rouă. Configurați diferența țintă în fila Dew din SWS.",
  "With USB serial on, the E4 pinmap runs the TMC UART transmit-only: SERIAL_TMC_RX is a dummy pin (GPIO0), so driver status cannot be read back. The drivers are soldered on — there is no module brand or seating to check.":
    "Cu portul serial USB activ, pinmap-ul E4 folosește UART-ul TMC doar pentru transmisie: SERIAL_TMC_RX este un pin fictiv (GPIO0), astfel încât starea driverelor nu poate fi citită. Driverele sunt lipite pe placă — nu există marcă de modul sau montare de verificat.",
  "With a temperature source assigned (FEATUREn_TEMP) plus a BME280 for dew point, OnStepX runs each heater as a closed loop — it raises PWM as the optic temperature approaches the dew point and eases off once it is safely above. Without a temperature source the channel is just a manual 0–255 PWM output you set in the SWS/app.":
    "Cu o sursă de temperatură atribuită (FEATUREn_TEMP) plus un BME280 pentru punctul de rouă, OnStepX controlează fiecare încălzitor în buclă închisă — crește PWM-ul pe măsură ce temperatura opticii se apropie de punctul de rouă și îl reduce odată ce este suficient de deasupra. Fără o sursă de temperatură, canalul este doar o ieșire PWM manuală 0–255 pe care o setați în SWS/aplicație.",
  "Without Website, an ESP32 OnStepX build is ~600KB. With Website it's ~1.0–1.1MB. The":
    "Fără Website, o compilare OnStepX pentru ESP32 are ~600KB. Cu Website are ~1,0–1,1MB. Indicatorul",
  "Without a DS3231 (or GPS) you must re-enter date & time every session, which is tedious via the SHC. A DS3231 fixes this; or combine both with":
    "Fără un DS3231 (sau GPS) trebuie să reintroduceți data și ora la fiecare sesiune, ceea ce este anevoios prin SHC. Un DS3231 rezolvă acest lucru; sau combinați-le pe amândouă cu",
  "Working E4 GPS settings and tips shared by users.":
    "Setări GPS pentru E4 care funcționează și sfaturi împărtășite de utilizatori.",
  "Works if your device supports mDNS (Bonjour).":
    "Funcționează dacă dispozitivul dumneavoastră suportă mDNS (Bonjour).",
  "Worm Gear Teeth (or gear ratio)":
    "Numărul de dinți ai roții melcate (sau raportul de transmisie)",
  "Worm gear teeth (from Axis1)":
    "Numărul de dinți ai roții melcate (din Axis1)",
  "Worm wheel teeth count":
    "Numărul de dinți ai roții melcate",
  "Write your generated":
    "Scrie fișierul generat",
  "Wrong chip: many boards sold as \"BME280\" are actually BMP280 (no humidity, different chip ID). Use BMP280 / BMP280_0x76 instead.":
    "Cip greșit: multe plăci vândute ca „BME280” sunt de fapt BMP280 (fără umiditate, ID de cip diferit). Folosiți în schimb BMP280 / BMP280_0x76.",
  "X-MIN (GPIO34) acts as an emergency stop for BOTH axes":
    "X-MIN (GPIO34) acționează ca oprire de urgență pentru AMBELE axe",
  "X-MIN - X-MIN — Home Axis1 / Limit / GPS":
    "X-MIN - X-MIN — Poziție de origine Axis1 / Limită / GPS",
  "X-MIN alternative only — which cap to remove:":
    "Doar pentru alternativa X-MIN — ce condensator trebuie scos:",
  "Y-MIN - Y-MIN — Home Axis2":
    "Y-MIN - Y-MIN — Poziție de origine Axis2",
  "Y-MIN does NOT stop motion":
    "Y-MIN NU oprește mișcarea",
  "Yes":
    "Da",
  "Yes (pin present)":
    "Da (pin prezent)",
  "Yes — each compile request base64-encodes your Config.h and sends it as a GitHub Actions workflow input. Public-repo Actions logs are visible to anyone, so treat Config.h as public. See":
    "Da — fiecare cerere de compilare codifică Config.h în base64 și îl trimite ca intrare a workflow-ului GitHub Actions. Jurnalele Actions ale depozitelor publice sunt vizibile oricui, așa că tratați Config.h ca fiind public. Consultați",
  "Yes. Everything is open-source. Fork":
    "Da. Totul este open-source. Faceți un fork la",
  "You can":
    "Puteți",
  "You can generate Config.h offline — this page works fully offline once loaded. Compiling needs the online service. For a fully offline toolchain, install":
    "Puteți genera Config.h offline — această pagină funcționează complet offline odată încărcată. Compilarea necesită serviciul online. Pentru un lanț de instrumente complet offline, instalați",
  "You can type any of:":
    "Puteți introduce oricare dintre:",
  "You edited the form after compiling. The firmware on disk is stale. Click":
    "Ați modificat formularul după compilare. Firmware-ul de pe disc este învechit. Apăsați",
  "You picked a branch/tag that doesn't exist. The \"Fetch upstream OnStepX\" step will fail at":
    "Ați ales o ramură/un tag care nu există. Pasul „Fetch upstream OnStepX” va eșua la",
  "You see each issue listed with a red ✗ (error) or yellow ⚠ (warning) icon. The Compile button stays disabled until you either resolve the issues or tick the":
    "Fiecare problemă este listată cu o pictogramă roșie ✗ (eroare) sau galbenă ⚠ (avertisment). Butonul Compilare rămâne dezactivat până când fie rezolvați problemele, fie bifați opțiunea",
  "Your Config.h (= E4 branch's Config.h, if you clicked":
    "Config.h-ul dumneavoastră (= Config.h-ul ramurii E4, dacă ați apăsat",
  "Your Config.h (base64-encoded)":
    "Config.h-ul dumneavoastră (codificat în base64)",
  "Your IP address (for rate limiting only)":
    "Adresa dumneavoastră IP (doar pentru limitarea ratei de cereri)",
  "Your WiFi name (SSID)":
    "Numele rețelei WiFi (SSID)",
  "Your WiFi password":
    "Parola rețelei WiFi",
  "Your browser does not support WebUSB — STM32 flashing needs Chrome/Edge/Opera.":
    "Browserul dumneavoastră nu acceptă WebUSB — programarea (flash) STM32 necesită Chrome/Edge/Opera.",
  "Your browser's localStorage":
    "localStorage-ul browserului dumneavoastră",
  "Your chosen ONE_WIRE_PIN":
    "ONE_WIRE_PIN ales de dumneavoastră",
  "Your config has changed since this firmware was built. Recompile before flashing, or the board will run stale firmware.":
    "Configurația s-a schimbat de când a fost compilat acest firmware. Recompilați înainte de programare (flash), altfel placa va rula un firmware învechit.",
  "Your form state is saved automatically to your browser's local storage every time you change a field, so a refresh won't lose your work. The":
    "Starea formularului este salvată automat în stocarea locală a browserului la fiecare modificare a unui câmp, așa că o reîncărcare a paginii nu vă pierde munca. Butonul",
  "Your form values are preserved":
    "Valorile formularului sunt păstrate",
  "Z-MIN - Z-MIN — opto-isolated probe input (GPIO15 = TMC UART TX)":
    "Z-MIN - Z-MIN — intrare de sondă cu optocuplor (GPIO15 = TMC UART TX)",
  "Z-MIN can't be a serial/GPS input":
    "Z-MIN nu poate fi o intrare serială/GPS",
  "Z-min pin of ZDIAG-EN (GPIO15) → M-TX on the TMC UART header. Required for driver current control.":
    "Pinul Z-min al ZDIAG-EN (GPIO15) → M-TX pe conectorul cu pini TMC UART. Necesar pentru controlul curentului driverelor.",
  "Z-min pin of the ZDIAG-EN header (GPIO15)":
    "pinul Z-min al conectorului cu pini ZDIAG-EN (GPIO15)",
  "ZDIAG-EN (Z-min pin)":
    "ZDIAG-EN (pinul Z-min)",
  "Zero at the scale of a hobby project. GitHub Pages, GitHub Actions (on public repos), and Cloudflare Workers all have free tiers that comfortably fit hundreds of builds per day.":
    "Zero la scara unui proiect de hobby. GitHub Pages, GitHub Actions (pe depozite publice) și Cloudflare Workers au toate planuri gratuite care acoperă confortabil sute de compilări pe zi.",
  "a 12V-rated heater on 24V dissipates ~4× its rated power (P=V²/R) and can scorch optics or wiring. Either use 24V-rated heaters, cap the duty with":
    "un încălzitor de 12V alimentat la 24V disipă ~4× puterea nominală (P=V²/R) și poate arde optica sau cablajul. Fie folosiți încălzitoare de 24V, fie limitați factorul de umplere cu",
  "a build, browse it directly at":
    "o compilare, răsfoiți-l direct la",
  "a free GPIO":
    "un GPIO liber",
  "accepts":
    "acceptă",
  "accepts only OFF, DS3231, SD3031, TEENSY, GPS or NTP, and GPS means a serial connection — so the header is simply used as two serial pins.":
    "acceptă doar OFF, DS3231, SD3031, TEENSY, GPS sau NTP, iar GPS înseamnă o conexiune serială — așa că conectorul cu pini este folosit pur și simplu ca doi pini seriali.",
  "access point (or joins your WiFi) and bridges commands to the mount.":
    "punct de acces (sau se conectează la rețeaua dumneavoastră WiFi) și transmite comenzile către montură.",
  "add":
    "adăugați",
  "add any hardware for WiFi. You only decide between the lightweight":
    "adăugați niciun hardware pentru WiFi. Alegeți doar între varianta ușoară",
  "after":
    "după",
  "after the build queues. Open it, expand the step":
    "după ce compilarea intră în coadă. Deschideți-l, extindeți pasul",
  "again, or click Cancel to flash the outdated firmware anyway (rarely what you want).":
    "din nou, sau apăsați Anulare pentru a programa (flash) oricum firmware-ul învechit (rareori ceea ce doriți).",
  "ambient temp vs dew point only":
    "doar pe baza temperaturii ambiante vs. punctul de rouă",
  "and":
    "și",
  "and after success:":
    "și după succes:",
  "and appends the V5 Pro pin map directly to Config.h. OnStepX supports this:":
    "și adaugă harta de pini a V5 Pro direct în Config.h. OnStepX acceptă acest lucru:",
  "and show the Teensy Loader instructions. HalfKay is in ROM and cannot be overwritten, so a partial flash never bricks the board — worst case you click Flash again and retry.":
    "și afișăm instrucțiunile Teensy Loader. HalfKay este în ROM și nu poate fi suprascris, deci o programare parțială nu blochează niciodată placa — în cel mai rău caz apăsați din nou Flash și reîncercați.",
  "and solder a 10kΩ resistor between the TE/TB pin and GND — extends usable range from -10°C down to -20°C.":
    "și lipiți un rezistor de 10kΩ între pinul TE/TB și GND — extinde domeniul utilizabil de la -10°C până la -20°C.",
  "and that GPS TX goes to the pin set in":
    "și că TX-ul GPS-ului merge la pinul setat în",
  "and the Worker's":
    "și, în Worker, lista",
  "and the configurator auto-ticks the Website checkbox. Click Compile and the workflow ends up with":
    "și configuratorul bifează automat caseta Website. Apăsați Compilare și workflow-ul ajunge la",
  "and/or line the enclosure with foil + tape to cut EMI; the external-antenna board in a metal box is the most robust.":
    "și/sau căptușiți carcasa cu folie + bandă pentru a reduce interferențele electromagnetice (EMI); placa cu antenă externă într-o cutie metalică este cea mai robustă.",
  "arcsec or OFF: max diff to sync OnStep → encoder":
    "arcsec sau OFF: diferența maximă pentru sincronizarea OnStep → encoder",
  "arcsec: min diff to sync encoder → OnStep":
    "arcsec: diferența minimă pentru sincronizarea encoder → OnStep",
  "assign a temperature source to each — e.g. focus/BME280 on one input and the dew-ring thermistor on Dew Heat 1, with dew point taken from the BME280.":
    "atribuiți o sursă de temperatură fiecăreia — de ex. focalizare/BME280 pe o intrare și termistorul inelului anti-rouă pe Dew Heat 1, cu punctul de rouă preluat de la BME280.",
  "assigned by your router (DHCP)":
    "atribuită de routerul dumneavoastră (DHCP)",
  "at OFF until Focuser 1 works, then add the second axis.":
    "pe OFF până când Focuser 1 funcționează, apoi adăugați a doua axă.",
  "at the branch/tag/commit you typed in the":
    "la ramura/tag-ul/commit-ul introdus în câmpul",
  "auto-reset — their configs are small enough that overwriting would be annoying rather than helpful.":
    "se resetează automat — configurațiile lor sunt suficient de mici încât suprascrierea ar fi mai degrabă enervantă decât utilă.",
  "auto-ticks it).":
    "o bifează automat).",
  "automatically. Leave all unchecked for a stock build.":
    "automat. Lăsați totul debifat pentru o compilare standard.",
  "before":
    "înainte de",
  "before clicking Compile.":
    "înainte de a apăsa Compilare.",
  "below":
    "mai jos",
  "below for the FRAM variant. Teensy 3.2 / 4.1 boards flash one-click via WebHID; ESP32 boards (MaxESP3/4, FYSETC_E4, Terrans V5 Pro, CNC3) flash via WebSerial; BTT_SKR_PRO flashes via WebUSB DFU (BOOT0 jumper + reset). CNC3 is deprecated — see the OnStep wiki for alternatives.":
    "mai jos pentru varianta FRAM. Plăcile Teensy 3.2 / 4.1 se programează (flash) cu un clic prin WebHID; plăcile ESP32 (MaxESP3/4, FYSETC_E4, Terrans V5 Pro, CNC3) prin WebSerial; BTT_SKR_PRO prin WebUSB DFU (jumper BOOT0 + reset). CNC3 este depreciată — consultați wiki-ul OnStep pentru alternative.",
  "bipolar latch":
    "latch bipolar",
  "blade":
    "cu lamă",
  "blade on the supply":
    "cu lamă, pe alimentare",
  "board.":
    "placă.",
  "both BME280 and DS3231 share the bus at different addresses. The bus needs one pair of pull-ups (SDA→3.3V, SCL→3.3V, 4.7kΩ) — nearly every GY-BME280 and ZS-042 breakout already has them, so leave them alone. Only add your own if a scan finds no device and you have confirmed your modules carry none.":
    "atât BME280, cât și DS3231 partajează magistrala la adrese diferite. Magistrala are nevoie de o pereche de rezistori pull-up (SDA→3,3V, SCL→3,3V, 4,7kΩ) — aproape orice modul GY-BME280 și ZS-042 îi are deja, așa că lăsați-i neatinși. Adăugați-vă propriii rezistori doar dacă o scanare nu găsește niciun dispozitiv și ați confirmat că modulele dumneavoastră nu au.",
  "box, the build service does this for you:":
    ", serviciul de compilare face asta în locul dumneavoastră:",
  "branch deliberately doesn't ship them. When you tick a plugin checkbox in the Compile tab's":
    "ramura nu le include în mod intenționat. Când bifați caseta unui plugin în caseta din fila Compilare",
  "branch name":
    "nume de ramură",
  "builds it into a single ESP32 firmware with mount control + web UI.":
    "îl compilează într-un singur firmware ESP32 cu controlul monturii + interfață web.",
  "bundled into this OnStepX firmware":
    "incluse în acest firmware OnStepX",
  "button at the bottom. Skim the output; the":
    "din partea de jos. Parcurgeți rezultatul; liniile",
  "button in the header clears every tab's saved state and reloads.":
    "din antet șterge starea salvată a fiecărei file și reîncarcă pagina.",
  "button in the header clears it.":
    "din antet o șterge.",
  "button right under the dropdown. For MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3, and FYSETC_E4, that fills in the driver model, microsteps, run current, and mount type with known-good values — so you only need to touch the steps/deg (from the Calculator) and the values specific to your scope.":
    "chiar sub lista derulantă. Pentru MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3 și FYSETC_E4, acesta completează modelul de driver, micropașii, curentul de funcționare și tipul de montură cu valori verificate — astfel încât trebuie să modificați doar pașii/grad (din Calculator) și valorile specifice telescopului dumneavoastră.",
  "by":
    "de",
  "by default — switch the Compile-tab MCU to":
    "implicit — comutați MCU-ul din fila Compilare pe",
  "by hjd1964":
    "de hjd1964",
  "calculate it":
    "de calculat",
  "caps. Then fit one wire from the":
    ". Apoi montați un fir de la",
  "centre":
    "cea din mijloc",
  "class: 200 steps × 32 microsteps × 3:1 belt × 144:1 worm ÷ 360.":
    ": 200 de pași × 32 micropași × curea 3:1 × melc 144:1 ÷ 360.",
  "clears it.":
    "o șterge.",
  "click Flash.":
    "apăsați Flash.",
  "commit SHA":
    "SHA de commit",
  "community":
    "comunitate",
  "community forum. Each issue lists the root cause and fixes.":
    "forumul comunității. Fiecare problemă prezintă cauza principală și soluțiile.",
  "compare the reported temperature against a known thermometer at two points (room temp and ice water). If it reads consistently high or low, nudge BETA by ~50 at a time until it matches — RNOM/TNOM anchor the 25°C point, BETA sets the slope of the curve.":
    "comparați temperatura raportată cu un termometru de referință în două puncte (temperatura camerei și apă cu gheață). Dacă citirea este constant prea mare sau prea mică, ajustați BETA cu ~50 pe rând până se potrivește — RNOM/TNOM fixează punctul de 25°C, BETA stabilește panta curbei.",
  "connector with its own GPIO16 (STEP) / GPIO17 (DIR), and":
    "cu propriile GPIO16 (STEP) / GPIO17 (DIR), și",
  "connector, sharing GPIO14/GPIO12 with Axis3 (rotator). The stock E4 Config.h enables both focusers (Axis3 OFF).":
    ", partajând GPIO14/GPIO12 cu Axis3 (rotator). Config.h-ul original al E4 activează ambele focusere (Axis3 pe OFF).",
  "delay between frames (1–3600),":
    "întârzierea dintre cadre (1–3600),",
  "depending on the mode you pick — we never bundle a stale copy.":
    "în funcție de modul ales — nu includem niciodată o copie învechită.",
  "doesn't ship on main, the workflow copies it from":
    "nu este inclus în main, workflow-ul îl copiază din",
  "download":
    "descărca",
  "driver for the DFU device. If the browser can't open the device, install":
    "pentru dispozitivul DFU. Dacă browserul nu poate deschide dispozitivul, instalați",
  "drivers and central":
    "drivere și blocul central de conectori cu pini",
  "dropdown is wired to a matching PlatformIO env on the build side. Today that covers:":
    "din lista derulantă este legat de un env PlatformIO corespunzător pe partea de compilare. Astăzi acestea sunt:",
  "dropdown on the Compile tab. OnStepX builds use":
    "(lista derulantă) din fila Compilare. Compilările OnStepX folosesc",
  "dropped next to it.":
    "plasat lângă el.",
  "e.g. 110 teeth driven":
    "de ex. 110 dinți (roata condusă)",
  "e.g. 30 teeth driving":
    "de ex. 30 de dinți (roata conducătoare)",
  "endpoint; you need a scraper running somewhere.":
    "endpoint; aveți nevoie de un scraper care rulează undeva.",
  "endstops along the top,":
    "limitatoarele de cursă în partea de sus,",
  "exposure length (0–3600),":
    "durata expunerii (0–3600),",
  "field (default: latest":
    "(implicit: cel mai recent",
  "field controls which version of the firmware gets compiled. The default is":
    "controlează ce versiune a firmware-ului este compilată. Valoarea implicită este",
  "field on the Compile & Flash tab — defaults to":
    "din fila Compilare & Flash — implicit",
  "field). If those are missing, your build server is running an older workflow that didn't include them — the firmware is still correctly built, you just have to fall back to method (4) to confirm.":
    "). Dacă acestea lipsesc, serverul de compilare rulează un workflow mai vechi care nu le includea — firmware-ul este totuși compilat corect, trebuie doar să reveniți la metoda (4) pentru confirmare.",
  "fields do nothing). TMC UART models will not compile on this profile.":
    "nu au niciun efect). Modelele TMC UART nu se vor compila cu acest profil.",
  "files plus the plugin's own Config.h.":
    "fișiere, plus Config.h-ul propriu al pluginului.",
  "flashing, where they only live on your board.":
    "programare (flash), unde rămân doar pe placa dumneavoastră.",
  "for":
    "pentru",
  "for ESP32 — same protocol as":
    "pentru ESP32 — același protocol ca",
  "for Focuser 1 and hold":
    "pentru Focuser 1 și lăsați",
  "for STM32 BlackPill — we wrote a small DFU client that speaks the same protocol as":
    "pentru STM32 BlackPill — am scris un mic client DFU care vorbește același protocol ca",
  "for Teensy 3.2 / 4.0 / 4.1 — we speak the HalfKay bootloader protocol directly from the browser (same wire format as":
    "pentru Teensy 3.2 / 4.0 / 4.1 — vorbim protocolul bootloader-ului HalfKay direct din browser (același format ca",
  "for W5x00 shields. The textarea is editable and Compile sends it as-is.":
    "pentru shield-urile W5x00. Zona de text este editabilă, iar Compilare o trimite ca atare.",
  "for exact reproducibility or to try a specific in-progress change":
    "pentru reproductibilitate exactă sau pentru a încerca o anumită modificare în lucru",
  "for latest.":
    "pentru cea mai recentă versiune.",
  "for the PJRC Teensy Loader app.":
    "pentru aplicația PJRC Teensy Loader.",
  "for the hand pendant, or":
    "pentru telecomandă (hand controller), sau",
  "for the mount controller,":
    "pentru controlerul monturii,",
  "for the web/WiFi bridge), and run":
    "pentru puntea web/WiFi) și rulați",
  "for you. Changing it manually to something incompatible fires a preflight warning before you spend a build minute.":
    "automat. Modificarea manuală la o valoare incompatibilă declanșează un avertisment de verificare prealabilă înainte să consumați un minut de compilare.",
  "form values into existing content — imported extras like":
    "valorile formularului în conținutul existent — elementele suplimentare importate, precum",
  "frame count (0–255),":
    "numărul de cadre (0–255),",
  "from OnStepX-Plugins +":
    "din OnStepX-Plugins +",
  "from the E4 branch +":
    "din ramura E4 +",
  "gives us (Chrome/Edge only; no Firefox or Safari support yet).":
    "ne oferă (doar Chrome/Edge; încă fără suport în Firefox sau Safari).",
  "green":
    "verde",
  "guide for exactly one full worm rotation; OnStepX records the error pattern and applies the inverse correction. The buffer persists until power-off unless saved to NV.":
    "ghidați timp de exact o rotație completă a melcului; OnStepX înregistrează tiparul erorii și aplică corecția inversă. Memoria tampon se păstrează până la oprire, dacă nu este salvată în NV.",
  "has":
    "are",
  "header block in the middle, and":
    "în mijloc, și ieșirile de motor",
  "here and set":
    "aici și setați",
  "holds a":
    "conține un",
  "home sensor":
    "senzor de poziție de origine (home)",
  "icons":
    "pictograme",
  "if the GPS works with a test sketch but not OnStepX, it's almost always a baud/pin mismatch — confirm":
    "dacă GPS-ul funcționează cu un sketch de test, dar nu cu OnStepX, este aproape întotdeauna o nepotrivire de baud/pin — verificați",
  "if you have a Teensy 4.0 mounted; MaxSTM3 / MaxSTM3I →":
    "dacă aveți montat un Teensy 4.0; MaxSTM3 / MaxSTM3I →",
  "if you specifically want Howard's E4-branch source (older OnStepX snapshot with the website plugin pre-installed), type":
    "dacă doriți în mod special sursa din ramura E4 a lui Howard (o versiune mai veche a OnStepX cu pluginul website preinstalat), introduceți",
  "in":
    "în",
  "in ALTAZM mode with AXIS3_DRIVER_MODEL enabled, OnStepX automatically enables field de-rotation to keep field orientation constant. Remember Axis3 shares pins with Axis5 — only one active.":
    "în modul ALTAZM cu AXIS3_DRIVER_MODEL activat, OnStepX activează automat derotația câmpului pentru a menține constantă orientarea câmpului. Rețineți că Axis3 partajează pini cu Axis5 — doar una poate fi activă.",
  "in Arduino IDE: Makuna RTC, Adafruit BME280, Adafruit Sensor, TMC2209":
    "în Arduino IDE: Makuna RTC, Adafruit BME280, Adafruit Sensor, TMC2209",
  "in File → Preferences":
    "în File → Preferences",
  "in OnStepX mode,":
    "în modul OnStepX,",
  "in OnStepX —":
    "în OnStepX —",
  "in SHC mode, or":
    "în modul SHC, sau",
  "in SWS mode.":
    "în modul SWS.",
  "in any repo on disk":
    "în niciun depozit de pe disc",
  "in hjd1964/OnStepX…":
    "în hjd1964/OnStepX…",
  "in hjd1964/SmartHandController…":
    "în hjd1964/SmartHandController…",
  "in hjd1964/SmartWebServer…":
    "în hjd1964/SmartWebServer…",
  "in that branch and reuses it in place rather than re-copying.":
    "în acea ramură și îl reutilizează pe loc în loc să îl copieze din nou.",
  "in the Controller section and the Compile & Flash tab's":
    "în secțiunea Controler, iar în fila Compilare & Flash",
  "in the Source ref field below instead of leaving it on":
    "în câmpul Source ref de mai jos, în loc să îl lăsați pe",
  "in the browser prompt.":
    "în fereastra de dialog a browserului.",
  "in the configurator repo.":
    "în depozitul configuratorului.",
  "in the page header.":
    "din antetul paginii.",
  "in the picker.":
    "în selector.",
  "index sensor":
    "senzor de index",
  "indexed from offset 0. Unused gaps are filled with":
    "indexat de la offsetul 0. Golurile neutilizate sunt umplute cu",
  "indicator that appears under the Compile button after a successful build will jump accordingly. If you tick Website and the size barely moves, something's wrong — open the run URL and read the workflow log.":
    "indicator care apare sub butonul Compilare după o compilare reușită va crește corespunzător. Dacă bifați Website și dimensiunea abia se schimbă, ceva nu este în regulă — deschideți URL-ul rulării și citiți jurnalul workflow-ului.",
  "install Arduino IDE or PlatformIO → clone the source → edit Config.h → wait for the toolchain to download → build → flash.":
    "instalați Arduino IDE sau PlatformIO → clonați sursa → editați Config.h → așteptați descărcarea lanțului de instrumente → compilați → programați (flash).",
  "intervalometer":
    "intervalometru",
  "is generated to enable Website in slot 1.":
    "este generat pentru a activa Website în slotul 1.",
  "is not an upstream OnStepX pinmap: picking it emits":
    "nu este un pinmap oficial OnStepX: alegerea lui emite",
  "is present.":
    "este prezent.",
  "is the FEATURE number (so":
    "este numărul FEATURE (deci",
  "is the simplest (single short cable to OnStep's ST4 port). Standard async serial (Serial / Serial1) works if you wire UART. Radio is cleanest for ESP32 builds.":
    "este cea mai simplă (un singur cablu scurt către portul ST4 al OnStep). Serialul asincron standard (Serial / Serial1) funcționează dacă cablați UART-ul. Conexiunea radio este cea mai curată pentru compilările ESP32.",
  "is wired in around it — power supply & regulator, 4 motors, GPS, RTC, BME280, DS18B20, thermistor, PEC Hall, 2 dew heaters, DSLR shutter, reticle, buzzer, power LED, endstops and USB. Click any board connector":
    "este conectat în jurul ei — sursă de alimentare și regulator, 4 motoare, GPS, RTC, BME280, DS18B20, termistor, senzor Hall PEC, 2 încălzitoare anti-rouă, declanșator DSLR, reticul, buzzer, LED de alimentare, limitatoare de cursă și USB. Faceți clic pe orice conector al plăcii",
  "jumper (pins are silkscreened next to the reset button) to hold BOOT0 high.":
    "jumper (pinii sunt marcați prin serigrafie lângă butonul de reset) pentru a menține BOOT0 pe nivel HIGH.",
  "keyword.":
    "(cuvânt cheie).",
  "library loaded from a CDN on first use.":
    "bibliotecă încărcată dintr-un CDN la prima utilizare.",
  "line as shown in its README.":
    "linie, așa cum este indicat în README-ul său.",
  "line in the compile log. Usually means the artifact already expired (24 h retention) or the Worker URL is wrong.":
    "în jurnalul de compilare. De obicei înseamnă că artefactul a expirat deja (păstrare 24 h) sau că URL-ul Worker-ului este greșit.",
  "lines from":
    "din",
  "link that jumps to the relevant help section. Hover to preview, click to pin,":
    "link care duce la secțiunea de ajutor relevantă. Treceți cu mouse-ul pentru previzualizare, faceți clic pentru fixare,",
  "load an existing Config.h":
    "încărca un Config.h existent",
  "mDNS name":
    "Nume mDNS",
  "main OnStepX source + E4's Config.h + Website plugin — the same layout as":
    "sursa principală OnStepX + Config.h-ul E4 + pluginul Website — aceeași structură ca",
  "main, v10.24, or commit SHA":
    "main, v10.24 sau SHA de commit",
  "make sure your wiring and PINMAP selection match the board you're flashing. A mismatched pinmap can drive step/enable pins that are tied to other things and damage stepper drivers, limit switches, or the MCU. When in doubt, flash once with no motors connected, watch the serial output, and only then plug in the steppers.":
    "asigurați-vă că cablajul și selecția PINMAP corespund plăcii pe care o programați. Un pinmap nepotrivit poate comanda pini step/enable legați la alte componente și poate deteriora driverele motoarelor pas cu pas, limitatoarele de cursă sau MCU-ul. Dacă aveți dubii, programați o dată fără motoare conectate, urmăriți ieșirea serială și abia apoi conectați motoarele.",
  "mappings here.":
    "corespondențele de aici.",
  "matches SkySafari defaults.":
    "corespunde valorilor implicite din SkySafari.",
  "measure the 3.3V rail during a slew; if it dips, reduce motor current until brownouts stop — sag also drops the SHC/app connection (\"Lost Connection / Looking for OnStep\") while WiFi itself stays up.":
    "măsurați linia de 3,3V în timpul unei deplasări rapide; dacă scade, reduceți curentul motoarelor până dispar căderile de tensiune — căderea întrerupe și conexiunea SHC/aplicației („Lost Connection / Looking for OnStep”), în timp ce WiFi-ul rămâne activ.",
  "mode (the project selector at the top of the page).":
    "mod (selectorul de proiect din partea de sus a paginii).",
  "motor outputs with":
    "cu termistoarele",
  "motor to":
    "motor la",
  "next to":
    "lângă",
  "next to field names open a one-sentence explanation for that specific setting, plus (for most fields) a":
    "de lângă numele câmpurilor deschid o explicație de o frază pentru acea setare, plus (pentru majoritatea câmpurilor) un",
  "no":
    "nu",
  "no (download .hex)":
    "nu (descărcați .hex)",
  "no DS3231 RTC and no BME280":
    "niciun RTC DS3231 și niciun BME280",
  "no I2C GPS option":
    "nicio opțiune de GPS I2C",
  "no OneWire pin at all":
    "niciun pin OneWire",
  "no divider":
    "nu are nevoie de divizor",
  "no steppers":
    "fără motoare",
  "not":
    "nu",
  "not yet verified by flashing real hardware":
    "încă neverificat prin programarea pe hardware real",
  "of new firmware: that first run initialises NV, and until it has, the hand controller and web UI can show greyed-out controls or an axis that will not stop.":
    "a unui firmware nou: această primă pornire inițializează NV, iar până atunci telecomanda (hand controller) și interfața web pot afișa comenzi dezactivate (gri) sau o axă care nu se oprește.",
  "of this page (Network / Web UI / Encoders & BLE tabs).":
    "al acestei pagini (filele Rețea / Interfață web / Encodere & BLE).",
  "on Windows you may need the":
    "pe Windows s-ar putea să aveți nevoie de driverul",
  "on disk.":
    "de pe disc.",
  "on every change, so a refresh or closed tab doesn't lose your work. The header":
    "la fiecare modificare, așa că o reîncărcare sau o filă închisă nu vă pierde munca. Butonul din antet",
  "on the":
    "pe conectorul",
  "on the Compile & Flash tab from":
    "din fila Compilare & Flash de la",
  "on the Controller tab is":
    "din fila Controler este",
  "on the E4 (it goes through an optocoupler). If you use the X-MIN alternative and X-MIN and Y-MIN are both home sensors, move one":
    "pe E4 (trece printr-un optocuplor). Dacă folosiți alternativa X-MIN și X-MIN și Y-MIN sunt ambii senzori de poziție de origine, mutați un",
  "on the E4 you do":
    "pe E4",
  "on the I2C header, so OneWire rules out I2C devices and a GPS there — the TE/TB thermistor inputs are usually the easier route.":
    "pe conectorul cu pini I2C, deci OneWire exclude dispozitivele I2C și un GPS acolo — intrările de termistor TE/TB sunt de obicei varianta mai simplă.",
  "on the JST-XH MOT connectors (4-wire bipolar steppers)":
    "pe conectorii JST-XH MOT (motoare pas cu pas bipolare cu 4 fire)",
  "on the Output tab to save a copy; re-load it later with":
    "din fila Ieșire pentru a salva o copie; reîncărcați-o mai târziu cu",
  "on the Output tab. The form fields will populate from the file, so you can take a working config from your current firmware and tweak from there.":
    "în fila Ieșire. Câmpurile formularului vor fi completate din fișier, astfel încât puteți porni de la o configurație funcțională a firmware-ului actual și o puteți ajusta.",
  "on the TMC UART header — that is how OnStepX sets the driver currents. Leave the FAN and Z-probe voltage jumpers; put the FAN one on 5V if you use the status LED or buzzer.":
    "pe conectorul cu pini TMC UART — așa setează OnStepX curenții driverelor. Lăsați jumperii de tensiune FAN și Z-probe; puneți-l pe cel FAN pe 5V dacă folosiți LED-ul de stare sau buzzerul.",
  "on the right, the 4":
    "în dreapta, cele 4",
  "once you've picked your":
    "după ce ați ales",
  "one":
    "un",
  "one is the filter capacitor.":
    "este condensatorul de filtrare.",
  "onto the window.":
    "în fereastră.",
  "or":
    "sau",
  "or the relevant upstream issue tracker:":
    "sau sistemul de urmărire a problemelor al proiectului upstream relevant:",
  "out of the box,":
    "din fabrică,",
  "output (MOT-Z) carries":
    "ieșire (MOT-Z) deservește",
  "output-capable GPIO":
    "GPIO capabil de ieșire",
  "over the TMC UART. If the GPIO15 → M-TX wire is missing or loose, the drivers never get those values and the current is uncontrolled — the usual cause of \"motors run scorching hot\". On first power-up, touch-check the motors and confirm that changing IRUN changes holding torque.":
    "prin TMC UART. Dacă firul GPIO15 → M-TX lipsește sau face contact slab, driverele nu primesc niciodată aceste valori și curentul nu este controlat — cauza obișnuită pentru „motoarele se încing foarte tare”. La prima pornire, verificați la atingere temperatura motoarelor și confirmați că modificarea IRUN schimbă cuplul de menținere.",
  "over the upstream's default":
    "peste cel implicit din upstream",
  "override. This is intentional: the checklist is a safety net for beginners, not a straightjacket for power users who know what they're doing.":
    "de forțare. Acest lucru este intenționat: lista de verificare este o plasă de siguranță pentru începători, nu o cămașă de forță pentru utilizatorii avansați care știu ce fac.",
  "pages are skipped to speed things up. The first five blocks get a long 45-second timeout because the chip erase takes a few seconds before the first write is acknowledged; later blocks complete in milliseconds. After the last data block we send one more 1088-byte report with the offset bytes set to":
    "sunt omise pentru a accelera procesul. Primele cinci blocuri primesc un timp de așteptare lung de 45 de secunde, deoarece ștergerea cipului durează câteva secunde înainte ca prima scriere să fie confirmată; blocurile ulterioare se finalizează în milisecunde. După ultimul bloc de date trimitem încă un raport de 1088 de octeți cu octeții de offset setați la",
  "patches":
    "aplică",
  "per mode":
    "pentru fiecare mod",
  "per the OnStep wiki, FYSETC S6 only supports":
    "conform wiki-ului OnStep, FYSETC S6 acceptă doar",
  "per the comment in Config.h itself — temporarily set":
    "conform comentariului din Config.h însuși — setați temporar",
  "peripheral for details, GPIO mapping and wiring guidance.":
    "periferic pentru detalii, maparea GPIO și indicații de cablare.",
  "permanently will erase your settings on every boot.":
    "permanent vă va șterge setările la fiecare pornire.",
  "picked from the env name (2 MB for 4.0, 8 MB for 4.1, 256 KB for 3.2) bounds the write and catches \"wrong firmware for this board\" early.":
    "dedusă din numele env (2 MB pentru 4.0, 8 MB pentru 4.1, 256 KB pentru 3.2) limitează scrierea și detectează din timp „firmware greșit pentru această placă”.",
  "pin of the header block. Their outputs are open-collector: the E4's 10kΩ pull-up to 3.3V is the pull-up, so a bare sensor needs":
    "pin al blocului de conectori cu pini. Ieșirile lor sunt open-collector: rezistorul pull-up de 10kΩ la 3,3V al E4 servește drept pull-up, așa că un senzor simplu",
  "pinmap — the difference is on-PCB wiring, not the firmware constant. Same goes for MaxESP4i: pick":
    "pinmap — diferența este în cablajul de pe PCB, nu în constanta din firmware. La fel și pentru MaxESP4i: alegeți",
  "plugin automatically — you do not have to copy any files by hand when building through this configurator.":
    "plugin automat — nu trebuie să copiați manual niciun fișier când compilați prin acest configurator.",
  "plugin checkbox should be ticked below —":
    "caseta pluginului ar trebui bifată mai jos —",
  "plugin from":
    "plugin din",
  "plus the board's own pin map inline in Config.h (a path OnStepX supports explicitly).":
    "plus harta de pini proprie a plăcii, direct în Config.h (o cale pe care OnStepX o acceptă explicit).",
  "power supply":
    "sursă de alimentare",
  "printed in the compile log. That opens the GitHub Actions page for your build. The \"PlatformIO build\" step contains the compiler error. Common causes:":
    "afișat în jurnalul de compilare. Aceasta deschide pagina GitHub Actions a compilării dumneavoastră. Pasul „PlatformIO build” conține eroarea compilatorului. Cauze frecvente:",
  "put a DS18B20 or NTC directly on the optic/tube for the FEATUREn_TEMP source, and a BME280 for ambient/dew point. OnStepX then heats only enough to keep the glass ~2°C above the measured dew point instead of running full power all night.":
    "montați un DS18B20 sau un NTC direct pe optică/tub pentru sursa FEATUREn_TEMP și un BME280 pentru temperatura ambientală/punctul de rouă. OnStepX încălzește atunci doar cât este necesar pentru a menține sticla la ~2°C peste punctul de rouă măsurat, în loc să funcționeze la putere maximă toată noaptea.",
  "put the GPS on the I2C header (TX → SDA/GPIO21, RX → SCL/GPIO22) with":
    "conectați GPS-ul la conectorul cu pini I2C (TX → SDA/GPIO21, RX → SCL/GPIO22) cu",
  "raw":
    "brut",
  "raw GitHub URL of a Config.h (e.g. https://raw.githubusercontent.com/hjd1964/OnStepX/E4/Config.h)":
    "URL GitHub brut al unui Config.h (de ex. https://raw.githubusercontent.com/hjd1964/OnStepX/E4/Config.h)",
  "reads":
    "indică",
  "red":
    "roșu",
  "report to reboot into the app). You still have to press the white program button to put the Teensy into bootloader mode — HalfKay is only reachable after that. On browsers without WebHID we fall back to downloading":
    "pentru a reporni în aplicație). Trebuie totuși să apăsați butonul alb de programare pentru a trece Teensy în modul bootloader — HalfKay este accesibil doar după aceea. În browserele fără WebHID revenim la descărcarea",
  "request, attach a private GitHub API token (which, critically, your browser":
    "cererea, atașează un token privat de API GitHub (pe care, esențial, browserul dumneavoastră",
  "resolving":
    "se rezolvă",
  "resolving…":
    "se rezolvă…",
  "right below the PINMAP dropdown to autofill driver model, microsteps, and run current for that board.":
    "chiar sub lista derulantă PINMAP pentru a completa automat modelul driverului, micropașii și curentul de funcționare pentru acea placă.",
  "screw terminal and":
    "bornele cu șurub și",
  "see), and tell GitHub Actions to start a build. It also proxies the resulting firmware zip back to you. The Worker doesn't store anything — each request is independent.":
    "să-l vadă) și cere GitHub Actions să pornească o compilare. De asemenea, vă transmite înapoi arhiva zip cu firmware-ul rezultat. Worker-ul nu stochează nimic — fiecare cerere este independentă.",
  "separate ESP":
    "ESP separat",
  "separate MCUs":
    "MCU-uri separate",
  "set":
    "setați",
  "set), then update the PINMAP dropdown and":
    "), apoi actualizați lista derulantă PINMAP și",
  "should change.":
    "ar trebui să se schimbe.",
  "shouldn't":
    "nu ar trebui",
  "so the RTC covers you until the GPS gets a fix.":
    "astfel încât RTC-ul să vă acopere până când GPS-ul obține o poziție (fix).",
  "so they look like erased flash. The":
    "pentru a arăta ca o memorie flash ștearsă. Dimensiunea",
  "source, replaces Config.h with your version, compiles with PlatformIO, and returns the firmware. Builds typically take 1-3 minutes.":
    "sursa, înlocuiește Config.h cu versiunea dumneavoastră, compilează cu PlatformIO și returnează firmware-ul. Compilările durează de obicei 1-3 minute.",
  "start /":
    "pornire /",
  "stated explicitly as 21/22.":
    "declarați explicit ca 21/22.",
  "status":
    "stare",
  "stay put. To start totally fresh, click":
    "rămân neschimbate. Pentru a începe complet de la zero, faceți clic pe",
  "still has the placeholder. For the owner: follow":
    "conține încă valoarea substituentă. Pentru proprietar: urmați",
  "stop, and":
    "oprire și",
  "switch":
    "întrerupător",
  "switch / Hall":
    "întrerupător / Hall",
  "switches to":
    "comută la",
  "tab (rules out Arduino/library issues).":
    "(exclude problemele legate de Arduino/biblioteci).",
  "tab can request the":
    "poate solicita",
  "tab fetches the right source for you.)":
    "descarcă pentru dumneavoastră sursele corecte.)",
  "tab — it compiles online and flashes over USB in your browser. The manual Arduino IDE method is below.":
    "din acest configurator — compilează online și programează firmware-ul prin USB în browserul dumneavoastră. Metoda manuală cu Arduino IDE este descrisă mai jos.",
  "tab. Fill in your mount's worm teeth, motor steps/rev, and gear ratio for each axis — the steps/deg values used by Axis1/Axis2 are calculated from this.":
    ". Completați numărul de dinți ai roții melcate, pașii/rotație ai motorului și raportul de transmisie al monturii dumneavoastră pentru fiecare axă — valorile pași/grad folosite de Axis1/Axis2 sunt calculate pe baza acestora.",
  "tab. Set":
    ". Setați",
  "tabs to turn your choices into a ready-to-use Config.h.":
    "pentru a transforma alegerile dumneavoastră într-un Config.h gata de utilizare.",
  "the":
    "fila",
  "the E4 I2C header provides 5V but the ESP32 pins are 3.3V. Power your modules from 3.3V (or drop the 5V rail — see Troubleshooting), and use 3.3V-rated modules.":
    "conectorul cu pini I2C al E4 furnizează 5V, dar pinii ESP32 funcționează la 3.3V. Alimentați modulele de la 3.3V (sau coborâți linia de 5V — vedeți Depanare) și folosiți module compatibile cu 3.3V.",
  "the E4 brings no spare serial pins out. GPIO16/17 (default Serial2) go only to the onboard MOT E driver, and X-MIN has a 100nF filter capacitor that corrupts 9600-baud data unless it is removed. The I2C header lines have no filter parts, and the ESP32 can put Serial2 on any GPIO. There is":
    "E4 nu scoate în exterior niciun pin serial liber. GPIO16/17 (Serial2 implicit) merg doar la driverul MOT E de pe placă, iar X-MIN are un condensator de filtrare de 100nF care corupe datele la 9600 baud dacă nu este îndepărtat. Liniile conectorului cu pini I2C nu au componente de filtrare, iar ESP32 poate plasa Serial2 pe orice GPIO. Nu există",
  "the OnStep group":
    "grupul OnStep",
  "the OnStepX source requires":
    "sursa OnStepX necesită",
  "the configurator repo":
    "depozitul configuratorului",
  "the firmware — they just can't flash via the browser. If you're on one of those, download the firmware and use":
    "firmware-ul — doar că nu pot programa firmware-ul prin browser. Dacă folosiți unul dintre acestea, descărcați firmware-ul și folosiți",
  "the four TMC2209s are soldered on with their VREF pin unconnected, so motor current is set only by":
    "cele patru TMC2209 sunt lipite cu pinul VREF neconectat, așa că curentul motorului este setat doar prin",
  "the intervalometer is driven through the auxiliary-feature commands, where":
    "intervalometrul este comandat prin comenzile funcțiilor auxiliare, unde",
  "the radio on board: no add-on WiFi module is needed. What you still choose is":
    "radioul integrat pe placă: nu este necesar niciun modul WiFi suplimentar. Ce mai trebuie să alegeți este",
  "the upstream repo that matches the mode you picked —":
    "depozitul upstream care corespunde modului ales —",
  "then":
    "apoi",
  "there are 3 SMD parts next to the X-MIN pins — two are resistors, the":
    "există 3 componente SMD lângă pinii X-MIN — două sunt rezistori, cel",
  "thermistors along the bottom.":
    "de-a lungul marginii de jos.",
  "to":
    "la",
  "to Defaults":
    "la valorile implicite",
  "to GND, power cycle, and release.":
    "la GND, reporniți alimentarea și eliberați.",
  "to THERMISTOR / THERMISTOR2.":
    "la THERMISTOR / THERMISTOR2.",
  "to Z-MIN to free X-MIN for the GPS.":
    "la Z-MIN pentru a elibera X-MIN pentru GPS.",
  "to dismiss.":
    "pentru a închide.",
  "to pin to a released version for reproducibility":
    "pentru a fixa o versiune publicată, în scopul reproductibilității",
  "to read back count, exposure and delay. Or just use SWS → Camera tab → Duration / Delay / Frames.":
    "pentru a citi numărul de cadre, expunerea și întârzierea. Sau folosiți pur și simplu SWS → fila Camera → Duration / Delay / Frames.",
  "to run your firmware.":
    "pentru a rula firmware-ul.",
  "to whatever board you have —":
    "în funcție de placa pe care o aveți —",
  "to whatever you're using (":
    "în funcție de ce folosiți (",
  "to your Downloads folder. Then:":
    "în folderul Descărcări. Apoi:",
  "to ~2dB and use a":
    "la ~2dB și folosiți o",
  "true = SWS broadcasts its own WiFi network (\"ONSTEP\" by default)":
    "true = SWS emite propria rețea WiFi („ONSTEP” implicit)",
  "true = SWS connects to your home/observatory router":
    "true = SWS se conectează la routerul de acasă/din observator",
  "true = let the router assign an IP; false = use the static IP below":
    "true = routerul atribuie o adresă IP; false = se folosește IP-ul static de mai jos",
  "under":
    "sub",
  "unipolar switch":
    "întrerupător unipolar",
  "unless you override it yourself. Add an explicit":
    "decât dacă îl redefiniți dumneavoastră. Adăugați explicit un",
  "use a small neodymium magnet (3×2mm disc) epoxied to the worm wheel. For unipolar (US5881) only the south pole triggers — mark the pole.":
    "folosiți un magnet mic de neodim (disc 3×2mm) lipit cu epoxid pe roata melcată. La senzorul unipolar (US5881) doar polul sud declanșează — marcați polul.",
  "v1.1.7 or newer (build service: 1.1.14)":
    "v1.1.7 sau mai nouă (serviciul de compilare: 1.1.14)",
  "v2.2.2 or newer (build service: 2.2.4)":
    "v2.2.2 sau mai nouă (serviciul de compilare: 2.2.4)",
  "v2.3.5 or newer (this configurator's build service uses 2.4.2)":
    "v2.3.5 sau mai nouă (serviciul de compilare al acestui configurator folosește 2.4.2)",
  "variants; SWS builds use":
    "; compilările SWS folosesc",
  "we save":
    "salvăm",
  "website plugin":
    "pluginul website",
  "which firmware serves the web page":
    "ce firmware servește pagina web",
  "which you then drop into the PJRC Teensy Loader app. Same result, one more step.":
    "pe care apoi îl trageți în aplicația PJRC Teensy Loader. Același rezultat, un pas în plus.",
  "wiring Website to slot 1. After flashing, the ESP32 boots OnStepX, exposes its WiFi (SSID and password live in":
    "care conectează Website la slotul 1. După programare, ESP32 pornește OnStepX, își expune rețeaua WiFi (SSID-ul și parola se află în",
  "with a":
    "cu un",
  "with the three changes Terrans made on this hardware:":
    "cu cele trei modificări făcute de Terrans pe acest hardware:",
  "work on this board even though they're in the dropdown — picking one fires a preflight error.":
    "funcționa pe această placă, deși apar în lista derulantă — alegerea unuia declanșează o eroare de verificare prealabilă.",
  "written at":
    "scris la",
  "yes":
    "da",
  "yes (Web Serial)":
    "da (Web Serial)",
  "yes (WebHID)":
    "da (WebHID)",
  "yes (WebUSB)":
    "da (WebUSB)",
  "you answer a handful of questions about your telescope mount (motors, gearing, drivers, board) — or your hand pendant, or your web-server bridge — click a button, and get firmware ready to flash, without installing Arduino IDE, PlatformIO, or any C++ toolchain on your computer. The mode switch at the top of the page picks which firmware you're building:":
    "răspundeți la câteva întrebări despre montura telescopului (motoare, transmisie, drivere, placă) — sau despre telecomanda (hand controller) ori puntea de server web — apăsați un buton și obțineți firmware gata de programat, fără să instalați Arduino IDE, PlatformIO sau vreun toolchain C++ pe computer. Selectorul de mod din partea de sus a paginii alege ce firmware compilați:",
  "you have the mount tracking, using the hand controller, not in Config.h.":
    "aveți montura în urmărire, folosind telecomanda (hand controller), nu în Config.h.",
  "you set it":
    "îl setați dumneavoastră",
  "your gearing":
    "transmisia dumneavoastră",
  "~1W per inch of aperture: an 8\" SCT ≈ 8W tape. At 12V, 8W = 0.67A — well within the output's rating.":
    "~1W per inch de apertură: un SCT de 8\" ≈ bandă de 8W. La 12V, 8W = 0.67A — mult sub limita ieșirii.",
  "~2048 full steps/rev at the output shaft (32 steps/rev motor × 1/64 gearbox), ~0.1–0.3A":
    "~2048 pași întregi/rotație la arborele de ieșire (motor de 32 pași/rotație × reductor 1/64), ~0.1–0.3A",
  "°/sec base slew rate":
    "°/sec viteză de bază a deplasării rapide",
  "°/sec slew rate":
    "°/sec viteză de deplasare rapidă",
  "μs/step at base slew rate":
    "μs/pas la viteza de bază a deplasării rapide",
  "μs/step at double slew rate":
    "μs/pas la dublul vitezei de deplasare rapidă",
  "μs/step at half slew rate":
    "μs/pas la jumătate din viteza de deplasare rapidă",
  "— 16, 32, 64, 128, 256. Higher = smoother tracking but more step rate on slews.":
    "— 16, 32, 64, 128, 256. Mai mare = urmărire mai fină, dar o frecvență mai mare a pașilor în timpul deplasărilor rapide.",
  "— A3144, US1881, US5881 and SS441A all need 3.5–4.5V or more, and the E4 has no 3.3V pin anyway, so power them from a":
    "— A3144, US1881, US5881 și SS441A necesită toți 3.5–4.5V sau mai mult, iar E4 oricum nu are pin de 3.3V, așa că alimentați-i de la un",
  "— A4988 won't do 256, DRV8825 maxes at 32, etc.":
    "— A4988 nu suportă 256, DRV8825 are maximum 32 etc.",
  "— ESP32 only in practice (needs WiFi). Make sure your":
    "— în practică doar ESP32 (necesită WiFi). Asigurați-vă că",
  "— ESP32 only. Exposes a Prometheus-compatible":
    "— doar ESP32. Expune un endpoint compatibil Prometheus",
  "— GEM/FORK only.":
    "— doar GEM/FORK.",
  "— HalfKay reads that as \"reboot into the app.\" The bootloader often resets mid-ACK, so a missing reply on that final packet is expected, not an error.":
    "— HalfKay interpretează acest lucru ca „repornire în aplicație”. Bootloader-ul se resetează adesea în mijlocul ACK-ului, așa că lipsa unui răspuns la ultimul pachet este normală, nu o eroare.",
  "— MaxESP3, MaxESP4, FYSETC_E4, Terrans Industry V5 Pro (⚠ support under test), CNC3 (WeMos D1 R32 — deprecated), generic dev boards.":
    "— MaxESP3, MaxESP4, FYSETC_E4, Terrans Industry V5 Pro (⚠ suport în curs de testare), CNC3 (WeMos D1 R32 — învechit), plăci de dezvoltare generice.",
  "— MiniPCB v1 (embed-in-mount) and MiniPCB v2 (stand-alone case).":
    "— MiniPCB v1 (integrată în montură) și MiniPCB v2 (carcasă independentă).",
  "— OnStepX controls how long the shutter stays open.":
    "— OnStepX controlează cât timp rămâne deschis obturatorul.",
  "— OnStepX uses the GPS once it has a fix and falls back to the DS3231 clock when no satellites are visible.":
    "— OnStepX folosește GPS-ul după ce acesta obține o poziție (fix) și revine la ceasul DS3231 când nu este vizibil niciun satelit.",
  "— a separate small device with an OLED screen and physical buttons that you hold while observing. Talks to the OnStep mount over a short cable (ST4 port), serial, WiFi, or Bluetooth. Lets you slew, pick targets, and adjust settings without a phone or laptop.":
    "— un dispozitiv mic separat, cu ecran OLED și butoane fizice, pe care îl țineți în mână în timpul observării. Comunică cu montura OnStep printr-un cablu scurt (port ST4), serial, WiFi sau Bluetooth. Vă permite să faceți deplasări rapide, să alegeți ținte și să ajustați setările fără telefon sau laptop.",
  "— a third small device (usually an ESP32 or ESP8266) that hosts the OnStep web interface and bridges a WiFi or Ethernet connection into the mount. Lets you point a phone / tablet / laptop browser at the telescope and control it without cables, and exposes the mount to ASCOM / INDI clients over the network. Optional axis encoders plug into the SWS board for real-pointing feedback; optional BLE gamepad works on ESP32.":
    "— un al treilea dispozitiv mic (de obicei un ESP32 sau ESP8266) care găzduiește interfața web OnStep și face puntea dintre o conexiune WiFi sau Ethernet și montură. Vă permite să accesați telescopul din browserul unui telefon / tabletă / laptop și să îl controlați fără cabluri, și expune montura clienților ASCOM / INDI prin rețea. Encoderele opționale de axă se conectează la placa SWS pentru feedback real de poziționare; un gamepad BLE opțional funcționează pe ESP32.",
  "— add the plugin's":
    "— adăugați linia",
  "— and the OnStepX":
    "— iar ramura OnStepX",
  "— board comes up as":
    "— placa apare ca",
  "— board-level settings:":
    "— setări la nivel de placă:",
  "— check the branch list for an E4-specific branch, otherwise take the current release. (Simpler: the":
    "— verificați lista de ramuri pentru o ramură specifică E4, altfel luați versiunea curentă. (Mai simplu: fila",
  "— compile online and flash over USB.":
    "— compilați online și programați firmware-ul prin USB.",
  "— configure it in this tool's":
    "— configurați-l în modul",
  "— do not assume this profile fits them.":
    "— nu presupuneți că acest profil li se potrivește.",
  "— drop your Config.h in,":
    "— puneți Config.h-ul dumneavoastră în el,",
  "— e.g. Teensy 4.1 native Ethernet — hand-edit the generated Config.h on the Output tab: add":
    "— de ex. Ethernet nativ pe Teensy 4.1 — editați manual Config.h-ul generat în fila Output: adăugați",
  "— embeds inside the mount body. External: power, ST4, USB. Internal: limit sense, PEC, WiFi (ESP-01) or Bluetooth (HC-05). Horizontal connectors so it sits flat behind a cover plate.":
    "— se integrează în corpul monturii. Extern: alimentare, ST4, USB. Intern: detecția limitelor, PEC, WiFi (ESP-01) sau Bluetooth (HC-05). Conectori orizontali, astfel încât placa stă plat în spatele unui capac.",
  "— enable and configure up to one camera rotator and up to four focusers.":
    "— activați și configurați până la un rotator de cameră și până la patru focusere (motoare de focalizare).",
  "— enter physical mount/motor numbers (worm teeth, motor full steps, gear ratio, belt ratio). It computes steps/deg, PEC period, and maximum slew rate for each axis. Copy results into the Axis tabs.":
    "— introduceți valorile fizice ale monturii/motorului (dinții roții melcate, pașii întregi ai motorului, raportul de transmisie, raportul curelei). Calculează pașii/grad, perioada PEC și viteza maximă de deplasare rapidă pentru fiecare axă. Copiați rezultatele în filele Axis.",
  "— every PINMAP is pinned to a specific MCU family in the validator. Current map: MaxESP3/MaxESP4/FYSETC_E4/TERRANS_V5PRO →":
    "— fiecare PINMAP este asociat unei anumite familii de MCU în validator. Corespondența actuală: MaxESP3/MaxESP4/FYSETC_E4/TERRANS_V5PRO →",
  "— feature toggles (dew heaters, aux switches, TMC stall guard, …).":
    "— comutatoare de funcții (încălzitoare anti-rouă, comutatoare auxiliare, TMC stall guard, …).",
  "— flip if the axis moves the wrong way.":
    "— inversați dacă axa se mișcă în sens greșit.",
  "— hold BOOT0 and tap NRST. Board should appear as \"STM32 BOOTLOADER\".":
    "— țineți apăsat BOOT0 și apăsați scurt NRST. Placa ar trebui să apară ca „STM32 BOOTLOADER”.",
  "— if your Config.h has a non-empty field whose name contains":
    "— dacă Config.h-ul dumneavoastră are un câmp nevid al cărui nume conține",
  "— it's a normal folder of":
    "— este un folder obișnuit cu fișiere",
  "— most boards auto-reset; if not, hold BOOT and tap EN/RST.":
    "— majoritatea plăcilor se resetează automat; dacă nu, țineți apăsat BOOT și apăsați scurt EN/RST.",
  "— motor current (mA) for TMC drivers. Start low, raise only as needed. Too high = hot driver, skipped steps, burned stepper.":
    "— curentul motorului (mA) pentru driverele TMC. Începeți cu valori mici și creșteți doar la nevoie. Prea mare = driver fierbinte, pași pierduți, motor pas cu pas ars.",
  "— mount type (GEM / FORK / ALTAZM), guide rates, parking, meridian flip behavior, PEC.":
    "— tipul monturii (GEM / FORK / ALTAZM), vitezele de ghidare, parcarea, comportamentul la întoarcerea meridianului (meridian flip), PEC.",
  "— much simpler than ESP32's four-partition layout. Takes 20–60 s.":
    "— mult mai simplu decât structura cu patru partiții a ESP32. Durează 20–60 s.",
  "— needs a free aux-switch GPIO available on your board.":
    "— necesită un GPIO liber de comutator auxiliar disponibil pe placa dumneavoastră.",
  "— needs a physical analog potentiometer on a free analog input.":
    "— necesită un potențiometru analogic fizic pe o intrare analogică liberă.",
  "— needs an external HC-05 / HC-06 module wired to a serial port; configures it via AT commands at startup.":
    "— necesită un modul extern HC-05 / HC-06 conectat la un port serial; îl configurează prin comenzi AT la pornire.",
  "— no USB timing dependency.":
    "— fără dependență de sincronizarea USB.",
  "— no board modification. The header has only 5V, so a 3.3V-only module needs a small 3.3V regulator. Fall back to X-MIN (which needs its filter capacitor removed) only if a DS3231 or BME280 must stay on the I2C bus.":
    "— fără modificarea plăcii. Conectorul cu pini are doar 5V, așa că un modul exclusiv de 3.3V necesită un mic regulator de 3.3V. Recurgeți la X-MIN (căruia trebuie să i se îndepărteze condensatorul de filtrare) doar dacă un DS3231 sau un BME280 trebuie să rămână pe magistrala I2C.",
  "— on":
    "— pe",
  "— one-click flash via WebHID (Chrome/Edge). Press the white program button when prompted and pick the Teensy in the browser dialog. On Firefox/Safari we fall back to downloading firmware.hex for Teensy Loader.":
    "— programare firmware (flash) cu un singur clic prin WebHID (Chrome/Edge). Apăsați butonul alb de programare când vi se cere și selectați Teensy în dialogul browserului. În Firefox/Safari revenim la descărcarea firmware.hex pentru Teensy Loader.",
  "— pairs with Website. Doesn't work on its own.":
    "— funcționează împreună cu Website. Nu funcționează singur.",
  "— per-axis driver config: steps/deg, microsteps, driver model, motor current (for TMC drivers), soft limits, reverse direction, tracking compensation.":
    "— configurarea driverului pe fiecare axă: pași/grad, micropași, modelul driverului, curentul motorului (pentru driverele TMC), limite software, inversarea sensului, compensarea urmăririi.",
  "— roughly 300 lines, no external dependencies beyond the ES-module imports this page uses everywhere. If the browser doesn't expose WebHID, or you dismiss the device picker, or any step throws mid-flash, we fall back to the original path: save":
    "— aproximativ 300 de linii, fără dependențe externe în afara importurilor de module ES pe care această pagină le folosește peste tot. Dacă browserul nu expune WebHID, dacă închideți selectorul de dispozitiv sau dacă vreun pas eșuează în timpul programării, revenim la metoda inițială: salvăm",
  "— same VID:PID across models. The browser's device picker filters on those IDs, so only a Teensy in bootloader mode shows up in the dialog; the running OnStepX sketch, with its own USB identity, is ignored. That also means the dialog is empty until you press the program button — Chrome polls for new devices, so the Teensy pops in as soon as HalfKay activates.":
    "— același VID:PID la toate modelele. Selectorul de dispozitive al browserului filtrează după aceste ID-uri, așa că doar un Teensy în modul bootloader apare în dialog; sketch-ul OnStepX care rulează, cu propria identitate USB, este ignorat. Asta înseamnă și că dialogul este gol până când apăsați butonul de programare — Chrome caută periodic dispozitive noi, așa că Teensy apare imediat ce HalfKay se activează.",
  "— scroll up in the log for":
    "— derulați în sus în jurnal pentru liniile",
  "— see the warning box.":
    "— vedeți caseta de avertizare.",
  "— several users saw large reading errors. Verify each sensor in ice water (0°C) and at body temperature (~37°C); if it's off, adjust BETA or switch to a DS18B20.":
    "— mai mulți utilizatori au observat erori mari de citire. Verificați fiecare senzor în apă cu gheață (0°C) și la temperatura corpului (~37°C); dacă valoarea este decalată, ajustați BETA sau treceți la un DS18B20.",
  "— soft limits in degrees.":
    "— limite software în grade.",
  "— stand-alone controller for a small aluminium project box. External connectors for power, limit sense, illuminated reticle, PEC, ST4, USB. Internal header for a WeMos D1 Mini (WiFi).":
    "— controler independent pentru o mică cutie de proiect din aluminiu. Conectori externi pentru alimentare, detecția limitelor, reticul iluminat, PEC, ST4, USB. Conector cu pini intern pentru un WeMos D1 Mini (WiFi).",
  "— step/dir, microsteps set on M0/M1, run current set in hardware (the":
    "— step/dir, micropașii se setează prin M0/M1, curentul de funcționare este fixat hardware (câmpurile",
  "— the E4 has no barrel jack, so a plug-and-socket PSU needs a screw-terminal pigtail. 5A min with peripherals. Watch polarity: Vin = +, GND = –.":
    "— E4 nu are mufă jack de alimentare, așa că o sursă cu mufă necesită un cablu adaptor pentru bornele cu șurub. Minimum 5A cu periferice. Atenție la polaritate: Vin = +, GND = –.",
  "— the ESP32's internal pull-ups are ~45kΩ, nowhere near enough to run an I2C bus, and stripping the module pull-ups is a common way to end up with a completely dead bus.":
    "— rezistențele pull-up interne ale ESP32 au ~45kΩ, departe de ce este necesar pentru o magistrală I2C, iar îndepărtarea rezistențelor pull-up de pe module este o cauză frecventă a unei magistrale complet nefuncționale.",
  "— the brain of the telescope. Runs on the controller board attached to the mount, drives the stepper drivers, talks LX200 to your client app (SkySafari, KStars, etc.). This is the default and what most people want.":
    "— creierul telescopului. Rulează pe placa controlerului atașată monturii, comandă driverele motoarelor pas cu pas și comunică prin LX200 cu aplicația dumneavoastră client (SkySafari, KStars etc.). Aceasta este opțiunea implicită și cea dorită de majoritatea utilizatorilor.",
  "— the default limit is an e-stop, not a homing endstop. All of these pins are remappable: one working build uses":
    "— limita implicită este o oprire de urgență, nu un limitator pentru poziția de origine (home). Toți acești pini pot fi realocați: o configurație funcțională folosește",
  "— the env is selected from the":
    "— mediul (env) este selectat din",
  "— the generated":
    "— fișierul generat",
  "— the latest commit on the upstream repo's main branch. Which upstream that is depends on the mode you picked at the top of the page:":
    "— cel mai recent commit din ramura main a depozitului upstream. Depozitul upstream depinde de modul ales în partea de sus a paginii:",
  "— the plugin's own config, not yours), and the web UI is reachable at the IP it prints on the serial console.":
    "— configurația proprie a pluginului, nu a dumneavoastră), iar interfața web este accesibilă la adresa IP afișată în consola serială.",
  "— the south pole turns it on, removing the magnet turns it off, so magnet polarity matters. US5881: also unipolar. US1881 is a":
    "— polul sud îl activează, îndepărtarea magnetului îl dezactivează, deci polaritatea magnetului contează. US5881: tot unipolar. US1881 este un",
  "— the workflow will clone":
    "— workflow-ul va clona",
  "— this page.":
    "— această pagină.",
  "— to restore it, open DevTools → Console and run:":
    "— pentru a-l restaura, deschideți DevTools → Console și rulați:",
  "— typical values are 5,000–50,000; anything outside 500–200,000 is flagged.":
    "— valorile tipice sunt 5.000–50.000; orice valoare în afara intervalului 500–200.000 este semnalată.",
  "— which is why only one of those two can ever be enabled. If a focuser motor has no holding torque, this swap is the usual reason.":
    "— de aceea doar unul dintre cele două poate fi activat. Dacă un motor de focuser nu are cuplu de menținere, această inversare este cauza obișnuită.",
  "— you don't combine them onto one chip. A typical full setup is: one board (ESP32 / Teensy / STM32) running OnStepX inside the mount, plus one ESP32 running SWS for the web UI, plus (optionally) one ESP32 running SHC inside a hand pendant. They all talk to each other at runtime over the links you configure (ST4 cable, serial, WiFi, BLE).":
    "— nu le combinați pe un singur cip. O configurație completă tipică este: o placă (ESP32 / Teensy / STM32) care rulează OnStepX în montură, plus un ESP32 care rulează SWS pentru interfața web, plus (opțional) un ESP32 care rulează SHC într-o telecomandă (hand controller). Toate comunică între ele în timpul funcționării prin legăturile pe care le configurați (cablu ST4, serial, WiFi, BLE).",
  "— you get the latest OnStepX.":
    "— obțineți cel mai recent OnStepX.",
  "→ configure on the SWS side in":
    "→ configurați pe partea SWS în",
  "→ flash again. Leaving it":
    "→ programați din nou firmware-ul. Dacă îl lăsați",
  "→ flash → wait 1–2 min for the wipe to finish → set back to":
    "→ programați firmware-ul → așteptați 1–2 min până se termină ștergerea → setați din nou pe",
  "→ network settings live in":
    "→ setările de rețea se află în",
  "↻ Reset":
    "↻ Resetare",
  "↻ Reset to Defaults":
    "↻ Resetare la valorile implicite",
  "⏰ RTC & Timekeeping":
    "⏰ RTC și cronometrare",
  "⚙️ HTD3M Pulley 220T Dobson 254":
    "⚙️ Scripete HTD3M 220T Dobson 254",
  "⚠ ADC Non-Linearity:":
    "⚠ Neliniaritatea ADC:",
  "⚠ AUX7 is not available:":
    "⚠ AUX7 nu este disponibil:",
  "⚠ Active-high default:":
    "⚠ Implicit activ pe nivel HIGH:",
  "⚠ Addressing:":
    "⚠ Adresare:",
  "⚠ Battery:":
    "⚠ Baterie:",
  "⚠ Baud Rate Mismatch:":
    "⚠ Nepotrivire a vitezei (baud rate):",
  "⚠ Camera in BULB Mode:":
    "⚠ Camera în modul BULB:",
  "⚠ Cold Start:":
    "⚠ Pornire la rece:",
  "⚠ Debounce is optional:":
    "⚠ Anti-bounce-ul este opțional:",
  "⚠ Driver compatibility:":
    "⚠ Compatibilitatea driverelor:",
  "⚠ E-Stop Effect:":
    "⚠ Efectul opririi de urgență:",
  "⚠ Factory jumpers:":
    "⚠ Jumperele din fabrică:",
  "⚠ Filter cap vs response:":
    "⚠ Condensator de filtrare vs. timp de răspuns:",
  "⚠ Filtering Capacitor:":
    "⚠ Condensator de filtrare:",
  "⚠ Focuser 1 goes on MOT-E, not MOT-Z.":
    "⚠ Focuserul 1 se conectează la MOT-E, nu la MOT-Z.",
  "⚠ Fuse the supply:":
    "⚠ Protejați alimentarea cu siguranță:",
  "⚠ GEM/FORK Only:":
    "⚠ Doar GEM/FORK:",
  "⚠ Galvanic Isolation Required:":
    "⚠ Izolare galvanică obligatorie:",
  "⚠ Heater power rating:":
    "⚠ Puterea încălzitorului:",
  "⚠ I2C Address:":
    "⚠ Adresa I2C:",
  "⚠ I2C header is shared:":
    "⚠ Conectorul cu pini I2C este partajat:",
  "⚠ Input Only Pins:":
    "⚠ Pini doar de intrare:",
  "⚠ Input Only:":
    "⚠ Doar intrare:",
  "⚠ LIMIT_STRICT Behavior:":
    "⚠ Comportamentul LIMIT_STRICT:",
  "⚠ Libraries:":
    "⚠ Biblioteci:",
  "⚠ Library:":
    "⚠ Bibliotecă:",
  "⚠ Match heater voltage to your supply:":
    "⚠ Potriviți tensiunea încălzitorului cu sursa de alimentare:",
  "⚠ Module Types:":
    "⚠ Tipuri de module:",
  "⚠ NO vs NC:":
    "⚠ NO vs. NC:",
  "⚠ No external MOSFET:":
    "⚠ Fără MOSFET extern:",
  "⚠ Onboard MOSFET — nothing to add:":
    "⚠ MOSFET integrat — nimic de adăugat:",
  "⚠ PASSWORD_DEFAULT is still \"password\" — change it before deploying.":
    "⚠ PASSWORD_DEFAULT este încă „password” — schimbați-l înainte de punerea în funcțiune.",
  "⚠ Pick one radio mode:":
    "⚠ Alegeți un singur mod radio:",
  "⚠ Preflight: 0 errors, 1 warning":
    "⚠ Verificare prealabilă: 0 erori, 1 avertisment",
  "⚠ Pull-up:":
    "⚠ Rezistență pull-up:",
  "⚠ RSERIES must match the board:":
    "⚠ RSERIES trebuie să corespundă plăcii:",
  "⚠ Read this before buying DS18B20s for an E4.":
    "⚠ Citiți acest lucru înainte de a cumpăra DS18B20 pentru un E4.",
  "⚠ Sensor Selection:":
    "⚠ Alegerea senzorului:",
  "⚠ Shared Pin:":
    "⚠ Pin partajat:",
  "⚠ Steps/Micron:":
    "⚠ Pași/micron:",
  "⚠ Symptom:":
    "⚠ Simptom:",
  "⚠ TMC2209 Default:":
    "⚠ TMC2209 implicit:",
  "⚠ TRS Plug Wiring Varies:":
    "⚠ Cablajul mufei TRS diferă:",
  "⚠ Temperature Range:":
    "⚠ Interval de temperatură:",
  "⚠ Terrans Industry V5 Pro — support UNDER TEST / support EN COURS DE TEST":
    "⚠ Terrans Industry V5 Pro — suport ÎN CURS DE TESTARE",
  "⚠ Two independent zones:":
    "⚠ Două zone independente:",
  "⚠ UNDER TEST — not yet verified on real hardware. ESP32 half of the Terrans Industry V5 Pro (the on-board ESP8266 runs its own SmartWebServer and is a separate, optional flash). PINMAP is emitted as OFF with the board pin map inlined in Config.h. Stock drivers are TMC2225 \"Dual V2\" modules strapped standalone, so the model is TMC2225S: microsteps are set on M0/M1 and run current is fixed in hardware (IRUN/IHOLD do nothing). Geometry defaults are the EXOS2/CG5/EQ5 class — 200 steps x 32 microsteps x 3:1 belt x 144:1 worm = 7680 steps/deg. Bluetooth is on by default, matching the stock firmware. The focuser (Axis4) slot and every auxiliary feature are OFF: the kit ships with no focuser driver fitted and has no dew-heater outputs. Set the board switch to the ESP32 position before flashing.":
    "⚠ ÎN CURS DE TESTARE — încă neverificat pe hardware real. Partea ESP32 a plăcii Terrans Industry V5 Pro (ESP8266-ul integrat rulează propriul SmartWebServer și se programează separat, opțional). PINMAP este generat ca OFF, iar pinmap-ul plăcii este inclus direct în Config.h. Driverele originale sunt module TMC2225 „Dual V2” configurate în mod standalone, deci modelul este TMC2225S: micropașii se setează prin M0/M1, iar curentul de funcționare este fixat hardware (IRUN/IHOLD nu au efect). Geometria implicită corespunde clasei EXOS2/CG5/EQ5 — 200 pași x 32 micropași x curea 3:1 x melc 144:1 = 7680 pași/grad. Bluetooth este activat implicit, ca în firmware-ul original. Slotul focuserului (Axis4) și toate funcțiile auxiliare sunt OFF: kitul este livrat fără driver de focuser montat și nu are ieșiri pentru încălzitoare anti-rouă. Puneți comutatorul plăcii în poziția ESP32 înainte de a programa firmware-ul.",
  "⚠ Use ADC1 pins only:":
    "⚠ Folosiți doar pini ADC1:",
  "⚠ Voltage Level:":
    "⚠ Nivel de tensiune:",
  "⚠ Voltage:":
    "⚠ Tensiune:",
  "⚠ Wiring:":
    "⚠ Cablare:",
  "⚡ USB / Serial / Power":
    "⚡ USB / Serial / Alimentare",
  "✓ Preflight: all checks pass.":
    "✓ Verificare prealabilă: toate verificările au trecut.",
  "✗ Axis 1 driver model is OFF — set it on the Axis1 tab.":
    "✗ Modelul driverului pentru axa 1 este OFF — setați-l în fila Axis1.",
  "✗ Axis 2 driver model is OFF — set it on the Axis2 tab.":
    "✗ Modelul driverului pentru axa 2 este OFF — setați-l în fila Axis2.",
  "🌡️ Temperature Sensors":
    "🌡️ Senzori de temperatură",
  "💡 No VRef pot on the E4:":
    "💡 E4 nu are potențiometru VRef:",
  "💧 Dew Heater Components":
    "💧 Componente pentru încălzitorul anti-rouă",
  "📡 E4 Guide":
    "📡 Ghid E4",
  "📦 MaxSTM3.6 Case":
    "📦 Carcasă MaxSTM3.6",
  "📷 Canon Rotator/Derotator":
    "📷 Rotator/Derotator Canon",
  "📷 Intervalometer / DSLR":
    "📷 Intervalometru / DSLR",
  "🔌 Stepper Motors":
    "🔌 Motoare pas cu pas",
  "🔧 GT2 Gearbox":
    "🔧 Reductor GT2",
  "🔭 Motorized Focuser":
    "🔭 Focuser motorizat",
  "🛤️ Home & Limit Switches":
    "🛤️ Comutatoare de poziție de origine (home) și limitatoare de cursă",
  "🛰️ GPS Modules":
    "🛰️ Module GPS",
  "🧰 Fysetc E4 Case":
    "🧰 Carcasă Fysetc E4",
  "🧲 PEC Index Sensors":
    "🧲 Senzori de index PEC",
  "\"Bundle OnStepX plugins\"":
    "„Includeți pluginurile OnStepX”",
  "Calibrate for your focuser":
    "Calibrați pentru focuser-ul dumneavoastră",
  "Adafruit BME280 v2.2.2 + Adafruit Sensor v1.1.7 (Arduino Library Manager).":
    "Adafruit BME280 v2.2.2 + Adafruit Sensor v1.1.7 (Arduino Library Manager / managerul de biblioteci).",
  "Leave OFF for normal use. Turn ON (errors and warnings) or VERBOSE (everything) when asked to troubleshoot: OnStepX then prints startup messages on the USB serial port at 9600 baud.":
    "Lăsați pe OFF pentru utilizarea normală. Setați ON (erori și avertismente) sau VERBOSE (totul) atunci când vi se cere pentru depanare: OnStepX afișează atunci mesajele de pornire pe portul serial USB la 9600 baud.",
  "Still an Init NV/EEPROM error on main after erasing? Use E4 as the Source ref for now, then set DEBUG to ON (Controller tab), rebuild, and read the Nv lines on the USB serial monitor at 9600 baud.":
    "Încă o eroare Init NV/EEPROM pe main după ștergere? Folosiți deocamdată E4 ca Source ref, apoi setați DEBUG pe ON (fila Controller), recompilați și citiți liniile Nv în monitorul serial USB la 9600 baud.",
  "Serial monitor":
    "Monitor serial",
  "Connect":
    "Conectare",
  "Reset board":
    "Repornire placă",
  "Clear":
    "Șterge",
  "Copy":
    "Copiază",
  "Save .txt":
    "Salvează .txt",
  "Shows what the board prints on its USB port, for example the OnStepX startup messages when DEBUG is ON or VERBOSE (Controller tab). Close NINA, ASCOM and any other program using the port first.":
    "Afișează ce trimite placa pe portul USB, de exemplu mesajele de pornire OnStepX când DEBUG este ON sau VERBOSE (fila Controller). Închideți mai întâi NINA, ASCOM și orice alt program care folosește portul.",
});
