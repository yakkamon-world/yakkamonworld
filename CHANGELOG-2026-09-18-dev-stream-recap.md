# Changelog — September 18, 2026 — Dev stream recap (Sept 17 stream): article, 973 Bad Eggs site-wide, chatbot addendum

## Why

The official dev stream on September 17, 2026 (Adam, Craig, Spencer, Matt) covered the free-mint
post-mortem, a new Bad Egg count (973, up from the 365 published on completion day), the first full
battle-system overview, and the most specific launch dates yet (beta testing aimed at October, early
access at mid-to-late November). This batch adds the recap article and brings every stale spot on the
site in line with what was said.

## New

- `article-dev-stream-sept-17-recap.html` — "Dev Stream Recap: 973 Bad Eggs, the Battle System
  Unveiled, and Early Access Aimed at November" (slug `dev-stream-sept-17-recap`, category
  `devstream`, dated Sep 18, 2026; anchors `#mint`, `#bad-eggs`, `#battles`, `#build`, `#schedule`,
  `#systems`, `#qa`).

## Changed

- `posts.js` — new entry at the top (49 posts). NOTE: uploading this batch changes `posts.js`, so the
  OneSignal news push fires for the new slug — intended, it is news.
- `search.js` — 449 entries (was 444): 5 new entries for the article (recap, battles, beta/early-access
  dates, Bad Egg Legendary odds, land resets) and the "How many Bad Eggs are there?" excerpt updated to
  973 and repointed at the new article.
- `faq.js` — `what-is-a-bad-egg` rewritten: 973 as of the Sept 17 dev stream, review essentially
  complete, Legendaries/Rares go to clean eggs only, link repointed at the recap.
  `when-does-the-game-actually-come-out` gains an "Update, September 18" paragraph with the October
  beta / mid-to-late-November aims, the two-weeks-notice commitment and the leaderboard timing.
  Still 137 questions. `faq.html` static copy and FAQPage JSON-LD rebuilt (`build-static-hubs.mjs` +
  `build-faq-jsonld.mjs`).
- Bad Egg count 365 → 973 in the callouts on `index.html` (timeline), `pre-registration.html` (§7) and
  `article-ronin-free-mint-guide.html` (each now also names the clean-eggs-only Legendary rule);
  the guide's `dateModified` and visible "Updated" line moved to Sep 18. The dated 365 mentions inside
  `article-free-mint-complete.html` stay as published (correct at the time of writing).
- `chatbot-official-posts.md` — Bad Eggs tier-1 section updated: 973 per the Sept 17 stream, ~3%
  typical-rate comparison, review essentially complete, Legendaries/Rares excluded from Bad Eggs,
  marketplace visibility + wallet-cache caveat, 9,027 clean eggs, and the ~25,000 hidden trainer-dashboard
  bans. (Chatbot knowledge itself rebuilds via the GitHub Action on push — nothing committed by hand.)
- `chatbot-digest.md` — new "Section 0: September 17, 2026 stream — addendum" carrying the full stream
  (mint post-mortem, Bad Eggs, battles, build status, dates, gyms, Training Center, expansions,
  automation, Q&A), marked as winning over the older sections per the later-stream-wins rule; header
  and source list updated. The full digest re-merge stays a Dev Meeting Cumulative File job.
- `gameplay.js` — `combat-system` detail gains an "Update, September 18" paragraph (70/30 auto battler,
  three-or-four squad, condition skills, four battle stats, 3v3 lane framing loosened) linking the
  article.
- Footer "Dev stream recap" link repointed from `article-dev-stream-three-recap.html` to the new
  article on all 63 pages (chrome — no dateModified bumps for this alone).
- `news.html` + `index.html` static hubs rebuilt (new card, Dev Streams count 6, home grid).
- `sitemap.xml` — 62 URLs (new article added, lastmod 2026-09-18); lastmod bumped to 2026-09-18 for
  `/`, `news.html`, `faq.html`, `gameplay.html`, `pre-registration.html`,
  `article-ronin-free-mint-guide.html`.
- `README.md` — Bad Egg known-quirk updated (973, review essentially complete, spot list now includes
  the digest addendum and the new search entries).

## Facts recorded from the stream (for the record)

973 Bad Eggs (~1 in 10; typical free mint ~3%), review "one of the last markings"; Legendaries and
Rares NOT distributed among Bad Eggs; ~25,000 hidden trainer-dashboard bans enforced before the
leaderboard finalizes; 250 points per mint live on the dashboard; battle system: auto battler, 70/30
planning-to-input, 3–4 Yakkamon, condition-triggered skills, items, stats Health/Attack/Defense/Speed,
identical buffs don't stack; build: 30 Yakkamon (23 publicly revealed), 36 levels, hunting still
prototyped; dates: beta October (internal aim), early access mid-to-late November (best case, officially
Q4), ~2 weeks' notice, leaderboard final a few days before, first hunt ~6 weeks in, Chapter Zero 6–8
weeks after early access, competition arena early next year; gyms prototype ships before the arena;
Yakkamon Training Center teased; lands never reset; no SFL-map redirect but crossovers planned.
