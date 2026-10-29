/* ============================================================================
   Lightweight UI translation layer for the OnStepX Configurator
   ----------------------------------------------------------------------------
   The configurator is authored in English. Rather than annotate ~6500 lines
   with data-i18n keys, this engine walks the live DOM, keys each visible text
   node / attribute on its exact trimmed English string, and swaps in the
   translation from the active language's dictionary (window.I18N_FR,
   window.I18N_ZH, window.I18N_RO, … — see LANGS) when present. Anything missing from the
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
  var EN_OUT = '__i18nOutText';          // per-text-node record of what the engine last wrote
  var EN_ATTR = '__i18nEnAttr_';         // per-element cache of an attribute's English original
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, CANVAS: 1, CODE: 1, PRE: 1, TEXTAREA: 1, OPTION: 0 };
  var ATTRS = ['title', 'placeholder', 'aria-label'];

  // Supported languages: code -> dictionary global + <html lang>. English is
  // the source text, so it has no dictionary. To add a language, add a row
  // here, a button in index.html's .lang-bar, and i18n-<code>*.js files that
  // fill the named global.
  var LANGS = {
    en: { dict: null, html: 'en' },
    fr: { dict: 'I18N_FR', html: 'fr' },
    zh: { dict: 'I18N_ZH', html: 'zh-CN' },
    ro: { dict: 'I18N_RO', html: 'ro' }
  };

  var lang = 'en';
  try { lang = localStorage.getItem(STORE_KEY) || 'en'; } catch (e) {}
  if (!LANGS[lang]) lang = 'en';

  function dict() {
    var g = LANGS[lang].dict;
    return g ? (window[g] || {}) : null;
  }

  /* ---- dictionary key for a chunk of DOM text ------------------------------
     Trim the ends AND collapse every internal whitespace run to one space. The
     markup is indented and wrapped, so a sentence that reads as one line in the
     browser reaches us as "...put it back to\n          centre afterwards..." —
     keying on that raw text meant any prose long enough to wrap could never be
     matched, and those entries sat dead in the dictionaries. No key in any
     i18n-fr*.js contains a newline or a double space, so collapsing can only
     turn misses into hits; it never merges two distinct entries. */
  function key(s) { return s.trim().replace(/\s+/g, ' '); }

  /* ---- recover the English original of a string ----------------------------
     The engine caches each node's English text on first touch. But text can be
     written by page JS while another language is active (pgT() picks the
     French/Chinese/Romanian variant itself, e.g. the serial monitor's
     "Déconnecter" button), and caching that as "English" would strand it in
     that language after switching back. So if a string is not a known English
     key but IS a known translation, map it back to its English key. The
     reverse maps are built lazily, once per dictionary (the dictionaries are
     all loaded before this file and never change afterwards). */
  var rev = {};
  function revMap(code) {
    if (rev[code]) return rev[code];
    var m = Object.create(null), g = LANGS[code].dict, d = g ? window[g] : null;
    if (d) for (var k in d) {
      var v = d[k];
      if (typeof v !== 'string') continue;
      v = key(v);
      // Skip fragments too short to identify (")" or "are" also occur as
      // plain English text nodes) unless they are clearly non-English.
      if (v === k || (v.length < 4 && !/[^\u0000-\u007f]/.test(v))) continue;
      if (!(v in m)) m[v] = k;
    }
    return (rev[code] = m);
  }
  function isEnglishKey(k) {
    for (var c in LANGS) { var g = LANGS[c].dict; if (g && window[g] && window[g][k] !== undefined) return true; }
    return false;
  }
  // Only the active language can have been written by page JS (pgT() picks
  // the variant for the current language), so only its dictionary is reversed.
  function englishOf(s) {
    if (s == null || !LANGS[lang].dict) return s;
    var k = key(s);
    if (!k || isEnglishKey(k)) return s;
    var en = revMap(lang)[k];
    return en !== undefined ? /^\s*/.exec(s)[0] + en + /\s*$/.exec(s)[0] : s;
  }

  /* ---- translate a single text node in place --------------------------------
     EN_TEXT caches the English original; EN_OUT remembers what we last wrote.
     If the live value no longer matches EN_OUT, page JS has changed the text
     since, so the cache is stale: re-derive the original from the new value. */
  function tText(node) {
    if (node[EN_TEXT] === undefined || node.nodeValue !== node[EN_OUT]) node[EN_TEXT] = englishOf(node.nodeValue);
    var orig = node[EN_TEXT];
    var d = dict();
    var next = orig;
    var k = key(orig);
    if (d && k) {
      var fr = d[k];
      if (fr !== undefined) {
        // The key is collapsed, so it is not a literal substring of orig — put
        // the node's own leading/trailing whitespace back around the translation
        // instead, or neighbouring inline tags would run into the words.
        next = /^\s*/.exec(orig)[0] + fr + /\s*$/.exec(orig)[0];
      }
    }
    if (node.nodeValue !== next) node.nodeValue = next;
    node[EN_OUT] = next;
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
    var sk = EN_ATTR + attr, ok = sk + '_out';
    var cur = el.getAttribute(attr);
    if (el[sk] === undefined || cur !== el[ok]) el[sk] = englishOf(cur);
    var orig = el[sk];
    if (orig == null) { el[ok] = cur; return; }
    var d = dict();
    var fr = d ? d[key(orig)] : undefined;
    var next = (fr !== undefined) ? fr : orig;
    if (cur !== next) el.setAttribute(attr, next);
    el[ok] = next;
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
    lang = LANGS[l] ? l : 'en';
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    document.documentElement.lang = LANGS[lang].html;
    apply(document.body);
    flushOwnMutations();
    updateButtons();
    if (typeof window.afterI18nApply === 'function') window.afterI18nApply();
  }

  /* ---- auto-translate dynamic content (E4 guide, output, etc.) --------------
     Watches inserted nodes, in-place text edits (node.nodeValue = …) and the
     translated attributes. The engine's own writes also queue records; those
     are dropped with takeRecords() so a language switch over the whole page
     doesn't re-walk it, and re-processing one would be a no-op anyway (tText /
     tAttr only write when the value differs). */
  var observer = null;
  function onMutations(muts) {
    if (lang === 'en') return;            // nothing to do; new content is already English
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'childList') {
        var added = m.addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (!node.isConnected) continue;
          if (node.nodeType === 1) { if (!skipParent(node)) apply(node); }
          else if (node.nodeType === 3 && !skipParent(node.parentNode)) tText(node);
        }
      } else if (m.type === 'characterData') {
        var t = m.target;
        if (t.nodeType === 3 && t.isConnected && t.nodeValue.trim() && !skipParent(t.parentNode)) tText(t);
      } else if (m.type === 'attributes') {
        if (m.target.isConnected && !skipParent(m.target)) tAttr(m.target, m.attributeName);
      }
    }
    observer.takeRecords();
  }
  function startObserver() {
    if (observer || !window.MutationObserver || !document.body) return;
    observer = new MutationObserver(onMutations);
    observer.observe(document.body, {
      childList: true, characterData: true, subtree: true,
      attributes: true, attributeFilter: ATTRS
    });
  }
  function flushOwnMutations() { if (observer) observer.takeRecords(); }

  function init() {
    document.documentElement.lang = LANGS[lang].html;
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
    // Translate one string with the active dictionary (English passthrough).
    // Keyed like the DOM walker (trimmed, whitespace collapsed).
    t: function (s) {
      var d = dict();
      if (!d || s == null) return s;
      var v = d[key(String(s))];
      return v !== undefined ? v : s;
    },
    get lang() { return lang; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
