# Changelog — November 9, 2026 — The November 3 dev chat, graded (18 decisions) + the command cap correction

Built on main `e4df42e`. **Erdem's uploaded zip (`yakkamonworld-main_1.zip`) matched that commit
byte-for-byte** — 201 files, zero differences — so this batch applies to it cleanly. Source: the
November 3, 2026 dev chat transcript (`Yakkamon_DLS_-_110326.docx`) — an impromptu live build demo
driven by the lead designer, with Spencer and Matt joining partway. Adam was not present.

**Docs were not re-checked this session**: docs.yakkamon.com is not on this environment's fetch
allowlist, so every official fact here comes from the transcript and from what the site already
carried. If anything on the docs has moved since October 14, this batch will not have caught it.

## New

- `article-dev-stream-nov-3-graded.html` — "The November 3 Dev Chat, Graded: Eighteen Decisions, a
  Command Cap Nobody Saw Coming, and the Floodgates by Early December" (slug
  `dev-stream-nov-3-graded`, category **devstream**, Nov 9, 2026, ~7,000 words). Fourth entry in the
  graded series after `dev-stream-graded`, `free-mint-stream-graded` and the Sept 17 recap. Eighteen
  decisions, each closing with a "YakkamonWorld Score is: X" callout — **3 A / 7 A− / 4 B+ / 3 B /
  1 B−**. Section ids: `scorecard`, `numbers`, `coin-barrier`, `charms`, `pvp-faucet`,
  `power-creep`, `command-cap`, `job-loops`, `forced-sleep`, `stats`, `skill-pools`,
  `type-locked-skills`, `legendaries`, `priority`, `leagues`, `divisions`, `og-perks`, `scope`,
  `pwa`, `dates`, `not-grading`, `own-calls`, `what-to-do`, `questions`, `read`. Chrome copied
  verbatim from `article-egg-reveal.html` (current 9-tab nav, no Leaderboard).
- `nov-3-dev-chat-graded-card.png` (2752×1536) — the report card in the established dark-green pixel
  style, embedded in the article as a `.roster-figure`. `nov-3-dev-chat-graded-og.png` (1600×893) is
  the same board downscaled, used as the og:image.
- FAQ `how-many-yakkamon-can-work-at-once` — **147 questions** (was 146).
- `chatbot-digest.md` — new **section 0**, "November 3, 2026 dev chat — addendum", carrying the whole
  stream. The two existing addenda renumbered (Oct 14 → 0b, Sept 17 → 0c) and their precedence lines
  corrected so the newest still wins. Four rows added to **section 17 (Superseded)**: workers per
  farm, feeding, fruit, resource trading.

## The site's own analysis in the piece (not from the stream)

- **The command cap is the strongest anti-whale rule in the game**, because it combines with the
  separate rule that you cannot command a monster above your trainer level — capital converts into
  power only at a rate the game sets.
- **Six systems point the same way**: command cap, trainer-level gate, coin barrier, type-over-stats
  priority order, division ladders, OG-perks-as-flex. All convert bought advantage into earned
  advantage — which is why the Kova + Raigo stack stands out as the one exception.
- **Forced sleep and the command cap fight each other** for the same slot: one tells you to own two
  of every worker, the other caps how many you may command.
- **Kova's aura switches off the forced-sleep economy** for holders of a 75-supply NFT, and the
  balancing policy announced in the same hour means it stays off.
- **Ten rolled axes per monster** now sits uneasily beside the designer's own August principle of one
  RNG component plus one fixed, and not stacking RNG on RNG.
- **PvP as the primary $FLOWER faucet demotes the idle-farming half** that most of the pre-registered
  base signed up for — and PvP is not in open beta, so the economy gets tuned without its main faucet.
- The "Legendaries always remain good" promise and the designed-in power creep through breeding are
  **in direct tension**; the article asks for the distinction between "remains good" and "remains
  strongest".

## Changed

