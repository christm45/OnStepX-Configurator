/* ============================================================================
   French dictionary — batch 9. Every visible page string (outside the E4
   guide) that had no entry yet, found by rendering the page in all three
   modes and looking each text node / title / placeholder up in I18N_FR.
   Merged into window.I18N_FR; loaded before i18n.js. Identifiers, pin names
   and part numbers stay untranslated. Keys are the exact trimmed text nodes.
   ========================================================================== */
window.I18N_FR = Object.assign(window.I18N_FR || {}, {
  "// Only MaxSTM3, SKR PRO, FYSETC S6 and Manticore pinmaps assign one; all other boards must set it.":
    "// Seuls les pinmaps MaxSTM3, SKR PRO, FYSETC S6 et Manticore en attribuent un ; toutes les autres cartes doivent le définir.",
  "// n. Baud rate of the GPS module.":
    "// n. Débit en bauds du module GPS.",
  "// n. RX pin for the GPS port. Required for SoftSerial/HardSerial; ESP32 Serial1/2 remap with RX+TX.":
    "// n. Broche RX du port GPS. Requise pour SoftSerial/HardSerial ; réaffectation ESP32 Serial1/2 avec RX+TX.",
  "// n. TX pin for the GPS port (to GPS RX, often left unwired).":
    "// n. Broche TX du port GPS (vers le RX du GPS, souvent non câblée).",
  "200..5000 μm/s slew rate":
    "200..5000 μm/s vitesse de déplacement rapide",
  "Adds dedicated USB power port control to the aux-switching system.":
    "Ajoute le contrôle d'un port d'alimentation USB dédié au système de commutation auxiliaire.",
  "Analog potentiometer on guide rate for hand-controller extensions.":
    "Potentiomètre analogique sur la vitesse de guidage pour les extensions de raquette.",
  "Built-in web UI (SmartWebServer features as a plugin instead of a separate MCU). ESP32 only in practice.":
    "Interface web intégrée (fonctions de SmartWebServer sous forme de plugin au lieu d'un MCU séparé). En pratique, ESP32 uniquement.",
  "Configures external HC-05/HC-06 Bluetooth modules via AT commands at startup.":
    "Configure les modules Bluetooth externes HC-05/HC-06 via des commandes AT au démarrage.",
  "ESP32 (recommended for SHC)":
    "ESP32 (recommandé pour la SHC)",
  "ESP32 (recommended — WiFi + BLE)":
    "ESP32 (recommandé — WiFi + BLE)",
  "From pinmap":
    "Selon le pinmap",
  "GPS serial port (used only when TIME_LOCATION_SOURCE is GPS)":
    "Port série du GPS (utilisé uniquement si TIME_LOCATION_SOURCE vaut GPS)",
  "Generate Config.h for OnStepX telescope controller — based on OnStep Calculations v1.34":
    "Générer le Config.h du contrôleur de télescope OnStepX — basé sur OnStep Calculations v1.34",
  "Generate Config.h for the OnStep SHC hand pendant — compile and flash online":
    "Générez le Config.h de la raquette OnStep SHC — compilation et flashage en ligne",
  "Generate Config.h for the OnStep web server / WiFi bridge — compile and flash online":
    "Générez le Config.h du serveur web / pont WiFi OnStep — compilation et flashage en ligne",
  "Help for AXIS1_DRIVER_MICROSTEPS":
    "Aide pour AXIS1_DRIVER_MICROSTEPS",
  "Help for AXIS1_REVERSE":
    "Aide pour AXIS1_REVERSE",
  "Help for AXIS1_STEPS_PER_DEGREE":
    "Aide pour AXIS1_STEPS_PER_DEGREE",
  "Help for AXIS2_DRIVER_MICROSTEPS":
    "Aide pour AXIS2_DRIVER_MICROSTEPS",
  "Help for AXIS2_REVERSE":
    "Aide pour AXIS2_REVERSE",
  "Help for AXIS2_STEPS_PER_DEGREE":
    "Aide pour AXIS2_STEPS_PER_DEGREE",
  "Help for MOUNT_TYPE":
    "Aide pour MOUNT_TYPE",
  "Help for PEC_STEPS_PER_WORM_ROTATION":
    "Aide pour PEC_STEPS_PER_WORM_ROTATION",
  "Help for PINMAP":
    "Aide pour PINMAP",
  "Help for SERIAL_A_BAUD_DEFAULT":
    "Aide pour SERIAL_A_BAUD_DEFAULT",
  "Help for SERIAL_GPS":
    "Aide pour SERIAL_GPS",
  "Help for SLEW_RATE_BASE_DESIRED":
    "Aide pour SLEW_RATE_BASE_DESIRED",
  "Help for STEP_WAVE_FORM":
    "Aide pour STEP_WAVE_FORM",
  "Help for TIME_LOCATION_SOURCE":
    "Aide pour TIME_LOCATION_SOURCE",
  "Must match the GPS module (most ship at 9600)":
    "Doit correspondre au module GPS (la plupart sont livrés à 9600)",
  "OFF or pin number":
    "OFF ou numéro de broche",
  "OFF or pin number (GPS TX wires here)":
    "OFF ou numéro de broche (le TX du GPS se branche ici)",
  "Over-the-air firmware update via web browser. Pairs well with Website.":
    "Mise à jour du firmware à distance (OTA) via le navigateur web. Se combine bien avec Website.",
  "Platform Rate Limits (minimum μs/step) —":
    "Limites de vitesse par plateforme (μs/pas minimum) —",
  "Prometheus-compatible metrics endpoint for debugging / monitoring.":
    "Point de terminaison de métriques compatible Prometheus pour le débogage / la surveillance.",
  "Resolve Issues or Override to Compile":
    "Résolvez les problèmes ou forcez la compilation",
  "SHC builds — pick the MCU in your hand controller":
    "Compilations SHC — choisissez le MCU de votre raquette",
  "SWS builds — pick the MCU hosting the web server":
    "Compilations SWS — choisissez le MCU qui héberge le serveur web",
  "SmartHandController Configuration Generator":
    "Générateur de configuration SmartHandController",
  "SmartWebServer Configuration Generator":
    "Générateur de configuration SmartWebServer",
  "Your browser does not support WebUSB — STM32 flashing needs Chrome/Edge/Opera.":
    "Votre navigateur ne prend pas en charge WebUSB — le flashage STM32 nécessite Chrome/Edge/Opera.",
  "in hjd1964/OnStepX…":
    "dans hjd1964/OnStepX…",
  "in hjd1964/SmartHandController…":
    "dans hjd1964/SmartHandController…",
  "in hjd1964/SmartWebServer…":
    "dans hjd1964/SmartWebServer…",
  "resolving":
    "résolution de",
  "μs/step at base slew rate":
    "μs/pas à la vitesse de pointage de base",
  "μs/step at double slew rate":
    "μs/pas au double de la vitesse de pointage",
  "μs/step at half slew rate":
    "μs/pas à la moitié de la vitesse de pointage",
  "⚙️ HTD3M Pulley 220T Dobson 254":
    "⚙️ Poulie HTD3M 220T Dobson 254",
  "⚠ PASSWORD_DEFAULT is still \"password\" — change it before deploying.":
    "⚠ PASSWORD_DEFAULT vaut toujours « password » — modifiez-le avant le déploiement.",
  "⚠ Preflight: 0 errors, 1 warning":
    "⚠ Vérification préalable : 0 erreur, 1 avertissement",
  "✓ Preflight: all checks pass.":
    "✓ Vérification préalable : tous les contrôles sont réussis.",
  "✗ Axis 1 driver model is OFF — set it on the Axis1 tab.":
    "✗ Le modèle de pilote de l'axe 1 est OFF — réglez-le dans l'onglet Axis1.",
  "✗ Axis 2 driver model is OFF — set it on the Axis2 tab.":
    "✗ Le modèle de pilote de l'axe 2 est OFF — réglez-le dans l'onglet Axis2.",
});
