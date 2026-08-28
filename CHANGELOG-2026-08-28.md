# Changelog — 28 August 2026

Batch: the official "Yakkamon — Regions" post (7 points).

## New
- `article-regions-explained.html` — slug `regions-explained`, category EVENT, dated Aug 28. Seven-point table, three-layer analysis (tiles → Regions → Chapters), the per-Region-inventory inference, five questions for the team. og:image falls back to og-default.png.
- `gameplay.js` — new system `logistics` ("Logistics Between Regions"), inserted after `regional-exploration`. 22 → 23 systems.
- `faq.js` — 4 new questions in the `gameplay` category: how-does-the-world-expand, what-regions-are-there, do-i-lose-my-old-region-when-i-unlock-a-new-one, can-i-use-resources-from-one-region-in-another. 81 → 85. FAQPage JSON-LD in `faq.html` regenerated (verified: all 81 existing entries unchanged byte-for-byte).

## Poster redrawn (same day, second batch)
- NEW `gameplay-poster-source.html` — the poster as self-rendering HTML (Google Fonts, flat CSS, a small script that splits the numbered panels into 10 level columns). Render at 1800px wide, full-page screenshot → `gameplay-poster.png`; deviceScaleFactor 2.222 → `gameplay-poster-full.png`.
- `gameplay-poster.png` replaced: 1800×1605 (was 1800×1373). `gameplay-poster-full.png` replaced: 4000×3567 (was 4000×3051).
- 19 panels, gameplay only. Dropped: "Playing It" (platform/login) and "Where to go next" (pre-reg/leaderboard); top chips for early-access date and sign-up count dropped. Evolutions folded into Breeding & Genetics. New: 13 Regions & Tiles, 14 Logistics. "Living world" split into 13/15. Not-confirmed panel gains tiles, Region unlock, transfer mechanic.
- `gameplay.html`: poster-rev line, img height 1605, alt text. `article-dev-stream-three-recap.html` + `article-gameplay-guide-live.html`: img height 1373→1605 and og:image:height 1070→1605 (dimension fix only, no dateModified bump — the old 1070 was already wrong).

## Rewritten / touched
- `gameplay.js` — `regional-exploration` rewritten ("Regions, Tiles & The World"); `your-base`, `storage-bins`, `endgame`, `seasonal-system` touched for tile/Region wording. Header revision note updated.
- `gameplay.html` — page-updated banner → 28 Aug; poster note says the poster is NOT redrawn; 7 new quick-reference rows; 3 new NOT CONFIRMED items (tile numbers, Region unlock condition, transfer mechanic).
- `gameplay-guide.html` — section 13 (#world) rebuilt with a 3-step "How the world expands" list and a logistics callout; Regions card, type-locking table row and base "Expand your land" card updated; same quick-reference rows and unknowns added.
- `article-after-the-race.html` — "Update, 28 Aug" info callout after Thesis two (tiles sit above the bin ceiling); dateModified → 2026-08-28.
- `article-economy-explained.html` — one "Read next" link added (nav-only, no dateModified bump).
- `posts.js` — entry at top. `search.js` — 6 News + 3 Gameplay + 4 FAQ entries, "81 answers" → 85, Regional Exploration entry retitled. `sitemap.xml` — new URL with lastmod (49 URLs). `README.md` — 23 systems.

## Deliberately not done
- Dated posts (dev-stream-three-recap "22 systems", updates-panel Grasslands piece) left alone per the editorial line.
- Footer LATEST NEWS column still static.

## Checks run
node --check on all .js · every JSON-LD parses · tag balance on 49 pages · sitemap parses · 36 posts ↔ 36 article files · 0 dangling ?system= refs · every page has a search entry · Playwright 375/1280: 0 horizontal overflow on the 7 touched pages.
