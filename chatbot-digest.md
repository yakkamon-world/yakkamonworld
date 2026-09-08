<!-- Cumulative Dev Stream digest. Source: Erdem's Dev Meeting Cumulative File project (later-dated streams override earlier ones). Replace this file when the digest is republished, then rerun build-chatbot-knowledge.mjs. -->

# Yakkamon — current state of the game

      Current as of the September 1, 2026 stream · digest version 2026-09-02 · four streams merged

      Every statement carries the date of the stream it came from, e.g. Sep 1. Where a later stream changed or contradicted an earlier one, the later stream wins: the current position is stated in the topic section and the old position is logged in section 17 ("Superseded"). Only the four transcripts above were used; nothing here comes from other sources. The team's standing disclaimer applies to everything: the game is in development and anything discussed can change before launch.

      Sources, oldest → newest

- Aug 6, 2026 — First official stream · trainer dashboard, deposits, design pillars

- Aug 13, 2026 — Airdrop rework, OG title, tradability, timeline

- Aug 21, 2026 — Biome pack, combat system, upkeep UI, audio

- Sep 1, 2026 — Ronin free mint waves, Yakopedia, economy model, hunting


## 1. Key dates and timeline

| When | What | Source |

| Aug 10, 2026 | Early FLOWER deposit went live in the trainer dashboard (pushed back from Aug 5) | Aug 6 |

| Sep 10, 2026 | Leaderboard snapshot for the free-mint whitelist waves. Rank is read from the leaderboard on yakkamon.com | Sep 1 |

| Sep 14, 2026 | Ronin free mint goes live on the Ronin Launchpad; the waves then run "over the space of a few days". Dates after the first are tentative and open to time-zone/duration feedback | Sep 1 |

| ~1 week after mint | 1,500 reserved Yakkamon sent out manually as an airdrop — "likely a week after the free mint, but definitely before the reveal" | Sep 1 |

| Oct 14, 2026 | Reveal of the hidden free-mint Yakkamon | Sep 1 |

| After the reveal | Leaderboard finalized ("could be weeks, could be a month, could be a bit longer" after the reveal) → airdrop rewards distributed → early access set up | Aug 13 |

| ~1 week before early access | Leaderboard lock announced with a specific date given closer to the time | Aug 13 |

| Q4 2026 | Early access launch. An internal date exists but has not been shared | Aug 13 |

| September 2026 | Legendary utilities published — delivered as the Yakopedia section of the docs on Sep 1 | Aug 13 → Sep 1 |

Sequence as the team describes it Aug 13, Sep 1: free mint (Sep 14) → reveal (Oct 14) → finalize leaderboard → distribute rewards → early access.

## 2. Studio and team

- Yakkamon is the second major IP from the Sunflower Land team (Thought Farmer Studio). It is a separate project from Sunflower Land but reuses the FLOWER token, may have light lore crossovers, and shares the same retro/bright art family while having its own look, monsters, backgrounds and HD UI. Aug 6

- Communities are deliberately separated: Sunflower Land questions go to the Sunflower Land streams, Yakkamon streams are Yakkamon-only. Aug 6