- `posts.js` — new top entry (**54 posts**). NOTE: pushing this fires the OneSignal news push.
- `gameplay.js` → **`work-cycle` corrected in place**. The page said "There is no cap on how many can
  work at once", quoting the Sept 1 free-mint stream directly. It now carries the command cap, the
  trainer-level gate on commanding bought monsters, and names the superseded position — per the
  editorial line, evergreen reference pages are fixed in place rather than banner-corrected.
- `faq.js` — `when-does-the-game-actually-come-out` gains an "Update, November 3" paragraph (end of
  November / maybe early December, "not a promise", "within this year, it won't be next year", and
  the on-air walk-back that "open beta" is not an official term).
- `search.js` — 8 new entries for the article plus a ninth for the command cap pointing at the
  gameplay system (**525**, was 516); the existing "The work cycle and stamina" excerpt now mentions
  the command cap, since that page's content changed.
- `sitemap.xml` — new article URL (**66 URLs**) + lastmod 2026-11-09 on `/`, `news.html`, `faq.html`,
  `gameplay.html`, `pre-registration.html` and `article-egg-reveal.html` (the six pages whose content
  changed). Validation asserts every article's sitemap `lastmod` equals its JSON-LD `dateModified`.
- `_redirects` — `/article-dev-stream-nov-3-graded` line, **and a pre-existing gap fixed**: the
  September 18 batch never added a line for `/article-dev-stream-sept-17-recap`, so that
  extension-less address has been 404ing since. Both added; the full slug→redirect audit now passes
  for all 54 posts.
- `faq.html`, `news.html`, `index.html` — static hubs rebuilt (`build-static-hubs.mjs`); FAQPage
  JSON-LD rebuilt separately (`build-faq-jsonld.mjs`, 147 Qs) per the known quirk.
- `README.md` — article count 52 → 53, sitemap 65 → 66, and a new **COMMAND CAP SUPERSEDES THE OLD
  WORKER RULE** quirk naming every place the formula lives, so they move together if the plus four
  is dropped.
- `chatbot-knowledge.json` deliberately untouched — the GitHub Action rebuilds it on push. (A local
  rebuild was attempted and reverted: docs.yakkamon.com is unreachable from here, so the build
  dropped all docs chunks.)

## Internal links and the one dateModified bump

Five pages now point at the new article, and one of them is a real content update rather than a link.

- **`article-egg-reveal.html` — the only `dateModified` bump in this batch (→ 2026-11-09).** That
  article's open question two asked when unique stats land on the NFTs. The November 3 dev chat
  answered half of it: the per-monster stat system (growth tier, archetype, leveling type) was shown
  running in the build, while nothing was said about the NFT *metadata* carrying those values. An
  "Update, November 3, 2026" callout now sits under the questions list saying exactly that much and no
  more, with the visible meta line changed to "Updated Nov 9, 2026", a mirror line appended to the
  `posts.js` body, and the sitemap `lastmod` moved to match. Deliberately *not* claimed: that the
  metadata now carries stats — the stream did not say so.
- **`pre-registration.html` §2 Important Dates** — an "Update, November 3, 2026" callout with the
  end-of-November / maybe-early-December floodgates aim, the "not a promise" caveat, the "within this
  year, it won't be next year" bound, and the on-air walk-back that "open beta" is not an official
  term. It explicitly tells readers to keep planning against the official table above it, because the
  leaderboard lock is still defined relative to early access. Hub page, so no `dateModified` (it has
  none, per the house rule) — sitemap `lastmod` is the signal.
- **`article-dev-stream-sept-17-recap.html`** — a "Read next" entry at the top of the list, naming the
  command cap as the thing that replaced that stream's "no cap on workers". Nav-only, no bump.
- **`article-free-mint-stream-graded.html`** and **`article-dev-stream-graded.html`** — closing-line
  links so the four-part graded series is navigable in both directions. Nav-only, no bumps.
