# Changelog — November 16, 2026 — Early Access has a date

Built on main `3032d8f` (the uploaded `yakkamonworld-main_1.zip` matched it byte-for-byte).
Sources: Adam's @everyone announcement in the official Yakkamon Discord (screenshot supplied; the
post's own date was not visible, the site dates its update November 16) and the official docs'
Important Dates and Early Access & Airdrop pages as read on November 16.

## The facts now on the site

- Nov 26, 00:00 UTC — trainer leaderboard hidden ("blind" for the final day).
- Nov 27, UTC midnight — leaderboard finalized, snapshotted and revealed.
- Nov 30 — Early Access begins, an alpha phase; Wave 1 = top 1,000 ("Founding Trainers", feedback channel).
- Dec 2 — NFTs airdropped to the top 5,000.
- Waves 2–4: each an estimated 1–2 weeks after the wave before, announced before opening.
- Chapter 0: once the early access stage is complete (first official NFT hunt, Legendaries, auctions,
  $FLOWER withdrawals). Progress and resources carry over to the official launch.

Ours, flagged as ours: Eastern-time conversions, "UTC midnight on the 27th" read as 24 hours after the
hide, the stacked wave ranges, points still counting on the blind day. The two docs pages disagreed on
Nov 16 (the airdrop page still had week-apart waves and Chapter 0 a month in); the site follows
Important Dates and says so in the article.

## New

- `article-early-access-november-30.html` (slug `early-access-november-30`, Official News, Nov 16).
  Anchors: key-dates, what-changed, blind-day, waves, alpha, airdrop, chapter-0, what-to-do,
  open-questions, site-changes. Carries the `.money-note`.
- `early-access-nov-30-card.png` (2752×1536 infographic, free-mint card format; also the article figure),
  `early-access-nov-30-og.png` (1600×893), `early-access-nov-30-card-source.html` (noindex).
- `posts.js` new post → **OneSignal push fires on upload**. 57 posts. `_redirects` +1. Sitemap 68 → **69 URLs**.

## Changed

- `index.html` / `pre-registration.html` — milestone pill NOV 30, 2026, new copy and meta line;
  Early Access §2 table rebuilt (blind day row added, relative rows replaced), Nov 3 callout replaced
  by a Nov 16 one, lock warning, airdrop bullet and the Wave 4 callout rewritten; §7 deposit line.
- `tips.html` — two Chapter 0 timing lines.
- `faq.js` 156 → **160 questions**: four new in Launch (leaderboard hidden/finalized, Waves 2–4, what
  you can do, keeping progress); launch answers rewritten; the withdrawal answer now says Chapter 0;
  twelve other timing phrases settled. Hubs and FAQPage JSON-LD rebuilt.
- `gameplay.js` — platform-access (desc + dates), economy-layers, arena-battles, hunting, contracts.
  `gameplay.html` / `gameplay-guide.html` — page-updated lines, "Early access" and "Chapter 0 & first
  hunt" rows, the dates unknown; guide PvP callout.
- Poster — banner, economy panel line and the dates card; re-rendered: `gameplay-poster.png`
  **1800×3062**, `gameplay-poster-full.png` **2408×4096**; heights fixed on the three embedding pages.
- `search.js` 574 → **591 entries** (17 new, 15 refreshed).
- `chatbot-official-posts.md` — tier-1 entry at the top (Source: the Important Dates page), four older
  passages settled to the fixed dates. `chatbot-digest.md` — settled-schedule note above section 0, two
  lines settled. `chatbot-knowledge.json` untouched — the Action rebuilds on push.
- `article-important-dates-roadmap.html`, `article-dev-stream-nov-3-graded.html` — Update, November 16
  callouts, dateModified + visible Updated. Read-next link on the Safari Zones article (nav only).
- `sitemap.xml` lastmod → 2026-11-16 on home, pre-registration, news, faq, gameplay, gameplay-guide,
  tips and the two touched articles. `README.md` — new EARLY ACCESS IS DATED quirk, sizes, counts.

## Goes stale next

After Nov 27 (lock is past tense), Nov 30 (milestone card needs a new next milestone), Dec 2 (airdrop
sent), and whenever a wave or Chapter 0 is dated. The README quirk lists the spots.
