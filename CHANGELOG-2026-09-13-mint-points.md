# Changelog — September 13, 2026 — the mint's 250 points: per mint, paid after mint week

Two facts from the Yakkamon team's Discord, the day before Wave 1 opens, that travel together
everywhere on the site:

1. The **+250 points** for taking part in the free mint appear on the trainer dashboard
   **"once the minting period has ended"** — not at the moment a trainer mints.
2. The 250 is paid **per mint**, not once per trainer. Every wave you mint in pays its own.

Built on main `0d0a6dc` (the roster-26 batch, pushed and rebuilt by the Action), which matched the
uploaded zip byte-for-byte.

## Why both matter, and why they pull in opposite directions

The site has said "minting earns 250 points" in nine places since early September and never said
**when** or **how many times**. From tomorrow morning, every trainer who mints will look at an
unchanged dashboard total and reasonably conclude something broke — that is fact 1. And anyone who
decided one mint was enough has been leaving points on the table — that is fact 2, which turns the
mint from a flat 250 into as much as **1,250**, and makes "come back for every wave you qualify
for" a points instruction as well as a lottery-ticket one.

## The arithmetic, computed from the nesting wave brackets

| Situation at the September 10 snapshot | Waves | Mints | Points |
|---|---|---|---|
| Top 1,000, 5 $FLOWER, and a Ronin gamer | 1, 2, 3, 4, 5 | 5 | **1,250** |
| Top 1,000 with 5 $FLOWER | 1, 2, 4, 5 | 4 | **1,000** |
| Ranks 1,001–10,000 with 5 $FLOWER | 2, 4, 5 | 3 | **750** |
| Ranks 10,001–20,000 with 5 $FLOWER | 4, 5 | 2 | **500** |
| Ranks 20,001–50,000, no deposit | 5 only | 1 | **250** |
| Not on the leaderboard, but a Ronin gamer | 3 only | 1 | **250** |

These are ceilings, not expectations, and the site says so every time it prints them: only Wave 1
is guaranteed, the rest are first come, first served against five wave supplies totalling 11,000
against a collection of 10,000, and Wave 5 may never open.

## New

- `faq.js` → **"How many points is the free mint worth in total?"**
  (`how-many-points-is-the-free-mint-worth-in-total`) — the table above, plus the ceilings-not-
  expectations warning and the crediting-timing note.
- `faq.js` → **"I minted — where are my 250 points?"** (`i-minted-where-are-my-250-points`) — why
  the dashboard doesn't move on mint day, what is and isn't settled, and a callout making the
  point that the wait is harmless because the leaderboard doesn't finalize until a week before
  early access. **136 questions.**
- `chatbot-official-posts.md` — new **tier-1** entry, "Free-mint points timing (official Yakkamon
  Discord announcement, September 13, 2026)": both facts, the full per-rank ceiling list in plain
  terms, and the one thing still unpublished (the exact crediting moment).

## Evergreen pages (corrected in place)

- `faq.js` — six more answers that cite the number now carry both facts and cross-link the two new
  ones: `how-do-i-actually-earn-points` (bullet and exact-numbers callout), the `mint-vs-airdrop`
  comparison text, `can-i-mint-more-than-once` (a new paragraph on stacking twice over),
  `is-the-10-september-snapshot-the-same-as-the-leaderboard-lock`,
  `how-do-i-actually-mint-on-the-day`, `why-bother-if-i-m-already-pre-registered`, and
  `do-i-need-a-good-rank-to-take-part`, whose rank table gained a fourth column — "Points if you
  mint them all". Static `<details>` rebuilt with `build-static-hubs.mjs`; FAQPage JSON-LD
  regenerated separately with `build-faq-jsonld.mjs` (136, in sync).
- `pre-registration.html` — the points list and the §7 bullet, which now gives the 1,000/1,250
  figures and explains why the dashboard sits still on mint day.
