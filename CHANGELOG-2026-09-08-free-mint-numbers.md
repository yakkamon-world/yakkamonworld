# Changelog — 8 September 2026 — "Wave 5 Probably Doesn't Exist: The Free Mint by the Numbers"

A quantitative analysis of the free mint built on live data (133,408 registered
trainers from the official sign-up API, 5,219 depositing wallets from the on-chain
leaderboard, $FLOWER at $0.25 — all read 18:40 UTC 8 Sep) and the official pool
(68 Legendaries / 50 Rares / 9,882 Uncommons). Built on main `b1af417`, which
matched the uploaded zip byte-for-byte.

## New files
- `article-free-mint-by-the-numbers.html` (slug `free-mint-by-the-numbers`, category
  `analysis`, dated 8 Sep, ~2,700 words, first person singular). Sections: the odds per
  ticket + stacking table (`#odds`), Wave 5 probably doesn't exist (`#wave-5`), turnout
  (`#turnout`), $1.25 buys two tickets (`#two-tickets`), 62.5% have no wave (`#no-wave`),
  where the 68 Legendaries land (`#where-legendaries-land`), concentration
  (`#concentration`), 2.5% of the Legendaries (`#context`), what a hidden egg is worth
  (`#hidden-value`), per-rank action list (`#what-to-do`), five questions (`#questions`),
  source-and-standing callout, Read next, money-note. Key claims: 1-in-147 Legendary per
  mint; 11,000 promised vs 10,000 exist → Wave 4 opens with 4,000 if 1–3 sell out, Wave 5
  with zero; Wave 2 needs 57% depositor turnout, Wave 4 77–96%; 73% chance no Storm on
  day one; 49% chance a Storm goes to a Ronin gamer; as few as 4,000 wallets could hold
  all 10,000; the mint holds 68 of 2,750 Genesis Legendaries. The uniform-reveal
  assumption is stated in a callout at the top.
- `free-mint-by-the-numbers-og.png` — 1600×900 social card (the odds infographic at 1×).
- `CHANGELOG-2026-09-08-free-mint-numbers.md` — this file.

## Changed files
- `posts.js` — new top entry (43 posts).
- `search.js` — 8 entries tagged News (405 total): the article plus deep links to
  #odds, #wave-5, #turnout, #two-tickets, #no-wave, #where-legendaries-land, #hidden-value.
- `sitemap.xml` — new URL with `<lastmod>2026-09-08</lastmod>` (56 URLs).
- `faq.js` + `faq.html` — free-mint category: "Is there anything rare in there?" gained a
  link to the article; two new questions, "What are my odds of a Legendary in the free
  mint?" and "Does Wave 5 actually exist?" (125 questions). FAQPage JSON-LD regenerated;
  static `<details>` copy rebuilt with `build-static-hubs.mjs`. faq.html lastmod already
  2026-09-08.
- `news.html`, `index.html` — static hub markup rebuilt (new card at the top of both).
- `article-ronin-free-mint-guide.html` — closing sentence links the article (nav-only,
  no dateModified bump).
- `article-ronin-wave.html` — Read-next line added (nav-only, no bump).
- `index.html`, `pre-registration.html` — hero fine print gained "the odds, by the
  numbers" link (nav-only).
- `README.md` — article count 43, sitemap 56, new og image in the repo layout.

## Delivered alongside, not in the repo
- `yakkamon-free-mint-wave5-infographic.png` and `yakkamon-free-mint-odds-infographic.png`
  (3200×1800 each) for X, plus the post text.

## Chatbot
`chatbot-knowledge.json` is rebuilt by the Action on push; the article, the two FAQ
answers and the posts.js mirror are all tier-2 sources.
