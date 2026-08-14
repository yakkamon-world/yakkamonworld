/*
  YAKKAMON PORTAL — GAMEPLAY SYSTEMS
  Rendered by gameplay-page.js into the sidebar + detail panel on gameplay.html.

  Sources, in order of confidence:
    1. Yakkamon's own documentation (docs.yakkamon.com)
    2. Statements made by the team on the dev streams (6 and 13 August 2026)
    3. Official screenshots and UI mock-ups

  Anything drawn from a UI mock-up is flagged in the copy, because mock-up
  numbers are frequently placeholders rather than final tuning.

  Fields:
    slug    - URL key (?system=slug). Never rename an existing slug: old
              links fall back to the first entry rather than 404ing, which
              silently shows the wrong panel.
    title   - sidebar label and panel heading
    desc    - one-line summary
    detail  - the panel body (HTML allowed)
    like    - plain-English analogy, rendered as the "LIKE THIS" block
    icon    - inline SVG, currentColor stroke
*/
const YAKKAMON_GAMEPLAY = [
  {
    slug: "two-halves",
    title: "Two Halves, One Game",
    desc: "Half of Yakkamon plays itself. The other half only moves when you do \u2014 and each half feeds the other.",
    detail: "Yakkamon is two games bolted together. <strong>The idle half</strong> runs around the clock: your monsters farm, gather and produce whether or not the game is open, so you log back in to a pile of resources waiting to be collected. <strong>The active half</strong> only moves when you're playing \u2014 hunting rare creatures in the wild, crafting gear, and fighting other trainers. The two are not separate hobbies: better hunts give you better monsters, better monsters farm faster, and faster farming buys the gear for harder hunts. Understanding that feedback loop is most of understanding the game.",
    like: "Your farm is a slow cooker that keeps going all night. Hunting is the trip to the shops for better ingredients.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M3 8h6M3 16h6M15 8h6M15 16h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    slug: "core-loop",
    title: "The Core Loop",
    desc: "Catch, work, collect, craft, level up \u2014 then go catch something rarer. Every system bolts onto this circle.",
    detail: "Five steps, repeated. <strong>1. Catch</strong> \u2014 head into the wild and hunt Yakkamon; every one you catch joins your roster. <strong>2. Work</strong> \u2014 send them out to gather resources, which they repeat automatically, including offline. <strong>3. Collect</strong> \u2014 their haul stacks up in a storage bin, and you tap the bin to move it into your inventory. <strong>4. Craft</strong> \u2014 turn raw resources into gear, items and buildings, including the gear that catches rarer monsters. <strong>5. Level up</strong> \u2014 higher-level Yakkamon gather faster, and better gear plus a better team lets you go catch something rarer. Then back to step one.",
    like: "It's a snowball. Small team, small resources, small upgrades, slightly bigger team. Do that twenty times and you have an empire.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12a8 8 0 1 1-2.3-5.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M20 3v4h-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "creature-collecting",
    title: "Your Yakkamon",
    desc: "Around 50\u201360 species at launch \u2014 and four separate things decide whether an individual monster is worth keeping.",
    detail: "The team has said to expect roughly <strong>50\u201360 Yakkamon at launch</strong>. Four things make one individual worth having. <strong>Its type</strong> decides what it can gather at all (see Type Locking). <strong>Its stats</strong> roll slightly differently on every individual, so two of the same species won't be identical \u2014 it's worth hunting the same creature again to chase a better roll. <strong>Its rarity</strong> sits in tiers, and some rares are stronger than other rares in the same tier. <strong>Its traits</strong> \u2014 rare monsters can carry special traits that change how they farm, opening strategies ordinary monsters can't run.<br><br>The second dev stream added the machinery underneath: monsters have real genetics and base stats, traits are randomly rolled and define your build, and there are <strong>breeding lines with degradation but no hard cap</strong>, with evolutions planned. The team put the predictability of the rolls at roughly 80\u201390%.",
    like: "Think trading cards. Same picture on the front, better numbers on the back \u2014 and that's the one everybody wants.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M3 12h18M12 3a9 9 0 0 1 0 18" stroke="currentColor" stroke-width="1.6"/></svg>'
  },
  {
    slug: "type-locking",
    title: "Type Locking",
    desc: "Every resource can only be gathered by the right type \u2014 so your roster decides what you can gather at all.",
    detail: "This is the rule that makes collecting matter rather than just being a scoreboard. Each resource is gated to a type: a <strong>Grass type gathers Wood</strong>, and a <strong>Fire type cannot</strong> \u2014 the game refuses outright, with an in-game message reading \u201cFire type cannot harvest wood!\u201d<br><br>The consequence is that <strong>collecting more species literally unlocks more of the map's materials</strong>. A narrow roster caps what you're able to produce no matter how well you play. Only the Grass\u2192Wood pairing has been shown so far; the types behind Stone, berries and crops haven't been announced, and each region's materials are expected to follow the same pattern.",
    like: "You wouldn't ask a fish to chop firewood. Same rule \u2014 except here the game enforces it.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M14 6.5h7M17.5 3v7M3 17.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    slug: "work-cycle",
    title: "The Work Cycle",
    desc: "Gathering runs on a repeating work-and-rest cycle: assign, produce, tire out, sleep, restart \u2014 all by itself.",
    detail: "The engine room of the whole game. You <strong>assign</strong> a Yakkamon to a resource it's allowed to gather. Each work cycle <strong>runs for a set time</strong> before paying out, and working <strong>burns stamina</strong> \u2014 stamina is the limit on how much a monster can do in one stretch. The cycle finishes and drops its haul into a storage bin, then <strong>repeats automatically</strong>, so work continues while you're off hunting or battling. When stamina runs out the Yakkamon goes to bed, sleeps, recovers, and <strong>gets back to work on its own</strong>.<br><br>A sleeping monster isn't broken, it's recharging. There are two ways to raise output: <strong>level them up</strong>, since higher levels make them more efficient farmers, and <strong>collect more of them</strong>, since more monsters means more resource types unlocked and more gathering happening at once.<br><br>Cycle duration, stamina cost, yield per cycle and sleep recovery rate are all unpublished.",
    like: "Each monster is a little worker with a battery. Work drains it, sleep charges it, and it clocks back on without being told.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "storage-bins",
    title: "Storage Bins",
    desc: "Gathered resources pile into a capped bin that keeps filling offline \u2014 and stops paying once it's full.",
    detail: "Resources don't go straight into your bag. They stack in a <strong>storage bin</strong> that keeps filling on its own, <strong>including while you're offline</strong>, until you tap it to collect the haul into your inventory.<br><br>The catch is the cap. Screenshots show bins counting up as <strong>30 / 120</strong> and topping out at <strong>120 / 120 MAX</strong>, with early-game bins capped at 20. Once a bin hits MAX it stops accepting, and every hour it spends full is production you never banked. That makes bin capacity, and how often you check in, a real strategic variable rather than a chore \u2014 the difference between a farm that runs all night and one that quietly stops at 2am.",
    like: "A piggy bank that fills itself. Once it's full, extra coins bounce off the top \u2014 so empty it before it overflows.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16l-1.4 13H5.4L4 7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 7h18M9 4h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    slug: "monster-care",
    title: "Looking After Them",
    desc: "Your Yakkamon get hungry, hurt and tired \u2014 and a monster that needs something isn't earning.",
    detail: "Status icons float above a Yakkamon when something's wrong, and a notification feed calls it out by name \u2014 screenshots show messages in the form of \u201c[name] is Hungry\u201d. The states shown so far are <strong>hungry</strong> (needs feeding), <strong>hurt or knocked out</strong>, <strong>sleeping</strong> (recovering stamina) and <strong>needs an item</strong>. A Yakkamon can also ask for something directly with a speech bubble \u2014 one screenshot shows a stone icon with an exclamation mark.<br><br>An item bar sits along the bottom of the screen for exactly this: milk, flowers, mushrooms, a health item and others, ready to use on whoever's struggling. Since a monster in a bad state isn't producing, upkeep is part of the economy rather than flavour.",
    like: "They're pets with jobs. Feed them, patch them up, let them nap \u2014 and they keep earning for you.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "your-base",
    title: "Your Base",
    desc: "Land expansions, workstations, houses with beds, and the Hunting Area that connects farming to the wild.",
    detail: "Your base is the place all of this runs from. <strong>Land expansion</strong> carries a resource price on the button \u2014 the starter expansion reads <strong>10 Wood + 1 Stone</strong> \u2014 and more land means more room for workstations and farm plots. <strong>Buildings and stations</strong> shown so far include workbenches with their own storage counters, a workshop marked with an axe, houses with beds for sleeping monsters, crop plots and rock nodes. The <strong>Hunting Area</strong> is a dedicated zone with an entry cost on the sign (5 berries in the launch screenshot) \u2014 your doorway from farming into hunting.<br><br>The main menu carries six buttons: <strong>Squad</strong> (your active team), <strong>Items</strong>, <strong>Quests</strong>, <strong>Shop</strong>, <strong>Trade</strong> (the player market) and <strong>Log</strong> (notification history).",
    like: "It's a workshop yard. More space means more benches, and more benches mean more gets made at once.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11l9-7 9 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9.5V20h13V9.5M10 20v-5h4v5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "regional-exploration",
    title: "Regional Exploration",
    desc: "Deserts, volcanoes, fire regions and waters \u2014 each holding resources you can't get anywhere else.",
    detail: "The world splits into regions \u2014 deserts, volcanoes, fire regions and oceans \u2014 and each holds unique resources to gather and craft with. Combined with type locking, that means reaching a region is only half the problem: you also need a monster of the right type to work what's there.<br><br>Every region shifts through day and night and changes with the seasons, so what you find is never quite the same twice. The full mapping of which type unlocks which regional material hasn't been published.",
    like: "Different aisles in a very large shop \u2014 and you need the right shopping list to buy from each one.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l4-8 5 5 4-6 5 13" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "day-night-cycle",
    title: "Day, Night & Weather",
    desc: "A clock and a weather indicator run in the HUD, and both change what's out in the wild.",
    detail: "A clock sits in the corner of the screen with a sun or moon icon, and <strong>separate weather indicators</strong> sit next to it \u2014 sunshine and rain are both shown in the HUD. Day and night change which creatures are out, which resources are easiest to gather, and how regions look.<br><br>One thing worth knowing before you plan around it: the team confirmed on the 6 August stream that day and night run on a <strong>sped-up in-game clock, not real time</strong>. There is no timezone that gets a better night shift and no advantage to living anywhere in particular \u2014 the cycle comes to everyone equally.",
    like: "The world has its own little day that runs faster than yours. Nobody gets a head start on sunrise.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "seasonal-system",
    title: "Seasonal System",
    desc: "Seasons reshape the world, and new monsters drop into the wild on a schedule players race to claim.",
    detail: "Seasons change the world around you and each region shifts with them. On a <strong>three-month cadence</strong>, brand-new Yakkamon are released into the wild and <strong>players compete to hunt them down and claim them first</strong>. Being ready when a drop lands is a genuine advantage, and one of the better reasons to keep your farm and gear strong between seasons rather than coasting.<br><br>The cadence isn't settled. The docs describe the three-month cycle, but the team said on 6 August they are considering a Sunflower Land-style <strong>weekly season</strong> instead \u2014 a winter week, a summer week, different Yakkamon appearing week to week.",
    like: "New stock arrives on a known date and everyone queues. Turning up prepared beats turning up first.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    slug: "crafting-hunting",
    title: "Crafting & Hunting",
    desc: "Gear is how you reach the rare stuff \u2014 and the gear is built from what your ordinary monsters gathered.",
    detail: "You refine gathered resources into the gear and items needed to <strong>track down and capture rarer, tougher monsters</strong>. Better gear opens harder regions and rarer spawns, and those rarer monsters gather better, which funds the next tier of gear.<br><br>Crafting is worth watching as the thing that actually gates progress. Raw gathering scales fairly easily once you have a roster; what limits most players is turning that pile into the specific items a harder hunt needs.",
    like: "You need a better fishing rod to catch the big fish \u2014 and you build the rod out of what the small fish helped you collect.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 3.5l6 6-9 9-6 1 1-6 8-10Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "arena-battles",
    title: "Battling & Trading",
    desc: "PvP arena combat, your own gym, and an on-chain market where every core resource and creature is tradable.",
    detail: "You face other trainers in <strong>PvP arena combat</strong> and build your own gym. Because rarity and stat rolls both feed into power, the team you build on the farm is the team you fight with \u2014 the two halves of the game aren't separable here either.<br><br><strong>Every core resource and creature is tradable on-chain</strong>, with a Trade button in the main menu, so there are two valid routes to an empire: grind it yourself, or trade your way there. <strong>Quests</strong> appear in a feed with names like \u201cCapture the Spikemon\u201d and a counter for how many are waiting, and <strong>timed events</strong> run on a countdown with a milestone bar filling toward marked rewards.<br><br>Timing matters here: the team confirmed on 6 August that <strong>PvP is not in early access</strong>. Early access (November or December 2026) ships gathering, monsters, hunting and basic combat, with PvP and advanced breeding arriving after launch in chapter releases.",
    like: "The farm is practice, the arena is the match \u2014 and the market is there if you'd rather buy a good player than raise one.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.6 6.2L21 9l-5 4.4L17.4 20 12 16.6 6.6 20 8 13.4 3 9l6.4-.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    slug: "genesis-legendaries",
    title: "The Genesis Legendaries",
    desc: "Storm, Echo, Bloom and Tide \u2014 the four founding Legendary monsters, earned on leaderboard rank alone.",
    detail: "The founding set of four Legendary monsters, awarded to the top 2,000 trainers on the pre-registration leaderboard and never obtainable any other way. <strong>Storm</strong> is the newest and hardest to earn \u2014 it sits above the rest, and only a top-50 finish is airdropped one. <strong>Echo</strong> goes to ranks 51\u2013250, <strong>Bloom</strong> to 251\u2013500 and <strong>Tide</strong> to 501\u20132,000, while the top 10 receive Storm plus a second Legendary alongside it. Echo, Bloom and Tide were previously called Legendary Eggs A, B and C; they differ in species and role rather than raw strength, and their utilities are due to be published in September.<br><br>The team's working definitions, given on the second dev stream: <strong>Legendary</strong> means pre-minted, fixed, scarce supply, and Legendaries carry traits no other monster can have. <strong>Rare</strong> means time-limited availability with supply set by how much players hunt.",
    like: "The founding members' badge. You can't buy one later \u2014 you had to be there.",
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  }
];
