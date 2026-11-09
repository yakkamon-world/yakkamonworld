# Changelog — November 9, 2026 — Gameplay systems pass for the November 3 dev chat + poster redraw

Built on main `44aeed8`. **Erdem's uploaded zip (`yakkamonworld-main.zip`) matched that commit
byte-for-byte**, so this batch applies to it cleanly. It is the follow-up the earlier November 9
batch (`CHANGELOG-2026-11-09-nov-3-dev-chat-graded.md`) flagged as open: that batch corrected one
system (`work-cycle`) and wrote the graded article; this one passes the whole gameplay section —
`gameplay.js`, `gameplay.html`, `gameplay-guide.html` and the poster — for everything the stream
showed. Source: the November 3, 2026 dev chat transcript (`Yakkamon_DLS_-_110326.docx`). Nothing
from it is on docs.yakkamon.com yet; every fact here is spoken, and the hedges are listed in the
README's new **NOV 3 DEV CHAT** quirk.

## New — three gameplay systems (27 → 30)

- **`trainer-level` — Trainer Level & the Command Cap** (group *The farm*, after The Work Cycle).
  The command cap (base trainer level + 4 in the demo, probably just trainer level at release);
  trainer XP from fighting (raids, dojo, gyms; PvP as the primary faucet, not in open beta); you
  cannot command a Yakkamon above your trainer level and traded Yakkamon keep level / stats /
  genetics / training; what it replaces (September's "no cap"); how it pulls against forced-sleep
  redundancy; leagues as Yakkamon-level caps; unpublished list.
- **`stats-skills` — Growth Tiers, Archetypes & Skill Pools** (group *Your Yakkamon*, after Your
  Yakkamon). Growth tier (stats per level, S shown), archetype (glass cannon / tank), leveling type
  (rapid); skills rolled from species / type / general pools with their own rarities, unlocking by
  level (Propagate at 51) and swapped in; rare type-pool skills locked to their type at first
  release with cross-type breeding later; the example kit's trigger counts; "busted" Legendary
  skills; rename / favorite; "advantage against".
- **`dojo-leagues` — The Dojo, Leagues & PvP Ladders** (group *Battles*, between The Battle System
  and Arena, Quests & Trading). Rookie (≤10) and Veterans (≤20) leagues with daily fights against
  beaten teams; gym challenges as the working PvP; gym = dojo "probably" (undecided); PvP as the
  primary faucet for trainer XP and $FLOWER; division ladders of ~100 + global top 100 +
  tournaments; no guilds / factions / friends list at launch.

`GP_GROUPS` in `gameplay-page.js` carries the three slugs; the board counts itself, but the
hand-written "27" spots on `gameplay.html` (section tag, note, jump bar, phone toggle fallback,
three meta descriptions) now read 30 / thirty.

## Changed — sixteen systems touched in `gameplay.js`

creature-collecting (pointer to the new labels and pools; rename / favorite), type-locking (**only
Grass types regenerate a node** — jobs are type-locked too), work-cycle (**job priority lists**
dragged above a line; **food buys stamina until a full bar forces sleep**; pointer to
`trainer-level`; one Stone ≈ four minutes with dev speed-ups), storage-bins (**upgrade doubles any
bin, up to 800**), monster-care (the red → yellow bar; **fruit is buffs, not food**; Kova's crew
needs no stamina food), utilities-auras (Kova's crew spends no stamina; Raigo may be buffed;
**Raigo + Kova ≈ half the time to the level-30 expansion**), breeding-genetics (**power creep by
design**; cross-type breeding for skills; the charm forge for commons), your-base (the starting
farm; **expansion six = crafted lumber + 1 Stone**, opening the hunting and safari zones; **Team
Rocco raids**; the dojo; **no moving trees / buildings**, decorations yes), regional-exploration
(hunting + safari zones at expansion six; Clover Meadow; "the level-30 expansion"),
crafting-hunting (**woody snack** bait; lumber and clay bricks as the crafted, tradable goods),
hunting (the first catch shown; our reading that common hunting is day one and the Chapter 0 hunt is
the Legendary event), combat-system (**2v1 beats 1v1**; **type > skill > stat > genetics**;
count-based triggers; UI being redone; the respec bullet now settled by the swap-in),
arena-battles (dojo pointer; PvP as faucet; **marketplace rules: charms for commons, 1:1 for Rares
and NFTs, tokens on-chain, everything else off**; traded Yakkamon keep stats; VIP; Season Zero
auctions; no guilds), economy-layers (**the coin barrier in the workshop**; anti-bot / anti-squat
reasoning; the specialize → trade → hunt → battle chain; VIP), endgame (**balancing policy**: heavy
for 3–6 months then new content over nerfs; power creep intentional; **OG perks as flex**; seasonal
exclusives; Season Zero auctions), platform-access (**floodgates end of November, maybe early
December, "not a promise", "within this year"**; "open beta" disowned as a term; PWA confirmed, no
app store; faceless at open, plaza later), genesis-legendaries (in play; **starter-egg order
Raigo > Kova > Salu recorded as the developer's unsure recollection**; tapping egg unsure),
seasonal-system (seasonal Yakkamon as the OG flex). Several `desc` lines updated to match. The
file's header comment carries the full revision note.

## `gameplay.html`

- `page-updated` line → **November 9, 2026**, naming the three new systems and the touched ones.
- **Quick reference: 86 → 110 rows.** The wrong row is gone — "Active Yakkamon cap: None" (the
  Nov 9 article batch fixed `work-cycle` but not this table) is now "Command cap". 24 rows added
  (commanding bought Yakkamon, trainer XP, job lists, forced sleep, fruit, storage upgrade, node
  regeneration, growth tier / archetype / leveling type, skill pools, type-locked rare skills,
  combat priority order, positioning, dojo leagues, PvP ladders, the coin barrier, trading
  Yakkamon, Legendary auras in play, expansion six, farm raids, moving trees, balancing policy, OG
  perks, VIP, starter egg) and four refreshed (Guilds → "Guilds, factions & social", PvP, Early
  access, Orientation → "Orientation & platform").
- **Not confirmed yet: 26 → 30.** Stat numbers, Skills and their triggers and The exact dates
  rewritten; new: The command cap at release, Forced sleep numbers, The dojo's numbers, The
  marketplace rules.
- Poster band: `poster-rev`, `alt` and `poster-note` rewritten; `<img height>` 2454 → **3024**.

## `gameplay-guide.html` (the phone field guide)

Mirrors the above without new numbered sections: `page-updated` → Nov 9; Your Yakkamon gets a
"Growth tiers, archetypes & skill pools" card grid; Type locking gets two table rows and a
jobs-are-type-locked paragraph; The work cycle gets a four-card "What the November 3 build added"
grid (command cap, can't command above level, job lists, food buys stamina); Storage bins, Looking
after them, Breeding, Your base, Hunting & crafting and Progression each get a dated callout; The
battle system's "Respeccing" card is settled and a "From the Nov 3 dev chat" card added; Arena,
quests & trading gets a six-card "dojo, leagues and ladders" grid and the Nov 3 dates line; the
quick-reference table and the unknowns list carry the same 110 rows / 30 items as `gameplay.html`
(copied from `gameplay.html` by the batch script, so the two could not drift). Sitemap `lastmod` → 2026-11-09 (the
page has no `dateModified`, per the house rule).

## Poster — `gameplay-poster-source.html` → both PNGs

- **26 panels** (was 23). New, tagged NEW NOV 3: **04 Growth, Archetypes & Skill Pools**, **09
  Trainer Level & the Command Cap**, **23 The Dojo, Leagues & Ladders**. All later panels
  renumbered; cross-references fixed (Genesis Six is 05, Crafting is 21, the dojo is 23).
- Touched: 03 (stats and skills cards), 07 Type Locking (Grass-only node regeneration row + a
  jobs-are-type-locked card; the "no cap" line is gone), 08 Work Cycle (job lists, food-buys-stamina,
  cap pointer), 11 Storage (up to 800), 12 Looking After Them (the bar; fruit as buffs), 14 Utilities
  (in play), 15 Breeding (charms; power creep), 16 Base (live on Nov 3), 20 Hunting (a catch, live),
  21 Crafting (the workshop is the coin barrier), 22 Battle System (the Nov 3 priority card; stale
  `.new` class dropped), 24 Economy (coin barrier; how Yakkamon trade), 25 Progression (balancing
  policy; OG perks), 26 Not Confirmed (three cards rewritten / added; dates). Red banner, a new
  COMMAND CAP = TRAINER LEVEL chip and the footer's "through" date updated. The Oct 14 NEW tag came
  off the Genesis Six, per convention.
- `.kv` border rule changed from the fifth-child trick to `:last-of-type` so the six-row Type
  Locking list renders cleanly.
- Rendered with the README recipe (fonts embedded from raw.githubusercontent.com/google/fonts):
  `gameplay-poster.png` **1800×3024** (was 1800×2454), `gameplay-poster-full.png` **2438×4096**
  (was 3004×4096). Heights fixed on the three embedding pages — `gameplay.html`,
  `article-gameplay-guide-live.html`, `article-dev-stream-three-recap.html` — including the two
  articles' `og:image:height`. Those two articles' own alt text and captions stay as published
  (dated pieces).

## `search.js` — 525 → 544 entries

19 new Gameplay entries (the three systems plus questions: a bought high-level Yakkamon, earning
trainer XP, where skills come from, grass-only regen tanks, Rookie / Veterans leagues, guilds and
friends, forced sleep, fruit, job lists, storage upgrades, the coin barrier, trading commons as
charms, type vs skills vs stats, nerfs and the balancing policy, moving trees, Kova + Raigo). 12
existing excerpts refreshed (Battle System, beta / early access dates, Progression, Two-Track
Economy, the poster, Your Yakkamon, Type locking, work cycle, storage bins, feeding, your base,
Arena Battles) and the existing command-cap entry repointed from `work-cycle` to `trainer-level`.

## Other files

- `sitemap.xml` — `gameplay-guide.html` lastmod → 2026-11-09 (`gameplay.html` was already 11-09
  from the morning batch). No new URLs (66). No other page's content changed, so no other bumps.
- `README.md` — layout line (30 systems; poster sizes), the add-a-system task (which "30" spots to
  bump), the poster recipe (26 panels), the COMMAND CAP quirk extended with the new spots, and a
  new **NOV 3 DEV CHAT — STREAM-ONLY FACTS AND HEDGED READINGS** quirk listing every hedge and where
  it lives.
- `posts.js` untouched → **no OneSignal push** from this upload. `faq.js` untouched (the morning
  batch added the command-cap answer; nothing here contradicts an FAQ answer). `_redirects`
  untouched (no new pages). `chatbot-knowledge.json` untouched — the Action rebuilds it on push and
  the builder reads `gameplay.js` and every root `*.html`, so the three new systems, the refreshed
  tables and the guide all land in the chatbot automatically; `chatbot-digest.md` section 0 already
  carries the whole stream from the morning batch.

## Answering the five checks

1. **Sitemap** — `gameplay-guide.html` lastmod bumped; `gameplay.html` already carried today's
   date; no URL added or removed.
2. **dateModified** — none to bump: `gameplay.html` and `gameplay-guide.html` have no
   `dateModified` by house rule (sitemap `lastmod` is the signal), and the two articles that embed
   the poster changed only in image height.
3. **Chatbot** — automatic via the Action (`gameplay.js` + root HTML are indexed); the stream itself
   is already section 0 of `chatbot-digest.md`.
4. **Search** — 19 entries added, 12 refreshed, one repointed (544 total).
5. **Internal links** — the three new systems link out to the graded article's `#command-cap`,
   `#stats`, `#pvp-faucet`, `#coin-barrier` and `#power-creep` sections and to each other; the
   touched systems cross-link to the new ones in eleven places; the guide links to all three
   `?system=` pages; the home of every "see also" was checked by script.

## Verified

- `node --check` clean on `gameplay.js`, `gameplay-page.js`, `search.js`; the gameplay data evaluates
  to 30 entries with every field present.
- Every `?system=` deep link in every HTML and data file resolves to a real slug; every `href` in
  `gameplay.js` resolves to a real file and anchor; every internal link and image on the four touched
  pages resolves; every JSON-LD block on all 68 pages parses; sitemap parses at 66 URLs.
- Playwright at 1280 and 375 on `gameplay.html` (plus the three new systems, work-cycle and
  arena-battles via `?system=`), `gameplay-guide.html` and both poster-embedding articles: no
  horizontal overflow, no JS errors; the board shows 30 chips in 7 groups, the reader promotes the
  lead-ins to subheadings (6 / 9 / 7 for the new systems), the toggle reads "All 30 systems", the
  table has 110 rows.
- Both PNGs inspected: 26 panels, three NEW NOV 3 tags, fonts correct, `fonts.check` true for
  Bangers and Nunito.

## Open / flagged for Erdem

- **Monster names are transcriptions** — Waddler, Spudling, A-Rock, Slowly, Team Rocco, "safari
  zone", "Clover Meadow", "woody snack" are written as heard. If the official spellings differ, the
  README quirk lists where they live.
- **No FAQ entries were added** (the command-cap answer from the morning covers the headline). Two
  natural candidates if wanted: "What is the dojo?" and "Can I trade common Yakkamon?" — each would
  mean rebuilding the hubs and the FAQ JSON-LD.
- **The two poster-embedding articles** still describe older revisions in their alt text and
  captions (as every poster re-render has left them); a one-line "now revised Nov 9" could be added
  to each if you'd rather they not read as stale.
- A video / X card for the three new systems was not made.
