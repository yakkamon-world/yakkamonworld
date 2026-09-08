# Changelog — 8 September 2026 (roster grows to 23, reordered)

A newer official "YAKKAMONS" sheet adds a **twenty-third creature** — a green, snail-like
creature with two pink flowers on its stalks and a leaf-shaped shell on its back, in the fifth
slot of the fourth row (one slot still empty). The sheet has also been **reordered**: all
twenty-two earlier portraits are present, in a new arrangement with no obvious pattern.
Built on main `059f307`, which matched the uploaded zip byte-for-byte.

## New files
- `yakkamon-roster-23.jpg` (688×384) and `yakkamon-roster-23-2x.jpg` (1376×768) — resized from
  the new source sheet (2752×1534), JPEG q82 like the earlier sheets. The `-22`, `-21` and original
  files are kept for the dated figures in the roster article.
- `CHANGELOG-2026-09-08-roster-23.md` — this file.

## Changed files
- `gameplay.html` — THE ROSTER SO FAR embed now shows the 23-sheet; alt text and caption updated
  (twenty-three, as of 8 September); the section gained `id="roster"` so it can be deep-linked;
  the page-updated line now leads with the roster change and keeps the 5 Sep Hunting and 2 Sep
  Yakkapedia notes.
- `gameplay-guide.html` — same embed swap in the #your-yakkamon section.
- `style.css` — `.gp-extra` gained `scroll-margin-top:90px` so `gameplay.html#roster` lands below
  the sticky topbar.
- `article-yakkamon-roster-revealed.html` — new "Updated 8 September — twenty-three, and a reshuffle"
  callout above the 31 August one; updated figure now the 23-sheet; the four description fields and
  the three share-image URLs point at `-23-2x`; `dateModified` → 2026-09-08 and "Updated Sep 8, 2026"
  in the meta line. Headline and original text stand as written, per the editorial line.
- `posts.js` — roster post excerpt updated; an 8 September update line added above the 31 August one
  in the body mirror.
- `faq.js` + `faq.html` — "How many Yakkamon are there?" answer (twenty-three; Gameplay link now
  → `gameplay.html#roster`), its FAQPage JSON-LD text regenerated, and the static `<details>` copy
  rebuilt with `build-static-hubs.mjs`.
- `news.html` — static archive card for the roster post rebuilt with `build-static-hubs.mjs`.
- `search.js` — three roster entries updated to twenty-three (the Gameplay one now deep-links to
  `gameplay.html#roster`).
- `article-after-the-race.html`, `article-updates-panel.html` — Read-next label "The twenty-two
  Yakkamon shown so far" → twenty-three (nav-only, no dateModified bump).
- `sitemap.xml` — `<lastmod>` 2026-09-08 on article-yakkamon-roster-revealed, gameplay and
  gameplay-guide (faq and news were already 2026-09-08).
- `README.md` — repo-layout line for the roster images brought up to date.

## Chatbot
No hand edit needed: the roster count lives in faq.js, gameplay.html and the roster article, all of
which the knowledge builder ingests (tier 2). `chatbot-knowledge.json` is rebuilt by the
"Rebuild chatbot knowledge and static hubs" Action on push; the answer cache is keyed on the build
stamp, so the old "twenty-two" answer expires with it.
