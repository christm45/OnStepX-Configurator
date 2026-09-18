/* ============================================================================
   French (Français) dictionary — Terrans Industry V5 Pro board support
   ----------------------------------------------------------------------------
   Keys are the EXACT trimmed English text as it appears in the live DOM, the
   same convention as the other i18n-fr*.js files. Merged with Object.assign,
   so load order only matters for duplicate keys (there are none here).

   The warning box on the Controller tab is authored in English like the rest
   of the page and translated from here — it used to carry a French sentence
   inline, which duplicated this file once the strings were dictionary-backed.

   Many entries look like sentence fragments. That's expected: the i18n engine
   keys on individual text nodes, and <code>/<b> tags inside a paragraph split
   it into several. Pure symbol/number fragments ("0 →", "-1") are deliberately
   absent — there is nothing to translate and leaving them out keeps them
   identical in both languages.
   ========================================================================== */
window.I18N_FR = Object.assign(window.I18N_FR || {}, {

  /* ------------------------------------------------- PINMAP dropdown + hint */
  "Terrans Industry V5 Pro (ESP32) — ⚠ UNDER TEST / EN TEST":
    "Terrans Industry V5 Pro (ESP32) — ⚠ EN COURS DE TEST",
  "Terrans Industry V5 Pro": "Terrans Industry V5 Pro",
  "is not an upstream OnStepX pinmap: picking it emits":
    "n'est pas un pinmap officiel d'OnStepX : le choisir émet",
  "plus the board's own pin map inline in Config.h (a path OnStepX supports explicitly).":
    "ainsi que le brochage de la carte directement dans Config.h (une voie qu'OnStepX prend explicitement en charge).",
  "It has not been flashed on real hardware yet":
    "Elle n'a pas encore été flashée sur du matériel réel",
  "— see the warning box.": "— voir l'encadré d'avertissement.",

  /* -------------------------------------------------------- warning box */
  "⚠ Terrans Industry V5 Pro — support UNDER TEST / support EN COURS DE TEST":
    "⚠ Terrans Industry V5 Pro — support EN COURS DE TEST",
  "This board profile was derived from source,":
    "Ce profil de carte a été déduit des sources,",
  "not yet verified by flashing real hardware":
    "pas encore validé par un flash sur du matériel réel",
  ". A tester has volunteered and this notice will be removed once a build has been confirmed working on an actual V5 Pro. Until then: read the generated Config.h before you flash, and keep a copy of your working firmware.":
    ". Un testeur s'en charge ; cet avertissement disparaîtra une fois un build confirmé fonctionnel sur une vraie V5 Pro. D'ici là : relisez le Config.h généré avant de flasher, et gardez une copie de votre firmware actuel.",

  "What this profile does": "Ce que fait ce profil",
  "Emits": "Émet",
  "and appends the V5 Pro pin map directly to Config.h. OnStepX supports this:":
    "et ajoute le brochage de la V5 Pro directement dans Config.h. OnStepX le prend en charge :",
  "reads": "indique",
  "\"PINMAP must be set to a valid board (from Constants.h) or OFF (for user pin defs in Config.h)\"":
    "« PINMAP doit valoir une carte valide (issue de Constants.h) ou OFF (pour des broches définies par l'utilisateur dans Config.h) »",
  ". No build-service or firmware-source change is involved.":
    ". Aucune modification du service de compilation ni des sources du firmware n'est nécessaire.",
  "The pin map is stock": "Le brochage est celui d'origine",
  "with the three changes Terrans made on this hardware:":
    "avec les trois modifications apportées par Terrans sur cette carte :",
  "(GPIO0 is the ESP32 boot-strap pin here),":
    "(GPIO0 est ici la broche de démarrage de l'ESP32),",
  "(GPIO4 is now AXIS1 DIR, so AUX2 is freed), and":
    "(GPIO4 sert désormais de DIR pour l'axe 1, AUX2 est donc libérée), et",
  "stated explicitly as 21/22.": "déclarées explicitement à 21/22.",
  "Stock drivers are": "Les drivers d'origine sont des",
  "TMC2225 \"Dual V2\" modules strapped standalone":
    "modules TMC2225 « Dual V2 » configurés en mode autonome",
  ", so the driver model is": ", le modèle de driver est donc",
  "— step/dir, microsteps set on M0/M1, run current set in hardware (the":
    "— step/dir, micropas réglés par M0/M1, courant fixé en matériel (les champs",
  "fields do nothing). TMC UART models will not compile on this profile.":
    "n'ont aucun effet). Les modèles TMC UART ne compileront pas avec ce profil.",

  "Before you flash": "Avant de flasher",
  "Set the board's switch to the ESP32 position":
    "Mettez l'interrupteur de la carte sur la position ESP32",
  "(left) before flashing, and put it back to centre afterwards. The V5 Pro shares one USB port between the ESP32 and the ESP8266.":
    "(à gauche) avant de flasher, puis remettez-le au centre ensuite. La V5 Pro partage un seul port USB entre l'ESP32 et l'ESP8266.",
  "Do not reflash the ESP8266.": "Ne reflashez pas l'ESP8266.",
  "Terrans ships a customised SmartWebServer on it; this profile only rebuilds the ESP32 (OnStepX) half, which is all that's needed for the newer OnStepX features.":
    "Terrans y installe un SmartWebServer modifié ; ce profil ne recompile que la partie ESP32 (OnStepX), ce qui suffit pour bénéficier des nouveautés d'OnStepX.",
  "Settings stored in NV are not migrated — expect to redo date/time, site and alignment.":
    "Les réglages stockés en mémoire NV ne sont pas migrés — prévoyez de refaire date/heure, site et alignement.",
  "Steps/degree defaults (7680) are for the":
    "Les pas/degré par défaut (7680) correspondent à la classe",
  "EXOS2 / CG5 / EQ5": "EXOS2 / CG5 / EQ5",
  "class: 200 steps × 32 microsteps × 3:1 belt × 144:1 worm ÷ 360.":
    " : 200 pas × 32 micropas × courroie 3:1 × vis sans fin 144:1 ÷ 360.",
  "EQ3D and the V5 Lite / V4 Pro are different boards":
    "L'EQ3D et les V5 Lite / V4 Pro sont des cartes différentes",
  "— do not assume this profile fits them.":
    "— ne supposez pas que ce profil leur convient.",
  "Reference build proving this config compiles against current OnStepX:":
    "Build de référence prouvant que cette configuration compile avec l'OnStepX actuel :",

  /* ------------------------------------------- standalone driver models */
  "TMC2225S — standalone TMC2225 (Terrans V5 Pro stock)":
    "TMC2225S — TMC2225 autonome (d'origine sur Terrans V5 Pro)",
  "TMC2209S — standalone TMC2209 (step/dir, no UART)":
    "TMC2209S — TMC2209 autonome (step/dir, sans UART)",
  "TMC2226S — standalone TMC2226 (step/dir, no UART)":
    "TMC2226S — TMC2226 autonome (step/dir, sans UART)",
  "TMC2208S — standalone TMC2208 (step/dir, no UART)":
    "TMC2208S — TMC2208 autonome (step/dir, sans UART)",
  "TMC2130S — standalone TMC2130 (step/dir, no SPI)":
    "TMC2130S — TMC2130 autonome (step/dir, sans SPI)",
  "TMC2100 — standalone only (spreadCycle, max 16x)":
    "TMC2100 — autonome uniquement (spreadCycle, 16x maxi)",

  /* ------------------------------------ strings built in JS via tr()/pgT() */
  "Apply Terrans V5 Pro defaults":
    "Appliquer les valeurs par défaut Terrans V5 Pro",
  "Terrans V5 Pro defaults applied.":
    "Valeurs par défaut Terrans V5 Pro appliquées.",
  "⚠ UNDER TEST — not yet verified on real hardware. ESP32 half of the Terrans Industry V5 Pro (the on-board ESP8266 keeps its own SmartWebServer — do not reflash it). PINMAP is emitted as OFF with the board pin map inlined in Config.h. Stock drivers are TMC2225 \"Dual V2\" modules strapped standalone, so the model is TMC2225S: microsteps are set on M0/M1 and run current is fixed in hardware (IRUN/IHOLD do nothing). Geometry defaults are the EXOS2/CG5/EQ5 class — 200 steps x 32 microsteps x 3:1 belt x 144:1 worm = 7680 steps/deg. Bluetooth is on by default, matching the stock firmware. Set the board switch to the ESP32 position before flashing.":
    "⚠ EN COURS DE TEST — pas encore validé sur matériel réel. Partie ESP32 de la Terrans Industry V5 Pro (l'ESP8266 embarqué garde son propre SmartWebServer — ne le reflashez pas). PINMAP est émis à OFF, le brochage de la carte étant intégré dans Config.h. Les drivers d'origine sont des modules TMC2225 « Dual V2 » en mode autonome, d'où le modèle TMC2225S : les micropas se règlent par M0/M1 et le courant est fixé en matériel (IRUN/IHOLD n'ont aucun effet). La géométrie par défaut correspond à la classe EXOS2/CG5/EQ5 — 200 pas × 32 micropas × courroie 3:1 × vis sans fin 144:1 = 7680 pas/degré. Le Bluetooth est actif par défaut, comme le firmware d'origine. Mettez l'interrupteur de la carte sur la position ESP32 avant de flasher."
});
