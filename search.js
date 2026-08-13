// Site-wide search for YakkamonWorld.
// This is a plain static site (no backend), so search runs entirely in
// the browser against a small hand-maintained index below. When you add
// a new page, news post, or gameplay system, add a matching entry here
// so it shows up in search results too.

const SEARCH_INDEX = [
  { tag: "Home", title: "YakkamonWorld", excerpt: "The unofficial Yakkamon player portal — news, gameplay, and pre-registration all in one place.", url: "index.html" },

  { tag: "Pre-registration", title: "Pre-registration", excerpt: "Points, tiers, free mint, and Genesis monsters — explained simply.", url: "pre-registration.html" },
  { tag: "Pre-registration", title: "Getting started", excerpt: "What pre-registration is, how points work, and how to earn them.", url: "pre-registration.html#getting-started" },
  { tag: "Pre-registration", title: "Reward track", excerpt: "Rewards rotate on a 7-day cycle \u2014 a new claimable list every week, and each one replaces the last.", url: "pre-registration.html#reward-track" },
  { tag: "Pre-registration", title: "Monster Egg tiers explained", excerpt: "Platinum, Gold, Silver, Bronze and Basic \u2014 handed out in sign-up order, up to 500,000 trainers.", url: "pre-registration.html#egg-tiers" },
  { tag: "Pre-registration", title: "Referral rules", excerpt: "First five referrals are instant; after that the friend must verify Discord, verify X and reach 100 points.", url: "pre-registration.html#referrals" },
  { tag: "Pre-registration", title: "Genesis monsters", excerpt: "The one-time Genesis airdrop \u2014 5,000 reward eggs by points rank, with Legendary eggs going to the top 500.", url: "pre-registration.html#genesis-monsters" },
  { tag: "Pre-registration", title: "Free mint — October 1st", excerpt: "How the free Genesis Monster mint works on Ronin, and who's eligible.", url: "pre-registration.html#free-mint" },
  { tag: "Pre-registration", title: "FLOWER deposits", excerpt: "Depositing $FLOWER early banks your balance for launch and earns pre-reg points.", url: "pre-registration.html#flower-deposits" },

  { tag: "News", title: "The Free-to-Play Guide to Early Access", excerpt: "The daily routine, the one date that matters, and why referrals are 60% of a realistic free total.", url: "article-free-to-play-guide.html" },
  { tag: "News", title: "How to reach early access without depositing", excerpt: "Get verified, clear the one-time quests, nurture daily after 12:00 UTC, mint on Oct 1, and refer real people.", url: "article-free-to-play-guide.html" },
  { tag: "News", title: "Free-to-play points budget", excerpt: "Roughly 990 points by Oct 1 with no referrals, about 2,490 with fifty.", url: "article-free-to-play-guide.html" },
  { tag: "FAQ", title: "What is OG Status?", excerpt: "A cosmetic badge for reaching 50,000 points in a single week before early access. No points, no power \u2014 just proof you were early.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "What does OG mean?", excerpt: "Slang for \u201cOriginal Gangster\u201d \u2014 in everyday use it simply means the original, someone who was there first. A compliment, not a crime reference.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "How do I claim OG Status?", excerpt: "Hit 50,000 points in one week, any week before early access starts. It resets weekly, so a missed week isn\u2019t final.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "Are deposit points one-time, or ongoing?", excerpt: "One-time, per deposit \u2014 scored once in the week it confirms. The week and the transfer size are locked in at that moment.", url: "faq.html#flower" },
  { tag: "FAQ", title: "When can I withdraw my deposited $FLOWER?", excerpt: "Once you gain access to the game \u2014 early access is Q4 2026, staged by wave, with percentage limits for the first few weeks.", url: "faq.html#flower" },
  { tag: "FAQ", title: "Where do I get $FLOWER?", excerpt: "Earn it free by playing Sunflower Land, or buy it on Base. Work from the official Yakkamon deposits guideline and your own dashboard.", url: "faq.html#flower" },
  { tag: "News", title: "Can I earn $FLOWER instead of buying it?", excerpt: "Yes \u2014 $FLOWER is Sunflower Land\u2019s in-game token, earned through crops, deliveries and seasonal chapters.", url: "article-flower-deposit-guideline.html" },
  { tag: "News", title: "We Graded Every Decision From Yakkamon\u2019s First Dev Stream (6 August)", excerpt: "Nine decisions graded A to C \u2014 three A\u2019s, one C, and what we would change about the deposit economy.", url: "article-dev-stream-graded.html" },
  { tag: "News", title: "Can whales split deposits across wallets?", excerpt: "Splitting 50,000 across ten wallets costs 10.5% of your points and multiplies reward slots by ten. Three possible fixes.", url: "article-dev-stream-graded.html" },
  { tag: "News", title: "Is the top of the leaderboard bought?", excerpt: "A week-one 50,000 deposit is 190,000 points against roughly 900 for perfect free play. The cutoff is still reachable free.", url: "article-dev-stream-graded.html" },
  { tag: "News", title: "Does the new ladder fix wallet splitting?", excerpt: "No. The double-egg reward is per account, so a splitter collects it on every wallet. The 10x advantage is unchanged.", url: "article-reward-ladder-analysis.html" },
  { tag: "FAQ", title: "What does \u201cthe leaderboard locks\u201d mean?", excerpt: "The moment your rank stops moving and the airdrop settles. You must hold your rank until then \u2014 and it only happens once.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "I signed up late \u2014 am I locked out?", excerpt: "No. The leaderboard is points-based, so a trainer who starts today and plays daily can pass a day-one signup who stopped.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "Can I buy a Monster NFT instead of earning one?", excerpt: "No. There is no sale and no buying in \u2014 every position is settled by leaderboard rank.", url: "faq.html#ranks-tiers" },
  { tag: "News", title: "How many Monster NFTs are in the airdrop?", excerpt: "5,010 across 5,000 trainers \u2014 Storm 50, Echo 203, Bloom 257, Tide 1,500, plus 3,000 Rare Eggs.", url: "article-genesis-legendaries.html" },
  { tag: "News", title: "What Actually Changed in the Airdrop \u2014 A Full Breakdown", excerpt: "Legendary supply doubled, Storm was added above the old top tier, and the leaderboard now locks. Every band and the odds.", url: "article-airdrop-breakdown.html" },
  { tag: "News", title: "What are my odds of a Genesis Legendary?", excerpt: "About 2.91% of registered trainers \u2014 up from 1.46% before the change. Storm alone is 0.07%.", url: "article-airdrop-breakdown.html" },
  { tag: "News", title: "Where does climbing the leaderboard actually pay?", excerpt: "Only at the band edges \u2014 ranks 10, 50, 250, 500, 2,000, 5,000 and 100,000. Points spent mid-band buy nothing.", url: "article-airdrop-breakdown.html" },
  { tag: "News", title: "Meet Storm, Echo, Bloom and Tide", excerpt: "The four Genesis Legendaries have names, and Legendary monsters now run to rank 2,000 instead of 1,000.", url: "article-genesis-legendaries.html" },
  { tag: "News", title: "What are the four Genesis Legendaries?", excerpt: "Storm (top 50), Echo (51\u2013250), Bloom (251\u2013500) and Tide (501\u20132,000). Top 10 get Storm plus a second.", url: "article-genesis-legendaries.html" },
  { tag: "News", title: "Is Storm better than the other Legendaries?", excerpt: "Yes \u2014 Storm is new, sits above the rest, and only a top-50 finish is airdropped one.", url: "faq.html#ranks-tiers" },
  { tag: "News", title: "Did anyone lose out in the ladder change?", excerpt: "No band did. 1,200 ranks improved, 3,800 held their slot, none moved down. Legendary supply doubled.", url: "article-reward-ladder-analysis.html" },
  { tag: "News", title: "We got the reward ladder wrong \u2014 the correction", excerpt: "We said supply halved and 500 trainers lost a tier. It doubled and nobody lost. The full correction.", url: "article-reward-ladder-analysis.html" },
  { tag: "Gameplay", title: "The Genesis Legendaries", excerpt: "Storm, Echo, Bloom and Tide \u2014 the four founding Legendary monsters, earned on leaderboard rank alone.", url: "gameplay.html?system=genesis-legendaries" },
  { tag: "News", title: "The Airdrop Ladder Just Changed", excerpt: "Top 10 now receive two monsters, Storm was added above the old top tier, and Legendary monsters run to rank 2,000.", url: "article-reward-egg-ladder-update.html" },
  { tag: "News", title: "The Official $FLOWER Deposit Guideline, Explained", excerpt: "What a deposit actually does, the week-by-week rate schedule, and the withdrawal limits that apply after launch.", url: "article-flower-deposit-guideline.html" },
  { tag: "News", title: "Are there withdrawal limits on deposited $FLOWER?", excerpt: "Percentage-based limits may apply for the first few weeks after launch \u2014 they cap how much, not whether, and lift as things settle.", url: "article-flower-deposit-guideline.html" },
  { tag: "News", title: "Can I withdraw deposited $FLOWER tax-free?", excerpt: "Yes \u2014 the official guideline states no lock-up, no penalty and no withdrawal tax.", url: "article-flower-deposit-guideline.html" },
  { tag: "News", title: "Which deposit week am I in?", excerpt: "The multiplier steps down weekly from 3x to a 1x floor. The guideline shows the current rate live.", url: "article-flower-deposit-guideline.html" },
  { tag: "News", title: "First Yakkamon Dev Stream (6 August): Everything They Announced", excerpt: "Deposit system rebuilt with a decaying weekly multiplier, a new official X account, and PvP confirmed post-launch.", url: "article-dev-stream-aug-7-recap.html" },
  { tag: "News", title: "How does the $FLOWER deposit multiplier work?", excerpt: "3x through the opening week, then 0.2x less every week until it rests at 1x. Depositing later is worth substantially less.", url: "article-dev-stream-aug-7-recap.html" },
  { tag: "News", title: "10 bonus points for reconnecting X", excerpt: "Reconnect to the new @yakkamon_game account \u2014 previous connectors get 20 points total instead of 10.", url: "article-dev-stream-aug-7-recap.html" },
  { tag: "News", title: "Is PvP in early access?", excerpt: "No \u2014 the team confirmed PvP and advanced breeding are post-launch. Early access ships gathering, monsters, hunting and basic combat.", url: "article-dev-stream-aug-7-recap.html" },
  { tag: "News", title: "Referral Rule Change: Three Steps Before a Referral Counts", excerpt: "From your sixth referral on, the friend must verify Discord, verify X and reach 100 points. 4,783 farming accounts were banned.", url: "article-referral-rule-change-100-points.html" },
  { tag: "News", title: "Why did my referral not count?", excerpt: "Past your first five, the friend must verify Discord, verify X and reach 100 points before the referral pays.", url: "article-referral-rule-change-100-points.html" },
  { tag: "News", title: "How long until a referred friend counts?", excerpt: "About a week with the one-time quests plus daily nurture, or about 13 days on nurture alone.", url: "article-referral-rule-change-100-points.html" },
  { tag: "News", title: "Tip: Nurture After 12:00 UTC, Every Day", excerpt: "The 36-hour streak grace period only covers a missed day if you nurture in the second half of the UTC day.", url: "article-tip-nurture-after-noon-utc.html" },
  { tag: "News", title: "Tip: Deposit Your $FLOWER Early, In One Transfer", excerpt: "The weekly multiplier decays from 3x and the size bonus is per deposit, so splitting now costs you points.", url: "article-tip-split-flower-deposits.html" },
  { tag: "News", title: "$FLOWER Deposits Open Sunday, August 9 at 8:00 PM ET", excerpt: "Deposit address issued, the weekly multiplier and size bonus explained, and why the docs say 10 August.", url: "article-flower-deposits-open-august-9.html" },
  { tag: "News", title: "When do $FLOWER deposits open?", excerpt: "Aug 9 at 8:00 PM ET \u2014 midnight UTC, which the official docs render as 10 August.", url: "article-flower-deposits-open-august-9.html" },
  { tag: "News", title: "New on the Portal: Trainer Tips", excerpt: "A new section for leaderboard tactics, with the maths shown rather than asserted.", url: "article-tips-section-live.html" },
  { tag: "News", title: "Trainer Tips section announcement", excerpt: "Why the portal now separates what the rules are from what to do with them.", url: "article-tips-section-live.html" },
  { tag: "News", title: "YakkamonWorld Is Now on YouTube", excerpt: "Our brand-new YouTube channel is live \u2014 short explainer videos on pre-registration, the free mint, and every gameplay system.", url: "article-youtube-channel-live.html" },
  { tag: "News", title: "YakkamonWorld YouTube channel", excerpt: "2\u20133 minute explainers covering pre-registration points, Monster Egg tiers, the Oct 1 free mint, the Genesis airdrop and the six gameplay systems.", url: "article-youtube-channel-live.html" },
  { tag: "News", title: "Yakkamon Referral Code: Pre-Registration Opens to Everyone Aug 4", excerpt: "Referral codes open Aug 4 at 8:00 PM ET \u2014 no Sunflower Land account, no Bumpkin Level, no wallet needed.", url: "article-yakkamon-referral-code.html" },
  { tag: "News", title: "How to get a Yakkamon access code", excerpt: "Access codes came from the Sunflower Land Plaza by Bumpkin Level; from Aug 4 a referral code from any registered trainer works for anyone.", url: "article-yakkamon-referral-code.html" },
  { tag: "News", title: "Where do I enter my Yakkamon trainer code?", excerpt: "On the Enter Trainer Code screen at yakkamon.com \u2014 the same field for access codes and referral codes alike.", url: "article-yakkamon-referral-code.html" },
  { tag: "News", title: "Early Access Leaderboard Guideline: How to Climb", excerpt: "Every points value: nurture 6\u201310/day, referrals 30, free mint 250, $FLOWER deposits up to 70,000 \u2014 and what each rank takes.", url: "article-leaderboard-guideline.html" },
  { tag: "News", title: "How do streaks work?", excerpt: "Tap 3 times daily. 6 points rising to 10 at a 30-day streak, 36-hour grace period, day rolls at midnight UTC.", url: "article-leaderboard-guideline.html" },
  { tag: "News", title: "How many points is a referral worth?", excerpt: "30 points per verified friend. First five instant; after that Discord + X verified and 100 points.", url: "article-leaderboard-guideline.html" },
  { tag: "News", title: "News archive", excerpt: "Every patch note, event, and community update in one place.", url: "news.html" },
  { tag: "News", title: "New: FAQ Page Answers Your Trickiest Pre-Reg Questions", excerpt: "Wallets, gas, Ronin, and Free Mint vs Genesis Airdrop, all explained in plain language.", url: "article-faq-page-live.html" },
  { tag: "News", title: "Sunflower Land Players (20+ Bumpkin Level): The Final Wave Opens Tonight", excerpt: "Bumpkin Level 20+? The last Sunflower Land access wave unlocks tonight at 8:00 PM ET \u2014 and referral codes open Aug 4 for everyone else.", url: "article-access-code-20-plus.html" },
  { tag: "News", title: "Sunflower Land Players (50+ Bumpkin Level): Get Your Access Code Tonight", excerpt: "Bumpkin Level 50+? Your access code unlocks tonight at 8:00 PM ET \u2014 find Yakkamon in the Plaza, then sign up at yakkamon.com.", url: "article-access-code-50-plus.html" },
  { tag: "News", title: "Sunflower Land Players (100+ Bumpkin Level): Get Your Access Code Today", excerpt: "Bumpkin Level 100+? Your access code unlocks today \u2014 same steps as yesterday's Lv 150+ drop.", url: "article-access-code-100-plus.html" },
  { tag: "News", title: "Sunflower Land Players (150+ Bumpkin Level): Get Your Access Code Today", excerpt: "Bumpkin Level 150+? Get your code from the Yakkamon sign next to Stella in the Plaza, then sign up at yakkamon.com.", url: "article-access-code-today.html" },
  { tag: "News", title: "Free Mint Goes Live October 1st", excerpt: "Pre-registered trainers can claim a Genesis Monster NFT for free on Ronin.", url: "article-free-mint-october-1.html" },
  { tag: "News", title: "The Genesis Airdrop: 5,000 Monsters, One Chance", excerpt: "The top 5,000 trainers on the leaderboard get a free Genesis Monster at launch.", url: "article-genesis-airdrop-5000.html" },
  { tag: "News", title: "FLOWER Deposits: Deposit Early, Climb the Board", excerpt: "Depositing $FLOWER now saves your balance for launch and earns points today.", url: "article-flower-deposits-explained.html" },
  { tag: "News", title: "Reward Track: What You Unlock as You Climb", excerpt: "How the weekly reward cycle works (updated \u2014 the old points-milestone track no longer applies).", url: "article-reward-track-explained.html" },

  { tag: "Gameplay", title: "Gameplay systems", excerpt: "The seven core systems that make up Yakkamon.", url: "gameplay.html" },
  { tag: "Gameplay", title: "How Yakkamon works \u2014 poster", excerpt: "One-page field guide: the idle half where monsters farm around the clock, the active half of hunting, crafting and arena battles, plus the six-step core loop.", url: "gameplay.html" },
  { tag: "Gameplay", title: "The core loop", excerpt: "Catch a monster, put it to work, gather resources, craft better gear, hunt rarer prey, battle in the arena \u2014 then back to step one with a stronger roster.", url: "gameplay.html" },
  { tag: "Gameplay", title: "Creature Collecting", excerpt: "Hunt and catch monsters, then put them to work gathering resources and farming.", url: "gameplay.html?system=creature-collecting" },
  { tag: "Gameplay", title: "Regional Exploration", excerpt: "Deserts, volcanoes, and oceans, each shifting through day and night and the seasons.", url: "gameplay.html?system=regional-exploration" },
  { tag: "Gameplay", title: "Crafting & Hunting", excerpt: "Refine gathered resources into gear to track down rarer, tougher monsters.", url: "gameplay.html?system=crafting-hunting" },
  { tag: "Gameplay", title: "Day & Night Cycle", excerpt: "A living world that shifts between day and night, changing what you'll find in the wild.", url: "gameplay.html?system=day-night-cycle" },
  { tag: "Gameplay", title: "Seasonal System", excerpt: "Every three months, brand-new monsters are released into the wild.", url: "gameplay.html?system=seasonal-system" },
  { tag: "Gameplay", title: "Arena Battles", excerpt: "PvP arena combat \u2014 confirmed as post-launch, not part of early access.", url: "gameplay.html?system=arena-battles" },

  { tag: "Videos", title: "Video: The Reward Ladder Changed", excerpt: "A 14-minute analysis of the 12 August change. Note: its supply conclusion was later corrected \u2014 see the written correction.", url: "videos.html" },
  { tag: "Videos", title: "All YakkamonWorld videos", excerpt: "Every episode in one place \u2014 short explainers on pre-registration, points, deposits and gameplay, each linked to the written version.", url: "videos.html" },
  { tag: "Videos", title: "Watch instead of reading", excerpt: "Prefer video? Start with episode 1 \u2014 the whole game in two minutes.", url: "videos.html" },
  { tag: "Privacy", title: "Do you use referral links?", excerpt: "Yes, and we say so. Registering through our code gets you a Gold Box and earns us points \u2014 it costs you nothing and you can ignore it.", url: "privacy.html#referral-links" },
  { tag: "Privacy", title: "Privacy \u2014 what we collect", excerpt: "Analytics only with your consent, a contact form that emails us, no ads and nothing sold. Turn analytics off any time.", url: "privacy.html" },
  { tag: "Privacy", title: "Turn analytics off", excerpt: "Change your mind about analytics whenever you like \u2014 the control is on the privacy page.", url: "privacy.html#your-choices" },
  { tag: "Contact", title: "Contact us", excerpt: "Corrections, questions, tip submissions, scam reports and collaboration \u2014 pick a topic and it reaches us directly.", url: "contact.html" },
  { tag: "Contact", title: "Report a mistake on this site", excerpt: "Found something wrong? Tell us \u2014 corrections get priority and we would rather fix it than leave it up.", url: "contact.html" },
  { tag: "Contact", title: "Submit a tip or strategy", excerpt: "Send us a tactic that works. If it holds up it goes on the Tips page with your name on it.", url: "contact.html" },
  { tag: "Contact", title: "Report a scam or fake site", excerpt: "Spotted a fake Yakkamon site or impersonator account? Tell us and we will warn the community.", url: "contact.html" },
  { tag: "Community", title: "Community", excerpt: "Join the YakkamonWorld Telegram channel and chat, subscribe on YouTube, and follow the official Yakkamon channels.", url: "community.html" },
  { tag: "Community", title: "Telegram channel — YakkamonWorld", excerpt: "Pre-registration tiers as they unlock, new guides, and news. The main place to follow the portal.", url: "community.html" },
  { tag: "Community", title: "Telegram chat — YakkamonWorld Chat", excerpt: "Ask anything about wallets, gas, free mint, or access dates. Other players and our bot answer.", url: "community.html" },
  { tag: "Community", title: "Access bot — check your access date", excerpt: "Send our Telegram bot your Bumpkin Level and it tells you when your access code unlocks.", url: "community.html" },
  { tag: "Community", title: "YouTube \u2014 YakkamonWorld", excerpt: "Subscribe to the portal's YouTube channel for short explainer videos on pre-registration, access codes, the free mint and gameplay.", url: "community.html" },
  { tag: "Community", title: "Follow @Yakkamon_World on X", excerpt: "This portal's own account — site updates, announcements and behind-the-scenes posts.", url: "community.html" },
  { tag: "Community", title: "YakkamonWorld Discord", excerpt: "The portal's own community server — not the official Yakkamon Discord. Not open yet.", url: "community.html" },

  { tag: "Stats", title: "Trainer stats", excerpt: "Look up your roster, match history, and stats. Goes live once connected to real game data.", url: "stats.html" },

  { tag: "Tips", title: "Nurture after 12:00 UTC every day", excerpt: "The 36-hour streak grace period only covers a whole missed day if you nurtured in the second half of the UTC day.", url: "tips.html#streak-timing" },
  { tag: "Tips", title: "How much is a nurture streak worth?", excerpt: "6 points a day rising to 10 at day 30+ \u2014 about 526 points over 57 unbroken days.", url: "tips.html#streak-timing" },
  { tag: "Tips", title: "What does breaking a nurture streak cost?", excerpt: "You restart at 6 points a day and need 29 days to climb back \u2014 roughly 44 points on top of the day you missed.", url: "tips.html#streak-timing" },
  { tag: "Tips", title: "Trainer Tips", excerpt: "Practical leaderboard tactics worked through with real numbers.", url: "tips.html" },
  { tag: "Tips", title: "$FLOWER deposit multiplier schedule", excerpt: "Week 1 is 3.0x, week 2 is 2.8x, dropping 0.2x weekly until it rests at 1.0x from week 11.", url: "tips.html#weekly-flower" },
  { tag: "Tips", title: "$FLOWER size bonus rates", excerpt: "+10% at 50, +20% at 500, +40% at 5,000, +80% at 50,000 \u2014 rated per deposit, so the full amount must land in one transfer.", url: "tips.html#weekly-flower" },
  { tag: "Tips", title: "Deposit your $FLOWER early, in one transfer", excerpt: "Week-by-week multiplier schedule from 3x down to 1x, the per-deposit size bonus, and what waiting or splitting actually costs.", url: "tips.html#weekly-flower" },
  { tag: "Tips", title: "Weekly vs final leaderboard ranking", excerpt: "Final ranking is all-time points and pays once; the weekly board resets and pays boxes, tickets and loot every week.", url: "tips.html#weekly-flower" },
  { tag: "Tips", title: "Should I deposit $FLOWER in bulk?", excerpt: "Yes. The size bonus is rated per deposit and doubles at every step to +80%, so one large transfer beats several small ones.", url: "tips.html#weekly-flower" },

  { tag: "FAQ", title: "FAQ", excerpt: "Answers to the most confusing parts of pre-registration, in plain language.", url: "faq.html" },
  { tag: "FAQ", title: "How to pre-register (Sunflower Land players)", excerpt: "Access dates by Bumpkin Level, plus step-by-step: find Yakkamon in the Plaza, then sign up at yakkamon.com.", url: "faq.html#sunflowerland-guide" },
  { tag: "FAQ", title: "Where can I ask a question?", excerpt: "Our unofficial Telegram channel and chat group — plus an access bot that answers Bumpkin Level lookups.", url: "faq.html#general" },
  { tag: "FAQ", title: "What is Yakkamon?", excerpt: "A creature collector crossed with idle farming \u2014 catch monsters, then put them to work producing while you're away.", url: "faq.html#general" },
  { tag: "FAQ", title: "Who makes Yakkamon?", excerpt: "Thought Farm, the team behind Sunflower Land \u2014 1M+ players, 100+ open-source contributors, five years building in the open.", url: "faq.html#general" },
  { tag: "FAQ", title: "Is Yakkamon free to pre-register?", excerpt: "Yes \u2014 free, email only. No wallet needed and no Sunflower Land account required.", url: "faq.html#general" },
  { tag: "FAQ", title: "What is the official Yakkamon website?", excerpt: "yakkamon.com is the only official site. Yakkamon will never ask for a seed phrase or private key \u2014 only an email address.", url: "faq.html#general" },
  { tag: "FAQ", title: "Do I need to be a Sunflower Land player?", excerpt: "No \u2014 anyone can pre-register with just an email. Your Bumpkin Level only decides when your access code unlocks.", url: "faq.html#general" },
  { tag: "FAQ", title: "Which network does Yakkamon run on?", excerpt: "Ronin \u2014 a blockchain built for games with much lower fees than Ethereum. It's where the free mint happens.", url: "faq.html#general" },
  { tag: "FAQ", title: "Battle monster or farm utility monster?", excerpt: "Legendary Eggs hatch different species with different roles \u2014 some built for battle, some for farm utility.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "Are the sign-up egg tiers cosmetic?", excerpt: "Mainly, yes. Platinum through Basic are cosmetic and early-collectible; every monster still works as a worker.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "What is the egg counter?", excerpt: "It tracks Monster Egg tiers only \u2014 not early access, not Genesis NFTs. When a tier fills you've only missed that egg type.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "Do I need to mint to get my Monster Egg?", excerpt: "No \u2014 completely unrelated. Your egg comes from signing up and appears on your farm. The mint is separate and optional.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "Does Yakkamon mean Sunflower Land gets less attention?", excerpt: "The team says no \u2014 two-year roadmap, contributors up, no new token, shared foundations and a growing team.", url: "faq.html#launch" },
  { tag: "FAQ", title: "Terminology decoder", excerpt: "The official docs use several names for the same things \u2014 Monster Egg, Genesis airdrop, Trainer Point airdrop, free mint, trainer number, wave, gas, Ronin, all decoded.", url: "faq.html#decoder" },
  { tag: "FAQ", title: "Genesis airdrop vs Trainer Point airdrop", excerpt: "Same thing. Also called the NFT Airdrop and the Genesis Drop \u2014 all four names mean the 5,000 NFTs given to the top 5,000 on points.", url: "faq.html#decoder" },
  { tag: "FAQ", title: "What is gas? What is Ronin?", excerpt: "Gas is the small network fee for an on-chain action. Ronin is the games-focused blockchain Yakkamon runs on.", url: "faq.html#decoder" },
  { tag: "FAQ", title: "What is a wave?", excerpt: "The batch you're let into the game with. Wave 1 enters first, Wave 4 last, and rank 100,001+ gets no wave at all.", url: "faq.html#decoder" },
  { tag: "FAQ", title: "The three rewards compared", excerpt: "Monster Egg vs Free Mint vs Genesis Airdrop \u2014 how you get each one, whether it's an NFT, whether you need a wallet, and when it arrives.", url: "faq.html#mint-vs-airdrop" },
  { tag: "FAQ", title: "Monster Egg tiers", excerpt: "Sign-up position decides your egg: Platinum, Gold, Silver, Bronze or Basic, up to 500,000 sign-ups. It sets nothing else.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "Is my Monster Egg an NFT?", excerpt: "No \u2014 it's an in-game item. Nothing to mint, no wallet needed. It appears on your farm the first time you log in.", url: "faq.html#egg-tiers" },
  { tag: "Pre-registration", title: "Pre-registration is open to everyone", excerpt: "Anyone can sign up with a referral code from a trainer who has already joined \u2014 no Sunflower Land account, no Bumpkin level, no wallet.", url: "pre-registration.html#referrals" },
  { tag: "FAQ", title: "Referral rules \u2014 what counts", excerpt: "Past the first five, referrals need Discord verified, X verified and 100 points. Removed referrals are deducted.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "I signed up late \u2014 am I out of the running?", excerpt: "No. A Basic egg holder who earns points daily finishes above a Platinum holder who never comes back.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "Is there a cutoff for early access?", excerpt: "Yes \u2014 only the top 100,000 trainers on points get in. Below rank 100,000 you wait for full launch.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "What is a Genesis Monster?", excerpt: "One of 5,000 founding creatures given free at early access \u2014 no sale, no second window, never minted again.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "Who gets the NFT airdrop?", excerpt: "Ranks 1\u20131,000 get a Legendary Monster NFT, 1,001\u20135,000 get a Monster NFT, 5,001+ are not eligible. Awarded on points, never on sign-up date.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "Is the airdrop first come, first served?", excerpt: "No. There is no sale, no second window and no way to buy in later \u2014 the only route is the top 5,000 on points.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "The Genesis Reveal Event", excerpt: "You don't find out which Genesis Monster you got until a live unwrapping at early access launch.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "Are Genesis Monsters specialized?", excerpt: "Yes \u2014 some are built for battle, some for gathering resources, others for different parts of the game.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "What is the free mint?", excerpt: "A free Genesis Monster mint on Ronin on October 1st \u2014 open to every verified pre-registered trainer, won on speed rather than points.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "Do I need to verify before mint day?", excerpt: "Yes \u2014 the mint is whitelist-gated. Only verified pre-registered accounts make the list, one mint per trainer, bots filtered out beforehand.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "Do I mint blind?", excerpt: "Yes \u2014 all 10,000 stay sealed until Early Access launches, when every one is revealed at the same moment.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "5 Legendary monsters in the mint pool", excerpt: "Five of the 10,000 free mints are Legendary \u2014 the same top-of-the-power-curve creatures as the Trainer Point airdrop.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "Do I need a good rank to free mint?", excerpt: "No. The mint is open to every verified pre-registered trainer whatever your rank. It's won on speed, not points \u2014 but you must be verified to make the whitelist.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "Why mint if I'm already pre-registered?", excerpt: "Minting earns pre-registration points, which feed your trainer number, your Genesis airdrop, and your access wave.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "How many free mints are there?", excerpt: "Only 10,000, first in first minted. When the last one goes the mint closes for good \u2014 no restock, no second wave.", url: "faq.html#free-mint" },
  { tag: "FAQ", title: "What is $FLOWER?", excerpt: "Not a new token \u2014 Yakkamon reuses the same $FLOWER already used across the studio's other games.", url: "faq.html#flower" },
  { tag: "FAQ", title: "What does depositing $FLOWER do?", excerpt: "Two things at once: credits your in-game balance and earns leaderboard points. Bigger deposits earn exponentially more.", url: "faq.html#flower" },
  { tag: "FAQ", title: "Can I withdraw my $FLOWER?", excerpt: "Yes \u2014 no lock-up, no penalty, no withdrawal tax. Percentage limits may apply for the first few weeks after launch.", url: "faq.html#flower" },
  { tag: "FAQ", title: "When does Yakkamon launch?", excerpt: "Early access opens in Q4 2026, rolling out in waves. The free mint has a firm date of October 1st.", url: "faq.html#launch" },
  { tag: "FAQ", title: "Do I lose my place if I can't play on day one?", excerpt: "No \u2014 your wave decides when the door opens, not how long it stays open. Your trainer number is permanent.", url: "faq.html#launch" },
  { tag: "FAQ", title: "What happens to Sunflower Land?", excerpt: "It continues on a committed two-year roadmap. Both games share a team, foundations, and the $FLOWER token.", url: "faq.html#launch" },
  { tag: "FAQ", title: "Does signing up early guarantee early access?", excerpt: "No \u2014 signing up early sets your Monster Egg tier and nothing else. Every leaderboard rank is won on points.", url: "faq.html#mint-vs-airdrop" },
  { tag: "FAQ", title: "Do I need a crypto wallet?", excerpt: "Pre-registering only needs an email. A wallet only matters if you want to take part in the Free Mint.", url: "faq.html#general" },
  { tag: "FAQ", title: "Rank vs tier vs wave", excerpt: "Your trainer number is your leaderboard rank, a tier is a points milestone, and a wave is the batch you enter the game with.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "What does my rank get me?", excerpt: "The full ladder from rank 1 to 100,001+ \u2014 Storm, Echo, Bloom, Tide, Rare Egg, the waves, and the cutoff at 100,000.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "How do I earn points?", excerpt: "Daily egg nurture and streaks, Discord and X quests, referrals, the October free mint, and $FLOWER deposits.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "When do I find out my rank?", excerpt: "Trainer numbers and tiers are revealed shortly before early access opens in Q4 2026.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "Is the Genesis Monster tradable?", excerpt: "Yes \u2014 fully tradable, arrives with in-game XP, revealed at launch, and never minted again. Supply fixed at 5,000.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "When does the Genesis Drop leaderboard end?", excerpt: "Trainer numbers and tiers are revealed shortly before early access in Q4 2026; no exact cut-off has been published.", url: "faq.html#mint-vs-airdrop" },
  { tag: "FAQ", title: "Is there more than one leaderboard?", excerpt: "Two \u2014 an all-time final ranking that pays once, and a weekly ranking that resets and pays boxes every week.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "What time of day should I nurture?", excerpt: "After 12:00 UTC \u2014 that is the cutoff where the 36-hour grace period actually covers a whole missed day.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "Can I reach a Legendary rank without depositing?", excerpt: "The top 100 is a paid bracket, but referrals are uncapped \u2014 about 165 match a 5,000 $FLOWER deposit.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "When do $FLOWER deposits open?", excerpt: "Sunday 9 August at 8:00 PM ET \u2014 the docs say 10 August because they quote the UTC date.", url: "faq.html#flower" },
  { tag: "FAQ", title: "Should I deposit $FLOWER all at once or spread it out?", excerpt: "All at once and early \u2014 5,000 sent once in the opening week earns 17,000 points; as ten later deposits it earns 6,000.", url: "faq.html#flower" },
  { tag: "FAQ", title: "Is there a video version of the guides?", excerpt: "Short explainers on the YakkamonWorld YouTube channel.", url: "faq.html#general" },
  { tag: "FAQ", title: "When does the game actually launch?", excerpt: "Early access is Q4 2026, rolled out in waves — not a single day for everyone.", url: "faq.html#launch" }
];

(function () {
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return escaped.replace(new RegExp("(" + escapedQuery + ")", "ig"), "<mark>$1</mark>");
  }

  function score(entry, q) {
    const title = entry.title.toLowerCase();
    const excerpt = entry.excerpt.toLowerCase();
    if (title === q) return 100;
    if (title.startsWith(q)) return 80;
    if (title.includes(q)) return 60;
    if (excerpt.includes(q)) return 30;
    return 0;
  }

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    const resultsEl = document.getElementById("search-results");
    const hintEl = document.getElementById("search-hint");
    if (!resultsEl) return;

    if (!q) {
      resultsEl.innerHTML = "";
      if (hintEl) hintEl.textContent = "Search news, gameplay systems, pre-registration info, and more.";
      return;
    }

    const matches = SEARCH_INDEX
      .map((entry) => ({ entry, s: score(entry, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s);

    if (hintEl) hintEl.textContent = matches.length + " result" + (matches.length === 1 ? "" : "s");

    if (matches.length === 0) {
      resultsEl.innerHTML = '<div class="search-empty">No results for "' + escapeHtml(query) + '". Try a different word.</div>';
      return;
    }

    resultsEl.innerHTML = matches
      .map(({ entry }) => `
        <a class="search-result" href="${entry.url}">
          <span class="sr-tag">${escapeHtml(entry.tag)}</span>
          <span class="sr-title">${highlight(entry.title, q)}</span>
          <span class="sr-excerpt">${highlight(entry.excerpt, q)}</span>
        </a>
      `)
      .join("");
  }

  function openSearch() {
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("search-input");
    if (!overlay) return;
    overlay.classList.add("open");
    if (input) {
      input.value = "";
      input.focus();
    }
    runSearch("");
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    const overlay = document.getElementById("search-overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function init() {
    const btn = document.getElementById("search-btn");
    const overlay = document.getElementById("search-overlay");
    const closeBtn = document.getElementById("search-close");
    const input = document.getElementById("search-input");

    if (btn) btn.addEventListener("click", openSearch);
    if (closeBtn) closeBtn.addEventListener("click", closeSearch);
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeSearch();
      });
    }
    if (input) {
      input.addEventListener("input", (e) => runSearch(e.target.value));
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
      // Keyboard shortcut: "/" opens search from anywhere, unless typing in a field
      if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        e.preventDefault();
        openSearch();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
