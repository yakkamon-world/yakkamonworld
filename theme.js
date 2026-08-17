/*
  YAKKAMON PORTAL — dark mode toggle.

  Applying a saved theme happens in a tiny inline snippet in the <head> of
  every page, because it has to run before first paint or the page flashes
  the wrong colours. This file only builds the toggle, so it is deferred.

  Storage is best-effort: Safari private mode and blocked-cookie settings
  both make localStorage throw on access, so every call is wrapped. With
  storage unavailable the toggle still works for the current page.
*/
(function () {
  "use strict";

  var KEY = "yw-theme";
  var DARK_BG = "#12121C";
  var LIGHT_BG = "#FFF4D6";

  var SUN = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/>' +
    '<path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6' +
    'M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  var MOON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.6 6.6 0 0 0 9.7 9.7Z" ' +
    'stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  function safeGet() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function safeSet(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) { /* no-op */ }
  }

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "night";
  }

  function apply(dark, persist) {
    var root = document.documentElement;
    // Colour transitions only on a deliberate change, never on load.
    root.classList.add("theme-fade");
    if (dark) { root.setAttribute("data-theme", "night"); }
    else { root.removeAttribute("data-theme"); }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) { meta.setAttribute("content", dark ? DARK_BG : LIGHT_BG); }

    if (persist) { safeSet(dark ? "night" : "day"); }
    sync();
    window.setTimeout(function () { root.classList.remove("theme-fade"); }, 260);
  }

  var btn = null;
  function sync() {
    if (!btn) { return; }
    var dark = isDark();
    btn.innerHTML = dark ? SUN : MOON;
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    var label = dark ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  function build() {
    var nav = document.querySelector(".tabs");
    if (!nav || document.querySelector(".theme-btn")) { return; }

    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-btn";
    btn.addEventListener("click", function () { apply(!isDark(), true); });

    var searchBtn = nav.querySelector(".search-btn");
    if (searchBtn) { nav.insertBefore(btn, searchBtn); } else { nav.appendChild(btn); }
    sync();
  }

  // Follow the OS preference for anyone who has never chosen explicitly.
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function (e) { if (!safeGet()) { apply(e.matches, false); } };
    if (mq.addEventListener) { mq.addEventListener("change", onChange); }
    else if (mq.addListener) { mq.addListener(onChange); }
  }

  // Keep other open tabs in step.
  window.addEventListener("storage", function (e) {
    if (e.key === KEY) { apply(e.newValue === "night", false); }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
