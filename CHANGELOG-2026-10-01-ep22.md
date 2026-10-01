# Changelog — October 1, 2026 — EP 22 "Yakkamon Battles Explained"

Built on main `f50c12c`, which matched the uploaded zip byte-for-byte.

- `videos.js` — EP 22 "Yakkamon Battles Explained – Setup, Skills, Types & Why One Squad Isn't Enough"
  (`ZNnUzn-V4co`, 2:52) added to the top of the **START HERE** block (the block the other
  official-post explainers live in — EP 20 The Clock, EP 18 Hunting, EP 16 Regions), related →
  `article-battles-explained.html`. 22 videos. START HERE sorts oldest-first ("start at the top and
  work down"), so EP 22 closes the block, exactly where EP 20 sat before it.
- `videos.html` — hardcoded `#vid-count` 21 → 22; CollectionPage `dateModified` → 2026-10-01;
  static block rebuilt with `build-static-hubs.mjs` (EP 22 card is in the pre-rendered HTML, so
  crawlers, no-JS visitors and the chatbot builder all see it). news.html / index.html / faq.html
  came back "unchanged" from the builder — main was already in sync.
- `sitemap.xml` — videos.html `<lastmod>` → 2026-10-01 (63 URLs, unchanged).
- `search.js` — "All 22 episodes" excerpt; two new Videos entries ("Video: Yakkamon Battles
  Explained — Setup, Skills, Types & Why One Squad Isn't Enough", "Is there a video on the battle
  system?"), placed with the other recent episodes next to the EP 21 pair. 473 total (was 471).
- `article-battles-explained.html` — "Prefer to watch? Battles explained in 3 minutes" watch-link
  at the top of the body, same placement as the Clock, Hunting and Sept 17 recap articles
  (nav-only, no `dateModified` bump — the article text is unchanged, still 2026-09-24).
- `README.md` — videos.js line now reads 22 entries.
- Chatbot: `videos.js` is a tier-2 source and the Battles article is already ingested; the
  "Rebuild chatbot knowledge and static hubs" Action (triggers on `videos.js` and `*.html`)
  rebuilds `chatbot-knowledge.json` on push. `chatbot-knowledge.json` deliberately left
  untouched here (local rebuild in the sandbox yields 0 docs snapshots — docs.yakkamon.com
  403s from the build container).
- `_redirects` unchanged — no new page. `posts.js` unchanged — no OneSignal push fires.
- Blurb written from the official Battles post (Sep 24) and the site's own Battles article; the
  YouTube page itself could not be read from the build container.

## Checks

`node --check` on every .js/.mjs; both JSON-LD blocks on videos.html and on the Battles article
parse; sitemap parses (63 URLs); videos.js has no duplicate episode numbers or video ids, every
id is a valid 11-char YouTube id and every `related` target exists; all 473 search.js entries
resolve to an existing page/anchor; Playwright on videos.html at 375 and 1280 — EP 22 card
renders at the end of START HERE with the right title, runtime, YouTube link and related link,
count reads 22, zero horizontal overflow, no console errors; the article watch-link renders.
