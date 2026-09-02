# Changelog — 2 September 2026 (second batch): the Ronin free mint guide

One new guideline article and the links that reach it. No evergreen facts changed; nothing was re-dated except the new page itself.

## Sources

- Official free mint page (docs.yakkamon.com/pre-registration/free-mint): 14 September on the Ronin Launchpad, five waves 14–18 Sep (Wave 5 at 00:00 UTC), whitelists finalised 10 Sep, one NFT per wave per account, 5 $FLOWER condition for Waves 2 and 4 (withdrawable, anti-sybil), 68 Legendaries / 50 Rare / 9,882 Uncommon, 1,500 ecosystem airdrop (1,000 top Ronin spenders, 500 $FLOWER ecosystem players), 11,500 revealed in total on 14 Oct, hidden NFTs tradable before reveal, minted monsters deposited into the game at early access.
- Official Important Dates page: reveal one month after the mint, leaderboard finalises one week before early access, airdrop three days later, early access Nov/Dec, Chapter 0 one month after early access (marketplace, auctions, $FLOWER withdrawals, first NFT hunt).
- Official Yakkapedia: the four Legendary utilities used in the "What is hidden inside" table.
- Site facts already published: 250 points for minting, the weekly multiplier schedule (2.6× this week, 2.4× the week of 7 Sep), the referral code.

## New

- `article-ronin-free-mint-guide.html` (slug `ronin-free-mint-guide`, GUIDELINE, dated 2 Sep, og-default cover). Sections: the mint at a glance; the five waves with a "your rank → your waves" table (1–1,000: waves 1/2/4/5; 1,001–10,000: 2/4/5; 10,001–20,000: 4/5; 20,001–50,000: 5; 50,001+: Ronin wave only); the pre-10-September checklist; mint day step by step; what is hidden inside with per-mint odds (68/10,000 ≈ 1 in 147 Legendary; Rare-or-better ≈ 1 in 85); after you mint; safety; mistakes that cost a mint; timeline.
- Site's own reading, labelled as such in the page: Wave 2 is 3,000 mints for up to 10,000 eligible trainers; if Waves 1–3 sell out, Wave 4 opens with 4,000 left rather than its listed 5,000, and Wave 5 may open to nothing.
- Wallet/gas guidance is generic (official Ronin Wallet, RON bought in-wallet or via an exchange, mint only at marketplace.roninchain.com) — no third-party service is recommended.

## Wiring

- `posts.js`: new top entry (38 posts).
- `search.js`: 7 new entries (339), all tagged News per the guideline-article convention.
- `sitemap.xml`: URL added with `<lastmod>2026-09-02</lastmod>` (51 URLs).
- `pre-registration.html` §7: a second `watch-link` pointing at the guide, above the existing graded-stream link. Nav-only; the page carries no dateModified.
- Footer, ALL 51 pages: "Free mint guide" added to the GUIDES & TACTICS column after "Leaderboard guideline" (shared element, applied site-wide per house rule). Nav-only — no article dateModified bumped.
- `README.md`: page and sitemap counts corrected (they were stale at 48).

## Not done

- No bespoke cover art; og:image falls back to og-default.png.
- FAQ untouched — its 14 free-mint answers already match the official page. A "read the full guide" link from the FAQ free-mint intro is a candidate follow-up.
- Poster not redrawn (no gameplay change).

## Addendum — Home and Early Access banner

- New `free-mint-banner.webp` (1520×848) + `free-mint-banner-2x.webp` (3040×1696), pixel-art "FREE MINT — 14 SEPTEMBER" banner generated from the official roster designs (Nano Banana 2; text rendered in-model).
- `index.html` and `pre-registration.html`: the `.prereg-ticket` image is now the free mint banner and the `ticket-link` points at `article-ronin-free-mint-guide.html` (same-site, no target=_blank). The access-code / countdown / sign-up panel beneath it is unchanged. `prereg-ticket.webp` stays in the repo — `article-yakkamon-referral-code.html` still embeds it.
- README image list updated.
