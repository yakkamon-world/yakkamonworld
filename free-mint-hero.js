// Free-mint wave board: the live clock and tile states on the Home and Early
// Access heroes (the `.fm-hero` block inside `.prereg-ticket`).
//
// Dates come from the official free-mint page
// (https://docs.yakkamon.com/pre-registration/free-mint). That page gives a
// DATE per wave but no hour, so every wave is treated as opening at 00:00 UTC
// on its date and the hero says so. When the team publishes hours, change the
// Date.UTC(...) values below (hour and minute are the 4th and 5th arguments;
// months are 0-based, so 8 = September and 9 = October) — nothing else needs
// touching. The markup's data-fm-wave ids must match the ids here.
//
// The clock rolls by itself: it counts to the next wave, then to the one after
// once that one opens, then to the reveal, then stops.

(function () {
  "use strict";

  var WAVES = [
    { id: "w1",     name: "Wave 1",         at: Date.UTC(2026, 8, 14, 0, 0, 0) },
    { id: "w2",     name: "Wave 2",         at: Date.UTC(2026, 8, 15, 0, 0, 0) },
    { id: "w3",     name: "The Ronin Wave", at: Date.UTC(2026, 8, 16, 0, 0, 0) },
    { id: "w4",     name: "Wave 4",         at: Date.UTC(2026, 8, 17, 0, 0, 0) },
    { id: "w5",     name: "Wave 5",         at: Date.UTC(2026, 8, 18, 0, 0, 0) },
    { id: "reveal", name: "The reveal",     at: Date.UTC(2026, 9, 14, 0, 0, 0) }
  ];
  // Display only: the docs don't say when Wave 5 ends, so the tile stops
  // reading "OPEN NOW" a day after it opens.
  var MINT_CLOSES = Date.UTC(2026, 8, 19, 0, 0, 0);

  var SECOND = 1000, MINUTE = 60000, HOUR = 3600000, DAY = 86400000;

  var heroes = document.querySelectorAll(".fm-hero");
  if (!heroes.length) return;

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function localStamp(ts) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit"
      }).format(new Date(ts));
    } catch (e) {
      return new Date(ts).toLocaleString();
    }
  }

  function state(now) {
    for (var i = 0; i < WAVES.length; i++) {
      if (now < WAVES[i].at) return { next: WAVES[i], open: i > 0 ? WAVES[i - 1] : null };
    }
    return { next: null, open: null };
  }

  function setText(root, sel, html) {
    var els = root.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) els[i].innerHTML = html;
  }

  var lastTitle = "";

  function tick() {
    var now = Date.now();
    var st = state(now);
    var diff = st.next ? st.next.at - now : 0;
    var d = Math.floor(diff / DAY), h = Math.floor((diff % DAY) / HOUR),
        m = Math.floor((diff % HOUR) / MINUTE), s = Math.floor((diff % MINUTE) / SECOND);
    var toReveal = st.next && st.next.id === "reveal";

    var title;
    if (!st.next) title = "REVEALED &mdash; SEE WHAT YOU MINTED";
    else if (toReveal) title = (now < MINT_CLOSES ? "<b>WAVE 5 IS OPEN</b> &middot; " : "MINT WEEK IS OVER &middot; ") + "REVEAL IN";
    else if (st.open) title = "<b>" + st.open.name.toUpperCase() + " IS OPEN</b> &middot; " + st.next.name.toUpperCase() + " IN";
    else title = "<b>" + st.next.name.toUpperCase() + "</b> OPENS IN";

    var local = st.next
      ? "That&rsquo;s <b>" + localStamp(st.next.at) + "</b> where you are &middot; wave hours aren&rsquo;t published yet, so the clock assumes 00:00 UTC"
      : "";

    for (var k = 0; k < heroes.length; k++) {
      var hero = heroes[k];
      if (title !== lastTitle) setText(hero, "[data-fm-title]", title);
      setText(hero, "[data-fm-local]", local);
      var cd = hero.querySelector("[data-fm-countdown]");
      if (cd) {
        cd.hidden = !st.next;
        setText(hero, '[data-fm="d"]', pad(d));
        setText(hero, '[data-fm="h"]', pad(h));
        setText(hero, '[data-fm="m"]', pad(m));
        setText(hero, '[data-fm="s"]', pad(s));
      }
      var tiles = hero.querySelectorAll("[data-fm-wave]");
      for (var t = 0; t < tiles.length; t++) {
        var tile = tiles[t], id = tile.getAttribute("data-fm-wave"), wave = null;
        for (var w = 0; w < WAVES.length; w++) if (WAVES[w].id === id) wave = WAVES[w];
        if (!wave) continue;
        var cls = "";
        if (st.next && wave === st.next) cls = "next";
        else if (now >= wave.at) {
          // The most recently opened wave stays "open" until the next one opens —
          // except Wave 5, which we stop calling open once MINT_CLOSES has passed.
          var stillOpen = st.open === wave && !(id === "w5" && now >= MINT_CLOSES);
          cls = stillOpen ? "open" : "done";
        }
        tile.classList.remove("next", "open", "done");
        if (cls) tile.classList.add(cls);
      }
    }
    lastTitle = title;
  }

  var timer = null;
  function start() { if (!timer) { tick(); timer = setInterval(tick, 1000); } }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  start();
  // Don't burn cycles on a hidden tab; resync the moment it comes back.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });
})();
