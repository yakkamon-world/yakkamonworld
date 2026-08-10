// YAKKAMON PORTAL — VIDEO INDEX
//
// Data only. videos-render.js turns this into the list on videos.html.
//
// To add a video: paste one object at the TOP of the block it belongs to.
// Nothing else needs editing — the page, the counts and the section headings
// all read from here.
//
// Deliberately no thumbnails. YouTube thumbnails are hotlinked from
// i.ytimg.com, which is a third-party request on every page load and the same
// dependency we removed when the trailer embed came off the home page.
//
// `related` points at the written version on this site, so the page sends
// people further in rather than straight out to YouTube.

const YAKKAMON_VIDEO_BLOCKS = [
  { key: "start",    title: "START HERE",        note: "New to Yakkamon? Watch these in order." },
  { key: "tactics",  title: "TACTICS",           note: "Timing, points and the things that cost people rank." },
  { key: "analysis", title: "ANALYSIS",          note: "Longer pieces on how the game is being built." },
  { key: "trailers", title: "TRAILERS",          note: "Cinematics and first looks." },
];

const YAKKAMON_VIDEOS = [
  // ---------- ANALYSIS ----------
  {
    id: "ZNN8DrZc4O8",
    ep: "30",
    block: "analysis",
    title: "I Graded Yakkamon's First Dev Stream",
    blurb: "Nine decisions from the first dev stream, graded A to C \u2014 what the team got right, and the one call that makes the top of the leaderboard purchased rather than contested.",
    related: { href: "article-dev-stream-graded.html", label: "Read the written version" },
  },

  // ---------- TACTICS ----------
  {
    id: "Tk0v9lgrM2A",
    ep: "09",
    block: "tactics",
    title: "Week One Pays 3\u00d7 \u2014 Then It Drops",
    blurb: "Everything about $FLOWER deposits before you send anything: the decaying multiplier, the per-deposit size bonus, and the trap that costs people points.",
    related: { href: "tips.html#weekly-flower", label: "The full deposit breakdown" },
  },

  // ---------- START HERE ----------
  {
    id: "J0LgLC_wnfY",
    ep: "05",
    block: "start",
    title: "Monster Egg Tiers \u2014 Does It Actually Matter?",
    blurb: "Platinum, Gold, Silver, Bronze, Basic. How tiers are handed out, and why the team says they're mainly cosmetic.",
    related: { href: "faq.html#egg-tiers", label: "Egg tiers in the FAQ" },
  },
  {
    id: "-PjrTPgIwxQ",
    ep: "04",
    block: "start",
    title: "The Three Rewards, Side By Side",
    blurb: "The Monster Egg, the Trainer Point airdrop and the Ronin free mint are three different things decided three different ways. You can have all three.",
    related: { href: "faq.html#mint-vs-airdrop", label: "The three rewards compared" },
  },
  {
    id: "aJLPrAnhs0I",
    ep: "03",
    block: "start",
    title: "Rank, Wave, Trainer Number \u2014 The Words Everyone Mixes Up",
    blurb: "Points, rank, wave, trainer number and egg tier all mean different things. Only one is decided the day you sign up, and it's the one that matters least.",
    related: { href: "faq.html#ranks-tiers", label: "The full rank ladder" },
  },
  {
    id: "tkD362tQUa0",
    ep: "02",
    block: "start",
    title: "How To Pre-Register (And The Step Most People Skip)",
    blurb: "Signing up takes a minute and needs only an email. But linking X and Discord is what verifies you \u2014 and verification is what decides whether you can mint on October 1st.",
    related: { href: "pre-registration.html", label: "The written walkthrough" },
  },
  {
    id: "cLRGC67tmLQ",
    ep: "01",
    block: "start",
    title: "What Is Yakkamon? The 2-Minute Explainer",
    blurb: "A creature collector that's also an idle farming game. What it is, who's building it, and why pre-registration matters before early access opens in Q4 2026.",
    related: { href: "index.html", label: "What is Yakkamon?" },
  },

  // ---------- TRAILERS ----------
  {
    id: "GsUrYD4sAro",
    block: "trailers",
    title: "Yakkamon \u2014 Trailer",
    blurb: "A first look at the world: regions, creatures and the loop that runs while you're offline.",
    related: { href: "gameplay.html", label: "Gameplay systems" },
  },
  {
    id: "ebC2vyUlnXs",
    block: "trailers",
    title: "Yakkamon \u2014 First Trailer",
    blurb: "The original cut.",
    related: { href: "gameplay.html", label: "Gameplay systems" },
  },
];
