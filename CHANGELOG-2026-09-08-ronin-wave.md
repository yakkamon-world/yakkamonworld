# Changelog — 8 September 2026 — The Ronin Wave (official Wave 3 page)

Source: the new official page https://docs.yakkamon.com/pre-registration/free-mint/ronin-wave (published 8 Sep)
and the current https://docs.yakkamon.com/pre-registration/free-mint. Built on main `116a35f`, which matched
the uploaded zip byte-for-byte.

## New
- `article-ronin-wave.html` (slug `ronin-wave`, category `official`, dated 8 Sep, og-default, ~3,200 words) —
  the Ronin Wave explained: at-a-glance table, the five games and what counted (with pool shares), the scoring
  method in plain terms, the arithmetic the page leaves out (42,730 candidates for 2,000 spots; the dedup implies
  500–1,991 multi-game wallets who sort to the top; the two readings of "2,000 spots"), how to check your address,
  what it means for trainers / Sunflower Land players / everyone else, a design view, five questions for the team,
  timeline, money-note. Written in the first person singular per the 8 Sep house rule.
  FINDING recorded in the article: as of 14:00 UTC 8 Sep every candidate-list link on the official page points to
  `github.com/sunflower-land/yakkamon-docs`, which returns 404 (private or unpublished) — checked three ways.
- `posts.js` — new top entry (42 posts).
- `search.js` — 8 News entries for the article + 5 FAQ entries for the new questions (395 total).
- `sitemap.xml` — 55 URLs; new article with `<lastmod>2026-09-08`.
- `CHANGELOG-2026-09-08-ronin-wave.md` (this file).

## Updated in place (evergreen pages, per the editorial line)
- `article-ronin-free-mint-guide.html` — Wave 3 rows in the wave table, the rank→waves table and the timeline now
  describe the on-chain selection and link to the article; new checklist item "check the Ronin Wave lists"
  (lowercase 0x address, not ronin:); source line lists the Ronin Wave page; "This week's multiplier is 2.6×" line
  corrected to 2.4× for the snapshot week (7–13 Sep); mint-day step notes five chances for a wallet on both lists.
  dateModified already 2026-09-08 from the money-note batch.
- `pre-registration.html` §7 — updated-line → 8 September; second watch-link to the article; Wave 3 row rewritten;
  Reveal row → 11,500 revealed in total (10,000 + 1,500 ecosystem airdrop, per the docs FAQ); new list item for
  Ronin gamers; "A few weeks after 14 October" deposit wording corrected to "once early access begins" (docs:
  "Once early access begins, you will be able to deposit them into the game").
- `faq.js` — free-mint intro links the article; wave-table and rank-table Wave 3 cells rewritten; "What do I do with
  it once I've minted?" corrected (early access, 11,500 total); +5 questions (118 → 123): What is the Ronin Wave?,
  How do I check if I'm on the Ronin Wave list?, How is the Ronin Wave score worked out?, I play Sunflower Land —
  am I in the Ronin Wave?, Does the Ronin Wave affect my rank or the airdrop?. `faq.html` FAQPage JSON-LD
  regenerated (round-trip verified against the shipped block first).
- `index.html` — free-mint timeline callout gains the Ronin Wave sentence + link.
- `search.js` — three existing free-mint excerpts refreshed to mention the Ronin Wave.
- `README.md` — sitemap 55 URLs.

## Dated post — update callout, not a rewrite
- `article-free-mint-stream-graded.html` — "Update, 8 September 2026" callout at §5 (The Ronin wave): the criteria
  the piece asked for are now published; "someone else's list" retired; grade B stands. `article-meta` gains
  "Updated Sep 8, 2026"; dateModified 2026-09-01 → 2026-09-08; sitemap lastmod mirrored; posts.js body mirror line.

## Chatbot
- `chatbot-official-posts.md` — new tier-1 section for the Ronin Wave docs page (key facts in plain terms, not a
  verbatim paste), because `/pre-registration/free-mint/ronin-wave` is absent from docs.yakkamon.com/llms.txt and
  is therefore probably not among the pages the chat worker fetches live.
- `build-chatbot-knowledge.mjs` — a section may start with `Source: <url>`; that URL is cited instead of the X
  account. Header comment in the .md documents it.
- `chatbot-knowledge.json` NOT regenerated locally (the docs snapshot 403s from outside the Action) — the GitHub
  Action rebuilds it on push.

## Static hubs
- `node build-static-hubs.mjs` run: `news.html`, `index.html`, `faq.html` regenerated (the Action would produce
  the same output). faq-meta now reads "123 answers across 14 topics".

## Official pages still stale (nothing to change on our side)
- docs Early Access & Rewards, NFT Airdrop and FAQ pages still show the old referral rule (Discord + X + 100 pts)
  and "Coming soon" for the free-mint count; the Early Access comparison table still says "one mint per trainer".

## Not done
- No X cut, no video script, no infographic.
- Footer LATEST NEWS column left static (long-standing decision).
- Gameplay poster untouched (no gameplay change).
