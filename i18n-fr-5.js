/* ============================================================================
   French dictionary — batch 5: strings rendered by JavaScript (not present in
   the static HTML), notably the Auxiliary tab's Feature blocks built by
   buildFeatures(). The i18n engine picks these up via its MutationObserver /
   re-apply on language switch. Merged into window.I18N_FR; loaded before
   i18n.js.
   ========================================================================== */
window.I18N_FR = Object.assign(window.I18N_FR || {}, {
  "Feature 1": "Fonction 1",
  "Feature 2": "Fonction 2",
  "Feature 3": "Fonction 3",
  "Feature 4": "Fonction 4",
  "Feature 5": "Fonction 5",
  "Feature 6": "Fonction 6",
  "Feature 7": "Fonction 7",
  "Feature 8": "Fonction 8",
  "Feature purpose": "Rôle de la fonction",
  "Display name": "Nom affiché",
  "OFF, AUX, or pin number": "OFF, AUX, ou numéro de broche",
  "OFF, ON, or 0..255": "OFF, ON, ou 0..255",
  "Remember across power cycles": "Mémoriser entre les cycles d'alimentation",
  "ON state voltage level": "Niveau de tension de l'état ON"
});
