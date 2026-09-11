// Free-mint wave clock: the live countdown and tile states on the Home and Early
// Access heroes (the `.fm-hero` block inside `.prereg-ticket`), plus the small
// "Opens in …" chips on any element carrying data-fm-in="<wave id>" (used in the
// hero tiles and in the wave tables on the guide, the whitelist article, the
// Early Access page and the FAQ). Chips are looked up on every tick, so tables
// that a page script re-renders after load (the FAQ) still get them.
//
// Times are the OFFICIAL opening times from yakkamon.com/whitelist (published
// September 10, 2026): Waves 1, 2 and 5 open at 00:00 UTC on their date, Waves 3
// and 4 at 08:00 UTC. Date.UTC(year, month0, day, hour, minute, second) — months
// are 0-based, so 8 = September and 9 = October. The reveal has a date but no
// published hour; 00:00 UTC is assumed for the clock only. The markup's
// data-fm-wave / data-fm-in ids must match the ids here.
//
// The clock rolls by itself: it counts to the next wave, then to the one after
// once that one opens, then to the reveal, then stops.

(function () {
  "use strict";

  var WAVES = [
    { id: "w1",     name: "Wave 1",  label: "Top Trainers",     at: Date.UTC(2026, 8, 14, 0, 0, 0) },
    { id: "w2",     name: "Wave 2",  label: "OG Trainers",      at: Date.UTC(2026, 8, 15, 0, 0, 0) },
    { id: "w3",     name: "Wave 3",  label: "The Ronin Wave",   at: Date.UTC(2026, 8, 16, 8, 0, 0) },
    { id: "w4",     name: "Wave 4",  label: "Yakkamon Hunters", at: Date.UTC(2026, 8, 17, 8, 0, 0) },
    { id: "w5",     name: "Wave 5",  label: "Public Trainers",  at: Date.UTC(2026, 8, 18, 0, 0, 0) },
    { id: "reveal", name: "The reveal", label: "Reveal",        at: Date.UTC(2026, 9, 14, 0, 0, 0) }
  ];
  // Display only: the docs don't say when Wave 5 ends, so the tile stops
  // reading "OPEN NOW" a day after it opens.
  var MINT_CLOSES = Date.UTC(2026, 8, 19, 0, 0, 0);

  var SECOND = 1000, MINUTE = 60000, HOUR = 3600000, DAY = 86400000;

  // No early return on "nothing found": the FAQ renders its chips only when the
  // visitor opens the free-mint topic, which can be long after this script ran.
  var heroes = document.querySelectorAll(".fm-hero");

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

  function findWave(id) {
    for (var w = 0; w < WAVES.length; w++) if (WAVES[w].id === id) return WAVES[w];
    return null;
  }

  // Tile / chip state for one wave at a moment: "next", "open", "done" or "".
  function waveState(wave, st, now) {
    if (st.next && wave === st.next) return "next";
    if (now >= wave.at) {
      // The most recently opened wave stays "open" until the next one opens —
      // except Wave 5, which we stop calling open once MINT_CLOSES has passed.
      var stillOpen = st.open === wave && !(wave.id === "w5" && now >= MINT_CLOSES);
      return stillOpen ? "open" : "done";
    }
    return "";
  }

  // "3d 20h" / "5h 12m" / "8m" — short relative time for the chips.
  function shortLeft(ms) {
    var d = Math.floor(ms / DAY), h = Math.floor((ms % DAY) / HOUR), m = Math.floor((ms % HOUR) / MINUTE);
    if (d > 0) return d + "d " + h + "h";
    if (h > 0) return h + "h " + m + "m";
    return Math.max(m, 1) + "m";
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

    var local = "";
    if (st.next && !toReveal) local = "That&rsquo;s <b>" + localStamp(st.next.at) + "</b> where you are &middot; official times from <a href=\"https://yakkamon.com/whitelist\" target=\"_blank\" rel=\"noopener\">yakkamon.com/whitelist</a>";
    else if (st.next) local = "The reveal is dated October 14 &mdash; no hour is published yet, so the clock assumes 00:00 UTC";

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
        var tile = tiles[t], wave = findWave(tile.getAttribute("data-fm-wave"));
        if (!wave) continue;
        var cls = waveState(wave, st, now);
        tile.classList.remove("next", "open", "done");
        if (cls) tile.classList.add(cls);
      }
    }

    // Generic chips: anywhere on the page, re-read each tick (see the note at the top).
    var chips = document.querySelectorAll("[data-fm-in]");
    for (var c = 0; c < chips.length; c++) {
      var chip = chips[c], cw = findWave(chip.getAttribute("data-fm-in"));
      if (!cw) continue;
      var cs = waveState(cw, st, now), text;
      if (cs === "open") text = "Open now";
      else if (cs === "done") text = cw.id === "reveal" ? "Revealed" : "Closed";
      else text = (cw.id === "reveal" ? "Reveal in " : "Opens in ") + shortLeft(cw.at - now);
      chip.textContent = text;
      chip.classList.remove("is-next", "is-open", "is-done");
      if (cs) chip.classList.add("is-" + cs);
    }

    // The site-wide mint ribbon's little status pill. Static fallback text
    // ("September 14–18") stands when JS is off or the script is missing.
    var ribbons = document.querySelectorAll("[data-fm-ribbon]");
    if (ribbons.length) {
      var rtext;
      if (!st.next) rtext = "Revealed";
      else if (toReveal) rtext = now < MINT_CLOSES ? "Wave 5 is open now" : "Mint week is over \u00b7 reveal Oct 14";
      else if (st.open) rtext = st.open.name + " is open now";
      else rtext = st.next.name + " opens in " + shortLeft(st.next.at - now);
      for (var r = 0; r < ribbons.length; r++) ribbons[r].textContent = rtext;
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