- Adam — hosts the streams (Craig's "fearless leader"); works on infrastructure (login, news, referral systems, Discord integration into the game), UI modals and battle prototyping. Aug 6, Aug 13, Aug 21, Sep 1

- Bryn — lead game designer, owns the systems design; splits time with Sunflower Land in waves (roughly 50/50 on average). Online handle "Jam Boy Magic". Aug 6, Aug 13, Sep 1

- Spencer — main engineer, ~90% on Yakkamon; building the UI, world, expansions, hunting grounds, crafting, login flow and buildings, and generating the AI-drafted animations; self-described perfectionist who sets the polish standard. Aug 6, Aug 13, Aug 21, Sep 1

- Craig — "mastermind" of the trainer dashboard; joined the Yakkamon game build the week of Aug 13; owns deposits, free-mint contracts and AI-generated audio, and presented the animation drafts (plus his own A-Rock "Harry Potter portrait" test). Aug 6, Aug 13, Aug 21, Sep 1

- Elias — was mainly on Sunflower Land Aug 6; present on the Sep 1 stream.

- Matt L — 12-week game design intern from Bryn's old university; focused on combat and skill design and credited with a large share of the battle system. Aug 6, Aug 21

- Gabby — lead artist; Yakkamon monsters are designed in-house by Gabby's art team. Aug 13, Aug 21

- Daniel Diggle — external artist behind the original Sunnyside/Sunflower Land asset pack; designed the new Yakkamon UI and HUD (finished by Aug 21) and gave the team early, exclusive access to a brand-new biome pack (biomes, seasons, elements). Aug 6, Aug 21

- Ronin team (incl. Jiho) — guiding the launchpad process, supplying extra whitelist lists, reviewing the mint contracts. Sep 1

- Community language: players are "trainers"; Adam gets called "Professor Oak"; sign-offs in play include "Yakadabadoo", "Yakka jam", "Get hype". Aug 6, Aug 21

## 3. Pre-registration, trainer dashboard and points

Numbers - Pre-registered trainers: 45,000 Aug 6 → 100,000 Aug 21. - About 10,000 came in through private trainer codes distributed via Sunflower Land (and a small number via Ronin); another 8–9,000 tried to sign up without a code before referrals opened; referrals then "went crazy". Aug 6 - 4,500–5,000 bot accounts were banned; referrals will be double-verified before the leaderboard is finalized. Aug 6

X / Twitter - The original "Play Yakamon" X account was compromised and a phishing link was posted. The team created a new official X account rather than wait on X support. Aug 6 - Trainer dashboard lets you connect to the new account: +10 points. Anyone who connected the old account keeps those points, so they can hold 20 points from X in total. Reconnect shows in the dashboard if you previously connected. Aug 6 - Nothing in the game itself was compromised; no need to re-register. Three or four fake websites were taken down. The official site is yakkamon.com — always check official links. Aug 6

Wallets - Wallet linking is live in the dashboard. Aug 6 - Option to change a linked wallet is being looked into; no ETA. Aug 13

Discord points - A Discord emoji-reward feature (mods and players handing out emojis) hit ~10 messages/second and turned into reaction farming, so it was switched off. A manual weekly reward system was floated. Aug 6 - "We're not doing Discord points anymore" — memes earn personal appreciation only. Aug 13 - Bot sign-up waves also triggered a 3-day Discord restriction on the server (no image posting, invite links broken); the team is now stricter on verification to protect the game, economy and server. Aug 13 - Discord is being integrated into the game: Discord updates and communication will appear in-game, plus a light role system between the two. Aug 21

### Early FLOWER deposit

- Went live Aug 10 (delayed from Aug 5). Rules are on the website. Aug 6

- Deposited FLOWER stays yours — you can withdraw it or spend it in-game later. Deposits are not a purchase. Aug 6, Aug 13

- Bonus 1 — weekly multiplier: week 1 pays points equal to 3× the FLOWER deposited (5 FLOWER → 15 points). The multiplier drops by 0.2× each week; with the leaderboard's likely timing it "may never reach 1" and could end around 1.2× when deposits close. If it does reach 1× it stays at 1× — it will not go below. Aug 6, Aug 13

- Bonus 2 — size bonus, per single deposit: 50 FLOWER → +5 bonus points, 500 FLOWER → +100 bonus points, scaling with deposit size. Must be one transaction (two 25s do not equal one 50). Aug 6

- Design intent: reward depositing early rather than a last-minute rush before launch. Aug 6

- ~2.5 million FLOWER deposited in the first ~5 days — roughly a fifth to a quarter of circulating FLOWER. Aug 13

- OG title: earn 50,000 points within a single week (≈15,000 FLOWER at the week-1 3× multiplier). Once claimed it is permanent; it gets harder each week as the multiplier falls. It is a title, not an item, to avoid incentivizing the wrong behavior. Aug 13

- The team wants deposited FLOWER spent rather than withdrawn at launch: the first weeks of access will carry discounts on hard-currency items, VIP, hunting events and possibly auctions. Aug 13

### Leaderboard

- The dashboard leaderboard shows the top 100. Aug 6

- The team said it would hide the leaderboard closer to launch to stop last-day gaming — no further update since. Aug 6

- The leaderboard keeps running until the game launches; the lock will be announced about a week before early access. Aug 13

- The Sep 10 snapshot is what decides the free-mint waves. It is not described as the final airdrop lock. Sep 1

### Trainer airdrop rewards (Aug 13 revision)

- Rewards were reworked because sign-ups exploded: the top 2,000 (previously top 1,000) now get "something pretty solid"; a new legendary tier was added at the very top; and the former rare tier that ran up to 2,000 supply is now a legendary. Nobody's reward got worse — in many cases it improved. The original announcement was badly worded and read as a nerf. Aug 13

- Storm and Echo are handed out mostly through the trainer airdrop; a very small amount goes into the in-game Yakkamon rewards pool and some can appear in later special events. Aug 13

## 4. Ronin free mint

- Chain / platform: Ronin blockchain, via the Ronin Launchpad. Free to mint; you pay gas in RON. Exactly how the launchpad's gas flow works was still unclear (Ronin calls the contract). Sep 1

- Live: Sep 14, 2026. Contracts were with the Ronin team for review on Sep 1. Sep 1

- Supply: 10,000 hidden Yakkamon. Sep 1 (Earlier "10,000–15,000" estimate is superseded.)

- Hidden until Oct 14, 2026. NFTs can be traded on the Ronin marketplace before and after the reveal; once early access begins they can be deposited into the game and used. Aug 13, Sep 1

- What's inside: a chance at "some of the legendaries and the early rares" — 3 Storm, 5 Echo, 10 Ghost and 50 Bloom. The stream did not say which of those four are legendary versus early rare, and did not characterize the remainder of the supply. Sep 1

- The free-mint collection is the Yakkamon collection — Yakkamon released later will appear in the same collection. Sep 1

- Purpose: hype and exposure on Ronin; pull active players from other Ronin games into Yakkamon. Aug 13, Sep 1

- Whitelist rules: rank taken from the yakkamon.com leaderboard at the Sep 10 snapshot. You can mint in more than one wave — the higher your rank, the more chances you get. Within a wave it is first-come: be online, be whitelisted, have RON for gas. Not everyone will get one. Sep 1

- Pre-refinement guidance (Aug 13, before the wave table existed): whitelists would be over-provisioned (~20–30% more addresses than NFTs in early waves) so every wave mints out, and everyday players with points could take part. The Sep 1 wave table now defines the actual rank bands. Aug 13 → Sep 1

- 1,500 also reserved for a manual airdrop, likely a week after the mint and before the reveal. Whether the 1,500 sit inside or outside the 10,000 was not stated. Sep 1

Waves Sep 1

| Wave | Who | Supply | Notes |

| 1 | Top 1,000 trainers | — | Guaranteed whitelist spot; mint at your own pace |

| 2 | Top 10,000 trainers | 3,000 | Requires a 5 FLOWER minimum deposit (withdrawable/spendable) — anti-Sybil measure suggested by Ronin; more than 3,000 in the top 10k already qualify |

| 3 | "Ronin wave" — list gathered by the Ronin team from active/top players of other Ronin games | 2,000 | Not tied to the Yakkamon leaderboard; many trainers will still be eligible |

| 4 | Trainers ranked 1–20,000 | — | The wave where the full 10k may mint out |

| 5 | Trainers ranked 1–50,000 | remaining | Only if supply is left |

- Docs: free-mint details and a new Yakopedia section went live in the docs on Sep 1; a Yakopedia will exist inside the game after launch. Sep 1

## 5. Rarity tiers, NFTs and the collection

- Legendary = pre-minted, fixed, very scarce supply. Rare = obtainable only during limited times; supply is not fixed and depends on how players hunt. Aug 13

- Rarity is set at the species level: every member of a species shares its rarity — there are no rare versions of common monsters. Aug 21 The Sep 1 stream also refers to an uncommon tier ("the rares or the uncommons"). Sep 1

- Working structure (explicitly not a promise): legendaries are NFTs (close to one-of-ones / incredibly scarce), rares are SFTs, commons are plain game assets. Not every monster is an NFT — only the supply-limited or time-limited ones. Aug 13

- Once a type of monster has been pre-minted, those are the only ones of that type that can ever exist. New chapters, events and legendaries add new pre-mints to the collection over time (Sunflower Land model). Aug 13

- Total NFT count is not fixed: 2,000 legendaries via the leaderboard airdrop plus rares, the Ronin free mint, and future additions. Aug 13

- Legendaries carry traits that only legendaries can have. Aug 13

- Stats: rares and legendaries get a slightly better stat allotment and higher potential over leveling; the best commons can beat middling rares and roughly match a low-end legendary. Some commons have unique traits too. Rarer monsters have higher impact, more desirable utility and more scarcity. Aug 21

- Forging/merging (e.g. 10 commons → 1 rare): not planned. Bryn dislikes it aesthetically for a cozy creature collector ("squishing your guys into jam") but is "not completely against" it, noting economic positives. Scarcity is handled through contracts and sinks instead. Aug 6

## 6. Legendary utilities (Yakopedia, Sep 1)

- Utilities are listed as descriptive text only; numeric values are still being balanced and playtested, and will keep being tuned even after announcement. Sep 1

- Storm — "Storm-charged": Yakkamon within range work 2× as fast. Sep 1

- Storm + Echo is called out as a combo worth holding together — "they work together", and with both "you'll be really running through the resource requirements". Sep 1

- Ghost: the name "Ghost" in the docs drew questions on stream; Adam called it a typo/type swap to be fixed in a docs push, and Bryn said the tier is functionally unchanged — same boosts — with names being aligned to the game's types. Treat the final name as unconfirmed. Sep 1

- A listed legendary utility regenerates a percentage of max HP every combat turn — described as "absolutely busted" on a monster with good HP/defense; it forces opponents to alpha-strike. Sep 1

- Farm boosts come from the Yakkamon themselves (no statues to craft or place): legendaries and some rares carry buffing abilities such as 2× on a gathering job. Aug 21

- AOE sizes: small AOE affects only the jobs immediately around the Yakkamon (e.g. the two or three adjacent trees); large AOE affects an entire section of the farm and every Yakkamon working there. Sep 1

- Stacking: boosts with the same name do not stack (two "Wood Gatherer" passives = one); differently named or higher-ranked boosts do stack ("Wood Gatherer" + "Extreme Wood Gatherer"). Some utilities are additive, some multiplicative with each other. Design goal: breadth of different monsters beats duplicates. Aug 21, Sep 1

- Rares and uncommons have no utilities listed yet because some of their utilities are randomly rolled when you catch or receive them, alongside the species and stat roll — a monster can have great stats and weak utility or vice versa; the keepers (and the ones worth trading) have both. Sep 1

## 7. World, land and gathering

- View and control: top-down "god view" like Sunflower Land; you assign jobs, you do not walk a character around. Sep 1

- You start on a small revealed patch with one starter Yakkamon; it gathers berries/wood to "part the clouds" into new areas. Clouded areas are unexpanded; some can be glimpsed through. Expanding reveals resource areas (e.g. a lumber yard) and hunting areas. Aug 6, Aug 13

- Palworld-style vibe: expand land, collect monsters, put them to work; each Yakkamon fills a role; strong automation focus (Zachtronics-style "set up machines and watch them run"). Aug 6

- Separate regions: home/gathering regions where you build out, plus distinct hunting regions (desert, beach etc. — the Pokémon "new area" feeling). New regions and monster types arrive chapter by chapter. Aug 21

- Every Yakkamon you own is another simultaneous action — that is the appeal of expanding your roster. There is no maximum number of active Yakkamon; the pressure is to fully staff all jobs and keep the logistics flowing. Sep 1

- Logistics puzzle: e.g. one processing building that can make X, Y or Z, each needing wood, crops or ore — you choose what to run and must keep the supply chains for it fed. Sep 1

- Job cards show growth progress, plot state, completion time and status. Aug 21

- Upkeep: farm plots have upkeep; soil can show as "degraded" (e.g. 1.6× slower) until re-fertilized, and fertilizer costs resources. Plot groups scale non-linearly: the second and third plots' upkeep grows less than their production, so investing early in efficient plots is rewarded. Aug 21 (How this squares with the Sep 1 "no decay" statement is an open question — see section 17.)

- Absence pauses, it does not punish: if you leave for a week or a month, Yakkamon work until their bins/job areas are full, then stop until you return. There is no decay and no neglect mechanic — the team explicitly rejected an attention system for a 100-Yakkamon farm. Sep 1

- Resource bins: simplified to one bin per resource (previously many bins). Sep 1

- Shops: selling resources at shops is in. Sep 1

- Recipe crafting is being built: resources needed to expand the farm plus lures and baits for hunting. Sep 1

- Land customization: likely limited at launch; the team is instead "looking into" full customization of your own gym (see Combat). More land customization is expected eventually. Aug 21

- Time and seasons: an in-game sped-up clock with day/night (not tied to your real clock) so different monsters appear at night; weekly seasons (winter week, summer week…) likely to carry over from Sunflower Land so hunts and farm setups keep changing; a weather system is wanted. Aug 6, Aug 21

- Current build (Sep 1): about five expansions forming a loop that touches every system; once that is solid, the team builds out the first couple of weeks of gameplay. Sep 1

## 8. Hunting

- Hunting is the third pillar alongside gathering and combat, and the primary way to obtain any monster. Aug 6, Aug 21

- How it works: hunting is a job. Assign a Yakkamon to a hunting ground; it rolls for a Yakkamon; you influence the outcome with resources (lures, baits). Yakkamon can hunt forever — the limit is the hunting ground, which is progressively hunted out and yields less. Sep 1

- Hunting grounds have multiple areas (three in the current build; swamps, water areas etc. to come). Tell a Yakkamon to focus on one area (targets that area's monster type — e.g. a rocky outcrop for rock types) or let it wander for anything. Lures attract specific types. Sep 1

- Two encounter types Sep 1:

- Aggressive — a red alert on the hunting ground means a monster wants to battle you; most things in that ground pause until you act.

- Ambient — skittish monsters that bop around; you bait them and your hunter has an emoji "conversation" with them until they either join you or run off. Mechanic still being tuned.

- Contracts: requests to find/deliver specific Yakkamon. They are your coin faucet ("your cash faucet for coins") and the main sink for excess Yakkamon — so you will want to hunt very regularly. Aug 6, Aug 13, Sep 1

- Legendaries come mainly through events, tournaments and special conditions; rares can show up in any hunt. Aug 21

- Seasonal, day/night and calendar systems layer onto hunting so what you can find keeps changing. Aug 6

- Fishing: not designed for early access ("wouldn't be surprised if it ends up in Yakkamon"). Sep 1

## 9. Combat

- Format: lane-based 3v3. Lanes act top to bottom (lane 1 first). Each Yakkamon has 2–3 abilities in a preset order and cycles through them every time it acts. Sep 1 Positions are chosen before the fight and, as of Aug 21, could not be changed mid-battle unless a skill does it; AOE attacks make positioning matter. This was not re-confirmed after the Sep 1 player-input decision. Aug 21

- Player input: NOT a pure simulation. The architecture now lets players take actions during combat via "mechanic swapping" — a major decision made the week of Sep 1, built flexibly so the battle type can change with player feedback. Real-time interaction mechanics were already being trialed on Aug 21. Aug 21, Sep 1

- Initiative: coin flip, unless a trait decides it; type advantage in a lane supersedes everything and gives that lane the first move — so avoid type disadvantage, especially in lane 1. Sep 1

- Fight variables: stats, level, type, abilities, passives, potentially a held item. Lane effects, ground types and weather (sandstorm-style) are in the back pocket for later, not early access. Sep 1

- Types: 13 types at launch (fire, water, rock and familiar archetypes with their own spin). Every Yakkamon has exactly one type at release; multi-types come later. Dragons are only weak to two types instead of three. Sep 1

- Depth: type advantage vs skill-loop advantage — a favorable matchup can lose to a better skill order (one big hit vs shield-then-attack). Considered cutting skills to two with more passives. Aug 21

- Build craft: skill expression comes from which monsters you use, their skills, levels, stats and passives; team compositions are long-term projects, not pre-fight retooling. Aug 21

- Respec / skill extraction: skills can be swapped but respeccing is costly; the intended route is to find a monster with the skill and extract it onto another. Aug 21

- Pacing: typical fights 3–5 rounds (under a minute), with deliberate variance — some one-turn fights, some longer strategic ones. Battles run on an animation timer that can be sped up, but not skipped entirely if the interactive mechanics ship. Aug 21

- PvE and PvP use the same system. You can start PvE with only one or two Yakkamon (1v3). Aug 21, Sep 1

- PvP: planned as a necessity, arrives post-launch; matchmaking/MMR is essential; no meaningful rewards below an MMR cut-off (anti-bot); sophisticated bots flagged by event tracking. Aug 6, Aug 21

- Gyms: the team is looking into a core gym the team hopes you can decorate; visiting players would battle you and see your gym, layout and monsters. Aug 21

- Expected time split: "a 50/50 split or even a 30/30/30 split" between farming, combat and market/trading/progression — combat is not meant to dominate your time the way it does in Pokémon or RPGs. Aug 21

- Early meta: gathering/economy monsters most sought after; once PvP arenas and tournaments exist the meta likely shifts to battle stats. Aug 21

- Guilds/alliances: later — core game first. MMO/plaza aspects: wanted, not for early access. Aug 21, Sep 1

## 10. Stats, genetics, breeding, evolution, leveling

- Stats are baked in at generation: each Yakkamon has hidden innate genetic values plus training values. Species have their own stat curves. Age/weight affecting stats was considered and dropped. Aug 6, Sep 1

- Build expression = genetics × training × (later) breeding; you shape a monster by investing resources into it, not by equipping gear. Sep 1

- No wearable gear. At most a single Pokémon-style held item giving one passive. No equipment slots. Sep 1

- Leveling: through combat, training and food — all of the above. Sep 1

- Traits/passives: percentage-chance random rolls at catch time; the main way to specialize your farm and combat team. Also obtainable via the market or quests. Aug 6, Aug 13

- Breeding: genetics carry down the line; breed good parents of the same species to build bloodlines; 1–3-year breeding projects for optimizers; sneaky ways to move traits across species and type groups. Fixed component + RNG component — you should be able to estimate outcomes within 80–90%. Aug 6, Aug 13

- Breeding limits: bred Yakkamon are tradable. To prevent inflation each Yakkamon has a breeding limit scaled by rarity: commons can breed above replacement (two make three), rarer ones roughly replacement, some legendaries only once; offspring inherit a narrower limit. Sep 1

- Breeding is "coming a bit later"; advanced breeding is post-launch. Aug 6, Sep 1

- Genetics deliberately black-boxed so the community back-solves it together. Aug 6

- Evolutions: NOT at launch. Reason: with fixed low supply per evolution tier, the population would drift toward the top tier; the team wants to solve that first. When they arrive, conditions are per-monster and partly hidden with in-game hints. Aug 21, Sep 1

## 11. Economy

- Free to play, free sign-up. No NFT needed. Guardrails similar to Sunflower Land ("free to try" — put in to get out). Aug 13, Sep 1

- Two-layer model (early, "started working on a model"): an unlimited free-to-play layer whose output is untradable; tradable production is gated by spending coins (the Web2 progression currency — possibly renamed "new yen" later). Coin faucets are limited: VIP, economy-positive actions like burning other assets/crops, and Yakkamon contracts. Net effect: F2P is effectively infinite but cannot flood the tradable economy. Sep 1

- Sinks: contract deliveries consume Yakkamon and will be "hungrier" than generation, so commons get caught and sunk rather than inflating. Heavy sinks everywhere; an infinite end-game sink (as in Sunflower Land's latest chapter). Aug 6, Aug 13

- No resets. Mild inflation is accepted as normal; addressed with brakes, hard sinks and new content that absorbs old content (chapter model). Aug 13

- Marketplace: in-game marketplace confirmed; free-mint NFTs also trade on the Ronin marketplace. Aug 13

- Skill trading (extract a skill from a monster and sell it) is being considered. Aug 6

- No enforced producer-vs-fighter capacity split — specialists trade with each other naturally; well-funded players can do both. Aug 21

- Deposited FLOWER: launch-window discounts, VIP, hunting events and auctions designed to get it spent in-game. Aug 13

- Extractive players and botting: below-MMR reward cut-offs and event-tracking bans. Aug 21 (The Aug 13 "export limit" idea is superseded by the two-layer model above.)

## 12. Platform and tech

- Browser web app first; no native app-store release and no console plans for now. Playable on mobile via PWA (add to home screen). Aug 6, Aug 13

- Landscape orientation. Main login is email; the PWA is faster than wallet in-app browsers, though the game works in portrait inside wallet browsers when you need a wallet action. Aug 21

- Login screen and flow built. Sep 1

- Open source: the client will be open-sourced, but not until the game stabilizes — features are still being cut and the team does not want contributors building on things that get removed. Later: translations, patches, UI improvements welcome. Aug 6, Aug 13

- A test-environment backdoor that leaked screenshots has been closed. Aug 13

- Tech built for Yakkamon (audio pipeline, UI/animation effects) will be back-ported to Sunflower Land. Aug 13

## 13. Art, animation and audio

- Style: retro bright pixel art in the Sunflower Land family — Yakkamon assets read as a "V2"/HD iteration with better lighting and richer biome patterns, distinct enough to feel like its own game. Base pack is Sunnyside; UI is high-resolution vector with "Nintendo-y" polish. Aug 6, Aug 21

- Monsters designed in-house; naming is not finalized — the team wants a naming framework that sounds "Yakkamon" and is open to community suggestions; community memes (e.g. the head-banging sprout) shape monster personality. Aug 13

- Named/nicknamed so far in streams: Waddler (mouse-like, name not confirmed), a stone turtle Yakkamon, A-Rock (a sleepy, chunky, slow rock monster), the head-banging sprout/"Spud", and a fat hippo silhouette (Bryn's favorite, "probably not going to make it all the way to the end"). Aug 13, Aug 21, Sep 1

- Animation: programmatic animation (hops etc.) at first to avoid huge sprite sheets; not everything animated on day one of early access. Since then an AI tool generates draft animations from still images (A-Rock sleeping, Waddler sniffing around a tree, tree movement) — placeholder quality, to be polished before release. Aug 21, Sep 1

- Audio: AI-generated by Craig — music, ambient and SFX; each Yakkamon to have its own voice/personality (sleeping snore and select sounds demoed for the turtle and Waddler); farming and battle themes exist in alpha; SFX take ~3.5 min each to generate, music ~3 s; community-made sounds possible if they match fidelity. Aug 13, Aug 21

- Lore: not a narrative game, but hints about where monsters came from and who the good/bad guys are will be drip-fed. Community idea that legendaries drive weather/seasons was well received. Aug 21

## 14. Early access scope vs later

In early access (fundamentals): gathering/farming, monsters, hunting, basic combat (PvE), core expansions, crafting, shops, Discord integration, 13 types, one type per Yakkamon, legendary utilities. Aug 6, Aug 21, Sep 1

Post-launch / later chapters: PvP arenas and tournaments, advanced breeding, evolutions, multi-types, new regions and monster types each chapter, weather/lane effects, land customization (gym customization is the launch-era idea being looked into), guilds, MMO/plaza features, fishing, app-store release (not planned), full animation polish. Aug 6, Aug 13, Aug 21, Sep 1

Chapter-based rollout is the model: polish the core loops first, then build what the community wants and react to where demand and sinks are needed. Aug 6

## 15. Community and communication

- Wholesome, friendly community norms: no token speculation, degen behavior or incentive farming; slow mode was needed at peak. Aug 6

- Streams are weekly-ish Discord team broadcasts. On Aug 6 the team had no recording automation (community members recorded); by Aug 21 the stream opened with "let's get this recording going". Aug 6, Aug 21

- Formal proposal process like SFL may come, but base systems will stay partly hidden by design. Aug 6

- Trivia crossover with the SFL trivia game "perhaps". Aug 21

- Next showcase intended: the battle system itself. Sep 1

## 16. Open questions / unconfirmed as of Sep 1

- Exact wave dates after Sep 14 (tentative, awaiting time-zone feedback) and how gas sponsorship on the Ronin Launchpad works. Sep 1

- Whether the leaderboard will still be hidden before launch (last stated Aug 6).

- Which of the free-mint Storm/Echo/Ghost/Bloom counts are legendary versus "early rare", and whether the 1,500 reserve is inside the 10,000. Sep 1

- Whether soil degradation/upkeep survives as an active-play mechanic now that absence carries no decay. Aug 21 vs Sep 1

- Numeric values for legendary utilities; exact breeding limits per rarity; the final name of the "coins" currency. Sep 1

- Whether the ambient-monster taming mechanic survives in its current form. Sep 1

- Monster names (not finalized). Aug 13

- Change-linked-wallet feature ETA. Aug 13

## 17. Superseded — what changed between streams

| Topic | Earlier statement | Current statement |

| Pre-registrations | 45,000 Aug 6 | 100,000 Aug 21 |

| Free-mint supply | 10,000–15,000, being finalized Aug 13 | 10,000 Sep 1 |

| Free-mint timing | "mid-September", reveal "middle of October" Aug 13 | Sep 14 mint, Oct 14 reveal, snapshot Sep 10 Sep 1 |

| Free-mint structure | Waves likely; more addresses than NFTs Aug 13 | Five defined waves with rank bands, 5 FLOWER rule for Wave 2, Ronin wave, 1,500 reserve Sep 1 |

| Airdrop tiers (changed Aug 12, explained on the Aug 13 stream) | Top 1,000 rewarded; rare tier ran up to 2,000 supply as described on Aug 13 | Top 2,000 rewarded; new top legendary; rare tier became legendary Aug 13 |

| Combat input | Auto-battler with fixed positions; real-time interaction mechanics under trial Aug 21 | Decision made: players act in combat via "mechanic swapping"; flexible architecture Sep 1 |

| Breeding limits | No hard limit; repeated breeding adds noise/degradation Aug 13 | Explicit breeding limit scaled by rarity; offspring inherit narrower limits Sep 1 |

| Evolutions | Planned; per-monster hidden conditions Aug 13, Aug 21 | Not at launch — supply-dynamics problem to solve first Sep 1 |

| Tradability control | Idea: activity-based "export limit", unlimited for VIP Aug 13 | Two-layer economy: untradable F2P output, tradable output gated by coins Sep 1 |

| Away-from-game | Soil degrades (e.g. 1.6× slower) until re-fertilized if the farm is not tended Aug 21 | "There isn't any decay … no neglect feature": absence only pauses — bins fill, jobs stop Sep 1. (Hitting the resource cap and stopping was already stated on Aug 21 and is consistent.) Whether soil degradation survives as an active-play upkeep mechanic is an open question — the digest's reconciliation, not a team statement |

| Resource storage | "Tons of resource bins" in earlier builds Sep 1, describing the old build | One bin per resource Sep 1 |

| Discord points | Off, maybe manual weekly rewards Aug 6 | Not doing Discord points Aug 13 |

| Legendary tier names | Storm, Echo + others Aug 13 | Storm, Echo, Ghost, Bloom in the free mint; "Ghost" flagged as a typo/type swap on stream, boosts unchanged Sep 1 |

| Utilities timing | "In September, we are going to be dropping the exact utilities" Aug 13 | Published as descriptive text in the Yakopedia; numbers still balancing Sep 1 |

| Gear | "There may be other SFTs, there may be other items that provide boosts that you build around" Aug 6 | No wearable gear; at most one held item Sep 1 |

| Animation | Programmatic hops first Aug 21 | AI-drafted animations from stills now in the build (placeholder) Sep 1 |

| Open source | Not yet Aug 6 | Yes, once stable Aug 13 — consistent, timing clarified |

| Discord in-game | — | Discord updates and a light role system inside the game Aug 21 |

Built only from the four transcripts listed above. Republished after each new stream; the newer stream always overrides the older one.
