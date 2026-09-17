# Changelog — September 17, 2026 — News: "The Free Mint Is Complete" + Bad Eggs across the site

Built on main `d822fda` (Erdem's `yakkamonworld-main 6.zip` matched it byte-for-byte —
the close-out batch and its auto-rebuild are in). Second batch of the day: the
completion NEWS article, plus Bad Eggs (365 as of Sept 17, up from 53 on Sept 15)
introduced to the FAQ, chatbot and search, and the mint marked complete wherever
the site still framed it as upcoming.

## New
- `article-free-mint-complete.html` — "The Free Mint Is Complete: Sold Out in
  Wave 4, 365 Bad Eggs Flagged, and What Comes Next" (slug `free-mint-complete`,
  official, Sep 17). Sections: `#how-it-filled` (day-by-day table from the Mint
  Desk tracking, ~993 / ~3,376 / ~2,676 / ~2,955, hedged as approximate at the
  day boundaries), `#bad-eggs` (the ongoing review, the Status: Bad Egg trait,
  reveals nothing, the public filter, check-before-you-buy), `#points` (250 per
  mint — crediting condition now met), `#whats-next` (the official Important
  Dates schedule: Sept 21 Ronin Market trading, the 1,500 event eggs, Oct 14
  reveal, lock → airdrop → Nov/Dec early access → Chapter 0). Source-and-standing
  callout + money-note per convention; og-default social image.
- FAQ `what-is-a-bad-egg` (free-mint topic) — **137 questions** (was 136).
- Tier-1 chatbot entry at the top of `chatbot-official-posts.md`: "Bad Eggs —
  rule-breakers' minted eggs are being flagged", Source: the collection page's
  Status filter. Knowledge file rebuilds itself on push, as always.

## Changed
- `posts.js` — new top entry (**48 posts**). NOTE: pushing this fires the
  OneSignal news push (post dated within 3 days) — one notification, the article
  as the click-through. That is the system working as designed.
- `faq.js` — `does-wave-5-actually-exist` settled ("It didn't." + outcome line);
  the new Bad Egg answer sits between `do-i-get-to-see-what-i-minted` and
  `is-there-anything-rare-in-there`.
- `faq.html`, `news.html`, `index.html` hubs rebuilt (`build-static-hubs.mjs`)
  and the FAQPage JSON-LD rebuilt (`build-faq-jsonld.mjs`, 137 Qs).
- `search.js` — 5 new entries (**445**, was 440): the article, "Is the free mint
  over?", "How many Bad Eggs are there?", "What is a Bad Egg?" (→ FAQ), "What
  happens after the free mint?".
- `index.html` — home timeline: the FREE MINT node tooltip is past-tense and the
  timeline-notes callout now reads **COMPLETE** (sold out in Wave 4, reveal Oct
  14, trading Sept 21, Bad Eggs link, link to the article).
- `pre-registration.html` — same tooltip fix; §2 Important Dates mint row marked
  complete with a link to the report; §7 gains an "Update, September 17"
  completion callout (section kept as written below it).
- `article-ronin-free-mint-guide.html` — Sept 17 completion callout above the
  Sept 13 one; `dateModified` → 2026-09-17.
- `article-mint-page-live.html` — "sold out" callout at the top;
  `dateModified` → 2026-09-17.
- `_redirects` — `/article-free-mint-complete` line (75 rules).
- `sitemap.xml` — new article URL (lastmod 2026-09-17, weekly/0.9, matching the
  collection article) + lastmod 2026-09-17 on `news.html`, the guide and the
  mint-page article (`/`, `pre-registration.html`, `faq.html` were already
  9-17 from the close-out batch). **61 URLs**.
- `README.md` — new Known quirk **BAD EGG COUNT**: the 365 is hand-written in
  faq.js, the three page callouts, chatbot-official-posts.md and two search
  excerpts — update them together when the count moves; the article's own
  mentions are dated "at the time of writing" and stay.

## Verified
- Playwright over `file://`: the article at 1280/375 (no overflow, no JS
  errors), the news hub shows the new top card, and
  `faq.html#what-is-a-bad-egg` deep-links, opens and renders the 365 answer.
- All internal links and anchors in the new article resolve; `node --check`
  clean on posts.js / faq.js / search.js; sitemap parses.

## Facts and sources
Sold-out state and numbers: the official mint listing (10,000/10,000, 0 left).
Bad Eggs: Erdem's report of the team's ongoing enforcement, count 365 as of
Sept 17 (site had 53 on Sept 15); trait and filter per the official collection
page. Schedule: docs.yakkamon.com/pre-registration/important-dates (fetched
Sept 17) + the Sept 21 trading date from the collection's published notes.