- **`gameplay.js` → `work-cycle`** — the corrected passage ends with a link to the article's
  `#command-cap` section, so the evergreen page carries the rule and the reasoning sits one click away.

No other article's body was contradicted by this stream, so nothing else was touched.

## Answering the five checks

1. **Sitemap** — new URL added (66), and `lastmod` bumped on exactly the six pages whose content
   changed; article `lastmod` values are asserted equal to their JSON-LD `dateModified`.
2. **dateModified** — bumped on `article-egg-reveal.html` only, because it is the only existing
   *article* whose body changed. `faq.html`, `gameplay.html` and `pre-registration.html` carry no
   `dateModified` by design (house rule: it exists only on `article-*.html`), so their sitemap
   `lastmod` is the signal instead.
3. **Chatbot** — the stream is in `chatbot-digest.md` as section 0 (tier 3, where dev-stream material
   belongs; it does *not* go in `chatbot-official-posts.md`, which is tier 1 verbatim team posts), with
   the older addenda renumbered and four rows added to section 17 Superseded. The builder reads every
   root `*.html` plus `faq.js` and `gameplay.js`, so the new article, the new FAQ answer and the
   corrected work-cycle system are all picked up automatically. `chatbot-knowledge.json` is left for
   the GitHub Action to rebuild on push, per convention.
4. **Search** — 9 new entries (525 total) covering the article and its sections, the command cap
   against both the article and the gameplay system, the coin barrier, the stat system, the combat
   priority order, division leaderboards, OG perks and the dates; plus one existing excerpt refreshed.
5. **Internal links** — see above: 12 inbound references to the new article across pages and data
   files, and the article itself links out to the egg reveal, the contracts piece, both earlier
   gradings, the gameplay page and the Early Access dates.

## Verified

- Playwright at 1280 and 375: no horizontal overflow, no JS errors on the new article.
- `node --check` clean on posts.js, search.js, faq.js, gameplay.js.
- Every JSON-LD block on all 68 pages parses; sitemap parses at 66 URLs.
- Every `posts.js` slug has an article file **and** a `_redirects` line (54/54).
- Every internal link and image reference **across all 68 pages** resolves; every `?system=` deep link
  in every page and data file matches a real `gameplay.js` slug.
- Playwright at 1280 and 375 on all seven touched pages (the new article, egg reveal, Early Access,
  the Sept 17 recap, both earlier gradings, gameplay): no overflow, no JS errors. The work-cycle
  system renders the command cap text; the egg-reveal update callout renders.

## Open / flagged for Erdem

- **The gameplay systems need a bigger pass than this batch gives them.** This stream introduced or
  changed enough to justify it: the command cap (done), the coin barrier, the dojo and its
  level-capped leagues, the growth tier / archetype / leveling type stat system, skill pools and
  type-locked rare skills, forced sleep, job priority loops, storage upgrades to 800, and fruit no
  longer being food. Only `work-cycle` was corrected here. A follow-up batch could add two systems
  (the coin barrier belongs in `economy-layers` or its own; the dojo belongs beside
  `arena-battles`) and refresh four or five others. Say the word.
- **"Open beta" vs "early access" is unresolved and it matters.** The site says early access, end of
  November. The stream used open beta for the same window, then disowned the term. The leaderboard
  lock is pegged to early access, so until the team names the stages, the site should keep saying
  early access and flag the ambiguity — which is what the FAQ update does.
- **The starter-egg tier order (Raigo > Kova > Salu) is unconfirmed** — the developer said twice he
  wasn't sure. It is in the article's "not grading" section marked as such, and deliberately not in
  the FAQ or the chatbot as fact.
- **Monster name spellings** are transcriptions from an audio stream. Raigo/Salu/Brazito are mapped
  to site canon; Waddler, Spudling, A-Rock and Slowly are written as heard and flagged in the
  article's sourcing note.
- Not done: the X post text for the card, a video, and any update callout on the two earlier graded
  articles (nothing in them was contradicted, so none was needed).
