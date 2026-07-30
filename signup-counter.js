// YAKKAMON PORTAL — SIGNUP SLOT COUNTER
//
// This now fetches a near-live number from our own "counter worker" — a
// separate small Cloudflare Worker that checks yakkamon.com every 30
// minutes using a real headless browser (since their counter has no
// public API and is rendered by their own JavaScript). See the
// yakkamon-counter-worker project for that piece.
//
// FALLBACK_CLAIMED/FALLBACK_DATE below are only used if that live fetch
// fails for any reason (worker not deployed yet, offline, etc.) — the
// page always shows *something* correct-looking rather than breaking.

const COUNTER_WORKER_URL = "https://yakkamon-counter-worker.yakkamonworld.workers.dev/count";
const FALLBACK_CLAIMED = 35;
const FALLBACK_DATE = "Jul 30, 2026";
const LIVE_META_TEXT = "auto-refreshed every 30 min";
const FALLBACK_META_TEXT = "checked manually, not live";

(function () {
  function formatLiveDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleString("en-US", {
        month: "short", day: "numeric", year: "numeric",
        hour: "numeric", minute: "2-digit",
      });
    } catch {
      return iso;
    }
  }

  function applyValue(claimed, dateLabel, isLive) {
    document.querySelectorAll(".egg-counter").forEach((el) => {
      const valueEl = el.querySelector(".signup-count-value");
      const dateEl = el.querySelector(".signup-count-date");
      const metaEl = el.querySelector(".egg-counter-meta");
      if (valueEl) valueEl.textContent = claimed.toLocaleString();
      if (dateEl) dateEl.textContent = dateLabel;
      if (metaEl) {
        metaEl.innerHTML = metaEl.innerHTML.replace(
          isLive ? FALLBACK_META_TEXT : LIVE_META_TEXT,
          isLive ? LIVE_META_TEXT : FALLBACK_META_TEXT
        );
      }
    });
  }

  async function render() {
    applyValue(FALLBACK_CLAIMED, FALLBACK_DATE, false);

    try {
      const res = await fetch(COUNTER_WORKER_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("counter worker returned " + res.status);
      const data = await res.json();
      if (typeof data.claimed === "number") {
        applyValue(data.claimed, formatLiveDate(data.checkedAt), true);
      }
    } catch (err) {
      console.warn("Live signup counter unavailable, showing last-known value:", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
