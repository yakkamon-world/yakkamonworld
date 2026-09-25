# Changelog — September 24, 2026 — Poster re-rendered for the official Battles guide

## Why

The Sept 24 battles batch rewrote the Gameplay section, the field guide, the FAQ and search around
the team's official Battles guide, but left the "whole game, one page" poster at its Sept 20 render,
whose Battle System panel still carried the Sept 17 stream wording. This follow-up brings the
poster level with the rest of the section.

## Changed — poster

- `gameplay-poster-source.html`
  - Red revision banner → "REVISED SEP 24, 2026 — AFTER THE OFFICIAL BATTLES GUIDE …".
  - Panel 19 THE BATTLE SYSTEM rebuilt (tag NEW SEP 24): a one-line lede ("won before the first hit
    lands"), the guide's eight points as numbered steps (setup stage, real time and scaling with a
    bench, act on their own with condition skills you choose, types on every skill, subs and battle
    items plus one preparation item, six kinds of fight, damage sticks, rewards), an "Underneath
    (Sep 17 stream)" card for the 70/30 split, four stats, no-stacking buffs, AROC up front, gyms
    before the arena, and a new LIKE THIS.
  - Panel 09 Hurt card: battle damage sticks until rested or healed.
  - Panel 13 gym card: a gym is a team you leave behind that wins for you offline.
  - Panel 17 Angry card: win and you may bring the wild one home; a hunter that wins hurt carries it.
  - Panel 22 "Battle numbers & coins" unknown: board vs bench size, skills per Yakkamon and where
    they come from, item limits, the type chart.
  - Footer sources line: "… Hunting, Clock and Battles posts … through September 24, 2026".
- `gameplay-poster.png` re-rendered → 1800×2163 (was 1800×2025); `gameplay-poster-full.png` →
  3409×4096 (was 3641×4096). Balanced into 12 columns as before; 22 panels.

## Changed — pages

- `gameplay.html`: `poster-rev` paragraph rewritten for the Sept 24 revision (links the Battles
  article), `alt` text rewritten, `poster-note` now says "revised after the official Battles guide
  of September 24", `<img>` height → 2163. The section under the poster was already current from
  the earlier Sept 24 batch. Sitemap lastmod was already 2026-09-24.
- `article-gameplay-guide-live.html`, `article-dev-stream-three-recap.html`: `<img>` height →
  2163 only (embedded poster; no date bump — the articles' own text is unchanged).
- `search.js`: the "How Yakkamon works — poster" entry now names the Sept 24 revision and the
  eight battle points, and deep-links to `gameplay.html#poster` (still 471 entries).
- `README.md`: poster sizes in the repo layout; new common task "Re-render the gameplay poster"
  (render recipe + sandbox font gotcha); the BATTLES Known-quirk now says the poster IS rebuilt and
  must be re-rendered alongside the other spots if the readings change.

## Not changed

- Chatbot: the Battles post is already the top tier-1 entry in `chatbot-official-posts.md`; the
  poster is an image, so nothing new to feed. `chatbot-knowledge.json` rebuilds on push.
- `faq.js`, `gameplay.js`, `gameplay-guide.html`, `posts.js`, `sitemap.xml`, `_redirects` — no
  change; no new slug, so no OneSignal push fires with this upload.

## Pre-ship checks

README checks 1–6 run: see the upload note.
