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

  var WORKER = "yakkamon-mint-worker.yakkamonworld.workers.dev"; // e.g. "https://yakkamon-mint-worker.yakkamonworld.workers.dev"
  var FALLBACK_EVERY = 120000;
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
    if (node && value !== null && value !== undefined && value !== "") node.textContent = value;
  }

  function money(v) {
    if (v === null || v === undefined || v === "") return null;
    var n = Number(v);
    if (!isFinite(n)) return null;
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function count(v) {
    if (v === null || v === undefined || v === "") return null;
    var n = Number(v);
    return isFinite(n) ? n.toLocaleString("en-US") : null;
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

    var os = data.os || {};
    setText("floor", money(os.floor));
    setText("offer", money(os.offer));
    setText("listed", os.listed === null || os.listed === undefined ? null
      : count(os.listed) + (isFinite(minted) && minted > 0
        ? " \u00b7 " + ((os.listed / minted) * 100).toFixed(1) + "%" : ""));
    setText("vol24", money(os.vol24));

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
