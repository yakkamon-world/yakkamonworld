# Changelog — September 10, 2026 — The whitelist is live (yakkamon.com/whitelist)

Built on main `e6b5170`, which matched the uploaded zip byte-for-byte. Source of the new
facts: yakkamon.com/whitelist as shown on September 10 (screenshots — the page is a
JavaScript app). The docs' free mint page still lists dates without hours.

What the official page settled: the snapshot was taken **September 10 at 01:00 UTC** and
the lists are final; every wave has a **name** (Top Trainers, OG Trainers, The Ronin
Wave, Yakkamon Hunters, Public Trainers) and an **opening time** — **00:00 UTC** for
Waves 1, 2 and 5, **08:00 UTC** for Waves 3 and 4; Sunflower Land is in the Ronin Wave;
Wave 5 "may never open if the supply is gone"; one mint per eligible trainer per wave,
stacking across waves; Wave 1 supply matches its whitelist exactly; the checker takes
`0x` or `ronin:` addresses.

## New

- `article-whitelist-live.html` — announcement article (slug `whitelist-live`, official,
  Sep 10, 2026): the five waves with live status chips, the two opening hours in nine
  time zones, what changed, using the checker, what to do if the wallet comes back empty,
  three open questions, source-and-standing callout, money-note. Loads `free-mint-hero.js`.

## Countdown timers

- `free-mint-hero.js` — rewritten around the OFFICIAL times: `WAVES` carries names and
  the published hours (`Date.UTC(2026, 8, 16, 8, 0, 0)` for Wave 3, etc.); the hero's local
  line now reads "That's <local time> where you are · official times from
  yakkamon.com/whitelist" (the reveal keeps its "no hour published, 00:00 UTC assumed"
  note). NEW generic chips: any element with `data-fm-in="w1…w5|reveal"` shows
  "Opens in 3d 20h" / "Open now" / "Closed" / "Reveal in …" with classes
  `is-next` / `is-open` / `is-done`. Chips are re-read every second, so tables a page
  re-renders at runtime (the FAQ) get them too; no early return when nothing is found yet.
- `style.css` — `.fm-in` (hero tile line) and the pill form `td .fm-in` /
  `.prereg-list .fm-in` (yellow = next, green = open, gray = closed).
- Hero on `index.html` + `pre-registration.html` — tiles show the wave name and hour
  ("Wave 3 · The Ronin Wave", "Active Ronin gamers, six games · 08:00 UTC") plus an
  "Opens in …" line; fine print now says "whitelists are final — check your wallet";
  CTAs: **CHECK YOUR WHITELIST ↗** (yakkamon.com/whitelist), READ THE GUIDE, LAUNCHPAD ↗.
- Chips also run in the wave tables of the guide, the announcement, Early Access §7 and
  the FAQ answer "When exactly, and what are the waves?" (`faq.html` now loads
  `free-mint-hero.js` after `faq-render.js`).

## Evergreen pages (corrected in place)

- `pre-registration.html` — §7 meta line, two new watch-links (checker, announcement),
  When/Who rows with the hours and the 01:00 UTC snapshot, wave table with names /
  Opens (UTC) / Status chips, bullets rewritten in the past tense (snapshot taken; 5
  $FLOWER "needed … before the snapshot"; Ronin gamers → checker), timeline row
  "September 10, 01:00 UTC — taken; the lists are final", the important-dates table
  (snapshot row → taken + "Check yours"; mint row gained the hours), mint-node tooltip.
- `index.html` — mint callout rewritten (checker link, Wave 3 at 08:00 UTC, link to the
  announcement); timeline tooltip; hero as above; latest-news block rebuilt.
- `tips.html` §4 — "Update, September 10 — the snapshot has been taken" callout; the
  "link before the snapshot" step is now "mint from the wallet that was linked at the
  snapshot (01:00 UTC) — confirm it on the checker"; "Only Wave 5 has a published time"
  → every wave has one; table row "Counted for the 5 $FLOWER mint condition (snapshot
  taken September 10)"; Base paragraph points to the checker.
