# Changelog — 1 September 2026

Free-mint dev stream graded article batch.

## New

- `article-free-mint-stream-graded.html` — "We Graded Every Decision From Yakkamon's Free-Mint Dev Stream — Sixteen Grades, and a 10 September Deadline" (slug `free-mint-stream-graded`, category COMMUNITY, ~4,700 words). Sixteen decisions graded A to F (range A to C+), each with a "YakkamonWorld Score is" callout: the mint (Ronin Launchpad A−, top-1,000 guarantee A, five-flower minimum B+, click race C+, Ronin wave B, 1,500 manual reserve B−, visible-board snapshot B, hidden/tradable/one-collection B) and the game (legendary auras A−, random-rolled utilities B+, two-track economy A, combat skill expression A−, no log-off punishment A, no gear A, breeding caps A−, no evolutions at launch B+). Includes the full wave table, the dates list (snapshot 10 Sep, mint 14 Sep, reveal 14 Oct), a Ghost/Tide naming flag, impact on the After the Race thesis, a pre-snapshot action list, and questions for the next stream. og:image falls back to og-default.png.

## Changed

- `posts.js` — new top entry mirroring the article (13 body paragraphs). 37 posts.
- `search.js` — 6 new entries (article, mint date, snapshot date, wave structure, mint legendaries, free-to-play layer). 304 entries.
- `sitemap.xml` — added article URL with `<lastmod>2026-09-01</lastmod>` (monthly / 0.7). 50 URLs.

## Validation

node --check on both JS files, JSON-LD parses, tag balance clean, sitemap parses, all 37 post slugs have matching article files, no duplicate slugs, no broken local hrefs in the new article, all search.js URLs resolve.

## Not done (deliberate)

- No dateModified bumps elsewhere — nothing else edited.
- FAQ untouched — its "mid-September" mint answers remain true; exact-date FAQ entries can follow once the docs settle the Ghost/Tide naming.
- `article-after-the-race.html` not annotated — the new article notes the free mint retires its "market with no sellers" detail; add an update callout there if wanted.
