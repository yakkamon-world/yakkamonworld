# Changelog — October 7, 2026 — official fan art competition article

The Yakkamon team announced its first official **fan art competition**: create
Yakkamon fan art (AI-generated art accepted, but "highly original, handcrafted
artwork will be heavily prioritized"), post it on X with **#yakkamoncompetition**,
include your Yakkamon **Trainer Name** in the post, winners picked **early Monday,
October 12** — "Post ASAP". Prize: the **20 best entries**, selected by the team,
each win a **Yakkamon NFT egg**. This batch adds the site's guide to it and wires
the event into every place a visitor (or the chatbot) would look. Built on main
`f13eb05`, which matched the uploaded zip byte-for-byte before edits.

Editorial calls worth knowing:

- The article is **Official News** (the rules are the team's) and keeps the
  team's wording in a two-column rules table; everything beyond the rules is
  flagged as ours — the time-zone table (assumes a Sydney-time pick; the team
  said only "early Monday"), the "post by Sunday" advice, the reading that the
  twenty eggs come out of the free mint page's **1,500 extra hidden eggs**
  "distributed out in special events before the reveal", and the wallet-linking
  precaution.
- The announcement's exact posting day and X URL were not supplied, so the
  article and the chatbot entry say "early October 2026 / the week of
  October 5". If the post URL turns up, add it as a `Source:` line under the
  chatbot heading and as a link in the article's source callout.
- The egg facts (reveal October 14; 68 Legendaries / 50 Rares / 9,882
  Uncommons; 11,500 revealed in total; 1,500 event eggs) were re-read from
  docs.yakkamon.com/pre-registration/free-mint on October 7 — unchanged.
- No deposit advice on the page, but it discusses NFT values and the secondary
  market, so it carries the standard `.money-note`.

## New files

- `article-fan-art-competition.html` — slug `fan-art-competition`, category
  `official`, dated Oct 7, 2026, `dateModified` 2026-10-07. Sections (deep-link
  ids used by search): `#rules` (the six lines as posted vs. what each means),
  `#prize` (what a sealed Genesis egg is, the odds, what it is not), `#deadline`
  (time-zone table: Mon 6:00 / 9:00 AM Sydney → UTC, US Eastern, US Pacific,
  UK, Philippines, Jakarta; Brisbane caveat), `#how-to-enter` (six steps),
  `#ai-art`, `#tips` (six, flagged as ours), `#unknowns` (entry limit, egg
  source and delivery, notification, art rights, results post) + a scam
  warning callout, source-and-standing callout, Read next, money note. Chrome
  copied from `article-battles-explained.html` (current header/footer, byline,
  Organization author, BreadcrumbList).
- `fan-art-competition-poster.jpg` (1024×765, JPEG q86, ~198 KB) — the team's
  poster, embedded as the article figure (click opens it full size; it IS the
  full size — the source was 1024 px wide).
- `fan-art-competition-og.jpg` (1200×630, ~180 KB) — social card: the poster
  fitted on a blurred, darkened field of itself with an ink border and a hard
  offset shadow, so X's 2:1 crop does not cut the headline or the hashtag line.
  Used as `og:image` / `twitter:image` / JSON-LD `image`.
- `CHANGELOG-2026-10-07-fan-art-competition.md` — this file.

## Changed files

- `posts.js` — new top entry (51 posts). New slug → the push-notify Action
  **will send one OneSignal notification** on upload (intended; the post is
  dated today, inside the 3-day rail).
- `search.js` — 11 new entries at the top (464 → 475): the article plus eight
  question-phrased News entries (how to enter, deadline, prize, AI art, the
  hashtag, Trainer Name, "any other way to get an egg", "will the team DM me"),
  one FAQ entry for the new question, one Community entry for the callout; the
  existing "What are the extra 1,500 hidden eggs?" excerpt now names the
  competition as the first such event.
- `sitemap.xml` — 63 URLs: the article added (lastmod 2026-10-07, weekly, 0.9,
  beside the other mint-era official posts); lastmod → 2026-10-07 on `/`
  (new top row in the static Latest News), `news.html`, `faq.html` and
  `community.html`.
- `_redirects` — `/article-fan-art-competition` → `.html` 301 (83 lines).
- `chatbot-official-posts.md` — new tier-1 entry at the top: the announcement
  text as supplied, the poster text, and a "key facts in plain terms" paragraph
  (rules, 20 eggs, no closing hour, Australia context, what the post does not
  say, scam line). No `Source:` line (post URL unknown → the bot cites the X
  account). `chatbot-knowledge.json` left to the Action, as always.
- `faq.js` + `faq.html` — new question in **Start here** after the iPhone-alerts
  one: "How do I enter the Yakkamon fan art competition?"
  (`how-do-i-enter-the-yakkamon-fan-art-competition`); the second paragraph of
  "What are the extra 1,500 hidden eggs?" corrected in place (evergreen page):
  the first event handing eggs out is live, 20 eggs, picked October 12, whether
  they come out of the 1,500 unsaid. 138 → 139 questions; FAQPage JSON-LD
  rebuilt with `build-faq-jsonld.mjs`, static `<details>` + meta line rebuilt
  with `build-static-hubs.mjs`.
- `community.html` — new first block in `<main>`: section head "OFFICIAL EVENT
  — FAN ART COMPETITION" (`id="fan-art-competition"`, scroll-margin for the
  sticky bar, "Full guide →" view-all link) + a `.twitter-callout` with a yellow
  palette icon, the one-paragraph brief and a HOW TO ENTER button to the
  article. The page has no `dateModified`; sitemap lastmod bumped.
- `style.css` — two lines after the `.yt-icon` rule: `.tw-icon.event-icon`
  (yellow bubble, ink glyph).
- `index.html`, `news.html` — static hubs rebuilt (new top row / new card,
  counts 51 and Official News 20). Inside the markers only.
- `article-free-mint-complete.html`, `article-collection-page-live.html`,
  `article-yakkamon-roster-revealed.html` — one Read-next line each pointing at
  the new article. Nav-only: no `dateModified` bumps, no sitemap changes.
- `README.md` — 55 pages / 51 articles / 63 sitemap URLs; the two new images in
  the layout tree; new first Known quirk **FAN ART COMPETITION IS DATED**
  listing every spot to settle when the results land (community callout, two
  FAQ answers, twelve search entries, chatbot entry, article results callout +
  dateModified + lastmod).

## Checks run

`node --check` on every `.js` (clean); all 116 JSON-LD blocks parse; sitemap
valid, 63 URLs; 0 broken internal `href`/`src`; every in-page anchor and
`?system=` target resolves (the pre-existing `/#ask` search entry is the only
flagged one — intentional, `index.html#ask` opens the chat); 51 posts.js slugs
all have article files; HTMLParser tag-balance pass over all 65 pages clean;
Playwright over `file://` with the site fonts injected at 320 / 375 / 430 /
768 / 1280 on the article, Community, Home and FAQ pages: zero horizontal
overflow, lazy poster confirmed loading on a 375 viewport.

## After the results (Monday, October 12 or later)

See the README quirk. Short version: results callout + `dateModified` + lastmod
on the article; reword or remove the Community callout; settle the two FAQ
answers (rebuild hubs + JSON-LD); refresh the twelve search excerpts; append the
results to the chatbot entry. Do not rewrite the article — it is dated.
