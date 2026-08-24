/* leaderboard.js — reads the deposit leaderboard from the worker and renders it.
 *
 * The worker holds the Dune API key and does the heavy lifting; this file only
 * ever sees a small JSON payload. Defensive habits throughout:
 * render nothing rather than something wrong, and never leave a half-drawn page.
 *
 * Point WORKER at your deployed worker before this does anything.
 */
(function () {
  "use strict";

  var WORKER = "https://yakkamon-leaderboard-worker.yakkamonworld.workers.dev";

  // Reuses the counter worker's existing $FLOWER price feed, the same one
  // the masthead ticker reads. If it fails the planner still works, it just
  // stops showing dollar costs rather than showing a wrong one.
  var PRICE_ENDPOINT =
    "https://yakkamon-counter-worker.yakkamonworld.workers.dev/flower";

  // Deposit windows: each starts 02:00 UTC, last closes 16 Nov 2026 01:59 UTC.
  // Week 3 (24 Aug) held at 2.8x after the week-2 deposit pause, so every
  // later window - and the 1.0x floor - lands one week later than first planned.
  var WINDOWS = [
    ["2026-08-10", 3.0], ["2026-08-17", 2.8], ["2026-08-24", 2.8],
    ["2026-08-31", 2.6], ["2026-09-07", 2.4], ["2026-09-14", 2.2],
    ["2026-09-21", 2.0], ["2026-09-28", 1.8], ["2026-10-05", 1.6],
    ["2026-10-12", 1.4], ["2026-10-19", 1.2], ["2026-10-26", 1.0]
  ].map(function (w) {
    return { start: Date.parse(w[0] + "T02:00:00Z") / 1000, mult: w[1] };
  });
  var CLOSES = Date.parse("2026-11-16T01:59:00Z") / 1000;

  // Bulk bonus, rated on each single transfer. Bonuses ADD to the multiplier.
  var TIERS = [
    { min: 0, max: 50, rate: 0 }, { min: 50, max: 500, rate: 0.10 },
    { min: 500, max: 5000, rate: 0.20 }, { min: 5000, max: 50000, rate: 0.40 },
    { min: 50000, max: Infinity, rate: 0.80 }
  ];
  var MIN_DEPOSIT = 5;
  var PAGE_SIZE = 100;

  // The published airdrop ladder. Ranks are inclusive, and the reward is what
  // you get for finishing anywhere INSIDE the range - so 51st and 250th both
  // take home an Echo, and 50th takes a Storm. The worker only knows where the
  // points lines sit; the names and the bands live here.
  var LADDER = [
    { from: 1,    to: 3,    name: "Storm + Echo" },
    { from: 4,    to: 10,   name: "Storm + Bloom" },
    { from: 11,   to: 50,   name: "Storm" },
    { from: 51,   to: 250,  name: "Echo" },
    { from: 251,  to: 500,  name: "Bloom" },
    { from: 501,  to: 2000, name: "Tide" },
    { from: 2001, to: 5000, name: "Rare Egg" },
    { from: 5001, to: null, name: "Not eligible", none: true }
  ];

  var data = null;
  var you = null;
  var price = null;
  var pick = null;
  var page = 0;
  var rows = [];          // the slice currently on screen
  var total = 0;          // how many trainers there are in all
  var pageBusy = false;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function fmt(n, dp) {
    return Number(n || 0).toLocaleString("en-GB", {
      minimumFractionDigits: dp || 0,
      maximumFractionDigits: dp || 0
    });
  }
  function shortAddr(a) { return a.slice(0, 10) + "\u2026" + a.slice(-6); }
  function say(msg, isError) {
    var n = $("lb-status");
    if (!n) return;
    n.textContent = msg || "";
    n.className = "lb-status" + (isError ? " err" : "");
  }
  function ago(iso) {
    var mins = Math.round((Date.now() - Date.parse(iso)) / 60000);
    if (!isFinite(mins) || mins < 0) return "just now";
    if (mins < 60) return mins + (mins === 1 ? " minute ago" : " minutes ago");
    var hrs = Math.round(mins / 60);
    if (hrs < 24) return hrs + (hrs === 1 ? " hour ago" : " hours ago");
    var days = Math.round(hrs / 24);
    return days + (days === 1 ? " day ago" : " days ago");
  }
  function chainChip(row) {
    if (row.base > 0 && row.ronin > 0) return '<span class="lb-chip both">Both</span>';
    if (row.base > 0) return '<span class="lb-chip base">Base</span>';
    if (row.ronin > 0) return '<span class="lb-chip ronin">Ronin</span>';
    return "";
  }

  function tierFor(a) {
    for (var i = TIERS.length - 1; i >= 0; i--) if (a >= TIERS[i].min) return TIERS[i];
    return TIERS[0];
  }
  function multiplierAt(ts) {
    var m = WINDOWS[0].mult;
    for (var i = 0; i < WINDOWS.length; i++) if (ts >= WINDOWS[i].start) m = WINDOWS[i].mult;
    return m;
  }
  // Smallest single deposit yielding at least `need` points at multiplier m.
  function amountFor(need, m) {
    var best = Infinity;
    for (var i = 0; i < TIERS.length; i++) {
      var t = TIERS[i], a = need / (m + t.rate);
      if (a >= t.min && a < t.max) best = Math.min(best, a);
      else if (a < t.min && t.min * (m + t.rate) >= need) best = Math.min(best, t.min);
    }
    return isFinite(best) ? Math.max(best, MIN_DEPOSIT) : null;
  }
  function usd(flower) {
    if (!price || !isFinite(price)) return "";
    var v = flower * price;
    return "\u2248 $" + v.toLocaleString("en-GB", {
      minimumFractionDigits: v < 100 ? 2 : 0, maximumFractionDigits: v < 100 ? 2 : 0
    });
  }
  function windowLabel(i) {
    var start = WINDOWS[i].start;
    var end = (i + 1 < WINDOWS.length) ? WINDOWS[i + 1].start : CLOSES;
    var d = function (ts) {
      return new Date(ts * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
    };
    return d(start) + " \u2013 " + d(end);
  }

  // Ranks are the join between the ladder above and whatever the worker sends,
  // so a renamed band on the server cannot silently change what the page says
  // you win. A band with no line yet is one nobody has filled.
  function bands() {
    if (!data) return [];
    var byRank = {};
    (data.thresholds || []).forEach(function (t) { byRank[t.rank] = t.points; });
    var players = data.players || 0;

    return LADDER.map(function (b) {
      var pts = b.none ? null : byRank[b.to];
      return {
        from: b.from,
        to: b.to,
        rank: b.to,
        name: b.name,
        none: !!b.none,
        points: (typeof pts === "number" && pts > 0) ? pts : null,
        // Told apart deliberately: an empty band because nobody has filled it,
        // versus a line the worker simply did not send.
        unfilled: !b.none && !pts && players < b.to,
        range: rangeLabel(b)
      };
    });
  }
  function rangeLabel(b) {
    return b.to ? fmt(b.from) + "\u2013" + fmt(b.to) : fmt(b.from) + "+";
  }
  // Everything a trainer can actually aim at: real bands with a known line.
  function pickable() {
    return bands().filter(function (b) { return !b.none; });
  }

  function renderStats() {
    var el = $("lb-stats");
    if (!el || !data) return;
    el.innerHTML =
      '<div class="lb-stat"><b>' + fmt(data.players) + "</b><span>Trainers depositing</span></div>" +
      '<div class="lb-stat"><b>' + fmt(data.flower.total) + "</b><span>$FLOWER deposited</span></div>" +
      '<div class="lb-stat"><b>' + fmt(data.flower.base) + "</b><span>via Base</span></div>" +
      '<div class="lb-stat"><b>' + fmt(data.flower.ronin) + "</b><span>via Ronin</span></div>";
  }

  function renderBands() {
    var el = $("lb-bands");
    if (!el || !data) return;
    var now = Math.floor(Date.now() / 1000);
    var m = multiplierAt(now);

    el.innerHTML = bands().map(function (b) {
      if (b.none) {
        return '<div class="lb-band out"><b>' + esc(b.name) + "</b>" +
          '<span class="rank">Ranks ' + b.range + "</span>" +
          '<div class="pts out">No airdrop</div></div>';
      }
      var line = b.points
        ? fmt(b.points) + " pts"
        : (b.unfilled ? "Not full yet" : "No line yet");
      var cost = "";
      if (b.points) {
        // What it would take from a standing start: one deposit, this week.
        var flower = amountFor(b.points, m);
        var dollars = usd(flower);
        cost = '<div class="cost">' + fmt(Math.ceil(flower)) + " $FLOWER" +
          (dollars ? "<span>" + dollars + "</span>" : "") + "</div>";
      }
      var ptsClass = b.points ? "" : (b.unfilled ? " open" : " unknown");
      return '<div class="lb-band"><b>' + esc(b.name) + "</b>" +
        '<span class="rank">Ranks ' + b.range + "</span>" +
        '<div class="pts' + ptsClass + '">' + line + "</div>" +
        cost + "</div>";
    }).join("");

    var note = $("lb-bands-note");
    if (note) {
      note.textContent = "The reward is whatever band you finish in, not a running " +
        "total \u2014 51st and 250th both take an Echo, 50th takes a Storm. Each points " +
        "figure is the line at the bottom rank of that band, and the $FLOWER figure is " +
        "what it would take to clear it from zero, deposited this week in one transfer at " +
        m.toFixed(1) + "\u00d7." + (price ? " Dollar amounts use the live $FLOWER price." :
        " The $FLOWER price feed is unavailable, so dollar amounts are hidden.");
    }
  }

  function renderTable() {
    var body = $("lb-rows");
    if (!body) return;

    if (!rows.length) {
      body.innerHTML = '<tr><td colspan="5" class="lb-empty">No deposits recorded yet.</td></tr>';
      var p0 = $("lb-pager");
      if (p0) p0.hidden = true;
      return;
    }

    var pages = Math.ceil(total / PAGE_SIZE);
    var pager = $("lb-pager");
    if (pager) {
      pager.hidden = pages < 2;
      var prev = $("lb-prev"), next = $("lb-next"), info = $("lb-page-info");
      if (prev) prev.disabled = page === 0 || pageBusy;
      if (next) next.disabled = page >= pages - 1 || pageBusy;
      if (info) info.textContent = "Ranks " + fmt(rows[0].rank) + "\u2013" +
        fmt(rows[rows.length - 1].rank) + " of " + fmt(total);
      var ri = $("lb-rank-input");
      if (ri) ri.setAttribute("max", String(total));
    }

    body.innerHTML = rows.map(function (r) {
      var mine = you && String(r.address).toLowerCase() === you;
      return '<tr class="' + (mine ? "you" : "") + '">' +
        '<td class="n lb-rank">' + r.rank + "</td>" +
        '<td class="lb-addr">' + esc(shortAddr(r.address)) + chainChip(r) + "</td>" +
        '<td class="n">' + fmt(r.points) + "</td>" +
        '<td class="n">' + fmt(r.flower) + "</td>" +
        '<td class="n">' + r.deposits + "</td></tr>";
    }).join("");

    var stamp = $("lb-updated");
    if (stamp && data) stamp.textContent = "Recalculated from Base and Ronin " + ago(data.generatedAt) + ".";
  }

  // Pages past the first are fetched on demand, so a 3,000-name board does not
  // land on every visitor who only ever looks at the top.
  function goToPage(n, quiet) {
    if (pageBusy) return Promise.resolve();
    var pages = Math.ceil(total / PAGE_SIZE);
    n = Math.min(Math.max(0, n), Math.max(0, pages - 1));
    var short = rows.length < PAGE_SIZE && total > rows.length;
    if (n === page && rows.length && !short) return Promise.resolve();

    pageBusy = true;
    renderTable();
    return fetch(WORKER + "/page?offset=" + (n * PAGE_SIZE) + "&limit=" + PAGE_SIZE)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (j) {
        if (j.error) throw new Error(j.error);
        page = n;
        rows = j.rows;
        total = j.total;
        pageBusy = false;
        renderTable();
        if (!quiet) {
          var head = $("top");
          if (head) head.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      })
      .catch(function () {
        pageBusy = false;
        renderTable();
        var info = $("lb-page-info");
        if (info) info.textContent = "Could not load that page. Try again.";
      });
  }

  function nextBandAbove(points) {
    if (!data) return null;
    // bands run from hardest to easiest, so walk them backwards
    var b = pickable();
    for (var i = b.length - 1; i >= 0; i--) {
      if (b[i].points && points < b[i].points) return b[i];
    }
    return null;
  }

  function renderMe(res) {
    var el = $("lb-me");
    if (!el) return;

    if (!res.found) {
      el.innerHTML = '<div class="lb-result"><b>Nothing found</b><p>No $FLOWER has reached that ' +
        "address on Base or Ronin yet. Check you have used your deposit address rather than your " +
        "wallet address &mdash; they are different.</p></div>";
      return;
    }

    you = String(res.address).toLowerCase();
    var pts = $("lb-points");
    if (pts && !pts.value) {
      pts.value = Math.round(res.points);
      var hint = $("lb-points-hint");
      if (hint) hint.textContent = "Filled in from your deposit address. Your real total is higher \u2014 streak and referral points are not on the blockchain.";
    }
    var next = nextBandAbove(res.points);
    var chase = next
      ? ' Next band up is <span class="lb-chase">' + esc(next.name) + "</span> at ranks " +
        next.range + ", about " + fmt(next.points - res.points) +
        " points away on deposits alone."
      : " That is inside the top band on deposits alone.";

    var target = Math.floor((res.rank - 1) / PAGE_SIZE);
    el.innerHTML = '<div class="lb-result"><b>Rank ' + fmt(res.rank) + "</b><p>" +
      fmt(res.points) + " deposit points from " + fmt(res.flower, 2) + " $FLOWER, out of " +
      fmt(res.outOf) + " trainers who have deposited." + chase +
      '</p><button class="lb-page-btn" id="lb-jump" type="button" data-page="' + target +
      '">See my place in the table</button></div>';

    var jump = $("lb-jump");
    if (jump) jump.addEventListener("click", function () { goToPage(target); });

    renderTable();
  }

  function drawPrizes() {
    var el = $("lb-prizes");
    if (!el || !data) return;
    el.innerHTML = pickable().map(function (b, i) {
      return '<button class="lb-prize" type="button" data-i="' + i + '" aria-pressed="' +
        (pick === i ? "true" : "false") + '"><b>' + esc(b.name) + "</b><span>Ranks " +
        b.range + "</span></button>";
    }).join("");
  }

  function weeksTable(need) {
    var now = Math.floor(Date.now() / 1000), base = null, rows = "";
    for (var i = 0; i < WINDOWS.length; i++) {
      var end = (i + 1 < WINDOWS.length) ? WINDOWS[i + 1].start : CLOSES;
      var a = amountFor(need, WINDOWS[i].mult);
      var isNow = now >= WINDOWS[i].start && now < end;
      var isPast = now >= end;
      if (isNow) base = a;
      var extra = (base && !isPast && !isNow)
        ? ' <span style="opacity:.7">(+' + fmt(Math.ceil(a - base)) + ")</span>" : "";
      rows += '<tr class="' + (isNow ? "now" : isPast ? "past" : "") + '"><td>' +
        windowLabel(i) + '</td><td class="n">' + WINDOWS[i].mult.toFixed(1) +
        '\u00d7</td><td class="n">' + fmt(Math.ceil(a)) + extra +
        '</td><td class="n">' + (usd(a) || "\u2014") + "</td></tr>";
    }
    return '<div class="lb-tablewrap"><table class="lb-weeks"><thead><tr><th>Deposit window</th>' +
      '<th class="n">Rate</th><th class="n">$FLOWER</th><th class="n">Cost</th></tr></thead><tbody>' +
      rows + "</tbody></table></div>";
  }

  function plan() {
    var out = $("lb-plan-out");
    if (!out || !data) return;

    var score = parseFloat(($("lb-points") || {}).value);
    if (!isFinite(score) || score < 0) {
      out.innerHTML = '<div class="lb-verdict"><b class="big">Enter your points first</b>' +
        "<p>Or look your deposit address up above and it will fill itself in.</p></div>";
      return;
    }
    if (pick === null) {
      out.innerHTML = '<div class="lb-verdict"><b class="big">Pick a band</b>' +
        "<p>Choose the band you are aiming for and this will work out the deposit.</p></div>";
      return;
    }

    var prize = pickable()[pick];
    if (!prize) return;
    var margin = parseFloat(($("lb-margin") || {}).value) || 1.35;
    var target = prize.points * margin;
    var need = target - score;
    var now = Math.floor(Date.now() / 1000);

    if (!prize.points) {
      out.innerHTML = '<div class="lb-verdict' + (prize.unfilled ? " good" : "") +
        '"><b class="big">' + (prize.unfilled ? "Band not full yet" : "No line for that band") +
        "</b><p>" +
        (prize.unfilled
          ? "Fewer than " + fmt(prize.rank) + " addresses have deposited, so " +
            esc(prize.name) + " at ranks " + prize.range + " is open today. That will not last, " +
            "and this estimate only counts deposit points."
          : "There is no points line for " + esc(prize.name) + " at ranks " + prize.range +
            " right now, so there is nothing honest to work back from.") + "</p></div>";
      return;
    }

    if (need <= 0) {
      out.innerHTML = '<div class="lb-verdict good"><b class="big">You are already there</b><p>Your ' +
        fmt(score) + " points clear the " + esc(prize.name) + " line at rank " + fmt(prize.rank) +
        " with room to spare. Holding it to the lock is the job now, not adding to it.</p></div>" +
        "<h3 class=\"lb-label\">If you want more headroom</h3>" +
        weeksTable(Math.max(1, target * 0.1));
      return;
    }

    var today = amountFor(need, multiplierAt(now));
    var costLine = usd(today);
    var half = 2 * ((today / 2) * (multiplierAt(now) + tierFor(today / 2).rate));
    var whole = today * (multiplierAt(now) + tierFor(today).rate);
    var splitNote = (whole - half > 1)
      ? "<p>Send it as <strong>one transfer</strong>. Split into two halves, the same money would earn about " +
        fmt(Math.round(whole - half)) + " points less, because the bulk bonus is judged on each transfer separately.</p>"
      : "";

    out.innerHTML = '<div class="lb-verdict"><b class="big">' + fmt(Math.ceil(today)) + " $FLOWER</b>" +
      (costLine ? '<span class="usd">' + costLine + " at today\u2019s price</span>" : "") +
      "<p>That is one single deposit this week to reach " + esc(prize.name) +
      " at ranks " + prize.range + ". You need about " +
      fmt(Math.ceil(need)) + " more points, and this week each $FLOWER is worth " +
      multiplierAt(now).toFixed(1) + "\u00d7 plus the bulk bonus.</p>" + splitNote + "</div>" +
      "<h3 class=\"lb-label\">What waiting costs</h3>" + weeksTable(need);
  }

  function loadPrice() {
    return fetch(PRICE_ENDPOINT, { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var v = j && (j.usd || (j["flower-2"] && j["flower-2"].usd));
        if (v && isFinite(v)) price = Number(v);
      })
      .catch(function () { /* no price, no dollar figures */ });
  }

  function load() {
    return fetch(WORKER + "/leaderboard")
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (j) {
        if (j.error) throw new Error(j.error);
        data = j;
        rows = j.top || [];
        total = j.players || rows.length;
        renderStats();
        renderBands();
        renderTable();
        drawPrizes();
        if (rows.length < PAGE_SIZE && total > rows.length) goToPage(0, true);
      })
      .catch(function () {
        // Nothing half-drawn: say the board is unavailable and leave it there.
        var body = $("lb-rows");
        if (body) body.innerHTML = '<tr><td colspan="5" class="lb-empty">' +
          "The board is not available right now. Try again shortly.</td></tr>";
        var bands = $("lb-bands");
        if (bands) bands.innerHTML = "";
        var pager = $("lb-pager");
        if (pager) pager.hidden = true;
        rows = [];
      });
  }

  function lookup() {
    var input = $("lb-addr");
    if (!input) return;
    var a = input.value.trim().toLowerCase();

    if (!/^0x[0-9a-f]{40}$/.test(a)) {
      say("That does not look like a deposit address. It should be 0x followed by 40 characters.", true);
      return;
    }

    say("Looking\u2026");
    fetch(WORKER + "/rank?address=" + encodeURIComponent(a))
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.error) throw new Error(j.error);
        renderMe(j);
        say("");
      })
      .catch(function () {
        say("Could not check that address right now. Try again shortly.", true);
      });
  }

  function init() {
    var go = $("lb-go");
    var input = $("lb-addr");
    if (go) go.addEventListener("click", lookup);
    if (input) input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); lookup(); }
    });

    var prizes = $("lb-prizes");
    if (prizes) prizes.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-i]");
      if (!b) return;
      pick = parseInt(b.getAttribute("data-i"), 10);
      var all = prizes.querySelectorAll("button");
      for (var i = 0; i < all.length; i++) {
        all[i].setAttribute("aria-pressed", i === pick ? "true" : "false");
      }
    });

    var planGo = $("lb-plan-go");
    if (planGo) planGo.addEventListener("click", plan);

    var prev = $("lb-prev"), next = $("lb-next");
    if (prev) prev.addEventListener("click", function () { goToPage(page - 1); });
    if (next) next.addEventListener("click", function () { goToPage(page + 1); });

    var rankInput = $("lb-rank-input"), rankGo = $("lb-rank-go");
    var jumpToRank = function () {
      if (!rankInput) return;
      var r = parseInt(rankInput.value, 10);
      if (!isFinite(r) || r < 1) return;
      if (total && r > total) r = total;
      goToPage(Math.floor((r - 1) / PAGE_SIZE));
    };
    if (rankGo) rankGo.addEventListener("click", jumpToRank);
    if (rankInput) rankInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); jumpToRank(); }
    });

    var jump = $("lb-jump");
    if (jump) jump.addEventListener("click", function () {
      var n = parseInt(jump.getAttribute("data-page"), 10);
      if (isFinite(n)) goToPage(n);
    });

    loadPrice().then(load);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
