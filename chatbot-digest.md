<!-- Cumulative Dev Stream digest. Source: Erdem's Dev Meeting Cumulative File project (later-dated streams override earlier ones). Replace this file when the digest is republished, then rerun build-chatbot-knowledge.mjs. -->

# Yakkamon — current state of the game

      Current as of the 1 September 2026 stream · digest version 2026-09-02 · four streams merged

      Every statement carries the date of the stream it came from, e.g. 01 Sep. Where a later stream changed or contradicted an earlier one, the later stream wins: the current position is stated in the topic section and the old position is logged in section 17 ("Superseded"). Only the four transcripts above were used; nothing here comes from other sources. The team's standing disclaimer applies to everything: the game is in development and anything discussed can change before launch.

      Sources, oldest → newest

- 6 Aug 2026 — First official stream · trainer dashboard, deposits, design pillars

- 13 Aug 2026 — Airdrop rework, OG title, tradability, timeline

- 21 Aug 2026 — Biome pack, combat system, upkeep UI, audio

- 1 Sep 2026 — Ronin free mint waves, Yakopedia, economy model, hunting


## 1. Key dates and timeline

| When | What | Source |

| 10 Aug 2026 | Early FLOWER deposit went live in the trainer dashboard (pushed back from 5 Aug) | 06 Aug |

| 10 Sep 2026 | Leaderboard snapshot for the free-mint whitelist waves. Rank is read from the leaderboard on yakkamon.com | 01 Sep |

| 14 Sep 2026 | Ronin free mint goes live on the Ronin Launchpad; the waves then run "over the space of a few days". Dates after the first are tentative and open to time-zone/duration feedback | 01 Sep |

| ~1 week after mint | 1,500 reserved Yakkamon sent out manually as an airdrop — "likely a week after the free mint, but definitely before the reveal" | 01 Sep |

| 14 Oct 2026 | Reveal of the hidden free-mint Yakkamon | 01 Sep |

| After the reveal | Leaderboard finalised ("could be weeks, could be a month, could be a bit longer" after the reveal) → airdrop rewards distributed → early access set up | 13 Aug |

| ~1 week before early access | Leaderboard lock announced with a specific date given closer to the time | 13 Aug |

| Q4 2026 | Early access launch. An internal date exists but has not been shared | 13 Aug |

| September 2026 | Legendary utilities published — delivered as the Yakopedia section of the docs on 1 Sep | 13 Aug → 01 Sep |

Sequence as the team describes it 13 Aug, 01 Sep: free mint (14 Sep) → reveal (14 Oct) → finalise leaderboard → distribute rewards → early access.

## 2. Studio and team

- Yakkamon is the second major IP from the Sunflower Land team (Thought Farmer Studio). It is a separate project from Sunflower Land but reuses the FLOWER token, may have light lore crossovers, and shares the same retro/bright art family while having its own look, monsters, backgrounds and HD UI. 06 Aug

- Communities are deliberately separated: Sunflower Land questions go to the Sunflower Land streams, Yakkamon streams are Yakkamon-only. 06 Aug

