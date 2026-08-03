// Countdown to referral-code pre-registration opening.
//
// The target is one absolute moment in time (2026-08-04 8:00 PM ET =
// 2026-08-05T00:00:00Z), so the number of seconds remaining is the same
// for every visitor no matter where they are. Only the "in your timezone"
// line below it changes from person to person, and that comes from the
// browser's own locale settings.

(function () {
  "use strict";

  var TARGET = Date.UTC(2026, 7, 5, 0, 0, 0);   // months are 0-based: 7 = August
  var SECOND = 1000, MINUTE = 60000, HOUR = 3600000, DAY = 86400000;

  var root = document.getElementById("prereg-countdown");
  if (!root) return;

  var openMsg = document.getElementById("prereg-open");
  var fields = {
    d: root.querySelector('[data-cd="d"]'),
    h: root.querySelector('[data-cd="h"]'),
    m: root.querySelector('[data-cd="m"]'),
    s: root.querySelector('[data-cd="s"]')
  };

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  // "Wed, Aug 5, 8:00 AM" in whatever timezone the visitor's device is set to.
  function stampLocal() {
    var el = document.getElementById("prereg-local");
    var tzEl = document.getElementById("prereg-tz");
    if (!el) return;
    var date = new Date(TARGET);
    try {
      el.textContent = new Intl.DateTimeFormat(undefined, {
        weekday: "short", month: "short", day: "numeric",
        hour: "numeric", minute: "2-digit"
      }).format(date);
      if (tzEl) {
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz) tzEl.textContent = "(" + tz + ")";
      }
    } catch (e) {
      el.textContent = date.toLocaleString();
    }
  }

  var timer = null;

  function tick() {
    var diff = TARGET - Date.now();

    if (diff <= 0) {
      root.hidden = true;
      if (openMsg) openMsg.hidden = false;
      if (timer) { clearInterval(timer); timer = null; }
      return;
    }

    fields.d.textContent = pad(Math.floor(diff / DAY));
    fields.h.textContent = pad(Math.floor((diff % DAY) / HOUR));
    fields.m.textContent = pad(Math.floor((diff % HOUR) / MINUTE));
    fields.s.textContent = pad(Math.floor((diff % MINUTE) / SECOND));
  }

  stampLocal();
  tick();
  timer = setInterval(tick, 1000);

  // Don't burn cycles on a hidden tab; resync the moment it comes back.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (timer) { clearInterval(timer); timer = null; }
    } else if (!timer && TARGET - Date.now() > 0) {
      tick();
      timer = setInterval(tick, 1000);
    }
  });
})();
