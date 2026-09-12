# Changelog — September 12, 2026 — The extra 1,500: hidden eggs at special events

Checked yakkamonworld.com against https://docs.yakkamon.com/pre-registration/free-mint
as shown on September 12. Built on main `fc54ce7a7a` (uploaded zip matched
GitHub main byte-for-byte before edits).

## What the check found

Everything else on the docs page still matches the site: mint September 14 on
the Ronin Launchpad, reveal October 14, 10,000 hidden NFTs, the 68-Legendary
split (3 Storm / 5 Echo / 10 Ghost / 50 Bloom) + 50 Rare + 9,882 Uncommon,
one mint max per wave, tradable before reveal, deposit into the game at early
access, 11,500 revealed in total, and the snapshot-is-not-the-airdrop-lock
warning.

One thing we were describing wrong. The docs page frames the extra 1,500 as:
"An extra 1,500 hidden egg NFTs will be minted after the free mint and
distributed out in special events before the reveal happens." Our site called
those 1,500 an **"ecosystem airdrop"** and, in several places, split them
**1,000 to top Ronin spenders / 500 to $FLOWER ecosystem players**. That split
is on **no** current official page (not the free-mint page, not the NFT-airdrop
page) — it was an earlier fan reading. Corrected sitewide to the official
wording: 1,500 **hidden eggs minted after the free mint and handed out at
special events before the reveal**, with no eligibility, date or rarity split
published yet.

## Changed files

Evergreen / reference (corrected in place):
- `pre-registration.html` — reveal row and the wave-table row ("Ecosystem
  airdrop" → "Special-event eggs") now use the official special-events wording.
- `faq.js` — three answers corrected (the wave list, the whitelist checker, and
  "what do I do with it"), and a **new question** added: "What are the extra
  1,500 hidden eggs?" (`faq.html#what-are-the-extra-1-500-hidden-eggs`), which
  explains the special-events distribution and the 11,500 total.
- `faq.html` — static `<details>` rebuilt with `build-static-hubs.mjs`; FAQPage
  JSON-LD regenerated with the new `build-faq-jsonld.mjs` (see below). Now 133
  questions in both the accordion and the JSON-LD (was 130 in the JSON-LD — a
  pre-existing drift, now fixed).

Dated articles (corrected in place, with update notes + `dateModified` bumps):
- `article-ronin-free-mint-guide.html` — wave-table row and reveal bullet fixed;
  "Update, September 12" callout added; `dateModified` → 2026-09-12; visible
  meta corrected to "Updated Sep 12, 2026" (it had been stale at Sep 10 while
  the JSON-LD said Sep 11).
- `article-free-mint-by-the-numbers.html` — the loose-ends paragraph and two
  team-question items reworded off the spender/ecosystem split; "Update,
  September 12" callout retiring the speculation; `dateModified` → 2026-09-12.
- `article-ronin-wave.html` — the paragraph that speculated the 1,500 might go
  to top Ronin spenders is retired and corrected to the special-events framing;
  source-and-standing note updated; `dateModified` → 2026-09-12.
- `article-whitelist-live.html` — the "if your wallet comes back empty" helper
  now describes the 1,500 correctly; `dateModified` → 2026-09-12; meta gains
  "Updated Sep 12, 2026".

Derived / index surfaces:
- `search.js` — the whitelist excerpt reworded, and a **new search entry** for
  the 1,500-hidden-eggs FAQ.
- `posts.js` — the whitelist post's mirror line reworded. (The graded article's
  "1,500-mint reserve" lines, 169 and 177, were already accurate — left as is.)
- `chatbot-official-posts.md` — the Ronin Wave entry's closing line fixed, and a
  **new tier-1 entry** added for the free-mint docs page
  (`Source: https://docs.yakkamon.com/pre-registration/free-mint`) carrying the
  corrected facts, including the 1,500 special-event hidden eggs, the 11,500
  total, the 68-Legendary split and tradability — and an explicit note that the
  old 1,000/500 split is not official.
- `sitemap.xml` — `<lastmod>` → 2026-09-12 for the six pages above.

New tooling:
- `build-faq-jsonld.mjs` — regenerates the FAQPage JSON-LD in faq.html from
  faq.js (build-static-hubs.mjs only rebuilds the visible accordion, not the
  JSON-LD, which is what let the two drift apart). Text transform is faithful to
  the existing house format; verified to reproduce every prior JSON-LD entry
  exactly before the new question was added.

## Internal links added
- The new FAQ answer links to the free-mint section on the Early Access page and
  to the full guide.
- The guide, the by-the-numbers piece and the Ronin Wave article each link to
  the new FAQ answer.

## Not changed
- `chatbot-knowledge.json` — left untouched; the GitHub Action rebuilds it on
  push (docs.yakkamon.com is unreachable from the build sandbox, so a local
  build would drop the docs snapshots). faq.js, posts.js and the articles are
  tier-2 chatbot sources and the new tier-1 entry above is tier-1; the Action
  picks all of them up, and the answer cache keys on the build stamp.
- The graded stream article (`article-free-mint-stream-graded.html`) and its
  mirrors already said "no criteria, no recipient categories" — accurate, so
  left unchanged.

## Validation
node --check on every .js clean; all JSON-LD blocks parse (FAQPage now 133 Qs);
tag-balance clean on all pages; sitemap well-formed; 0 broken internal
links/anchors sitewide; grep sweep confirms no stray "ecosystem airdrop" /
"top Ronin spenders" / "ecosystem players" framing remains outside the
changelogs and the two places that deliberately name-and-retire it.
