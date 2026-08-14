// YAKKAMON PORTAL — LIVE $FLOWER PRICE
//
// Fills the small price readout under the social links in the masthead.
//
// WHERE THE NUMBER COMES FROM
// Our own worker, not CoinGecko directly. Same reasoning as the home-page
// trailer embed we pulled: we don't want every page load on every page
// touching a third party. The worker also caches, so a busy day doesn't
// walk us into CoinGecko's rate limit.
//
// The token is CoinGecko's `flower-2` (Flower, on Base / Polygon / Ronin).
// It is NOT `sunflower-land` — that entry is the old SFL token and trades at
// a completely different price. Getting this wrong publishes wrong numbers.
//
// Expected shape from /flower:
//   { usd: 0.1334, change24h: 17.6, checkedAt: "2026-08-14T21:00:00Z", stale: false }
// A raw CoinGecko simple/price response is also accepted, so the endpoint
// below can be pointed straight at CoinGecko in a pinch.

const FLOWER_ENDPOINT =
  "https://yakkamon-counter-worker.yakkamonworld.workers.dev/flower";

const REFRESH_MS = 90 * 1000;    // while the tab is visible
const CACHE_KEY = "yw-flower-price";
const CACHE_MS = 60 * 1000;      // this is a multi-page site — every click is
                                 // a fresh page load, so cache across them
const MAX_AGE_MS = 60 * 60 * 1000;  // older than this and we show nothing

(function () {
  const root = document.getElementById("flower-price");
  if (!root) return;

  const valueEl = document.getElementById("flower-price-value");
  const changeEl = document.getElementById("flower-price-change");
  let timer = null;

  // Sub-cent tokens need more decimals than dollar ones.
  function formatPrice(n) {
    const digits = n >= 1 ? 2 : n >= 0.01 ? 4 : 6;
    return "$" + n.toFixed(digits);
  }

  function formatChange(pct) {
    const arrow = pct >= 0 ? "\u25B2" : "\u25BC";
    const sign = pct >= 0 ? "+" : "\u2212";
    return `${arrow} ${sign}${Math.abs(pct).toFixed(1)}% 24H`;
  }

  // Accepts our worker's shape or a raw CoinGecko simple/price payload.
  function normalise(data) {
    if (!data || typeof data !== "object") return null;
    const coin = data["flower-2"];
    if (coin && typeof coin.usd === "number") {
      return { usd: coin.usd, change24h: coin.usd_24h_change, checkedAt: null };
    }
    if (typeof data.usd === "number") {
      return { usd: data.usd, change24h: data.change24h, checkedAt: data.checkedAt };
    }
    return null;
  }

  function tooOld(checkedAt) {
    if (!checkedAt) return false;   // worker didn't say; trust that it just checked
    const t = Date.parse(checkedAt);
    return Number.isFinite(t) && Date.now() - t > MAX_AGE_MS;
  }

  function render(price) {
    if (!price || typeof price.usd !== "number" || !isFinite(price.usd) || price.usd <= 0) return;
    if (tooOld(price.checkedAt)) return;   // stale enough to be misleading — stay hidden

    valueEl.textContent = formatPrice(price.usd);

    const pct = typeof price.change24h === "number" && isFinite(price.change24h)
      ? price.change24h
      : null;
    if (pct === null) {
      changeEl.textContent = "";
      changeEl.hidden = true;
    } else {
      changeEl.hidden = false;
      changeEl.textContent = formatChange(pct);
      changeEl.classList.toggle("down", pct < 0);
    }

    root.setAttribute(
      "aria-label",
      `$FLOWER is ${formatPrice(price.usd)}` +
        (pct === null ? "" : `, ${pct >= 0 ? "up" : "down"} ${Math.abs(pct).toFixed(1)} percent over 24 hours`) +
        ". View on CoinGecko."
    );
    root.hidden = false;   // only ever revealed once we have a real number
  }

  function readCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const c = JSON.parse(raw);
      if (!c || Date.now() - c.at > CACHE_MS) return null;
      return c.price;
    } catch {
      return null;
    }
  }

  function writeCache(price) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), price }));
    } catch {
      /* private mode / quota — the widget works fine without the cache */
    }
  }

  async function load() {
    try {
      const res = await fetch(FLOWER_ENDPOINT, { cache: "no-store" });
      if (!res.ok) return;                  // leave the widget as it was
      const price = normalise(await res.json());
      if (!price) return;
      writeCache(price);
      render(price);
    } catch {
      /* offline, blocked, worker down — show nothing rather than a dash */
    }
  }

  const cached = readCache();
  if (cached) render(cached);
  load();

  // Don't poll a tab nobody is looking at.
  function start() {
    if (timer === null) timer = setInterval(load, REFRESH_MS);
  }
  function stop() {
    if (timer !== null) { clearInterval(timer); timer = null; }
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { stop(); } else { load(); start(); }
  });
  if (!document.hidden) start();
})();
