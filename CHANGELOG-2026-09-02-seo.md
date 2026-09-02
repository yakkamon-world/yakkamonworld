# Changelog — 2 September 2026 (fourth batch): sitelinks groundwork — breadcrumbs, one-label-per-page, titles, structured data

Why: yakkamonworld.com ranks #2 for "yakkamon" with no sitelinks. Google's sitelinks are automated — no request form — and are built from page titles, heading text, internal-link anchor text and site structure. This batch removes every inconsistency in those inputs and gives Google an explicit hierarchy on a flat-file site. Nothing here is editorial: no article body changed, no `dateModified` was bumped.

## Breadcrumbs (all 51 pages except the home page)

- **Articles (38)**: the `← Back to news` link is replaced by a breadcrumb trail — `Home › News › <article h1>` — in the same small bold style. `News` is still one click away. The current-page crumb is one line and truncates with `…` on narrow screens (checked 320–1440, zero overflow).
- **Hub pages (12)**: `Home › <page>` as the first child of `.page-head` (Early Access, News, Gameplay, Community, Leaderboard, Tips, Videos, FAQ, Contact, About, Privacy). `gameplay-guide.html` gets `Home › Gameplay › Field Guide`.
- Every one of those pages carries a matching **`BreadcrumbList` JSON-LD** block in `<head>` (a separate `<script>` — `faq.html`, `videos.html` and `leaderboard.html` now have two JSON-LD blocks; regenerate only the FAQPage one from `faq.js`).
- `style.css`: `.back-link` rules replaced in place by `.crumbs` / `.crumb-sep` / `.crumb-here` (+ `.page-head .crumbs{margin-bottom:16px}`, 6px tap padding under 760px). Nothing references `.back-link` any more.

## One label per page: `pre-registration.html` = "Early Access"

The page was called "Early Access" (nav tab), "Pre-registration guide" (footer on 52 pages) and "Pre-Registration" (its own title/h1). Now "Early Access" everywhere; the URL is unchanged.

- `<title>` → `Yakkamon Early Access Guide: Pre-Registration, Points & Free Mint | YakkamonWorld`; og:title / twitter:title → `Yakkamon Early Access Guide: Pre-Registration, Points & Free Mint`; `<h1>` → EARLY ACCESS. Meta descriptions untouched (they describe the process, which is still pre-registration).
- Footer START HERE link on all 52 pages: "Pre-registration guide" → "Early Access guide".
- Home page: the timeline section `<h2>` and the destination tile `<h3>` → EARLY ACCESS.
- In-body anchors that named the page (7 dated articles: the four access-code posts, referral-code, leaderboard-guideline, faq-page-live): "Pre-registration page" → "Early Access page". Anchor-text only, nav-only rule, no bumps.
- `search.js`: the 14 entries pointing at `pre-registration.html*` retagged "Pre-registration" → "Early Access"; the page's own entry retitled "Early Access guide". Prose that says "pre-registration" as a topic is unchanged. Still 343 entries.

## Titles: front-loaded, brand-suffixed

- Every page `<title>` now ends in ` | YakkamonWorld` (the home page too: `Yakkamon Guides: Pre-Registration, Points & Free Mint | YakkamonWorld`). 20 articles, the home page and 8 hub pages were missing it; `about`/`privacy` used ` — `; `gameplay-guide` still carried the retired "Yakkamon Portal" brand.
- Hub titles reworded to lead with the page name (this first fragment is what a sitelink label shows): `Yakkamon Gameplay Systems Explained`, `Yakkamon Deposit Leaderboard: Base + Ronin Points`, `Yakkamon Trainer Tips: Deposit Timing & Nurture Tactics`, `Yakkamon Video Guides: Free Mint, Points & Gameplay`, `Yakkamon FAQ: Ranks, Waves, Deposits & Free Mint`, `How Yakkamon Works: The Full Field Guide`. og:title / twitter:title on hub pages unchanged (og:site_name already carries the brand on social cards).
- `Article` JSON-LD `headline` on 21 articles had a stale ` — Yakkamon Portal` suffix — removed, so the headline is the article title again.

## Home page structured data (`index.html`)

- `WebSite`: `@id`, `alternateName` ["Yakkamon World", "yakkamonworld.com"], `inLanguage` en-GB, `publisher` now references the Organization by `@id`.
- `Organization`: `@id`, `alternateName` "Yakkamon World", `logo` as an `ImageObject` (192×192), `sameAs` gains the Reddit profile (u/YakkamonWorld) alongside X, YouTube, Telegram.
- No `SearchAction` / sitelinks-search-box markup — Google retired that feature in late 2024.

## Crawl hygiene

- `gameplay-poster-source.html` (the poster render source, publicly served): `<meta name="robots" content="noindex">` so it can't be indexed as a duplicate of the field guide.
- `robots.txt`: `Disallow: /*.md$`, `/wrangler.jsonc`, `/*.zip$` — `assets.directory: "."` serves the README, changelogs and config as public URLs; keep them out of results. Everything else stays `Allow: /`.

## README

- The "known wording mismatch" note is retired; two new house rules (one label per page + ` | YakkamonWorld` titles; breadcrumbs are structural, no bumps); breadcrumb steps added to "Add a news article" and "Add a whole new page".

## Validation (against GitHub main `1e51f5f`, which the uploaded zip matched byte-for-byte)

- `node --check` on every .js: clean. Every JSON-LD block on all 52 pages parses. Tag-balance pass: clean. `sitemap.xml` parses; every URL exists. Every `posts.js` slug has a file. Every internal `href`/`src` resolves; `#anchor` targets resolve to page ids or `faq.js` category ids. Playwright render of six pages at 320/375/430/768/1440: zero horizontal overflow, crumb trail one line at every width.
- Not touched: `sitemap.xml` (title/nav changes aren't content changes, so no `lastmod` edits), article bodies, `posts.js`, `faq.js`, `videos.js`, `gameplay.js`.

## What this can and cannot do

Sitelinks are decided by Google, and the expanded block under yakkamon.com is reserved for the #1 result of a navigational query. Realistic outcomes from this batch: one-line sitelinks under the #2 result for "yakkamon", breadcrumb paths in place of raw URLs in results, and the full expanded block for searches of the brand name itself once people search "yakkamonworld" and click through. Expect weeks, not days, and check Search Console → Enhancements → Breadcrumbs after the next crawl.
