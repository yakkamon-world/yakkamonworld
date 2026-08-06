// YAKKAMON PORTAL — SIGNUP COUNTER
//
// Reads from our counter worker, which now calls Yakkamon's own JSON endpoint
// directly (no headless browser, no Browser Rendering quota), so the number
// refreshes every few minutes instead of hourly.
//
// Shape returned by /count:
//   claimed, total, tier, tierUntil, remainingInTier, remainingOverall,
//   tiers[], checkedAt, changedAt, ageMinutes, stale
//
// NOTE ON "remaining": their API's `remaining` counts slots left in the
// CURRENT TIER, not overall — claimed + remaining = tierUntil. The worker
// splits these into remainingInTier / remainingOverall so this page can't
// accidentally imply only a few thousand slots exist in all of Season 0.

const COUNTER_WORKER_URL = "https://yakkamon-counter-worker.yakkamonworld.workers.dev/count";

// Only shown if the worker is unreachable.
const FALLBACK_CLAIMED = 44797;
const FALLBACK_DATE = "Aug 6, 2026";

const META_LIVE     = "auto-refreshed every few minutes";
const META_STALE    = "last successful check";
const META_FALLBACK = "last known figure, not live";

(function () {
  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("en-US", {
        month: "short", day: "numeric", year: "numeric",
        hour: "numeric", minute: "2-digit",
      });
    } catch {
      return iso;
    }
  }

  function setText(root, sel, value) {
    const el = root.querySelector(sel);
    if (el) el.textContent = value;
  }

  // `live` = we got a fresh reading from the worker just now. The compact
  // strip on the pre-registration page always renders (it labels itself
  // honestly when the data is old); the home-page hero has no room for
  // that caveat, so it stays hidden entirely unless the number is current.
  function apply({ claimed, tier, remainingInTier, dateLabel, metaText, live }) {
    // Two presentations of the same data: the compact strip on the
// pre-registration page and the big hero counter on the home page.
    document.querySelectorAll(".egg-counter, .trainer-counter").forEach((el) => {
      if (el.classList.contains("trainer-counter")) {
        el.hidden = !live;
        if (!live) return;   // nothing to fill in — it isn't on screen
      }

      setText(el, ".signup-count-value", claimed.toLocaleString());
      setText(el, ".signup-count-date", dateLabel);
      setText(el, ".signup-count-status", metaText);

      // Tier line is optional — hidden entirely unless we have real data,
      // so it never sits there showing a dash.
      const tierEl = el.querySelector(".signup-count-tier");
      if (!tierEl) return;
      if (tier && typeof remainingInTier === "number") {
        setText(el, ".signup-tier-name", tier);
        setText(el, ".signup-tier-left", remainingInTier.toLocaleString());
        tierEl.hidden = false;
      } else {
        tierEl.hidden = true;
      }
    });
  }

  async function render() {
    // Paint the fallback first so there's never a blank or "0" flash.
    apply({ claimed: FALLBACK_CLAIMED, dateLabel: FALLBACK_DATE, metaText: META_FALLBACK, live: false });

    try {
      const res = await fetch(COUNTER_WORKER_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("counter worker returned " + res.status);
      const d = await res.json();
      if (typeof d.claimed !== "number") return;

      apply({
        claimed: d.claimed,
        tier: d.tier,
        remainingInTier: d.remainingInTier,
        dateLabel: formatDate(d.checkedAt),
        metaText: d.stale ? META_STALE : META_LIVE,
        live: !d.stale,
      });
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
