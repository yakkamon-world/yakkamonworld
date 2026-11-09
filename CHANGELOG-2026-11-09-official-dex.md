# Changelog — November 9, 2026 — The official dex: 38 Yakkamon with number, type and rarity

Built on main `44aeed8` **on top of the same-day gameplay-systems batch**
(`CHANGELOG-2026-11-09-gameplay-systems-nov-3.md`). The delivered zip is CUMULATIVE — it carries
both batches, because they touch the same files (`gameplay.html`, `gameplay-guide.html`,
`gameplay.js`, `search.js`, `sitemap.xml`, `README.md`, the poster). Upload it whole; it supersedes
the earlier `yakkamonworld-gameplay-systems-nov-3-2026-11-09.zip`.

Source: Erdem's `Yakkamon Roster` folder — 38 official sprites (`001.png` … `060_Salu.png`) and
`Roster Details.xlsx` (dex number, name, type, rarity), described as the official Yakkapedia / game
roster data. Cited on the site as "the official Yakkapedia dex (as of November 9, 2026)".

## Decisions (Erdem, Nov 9)

- **Brazito stays UNCOMMON everywhere.** The dex — which uses only Common / Rare / Legendary — lists
  him as Rare; the Genesis NFT trait says Uncommon. The dex label is noted once each in the
  article, the rarity-tiers system, the roster note and the sheet footer; nothing else changes.
- **The 38 sprites become the roster grid**, replacing the single 26-portrait sheet. The six
  Genesis cards at the top of the Gameplay page keep their existing reveal art untouched.

## What the dex says (the numbers now on the site)

38 Yakkamon: **25 Common, 8 Rare, 5 Legendary**. **12 types named** of 13: Normal, Grass, Water,
Fire, Rock, Wind, Electric, Bug, Psychic, Spirit, Dark, Dragon. Species per type: Normal 5, Grass 5,
Rock 5, Water 4, Fire 4, Bug 4, Dragon 4, Psychic 3, Wind 1, Electric 1, Spirit 1 (Rare only), Dark 1
(Rare only). Numbers run #001–#060 with **22 gaps**. Names only for the Genesis six. New facts:
a **fifth Legendary, #056 (Psychic)**, outside the Genesis eggs and the airdrop; **eight Rare
species** where Genesis held only Malandrix; five types never confirmed before (Normal, Rock, Wind,
Bug, Dark). OUR READING, flagged everywhere it appears: Commons #001–#035, Rares #036–#055,
Legendaries #056–#060 → a 60-species roster with every Legendary already shown; the numbering
cycles through the types, so 7 of the 10 Common gaps sit where Wind / Electric / Fire entries would.

## New

- **`dex/`** — the 38 sprites, filenames as supplied (`NNN.png`, `NNN_Name.png` for the six).
- **`article-official-roster-dex.html`** (slug `official-roster-dex`, Official badge, Nov 9) — hero
  sheet, by-the-numbers cards, the full 38-card grid, the type table (species / C-R-L / dex numbers /
  named), "Three labels, not four" (rarity + Brazito + the fifth Legendary), "What the gaps say",
  what changed on the site, what the dex does not tell you. Anchors: `by-the-numbers`, `the-dex`,
  `types`, `rarity`, `structure`, `what-changes`, `caveats`.
- **`yakkamon-dex-38.png`** (1800×1891, the article's hero; built from the same list and the real
  sprites) and **`yakkamon-dex-38-og.png`** (1600×893 social card).
- **CSS** (`style.css`, appended block): `.dex-grid` / `.dex-card` / `.dex-art` (pixelated sprites
  on the green panel), rarity tints (`.r-legendary` cream, `.r-rare` lilac, `.r-uncommon` green),
  `.yk-chip.common` and nine new type chips (`.type-normal` … `.type-dark`), `.dex-legend`,
  phone rule (3 columns under 500px).
- `posts.js` — new `official-roster-dex` post (category official) → **OneSignal push fires**
  on upload, intended. `_redirects` +1 (72 rules). `sitemap.xml` 66 → **67 URLs**.
- `faq.js` 147 → **148 questions**: new `what-types-of-yakkamon-are-there`;
  `how-many-yakkamon-are-there` rewritten for the dex; `do-types-matter-in-battle` names the
  twelve. Hubs rebuilt (`node build-static-hubs.mjs` → news.html, index.html, faq.html) and the
  FAQPage JSON-LD rebuilt (`node build-faq-jsonld.mjs` → 148).
