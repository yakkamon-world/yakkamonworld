# Changelog — October 9, 2026 — Official Contracts post: analysis article, new gameplay system

## Why

The team published its official Contracts guide on X in early October 2026 — seven numbered points
on a new Yakkamon utility alongside gathering, battling, hunting and breeding: standing requests for
specific Yakkamon on a board that changes every day, paid in Coin and in specific items you can't just
gather or craft. The streams had described contracts since August (a coin faucet, and a sink that
consumes the Yakkamon you deliver); this is the first official write-up. This batch adds an analysis
article, gives Contracts their own gameplay system, and wires the post into the FAQ, search, the
chatbot, the sitemap and the related articles. Built on main `be22c0e`, which matched the uploaded
zip byte-for-byte before edits.

The exact posting date and URL were not in the screenshot supplied, so every spot says "early October
2026". If the URL turns up, add it as a `Source:` line under the chatbot heading and as a link in the
article's source callout.

## New

- `article-contracts-explained.html` — "Wanted, Daily — What the Official Contracts Post Means for
  Players" (slug `contracts-explained`, category `analysis`, Oct 9, 2026, `dateModified` 2026-10-09).
  Chrome copied from `article-battles-explained.html` (current header/footer, byline, Organization
  author, BreadcrumbList). Sections (deep-link ids used by search): `#what-it-is`, `#seven-points`
  (table), `#how-it-works` (step-by-step table), one section per point (`#daily-board`, `#rewards`,
  `#timing`, `#requirements`, `#goods`, `#windows`, `#legendaries`), `#bigger-picture` (each earlier
  guide vs what a Contract asks of it; the economy loop; the early "Capture the Spikemon" quests feed;
  the timeline), `#players` (by kind of trainer + "The wave math" table), `#site-advice`,
  `#what-to-do`, `#good-and-watch`, `#questions` (six), source-and-standing callout, Read next.
  Flagged as OUR readings on the page: "every day" = a real day; shared vs personal board; a Contract
  as a Coin converter; the quests-feed comparison; chapters and an accumulating Legendary grind; the
  wave arithmetic (days of Contracts before Chapter 0: ~30 / 23 / 16 for Waves 1–3 on the docs'
  one-month Chapter 0; 42–56 / 35–49 / 28–42 on the stream's six to eight weeks; Wave 4 not dated).
  Labeled as STREAM-sourced, not from the post: contract deliveries consume the Yakkamon (August
  streams), the coin faucets VIP / burning / contracts (free-mint stream).
- `CHANGELOG-2026-10-09-contracts.md` — this file.

## Changed — gameplay content

- `gameplay.js` (27 systems, no slugs renamed)
  - NEW `contracts` entry after `hunting` ("Contracts: The Daily Board"): the seven points, what the
    streams said first (coin faucet; deliveries consume the monster), what is unpublished; links to the
    article. New `like` (the wanted board outside the general store) and a clipboard icon.
  - `crafting-hunting`: the old "Contract hunts are a coin faucet" paragraph is now "Contracts tell you
    what to hunt" and points at `?system=contracts`.
  - `hunting`: the closing contract line now points at `?system=contracts`.
  - `economy-layers`: the coin-faucet sentence names Contracts and the official confirmation; the
    currency note adds that the post writes it "Coin".
  - `endgame`: new "Chapters run on Contracts" paragraph.
  - Header comment: October 9 block added (and the missing September 24 Battles entry recorded).
- `gameplay.html`: "Updated October 9, 2026" line; six quick-reference rows (Contracts, Contract pay,
  Contract requirements, Contract timing, Contracts later on, and Contract deliveries — the last one
  sourced to the Aug 6 & Aug 13 streams); the Free-to-play row mentions Contracts; NOT CONFIRMED gains
  "Contract numbers" and the "Coins" item is rewritten.
- `gameplay-guide.html`: same rows and unknowns; NEW section 15 `#contracts` (seven cards + a
  dev-streams card, a "Not published yet" callout, LIKE THIS), added to the table of contents; later
  sections renumbered 16–20; the Hunting & crafting card and the "Two tracks" card now point at
  `#contracts`; new "Updated" line.
- Poster (`gameplay-poster-source.html` / PNGs) NOT re-rendered — it has no Contracts panel; its two
  "contract hunts pay coins" lines are still accurate. Optional follow-up.

## FAQ, search, chatbot, sitemap, redirects

- `faq.js` — 142 questions (was 139), all in the Hunting topic, whose intro now mentions the Contracts
  post: new `what-are-contracts-in-yakkamon`, `do-i-lose-the-yakkamon-i-hand-in-to-a-contract`,
  `can-contracts-get-me-a-legendary`; rewritten `what-is-a-contract-hunt` (now says the official name is
  Contracts and that "contract hunt" was this site's term); updated `what-are-coins`,
  `can-i-earn-real-money-playing-for-free`, `can-i-catch-a-legendary-by-hunting`; the Playing the game
  intro says 27 systems. `faq.html` static copy + FAQPage JSON-LD rebuilt (`build-static-hubs.mjs`,
  `build-faq-jsonld.mjs`).
- `search.js` — 490 entries (was 475): 15 new at the top (the article plus nine question-phrased News
  entries, three FAQ entries, the gameplay system and the field-guide section); refreshed the excerpts
  for "Hunting — every question in one place", "What is a contract hunt?", "The Two-Track Economy",
  "How does hunting work?", "Crafting, Lures & Bait", "What are coins?" and the Analysis category entry.
- `chatbot-official-posts.md` — the post verbatim at the top (tier 1) with a "key facts in plain terms"
  paragraph that lists what the post does NOT say. `chatbot-knowledge.json` NOT touched — the Action
  rebuilds it on push.
- `chatbot.js` — the starter TOPICS swap the retired "Leaderboard" chip (it still asked for the live
  deposit leaderboard, gone since October 3) for a "Contracts" chip.
- `posts.js` — new top entry (52 posts). **A new slug means the OneSignal news push fires on upload —
  intended** (dated today, inside the 3-day rail).
- `index.html`, `news.html` — static hubs rebuilt (new top row / new card; counts 52, Analysis 11).
- `sitemap.xml` — 64 URLs (was 63): the article added (lastmod 2026-10-09, monthly, 0.7, beside the
  other explainers); lastmod → 2026-10-09 on `/`, `news.html`, `faq.html`, `gameplay.html`,
  `gameplay-guide.html` (none of them carries a JSON-LD `dateModified`).
- `_redirects` — `/article-contracts-explained` → `.html` 301.
- `article-hunting-explained.html`, `article-the-clock-explained.html`,
  `article-battles-explained.html`, `article-economy-explained.html` — one Read-next line each pointing
  at the new article. Nav-only: no `dateModified` bumps, no sitemap changes.
- `README.md` — page count corrected to the real 66 (it had drifted to 55), 52 articles, 27 gameplay
  systems, 64 sitemap URLs; new first Known quirk **CONTRACTS, OFFICIAL POST VS STREAMS** listing every
  spot to update together when the team answers the open questions.

## Checks run

A separate fact-check pass against the post, the official docs (Important Dates, Yakkapedia) and the
site's own stream records ran before shipping; its corrections are in (no "Contract-only" items, exact
quotes only, "might only roam" kept as "may", the burn-faucet reading dropped, the hand-in question
carried by the streams rather than inferred from "spare"). Then: `node --check` on every `.js` (clean);
all 118 JSON-LD blocks parse; sitemap valid, 64 URLs; 0 broken internal `href`/`src`; every in-page
anchor and `?system=` target resolves; all 490 search URLs resolve (the long-standing `/#ask` entry
is the intentional exception); 52 posts.js slugs all have article files; HTMLParser tag-balance pass
over all 66 pages clean; Playwright over `file://` with the site fonts injected at 320 / 375 / 430 /
768 / 1280 on the article, `gameplay.html?system=contracts`, the field guide, FAQ, Home, News and the
Hunting article: zero horizontal overflow; runtime check: the Contracts panel renders, the sidebar
lists 27 systems, `faq.html#what-are-contracts-in-yakkamon` opens, site search finds the new entries,
the chat shows the Contracts chip, Home's Latest News leads with the article, no page errors.