- `faq.js` (+ `faq.html` static block and FAQPage JSON-LD regenerated, 127 questions) —
  free-mint intro mentions the checker and the announcement; "What is the free mint?"
  gains the final-lists sentence; "When exactly, and what are the waves?" rebuilt with
  names, hours and chips; NEW "How do I check if I'm whitelisted?" and "What time does
  each wave open in my time zone?" (nine-zone table); "Do I need a good rank" (snapshot
  taken → checker); "What is the Ronin Wave?" (six games, 08:00 UTC, checker); "How do I
  check if I'm on the Ronin Wave list?" rewritten around the checker (CSV lists
  superseded); Sunflower Land answer (now in the wave); "Does the Ronin Wave affect my
  rank" (check both wallets); "Do I need to do anything before mint day?" rewritten for
  after the deadline; 5 $FLOWER deposit (past tense); "Does Wave 5 actually exist?"
  (official wording first); Base wallet answer; "How do I actually mint on the day?"
  (every wave has a time); snapshot-vs-lock (01:00 UTC).

## Dated articles (Update callouts + `dateModified` 2026-09-10)

- `article-ronin-free-mint-guide.html` — Update-Sept-10 callout; wave table now
  Wave · Name / Opens (UTC) / Supply / Who / Status chips; time-zone caption; checklist
  heading "The September 10 checklist — now closed" + new lede; timeline rows with
  times/names; loads `free-mint-hero.js`.
- `article-ronin-wave.html` — "Update, September 10" callout (checker replaces the CSV
  lists, Wave 3 opens Sept 16 08:00 UTC, Sunflower Land in the six games).
- `article-free-mint-by-the-numbers.html` — Update callouts under #wave-5 (official
  "may never open"), #two-tickets ("This window has closed") and #what-to-do (the two
  "deposit before September 10" bullets are history → checker + hours).
- `article-tip-deposit-on-ronin.html` — Update callout at the top of the body.
- `article-free-mint-stream-graded.html` — Update callout under "Three things to do
  before September 10".

## Hubs, search, sitemap, chatbot

- `posts.js` — top entry `whitelist-live` (44 posts) + "Update, September 10" mirror
  lines on the guide, ronin-wave, by-the-numbers, tip-deposit-on-ronin and
  free-mint-stream-graded entries. `news.html` / `index.html` static blocks rebuilt.
- `search.js` — 8 new entries (announcement + #checker, #time-zones, #waves, #new,
  #not-listed deep links; the two new FAQ answers) and 11 refreshed excerpts (Ronin Wave
  checks, Sunflower Land, guide, checklist, tip, when-exactly, 5 $FLOWER, snapshot vs
  lock, good rank). 414 entries.
- `sitemap.xml` — `article-whitelist-live.html` added (lastmod 2026-09-10, weekly, 0.9);
  lastmod 2026-09-10 on /, pre-registration, news, faq, tips and the five updated
  articles. 57 URLs.
- `chatbot-official-posts.md` — NEW tier-1 entry "Free mint whitelist page
  (yakkamon.com/whitelist …)" with `Source: https://yakkamon.com/whitelist` and the
  facts in plain terms (names, hours, supplies, eligibility, snapshot time, stacking,
  what the page does not show); the Ronin Wave entry notes the checker supersedes the
  CSV lists, Sunflower Land is in, Wave 3 opens 08:00 UTC; our paraphrase dates
  month-first. The chat worker needs no change: the Action rebuilds
  `chatbot-knowledge.json` on push and the answer cache keys on the knowledge version.
- `README.md` — hero section rewritten (official times, chips, which static text to
  edit with them), 57 URLs, two Known-quirks notes (hero CTAs; "snapshot is past" — don't
  reintroduce "deposit before the snapshot" wording).

## Checks

`node --check` on every .js/.mjs; every JSON-LD block parses; tag balance on all 58
pages; sitemap parses (57 URLs, every page except the noindex poster source and 404);
every href/src/url and anchor resolves; posts slug ↔ file; American-English pass (dry
run: only "maths" → "math" ×2, fixed); Playwright at nine moments (before Wave 1, each
wave open, 07:59/08:01 UTC around Wave 3, after mint week, after the reveal) on Home, the
announcement and the FAQ — titles, tiles and chips all correct; renders at 1280 and 375
with real fonts, no horizontal overflow.
