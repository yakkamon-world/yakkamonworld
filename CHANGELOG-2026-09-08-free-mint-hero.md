# Changelog — 8 September 2026 — Free-mint hero (design 1, "Launch Board")

Replaces the static FREE MINT banner image on Home and Early Access with a live
wave board: the same ink card, a FREE MINT wordmark, the golden egg, one clock
and five wave tiles that light up in turn. Dates and supplies are the official
free-mint page's (https://docs.yakkamon.com/pre-registration/free-mint). Built on
main `0229c62`, which matched the uploaded zip after the roster-23 batch landed.

## New files
- `free-mint-hero.js` — the clock and tile states. `WAVES` at the top holds the six
  moments (Wave 1–5, reveal) as `Date.UTC(...)`. The docs give dates but no hours, so
  each wave is 00:00 UTC on its date and the hero says so under the clock. The clock
  rolls by itself: "WAVE 1 OPENS IN" → "WAVE 1 IS OPEN · WAVE 2 IN" → … → "WAVE 5 IS
  OPEN · REVEAL IN" → "MINT WEEK IS OVER · REVEAL IN" (from 19 Sep) → "REVEALED".
  Tiles get `.next` (yellow, NEXT tag), `.open` (green OPEN NOW), `.done` (dimmed,
  CLOSED). Pauses on hidden tabs. Verified at six simulated moments.
- `fm-bat.webp`, `fm-moth.webp`, `fm-pony.webp`, `fm-duck.webp`, `fm-egg.webp` —
  transparent sprites cut out of the old banner, 2× display size. Swap in place when
  new AI Studio sprites are ready (keep names and proportions).
- `CHANGELOG-2026-09-08-free-mint-hero.md` — this file.

## Changed files
- `index.html`, `pre-registration.html` — the `<a class="ticket-link">` banner inside
  `.prereg-ticket` replaced by the `.fm-hero` block (`id="mint-board"` — Early Access already uses `#free-mint` for §7): eyebrow, wordmark,
  egg, clock (reuses the site's `.countdown` / `.cd-unit` classes), `<noscript>` line,
  five tile links (Waves 1/2/4/5 → guide `#waves`, Wave 3 → `article-ronin-wave.html`),
  fine print (one mint per wallet per wave · reveal 14 Oct · whitelists 10 Sept · Ronin
  wallet + RON · "not a fee" → guide `#checklist`), READ THE GUIDE + OPEN THE LAUNCHPAD
  (marketplace.roninchain.com/launchpads). `free-mint-hero.js` added before `</body>`.
  Home keeps the access-code / SIGN UP panel under the board unchanged. All wave text
  is static HTML, so crawlers and the chatbot builder see the dates without JS.
- `style.css` — new "Free-mint hero" block (after the `.cd-cta` rules): layout, tile
  states via `::after`, sprites, 760px mobile rules (egg tucks into the corner, sprites
  hide, tiles go 2-up with Wave 5 full width). Sprite widths are written as
  `.fm-hero .fm-bat{…}` on purpose — they must beat `.prereg-ticket img{width:100%}`.
- `search.js` — two entries: "Free mint countdown — wave by wave" → `index.html#mint-board`
  and "Which free-mint wave is mine?" → `pre-registration.html#mint-board` (397 total).
- `README.md` — repo-layout lines (new script, sprites, banner files marked deletable),
  a "Change a free-mint wave time" task, a Known-quirks note that the block lives in two pages.

## Not changed
- `sitemap.xml` — Home and Early Access already carry `<lastmod>2026-09-08</lastmod>`
  from earlier batches today.
- `chatbot-knowledge.json` — rebuilt by the Action on push (index and pre-registration
  are tier-2 sources).
- `free-mint-banner.webp` / `-2x.webp` and `prereg-ticket.js` are now unreferenced by
  the hero (the banner files by nothing at all) — deletable from the repo by hand.
- `pre-registration.html` §7 wave table and the site timeline are untouched.