- `index.html` + `pre-registration.html` — the free-mint hero fine print gained
  "**+250 points per mint**, credited after mint week", the line most likely to be read during the
  mint itself.

## Dated articles (visible update + `dateModified` 2026-09-13)

- `article-ronin-free-mint-guide.html` — "Update, September 13" callout at the top of the body
  carrying both facts; the "Minting is worth 250 points" callout rewritten to "per mint" with the
  four-wave figure; a points sentence under the wave table; and the first bullet of "After you
  mint" — mint in four waves and the dashboard eventually moves by 1,000, all at once, so don't
  re-mint from another wallet to "fix" it.
- `article-free-mint-by-the-numbers.html` — "Update, September 13" callout at the stacking table:
  the ticket column now doubles as a points column (250 / 500 / 750 / 1,000 / 1,250). That is the
  part of stacking that **is** linear — the piece's original argument was that extra tickets barely
  move the odds, and that argument stands; the points are the reason to collect them anyway.
- `article-leaderboard-guideline.html` — the free-player points table: the mint row is now
  "250 per mint, but a player who never deposits is only on Wave 5, plus Wave 3 if they play Ronin
  games", worth 250–500, and the two totals move to ~2,900–3,150 and ~1,775–2,025. The "best value
  on the whole board" callout says plainly that per-mint makes the mint better *only* for trainers
  with the rank and the deposit to be on several waves — which is exactly what that table's player
  does not have.
- `article-free-to-play-guide.html` — same qualification inside the "250 points for one click"
  callout.
- `posts.js` — "Update, September 13" mirror lines on the free-mint-guide, free-to-play-guide and
  by-the-numbers entries. (`leaderboard-guideline` carries no body array.)

## Search, sitemap

- `search.js` — two new FAQ entries (the totals question and the where-are-my-points question) and
  three refreshed excerpts. **439 entries.**
- `sitemap.xml` — `<lastmod>` 2026-09-13 on `/`, pre-registration, faq and the four articles.
  60 URLs, unchanged. The `index.html` and `news.html` static hub blocks came back unchanged.

## Fixed alongside

Three day-first dates the September 8 American-English pass missed, because its range regex
required a year: `posts.js` "14–18 September" → "September 14–18" in the free-mint guide body, and
two `search.js` entries (the guide excerpt and the "Free mint waves" title). Worth a grep after any
future `americanize.py` run — a range with no year, like a case-different heading, slips through.

## Chatbot

`chatbot-official-posts.md` is tier 1; `faq.js`, `posts.js` and every touched page are tier 2. The
Action rebuilds `chatbot-knowledge.json` on push and the answer cache keys on the build stamp, so
the bot starts answering mint-day questions with both facts as soon as this lands.
`chatbot-knowledge.json` is left untouched here — docs.yakkamon.com 403s from the build container,
so a local rebuild would commit a 0-docs snapshot.

## Follow-up, written into the README

A Known-quirks entry, MINT POINTS, lists every place this wording now lives and says plainly that
all of it is written **for the wait, not for after it**. Once the points land — after Wave 5, which
opens September 18 — those lines need revisiting, and the one remaining open question (the exact
crediting moment) should be replaced with what actually happened. It also notes that the per-mint
ceilings are computed from the nesting wave brackets, so if a wave's eligibility ever changes, the
tables in `how-many-points-is-the-free-mint-worth-in-total` and `do-i-need-a-good-rank-to-take-part`
change with it.

## Checks

`node --check` on every .js/.mjs; every JSON-LD block parses; tag balance clean on all 62 pages;
sitemap parses (60 URLs); 0 broken internal links or anchors, including the new
`faq.html#how-many-points-is-the-free-mint-worth-in-total` deep links; Playwright at
320/375/768/1280 on all seven changed pages — 0px horizontal overflow, with the longer hero fine
print wrapping cleanly at 320 and the new FAQ table scrolling inside its `.table-scroll` container.
