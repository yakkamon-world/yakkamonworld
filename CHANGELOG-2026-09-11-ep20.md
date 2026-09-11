# Changelog — September 11, 2026 — EP 20 "Yakkamon — The Clock"

Built on main `dbc0d26`, which matched the uploaded zip byte-for-byte.

- `videos.js` — EP 20 "Yakkamon — The Clock" (`cgFA2XYNink`, 5:04) added to the **START HERE**
  block (the block the other official-post explainers live in — EP 18 Hunting, EP 16 Regions),
  related → `article-the-clock-explained.html`. 20 videos. START HERE sorts ascending by
  episode number, so EP 20 renders at the foot of that block by design.
- `videos.html` — hardcoded `#vid-count` 19 → 20; CollectionPage `dateModified` → 2026-09-11;
  static block rebuilt with `build-static-hubs.mjs`.
- `sitemap.xml` — videos.html `<lastmod>` → 2026-09-11.
- `search.js` — "All 20 episodes" excerpt; two new Videos entries ("Video: Yakkamon — The Clock",
  "Is there a video on the in-game clock?"). 431 total.
- `article-the-clock-explained.html` — "Prefer to watch? The Clock explained in 5 minutes"
  watch-link at the top of the body (nav-only, no `dateModified` bump — the article shipped
  earlier today and its text is unchanged).
- `README.md` — videos.js line now reads 20 entries.
- Chatbot: `videos.js` is a tier-2 source and the clock article is already ingested; the
  "Rebuild chatbot knowledge and static hubs" Action rebuilds `chatbot-knowledge.json` on push
  and the answer cache keys on the build stamp. `chatbot-knowledge.json` deliberately left
  untouched here — a local rebuild in the sandbox produces 0 docs snapshots (docs.yakkamon.com
  403s from the build container).
- `_redirects` unchanged — no new page in this batch.

## Checks

`node --check` on every .js/.mjs; every JSON-LD block parses; sitemap parses; tag balance on
all 60 pages clean; every relative href/src resolves; videos.js has no duplicate episode numbers
or video ids and its `related` target exists; search.js 431 entries, every url resolves; posts.js
46 slugs all have article files; Playwright on videos.html at 375 and 1280 — EP 20 card renders,
count reads 20, zero horizontal overflow.
