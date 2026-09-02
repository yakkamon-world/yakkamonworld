# Changelog — 2 September 2026 (third batch): EP 17, FAQ refresh, link sweep

## Video

- `videos.js`: **EP 17** "Yakkamon Dev Stream 9-1-26 Recap — Free Mint, Game Updates & Launch Calendar" (`iCOqW_yG0gA`, 4:05) at the top of the ANALYSIS block, related → `article-free-mint-stream-graded.html`. 17 videos.
- `videos.html`: hardcoded `#vid-count` fallback 15 → 17 (it had not been bumped for EP 16); CollectionPage JSON-LD `dateModified` → 2026-09-02.
- `sitemap.xml`: videos.html `<lastmod>` → 2026-09-02.
- `search.js`: "All 17 episodes" excerpt; new Videos entry for EP 17.
- "Prefer to watch?" `watch-link` to the episode added at the top of `article-free-mint-stream-graded.html` and `article-ronin-free-mint-guide.html` (nav-only, no dateModified bump — same rule as the gameplay pages).

## FAQ (`faq.js`, 100 → 103; `faq.html` FAQPage JSON-LD regenerated, verified byte-identical on the untouched entries)

- Free mint category gains an **intro** pointing at the guide and the EP 17 recap.
- "Do I need a good rank to take part?" now carries the rank → waves table (1–1,000: 1/2/4/5; 1,001–10,000: 2/4/5; 10,001–20,000: 4/5; 20,001–50,000: 5; 50,001+: Ronin wave only) with the 5 $FLOWER column.
- **New**: "How do I actually mint on the day?" · "Is the 10 September snapshot the same as the leaderboard lock?" (no — the lock is one week before early access; mint points count towards it) · "How do I know a mint link is real?"
- "What is the free mint?" and "Do I need to do anything before mint day?" link the guide (the latter deep-links `#mint-day`).
- "Is there a video version of any of this?" mentions the EP 17 recap.
- Three matching search.js FAQ entries. search.js total 343.

## Link sweep

- Full sweep of every `href`/`src`/`related` in all 52 pages and the data files, including `#anchor` targets (page ids + runtime FAQ ids) and `gameplay.html?system=` slugs against the 25 systems: **0 broken**.
- New cross-links (all nav-only): `index.html` mint callout → guide; the 2 Sep callouts on `article-leaderboard-guideline.html` and `article-free-to-play-guide.html` → guide; the free-to-play guide's "250 points for one click" callout now links the guide instead of the superseded October-1 post; `article-free-mint-stream-graded.html` closing paragraph → guide.
- `article-ronin-free-mint-guide.html`: ids added to all nine h2s (`#at-a-glance #waves #checklist #mint-day #inside #after-you-mint #safety #mistakes #timeline`) so the FAQ and future posts can deep-link.

## Stale wording fixed on evergreen pages

- `index.html` and `pre-registration.html` meta/og/twitter descriptions still said "the October free mint" → "the September free mint" / "the 14 September free mint".
- `search.js`: FAQ "How do I earn points?" excerpt (October → 14 September, 250 points), free-to-play guide excerpt (mid-September → 14 September), and the "Is the free mint still October 1st?" excerpt now gives the real date and the 10 September snapshot.
- Dated articles and their search excerpts ("moves to mid-September", roadmap, dev-stream-two recap) left as published.

## Not changed

- `tips.html` nurture arithmetic ("early August to the free mint in mid-September — about 42 days — 526 points") — 14 September is mid-September and the sum still holds; left.
- README video count 15 → 17.
