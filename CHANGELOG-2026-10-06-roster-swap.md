# Changelog — October 6, 2026 — roster sheet re-issued: still twenty-six, one swap

A newer official "YAKKAMONS" sheet replaces the September 13 one on the Gameplay
page. The count is unchanged at **twenty-six**, but one portrait is different:
the **blue-and-teal bird with the large yellow beak** (added September 13, second
slot of the fifth row) is gone, and a **green dragon** with pink horns, pink wings
and a cream belly stands in its slot. Built on main `f44b461`, which matched the
uploaded zip byte-for-byte before edits.

What the cell-by-cell diff found (new source 2752×1876, same size as the last one,
downscaled onto the 1376-wide `-26-2x` and compared slot by slot):

- rows one to four — all twenty-four portraits unchanged and in the same order
  (correlation ≥ 0.99 in every cell);
- fifth row, slot 1 — the pink, long-eared sack-carrier is the **same creature**,
  drawn a little smaller so it sits inside its frame (the September 13 sheet had
  it oversized and clipped by the cell border). Not a new Yakkamon;
- fifth row, slot 2 — the bird is replaced by the dragon;
- the same four slots in the fifth row stay empty.

It is the first time a creature has left the sheet since the August 25 badger
correction. The team has said nothing about why — cut, redrawn or held back for
a later Chapter are all unconfirmed, and every mention on the site says so. The
count still reads as twenty-six of the thirty in the early-access build (Sept 17
stream), so "four still unseen" stands everywhere.

## New files

- `yakkamon-roster-26b.jpg` (688×469) and `yakkamon-roster-26b-2x.jpg` (1376×938)
  — resized from the new source, JPEG q82 like the earlier sheets. Same five-row
  aspect as the September 13 files, so the `width`/`height` attributes do not
  move. **New filename on purpose**, even though the count is the same:
  Cloudflare and browsers cache by URL, so overwriting `-26.jpg` in place would
  have kept serving the old sheet for days, and the September 13 file stays on
  record for the diff. The README's roster task now says so.
- `CHANGELOG-2026-10-06-roster-swap.md` — this file.

## Changed files

- `gameplay.html` — THE ROSTER SO FAR embed now shows the `-26b` sheet (link,
  `src`, alt text); the caption reads "as of October 6" and names the swap in
  one sentence. The `page-updated` line leads with the swap and keeps the
  September 24 Battles guide as standing.
- `gameplay-guide.html` — same embed swap in `#your-yakkamon`; its `page-updated`
  line now opens with the swap (linking `#your-yakkamon`) ahead of the standing
  Battles note.
- `article-yakkamon-roster-revealed.html` — new "Updated October 6 — still
  twenty-six, but one swap" callout above the September 13 one: names the bird
  that left and the dragon that arrived, notes the sack-carrier is the same
  creature drawn smaller, the same four empty slots, the badger precedent, and
  that the reason is unexplained. Updated figure → `-26b`; the four description
  fields (og, twitter, meta, JSON-LD) now say "updated as the official sheet
  changed — twenty-six shown as of October 6, with one portrait swapped out for
  a new one"; the three share-image URLs → `-26b-2x` (`og:image:height` stays
  938); `dateModified` → 2026-10-06 and "Updated Oct 6, 2026" in the meta line.
  Headline and original text stand as written, per the editorial line.
- `posts.js` — roster post excerpt updated (twenty-six as of Oct 6, one portrait
  swapped for a green dragon); an October 6 update line added above the
  September 13 one in the body mirror.
- `faq.js` + `faq.html` — "How many Yakkamon are there?" gains one sentence on
  the October 6 swap. Static `<details>` rebuilt with `build-static-hubs.mjs`
  and the FAQPage JSON-LD regenerated with `build-faq-jsonld.mjs` — both at 138
  questions and in sync. No new question.
- `news.html` — static archive card for the roster post rebuilt with
  `build-static-hubs.mjs` (`index.html` and `videos.html` came back unchanged).
