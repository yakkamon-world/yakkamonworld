# Changelog — September 13, 2026 (roster grows to 26, a fifth row opens)

A newer official "YAKKAMONS" sheet adds **three creatures**, taking the revealed roster to
**twenty-six**. Unlike the September 8 sheet, this one is **not reordered** — every one of the
earlier twenty-three sits in the same slot (verified cell by cell against the 23-sheet,
correlation ~0.998 across all twenty-three). Built on main `fc54ce7a7a`+, which matched the
uploaded zip byte-for-byte before edits.

What's new on the sheet:

- a **horned red creature** with a gold crest and small flame tufts, filling the slot that was
  left empty at the end of the fourth row;
- a **fifth row opens** with a pink, long-eared creature carrying a brown sack of buds, and a
  blue-and-teal bird with a large yellow beak and its wings spread.

Four slots in the fifth row are empty. At twenty-six of the expected 50–60, the revealed share
moves from roughly two-fifths to nearly half.

## New files

- `yakkamon-roster-26.jpg` (688×469) and `yakkamon-roster-26-2x.jpg` (1376×938) — resized from
  the new source sheet (2752×1876), JPEG q82 like the earlier sheets. **The aspect ratio has
  changed**: the sheet is five rows tall now, so the display size is 688×469, not 688×384. The
  `-23`, `-22`, `-21` and original files are kept for the dated figures in the roster article.
- `CHANGELOG-2026-09-13-roster-26.md` — this file.

## Changed files

- `gameplay.html` — THE ROSTER SO FAR embed now shows the 26-sheet; alt text and caption updated
  (twenty-six, as of September 13) and the `width`/`height` attributes moved to 688×469; the
  page-updated line now leads with the roster change and keeps the September 11 Clock post and
  the September 5 Hunting note as standing.
- `gameplay-guide.html` — same embed swap in the `#your-yakkamon` section.
- `style.css` — **bug fix, pre-existing.** `.roster-figure` (the roster article's two figures)
  had no rule anywhere in the stylesheet, so those images fell back to the global
  `img{max-width:100%}`: the width shrank on a phone while the `height` attribute held, and the
  sheet rendered stretched (201×469 at 375px wide). Already wrong with the 23-sheet at 384px
  tall; the five-row sheet made it obvious. Fixed with `.roster-figure img{height:auto}` —
  `height:auto` only, deliberately not `width:100%`, so a 688px-wide JPEG is never upscaled into
  a wider article column on desktop. The original 18-sheet figure below it is fixed by the same
  rule.
- `article-yakkamon-roster-revealed.html` — new "Updated September 13 — twenty-six" callout above
  the September 8 one, naming the three creatures and noting that the order is unchanged this
  time; it also names the one resemblance worth not over-reading (the horned red creature is
  plainly the same design as the red one in row one, with horns, a crest and flames added — the
  team has said evolutions are planned, but nothing official ties the two portraits together).
  Updated figure is now the 26-sheet; the four description fields and the three share-image URLs
  point at `-26-2x` and `og:image:height` → 938; `dateModified` → 2026-09-13 and "Updated Sep 13,
  2026" in the meta line. Headline and original text stand as written, per the editorial line.
- `posts.js` — roster post excerpt updated (twenty-six as of Sep 13); a September 13 update line
  added above the September 8 one in the body mirror.
- `faq.js` + `faq.html` — "How many Yakkamon are there?" answer (twenty-six). Static `<details>`
  copy rebuilt with `build-static-hubs.mjs` and the FAQPage JSON-LD regenerated separately with
  `build-faq-jsonld.mjs` — both at 134 questions and in sync.
- `news.html` — static archive card for the roster post rebuilt with `build-static-hubs.mjs`.
  (`index.html` and `videos.html` came back unchanged — the roster post is no longer in the Home
  news grid.)
- `search.js` — four roster entries updated to twenty-six, plus one new entry, "What's new on
  the roster sheet?", naming the three creatures. 437 entries.
- `article-after-the-race.html`, `article-updates-panel.html` — Read-next label "The twenty-three
  Yakkamon shown so far" → twenty-six (nav-only, no `dateModified` bump).
- `sitemap.xml` — `<lastmod>` 2026-09-13 on article-yakkamon-roster-revealed, gameplay,
  gameplay-guide, faq and news. 60 URLs, unchanged.
- `README.md` — repo-layout line for the roster images brought up to date, a new "Swap in a new
  roster sheet" common task (the eight touch points, the recompute-the-height warning and the
  diff-before-you-write-the-callout habit), and a Known-quirks entry explaining why
  `.roster-embed img` and `.roster-figure img` carry different rules.

## Chatbot

No hand edit needed. The roster count lives in `faq.js`, `gameplay.html`, `posts.js` and the
roster article, all of which the knowledge builder ingests as tier 2. `chatbot-knowledge.json` is
rebuilt by the "Rebuild chatbot knowledge and static hubs" Action on push — left untouched here,
since docs.yakkamon.com 403s from the build container and a local build would commit a 0-docs
snapshot. The answer cache keys on the build stamp, so the old "twenty-three" answers expire with
it. There is no tier-1 `chatbot-official-posts.md` entry for the roster sheet, and none was added:
the sheet is an image, not a post.

## Housekeeping (needs a manual delete)

Swapping the embeds leaves the **23-sheet with no inbound references**, joining the 21- and
22-sheets, which were already orphaned. `yakkamon-roster-21.jpg`, `-21-2x.jpg`, `-22.jpg`,
`-22-2x.jpg`, `-23.jpg` and `-23-2x.jpg` are ~603 KB of dead weight and safe to delete — but a zip
upload can only add or overwrite files, so they have to be deleted by hand on GitHub. The README
now names them so this doesn't get lost. The original `yakkamon-roster.jpg` / `-2x.jpg` (the 18)
stay: the roster article still shows them as its dated original figure.

## Not changed

- No new article. The update callout on the roster piece is the record, as agreed when the sheet
  grew to twenty-one.
- `_redirects` — no new page, so no new rule (63 rules).

## Checks

`node --check` on every .js/.mjs (pass); every JSON-LD block parses; tag balance across all 62
pages (clean); `sitemap.xml` parses (60 URLs); every posts.js slug has a matching article file
(47/47); 0 broken internal href/src or anchors across all pages; American-English pass (no hits —
only "specialist"/"specialists" false positives in untouched text); Playwright at
320/375/414/768/1280 on gameplay, the field guide and the roster article — 0px horizontal
overflow everywhere and the sheet's aspect ratio correct at every width after the `.roster-figure`
fix.
