# Changelog — 8 September 2026 — the site switches to American English

Everything visible on yakkamonworld.com is now American English: spelling, vocabulary and
date order. Built on main `c66ebef`, which matched the uploaded zip byte-for-byte.

## What changed
- **Spelling and vocabulary** — 263 replacements across 57 distinct words, from a
  British→American spelling dictionary (the `american-british-english-translator` word
  list, 1,738 entries) plus a curated extras list for words the dictionary lacks (math,
  toward, afterward, fortnight → two weeks, customization, refertilize, weaponize, …).
  Removed from the dictionary as not-American: dialogue, analyses (noun), glamour, axe,
  aesthetic. Biggest hits: finalise/d/s (57), maths (19), afterwards (12), fertiliser (11),
  levelling, memorise, neighbours, specialisation, flavour, labelled, favourable, mould,
  programme, behaviour, colour(s), towards, defence, licence, honour, cosy.
- **Dates** — 1,030 conversions to month-first order: "14 September" → "September 14",
  "14–18 September 2026" → "September 14–18, 2026", "8 Sept" → "Sept 8",
  "Mon 14 Sept" → "Mon, Sept 14". Abbreviations keep the site's no-period style ("Sept 14")
  to match the existing "Sep 8, 2026" meta lines. ISO dates in JSON-LD and the sitemap are
  untouched. The hero's calendar tiles (big day number, small "SEPT") are a graphic and stay.
- **Locale** — `<html lang="en-US">` on every page (was `en`); the home page's JSON-LD
  `inLanguage` is `en-US` (was `en-GB`); `deposit-week.js` and `leaderboard.js` now format
  dates and numbers with `en-US` (was `en-GB`), so the week ranges and "Updated Sept 8" lines
  render month-first too.
- **README** — the "British English throughout" house rule is now "American English
  throughout", with the date convention written down.

## What was deliberately left alone
- Quoted passages between “…” (official docs and team quotes) are verbatim, so a British
  spelling inside a quote is the team's, not ours.
- `chatbot-official-posts.md` — the team's own posts, verbatim by design.
- Old `CHANGELOG-*.md` files — historical records.
- `gameplay-poster-source.html` and the rendered poster PNGs — the poster still carries a
  few British spellings; re-rendering it is a separate job (same recipe as 5 Sept).
- Attributes that are identifiers — `id`, `href`, `src`, `class`, slugs, `url:` keys, FAQ
  question ids — are byte-identical to before (verified), so no link, anchor or deep link
  moved. Visible attributes (`alt`, `title`, `content` on meta descriptions, `aria-label`,
  `placeholder`) were converted.
- No `dateModified` was bumped and no sitemap `<lastmod>` changed: this is an editorial
  spelling pass, not a change of substance — the same rule as the news-label and breadcrumb
  batches.

## Files (68)
All 57 pages except `gameplay-poster-source.html` (which only gained `lang="en-US"`), the
data files `posts.js` / `faq.js` / `gameplay.js` / `search.js` / `videos.js`, the UI-string
files `chatbot.js` / `contact-form.js` / `analytics.js` / `leaderboard.js` / `deposit-week.js`,
`chatbot-digest.md`, `README.md`, and this changelog. `faq.html`'s FAQPage JSON-LD was
regenerated from `faq.js`; the static hub blocks in `index.html`, `news.html`, `videos.html`
and `faq.html` were rebuilt with `build-static-hubs.mjs` and match the converted data files.

## The chatbot
Its knowledge (tier 2: every page, `faq.js`, `gameplay.js`, `posts.js`) turns American with
the Action's rebuild on push. The answer *style* is set by the chat worker's system prompt,
which lives in the separate `yakkamon-chat-worker` repo — add this rule to `SYSTEM` in its
`index.js` (see the note that shipped with this batch):

> Always answer in American English: American spelling (color, optimize, favorite,
> center), month-first dates (Sept 14, 2026), and American punctuation. Keep American
> English even when the sources you quote use British spelling — only quoted text stays as
> written.
