# Changelog — September 10, 2026 — Docs free-mint page check (stale claim fixed)

Checked yakkamonworld.com against https://docs.yakkamon.com/pre-registration/free-mint
as shown on September 10. Built on main `e6b5170` (uploaded zip matched byte-for-byte).

## What the check found
Everything on the docs page matches the site: mint September 14 on the Ronin
Launchpad, reveal October 14, 10,000 hidden NFTs, the 68-Legendary split
(3 Storm / 5 Echo / 10 Ghost / 50 Bloom) + 50 Rare + 9,882 Uncommon, one mint
max per wave with stacking, tradeable before reveal, deposit into the game at
early access. Two docs updates corroborate what we already published: the FAQ
now states **11,500 revealed on October 14** (our 10,000 + 1,500 ecosystem
airdrop arithmetic, already attributed on site), and the page now carries the
snapshot-is-not-the-leaderboard-lock warning our FAQ has had since September 10.

One claim on our side went stale: the docs page no longer lists the wave dates —
it now defers entirely to yakkamon.com/whitelist for the wave schedule, supply
and details. Three surfaces of ours said it "still lists dates only" /
"still lists dates without hours".

## Changed files
- `faq.js` — "When exactly, and what are the waves?" closing line now reads
  "…the docs' free mint page now points there for the full wave schedule."
- `faq.html` — static `<details>` block rebuilt with `build-static-hubs.mjs`;
  FAQPage JSON-LD text updated to match (all JSON-LD blocks re-validated).
- `article-whitelist-live.html` — Source-and-standing callout: the docs page
  "has since been updated to point there for the full wave schedule."
- `CHANGELOG-2026-09-10-docs-page-check.md` — this file.

## Not changed
- `sitemap.xml` — faq.html and article-whitelist-live.html already carry
  `<lastmod>2026-09-10</lastmod>` from today's whitelist batch.
- No `dateModified` bump — a one-line source-attribution correction, same rule
  as the nav-only batches.
- `search.js` — no excerpt carried the stale claim (verified).
- Chatbot — faq.js and the article are tier-2 sources; the Action rebuilds
  `chatbot-knowledge.json` on push and the answer cache keys on the build stamp.
- No internal links needed.
