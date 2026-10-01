# Changelog — October 1, 2026 — Free Mint off the Home page, timelines → Early Access milestone card

Built on main `e66cbef` (= the EP 22 upload + its auto rebuild), which matched the uploaded zip byte-for-byte.

With the free mint over, Early Access is the only dated milestone left — so the two-stop
Free Mint → Early Access timeline on Home and Early Access is gone, replaced on both pages by one
`.milestone-card`, and the Home page no longer mentions the free mint outside the news feed.

- `index.html` — the `.site-timeline` track, the blue "FREE MINT (September 14–18) — COMPLETE" callout
  and the green "EARLY ACCESS (Nov / Dec 2026)" callout are replaced by a single `.milestone-card`
  (`id="early-access"`): flag badge (the timeline's old goal marker, enlarged), "NEXT MILESTONE"
  eyebrow, "EARLY ACCESS LAUNCH" + a NOV / DEC 2026 pill, the green callout's copy, a meta line
  ("Exact date to be announced · the leaderboard locks one week before launch …") and a
  SEE THE SCHEDULE → button to `pre-registration.html#important-dates`. `timeline-countdown.js`
  no longer loaded. Also de-minted: `<title>`, `og:title`, `twitter:title` ("Pre-Registration, Points &
  Early Access" instead of "& Free Mint"), the three descriptions ("the road to early access" instead of
  "the September free mint"), and the Early Access tile ("Points, tiers, waves, and Genesis monsters").
  Kept on purpose: the news-feed row for the completion article (it is the news list) and the site-wide
  footer "Free mint guide" link (shared chrome on every page).
- `pre-registration.html` — the same `.milestone-card` (`id="next-milestone"`) in the timeline's place
  under the page head; its copy is page-specific (how the four waves enter, and that the leaderboard
  lock, airdrop and Chapter 0 are all measured from launch day — per docs.yakkamon.com/pre-registration/
  important-dates, re-checked today: "November / December — exact date to be announced"). Button jumps
  to `#important-dates`. `timeline-countdown.js` no longer loaded. Title/meta untouched — the page still
  carries its §7 free-mint history.
- `style.css` — the whole "Bare timeline" block (`.site-timeline`, `.st-*`, `.timeline-notes`, plus the
  dead `.lvl-full/.lvl-short` helpers) replaced by the milestone-card block: desktop is badge | copy |
  button in one row (button drops under the copy on tablets); ≤640px switches to a grid — badge + eyebrow/
  title on the first row, copy full-width, button full-width. Same shell as the other panels (white,
  5px ink border, 7px offset shadow). No other page used the timeline classes (checked: the two articles
  only have "The timeline" headings).
- `sitemap.xml` — `lastmod` → 2026-10-01 for `/` and `pre-registration.html` (neither page carries a
  JSON-LD `dateModified`; same handling as the Sep 18 batch). 63 URLs.
- `search.js` — one new Home entry ("Next milestone: early access launch" → `/#early-access`). 474 total
  (was 473). The launch-date questions were already covered (Important dates, When is early access?,
  When does the leaderboard lock?, When does Yakkamon launch?).
- `README.md` — file tree (index.html description; `timeline-countdown.js` marked orphaned/deletable);
  MINT CLOSE-OUT quirk no longer lists the home timeline among the completion callouts; BAD EGG COUNT quirk
  loses the `index.html` (timeline) spot; new EARLY ACCESS MILESTONE CARD quirk with the update list for
  the day the date is announced (pill + meta on both pages, §2 table, faq.js launch answers, search
  excerpts, home meta).
- Chatbot: both pages are tier-2 page sources read as static HTML, so the "Rebuild chatbot knowledge and
  static hubs" Action (triggers on `*.html`) ingests the card copy on push. The facts that left the Home
  callout (sold out in Wave 4, 973 Bad Eggs, Oct 14 reveal) still live in tier-1 `chatbot-official-posts.md`,
  the completion article, Early Access §2/§7 and the FAQ. `chatbot-knowledge.json` deliberately untouched.
- `posts.js` unchanged — no OneSignal push. `_redirects` unchanged — no new page.
- Orphaned, deletable by hand on GitHub: `timeline-countdown.js` (joins `mint-desk.js` and the `fm-*.webp`).

## Checks

`node --check` on every .js/.mjs; `build-static-hubs.mjs` reports all four hubs unchanged; no page references
the removed classes or script; style.css braces balance (737/737); sitemap parses; JSON-LD on both pages
parses; all 474 search entries resolve (the one pre-existing `/#ask` is a chatbot JS deep link); HTML tag
structure of both pages balanced; Playwright with the real Bangers/Nunito files embedded, at 375 / 768 / 1280,
on both pages — card renders, no horizontal overflow, no console errors.
