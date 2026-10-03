# Changelog — October 3, 2026 — Early Access moved to the top of Home

Per Erdem: the EARLY ACCESS section on the Home page now sits at the very top,
first thing under the masthead. Built on main `01c3a91` (= the uploaded zip,
byte for byte; the leaderboard-retired batch is on main).

## Changed
- `index.html` — the `<main class="wrap">` block holding the EARLY ACCESS
  section head ("Full details →") and the `.milestone-card#early-access` moved
  from fourth position (between WHAT IS YAKKAMON? and the tile grid) to first,
  above the sign-up ticket. Page order is now: Early Access → sign-up ticket +
  counter → Latest News → What is Yakkamon? → destination tiles. Markup
  unchanged otherwise; no CSS changes — `.section-head` and `.prereg-ticket`
  both open with a 40px top margin, so the spacing under the masthead and
  between the two cards stays what it was.
- `README.md` — repo-layout line for `index.html` and the EARLY ACCESS
  MILESTONE CARD quirk note the new position.

## Not changed
- `sitemap.xml` — `/` already carries lastmod 2026-10-03 from today's earlier
  batch.
- `search.js` — the "Next milestone: early access launch" entry points at the
  card's anchor, which did not move. No text changed anywhere, so nothing for
  the chatbot to relearn; `posts.js` untouched → no hub rebuild, no push.

## Verified
Playwright over `file://` at 1280 and 390: Early Access card first, ticket
second, no horizontal overflow; every JSON-LD block parses; 0 internal link
targets missing.
