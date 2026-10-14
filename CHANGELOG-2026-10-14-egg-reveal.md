# Changelog — October 14, 2026 — The Genesis egg reveal: news article, Gameplay page redesign, poster, FAQ, chatbot

## Why

The Genesis eggs opened on October 14, 2026. All 11,265 (10,000 minted on Ronin plus 1,265 airdropped on
October 13) hatched into one of six Yakkamon — Raigo, Ondi, Kova and Salu (the four Legendary dragons the
docs had called Storm, Echo, Ghost and Bloom), Malandrix (Rare, Psychic) and Brazito (Uncommon, Fire,
10,316 of the eggs) — or, for 831 Bad Eggs, into nothing. The team opened the eggs on a reveal stream
(Adam, Craig, Matt) and used it to move the dates (internal beta the week of October 19, early access aimed
at the end of November with two to three weeks' notice), the battle bench (three on the field plus up to
three in reserve), the type list (a "spirit" type instead of ghost), the roadmap for unique stats (not on
the NFTs yet; a separate reveal closer to launch) and the fan art competition (closed, winners posted).

This batch adds the news article, redesigns the Gameplay page around a visual Genesis section, rewrites
the Genesis system, re-renders the poster with a new panel, and wires the reveal into the FAQ, search, the
chatbot, the sitemap, the related articles and the README. Built on main `343c679`, which matched the
uploaded zip byte-for-byte before edits.

**Sources, and one warning.** The counts are our own census of the official NFT metadata
(`api.yakkamon.com/metadata/<id>`, all 11,265 tokens, read after the reveal); they match the
marketplace's trait filters to the egg and the figures supplied for the batch. The abilities and total
supplies are the official Yakkapedia. The picture-to-name mapping comes from each NFT's own description
(e.g. Brazito "a small orange hothead in a blue cape") — the docs' Yakkapedia showed the six pictures
against the wrong names on reveal day, so its images were deliberately not used.

## New

- `article-egg-reveal.html` — "Welcome to the Brazito Army: The Genesis Eggs Are Open, Six Yakkamon Have
  Names, and Early Access Is Aimed at Late November" (slug `egg-reveal`, category `official`, Oct 14, 2026,
  `dateModified` 2026-10-14). Chrome copied from the fan-art article. Hero: our own "Floor price / I am the
  floor" artwork. Sections (deep-link ids used by search): `#the-six` (six cards with the reveal art, rarity
  and type chips, count + 1-in-N odds, ability, a paraphrase of each NFT's description), `#by-the-numbers`
  (the original count table), `#minted-vs-airdropped` (token ranges 1–10,000 vs 10,001–11,265),
  `#odds` (per minted egg / per clean minted egg / per airdropped egg / whole collection; the seeded draw,
  first Rare-or-better #114, first Legendary #157), `#bad-eggs` (831 vs 973), `#abilities` (what each does;
  "no ability yet"; no unique stats yet), `#names` (working → real names, lore, the cosmetic egg colors),
  `#check` (refresh metadata / the metadata endpoint / sniping), `#the-stream` (twelve points), `#what-it-means`
  (six readings, ours), `#what-to-do`, `#questions` (six), source-and-standing callout, Read next, money note.
- `yakkamon-raigo.png`, `-ondi`, `-kova`, `-salu`, `-malandrix`, `-brazito` — 480×480 sprites (the reveal
  art, © Thought Farm; the four Legendaries are exact 2:1 downsamples of the 960px sources).
- `egg-reveal-floor-price.jpg` (1600×893) and `egg-reveal-og.jpg` (1200×630) — the article's hero and card.
- `CHANGELOG-2026-10-14-egg-reveal.md` — this file.

## Changed — the Gameplay page (redesign)

