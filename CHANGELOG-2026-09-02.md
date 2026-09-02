# Changelog — 2 September 2026

Yakkapedia + free-mint dev stream batch: Gameplay, FAQ, pre-registration, and the Ghost/Bloom rename.

## Sources

- Official Yakkapedia (docs.yakkamon.com, "Genesis Yakkamon" table): Storm 75 / Echo 275 / Ghost 400 / Bloom 2,000 Legendaries, Rare 4,000, Uncommon 15,000, with abilities, AOE sizes and per-monster distribution (airdrop / free mint / trainer raffle / future events).
- Official free mint page (docs.yakkamon.com/pre-registration/free-mint): 14 September on the Ronin Launchpad, five waves 14–18 Sep, snapshot 10 Sep, reveal 14 Oct, 1 NFT per wave per account, 5 $FLOWER condition for Waves 2 and 4, 68 Legendaries / 50 Rare / 9,882 Uncommon, 1,500 ecosystem airdrop.
- Official Important Dates page: Chapter 0 one month after early access (marketplace, auctions, $FLOWER withdrawals, first NFT hunt, first Legendaries batch).
- Free-mint dev stream transcript (end of August; Adam, Bryn, Spencer, Craig).

## The rename

The official ladder now runs **Storm / Echo / Ghost / Bloom**. The 251–500 monster formerly called Bloom is Ghost; the 501–2,000 monster formerly called Tide is Bloom. Applied in place on evergreen pages, noted with update callouts on dated ones:

- In place: `gameplay.js`, `gameplay.html`, `gameplay-guide.html`, `faq.js` + `faq.html` JSON-LD, `pre-registration.html`, `leaderboard.js` (LADDER names + comment), `search.js`, `article-free-to-play-guide.html` and `article-leaderboard-guideline.html` ladder tables (guideline articles; "called Tide until the September docs update" noted inline; dateModified → 2026-09-02).
- Update callouts (dateModified → 2026-09-02) + posts.js body update line: `article-genesis-legendaries.html` (excerpt also notes the rename), `article-airdrop-breakdown.html`.
- Nav-only label fix, no bump: `article-yakkamon-roster-revealed.html` read-next link.
- Left as published (dated commentary): reward-ladder-analysis, reward-egg-ladder-update, dev-stream-two-recap, important-dates-roadmap, after-the-race body text, leaderboard-live, free-mint-stream-graded, roster-revealed body text; posts.js mirrors of those.

## Gameplay

