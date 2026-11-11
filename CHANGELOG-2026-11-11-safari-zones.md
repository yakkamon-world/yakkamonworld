# Changelog — November 11, 2026 — The official Safari Zones post

Built on main `5a89ece` (Erdem's uploaded `yakkamonworld-main.zip` matched it byte-for-byte).
Source: the team's official "Yakkamon – Safari Zones" guide on X (screenshot supplied; seven
numbered points). docs.yakkamon.com has no hunting page (llms.txt checked Nov 11), so the X post is
the top official source. **The post's exact date was not recorded** — the site dates its own update
November 11 and cites the post as "November 2026".

## What the post says (the facts now on the site)

"A lot has changed during alpha testing"; hunting is hands-on — you are in the grass yourself.
(1) 31 catchable Yakkamon at Early Access launch, each with a home zone, a time and a taste; a Codex
shows silhouette-until-seen, grayscale-until-caught. (2) Ultra-rare shinies (color variations).
(3) Safari Zones: dedicated zones reached from the Map, Clover Meadow first, more with Trainer Level.
(4) Snacks: favorites give a much better chance, cheap ones need luck, a pity system counts misses.
(5) Lures: regular draws commons, Golden draws rares; spot + time of day decide who shows up.
(6) Secret haunts for some rares (campfire, big old tree, hidden clearing); others need luck.
(7) The hardest rares only eat charms and remember every one across visits.

## Editorial line

- **Replaced:** the roaming-hunter job, hunting grounds as tiles on your Region, type-picking lures.
- **Kept:** time of day.
- **Not mentioned, so now labeled "September design, unconfirmed for launch" (not deleted):** the
  three temperaments, depleting grounds, unannounced wild Legendaries, hunt battles.
- **Our readings, flagged everywhere:** 31 = the dex's 38 − Genesis six − Legendary #056 (25 Commons
  + six non-Genesis Rares); expansion six reaches the Map, Trainer Level opens later zones; the
  charm a rare eats may be the charm forged from commons (Nov 3 dev chat).

## New

- `article-safari-zones-explained.html` (slug `safari-zones-explained`, Analysis, Nov 11) — "You're in
  the Grass Now". Anchors: seven-points, what-changed, thirty-one, shinies, zones, snacks, lures,
  haunts, charms, bigger-picture, what-it-means, what-to-do, good-and-watch, questions, site-changes.
- `safari-zones-card.png` (2752×1536, the X infographic; also the article figure),
  `safari-zones-og.png` (1600×893 social card), `safari-zones-card-source.html` (noindex source).
- `posts.js` new post → **OneSignal push fires on upload** (intended). 56 posts.
- `_redirects` +1 line. `sitemap.xml` 67 → **68 URLs**.

## Changed

- `gameplay.js` — **hunting** rewritten (title now "Hunting: Safari Zones, Snacks & Lures", slug
  kept; Oct 14 and Nov 3 paragraphs carried over); **crafting-hunting** retitled "Crafting, Snacks &
  Lures" with a Nov 11 section, older lure/bait paragraphs labeled; update lines in
  regional-exploration, trainer-level, creature-collecting, contracts, day-night-cycle, two-halves;
  rarity-tiers "shiny exception" wording fixed. Still 30 systems.
- `gameplay.html` / `gameplay-guide.html` — page-updated lines; quick reference **115 → 124 rows**
  (nine Safari Zones rows; "Yakkamon in early access" rewritten; five September rows labeled);
  unknowns **31 → 33** ("Which thirty-one", "Hunting rates" rewritten, + "Golden Lures and charms",
  "What survived from September"); guide section 14 rebuilt and the Your Yakkamon lede updated.
- `faq.js` **148 → 156 questions**: eight new (Safari Zone, 31 at launch, Codex, snacks & pity,
  Lures & Golden Lures, secret haunts, charm-only, shinies); thirteen answers updated (ten hunting
  answers rewritten, two given a standing note, how-many-yakkamon). Hubs rebuilt
  (`build-static-hubs.mjs` → news.html, index.html, faq.html) and FAQPage JSON-LD rebuilt (156).
- `search.js` 553 → **574 entries** (21 new; 20 stale hunting excerpts refreshed, two titles
  renamed, poster entry updated).
- `article-hunting-explained.html` — Nov 11 warning callout at the top, read-next link,
  `dateModified` + visible Updated → Nov 11. `article-official-roster-dex.html` — Nov 11 callout
  (the 31 against the dex), `dateModified` → Nov 11. Read-next links (nav-only, no date bump) on the
  Contracts, Clock and Battles articles.
- `chatbot-official-posts.md` — tier-1 Safari Zones entry at the top (the seven points restated
  faithfully in plain terms plus an explicit "what the post does not say" list); the September
  Hunting heading now says it is partly superseded. `chatbot-digest.md` section 8 opens with a
  superseded-in-part line. `chatbot-knowledge.json` untouched — the Action rebuilds on push.
- **Poster** — panel 20 rebuilt as HUNTING: SAFARI ZONES (tag NEW NOV 11), panel 21 as CRAFTING,
  SNACKS & LURES; lines in 01, 03, 09, 17, 26; chips, red banner and footer updated. Re-rendered:
  `gameplay-poster.png` **1800×3043**, `gameplay-poster-full.png` **2423×4096**; heights fixed on
  gameplay.html and the two embedding articles; poster-rev / alt / note rewritten.
- `sitemap.xml` lastmod → 2026-11-11 on home, news, gameplay, gameplay-guide, faq and the two
  touched articles. `README.md` — sizes, sitemap count, layout line, new SAFARI ZONES quirk.

## The five checks

1. Sitemap — one URL added, seven lastmods bumped. 2. dateModified — bumped on the two articles whose
body changed. 3. Chatbot — tier-1 entry + digest line; the rest via the Action. 4. Search — 21 new,
20 refreshed. 5. Internal links — the article links to the systems, FAQ and five related articles;
five articles and nine systems/FAQ answers link back.

## Verified

`node --check` on every JS file; every JSON-LD block parses; every internal link, `?system=` slug and
Safari Zones anchor resolves; sitemap 68 URLs; every post has an article; Playwright at 1280 and 375
on nine pages: no overflow, no JS errors; poster and card inspected by eye with fonts embedded.

## Open / flagged for Erdem

- The post's real date — if it wasn't this week, say so and the "November 2026" wording stays right
  but the changelog note can be tightened.
- The tier-1 chatbot entry restates the post point by point rather than pasting it; paste the
  verbatim text under the same heading if you prefer it word for word.
- The NEW NOV 3 tags stay on poster panels 04 / 09 / 23 (two days old); say if you want them off.
- EP video / FAQ for "hunting zone vs safari zone" naming not made.
