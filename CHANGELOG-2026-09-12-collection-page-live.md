# Changelog — September 12, 2026 — The collection page is live (marketplace.roninchain.com/collections/yakkamon)

The official Yakkamon **collection** page on Ronin Market is now live at
https://marketplace.roninchain.com/collections/yakkamon — the marketplace home
for the whole Yakkamon collection, and the venue where minted eggs will be
viewed, listed, bought and sold. It is the same "Yakkamon" collection the
Genesis Mint launchpad listing already sits inside; now that collection has its
own public front door, live before Wave 1 mints (September 14).

Built on main `fc54ce7a7a` (the uploaded zip matched GitHub main byte-for-byte
before edits — same base as the September 12 "1,500 hidden eggs" batch).

Ronin Market is a JavaScript app that can't be loaded from the build container,
so the page is described conservatively: no live figures (mints, owners, floor,
sales) are quoted. Every factual claim rests on the collection URL plus the
site's already-published official facts (10,000 supply, minted blind, October 14
reveal, tradable before the reveal).

## New

- `article-collection-page-live.html` — announcement article (slug
  `collection-page-live`, category `official`, Sep 12, 2026). Angle: two official
  pages now, one job each — you **mint** on the Launchpad page, you **view and
  trade** on the collection page, and you never mint from the collection page.
  Section anchors: `#two-pages` (a mint-vs-collection comparison table),
  `#what-it-is`, `#hidden-market` (where the blind-egg market runs until the
  reveal — ties to the by-the-numbers `#hidden-value` math), `#before-mint`
  (nothing minted yet; what fills it from Wave 1 and after the reveal),
  `#safety` (the rule now covers both official addresses), source-and-standing
  callout, Read next, money-note. Cloned from `article-mint-page-live.html`'s
  head/tail; loads `free-mint-hero.js` (ribbon pill), analytics, chatbot,
  search, push-alerts; full site chrome + mint ribbon.

## Main-page / navigation links

- `index.html` + `pre-registration.html` — hero fine print (`.fm-fine`) gained
  "· the collection page is live" → `article-collection-page-live.html`, next to
  the existing "the mint page is live" and "the odds, by the numbers" links.
- `article-mint-page-live.html` — Read-next gained the collection article as its
  first item (**nav-only — no `dateModified` bump**, stays 2026-09-11).
- `article-free-mint-by-the-numbers.html` — a one-line "Update, September 12"
  pointer added at the end of `#hidden-value` linking the collection page as the
  now-live venue for the blind-egg market. `dateModified` was already 2026-09-12
  from the same-day 1,500-eggs batch, so no new bump.

## Derived / index surfaces

- `posts.js` — new top entry `collection-page-live` (47 posts).
- `search.js` — 4 new entries: 3 News (the article + `#two-pages` + `#hidden-market`)
  and 1 FAQ (the new question). 436 entries total.
- `faq.js` — new free-mint question "Where do I buy or sell a minted Yakkamon?"
  (`faq.html#where-do-i-buy-or-sell-a-minted-yakkamon`), 134 questions.
  `faq.html` static `<details>` rebuilt with `build-static-hubs.mjs`; FAQPage
  JSON-LD regenerated with `build-faq-jsonld.mjs` — both now 134 and in sync.
- `news.html` + `index.html` — static hubs rebuilt (`build-static-hubs.mjs`); the
  collection card leads the Home news grid and the news archive.
- `sitemap.xml` — new URL `article-collection-page-live.html` (lastmod 2026-09-12,
  weekly, 0.9); `lastmod` bumped to 2026-09-12 on `/`, `news.html`,
  `pre-registration.html`, `faq.html`. 60 URLs.
- `_redirects` — `/article-collection-page-live /article-collection-page-live.html 301`
  added (63 rules).
- `README.md` — sitemap count 59 → 60.

## Chatbot

- `chatbot-official-posts.md` — NEW tier-1 entry "Official collection page on
  Ronin Market" with `Source: https://marketplace.roninchain.com/collections/yakkamon`,
  in plain terms: the collection page is where minted Yakkamon are viewed and
  traded; the two-official-pages distinction (mint on the Launchpad, trade on the
  collection, never mint from the collection); the blind-egg market until the
  October 14 reveal; and that nothing is minted yet before Wave 1. The article,
  the new FAQ answer and the posts.js mirror are tier-2 sources.
- `chatbot-knowledge.json` left untouched — the GitHub Action rebuilds it on push
  (docs.yakkamon.com 403s from the build container, so a local build would write a
  0-docs snapshot; never commit that).

## Checks

`node --check` on every .js/.mjs (pass); every JSON-LD block parses; tag-balance
across all 62 pages (clean); `sitemap.xml` parses (60 URLs); every posts.js slug
has a matching article file (47/47); 0 broken internal href/src or anchors across
all pages; American-English pass (fixed "catalogue" → "catalog" ×2 in the new
article; other regex hits were "specialist"/"realistic" false positives and the
verbatim team posts in `chatbot-official-posts.md`); Playwright horizontal-overflow
check on the new article at 320/375/414/768/1280 — 0px overflow, no offenders.
