// YAKKAMON PORTAL — VIDEO INDEX
//
// Data only. videos-render.js turns this into the list on videos.html.
//
// To add a video: paste one object at the TOP of its block. Nothing else needs
// editing — the page, the header count and the section headings read from here.
//
// Deliberately no thumbnails. YouTube thumbnails are hotlinked from i.ytimg.com,
// which is a third-party request on every page load — the same dependency we
// removed when the trailer embed came off the home page.
//
// `related` points at the written version on this site, so the page sends people
// further in rather than straight out to YouTube.

// `sort: "asc"` lists oldest episode first — use it for anything meant to be
// watched in sequence. Everything else lists newest first.
const YAKKAMON_VIDEO_BLOCKS = [
  { key: "start",    sort: "asc",  title: "START HERE", note: "New to Yakkamon? Start at the top and work down." },
  { key: "tactics",  sort: "desc", title: "TACTICS",    note: "Timing, points, and the things that cost people rank." },
  { key: "analysis", sort: "desc", title: "ANALYSIS",   note: "Longer pieces on how the game is being built." },
  { key: "trailers", sort: "desc", title: "TRAILERS",   note: "Cinematics and first looks." },
];

const YAKKAMON_VIDEOS = [
  // ---------- ANALYSIS ----------
  {
    id: "b75C5mtcKvo",
    ep: "13",
    runtime: "4:40",
    block: "analysis",
    title: "Yakkamon \u2014 Your Rank Buys Less Than You Think",
    blurb: "Your wave is a market position, not a head start. Everything is tradable from day one, so Wave 1 walks into a market with no sellers, while a later wave arrives to cheaper, deeper stock and two weeks of everyone else's mistakes already priced in. What rank actually buys you \u2014 and the four assumptions that would overturn the whole argument.",
    related: { href: "article-after-the-race.html", label: "Read the written version" },
  },
  {
    id: "KBhqtyYx-MM",
    ep: "11",
    runtime: "7:33",
    block: "analysis",
    title: "Yakkamon Airdrop: Legendary Supply Just Doubled \u2014 And The Rule Nobody's Reading",
    blurb: "The four Genesis Legendaries named, the ladder change explained band by band, and the odds recalculated against 77,763 trainers. Includes the correction to EP 10 below, and the rule that decides whether you keep the rank you're sitting on.",
    related: { href: "article-airdrop-breakdown.html", label: "Read the full airdrop breakdown" },
  },
  {
    id: "ZjDPcqiDtBU",
    ep: "10",
    runtime: "14:28",
    block: "analysis",
    title: "The Yakkamon Reward Ladder Changed \u2014 I Was Wrong About How Bad It Was",
    blurb: "A full breakdown of the 12 August ladder change. \u26a0 Its supply conclusion was later corrected \u2014 the monster names published on 14 August show Legendary supply doubled rather than halved, and no band lost out. EP 11 above has the corrected version.",
    related: { href: "article-reward-ladder-analysis.html", label: "Read the written analysis" },
  },
  {
    id: "ZNN8DrZc4O8",
    ep: "09",
    runtime: "22:11",
    block: "analysis",
    title: "I Graded Yakkamon's First Dev Stream (6 Aug) \u2014 One Decision Gets a C",
    blurb: "Nine decisions from the 6 August dev stream, graded A to C \u2014 what the team got right, and the one call that makes the top of the leaderboard purchased rather than contested.",
    related: { href: "article-dev-stream-graded.html", label: "Read the written version" },
  },

  // ---------- TACTICS ----------
  {
    id: "qz_CFPic72Q",
    ep: "14",
    runtime: "4:33",
    block: "tactics",
    title: "Yakkamon Leaderboard Is Live",
    blurb: "The deposit leaderboard is now on this site, scored from on-chain Base and Ronin transfers on the published point rules. What it shows once you look: roughly 3,000 addresses have deposited against 5,000 airdrop places, and the weekly multiplier drops 0.2\u00d7 every Monday whether or not the timing ever feels right.",
    related: { href: "leaderboard.html", label: "Open the deposit leaderboard" },
  },
  {
    id: "aJLPrAnhs0I",
    ep: "05",
    runtime: "2:29",
    block: "tactics",
    title: "Yakkamon $FLOWER Deposits: Week One Pays 3\u00d7 \u2014 Then It Drops",
    blurb: "Everything about deposits before you send anything: the decaying weekly multiplier, the per-deposit size bonus, and the trap that costs people points.",
    related: { href: "tips.html#weekly-flower", label: "The full deposit breakdown" },
  },

  // ---------- START HERE ----------
  {
    id: "AeLErRg8Vzk",
    ep: "12",
    runtime: "4:14",
    block: "start",
    title: "Yakkamon Gameplay Explained in 4 Minutes \u2014 What We Know So Far",
    blurb: "What you'll actually be doing once the game opens: monsters that gather while you're offline, type locking, the stamina cycle, storage bins that overflow, and the upkeep that keeps it all running. Includes what still isn't confirmed.",
    related: { href: "gameplay-guide.html", label: "Read the full field guide" },
  },
  {
    id: "Tk0v9lgrM2A",
    ep: "08",
    runtime: "2:04",
    block: "start",
    title: "Yakkamon Egg Tiers: Platinum, Gold, Silver \u2014 Does It Actually Matter?",
    blurb: "How tiers are handed out, why the counter makes people panic, and the team's own answer: they're mainly cosmetic.",
    related: { href: "faq.html#egg-tiers", label: "Egg tiers in the FAQ" },
  },
  {
    id: "J0LgLC_wnfY",
    ep: "07",
    runtime: "2:06",
    block: "start",
    title: "The Three Rewards (Monster Egg \u2014 Airdrop \u2014 Free Mint), Side By Side",
    blurb: "Three separate rewards, decided three completely different ways. None of them cancels out another, and you can have all three.",
    related: { href: "faq.html#mint-vs-airdrop", label: "The three rewards compared" },
  },
  {
    id: "-PjrTPgIwxQ",
    ep: "06",
    runtime: "2:10",
    block: "start",
    title: "Rank, Wave, Trainer Number: The Yakkamon Words Everyone Mixes Up",
    blurb: "Points, rank, wave, trainer number and egg tier all mean different things. Only one is decided the day you sign up, and it's the one that matters least.",
    related: { href: "faq.html#ranks-tiers", label: "The full rank ladder" },
  },
  {
    id: "tkD362tQUa0",
    ep: "04",
    runtime: "2:29",
    block: "start",
    title: "How To Pre-Register For Yakkamon (And The Step Most People Skip)",
    blurb: "Signing up takes a minute and needs only an email. But linking X and Discord is what verifies you \u2014 and verification decides whether you can mint in mid-September.",
    related: { href: "pre-registration.html", label: "The written walkthrough" },
  },
  {
    id: "cLRGC67tmLQ",
    ep: "03",
    runtime: "1:57",
    block: "start",
    title: "What Is Yakkamon? The 2-Minute Explainer",
    blurb: "A creature collector that's also an idle farming game. What it is, who's building it, and why pre-registration matters before early access opens in November or December 2026.",
    related: { href: "index.html", label: "What is Yakkamon?" },
  },

  // ---------- TRAILERS ----------
  {
    id: "GsUrYD4sAro",
    ep: "02",
    runtime: "0:30",
    block: "trailers",
    title: "Yakkamon \u2014 Ready to Catch All?",
    blurb: "A thirty-second look at the creatures.",
    related: { href: "gameplay.html", label: "Gameplay systems" },
  },
  {
    id: "ebC2vyUlnXs",
    ep: "01",
    runtime: "1:08",
    block: "trailers",
    title: "Yakkamon \u2014 Unofficial Fan Trailer | Pre-Registration Is Open",
    blurb: "The first one. Regions, creatures, and the loop that runs while you're offline.",
    related: { href: "gameplay.html", label: "Gameplay systems" },
  },
];
