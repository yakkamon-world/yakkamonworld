# Changelog — October 3, 2026 — The deposit leaderboard retired

Per Erdem: the on-chain deposit leaderboard comes off the site entirely — no
more tracking. The board had stalled the night before because the free Dune
trial behind its worker ended (account now view-only, 0 credits); with six
weeks of the deposit race left, a paid, deposit-only copy of a ranking the
trainer dashboard already shows was not worth keeping. Built on main `38e9f4c`
(= the uploaded zip, byte for byte).

## Delete by hand on GitHub (not in the zip — the uploader cannot delete)
- `leaderboard.html`
- `leaderboard.js`

## Removed
- The **Leaderboard tab** from the nav on all 63 pages and the **"Deposit
  leaderboard"** link from the footer COMMUNITY column on all 63 pages
  (`gameplay-poster-source.html` has neither). Chrome only — no dateModified
  bumps for these.
- The Home destination tile for the board; the fifth tile is now **TIPS**
  (`tips.html`, same purple, new pixel icon) so the five-column grid stays
  full. The 404 page's quick link likewise became "Trainer Tips".
- The FAQ topic **"Leaderboard"** (4 questions). Two of its answers were
  board-only and are gone (`why-is-my-leaderboard-score-lower-than-the-game`,
  `how-often-does-the-leaderboard-update`); the other two live on — see Added.
  **138 questions across 13 topics** (was 140 / 14).
- The nine `search.js` entries that pointed at `leaderboard.html` and the two
  FAQ entries for the deleted answers — **463 entries** (was 474).
- The sitemap URL for `leaderboard.html` — **62 URLs** (was 63).
- `_redirects`: the `/leaderboard /leaderboard.html` line.
- The phone tab strip's full-row Contact rule: with nine tabs the 3-column grid
  fills exactly, so `.tab.tab-wide` is now `grid-column:auto` (the class stays
  in the markup for an easy revert if the tab count changes again).

## Added
- `faq.js` → "Start here": **"What happened to the deposit leaderboard that was
  on this site?"** — retired October 3, 2026; counted deposit points only;
  check your real rank on the trainer dashboard at yakkamon.com; the deposit
  math is unchanged on the guideline and Tips; the launch post keeps the
  record. It deliberately keeps the OLD id
  `where-can-i-see-the-live-deposit-leaderboard` so saved links and cached
  chat answers land on the explanation.
- `faq.js` → "$FLOWER deposits": the **wallet address vs deposit address**
  answer, moved there intact except for its last sentence (now "if you ever
  look yourself up on a block explorer, use the deposit address").
- `article-leaderboard-live.html`: an **"Update, October 3, 2026 — the board
  has been retired"** callout at the top of the body; the post below stands as
  written. `dateModified` → 2026-10-03.
- `posts.js`: the same update as the first body line of the launch post.
- `_redirects`: `/leaderboard.html`, `/leaderboard`, `/stats`, `/stats.html`
  → `/article-leaderboard-live.html` (301) — every old link to the board lands
  on the retirement note, no chains.
- `search.js`: the FAQ entry for the new answer; the launch-post entry's
  excerpt ends "Retired October 3, 2026."

## Changed (dated articles — links to the board unlinked or the clause trimmed, never rewritten)
- `article-leaderboard-live.html` — "Leaderboard" and
  "yakkamonworld.com/leaderboard" are plain text; "The deposit leaderboard"
  dropped from Read next.
- `article-free-mint-stream-graded.html` — two mentions unlinked; "or see the
  live picture on our leaderboard" trimmed; the CTA button is now
  **CHECK YOUR RANK AT YAKKAMON.COM →** (external). `dateModified` → 2026-10-03.
- `article-ronin-free-mint-guide.html` — "Check your position on our deposit
  leaderboard and inside yakkamon.com" → "Check your position inside
  yakkamon.com". `dateModified` → 2026-10-03.
- `article-whitelist-live.html` — "the in-game dashboard and our deposit
  leaderboard are still the places to look" → "the in-game dashboard is still
  the place to look". `dateModified` → 2026-10-03.
- `article-free-mint-by-the-numbers.html` — source line reads "this site's
  on-chain deposit leaderboard (retired October 3, 2026)", unlinked. No bump.
- `article-mint-page-live.html` — "the leaderboard" unlinked. No bump.
- `article-economy-explained.html` — the multiplier link now points at the
  deposit guideline. No bump.
- `about.html` — the "what this is" paragraph now says the board ran for most
  of the race and was retired on October 3, 2026, linking the launch post.
- `videos.js` — EP 14's related link → "Read the launch post"
  (`article-leaderboard-live.html`).
- `sitemap.xml` — lastmod 2026-10-03 on `/`, `about.html`, `faq.html` and the
  four bumped articles.
- `README.md` — nine tabs; workers table (leaderboard worker feeds nothing; the
  counter worker's `/flower` route has no caller); repo layout; `_redirects`
  description; `.money-note` quirk list; new Common task **"The deposit
  leaderboard is gone"** (what came off, what stayed, the Cloudflare clean-up)
  and a LEADERBOARD RETIRED quirk.
- Static hubs rebuilt (`videos.html`, `faq.html`) and the FAQPage JSON-LD
  regenerated (138 questions) with the repo's own scripts.

## Not changed
- `article-leaderboard-guideline.html` — it explains the *official* ranking
  and stays as is (footer "Leaderboard guideline" link included).
- EP 14 "Yakkamon Leaderboard Is Live" stays on the Videos page as a dated
  episode.
- `chatbot-official-posts.md` / `chatbot-digest.md` only ever mentioned the
  official leaderboard; nothing to settle. The chat learns the retirement from
  the new FAQ answer and the callout on the next Action rebuild
  (`chatbot-knowledge.json` not touched here — see README on the sandbox 403).
- `posts.js` gained a body line but no new slug, so **no OneSignal push**.
- `deposit-week.js`, `tips.html`, `pre-registration.html`: nav/footer only.

## After upload (Cloudflare / Dune, by hand)
- Pause or delete **yakkamon-leaderboard-worker** and its `*/30` cron; nothing
  on the site calls it anymore. Optional: the counter worker's `/flower` route.
- The Dune account can stay view-only; query 8381304 is public and its SQL is
  the record of the scoring. If the chat worker's system prompt lists the
  site's sections, drop "Leaderboard" there (that repo is not visible from
  here).

## Verified
JS syntax on every `*.js`; every JSON-LD block parses; sitemap valid XML (62
URLs); 0 internal `href`/`src` targets missing; every `_redirects` target
exists; all 463 search URLs and 142 FAQ anchors resolve; no
`leaderboard.html`/`leaderboard.js` reference left outside changelogs, the
redirect rules and README history. Playwright over `file://` at 1280/390 on
Home, the launch post, FAQ and 404: nine tabs, five tiles, 3×3 phone tab grid,
callout renders, no horizontal overflow.
