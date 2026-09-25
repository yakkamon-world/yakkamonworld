# Changelog — September 24, 2026 — Official Battles guide: gameplay revised, new article

## Why

The team published its official Battles guide on X on September 24, 2026 — eight numbered points, the
first written account of a fight from setup to payout, one week after the September 17 dev stream's live
tour. The Gameplay section carried the stream picture (70/30 auto battler, three or four a side, condition
skills, potions, four stats). This batch layers the post on top of it — setup stage, bench, skills you
choose, types on skills, substitutions and three item classes plus a preparation item, six kinds of fight,
persistent damage, rewards — and adds an analysis article.

## New

- `article-battles-explained.html` — "Won Before the First Hit — What the Official Battles Post Means for
  Players" (slug `battles-explained`, category `analysis`, Sep 24, 2026). Eight-point table, one section
  per point (anchors `eight-points`, `setup`, `bench`, `skills`, `types`, `live`, `fights`, `damage`,
  `rewards`, `site-advice`, `what-to-do`, `questions`), source-and-standing callout, read-next.
  Our own readings are flagged: three-or-four = on the board with a bigger bench; skill choice = a
  per-fight pick from a pool the monster owns; gyms = asynchronous defense.
- `posts.js` — new top entry (50 posts). **A new slug means the OneSignal news push fires on upload — intended.**
- `chatbot-official-posts.md` — the post verbatim at the top (tier 1) with a plain-terms key-facts paragraph.

## Changed — gameplay content

- `gameplay.js` (26 systems, no slugs renamed)
  - `combat-system` rewritten around the post's eight points, then "what the Sept 17 stream added", then
    the August list (lanes and preset skill loops overtaken; the extraction-respec vs choose-your-skills
    tension is listed as an open question). New `desc` and `like`.
  - `monster-care`: "Update, September 24: battle damage sticks" paragraph.
  - `your-base`: gym = a team you leave behind that wins while you're offline.
  - `hunting`: win a wild Yakkamon and you may bring it home; a hunter that wins hurt carries the damage.
  - `arena-battles`: the six kinds of fight on one engine.
- `gameplay.html`: new "Updated September 24" line; quick-reference battle rows rewritten/added (Battle
  format, Setup stage, Squad size, Skills, Type matchups, Live input, Preparation item, Kinds of fight,
  Damage between fights, Battle rewards; the older "Combat inputs" row removed as superseded); NOT
  CONFIRMED list: Skills, Squad/bench/items, new Healing and rest, Battle numbers, Full type chart.
- `gameplay-guide.html`: same table and unknowns; `#combat` section rebuilt as eight numbered cards plus a
  stream card and a respec card; Hurt card, gym card and aggressive-encounter card each gained a line;
  new "Updated" line.
- Poster (`gameplay-poster-source.html` / PNGs) NOT re-rendered — its battle panel still carries the Sept 17
  wording, which is not wrong. Noted in README Known quirks.

## Corrected / updated elsewhere

- `article-dev-stream-sept-17-recap.html` — "Update, September 24" callout at the top of `#battles`,
  dateModified → 2026-09-24, visible "Updated Sep 24, 2026" in the meta line.
- `article-hunting-explained.html` — read-next link to the new article (nav-only, no date bump).

## Search, FAQ, chatbot, sitemap, redirects

- `search.js` — 471 entries (was 460): 8 new article entries, 3 new FAQ entries, 7 battle entries rewritten
  (Battle System, squad size, skills, skip battles, act in combat, combat simulation FAQ, gyms/arena).
- `faq.js` — 140 questions (was 137): new `do-types-matter-in-battle`,
  `does-battle-damage-carry-over-between-fights`, `how-many-yakkamon-fight-at-once-and-is-there-a-bench`;
  rewritten `is-combat-a-pure-simulation-or-do-i-get-to-do-anything`; updated
  `when-can-i-battle-other-players` and `what-happens-if-my-hunter-loses`. `faq.html` static copy and
  FAQPage JSON-LD rebuilt (`build-static-hubs.mjs`, `build-faq-jsonld.mjs`); `index.html` + `news.html`
  static hubs rebuilt for the new post.
- Chatbot: tier-1 entry added (above); everything else is a tier-2 source the GitHub Action rebuilds on push.
  `chatbot-knowledge.json` NOT touched by hand.
- `sitemap.xml` — 63 URLs (was 62): new article; lastmod 2026-09-24 on `gameplay.html`,
  `gameplay-guide.html`, `faq.html`, `article-dev-stream-sept-17-recap.html`.
- `_redirects` — `/article-battles-explained` line added.
- `README.md` — article count 50, sitemap 63, new Known-quirk "BATTLES, OFFICIAL POST VS STREAM" listing
  every spot to update together when the team publishes squad/bench sizes or skill rules.

## Pre-ship checks

All six README checks pass (JS syntax, JSON-LD, sitemap XML, internal links, posts ↔ article files,
favicons — `gameplay-poster-source.html` is the known exception). Playwright at 375 / 1280: no horizontal
overflow on the article, the gameplay page (combat system open) or the field guide.
