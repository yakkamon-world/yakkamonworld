// Powers the "change your mind" controls on privacy.html.
// analytics.js owns the actual consent key; this only reads and sets it.

(function () {
  "use strict";
  const KEY = "yw-analytics-consent";
  const state = document.querySelector(".consent-state");
  const allow = document.getElementById("consent-allow");
  const deny = document.getElementById("consent-deny");
  if (!state || !allow || !deny) return;

  function read() {
    try { return localStorage.getItem(KEY); } catch { return null; }
  }

  function paint() {
    const v = read();
    if (v === "granted") {
      state.textContent = "Analytics is currently ON. Thanks — it genuinely helps.";
      state.className = "consent-state on";
    } else if (v === "denied") {
      state.textContent = "Analytics is currently OFF. Nothing is being loaded or sent.";
      state.className = "consent-state off";
    } else {
      state.textContent = "You haven't chosen yet, so analytics is off by default.";
      state.className = "consent-state";
    }
  }

  function set(v) {
    try { localStorage.setItem(KEY, v); } catch { /* private mode */ }
    paint();
    // Turning it on mid-session needs a reload for the script to load.
    if (v === "granted") setTimeout(() => location.reload(), 600);
  }

  allow.addEventListener("click", () => set("granted"));
  deny.addEventListener("click", () => set("denied"));
  paint();
})();
