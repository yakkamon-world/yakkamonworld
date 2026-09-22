# Changelog — September 22, 2026 — EP 21 "Sept 17 Dev Stream Recap"

Built on main `ca4661a`, which matched the uploaded zip byte-for-byte.

- `videos.js` — EP 21 "Yakkamon – Sept 17 Dev Stream Recap: Bad Eggs, Battles & a November Target"
  (`7OXBVY1PTso`, 6:08) added to the top of the **ANALYSIS** block (the block the other dev-stream
  recaps live in — EP 17, EP 15, EP 9), related → `article-dev-stream-sept-17-recap.html`. 21 videos.
  ANALYSIS sorts newest first, so EP 21 leads the block.
- `videos.html` — hardcoded `#vid-count` 20 → 21; CollectionPage `dateModified` → 2026-09-22;
  static block rebuilt with `build-static-hubs.mjs` (EP 21 card is in the pre-rendered HTML, so
  crawlers, no-JS visitors and the chatbot builder all see it).
- `sitemap.xml` — videos.html `<lastmod>` → 2026-09-22.
- `search.js` — "All 21 episodes" excerpt; two new Videos entries ("Video: Sept 17 Dev Stream
  Recap — Bad Eggs, Battles & a November Target", "Is there a video on the September 17 dev
  stream?"). 460 total (was 458).
- `article-dev-stream-sept-17-recap.html` — "Prefer to watch? The Sept 17 dev stream recap in
  6 minutes" watch-link at the top of the body, same placement as the EP 17 and EP 20 articles
  (nav-only, no `dateModified` bump — the article text is unchanged).
- `README.md` — videos.js line now reads 21 entries.
- Chatbot: `videos.js` is a tier-2 source and the recap article is already ingested; the
  "Rebuild chatbot knowledge and static hubs" Action rebuilds `chatbot-knowledge.json` on push.
  `chatbot-knowledge.json` deliberately left untouched here (local rebuild in the sandbox yields
  0 docs snapshots — docs.yakkamon.com 403s from the build container).
- `_redirects` unchanged — no new page. `posts.js` unchanged — no OneSignal push fires.

## Checks

`node --check` on every .js/.mjs; every JSON-LD block on videos.html parses; sitemap parses;
videos.js has no duplicate episode numbers or video ids and every `related` target exists;
search.js entries all resolve; Playwright on videos.html at 375 and 1280 — EP 21 card renders
at the head of ANALYSIS, count reads 21, zero horizontal overflow.