- `gameplay.js` 23 → **25 systems**. Header revision note updated.
  - **Rewritten** `genesis-legendaries`: full Yakkapedia table (supply, ability, AOE, where every copy goes), the airdrop mapping cross-check (256 vs 257 flagged), the rename, what the abilities mean in play, the four routes to a Legendary, the docs' own caveats, and the 11,882-vs-9,882 Uncommon inconsistency flagged.
  - **New** `utilities-auras` (after boost-stacking): what a utility is, named vs random-rolled, small vs large AOE as Bryn defined them, additive/multiplicative stacking and the Storm+Echo combo, rolled independently of stats, numbers unpublished.
  - **New** `economy-layers` (after arena-battles): untradable free-to-play layer, coins ("new yen") as the gate on tradable production, limited coin faucets (VIP, burning, contract hunts), Chapter 0 timing for the marketplace.
  - **Touched**: creature-collecting (13 types, one per monster, no wearable gear, one held item at most, levelling sources); rarity-tiers (utilities out as text; Uncommon tier); work-cycle (no cap on active Yakkamon; processing-building choice); upkeep + storage-bins + monster-care + regional-exploration (absence PAUSES — no decay, no neglect penalty; degradation is from use; one bin per resource; shops buy resources); breeding-genetics (rarity-scaled breeding limit supersedes "no hard cap"; bred Yakkamon tradable); evolutions (not at launch, supply reason); crafting-hunting (hunting as a job, grounds with areas, lures by type, aggressive vs ambient encounters, grounds deplete not hunters, 1v3 PvE, contract hunts); combat-system (player actions via mechanic swapping, initiative rules, lane order, preset 2–3 ability loops, fight variables, dragons' two weaknesses, lane/weather effects deferred); platform-access (no plaza/MMO at EA, fishing not designed).
- `gameplay.html`: page-updated line; poster note flags the two panels not on the poster; quick reference +22 rows (types, gear, Legendary supply and utilities, AOE, stacking, rolled utilities, mint Legendaries, active cap, being away, bins, hunts, ground areas, encounters, combat inputs, initiative, lane order, abilities, breeding limit, evolutions, free-to-play layer) and the old "Breeding cap: none" row replaced; unknowns: "Monster utilities" replaced by utility numbers, type chart part two, mechanic swapping, coins, trainer raffle.
- `gameplay-guide.html`: Your Yakkamon cards (type count, utility card replaces traits card); Rarity section gains a Legendary utilities table, four utility cards and a rename callout (replacing the "Utilities land in September" callout); upkeep "absence" card corrected; care callout; breeding cards (limit, no evolutions at launch); hunting gains six cards; combat cards (lane order, preset loops, in-fight actions, initiative); trading gains a two-track card; same quick-reference and unknowns changes as gameplay.html; footer "last revised" → 2 September. Section numbering unchanged (19 sections).
- Poster **not** redrawn.

## FAQ

- `faq.js` 85 → **100 questions**; gameplay intro count 23 → 25 systems.
  - Free mint category rewritten (14 entries): what/when/waves table, supply and the click-race change, rank requirement, pre-mint checklist, mint more than once, the 5 $FLOWER deposit, reveal 14 Oct + tradable before reveal, 68 Legendaries, why bother (points claim now unconfirmed), egg unrelated, what to do after, gas in RON, Base → Ronin wallet.
  - Decoder and "three rewards" rich blocks updated (mint dates/waves/supply, Genesis Monster top 2,000, airdrop timing, points link reversed).
  - Ranks & waves: ladder emojis/names, rank-reveal snapshot note, tradable answer with total supplies, earn-points bullet + 250 line marked unconfirmed, rl-key and rl-note fixed (top 2,000).
  - Eggs & referrals: four Legendaries table rebuilt with supply + utility columns; new "What happened to Tide?"; Storm answer rewritten around AOE; 12 Aug and sign-up-egg answers renamed.
  - Genesis: specialized bullet names the auras; "choose which one" answers by band; rank table 1–2,000 / 2,001–5,000; stray duplicate line removed.
  - Playing the game: rarer/offline answers rewritten; +9 new (what Legendaries do, small vs large AOE, stacking, gear, types, combat inputs, hunting, active cap, evolutions).
  - Money: earn-money answer rewritten around the two-track model; new "What are coins?"; trading answer gains Chapter 0 timing.
  - Launch: hard-date answer now carries 14 Sep / 10 Sep / 14 Oct / Chapter 0.
- `faq.html`: FAQPage JSON-LD regenerated (100 entries; generator verified to reproduce the previous 85 byte-for-byte).

## Pre-registration + home

- `pre-registration.html`: section 7 rewritten as "FREE MINT — 14 SEPTEMBER" (wave table, checklist, what changed, reveal/deposit notes; watch-link → graded article); important-dates table (utilities published, snapshot 10 Sep, mint 14–18 Sep, reveal 14 Oct, Chapter 0 row); "what this means" bullets; sidebar label; timeline node; Genesis section (top 2,000 / Rare Egg table, rename + utilities callout, A/B/C callout replaced, reveal callout); earn-points bullet caveat.
- `index.html`: timeline node title/date and the free-mint callout (now links to pre-registration.html#free-mint).

## Other

- `article-after-the-race.html`: update callout at the "market with no sellers" paragraph (tradable from 14 Sep; marketplace at Chapter 0); dateModified → 2026-09-02; posts.js body update line.
- `article-free-to-play-guide.html`, `article-leaderboard-guideline.html`: mint-change callout at the mint section (waves, snapshot, 250-point line unconfirmed).
- `search.js` 304 → **332 entries**: 11 Gameplay, 15 FAQ, 2 Pre-registration added; 8 evergreen excerpts corrected (Tide/Bloom names, mint date/shape).
- `README.md`: system counts 25.
- `sitemap.xml`: unchanged (no new URLs; no lastmod convention on the touched pages).

## Validation

node --check on gameplay.js, faq.js, search.js, posts.js, leaderboard.js; every JSON-LD block parses; HTML tag balance clean on all pages; sitemap parses; every posts.js slug has an article file; every internal href/src resolves; every `?system=` link resolves to a slug; every search.js URL (including #anchors into faq.html) resolves.

## Not done (deliberate)

- No new news article — the graded article already covers the stream; a short "Yakkapedia + rename" post could be added if wanted.
- Poster not redrawn.
- `tips.html` nurture arithmetic ("to the free mint in mid-September, about 42 days") left as is.
- Dated posts listed above left as published.
- `videos.js` EP blurb mentioning "mint in mid-September" left (describes the video).
