/*
  YAKKAMON PORTAL — NEWS POSTS
  Edit this file to add/change news. Copy a whole { ... } block, paste it
  above or below (don't forget the comma between posts), edit the text.
  Newest posts go at the TOP.
*/
const YAKKAMON_POSTS = [
  {
    slug: "reward-ladder-analysis",
    category: "community",
    title: "Was The Reward Ladder Nerfed? An Honest Look At The Numbers",
    date: "Aug 12, 2026",
    excerpt: "Legendary supply halved, the same number of eggs went out, and the wallet-splitting incentive is completely untouched. Who gained, who lost, and what the team gets right.",
    body: [
      "We've published the new ladder. This is the analysis: who gained, who lost, whether \u201cnothing has been nerfed\u201d holds up, and one consequence we don't think anyone has spotted.",
      "## The same number of eggs, half the Legendaries",
      "Total eggs barely moved \u2014 5,000 to 5,010. The composition changed enormously. <strong>Legendary supply fell from 1,000 to 510</strong>, and the Rare tier was split into two grades where there used to be one.",
      "If you hold a Legendary, this update was unambiguously good for you: halving the supply of a tradable asset while demand stays flat makes it scarcer. That's worth saying, because most commentary has focused on the people who dropped a band.",
      "## The middle took the hit",
      "Ten ranks improved. Roughly 3,800 moved down a grade. About 1,200 were untouched.",
      "The sharpest change is <strong>ranks 501\u20131,000</strong>, which fell out of the Legendary bracket entirely \u2014 500 trainers who were planning around a Legendary Egg C now have a Rare Egg A.",
      "The awkward part is timing. Deposits opened on 9 August with a multiplier that rewards moving early. This ladder changed on 12 August. Anyone who deposited in the opening week aimed at a target that has since moved.",
      "## Does \u201cnothing has been nerfed\u201d hold up?",
      "The statement is precise and, taken literally, accurate: no monster was made weaker. But it answers a question about <em>power</em>, and most of the concern is about <em>scarcity</em> \u2014 and in a game with tradable assets, scarcity is half of what a reward is worth.",
      "Our position: this is a <strong>rebalance with winners and losers</strong>, not a nerf and not a pure upgrade. Describing it as neither would have cost the team nothing.",
      "## The thing nobody has mentioned",
      "We wrote last week about a wallet-splitting problem: because the size bonus is rated per deposit and rewards are granted per account, a large depositor can split across wallets, lose ~10% of their points and multiply their reward slots.",
      "<strong>The new ladder doesn't fix it. The double-egg reward is per account, so a splitter collects it on every wallet.</strong> One wallet at rank 1 went from 1 egg to 2. Ten wallets across ranks 1\u201310 went from 10 eggs to 20. The advantage of splitting is unchanged at 10\u00d7 \u2014 while the absolute prize doubled.",
      "The available fix is the team's own precedent: require verified Discord, verified X and a minimum of non-deposit points for reward eligibility, exactly as they already do for referrals.",
      "## What we still don't know",
      "One number decides whether this was good or bad for you, and it hasn't been published. If the utility gap between Legendary Egg C and Rare Egg A is small, ranks 501\u20131,000 lost little and the team's framing is right. If it's large, 500 trainers lost a lot on three days' notice. <strong>Utilities are due in September.</strong>",
      "## Our verdict",
      "Top 10: a clear win. Ranks 11\u201350 and 101\u2013250: unchanged and now sitting on a scarcer asset \u2014 quietly the best outcome on the board. Ranks 251\u20131,000: the real losers. Ranks 1,001\u20135,000: broadly neutral. Outside 5,000: unaffected.",
      "The change itself is defensible \u2014 the top 100 being uniformly identical was a genuine design weakness. What we'd push back on is the framing. \u201cNothing has been nerfed\u201d is a claim about power in an update that was mostly about scarcity, and it arrived three days into a deposit window that penalises waiting.",
      "We'll update this when the September utilities land. If they show the gap is small, we'll say so as plainly as we've said this."
    ]
  },
  {
    slug: "reward-egg-ladder-update",
    category: "event",
    title: "The Reward Egg Ladder Just Changed",
    date: "Aug 12, 2026",
    excerpt: "The top 10 now get two eggs, Rare Egg B is new, and the Legendary bands tightened sharply \u2014 rank 600 no longer earns a Legendary at all.",
    body: [
      "Yakkamon has rewritten the reward egg ladder. The bands are tighter, the top 10 now receive <strong>two</strong> eggs, and there's a new <strong>Rare Egg B</strong> tier.",
      "## The new ladder",
      "<strong>1\u20133:</strong> Legendary Egg A + Egg B. <strong>4\u201310:</strong> Legendary Egg A + Egg C. <strong>11\u201350:</strong> Egg A. <strong>51\u2013250:</strong> Egg B. <strong>251\u2013500:</strong> Egg C. <strong>501\u20132,000:</strong> Rare Egg A. <strong>2,001\u20135,000:</strong> Rare Egg B. <strong>5,001+:</strong> no reward egg.",
      "Only the top 10 receive two eggs. Ranks 11 to 5,000 receive one, decided on points alone.",
      "## What the team says",
      "Their stated position is that <strong>nothing has been nerfed</strong>: lower-tier Yakkamon utility is being lifted to match previously expected traits, and more monsters are being released, so every rank still gets the kind of utility it was in line for. Monster utilities are due in <strong>September</strong>.",
      "## What changed, plainly",
      "The bands tightened, particularly in the middle. Rank 100 previously earned Legendary Egg A and now earns Egg B. Rank 300 went from Egg B to Egg C. Rank 600 previously earned Legendary Egg C and now earns Rare Egg A \u2014 out of the Legendary bracket entirely.",
      "Total Legendary supply fell from roughly <strong>1,000</strong> to about <strong>510</strong>. Against that, the top 10 now get two eggs, Rare Egg B extends rewards deeper than before, and per-egg utility is rising rather than falling.",
      "<strong>Our read:</strong> \u201cnot a nerf\u201d is fair on utility and questionable on scarcity. If you were at rank 400 expecting an Egg B you're now looking at Egg C, and at rank 600 you've dropped out of Legendary altogether. Whether lifted utility makes up for that is genuinely unknowable until September.",
      "## What to do",
      "If you were targeting a Legendary, the line moved from rank 1,000 to <strong>rank 500</strong> \u2014 a materially harder target. If you were targeting top 5,000, nothing got worse. If you're outside 5,000, your position is unchanged and early access still runs to rank 100,000.",
      "The early-access wave bands are unchanged \u2014 this update covered reward eggs only."
    ]
  },
  {
    slug: "dev-stream-graded",
    category: "community",
    title: "We Graded Every Decision From Yakkamon\u2019s First Dev Stream",
    date: "Aug 11, 2026",
    excerpt: "Nine decisions, graded A to C. Three A's, one C \u2014 and a wallet-splitting hole in the deposit system that costs 10% of your points and multiplies your reward slots by ten.",
    body: [
      "We've already published the factual recap of Thought Farm's first Yakkamon dev stream. This is the other half: what we think of it. Nine decisions, graded. Some of it is critical \u2014 that's the point.",
      "The team asked people not to screen-record the stream because things will change. We've respected that, and everything below is where the project stood on 7 August rather than a promise.",
      "## What they got right",
      "<strong>Specialization comes from your monsters</strong>, not from separate boost items. Best decision of the stream, and the one that makes everything else cohere \u2014 it means the creatures <em>are</em> the game, so hunting, breeding and trading reinforce each other instead of competing.",
      "<strong>Abandoning the compromised X account fast.</strong> Every hour it stayed compromised it was a weapon pointed at their own community, with their verification badge on it. Wiring the reconnect into the dashboard as a points reward was smart \u2014 it makes the migration actually happen.",
      "<strong>No new token.</strong> In a space where a new project almost always means a new token to sell, reusing $FLOWER is the strongest signal of intent they've given.",
      "<strong>Shipping narrow.</strong> Q4 ships gathering, monsters, hunting and basic combat; PvP and advanced breeding come later in chapters. Right call \u2014 though it sits awkwardly with an airdrop sold on monsters built for combat.",
      "## Where we'd push back",
      "<strong>The doubling size bonus is our only C.</strong> Stacked on the opening week's 3\u00d7, a single 50,000 $FLOWER deposit produces <strong>190,000 points</strong> \u2014 against roughly 900 for two months of perfect free play with no referrals. That's about 190 to 1, which makes the top of the leaderboard purchased rather than contested. We'd taper the bonus rather than double it.",
      "<strong>And it opens a wallet-splitting hole.</strong> Because the size bonus is rated per deposit, splitting 50,000 across ten wallets costs only 10.5% of your points \u2014 and turns one reward slot into ten. Give up one top-100 finish, gain roughly ten top-1,000 finishes, for a tenth of your points.",
      "The cheapest fix is their own precedent: require verified Discord, verified X and a minimum of <em>non-deposit</em> points for airdrop eligibility, exactly as they already do for referrals. Ten split wallets would each need aged accounts and a week of daily play.",
      "<strong>Hiding the leaderboard</strong> solves the right problem bluntly. Show the band rather than the exact rank \u2014 you keep the motivational feedback and remove the sniping target.",
      "<strong>Black-box genetics</strong> is a great instinct in a risky context: hidden stats plus tradable assets makes information itself an asset. Publish the ranges, hide the rolls.",
      "## The thing nobody mentioned",
      "By the team's own description the Yakkamon core is roughly one developer at ninety percent, one at fifty-fifty, and a twelve-week intern. That's a small team for a Q4 early access \u2014 and the deposit launch already moved five days because one developer was ill.",
      "It isn't a criticism of competence. It does mean the window is tight, and that the biggest risk isn't anything they decided. It's bandwidth.",
      "They're being unusually honest about all of it \u2014 the bot numbers, the illness, the things they don't know yet. That doesn't guarantee anything, but it's a better starting position than most projects in this space ever manage."
    ]
  },
  {
    slug: "flower-deposit-guideline",
    category: "guideline",
    title: "The Official $FLOWER Deposit Guideline, Explained",
    date: "Aug 10, 2026",
    excerpt: "Yakkamon has published its deposit guideline. What a deposit actually does, the week-by-week rate schedule, and the withdrawal limit nobody's discussing.",
    body: [
      "Yakkamon has published a dedicated $FLOWER deposits page in the official docs. Here's the whole thing in one place \u2014 the official guideline, plus the live rate schedule from your trainer dashboard, which the docs page doesn't include.",
      "## A deposit does two things, not one",
      "Every deposit <strong>credits your in-game balance</strong> and <strong>earns you leaderboard points</strong>. You are not trading one for the other \u2014 the $FLOWER is held for you and waiting when access opens, and the points are separate.",
      "## What you get back, and when",
      "Once early access opens you can spend the $FLOWER in-game, or <strong>withdraw it with no withdrawal tax</strong>. The docs are explicit: no lock-up, no penalty.",
      "## The safeguard nobody's talking about",
      "Buried in the guideline is the detail most worth knowing: <strong>percentage-based withdrawal limits may apply for the first few weeks after launch</strong>. It caps how much can be withdrawn in a given period, not whether you can withdraw, and the limits lift as the project settles. Reasonable and common \u2014 but it does mean your deposit isn't instantly liquid on day one.",
      "## The rates the docs don't give you",
      "The guideline says bigger deposits earn <strong>exponentially</strong> more, which is accurate but vague. The numbers live in your dashboard's deposit panel, and there are two bonuses stacked together.",
      "<strong>The weekly multiplier decays.</strong> The opening week (10\u201316 Aug) pays <strong>3\u00d7</strong>, falling 0.2\u00d7 every week until it rests at 1\u00d7 from around 19 October.",
      "<strong>The size bonus is per deposit</strong>, doubling at every step: +10% at 50 $FLOWER, +20% at 500, +40% at 5,000, +80% at 50,000. The full amount has to land in one transfer \u2014 25 then another 25 does not reach the 50 tier.",
      "## What that means",
      "Both bonuses push the same way: deposit early, in single larger transfers. The same 5,000 $FLOWER is worth <strong>17,000 points</strong> as one transfer in the opening week, and <strong>6,000</strong> as ten deposits of 500 after the multiplier bottoms out. Same money, a 65% swing.",
      "We can't tell you whether to deposit \u2014 that's your call, and everything in pre-registration works without it. We can tell you what the rules are."
    ]
  },
  {
    slug: "dev-stream-aug-7-recap",
    category: "community",
    title: "First Yakkamon Dev Stream: Everything They Announced",
    date: "Aug 7, 2026",
    excerpt: "The deposit system has been rebuilt, there's a new official X account worth 10 bonus points, and PvP won't be in early access. Full recap.",
    body: [
      "Thought Farm ran their first Yakkamon-only Discord stream on August 7th. A lot changed, and some of it reverses advice that was correct last week \u2014 including ours. Here's everything that matters.",
      "## 1. The $FLOWER deposit system has been rebuilt",
      "There are now <strong>two separate bonuses</strong>, and both reward depositing <em>early</em> and <em>in larger single transfers</em>.",
      "<strong>A weekly multiplier.</strong> <strong>3\u00d7</strong> through the opening week, then falling <strong>0.2\u00d7 every week</strong> until it rests at 1\u00d7. You keep the $FLOWER; the multiplier applies to points only.",
      "<strong>A size bonus, rated per deposit.</strong> It doubles at every step \u2014 +10% at 50 $FLOWER, +20% at 500, +40% at 5,000, +80% at 50,000 \u2014 and the full amount must land in one transfer. Depositing 25 and then another 25 does <strong>not</strong> reach the 50 tier.",
      "The stated intent is to stop a last-minute rush before launch. <strong>This reverses our own tip</strong>, which advised splitting deposits weekly on the basis that the bonus followed your cumulative total. Our tip has been rewritten to match.",
      "## 2. The official X account, and 10 free points",
      "The compromise of @playyakkamon is confirmed \u2014 a phishing link was posted from it. Support was slow enough that the team gave up waiting and <strong>created a new account, @yakkamon_game</strong>.",
      "<strong>The game itself was never compromised</strong> \u2014 you don't need to re-register. And there are <strong>10 bonus points</strong> waiting: reconnect to the new X account and anyone who had connected the old one keeps those points and earns more, for 20 total. New connections earn the usual 10.",
      "Three or four fake Yakkamon websites have already been taken down.",
      "## 3. The numbers, and the crackdown",
      "<strong>45,000 pre-registered trainers</strong> at the time of the stream. Around 10,000 came through private codes distributed via Sunflower Land and Ronin, and another 8,000 to 9,000 tried to sign up before referrals opened.",
      "Roughly <strong>4,500 to 5,000 bot accounts have been banned</strong>, and referrals will be <strong>double-verified</strong> before the leaderboard is finalized. <strong>Discord points are switched off</strong> after the emoji system turned into reaction farming; they return later as a manual weekly reward. And <strong>the leaderboard will be hidden</strong> as launch approaches, so start climbing while you can still see where you stand.",
      "## 4. What early access will actually include",
      "Early access in Q4 ships the <strong>fundamentals only</strong>: gathering, monsters, hunting, and basic combat. <strong>PvP is not in early access</strong>, and neither is advanced breeding \u2014 both are post-launch, arriving in chapters.",
      "The <strong>day/night cycle runs on a sped-up in-game clock</strong>, deliberately not tied to real-world time. And the <strong>season system may be weekly rather than quarterly</strong>, following the Sunflower Land model.",
      "## 5. What the game is turning into",
      "<strong>Idle farming, plus automation, plus creature collecting.</strong> Named influences were Pok\u00e9mon, Palworld and Zachtronics \u2014 that last one telling you a lot about the depth they're aiming for.",
      "<strong>Hunting is the third pillar</strong>: placing snacks, sending monsters to search, and combining the day/night and seasonal systems to find specific creatures. <strong>Monsters have hidden genetics</strong>, and how you train one shapes what it becomes. Breeding and bloodlines are planned as a full playstyle. There is <strong>no forging</strong> \u2014 no combining ten commons into one rare. <strong>Mobile is confirmed</strong> as a PWA rather than an app store download.",
      "## 6. Take all of it with a grain of salt",
      "The team said this repeatedly. They're running hundreds of experiments and anything discussed can change before launch. Nothing above is a promise \u2014 it's where the project stands on August 7th."
    ]
  },
  {
    slug: "referral-rule-change-100-points",
    category: "community",
    title: "Referral Rule Change: Friends Now Need 100 Points to Count",
    date: "Aug 5, 2026",
    excerpt: "After 4,783 farming accounts were banned, referrals 6+ need the friend to verify Discord, verify Twitter/X and reach 100 points. First five stay instant.",
    body: [
      "The Yakkamon team has raised the bar for what counts as a valid referral. <strong>Your first five referrals still pay instantly</strong> \u2014 from the sixth onward, your friend must verify their Discord, verify their Twitter/X, and reach 100 points before you receive anything.",
      "## Why it changed",
      "Referral codes spread fast enough overnight to cause scaling problems, and in reviewing the surge the team found <strong>4,783 accounts</strong> that had signed up using temporary-domain email addresses as part of a referral farming operation. Those accounts have been banned. The 100-point requirement is the fix that keeps the reward pointed at people who actually bring in real players.",
      "The team also flagged that email codes and X connections were failing under load, with a fix rolling out.",
      "## What it means in practice",
      "Referrals still pay 30 points each, and they're still uncapped \u2014 but the work no longer ends when someone signs up. Your friend has to actually start playing:",
      "If they clear the one-time quests first (link a wallet, connect X, join Discord, five Discord posts \u2014 55 points) and then nurture daily, they'll cross 100 points in about <strong>a week</strong>. Nurturing alone, with no quests, takes about <strong>13 days</strong>. Depositing even the 5 $FLOWER minimum gets them there faster.",
      "## What to do differently",
      "Stop treating a sign-up as the finish line. The highest-value thing you can do now is help the people you refer get started \u2014 send them the one-time quest list, tell them to nurture daily, and check in during their first week. Fifty sign-ups who never open the game are now worth nothing; twenty who play for a week are worth 600 points.",
      "It also makes bulk code-spamming pointless, which is the intention. Real friends, actually onboarded, is the only approach that pays."
    ]
  },
  {
    slug: "free-to-play-guide",
    category: "guideline",
    title: "The Free-to-Play Guide to Early Access",
    date: "Aug 5, 2026",
    excerpt: "Reaching early access without depositing: the two-minute daily routine, the one date that matters, and why referrals are 60% of a realistic free total.",
    body: [
      "You can reach early access without spending anything. You can't reach the top of the leaderboard without spending \u2014 a 50,000 $FLOWER deposit is worth 70,000 points, more than a hundred days of perfect free play. This guide is about playing the game that's actually winnable.",
      "## Aim at top 5,000",
      "Top 5,000 is where a Monster NFT starts and top 100,000 is where early access starts. The genuinely paid bracket is the <strong>top 100</strong>, not the top 1,000 \u2014 referrals are uncapped, so a Legendary band is reachable free if you can drive enough of them. Everything between the thresholds is a question of which wave you get in, not whether you get in.",
      "## Do today",
      "<strong>Get verified</strong> \u2014 the October 1st free mint runs on a verified whitelist, and signing up isn't the same thing. Then clear the one-time quests: link a wallet, connect X, join Discord and post five times. That's 55 points for about ten minutes, and it never comes round again. Start your nurture streak the same day.",
      "## Every day, two minutes",
      "Tap your egg three times, <strong>after 12:00 UTC</strong> so the 36-hour grace period actually covers a missed day. That's roughly 526 points between now and the free mint. Breaking the streak costs about 44 points climbing back.",
      "## The one date that matters",
      "<strong>October 1st.</strong> 250 points for one click \u2014 the same as eight referrals, and the best value on the entire board. You pay only the Ronin network fee.",
      "## Referrals are the whole free game",
      "Every other free action is capped by the calendar. Referrals aren't capped at all, and at 30 points each they make up about <strong>60%</strong> of a realistic free total. Your first five are instant; after that your friend must verify Discord, verify Twitter/X and reach 100 points, so the work is in onboarding, not broadcasting. Real people only \u2014 fake sign-ups are deducted and can pull your rank down.",
      "The full guide, with the daily and weekly routines and the points budget, is on the portal."
    ]
  },
  {
    slug: "tip-nurture-after-noon-utc",
    category: "tips",
    title: "Tip: Nurture After 12:00 UTC, Every Day",
    date: "Aug 5, 2026",
    excerpt: "The 36-hour streak grace period only covers a missed day if you nurture in the second half of the UTC day. The cutoff is exactly noon UTC.",
    body: [
      "Everyone knows about the 36-hour grace period on nurture streaks \u2014 the one that means a single missed day shouldn't break your run. It works less often than people assume.",
      "## Two clocks, not one",
      "The game day rolls over at <strong>midnight UTC</strong>, and separately you get <strong>36 hours</strong> from your last nurture before the streak resets. 36 hours is a day and a half, and whether that spare half-day actually covers a missed day depends entirely on what time you tapped.",
      "Nurture at 08:00 UTC and your window closes at 20:00 tomorrow \u2014 still inside tomorrow, so you have to nurture again. Nurture at 20:00 UTC and it closes at 08:00 the day after \u2014 you can miss a whole day and survive.",
      "## The cutoff is noon UTC",
      "Noon plus 36 hours lands exactly at the end of the next day. Before noon, no safety net. After noon, a real one. That's 8:00 AM in New York, 1:00 PM in London, 8:00 PM in Manila and 9:00 PM in Tokyo \u2014 so in the Americas you're mostly covered already, while east of London a morning nurture leaves you no slack at all.",
      "## Why bother",
      "Breaking a streak doesn't cost you one day. You drop from 10 points a day back to 6 and need 29 days to climb back \u2014 roughly <strong>44 points</strong> on top of the day you missed. An unbroken run to the free mint is worth about 526 points.",
      "Full write-up, with the timings and a timezone table, is on the Tips page."
    ]
  },
  {
    slug: "tip-split-flower-deposits",
    category: "tips",
    title: "Tip: Deposit Your $FLOWER Early, In One Transfer",
    date: "Aug 7, 2026",
    excerpt: "Updated after the dev stream \u2014 the weekly multiplier decays from 3x and the size bonus is per deposit, so splitting now costs you.",
    body: [
      "<strong>This tip previously said the opposite.</strong> It advised splitting deposits across weeks, because the bonus appeared to follow your cumulative deposited total. The first dev stream on 7 August described a different structure, and the advice reverses with it.",
      "## Two bonuses, both rewarding early",
      "The <strong>weekly multiplier</strong> pays <strong>3\u00d7</strong> through the opening week, then falls 0.2\u00d7 every week until it settles at 1\u00d7. The same 5,000 $FLOWER is worth 17,000 points in the opening week and 7,000 once it bottoms out. It applies to points, not your balance \u2014 you keep the $FLOWER and can withdraw it once you have game access.",
      "The <strong>size bonus</strong> is rated <strong>per deposit</strong>, doubling at every step: +10% at 50 $FLOWER, +20% at 500, +40% at 5,000, +80% at 50,000. The full amount must land in one transfer \u2014 ten deposits of 500 earn ten 20% bonuses instead of one 40% bonus.",
      "## What to do",
      "Deposit as early in the window as you're comfortable with, and send it in a single transfer so the size bonus lands on the full amount. Holding back to deposit near the end is exactly what this structure penalises \u2014 and the leaderboard gets hidden close to launch anyway.",
      "The full schedule lives in the deposit panel on your own trainer dashboard. Check it there before sending, rather than trusting any published figure, including ours."
    ]
  },
  {
    slug: "flower-deposits-open-august-9",
    category: "event",
    title: "$FLOWER Deposits Open Sunday, August 9 at 8:00 PM ET",
    date: "Aug 5, 2026",
    excerpt: "The biggest points lever in pre-registration goes live. Your deposit address is issued the same moment \u2014 and how you time your deposits matters more than you'd think.",
    body: [
      "$FLOWER deposits open on <strong>Sunday, August 9 at 8:00 PM ET</strong>. That's when your deposit address is issued, and when deposited $FLOWER starts converting into leaderboard points.",
      "## What you can do from that moment",
      "Send any amount of $FLOWER to your deposit address on <strong>Base or Ronin</strong>, minimum 5 $FLOWER. Points are boosted two ways: a <strong>weekly multiplier</strong> of 3\u00d7 through the opening week, falling 0.2\u00d7 weekly to a floor of 1\u00d7, and a <strong>size bonus rated per deposit</strong> doubling from +10% at 50 $FLOWER to +80% at 50,000. Points land in the week the deposit confirms.",
      "It's the single biggest points lever in pre-registration \u2014 a large deposit is worth tens of thousands of points, which no amount of daily nurturing will match. We're not telling you to deposit; we're telling you what the numbers say.",
      "## Why the docs say \"10 August\"",
      "Because they're quoting the <strong>UTC</strong> date. 8:00 PM ET on Sunday Aug 9 is midnight UTC, which is already Monday Aug 10 in London and everywhere east of it. Same instant, two calendar dates \u2014 if you're in the Americas, the evening you want is <strong>Sunday the 9th</strong>.",
      "## Deposit early, and in one transfer",
      "The instinct is to wait \u2014 watch the leaderboard, see where you stand, and deposit near the end to lock in a rank. The deposit system is built specifically to punish that.",
      "5,000 $FLOWER sent as one transfer in the opening week earns <strong>17,000 points</strong>. The same 5,000 sent as ten deposits of 500, once the multiplier has bottomed out, earns <strong>6,000</strong> \u2014 a 65% loss on identical money.",
      "All $FLOWER can be <strong>withdrawn</strong> once you gain access to the game. The full breakdown, with the case study, is on the Tips page."
    ]
  },
  {
    slug: "tips-section-live",
    category: "community",
    title: "New on the Portal: Trainer Tips",
    date: "Aug 5, 2026",
    excerpt: "A new section for leaderboard tactics, worked through with real numbers rather than asserted.",
    body: [
      "There's a new tab on the portal. <strong>Trainer Tips</strong> is where we work through the tactical side of the pre-registration leaderboard \u2014 the decisions that actually change what you walk away with, with the maths shown rather than asserted.",
      "## Why a separate section",
      "The rest of the site explains what the rules <em>are</em>. The FAQ decodes terminology, the pre-registration guide walks through signing up, and the leaderboard guideline lists every points value. None of that tells you what to <em>do</em> with the rules. Tips is for that, and keeping it separate means the reference pages stay neutral.",
      "## The first tip: how to time your $FLOWER deposits",
      "The leaderboard is really two competitions running at once. Your <strong>final ranking</strong> is your all-time points total and pays out once, at early access in Q4 2026. The <strong>weekly ranking</strong> resets every week and pays resource boxes, food boxes, raffle tickets and loot boxes each time.",
      "Deposits carry a <strong>weekly multiplier</strong> \u2014 3\u00d7 in the opening week, falling 0.2\u00d7 weekly to a floor of 1\u00d7 \u2014 plus a <strong>size bonus rated per deposit</strong> that doubles at every step up to +80%. Both reward depositing early, in single larger transfers.",
      "Note: this tip originally said the opposite \u2014 split weekly, because the bonus appeared to follow your cumulative total. The dev stream on 7 August described a different structure, and the tip was rewritten to match.",
      "## More to come",
      "Tips will grow as the leaderboard runs and patterns become clear. The full write-up, including the case study and the numbers at every stack size, is on the Tips page."
    ]
  },
  {
    slug: "youtube-channel-live",
    category: "community",
    title: "YakkamonWorld Is Now on YouTube",
    date: "Aug 4, 2026",
    excerpt: "Our brand-new channel is live \u2014 short, plain-language explainer videos on pre-registration, the free mint, and every gameplay system.",
    body: [
      "The portal has a YouTube channel. It's brand new, and it covers the same ground as this site \u2014 pre-registration, access codes, the free mint, and how the game actually plays \u2014 in short videos you can watch instead of read.",
      "## What's on the channel",
      "Every video is 2\u20133 minutes and sticks to one topic: how pre-registration points work, what the Monster Egg tiers mean, the October 1st free mint, the Genesis airdrop, and each of the six gameplay systems. No filler, no hype \u2014 just the part you came for.",
      "## Why video",
      "Some of this is easier to watch than to read. Wallets, gas, Ronin, and the difference between the Free Mint and the Genesis Airdrop all click faster when someone walks you through them. The written versions stay right here on the portal \u2014 the channel is an extra way in, not a replacement.",
      "## Subscribe",
      "New videos land as the pre-registration waves roll out, so subscribing is the easiest way to catch them. Find us at youtube.com/@YakkamonWorld, or through the Community page along with our Telegram channel, chat, and X account."
    ]
  },
  {
    slug: "yakkamon-referral-code",
    category: "event",
    title: "Yakkamon Referral Code: Pre-Registration Opens to Everyone Aug 4",
    date: "Aug 3, 2026",
    excerpt: "Referral codes open Aug 4 at 8:00 PM ET \u2014 no Sunflower Land account, no Bumpkin Level, no wallet. How to get a Yakkamon access code and where to enter it."
  },
  {
    slug: "leaderboard-guideline",
    category: "guideline",
    title: "Early Access Leaderboard Guideline: How to Climb",
    date: "Aug 3, 2026",
    excerpt: "Every way to earn points ranked by value, what each rank actually takes, and the mistakes that cost people their place."
  },
  {
    slug: "access-code-20-plus",
    category: "event",
    title: "Sunflower Land Players (20+ Bumpkin Level): The Final Wave Opens Tonight",
    date: "Aug 2, 2026",
    excerpt: "Bumpkin Level 20+? The last Sunflower Land access wave unlocks tonight at 8:00 PM ET \u2014 and referral codes open Aug 4 for everyone else."
  },
  {
    slug: "access-code-50-plus",
    category: "event",
    title: "Sunflower Land Players (50+ Bumpkin Level): Get Your Access Code Tonight",
    date: "Aug 1, 2026",
    excerpt: "Bumpkin Level 50+? Your access code unlocks tonight at 8:00 PM ET \u2014 find Yakkamon in the Plaza, then sign up at yakkamon.com."
  },
  {
    slug: "access-code-100-plus",
    category: "event",
    title: "Sunflower Land Players (100+ Bumpkin Level): Get Your Access Code Today",
    date: "Jul 31, 2026",
    excerpt: "Bumpkin Level 100+? Your access code unlocks today \u2014 same steps as yesterday's Lv 150+ drop: find Yakkamon in the Plaza, then sign up at yakkamon.com."
  },
  {
    slug: "faq-page-live",
    category: "event",
    title: "New: FAQ Page Answers Your Trickiest Pre-Reg Questions",
    date: "Jul 30, 2026",
    excerpt: "Wallets, gas, Ronin, and the difference between the Free Mint and the Genesis Airdrop — all explained in plain language."
  },
  {
    slug: "access-code-today",
    category: "event",
    title: "Sunflower Land Players (150+ Bumpkin Level): Get Your Access Code Today",
    date: "Jul 30, 2026",
    excerpt: "Bumpkin Level 150+? Click the Yakkamon sign next to Stella in the Plaza to claim your access code, then sign up at yakkamon.com."
  },
  {
    slug: "free-mint-october-1",
    category: "event",
    title: "Free Mint Goes Live October 1st",
    date: "Jul 29, 2026",
    excerpt: "Pre-registered trainers can claim a Genesis Monster NFT for free on Ronin — no purchase, just a small network fee.",
    body: [
      "On October 1st, the Genesis Monster NFT free mint goes live on Ronin. The mint is open to pre-registered trainers only, so signing up before that date is the only way to take part.",
      "## What you need to know",
      "It's free \u2014 you only cover a small network fee, called gas. Only 10,000 can be minted, first in first minted, with 5 Legendary monsters seeded into the pool.",
      "## Why it's worth doing",
      "Minting also earns pre-registration points toward your trainer tier, on top of the mint itself. Once you have game access, you'll be able to deposit whatever you mint straight into Yakkamon.",
      "Full breakdown, including source details, is on the Pre-registration page."
    ]
  },
  {
    slug: "genesis-airdrop-5000",
    category: "event",
    title: "The Genesis Airdrop: 5,000 Monsters, One Chance",
    date: "Jul 27, 2026",
    excerpt: "The top 5,000 trainers on the leaderboard get a free reward egg at launch \u2014 the top 500 get a Legendary.",
    body: [
      "When early access opens, 5,000 Genesis Monster NFTs will be airdropped to the players who registered earliest and ranked highest. There's no sale and no second window \u2014 once the leaderboard locks, the Genesis line closes for good.",
      "## Who gets what",
      "Ranks 1\u20131,000 receive a Legendary Genesis Monster, the rarest tier that will ever be minted. Ranks 1,001\u20135,000 receive a standard Genesis Monster. Every Genesis creature arrives already carrying in-game XP, and some are built for battle while others excel at gathering.",
      "## The reveal",
      "Nobody finds out what they got until a live Genesis Reveal Event at launch, where every Genesis monster is unwrapped at once.",
      "Full tier breakdown is on the Pre-registration page."
    ]
  },
  {
    slug: "flower-deposits-explained",
    category: "community",
    title: "FLOWER Deposits: Deposit Early, Climb the Board",
    date: "Jul 23, 2026",
    excerpt: "Depositing $FLOWER now does two things at once \u2014 it saves your balance for launch, and earns points today.",
    body: [
      "Yakkamon doesn't launch a new token \u2014 it reuses $FLOWER, the same currency used across the studio's other games. That means trainers can start building an in-game balance before early access even opens.",
      "## Two things, one deposit",
      "Every deposit is held for you and ready the moment you get game access, and it converts into pre-registration points at the same time \u2014 bigger deposits earn exponentially more.",
      "## No lock-up",
      "Once you're in the game, deposited FLOWER can be spent on gear and crafting, or withdrawn tax-free at any time. Small percentage-based withdrawal limits may apply for security during the first few weeks after launch.",
      "Full explainer is on the Pre-registration page."
    ]
  },
  {
    slug: "reward-track-explained",
    category: "community",
    title: "Reward Track: What You Unlock as You Climb",
    date: "Jul 20, 2026",
    excerpt: "Rewards rotate on a 7-day cycle \u2014 here's how the track works and why you need to check back weekly.",
    body: [
      "Pre-registration points unlock rewards automatically as they add up \u2014 no extra steps needed beyond staying active.",
      "## The track",
      "Every 7 days a new list of rewards appears for you to claim. Claimed items go into your inventory and stay there. Each new list replaces the last, so check back weekly.",
      "## How to earn points",
      "Daily egg nurturing, Discord and Twitter quests, referring friends, the free mint, and early FLOWER deposits all contribute.",
      "Full reward track is on the Pre-registration page."
    ]
  }
];
