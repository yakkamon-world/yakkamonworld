# Changelog — September 20, 2026 — Gameplay section rebuilt after the Sept 17 dev stream

## Why

The September 17, 2026 dev stream gave the first full tour of the battle system and a round of
build, feature and date news. The Gameplay page, its poster and the field guide still described
August's lane-based 3v3 battler, "50–60 Yakkamon at launch", and no dates beyond the docs. This
batch brings the whole gameplay section in line with the stream, keeping the official docs as the
record wherever the two disagree.

## Changed — gameplay content

- `gameplay.js` (still 26 systems; no slugs renamed)
  - `combat-system` rewritten: 70/30 auto battler, squad of three or four, placement in the scene,
    condition-triggered skills + chain reactions, live items (health potion, experimental blizzard
    pot), four battle stats (Health / Attack / Defense / Speed), AROC tank meta. The August material
    stays in a "what still holds / what's been overtaken" list (fixed lanes, lane initiative and
    preset skill loops marked overtaken; extraction respecs, MMR anti-bot, dragons/Bloom kept).
  - `creature-collecting`: 30 Yakkamon in the early-access build (26 shown, 4 unseen), four battle
    stats, Yakkamon Training Center tease.
  - `work-cycle`: Yakkamon walk to a bed, sleep, return — after battles too; too few beds = a queue.
  - `boost-stacking`: reconfirmed Sept 17 — same ability on two different creatures doesn't stack.
  - `your-base`: gym prototype working; a version ships before the arena.
  - `regional-exploration`: lands never reset.
  - `hunting`: still being prototyped; first hunt per docs (Chapter 0, one month after EA) vs stream
    (~6 weeks in); EA is a head start, not an exclusive Legendary window.
  - `arena-battles`, `economy-layers`, `endgame`: arena aimed at early next year; Chapter 0 timing
    shown docs-first with the stream's 6–8 weeks flagged.
  - `platform-access` retitled "Playing It — Platform, Access & Dates": build status (30 Yakkamon,
    36 levels, mobile testing, onboarding), dates with error bars, SFL crossovers.
  - `genesis-legendaries`: the mint's 68 Legendaries sit in clean eggs only (~0.75% per clean egg).
- `gameplay.html`: new "Updated September 20" line, poster revision note + alt text, roster caption
  (26 of 30), quick-reference table (new rows: squad size, battle stats, skills, live items, levels
  built, resting, gyms, early access, Chapter 0 & first hunt; August battle rows re-sourced as
  overtaken / not restated; "13 & Aug 21" source typo fixed), NOT CONFIRMED list refreshed.
- `gameplay-guide.html`: same table and unknowns, rewritten battle section, bed / gym / lands /
  hunting-prototype additions, 30-Yakkamon lede + caption, new "Updated" line, revision callout
  moved from Sept 2 to Sept 20.
- Poster: `gameplay-poster-source.html` — revision banner, chips (70/30 AUTO BATTLER, 30 YAKKAMON
  IN EARLY ACCESS), panel 19 rebuilt with a NEW SEP 17 tag (panel 16 loses its NEW SEP 11 tag),
  panels 3, 6, 10, 11, 13, 14, 17, 20, 21, 22 touched, footer "through September 17".
  Re-rendered: `gameplay-poster.png` 1800×2025, `gameplay-poster-full.png` 3641×4096. Image height
  and og:image:height updated on `gameplay.html`, `article-gameplay-guide-live.html`,
  `article-dev-stream-three-recap.html` (dimension fix only — no dateModified bump).

## Corrected

- The Sept 18 recap said our public roster showed 23 (seven unseen). The roster sheet has shown
  26 since Sept 13, so four are unseen. Fixed in `article-dev-stream-sept-17-recap.html`
  (dateModified → 2026-09-20) and its `posts.js` body (existing slug — no push fires).

## Search, FAQ, chatbot, sitemap

- `search.js` — 458 entries (was 449): 15 gameplay entries rewritten (incl. two that were stale
  before this batch: "Do I have to log in regularly?" claimed absence degrades plots; "Breeding &
  genetics" claimed no hard cap), 9 new (battle stats, squad size, skills, beds, land resets,
  gyms/arena, beta & early-access dates, hunting on day one, Training Center).
- `faq.js` — three answers updated (how-many-yakkamon-are-there, when-can-i-battle-other-players,
  is-combat-a-pure-simulation…). Still 137 questions. `faq.html` static copy + FAQPage JSON-LD
  rebuilt (`build-static-hubs.mjs`, `build-faq-jsonld.mjs`).
- Chatbot: reads `gameplay.js`, `faq.js` and the pages directly — the GitHub Action rebuilds its
  knowledge on push. `chatbot-digest.md` already carries the Sept 17 addendum; nothing hand-edited.
- `sitemap.xml` — lastmod 2026-09-20 on `gameplay.html`, `gameplay-guide.html`, `faq.html`,
  `article-dev-stream-sept-17-recap.html`. URL count unchanged.
- `README.md` — poster dimensions; two new Known-quirk entries (stream-vs-docs dates; roster
  30 vs 26) listing every spot to update together.