- `search.js` 544 → **553 entries** (nine dex entries: the article, the grid, types, the fifth
  Legendary, Rares, Brazito Rare-or-Uncommon, roster size, Grass species, the thin types) plus three
  refreshed excerpts (How many revealed, Your Yakkamon, Yakkamon in early access).
- `chatbot-official-posts.md` — tier-1 entry at the top: the full dex as data (every number with
  type and rarity, the type counts, the Brazito note stated neutrally), `Source:` the Yakkapedia.

## Changed

- **`gameplay.html`** — the `#roster` fold is now **THE OFFICIAL DEX**: note + 38-card grid (named
  cards link to `#genesis`) + legend; the `-26b` sheet is gone. Quick reference: "Yakkamon in early
  access" reworded (30 in the build vs 38 on the dex), "Types at launch" names the twelve, and five
  new rows (The official dex, Species per type, Rare species, Legendary species, Dex structure — our
  reading) → **115 rows**. Unknowns: new "Which thirty", "The type chart, part two" updated →
  **31**. `page-updated` leads with the dex. (Sitemap lastmod already 2026-11-09.)
- **`gameplay-guide.html`** — "The wider roster" figure → "The official dex — 38 Yakkamon" with
  the compact grid (named cards link to `#your-yakkamon`); type-locking paragraph names the twelve;
  the same table rows / unknown mirrored by script; `page-updated` leads with the dex.
- **`gameplay.js`** — creature-collecting (desc + the dex paragraph replacing "twenty-six shown";
  the type list settled), type-locking (Nov 9 update: the per-type bench depths and what they mean),
  rarity-tiers (three labels, eight Rares, five Legendaries, the Brazito call), genesis-legendaries
  (the fifth Legendary), endgame (thirty vs 38). Header comment carries the second-pass note.
- **`article-yakkamon-roster-revealed.html`** — new Nov 9 callout at the top of the update stack
  pointing to the dex article; `dateModified` + sitemap lastmod → 2026-11-09; the 18 → 26 history
  stays as the dated record. Its posts.js body gets one "superseded Nov 9" clause.
- **Poster** — panel 03's roster line is the dex; panel 07 (Type Locking) lists the twelve types;
  chips gain `13 TYPES · 12 NAMED` and `38 ON THE DEX`; red banner mentions the dex. Re-rendered
  (still 1800×3024 / 2438×4096, so no height changes on the embedding pages).
- `article-dev-stream-nov-3-graded.html` — its callout now says "Thirty systems" (was twenty-seven).
- `README.md` — layout entries for `dex/`, the two dex PNGs, and the `yakkamon-roster*` line (only
  the original 18-sheet is still referenced; 21/22/23/26/26b are deletable by hand); sitemap 67;
  the ROSTER COUNT quirk replaced by **THE OFFICIAL DEX** quirk (what travels together, the Brazito
  decision, our readings, the generated-grid rule).

## Verified

- `node --check` clean on gameplay.js, search.js, faq.js, posts.js; gameplay data still 30 systems.
- Every JSON-LD block on all 69 pages parses; every `?system=` deep link resolves; every internal
  link, anchor and image on the seven touched pages resolves (no broken sprites at either width);
  all 67 sitemap URLs exist; every posts.js slug has an article; the redirect line is present.
- Playwright at 1280 and 375 on gameplay.html, gameplay-guide.html, the dex article, the roster
  article, news.html, index.html, faq.html: no overflow, no JS errors, 38 dex cards on each grid.
- The dex sheet and poster inspected by eye (fonts embedded; `fonts.check` true).

## Open / flagged for Erdem

- **Sprite descriptions in the alt text are ours** (written from the art); "Unnamed" means the dex
  gives no name. If the team publishes names, the list in the batch script is the one place to edit
  before regenerating the three grids and the sheet.
- **Which 30 of the 38 are in early access** is not in the dex — the site says so rather than guess.
- The dex is cited as official Yakkapedia / game data per Erdem; no public URL for the 38-entry
  table was given, so the tier-1 entry's `Source:` is the Yakkapedia landing page.
- The Nano Banana 2 prompt for re-creating the roster sheet is delivered separately
  (`nano-banana-roster-prompt.md`, not in the repo); the real-sprite sheet `yakkamon-dex-38.png` is
  the accurate version and already on the site.
