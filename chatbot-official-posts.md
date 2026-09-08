<!--
  OFFICIAL POSTS — verbatim text of the Yakkamon team's own announcements that are
  NOT on docs.yakkamon.com (mostly the numbered "guide" posts on X).

  The chatbot treats everything in this file as OFFICIAL (tier 1, same rank as the
  docs), so only paste what the team actually wrote — no commentary, no site analysis.
  Site analysis belongs in an article (tier 2); dev-stream material belongs in
  chatbot-digest.md (tier 3).

  Format: one post per "## " heading. Put the title, where it was posted and the
  date (or "early September 2026" if you only know roughly) in the heading line,
  then the post text exactly as written. Newest post at the top.
  A docs.yakkamon.com page the chat worker does not fetch live (anything missing
  from docs.yakkamon.com/llms.txt) can go here too: put "Source: <page url>" as the
  first line under the heading and the bot cites that page instead of the X account.
  After adding a post, push — the GitHub Action rebuilds chatbot-knowledge.json.
-->

## Wave 3 — The Ronin Wave (official page on docs.yakkamon.com, published 8 September 2026)

Source: https://docs.yakkamon.com/pre-registration/free-mint/ronin-wave

Key facts in plain terms, from the official page (the page itself is the source of record): Wave 3 of the free mint opens on 16 September 2026 with 2,000 spots reserved for active Ronin gamers. No Yakkamon rank, leaderboard position or $FLOWER deposit is needed for this wave. The team took a 90-day snapshot of on-chain activity ending 8 September across five Ronin games: Axie Infinity (Atia's Blessing activations, holding Mystic Axies, Axie marketplace buys and sells, any Axie NFT transfer) — 20,040 wallets; Craft World (DynoCoin/COIN activity on Katana) — 14,422; Pixels ($PIXEL staking and claiming in Pixels and Pixel Dungeons, holding or trading Farm Land, holding or trading Pets) — 4,247; Ronkeverse (holding or trading Ronkeverse NFTs, $RONKE token activity) — 3,658; Moku (holding or trading Moki Genesis NFTs) — 2,354. Deduplicated across the five games: 42,730 unique wallets. The published lists are candidates, not the final whitelist; the final cut of 2,000 is made from these lists plus a whitelist supplied by the Ronin team; being on a list is a strong position, not a guarantee. Lists are finalised on 10 September and may be updated before then. Sunflower Land players get their own spot in this wave; that list is not published yet and is expected to count active farming on a Ronin farm over the same 90-day window, $FLOWER activity on Ronin, holding Sunflower Land collectibles, Bumpkins and Farm NFTs, and marketplace trades.

How to check: open a list (the mega list master_deduped.csv covers every wallet and all games; there are ranked per-game lists for Axie Infinity, Craft World, Pixels, Ronkeverse and Moku, hosted in the sunflower-land/yakkamon-docs GitHub repository under ronin_waves/) and search for your Ronin wallet address in lowercase 0x… format, not the ronin: format. Columns: rank (position in that game's list, lower is better), score (activity, higher is better), active_days_90d (days on-chain in the window), and in the mega list games and games_count (which games you appeared in and how many); later columns are the raw signal counts.

How the score works: active days across the 90-day window are the biggest input; signals are weighted and capped per day, so repeating an action many times in one day does not beat playing across many days; cross-game players sort to the top of the mega list; bot-like wallets (automated flipping, spam) are heavily discounted and rank last but stay in the file, flagged; custodial, guild and escrow wallets are discounted; contracts (marketplaces, DEXes, staking contracts) and a batch of sybil wallets are excluded entirely.

Caveats from the page: Pixels VIP is bought from an in-game custodial balance and is invisible on-chain, so it is not counted; holding NFTs without transacting for 90 days shows as 0 active days and a low score; Craft World creates an embedded smart wallet that may not be the address you would mint from, so Craft World players should check their Ronin Wallet address; Moku Grand Arena entries are not counted yet; only on-chain activity counts.

What happens next: 10 September whitelists finalised; 14 September the free mint goes live on the Ronin Launchpad (marketplace.roninchain.com/launchpads); 16 September Wave 3 opens with 2,000 supply; connect the same Ronin wallet found on the list, keep a little RON for gas, and mint; 14 October every Genesis NFT is revealed together. One mint per wallet per wave — trainers who also qualify through the leaderboard can mint in those waves too. The snapshot is only for the Ronin free mint and does not affect the trainer airdrop leaderboard, which keeps running and finalises separately. Not on the list? Pre-register, verify and deposit 5 $FLOWER to unlock Waves 2 and 4.

## Yakkamon — Hunting (official post by the Yakkamon team on X, early September 2026)

G'day trainers. Back with another guide — today we're heading into the hunting grounds.

Hunting in Yakkamon isn't about walking into tall grass and hoping. Every wild Yakkamon has a place, a time and a temperament — and catching them all means studying the grounds, learning the clock, and figuring out what each monster actually wants from you.

1. Hunting grounds are scattered across your Regions, and each one reveals different Yakkamon at different times of day. What roams a ground at dawn won't be what you find there at midnight — learn the clock and plan your hunts around it.

2. You don't hunt alone. Send your Yakkamon out to passively roam a hunting ground, and they'll trigger encounters with the wild monsters living there while you get on with running your farm.

3. Not every encounter goes the same way. Some wild Yakkamon are affectionate — they'll only come home with you if the Yakkamon you sent wins them over.

4. Some are greedy. They want resources, and they won't budge until you've paid up — so bring the right goods if you're chasing a particular monster.

5. And some are just angry. Cross their path and it's a battle — send a Yakkamon that can't hold its own and you'll come back empty-handed.

6. Legendaries and Rares will sporadically appear in the hunting grounds. There's no schedule to memorise here — you'll want a strong, well-supplied team ready to go the moment one shows up.

7. Hunting grounds aren't infinite. The more you hunt from one, the less populated it becomes — so spreading your hunts across grounds and Regions is part of the strategy.

8. And it'll keep changing. Future Seasons will affect which Yakkamon are available and where, so the hunting map you master today won't be the one you're working next Chapter.

Key facts in plain terms: hunting grounds sit inside Regions; each ground shows different Yakkamon at different times of day (dawn vs midnight); you send your own Yakkamon to roam a ground passively and they trigger encounters while your farm keeps running; wild Yakkamon have three temperaments — affectionate (won over by the Yakkamon you sent), greedy (want resources paid before they join) and angry (a battle — a weak Yakkamon comes back empty-handed); Legendaries and Rares appear sporadically with no schedule; grounds deplete the more you hunt them, so spread hunts across grounds and Regions; future Seasons change which Yakkamon appear where.
