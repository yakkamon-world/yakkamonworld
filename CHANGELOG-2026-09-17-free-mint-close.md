# Changelog — September 17, 2026 — Free mint close-out: ribbon, hero and CTAs removed; Mint Desk market-only

Built on main `b1cd445` (the uploaded zip matched it byte-for-byte). The mint
sold out during Wave 4 on September 17 — 10,000 / 10,000 minted, 0 left, so
Wave 5 has nothing to mint. This batch executes the removal pass the README had
planned for "after the mint window is history", plus the Mint Desk trim.

## Removed
- **Site-wide mint ribbon** — the yellow `<a class="mint-ribbon">` bar above the
  masthead came off all **61 pages** (every page except
  `gameplay-poster-source.html`, which never had it), together with its CSS
  block in `style.css`.
- **Free-mint hero** — the `.fm-hero` wave board (FREE MINT title, egg scene,
  countdown clock, five wave tiles) came off `index.html` and
  `pre-registration.html`, with all its CSS (desktop, tablet and phone rules,
  keyframes). The `fm-*.webp` sprites are now referenced by nothing and can be
  deleted by hand on GitHub (they ship unchanged in this batch).
- **The three hero CTAs** — OPEN THE MINT PAGE, CHECK YOUR WHITELIST and
  READ THE GUIDE (`.fm-ctas` / `.fm-ghost`), from both pages, with their CSS.
- **Mint Desk "Minted" band** — progress bar, Minted / Owners / Left and the
  five per-wave cells, from both pages, with the `.md-bar` / `.md-waves` CSS
  and the phone-only `:has([data-md-minted])` rule. The desk keeps the
  **Market band only**: OpenSea (Last sale, Top offer, Listed, 24h volume,
  live) and Ronin Market (Floor, Top offer, Listed, 24h volume — dashes until
  trading opens Sept 21), plus the Sept 21 note. It now sits at the top of the
  `.prereg-ticket` ink card with its own bottom margin (`.md` margin gained a
  bottom value on desktop and phone).
- **`free-mint-hero.js` script tag** from the **56 pages** that only loaded it
  for the ribbon. It stays on the five pages whose wave-table status chips it
  drives: `pre-registration.html`, `faq.html`,
  `article-ronin-free-mint-guide.html`, `article-whitelist-live.html`,
  `article-mint-page-live.html`. (`index.html` no longer loads it; the chips
  there lived in the hero.) The script itself is untouched — post-mint it
  renders every chip "Closed", then "Revealed" after Oct 14.

## Changed
- `faq.js` — the free-mint topic intro now OPENS with the sold-out notice (all
  10,000 minted, sold out during Wave 4 on Sept 17, Wave 5 has nothing left,
  reveal Oct 14, Ronin Market trading Sept 21, answers kept as the record). The
  `what-time-does-each-wave-open-in-my-time-zone` answer is past-tense and no
  longer points at the removed home-page countdown. Question count unchanged
  (136).
- `faq.html` — rebuilt from `faq.js` via `node build-static-hubs.mjs` and
  `node build-faq-jsonld.mjs` (static details AND FAQPage JSON-LD, both — the
  JSON-LD needs its own script, per the Sept 11 lesson).
- `chatbot-official-posts.md` — NEW tier-1 entry at the top, "The Genesis free
  mint is over — sold out during Wave 4 (September 17, 2026)", citing the mint
  listing: 10,000 / 10,000 minted, nobody can mint anymore, reveal Oct 14 (68
  Legendaries + 50 Rares + 9,882 Uncommons, 11,500 total with the event eggs),
  Ronin Market trading Sept 21, +250-per-mint crediting condition now met. The
  Sept 11 mint-page entry's "where to mint" advice is now past-tense so the bot
  cannot tell anyone to go mint. Chatbot knowledge itself rebuilds via the
  GitHub Action on push — `chatbot-knowledge.json` is deliberately NOT touched
  here.
- `search.js` — the "Free mint countdown" entry (`/#mint-board`) is gone; the
  wave-eligibility entry retargeted from the removed board to
  `pre-registration.html#free-mint` ("Which free-mint wave was mine?"); the
  Mint Desk entry is market-only; "How many Yakkamon were minted?" now answers
  sold-out and points at `faq.html#free-mint`. **440 entries** (was 441).
- `article-free-mint-by-the-numbers.html`, `article-whitelist-live.html` — the
  two sentences that pointed readers at the removed `/#mint-board` countdown
  are reworded (link-hygiene only, like the Sept 11 leftover-link fixes — no
  dateModified bump).
- `mint-desk.js` — header comment only; the code already fills only the slots
  the markup has, so the Minted-band code stays dormant and no JS change was
  needed. The worker keeps reporting minted/wave figures; restoring a cell
  would be a markup-only edit.
- `sitemap.xml` — lastmod `2026-09-17` on `/`, `pre-registration.html`,
  `faq.html` (the three pages whose content changed).
- `README.md` — file map (`free-mint-hero.js`, `mint-desk.js`, orphaned
  sprites), "Change a free-mint wave time" and "Change what The Mint Desk
  shows" sections, and the FREE-MINT HERO + MINT RIBBON quirks replaced by a
  single MINT CLOSE-OUT record; MINT POINTS quirk updated (minting period has
  now ended — revisit the points wording once the 250s actually land).

## Not changed (deliberately)
- The dated mint articles, the free-mint guide and most FAQ answers still read
  as written during the mint (site convention: dated content keeps its
  original advice). The FAQ topic's new sold-out notice frames them. A
  follow-up pass adding "the mint is over" callouts to the guide + §7 of Early
  Access is a separate decision.
- Home `<title>` / meta descriptions still mention the free mint (the guides
  remain on the site).
- `index.html` / `pre-registration.html` carry no JSON-LD dateModified (hub
  pages) — sitemap lastmod is the signal.
- The Sept 15 **Bad Eggs batch was never pushed** (main has no bad-egg
  content); this batch is built without it. Its desk cells would be moot now
  (Minted band gone), but its FAQ answer, article callout, search entries and
  chatbot entry are still worth re-issuing merged — say the word.
- The mint worker keeps its cron; the unused minted/wave fields cost nothing.
