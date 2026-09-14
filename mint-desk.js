/* Mint Desk — the live numbers under the free-mint wave tiles.
   Renders into the #mint-desk block on index.html and pre-registration.html.

   DATA SOURCE: the yakkamon-mint-worker (separate repo, deployed by hand).
   Until WORKER is set to a real URL this script does NOTHING — the markup's
   own dashes stay on screen and the header keeps its static text. That is
   deliberate: a desk showing stale numbers during mint week is worse than a
   desk showing none.

   The worker serves JSON at /mint:
     { updated, everyMs, minted, total, owners,
       waves:{w1..w5}, os:{floor,offer,listed,vol24} }
   Any field the worker cannot fill comes back null and stays a dash here.

   The header reads "Updated HH:MM UTC · next in M:SS". The countdown runs off
   the worker's own `updated` stamp and its cron period, so it reflects when
   the DATA was refreshed, not when this page last asked. When it reaches zero
   the script fetches again; if the worker is late the line says "due now"
   rather than counting into negative numbers. */
(function () {
  "use strict";

  var WORKER = "https://yakkamon-mint-worker.yakkamonworld.workers.dev";
  var FALLBACK_EVERY = 600000;
  var MIN_GAP = 15000; // never refetch more often than this, whatever the clock says

  var root = document.getElementById("mint-desk");
  if (!root || !WORKER) return;

  var updatedAt = 0;   // worker's own stamp, ms
  var everyMs = FALLBACK_EVERY;
  var lastTry = 0;
  var loading = false;

  function el(name) { return root.querySelector("[data-md-" + name + "]"); }

  function setText(name, value) {
    var node = el(name);
    if (!node || value === null || value === undefined) return;
    // "" is meaningful for the USD sub-lines: it clears a stale conversion.
    if (value === "" && node.tagName !== "EM") return;
    node.textContent = value;
  }

  function price(v, symbol) {
    if (v === null || v === undefined || v === "") return null;
    var n = Number(v);
    if (!isFinite(n)) return null;
    var decimals = n >= 100 ? 0 : n >= 1 ? 2 : n >= 0.01 ? 4 : 6;
    var text = n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return symbol ? text + " " + symbol : text;
  }

  function count(v) {
    if (v === null || v === undefined || v === "") return null;
    var n = Number(v);
    return isFinite(n) ? n.toLocaleString("en-US") : null;
  }

  /* Rates arrive symbol-keyed ({RON: 0.0549, ETH: 2460}), so a value converts
     using whatever currency it is actually denominated in — floors and offers
     in RON, volume in ETH. An unknown symbol simply gets no dollar line. */
  function usd(v, symbol, rates) {
    if (!rates || v === null || v === undefined || v === "") return "";
    var rate = Number(rates[String(symbol || "").toUpperCase()]);
    if (!isFinite(rate) || rate <= 0) return "";
    var n = Number(v) * rate;
    if (!isFinite(n) || n <= 0) return "";
    return "\u2248 $" + n.toLocaleString("en-US", {
      minimumFractionDigits: n >= 1000 ? 0 : 2,
      maximumFractionDigits: n >= 1000 ? 0 : 2
    });
  }

  /* Both marketplaces render identically — same four fields, same units.
     `prefix` is "os" (OpenSea) or "rm" (Ronin Market). A venue with no data
     yet leaves every dash in place rather than printing zeros. */
  function venue(prefix, v, minted, rates) {
    if (!v) return;
    var sym = v.symbol || "RON";

    setText(prefix + "-floor", price(v.floor, sym));
    setText(prefix + "-floor-usd", usd(v.floor, sym, rates));

    setText(prefix + "-offer", price(v.offer, sym));
    setText(prefix + "-offer-usd", usd(v.offer, sym, rates));

    if (v.listed !== null && v.listed !== undefined) {
      setText(prefix + "-listed", count(v.listed) + (v.listedCapped ? "+" : ""));
      if (isFinite(minted) && minted > 0) {
        setText(prefix + "-listed-pct", ((v.listed / minted) * 100).toFixed(1) + "% of minted");
      }
    }

    // Volume is reported in ETH even where the collection prices in RON, so it
    // carries its own symbol and converts at its own rate.
    var volSym = v.vol24Symbol || sym;
    setText(prefix + "-vol24", price(v.vol24, volSym));
    setText(prefix + "-vol24-usd", usd(v.vol24, volSym, rates));
  }

  function clock(ms) {
    var total = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(total / 60);
    var s = total % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function renderHeader() {
    var stamp = el("updated");
    var next = el("next");
    if (!stamp || !next) return;

    if (!updatedAt) { next.textContent = ""; return; }

    var d = new Date(updatedAt);
    stamp.textContent =
      "Updated " + String(d.getUTCHours()).padStart(2, "0") + ":" +
      String(d.getUTCMinutes()).padStart(2, "0") + " UTC";

    var left = updatedAt + everyMs - Date.now();
    next.textContent = left > 0 ? "next in " + clock(left) : "due now";
  }

  function render(data) {
    if (!data) return;

    var stamped = Date.parse(data.updated);
    if (isFinite(stamped)) updatedAt = stamped;
    if (Number(data.everyMs) > 0) everyMs = Number(data.everyMs);

    var total = Number(data.total) || 10000;
    var minted = Number(data.minted);

    if (isFinite(minted)) {
      setText("minted", count(minted) + " / " + count(total));
      setText("left", count(Math.max(0, total - minted)));
      var bar = el("bar");
      if (bar) bar.style.width = Math.max(0, Math.min(100, (minted / total) * 100)) + "%";
    }
    setText("owners", count(data.owners));

    var waves = data.waves || {};
    ["w1", "w2", "w3", "w4", "w5"].forEach(function (id) {
      var w = waves[id];
      if (!w) return;
      var node = el(id);
      if (!node) return;
      var supply = w.supply === null || w.supply === undefined ? "REST" : count(w.supply);
      if (w.minted !== null && w.minted !== undefined) {
        node.textContent = count(w.minted) + " / " + supply;
      }
      node.classList.toggle("is-open", !!w.open);
    });

    var rates = data.rates || {};

    venue("os", data.os, minted, rates);
    venue("rm", data.ronin, minted, rates);

    renderHeader();
  }

  function load() {
    if (loading) return;
    loading = true;
    lastTry = Date.now();
    fetch(WORKER.replace(/\/$/, "") + "/mint", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(render)
      .catch(function () { /* leave whatever is on screen */ })
      .then(function () { loading = false; });
  }

  var timer = null;

  function tick() {
    renderHeader();
    var due = updatedAt ? updatedAt + everyMs : 0;
    if (Date.now() - lastTry >= MIN_GAP && (!updatedAt || Date.now() >= due)) load();
  }

  function start() {
    if (timer) return;
    tick();
    timer = setInterval(tick, 1000);
  }

  function stop() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  start();
})();