- `gameplay.html` rebuilt around navigation. Order is now: page head (new title/meta, "Updated October 14"
  line) → a sticky **jump bar** (The Yakkamon · 27 Systems · One-Page Poster · Quick Reference · Not
  Confirmed · Field Guide) → **THE GENESIS YAKKAMON** (`#genesis`: five stat tiles — 11,265 / 10,316 / 68 /
  50 / 831 — and six cards with picture, chips, count, odds, supply and ability) → the roster sheet folded
  into "THE WIDER ROSTER" (`#roster` is now the `<details>` itself, so old `gameplay.html#roster` links open
  it) → **EVERY SYSTEM, EXPLAINED** (`#systems`: the 27 systems, sidebar now grouped under seven headings
  and sticky/scrollable on desktop, replaced by a `<select>` picker under 760px) → the poster band → **QUICK
  REFERENCE** (`#numbers`: a filter box plus the 86-row table inside a closed fold; typing opens it) → **NOT
  CONFIRMED YET** (`#unknowns`: 26 items inside a closed fold). Folds open automatically when a hash target
  sits inside them and when reached from the jump bar. Quick reference: 10 new rows (the reveal, minted vs
  airdropped, realized odds, Bad Eggs, Genesis types, unique stats, skills per individual, the trainer and
  eve-of-reveal airdrops, beta testing, creature sounds) and 7 rewritten (early access count, squad size,
  types, supply, abilities, stacking, Legendaries in the collection, early access). Unknowns: 3 new (lifted
  Bad Egg flags, the rest of the airdrop, the dragons' lore) and 6 rewritten.
- `gameplay-page.js` — `GP_GROUPS` (sidebar grouping; unlisted slugs render under "More"), the phone
  picker, the sticky offset (`--gp-top`), jump-bar active state (IntersectionObserver), fold-opening on
  load/hashchange/jump click, the quick-reference filter, and a scroll-into-view after a sidebar click when
  the panel top has scrolled away.
- `style.css` — `.yk-*` (cards, chips, stat tiles; shared by the article, the Gameplay page and the field
  guide), `.gp-jump`, `.gp-fold`, `.gp-filter`, `.gp-select`, `.sidebar-group`, the sticky sidebar rule
  scoped to `.gp-systems`, and `.gp-extra{scroll-margin-top}` computed from `--gp-top`.
- `gameplay.js` (27 systems, no slugs renamed): `genesis-legendaries` rewritten (table with the six sprites,
  counts, abilities, total supply and where the copies go; minted vs airdropped; the 1-in-146; who is
  airdropped which; what the abilities mean; the names; what is unpublished; the Yakkapedia warning);
  `creature-collecting` (six named; generated skills; no stats on the NFTs yet; named types),
  `utilities-auras` (real names; "no ability yet"), `rarity-tiers` (the tiers as revealed), `hunting`
  (what hunting is saved for), `combat-system` (3 + up to 3; Oct 14 additions), `platform-access` (the new
  dates; animation and 168 sounds). Header comment carries the October 14 block.
- `gameplay-guide.html` — "Updated October 14" line; `#your-yakkamon` gains a six-card "The Genesis six"
  grid above the roster figure (caption: the green dragon is Salu) and the type/stats cards pick up the
  stream; `#rarity` table renamed (Raigo/Ondi/Kova/Salu + Malandrix + Brazito rows, "In the Genesis eggs"
  column) and the Tide callout replaced by "The working names are gone"; `#combat` bench line; the PvP
  callout's dates; quick reference and unknowns mirrored from `gameplay.html`.
- Poster: `gameplay-poster-source.html` — new panel **04 THE GENESIS SIX** (tag NEW OCT 14; six rows with the
  sprites, name/working name/rarity/type, count · odds · total supply, ability; Bad Eggs, minted vs
  airdropped, not-on-the-NFTs cards); panels 05–23 renumbered; panel 03 (six named, generated skills, named
  types), 12 Utilities (real names, "working names retired"), 18 Hunting (what hunting is saved for), 20
  Battle (3+3; Oct 14 underneath; the NEW SEP 24 tag removed), 23 Not Confirmed (type names, no stats on the
  NFTs, 3+3, the dates, the reveal's loose ends); revised banner, chips (+"6 Genesis Yakkamon revealed"),
  footer date. PNGs re-rendered: `gameplay-poster.png` 1800×2454, `gameplay-poster-full.png` 3004×4096
  (height attribute updated on `gameplay.html`, `article-gameplay-guide-live.html`,
  `article-dev-stream-three-recap.html`; the two articles' stale `og:image:height` 2025 → 2454).

## FAQ, search, chatbot, sitemap, redirects, links

- `faq.js` — 146 questions (was 142). New in the free-mint topic: `what-did-the-genesis-eggs-reveal`,
  `who-are-raigo-ondi-kova-salu-malandrix-and-brazito`, `why-did-my-egg-reveal-a-brazito`,
  `do-the-revealed-yakkamon-have-stats-and-abilities-yet`. Rewritten or settled: `what-is-a-bad-egg` (831),
  `what-are-the-extra-1-500-hidden-eggs` (1,265 went out), `how-many-yakkamon-are-there` (six named),
  `how-do-i-enter-the-yakkamon-fan-art-competition` (closed; question reworded), the Legendary table in
  `what-are-the-four-genesis-legendaries`, `what-happened-to-tide`, `is-storm-better-than-the-others`,
  `are-they-just-collectibles-or-do-they-actually-do`, `when-does-the-game-actually-come-out` (Oct 14
  update), `is-there-a-hard-date`, `do-i-get-to-see-what-i-minted` (now "How do I see what my egg
  revealed?"), `what-are-my-odds-of-a-legendary-in-the-free-mint` (realized odds first), `what-do-i-do-with-
  it-once-i-ve`, `where-do-i-buy-or-sell-a-minted-yakkamon`; the free-mint topic intro. `faq.html` static copy
  + FAQPage JSON-LD rebuilt (`build-static-hubs.mjs`, `build-faq-jsonld.mjs`).
- `search.js` — 516 entries (was 490): 26 new at the top (the article plus fourteen question-phrased News
  entries, the Gameplay cards section, four "What does Raigo/Ondi/Kova/Salu do?" entries, the field-guide
  section, and five FAQ entries); 22 excerpts refreshed (fan art ×3, Bad Eggs ×2, extra eggs, beta/early
  access, Genesis Legendaries, Utilities & Auras, Storm/Bloom, the poster, Yakkamon names, roster ×3, Tide,
  what the Legendaries do, stacking, bench ×2, four Legendaries, Storm better, odds).
- `chatbot-official-posts.md` — tier-1 "The Genesis egg reveal" entry at the top (Source: the collection page;
  every count, name, ability and supply, how to check an egg, the Bad Egg change, the airdrop ladder); the
  Bad Eggs entry settled to 831; the fan-art entry marked closed with the results; the sold-out entry's
  "what happens next" paragraph settled. `chatbot-digest.md` — new section 0 (the October 14 stream, 18
  bullets); the September 17 addendum becomes 0b; header and source list updated. `chatbot.js` — starter
  chips: new "Egg reveal" topic, "Free mint" reworded to past tense, "Legendaries" asks for the real names,
  and the stale most-asked "When is the free mint…" became "What did the Genesis eggs reveal?".
  `chatbot-knowledge.json` NOT touched — the Action rebuilds it on push.
- `posts.js` — new top entry (53 posts). **A new slug means the OneSignal news push fires on upload —
  intended** (dated today, inside the 3-day rail). `index.html`, `news.html` — static hubs rebuilt.
- `sitemap.xml` — 65 URLs (was 64): the article added (lastmod 2026-10-14, monthly, 0.7); lastmod →
  2026-10-14 on `/`, `news.html`, `faq.html`, `gameplay.html`, `gameplay-guide.html`, `community.html`,
  `pre-registration.html`, and the three dated articles below.
- `_redirects` — `/article-egg-reveal` → `.html` 301.
- Dated articles with a new callout + `dateModified` 2026-10-14: `article-genesis-legendaries.html` ("they
  have names and faces now"), `article-fan-art-competition.html` ("the competition is over"),
  `article-ronin-free-mint-guide.html` (completion callout now carries 831 and the reveal). Nav-only Read-next
  lines (no bumps): `article-free-mint-complete.html`, `article-free-mint-by-the-numbers.html`,
  `article-collection-page-live.html`, `article-yakkamon-roster-revealed.html`,
  `article-dev-stream-sept-17-recap.html`. `pre-registration.html` §7 callout → 831 + the reveal.
  `community.html` fan-art block → results.
- `README.md` — page count 67, sitemap 65, poster recipe (23 panels, render from the repo folder),
  `GP_GROUPS` in the add-a-system task, image list; new Known quirks **GENESIS REVEAL — NAMES, ART AND
  COUNTS** (every spot that carries the reveal's numbers, and the Yakkapedia warning), **GAMEPLAY PAGE
  FOLDS**, the BAD EGG COUNT quirk rewritten for 831, the fan-art quirk marked closed, the roster quirk
  notes the six names.

## Still by hand / not done

- The old `yakkamon-roster-26.jpg` pair and the other superseded sheets remain deletable by hand (unchanged).
- The Home milestone card still reads NOV / DEC 2026 on purpose: the stream gave an aim ("end of November"),
  not a date. The EARLY ACCESS MILESTONE CARD quirk applies when the team names the day.
- Videos: no new episode in this batch (an EP 23 on the reveal would go in `videos.js` per the README task).
- Pre-existing, unchanged: on `faq.html` at phone widths the bare marketplace URLs inside two open answers
  extend past the viewport without causing page scroll (present on main before this batch).

## Checks run

`node --check` on every `.js` (clean); all 120 JSON-LD blocks parse; sitemap valid, 65 URLs; 0 broken
internal `href`/`src`; every `?system=` target and every in-page anchor on the article, the Gameplay page
and the field guide resolves; all 516 search URLs resolve (the long-standing `/#ask` entry is the
intentional exception); 53 posts.js slugs have article files, no duplicates; HTMLParser tag-balance pass
over all 67 pages clean; Playwright over `file://` with the site fonts injected at 320 / 375 / 430 / 768 /
1280 on the article, `gameplay.html` (default, `?system=genesis-legendaries`, `#roster`), the field guide,
FAQ, Home, News, Community, Early Access and the three updated articles: zero horizontal overflow
introduced, no page errors; runtime: `#roster` opens its fold, 27 sidebar items in 7 groups and a 27-option
picker, the Genesis panel renders with its six sprites, a sidebar click swaps the panel and the URL, the
filter shows 7 "Raigo" rows and opens the table, the jump bar opens the unknowns fold, the phone picker
swaps the panel, `faq.html#what-did-the-genesis-eggs-reveal` opens, site search finds 33 reveal entries,
the chat shows the Egg reveal chip.