- Adam — hosts the streams (Craig's "fearless leader"); works on infrastructure (login, news, referral systems, Discord integration into the game), UI modals and battle prototyping. 06 Aug, 13 Aug, 21 Aug, 01 Sep

- Bryn — lead game designer, owns the systems design; splits time with Sunflower Land in waves (roughly 50/50 on average). Online handle "Jam Boy Magic". 06 Aug, 13 Aug, 01 Sep

- Spencer — main engineer, ~90% on Yakkamon; building the UI, world, expansions, hunting grounds, crafting, login flow and buildings, and generating the AI-drafted animations; self-described perfectionist who sets the polish standard. 06 Aug, 13 Aug, 21 Aug, 01 Sep

- Craig — "mastermind" of the trainer dashboard; joined the Yakkamon game build the week of 13 Aug; owns deposits, free-mint contracts and AI-generated audio, and presented the animation drafts (plus his own A-Rock "Harry Potter portrait" test). 06 Aug, 13 Aug, 21 Aug, 01 Sep

- Elias — was mainly on Sunflower Land 06 Aug; present on the 1 Sep stream.

- Matt L — 12-week game design intern from Bryn's old university; focused on combat and skill design and credited with a large share of the battle system. 06 Aug, 21 Aug

- Gabby — lead artist; Yakkamon monsters are designed in-house by Gabby's art team. 13 Aug, 21 Aug

- Daniel Diggle — external artist behind the original Sunnyside/Sunflower Land asset pack; designed the new Yakkamon UI and HUD (finished by 21 Aug) and gave the team early, exclusive access to a brand-new biome pack (biomes, seasons, elements). 06 Aug, 21 Aug

- Ronin team (incl. Jiho) — guiding the launchpad process, supplying extra whitelist lists, reviewing the mint contracts. 01 Sep

- Community language: players are "trainers"; Adam gets called "Professor Oak"; sign-offs in play include "Yakadabadoo", "Yakka jam", "Get hype". 06 Aug, 21 Aug

## 3. Pre-registration, trainer dashboard and points

Numbers - Pre-registered trainers: 45,000 06 Aug → 100,000 21 Aug. - About 10,000 came in through private trainer codes distributed via Sunflower Land (and a small number via Ronin); another 8–9,000 tried to sign up without a code before referrals opened; referrals then "went crazy". 06 Aug - 4,500–5,000 bot accounts were banned; referrals will be double-verified before the leaderboard is finalised. 06 Aug

X / Twitter - The original "Play Yakamon" X account was compromised and a phishing link was posted. The team created a new official X account rather than wait on X support. 06 Aug - Trainer dashboard lets you connect to the new account: +10 points. Anyone who connected the old account keeps those points, so they can hold 20 points from X in total. Reconnect shows in the dashboard if you previously connected. 06 Aug - Nothing in the game itself was compromised; no need to re-register. Three or four fake websites were taken down. The official site is yakkamon.com — always check official links. 06 Aug

Wallets - Wallet linking is live in the dashboard. 06 Aug - Option to change a linked wallet is being looked into; no ETA. 13 Aug

Discord points - A Discord emoji-reward feature (mods and players handing out emojis) hit ~10 messages/second and turned into reaction farming, so it was switched off. A manual weekly reward system was floated. 06 Aug - "We're not doing Discord points anymore" — memes earn personal appreciation only. 13 Aug - Bot sign-up waves also triggered a 3-day Discord restriction on the server (no image posting, invite links broken); the team is now stricter on verification to protect the game, economy and server. 13 Aug - Discord is being integrated into the game: Discord updates and communication will appear in-game, plus a light role system between the two. 21 Aug

### Early FLOWER deposit

- Went live 10 Aug (delayed from 5 Aug). Rules are on the website. 06 Aug

- Deposited FLOWER stays yours — you can withdraw it or spend it in-game later. Deposits are not a purchase. 06 Aug, 13 Aug

- Bonus 1 — weekly multiplier: week 1 pays points equal to 3× the FLOWER deposited (5 FLOWER → 15 points). The multiplier drops by 0.2× each week; with the leaderboard's likely timing it "may never reach 1" and could end around 1.2× when deposits close. If it does reach 1× it stays at 1× — it will not go below. 06 Aug, 13 Aug

- Bonus 2 — size bonus, per single deposit: 50 FLOWER → +5 bonus points, 500 FLOWER → +100 bonus points, scaling with deposit size. Must be one transaction (two 25s do not equal one 50). 06 Aug

- Design intent: reward depositing early rather than a last-minute rush before launch. 06 Aug

- ~2.5 million FLOWER deposited in the first ~5 days — roughly a fifth to a quarter of circulating FLOWER. 13 Aug

- OG title: earn 50,000 points within a single week (≈15,000 FLOWER at the week-1 3× multiplier). Once claimed it is permanent; it gets harder each week as the multiplier falls. It is a title, not an item, to avoid incentivising the wrong behaviour. 13 Aug

- The team wants deposited FLOWER spent rather than withdrawn at launch: the first weeks of access will carry discounts on hard-currency items, VIP, hunting events and possibly auctions. 13 Aug

### Leaderboard

- The dashboard leaderboard shows the top 100. 06 Aug

- The team said it would hide the leaderboard closer to launch to stop last-day gaming — no further update since. 06 Aug

- The leaderboard keeps running until the game launches; the lock will be announced about a week before early access. 13 Aug

- The 10 Sep snapshot is what decides the free-mint waves. It is not described as the final airdrop lock. 01 Sep

### Trainer airdrop rewards (13 Aug revision)

- Rewards were reworked because sign-ups exploded: the top 2,000 (previously top 1,000) now get "something pretty solid"; a new legendary tier was added at the very top; and the former rare tier that ran up to 2,000 supply is now a legendary. Nobody's reward got worse — in many cases it improved. The original announcement was badly worded and read as a nerf. 13 Aug

- Storm and Echo are handed out mostly through the trainer airdrop; a very small amount goes into the in-game Yakkamon rewards pool and some can appear in later special events. 13 Aug

## 4. Ronin free mint

- Chain / platform: Ronin blockchain, via the Ronin Launchpad. Free to mint; you pay gas in RON. Exactly how the launchpad's gas flow works was still unclear (Ronin calls the contract). 01 Sep

- Live: 14 Sep 2026. Contracts were with the Ronin team for review on 1 Sep. 01 Sep

- Supply: 10,000 hidden Yakkamon. 01 Sep (Earlier "10,000–15,000" estimate is superseded.)

- Hidden until 14 Oct 2026. NFTs can be traded on the Ronin marketplace before and after the reveal; once early access begins they can be deposited into the game and used. 13 Aug, 01 Sep

- What's inside: a chance at "some of the legendaries and the early rares" — 3 Storm, 5 Echo, 10 Ghost and 50 Bloom. The stream did not say which of those four are legendary versus early rare, and did not characterise the remainder of the supply. 01 Sep

- The free-mint collection is the Yakkamon collection — Yakkamon released later will appear in the same collection. 01 Sep

- Purpose: hype and exposure on Ronin; pull active players from other Ronin games into Yakkamon. 13 Aug, 01 Sep

- Whitelist rules: rank taken from the yakkamon.com leaderboard at the 10 Sep snapshot. You can mint in more than one wave — the higher your rank, the more chances you get. Within a wave it is first-come: be online, be whitelisted, have RON for gas. Not everyone will get one. 01 Sep

- Pre-refinement guidance (13 Aug, before the wave table existed): whitelists would be over-provisioned (~20–30% more addresses than NFTs in early waves) so every wave mints out, and everyday players with points could take part. The 1 Sep wave table now defines the actual rank bands. 13 Aug → 01 Sep

- 1,500 also reserved for a manual airdrop, likely a week after the mint and before the reveal. Whether the 1,500 sit inside or outside the 10,000 was not stated. 01 Sep

Waves 01 Sep

| Wave | Who | Supply | Notes |

| 1 | Top 1,000 trainers | — | Guaranteed whitelist spot; mint at your own pace |

| 2 | Top 10,000 trainers | 3,000 | Requires a 5 FLOWER minimum deposit (withdrawable/spendable) — anti-Sybil measure suggested by Ronin; more than 3,000 in the top 10k already qualify |

| 3 | "Ronin wave" — list gathered by the Ronin team from active/top players of other Ronin games | 2,000 | Not tied to the Yakkamon leaderboard; many trainers will still be eligible |

| 4 | Trainers ranked 1–20,000 | — | The wave where the full 10k may mint out |

| 5 | Trainers ranked 1–50,000 | remaining | Only if supply is left |

- Docs: free-mint details and a new Yakopedia section went live in the docs on 1 Sep; a Yakopedia will exist inside the game after launch. 01 Sep

## 5. Rarity tiers, NFTs and the collection

- Legendary = pre-minted, fixed, very scarce supply. Rare = obtainable only during limited times; supply is not fixed and depends on how players hunt. 13 Aug

- Rarity is set at the species level: every member of a species shares its rarity — there are no rare versions of common monsters. 21 Aug The 1 Sep stream also refers to an uncommon tier ("the rares or the uncommons"). 01 Sep

- Working structure (explicitly not a promise): legendaries are NFTs (close to one-of-ones / incredibly scarce), rares are SFTs, commons are plain game assets. Not every monster is an NFT — only the supply-limited or time-limited ones. 13 Aug

- Once a type of monster has been pre-minted, those are the only ones of that type that can ever exist. New chapters, events and legendaries add new pre-mints to the collection over time (Sunflower Land model). 13 Aug

- Total NFT count is not fixed: 2,000 legendaries via the leaderboard airdrop plus rares, the Ronin free mint, and future additions. 13 Aug

- Legendaries carry traits that only legendaries can have. 13 Aug

- Stats: rares and legendaries get a slightly better stat allotment and higher potential over levelling; the best commons can beat middling rares and roughly match a low-end legendary. Some commons have unique traits too. Rarer monsters have higher impact, more desirable utility and more scarcity. 21 Aug

- Forging/merging (e.g. 10 commons → 1 rare): not planned. Bryn dislikes it aesthetically for a cozy creature collector ("squishing your guys into jam") but is "not completely against" it, noting economic positives. Scarcity is handled through contracts and sinks instead. 06 Aug

## 6. Legendary utilities (Yakopedia, 1 Sep)

- Utilities are listed as descriptive text only; numeric values are still being balanced and playtested, and will keep being tuned even after announcement. 01 Sep

- Storm — "Storm-charged": Yakkamon within range work 2× as fast. 01 Sep

- Storm + Echo is called out as a combo worth holding together — "they work together", and with both "you'll be really running through the resource requirements". 01 Sep

- Ghost: the name "Ghost" in the docs drew questions on stream; Adam called it a typo/type swap to be fixed in a docs push, and Bryn said the tier is functionally unchanged — same boosts — with names being aligned to the game's types. Treat the final name as unconfirmed. 01 Sep

- A listed legendary utility regenerates a percentage of max HP every combat turn — described as "absolutely busted" on a monster with good HP/defence; it forces opponents to alpha-strike. 01 Sep

- Farm boosts come from the Yakkamon themselves (no statues to craft or place): legendaries and some rares carry buffing abilities such as 2× on a gathering job. 21 Aug

- AOE sizes: small AOE affects only the jobs immediately around the Yakkamon (e.g. the two or three adjacent trees); large AOE affects an entire section of the farm and every Yakkamon working there. 01 Sep

- Stacking: boosts with the same name do not stack (two "Wood Gatherer" passives = one); differently named or higher-ranked boosts do stack ("Wood Gatherer" + "Extreme Wood Gatherer"). Some utilities are additive, some multiplicative with each other. Design goal: breadth of different monsters beats duplicates. 21 Aug, 01 Sep

- Rares and uncommons have no utilities listed yet because some of their utilities are randomly rolled when you catch or receive them, alongside the species and stat roll — a monster can have great stats and weak utility or vice versa; the keepers (and the ones worth trading) have both. 01 Sep

## 7. World, land and gathering

- View and control: top-down "god view" like Sunflower Land; you assign jobs, you do not walk a character around. 01 Sep

- You start on a small revealed patch with one starter Yakkamon; it gathers berries/wood to "part the clouds" into new areas. Clouded areas are unexpanded; some can be glimpsed through. Expanding reveals resource areas (e.g. a lumber yard) and hunting areas. 06 Aug, 13 Aug

- Palworld-style vibe: expand land, collect monsters, put them to work; each Yakkamon fills a role; strong automation focus (Zachtronics-style "set up machines and watch them run"). 06 Aug

- Separate regions: home/gathering regions where you build out, plus distinct hunting regions (desert, beach etc. — the Pokémon "new area" feeling). New regions and monster types arrive chapter by chapter. 21 Aug

- Every Yakkamon you own is another simultaneous action — that is the appeal of expanding your roster. There is no maximum number of active Yakkamon; the pressure is to fully staff all jobs and keep the logistics flowing. 01 Sep

- Logistics puzzle: e.g. one processing building that can make X, Y or Z, each needing wood, crops or ore — you choose what to run and must keep the supply chains for it fed. 01 Sep

- Job cards show growth progress, plot state, completion time and status. 21 Aug

- Upkeep: farm plots have upkeep; soil can show as "degraded" (e.g. 1.6× slower) until re-fertilised, and fertiliser costs resources. Plot groups scale non-linearly: the second and third plots' upkeep grows less than their production, so investing early in efficient plots is rewarded. 21 Aug (How this squares with the 1 Sep "no decay" statement is an open question — see section 17.)

- Absence pauses, it does not punish: if you leave for a week or a month, Yakkamon work until their bins/job areas are full, then stop until you return. There is no decay and no neglect mechanic — the team explicitly rejected an attention system for a 100-Yakkamon farm. 01 Sep

- Resource bins: simplified to one bin per resource (previously many bins). 01 Sep

- Shops: selling resources at shops is in. 01 Sep

- Recipe crafting is being built: resources needed to expand the farm plus lures and baits for hunting. 01 Sep

- Land customisation: likely limited at launch; the team is instead "looking into" full customisation of your own gym (see Combat). More land customisation is expected eventually. 21 Aug

- Time and seasons: an in-game sped-up clock with day/night (not tied to your real clock) so different monsters appear at night; weekly seasons (winter week, summer week…) likely to carry over from Sunflower Land so hunts and farm setups keep changing; a weather system is wanted. 06 Aug, 21 Aug

- Current build (1 Sep): about five expansions forming a loop that touches every system; once that is solid, the team builds out the first couple of weeks of gameplay. 01 Sep

## 8. Hunting

- Hunting is the third pillar alongside gathering and combat, and the primary way to obtain any monster. 06 Aug, 21 Aug

- How it works: hunting is a job. Assign a Yakkamon to a hunting ground; it rolls for a Yakkamon; you influence the outcome with resources (lures, baits). Yakkamon can hunt forever — the limit is the hunting ground, which is progressively hunted out and yields less. 01 Sep

- Hunting grounds have multiple areas (three in the current build; swamps, water areas etc. to come). Tell a Yakkamon to focus on one area (targets that area's monster type — e.g. a rocky outcrop for rock types) or let it wander for anything. Lures attract specific types. 01 Sep

- Two encounter types 01 Sep:

- Aggressive — a red alert on the hunting ground means a monster wants to battle you; most things in that ground pause until you act.

- Ambient — skittish monsters that bop around; you bait them and your hunter has an emoji "conversation" with them until they either join you or run off. Mechanic still being tuned.

- Contracts: requests to find/deliver specific Yakkamon. They are your coin faucet ("your cash faucet for coins") and the main sink for excess Yakkamon — so you will want to hunt very regularly. 06 Aug, 13 Aug, 01 Sep

- Legendaries come mainly through events, tournaments and special conditions; rares can show up in any hunt. 21 Aug

- Seasonal, day/night and calendar systems layer onto hunting so what you can find keeps changing. 06 Aug

- Fishing: not designed for early access ("wouldn't be surprised if it ends up in Yakkamon"). 01 Sep

## 9. Combat

- Format: lane-based 3v3. Lanes act top to bottom (lane 1 first). Each Yakkamon has 2–3 abilities in a preset order and cycles through them every time it acts. 01 Sep Positions are chosen before the fight and, as of 21 Aug, could not be changed mid-battle unless a skill does it; AOE attacks make positioning matter. This was not re-confirmed after the 1 Sep player-input decision. 21 Aug

- Player input: NOT a pure simulation. The architecture now lets players take actions during combat via "mechanic swapping" — a major decision made the week of 1 Sep, built flexibly so the battle type can change with player feedback. Real-time interaction mechanics were already being trialled on 21 Aug. 21 Aug, 01 Sep

- Initiative: coin flip, unless a trait decides it; type advantage in a lane supersedes everything and gives that lane the first move — so avoid type disadvantage, especially in lane 1. 01 Sep

- Fight variables: stats, level, type, abilities, passives, potentially a held item. Lane effects, ground types and weather (sandstorm-style) are in the back pocket for later, not early access. 01 Sep

- Types: 13 types at launch (fire, water, rock and familiar archetypes with their own spin). Every Yakkamon has exactly one type at release; multi-types come later. Dragons are only weak to two types instead of three. 01 Sep

- Depth: type advantage vs skill-loop advantage — a favourable matchup can lose to a better skill order (one big hit vs shield-then-attack). Considered cutting skills to two with more passives. 21 Aug

- Build craft: skill expression comes from which monsters you use, their skills, levels, stats and passives; team compositions are long-term projects, not pre-fight retooling. 21 Aug

- Respec / skill extraction: skills can be swapped but respeccing is costly; the intended route is to find a monster with the skill and extract it onto another. 21 Aug

- Pacing: typical fights 3–5 rounds (under a minute), with deliberate variance — some one-turn fights, some longer strategic ones. Battles run on an animation timer that can be sped up, but not skipped entirely if the interactive mechanics ship. 21 Aug

- PvE and PvP use the same system. You can start PvE with only one or two Yakkamon (1v3). 21 Aug, 01 Sep

- PvP: planned as a necessity, arrives post-launch; matchmaking/MMR is essential; no meaningful rewards below an MMR cut-off (anti-bot); sophisticated bots flagged by event tracking. 06 Aug, 21 Aug

- Gyms: the team is looking into a core gym the team hopes you can decorate; visiting players would battle you and see your gym, layout and monsters. 21 Aug

- Expected time split: "a 50/50 split or even a 30/30/30 split" between farming, combat and market/trading/progression — combat is not meant to dominate your time the way it does in Pokémon or RPGs. 21 Aug

- Early meta: gathering/economy monsters most sought after; once PvP arenas and tournaments exist the meta likely shifts to battle stats. 21 Aug

- Guilds/alliances: later — core game first. MMO/plaza aspects: wanted, not for early access. 21 Aug, 01 Sep

## 10. Stats, genetics, breeding, evolution, levelling

- Stats are baked in at generation: each Yakkamon has hidden innate genetic values plus training values. Species have their own stat curves. Age/weight affecting stats was considered and dropped. 06 Aug, 01 Sep

- Build expression = genetics × training × (later) breeding; you shape a monster by investing resources into it, not by equipping gear. 01 Sep

- No wearable gear. At most a single Pokémon-style held item giving one passive. No equipment slots. 01 Sep

- Levelling: through combat, training and food — all of the above. 01 Sep

- Traits/passives: percentage-chance random rolls at catch time; the main way to specialise your farm and combat team. Also obtainable via the market or quests. 06 Aug, 13 Aug

- Breeding: genetics carry down the line; breed good parents of the same species to build bloodlines; 1–3-year breeding projects for optimisers; sneaky ways to move traits across species and type groups. Fixed component + RNG component — you should be able to estimate outcomes within 80–90%. 06 Aug, 13 Aug

- Breeding limits: bred Yakkamon are tradable. To prevent inflation each Yakkamon has a breeding limit scaled by rarity: commons can breed above replacement (two make three), rarer ones roughly replacement, some legendaries only once; offspring inherit a narrower limit. 01 Sep

- Breeding is "coming a bit later"; advanced breeding is post-launch. 06 Aug, 01 Sep

- Genetics deliberately black-boxed so the community back-solves it together. 06 Aug

- Evolutions: NOT at launch. Reason: with fixed low supply per evolution tier, the population would drift toward the top tier; the team wants to solve that first. When they arrive, conditions are per-monster and partly hidden with in-game hints. 21 Aug, 01 Sep

## 11. Economy

- Free to play, free sign-up. No NFT needed. Guardrails similar to Sunflower Land ("free to try" — put in to get out). 13 Aug, 01 Sep

- Two-layer model (early, "started working on a model"): an unlimited free-to-play layer whose output is untradable; tradable production is gated by spending coins (the Web2 progression currency — possibly renamed "new yen" later). Coin faucets are limited: VIP, economy-positive actions like burning other assets/crops, and Yakkamon contracts. Net effect: F2P is effectively infinite but cannot flood the tradable economy. 01 Sep

- Sinks: contract deliveries consume Yakkamon and will be "hungrier" than generation, so commons get caught and sunk rather than inflating. Heavy sinks everywhere; an infinite end-game sink (as in Sunflower Land's latest chapter). 06 Aug, 13 Aug

- No resets. Mild inflation is accepted as normal; addressed with brakes, hard sinks and new content that absorbs old content (chapter model). 13 Aug

- Marketplace: in-game marketplace confirmed; free-mint NFTs also trade on the Ronin marketplace. 13 Aug

- Skill trading (extract a skill from a monster and sell it) is being considered. 06 Aug

- No enforced producer-vs-fighter capacity split — specialists trade with each other naturally; well-funded players can do both. 21 Aug

- Deposited FLOWER: launch-window discounts, VIP, hunting events and auctions designed to get it spent in-game. 13 Aug

- Extractive players and botting: below-MMR reward cut-offs and event-tracking bans. 21 Aug (The 13 Aug "export limit" idea is superseded by the two-layer model above.)

## 12. Platform and tech

- Browser web app first; no native app-store release and no console plans for now. Playable on mobile via PWA (add to home screen). 06 Aug, 13 Aug

- Landscape orientation. Main login is email; the PWA is faster than wallet in-app browsers, though the game works in portrait inside wallet browsers when you need a wallet action. 21 Aug

- Login screen and flow built. 01 Sep

- Open source: the client will be open-sourced, but not until the game stabilises — features are still being cut and the team does not want contributors building on things that get removed. Later: translations, patches, UI improvements welcome. 06 Aug, 13 Aug

- A test-environment backdoor that leaked screenshots has been closed. 13 Aug

- Tech built for Yakkamon (audio pipeline, UI/animation effects) will be back-ported to Sunflower Land. 13 Aug

## 13. Art, animation and audio

- Style: retro bright pixel art in the Sunflower Land family — Yakkamon assets read as a "V2"/HD iteration with better lighting and richer biome patterns, distinct enough to feel like its own game. Base pack is Sunnyside; UI is high-resolution vector with "Nintendo-y" polish. 06 Aug, 21 Aug

- Monsters designed in-house; naming is not finalised — the team wants a naming framework that sounds "Yakkamon" and is open to community suggestions; community memes (e.g. the head-banging sprout) shape monster personality. 13 Aug

- Named/nicknamed so far in streams: Waddler (mouse-like, name not confirmed), a stone turtle Yakkamon, A-Rock (a sleepy, chunky, slow rock monster), the head-banging sprout/"Spud", and a fat hippo silhouette (Bryn's favourite, "probably not going to make it all the way to the end"). 13 Aug, 21 Aug, 01 Sep

- Animation: programmatic animation (hops etc.) at first to avoid huge sprite sheets; not everything animated on day one of early access. Since then an AI tool generates draft animations from still images (A-Rock sleeping, Waddler sniffing around a tree, tree movement) — placeholder quality, to be polished before release. 21 Aug, 01 Sep

- Audio: AI-generated by Craig — music, ambient and SFX; each Yakkamon to have its own voice/personality (sleeping snore and select sounds demoed for the turtle and Waddler); farming and battle themes exist in alpha; SFX take ~3.5 min each to generate, music ~3 s; community-made sounds possible if they match fidelity. 13 Aug, 21 Aug

- Lore: not a narrative game, but hints about where monsters came from and who the good/bad guys are will be drip-fed. Community idea that legendaries drive weather/seasons was well received. 21 Aug

## 14. Early access scope vs later

In early access (fundamentals): gathering/farming, monsters, hunting, basic combat (PvE), core expansions, crafting, shops, Discord integration, 13 types, one type per Yakkamon, legendary utilities. 06 Aug, 21 Aug, 01 Sep

Post-launch / later chapters: PvP arenas and tournaments, advanced breeding, evolutions, multi-types, new regions and monster types each chapter, weather/lane effects, land customisation (gym customisation is the launch-era idea being looked into), guilds, MMO/plaza features, fishing, app-store release (not planned), full animation polish. 06 Aug, 13 Aug, 21 Aug, 01 Sep

Chapter-based rollout is the model: polish the core loops first, then build what the community wants and react to where demand and sinks are needed. 06 Aug

## 15. Community and communication

- Wholesome, friendly community norms: no token speculation, degen behaviour or incentive farming; slow mode was needed at peak. 06 Aug

- Streams are weekly-ish Discord team broadcasts. On 6 Aug the team had no recording automation (community members recorded); by 21 Aug the stream opened with "let's get this recording going". 06 Aug, 21 Aug

- Formal proposal process like SFL may come, but base systems will stay partly hidden by design. 06 Aug

- Trivia crossover with the SFL trivia game "perhaps". 21 Aug

- Next showcase intended: the battle system itself. 01 Sep

## 16. Open questions / unconfirmed as of 1 Sep

- Exact wave dates after 14 Sep (tentative, awaiting time-zone feedback) and how gas sponsorship on the Ronin Launchpad works. 01 Sep

- Whether the leaderboard will still be hidden before launch (last stated 6 Aug).

- Which of the free-mint Storm/Echo/Ghost/Bloom counts are legendary versus "early rare", and whether the 1,500 reserve is inside the 10,000. 01 Sep

- Whether soil degradation/upkeep survives as an active-play mechanic now that absence carries no decay. 21 Aug vs 01 Sep

- Numeric values for legendary utilities; exact breeding limits per rarity; the final name of the "coins" currency. 01 Sep

- Whether the ambient-monster taming mechanic survives in its current form. 01 Sep

- Monster names (not finalised). 13 Aug

- Change-linked-wallet feature ETA. 13 Aug

## 17. Superseded — what changed between streams

| Topic | Earlier statement | Current statement |

| Pre-registrations | 45,000 06 Aug | 100,000 21 Aug |

| Free-mint supply | 10,000–15,000, being finalised 13 Aug | 10,000 01 Sep |

| Free-mint timing | "mid-September", reveal "middle of October" 13 Aug | 14 Sep mint, 14 Oct reveal, snapshot 10 Sep 01 Sep |

| Free-mint structure | Waves likely; more addresses than NFTs 13 Aug | Five defined waves with rank bands, 5 FLOWER rule for Wave 2, Ronin wave, 1,500 reserve 01 Sep |

| Airdrop tiers (changed 12 Aug, explained on the 13 Aug stream) | Top 1,000 rewarded; rare tier ran up to 2,000 supply as described on 13 Aug | Top 2,000 rewarded; new top legendary; rare tier became legendary 13 Aug |

| Combat input | Auto-battler with fixed positions; real-time interaction mechanics under trial 21 Aug | Decision made: players act in combat via "mechanic swapping"; flexible architecture 01 Sep |

| Breeding limits | No hard limit; repeated breeding adds noise/degradation 13 Aug | Explicit breeding limit scaled by rarity; offspring inherit narrower limits 01 Sep |

| Evolutions | Planned; per-monster hidden conditions 13 Aug, 21 Aug | Not at launch — supply-dynamics problem to solve first 01 Sep |

| Tradability control | Idea: activity-based "export limit", unlimited for VIP 13 Aug | Two-layer economy: untradable F2P output, tradable output gated by coins 01 Sep |

| Away-from-game | Soil degrades (e.g. 1.6× slower) until re-fertilised if the farm is not tended 21 Aug | "There isn't any decay … no neglect feature": absence only pauses — bins fill, jobs stop 01 Sep. (Hitting the resource cap and stopping was already stated on 21 Aug and is consistent.) Whether soil degradation survives as an active-play upkeep mechanic is an open question — the digest's reconciliation, not a team statement |

| Resource storage | "Tons of resource bins" in earlier builds 01 Sep, describing the old build | One bin per resource 01 Sep |

| Discord points | Off, maybe manual weekly rewards 06 Aug | Not doing Discord points 13 Aug |

| Legendary tier names | Storm, Echo + others 13 Aug | Storm, Echo, Ghost, Bloom in the free mint; "Ghost" flagged as a typo/type swap on stream, boosts unchanged 01 Sep |

| Utilities timing | "In September, we are going to be dropping the exact utilities" 13 Aug | Published as descriptive text in the Yakopedia; numbers still balancing 01 Sep |

| Gear | "There may be other SFTs, there may be other items that provide boosts that you build around" 06 Aug | No wearable gear; at most one held item 01 Sep |

| Animation | Programmatic hops first 21 Aug | AI-drafted animations from stills now in the build (placeholder) 01 Sep |

| Open source | Not yet 06 Aug | Yes, once stable 13 Aug — consistent, timing clarified |

| Discord in-game | — | Discord updates and a light role system inside the game 21 Aug |

Built only from the four transcripts listed above. Republished after each new stream; the newer stream always overrides the older one.
