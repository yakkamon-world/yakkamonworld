# Changelog — September 17, 2026 (evening): chatbot Wave 5 correction

## Why

The chatbot answered a wave question with "Wave 5 'Public Trainers' opens today, September 18, 2026 at 00:00 UTC … may never open if the supply is gone" — wrong since the mint sold out during Wave 4 on September 17. The close-out batch had added a tier-1 sold-out entry, but two OLDER tier-1 passages in `chatbot-official-posts.md` (the September 10 whitelist entry and the September 13 points entry) still described the Wave 5 schedule in future tense, and the model answered from those. Several FAQ answers, search excerpts and the live wave clock had the same stale tense — and `free-mint-hero.js`, being purely time-based, would have flipped Wave 5 to "OPEN NOW" at 00:00 UTC on September 18.

## Chatbot (tier 1) — `chatbot-official-posts.md`

- Sold-out entry expanded: how the waves were decided (leaderboard rank at the September 10 snapshot for Waves 1/2/4/5, Ronin games activity for Wave 3 — never Sunflower Land code distribution), the final fill per wave (993 / 3,376 / 2,676 / 2,955 / 0 across 5,483 owners), an explicit "any 'Wave 5 opens September 18' wording anywhere is historical, current state is sold out, no Wave 5, no more minting ever", and the note that leaderboard points/resources are unaffected and keep counting toward the airdrop.
- Whitelist entry (Sept 10): the Wave 5 schedule sentence rewritten to past tense with the settled outcome appended.
- Points entry (Sept 13): "the last wave opens September 18…" replaced with "the minting period ended September 17 when the supply sold out during Wave 4 — Wave 5 never opened".
- `chatbot-knowledge.json` untouched as always — the GitHub Action rebuilds it on push and refreshes the worker.

## Wave clock — `free-mint-hero.js`

- New `SOLD_OUT = true` flag: the clock counts only to the reveal ("SOLD OUT — ALL 10,000 MINTED · REVEAL IN"), the Wave 4 chip reads **Sold out**, the Wave 5 chip **Never opened**, Waves 1–3 read Closed. Verified by simulation at Sept 17 22:00 UTC, Sept 18 12:00 UTC and post-reveal.
- Static `data-fm-in="w5"` fallbacks in all five wave tables (`faq.js`/`faq.html`, `pre-registration.html`, guide, whitelist + mint-page articles) now read "Never opened" for crawlers, no-JS visitors and the chatbot knowledge builder.

## FAQ — `faq.js` + `faq.html` (137 questions, count unchanged)

- `when-exactly-and-what-are-the-waves`: opens with the sold-out notice and a link to the completion report; schedule kept as the historical record; "The last column is live" removed.
- `how-many-points-is-the-free-mint-worth-in-total`: ceilings callout settled — "the supply sold out during Wave 4 on September 17, so Wave 5 never opened".
- `i-minted-where-are-my-250-points`: "the last wave opens September 18 / Wave 5 may never open" replaced with the settled end of the minting period; the crediting hour stays the one open question.
- `faq.html` static details rebuilt with `build-static-hubs.mjs` AND the FAQPage JSON-LD regenerated from `faq.js` (the build script does not touch the JSON-LD — known quirk).

## Search — `search.js` (444 entries, count unchanged)

- Eight stale excerpts/titles updated to the settled outcome: the whitelist-live entries (2), "Which free mint waves could I mint in?", the by-the-numbers entries (2), the FAQ waves entry, and the two pre-registration §7 wave entries.

## Articles

- `article-whitelist-live.html`: "Update, September 17 — the mint is over" warning callout above the wave table; dateModified + visible Updated line + sitemap lastmod → 2026-09-17.
- `article-free-mint-by-the-numbers.html`: "Update, September 17 — settled. It didn't." callout under the `#wave-5` heading; dateModified + visible Updated line + sitemap lastmod → 2026-09-17.
- `article-ronin-free-mint-guide.html`: the one still-live-tense checklist bullet ("Wave 5 opens September 18 and may never open") settled; visible Updated line → Sep 17 (JSON-LD was already 2026-09-17).
- `article-mint-page-live.html`, `pre-registration.html`: static Wave 5 chip fallback → "Never opened" (dateModified already 2026-09-17 / n/a).

## Housekeeping

- `sitemap.xml`: lastmod bumps for the whitelist and by-the-numbers articles only (faq and guide were already 2026-09-17).
- `README.md`: MINT CLOSE-OUT quirk documents the `SOLD_OUT` flag.
- Deliberately untouched: the historical arithmetic prose inside the by-the-numbers article, the posts.js news-card excerpt describing that article, and dated "at the time of writing" mentions — they are the record, and each now sits under a settled callout.
