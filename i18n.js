/* ============================================================================
   Lightweight UI translation layer for the OnStepX Configurator
   ----------------------------------------------------------------------------
   The configurator is authored in English. Rather than annotate ~6500 lines
   with data-i18n keys, this engine walks the live DOM, keys each visible text
   node / attribute on its exact trimmed English string, and swaps in the
   French equivalent from window.I18N_FR when present. Anything missing from the
   dictionary simply stays English (graceful degradation), so the page is never
   left blank or half-broken.

   Dynamic content (E4 Guide render, generated Config.h preview, mode switches)
   is picked up automatically via a MutationObserver, so callers don't have to
   remember to re-translate after rendering.

   Skipped on purpose: <script>, <style>, <canvas>, <code>, <pre>, <textarea>
   (these hold code / generated config, which must NOT be translated), plus any
   subtree marked with data-no-i18n.
   ========================================================================== */
(function () {
  'use strict';

  var STORE_KEY = 'cfgLang';
  var EN_TEXT = '__i18nEnText';          // per-text-node cache of the English original
  var EN_ATTR = '__i18nEnAttr_';         // per-element cache of an attribute's English original
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, CANVAS: 1, CODE: 1, PRE: 1, TEXTAREA: 1, OPTION: 0 };
  var ATTRS = ['title', 'placeholder', 'aria-label'];

  var lang = 'en';
  try { lang = localStorage.getItem(STORE_KEY) || 'en'; } catch (e) {}

  function dict() {
    return lang === 'fr' ? (window.I18N_FR || {}) : null;
  }

  /* ---- translate a single text node in place (cache English on first touch) */
  function tText(node) {
    if (node[EN_TEXT] === undefined) node[EN_TEXT] = node.nodeValue;
    var orig = node[EN_TEXT];
    var d = dict();
    if (!d) { if (node.nodeValue !== orig) node.nodeValue = orig; return; }
    var key = orig.trim();
    if (!key) return;
    var fr = d[key];
    var next = (fr !== undefined) ? orig.replace(key, fr) : orig;
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function skipParent(p) {
    if (!p) return true;
    if (SKIP_TAGS[p.nodeName]) return true;
    if (p.closest && p.closest('[data-no-i18n]')) return true;
    return false;
  }

  function walkText(root) {
    if (root.nodeType === 3) { if (!skipParent(root.parentNode)) tText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (skipParent(n.parentNode)) return NodeFilter.FILTER_REJECT;
        return n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var list = [], n;
    while ((n = tw.nextNode())) list.push(n);
    for (var i = 0; i < list.length; i++) tText(list[i]);
  }

  function tAttr(el, attr) {
    var sk = EN_ATTR + attr;
    if (el[sk] === undefined) el[sk] = el.getAttribute(attr);
    var orig = el[sk];
    if (orig == null) return;
    var d = dict();
    var key = orig.trim();
    var fr = d ? d[key] : undefined;
    var next = (d && fr !== undefined) ? orig.replace(key, fr) : orig;
    if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
  }

  function walkAttrs(root) {
    var scope = (root.nodeType === 1) ? root : document.body;
    for (var a = 0; a < ATTRS.length; a++) {
      var attr = ATTRS[a];
      if (scope.nodeType === 1 && scope.hasAttribute && scope.hasAttribute(attr) && !skipParent(scope)) tAttr(scope, attr);
      var els = scope.querySelectorAll ? scope.querySelectorAll('[' + attr + ']') : [];
      for (var i = 0; i < els.length; i++) {
        if (!skipParent(els[i])) tAttr(els[i], attr);
      }
    }
  }

  function apply(root) {
    root = root || document.body;
    if (!root) return;
    walkText(root);
    walkAttrs(root);
  }

  function updateButtons() {
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-lang-btn') === lang);
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    }
  }

  function set(l) {
    lang = (l === 'fr') ? 'fr' : 'en';
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    apply(document.body);
    updateButtons();
    if (typeof window.afterI18nApply === 'function') window.afterI18nApply();
  }

  /* ---- auto-translate dynamically inserted content (E4 guide, output, etc.) */
  var observer = null;
  function startObserver() {
    if (observer || !window.MutationObserver || !document.body) return;
    observer = new MutationObserver(function (muts) {
      if (lang === 'en') return;            // nothing to do; new nodes are already English
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType === 1) apply(node);
          else if (node.nodeType === 3 && !skipParent(node.parentNode)) tText(node);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    document.documentElement.lang = lang;
    apply(document.body);
    updateButtons();
    if (typeof window.afterI18nApply === 'function') window.afterI18nApply();
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { set(this.getAttribute('data-lang-btn')); });
    }
    startObserver();
  }

  window.I18N = {
    apply: apply,
    set: set,
    init: init,
    get lang() { return lang; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
