# Changelog — September 17, 2026 — The Mint Desk removed from Home and Early Access

Third batch of the day. The desk had already been trimmed to its Market band in
the close-out batch; this takes it off entirely, per Erdem.

## Removed
- The `#mint-desk` block from `index.html` and `pre-registration.html`. On Home
  the ticket now opens with the pre-registration countdown/sign-up card; on
  Early Access the ticket section itself was empty without the desk, so it is
  gone and the page flows page head → timeline → guide.
- The `mint-desk.js` script tag from both pages. The file is now referenced by
  nothing — deletable by hand on GitHub, like the `fm-*.webp` sprites.
- All desk CSS from `style.css` (`.md*` rules and the phone-only media block
  that held nothing else). 1301 → 1262 lines.
- The desk's search entry ("The Mint Desk — live market numbers") — **444
  entries** (was 445).
- The "live numbers on the Mint Desk" clause from the home timeline callout and
  the Mint Desk link from the completion article's what's-next list (the
  article's "as tracked by our Mint Desk" wording stays — that is how the
  day-by-day table was sourced, and it is historical).

## Changed
- `README.md` — file map marks `mint-desk.js` deletable; the "Change what The
  Mint Desk shows" task section is now "The Mint Desk is gone", recording that
  the **yakkamon-mint-worker** (cron every 10 minutes, KV, two secrets) now
  feeds nothing and can be paused or deleted in the Cloudflare dashboard
  whenever convenient — nothing on the site breaks either way — with the
  hard-won data-source lessons kept for any future revival; the MINT CLOSE-OUT
  quirk notes the desk followed the hero out the same day.

## Not changed
- `sitemap.xml` — `/` and `pre-registration.html` already carry lastmod
  2026-09-17 from the earlier batches today; no URLs added or removed.
- Chatbot sources never described the desk; nothing to update there.
- `posts.js` / `faq.js` untouched → no hub rebuild, no push notification.

## Verified
Playwright over `file://` at 1280/375 on both pages: no `#mint-desk`, no
leftover ticket on Early Access, no horizontal overflow, no JS errors. No
`mint-desk`/`data-md-` references remain outside changelogs and the deliberate
historical mentions in the completion article and its posts.js card.