- `search.js` — four roster entries updated ("Eighteen Yakkamon, No Names",
  "How many Yakkamon have been revealed?", "What's new on the roster sheet?",
  "The roster so far", plus the FAQ "How many Yakkamon are there?" excerpt) and
  one new entry, "Which Yakkamon was removed from the roster sheet?". 464 entries
  (was 463). The "what's new" entry no longer describes the September 13 trio —
  that history lives in the article's callouts.
- `style.css` — **bug fix, pre-existing.** `.roster-figure` (the roster article's
  two figures) kept the browser's default 40px side margins on a `<figure>`, so
  on a 390px phone the sheet drew 216px wide inside a 342px column — the same
  before and after the swap, just noticed while checking the new sheet. Fixed
  with `.roster-figure{margin-left:0; margin-right:0}`; the figures now fill the
  column on a phone (296px at 390) and are unchanged on desktop, where the
  688px JPEG was never upscaled and still starts from the left edge.
- `sitemap.xml` — `<lastmod>` 2026-10-06 on article-yakkamon-roster-revealed,
  gameplay, gameplay-guide, faq and news. 62 URLs, unchanged.
- `README.md` — repo-layout line for the roster images (the `-26` pair joins the
  deletable list), the "Swap in a new roster sheet" task gains the
  same-count-new-filename rule and the orphan reminder, and the ROSTER COUNT
  quirk records the swap and lists the spots to settle if the team ever
  explains it.

## Not changed

- `article-after-the-race.html`, `article-updates-panel.html` — the read-next
  label "The twenty-six Yakkamon shown so far" is still correct.
- `gameplay.js` (creature-collecting) — "Twenty-six have been shown publicly …
  four are still faces nobody outside the studio has seen" is still correct.
- The gameplay poster — panel 3 says thirty in the build; it never named the
  bird. No re-render.
- `_redirects` — no new page, so no new rule.
- No new article. The update callout on the roster piece is the record, as
  agreed when the sheet grew to twenty-one.

## Chatbot

No hand edit needed, as before: the swap is now stated in `faq.js`,
`gameplay.html`, `gameplay-guide.html`, `posts.js` and the roster article, all
tier-2 sources for the knowledge builder. `chatbot-knowledge.json` is rebuilt by
the "Rebuild chatbot knowledge and static hubs" Action on push and was left
untouched here (a local build inside the container commits a 0-docs snapshot).
The answer cache keys on the build stamp, so any cached "three added September
13, including a blue-and-teal bird" answer expires with it. Still no tier-1
`chatbot-official-posts.md` entry — the sheet is an image, not a post.

## Housekeeping (needs a manual delete)

`yakkamon-roster-26.jpg` and `yakkamon-roster-26-2x.jpg` (September 13, the one
with the bird) are now referenced by nothing and join the already-orphaned
`-21`, `-22` and `-23` pairs — about 842 KB in all, safe to delete by hand on
GitHub (a zip upload can only add or overwrite). The original
`yakkamon-roster.jpg` / `-2x.jpg` (the 18) stay: the roster article still shows
them as its dated original figure.

## Push notifications

`posts.js` changed, but no slug was added — the push Action only sends for NEW
slugs, so uploading this batch fires no OneSignal notification.

## Checks

`node --check` on every .js/.mjs (pass); every JSON-LD block on all 64 pages
parses; FAQ `<details>` and FAQPage JSON-LD both at 138; `sitemap.xml` parses
(62 URLs); 0 broken internal href/src or anchors across all pages and all 464
search.js URLs resolve; American-English pass over the new text (no hits);
Playwright over `file://` at 390 and 1280 on gameplay.html#roster, the field
guide's #your-yakkamon and the roster article — the new sheet renders at its
own aspect ratio everywhere, 0px horizontal overflow, and the article figure
now spans the phone column after the `.roster-figure` margin fix.
