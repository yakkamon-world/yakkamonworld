# Changelog — 5 September 2026 — Gameplay page + poster revised for the Hunting post

Built on main 51e03cb (which already carries the news-labels and Hunting-FAQ batches).

## Gameplay page

- `gameplay.js` 25 → **26 systems**. NEW `hunting` — "Hunting: Grounds, Clock & Temperaments" —
  structured on the post's own line ("a place, a time and a temperament"): grounds as tiles on
  your Regions, the in-game clock as the timetable, passive roaming as a job, affectionate /
  greedy / angry encounters mapped onto the stream's ambient / aggressive spawns, wild
  Legendaries and Rares, depleting grounds, Seasons. `crafting-hunting` keeps its slug but is
  now "Crafting, Lures & Bait" (recipes, lures pick the type, bait wins monsters over, goods
  pay greedy ones, contract hunts) and links onward to `?system=hunting`. `seasonal-system`
  and `day-night-cycle` each gained a Hunting-post paragraph. Header revision note updated.
- `gameplay.html` — "Start with Hunting" banner link → `?system=hunting`; poster revision
  note, `<img>` height and alt text updated.
- `article-hunting-explained.html` — two nav-only links retargeted to the new system (no
  `dateModified` bump). `faq.js` — one link retargeted, "26 systems"; FAQPage JSON-LD in
  `faq.html` regenerated (unchanged count, 118).
- `search.js` — hunting entry → new system, new "Hunting: Grounds, Clock & Temperaments" and
  "Crafting, Lures & Bait" entries (380 total). `README.md` counts.

## Poster (gameplay-poster-source.html → PNGs)

- 21 → **22 panels, 12 columns**. Panel 17 rebuilt as **HUNTING** (tagged NEW 5 SEP, red
  border): a place / a time / you don't hunt alone / three temperaments / Legendaries & Rares
  roam the grounds / grounds deplete. New panel 18 **CRAFTING, LURES & BAIT**; Battle, Economy,
  Progression and Not Confirmed renumbered 19–22. Day & Night and Seasons cards carry the
  hunting-timetable lines; "Hunting rates" added to Not Confirmed (unknowns condensed to six
  cards). Revision banner, HUNTING chip (now red) and footer date updated; the 2 Sep NEW tags
  removed.
- `gameplay-poster.png` 1800×**1898** (was 1704). `gameplay-poster-full.png` **3885×4096** —
  the full render is now scaled so its longest side sits exactly at X's 4096px threshold
  (deviceScaleFactor = min(2.222, 4096/height)) rather than a fixed 4000 wide.
- Heights updated on `gameplay.html` and the two poster-embedding articles
  (`article-dev-stream-three-recap.html`, `article-gameplay-guide-live.html`, `og:image:height`
  too) — dimension fix only, no `dateModified` bump. Sitemap: gameplay/gameplay-guide/faq were
  already at 2026-09-05.
