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
  { tag: "Pre-registration", title: "Referral rules", excerpt: "Only genuine verified referrals count. Removed ones are deducted, and abuse can disqualify an account.", url: "pre-registration.html#referrals" },
  { tag: "Pre-registration", title: "Genesis monsters", excerpt: "The one-time Genesis airdrop — 5,000 free monsters, the top 1,000 get a Legendary.", url: "pre-registration.html#genesis-monsters" },
  { tag: "Pre-registration", title: "Free mint — October 1st", excerpt: "How the free Genesis Monster mint works on Ronin, and who's eligible.", url: "pre-registration.html#free-mint" },
  { tag: "Pre-registration", title: "FLOWER deposits", excerpt: "Depositing $FLOWER early banks your balance for launch and earns pre-reg points.", url: "pre-registration.html#flower-deposits" },

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

  { tag: "Gameplay", title: "Gameplay systems", excerpt: "The six core systems that make up Yakkamon.", url: "gameplay.html" },
  { tag: "Gameplay", title: "How Yakkamon works \u2014 poster", excerpt: "One-page field guide: the idle half where monsters farm around the clock, the active half of hunting, crafting and arena battles, plus the six-step core loop.", url: "gameplay.html" },
  { tag: "Gameplay", title: "The core loop", excerpt: "Catch a monster, put it to work, gather resources, craft better gear, hunt rarer prey, battle in the arena \u2014 then back to step one with a stronger roster.", url: "gameplay.html" },
  { tag: "Gameplay", title: "Creature Collecting", excerpt: "Hunt and catch monsters, then put them to work gathering resources and farming.", url: "gameplay.html?system=creature-collecting" },
  { tag: "Gameplay", title: "Regional Exploration", excerpt: "Deserts, volcanoes, and oceans, each shifting through day and night and the seasons.", url: "gameplay.html?system=regional-exploration" },
  { tag: "Gameplay", title: "Crafting & Hunting", excerpt: "Refine gathered resources into gear to track down rarer, tougher monsters.", url: "gameplay.html?system=crafting-hunting" },
  { tag: "Gameplay", title: "Day & Night Cycle", excerpt: "A living world that shifts between day and night, changing what you'll find in the wild.", url: "gameplay.html?system=day-night-cycle" },
  { tag: "Gameplay", title: "Seasonal System", excerpt: "Every three months, brand-new monsters are released into the wild.", url: "gameplay.html?system=seasonal-system" },
  { tag: "Gameplay", title: "Arena Battles", excerpt: "Face off against the best trainers in PvP arena combat.", url: "gameplay.html?system=arena-battles" },

  { tag: "Community", title: "Community", excerpt: "Join the YakkamonWorld Telegram channel and chat, and follow the official Yakkamon channels.", url: "community.html" },
  { tag: "Community", title: "Telegram channel — YakkamonWorld", excerpt: "Pre-registration tiers as they unlock, new guides, and news. The main place to follow the portal.", url: "community.html" },
  { tag: "Community", title: "Telegram chat — YakkamonWorld Chat", excerpt: "Ask anything about wallets, gas, free mint, or access dates. Other players and our bot answer.", url: "community.html" },
  { tag: "Community", title: "Access bot — check your access date", excerpt: "Send our Telegram bot your Bumpkin Level and it tells you when your access code unlocks.", url: "community.html" },
  { tag: "Community", title: "Follow @Yakkamon_World on X", excerpt: "This portal's own account — site updates, announcements and behind-the-scenes posts.", url: "community.html" },
  { tag: "Community", title: "Official Discord", excerpt: "The official Discord isn't open yet — coming soon.", url: "community.html" },

  { tag: "Stats", title: "Trainer stats", excerpt: "Look up your roster, match history, and stats. Goes live once connected to real game data.", url: "stats.html" },

  { tag: "FAQ", title: "FAQ", excerpt: "Answers to the most confusing parts of pre-registration, in plain language.", url: "faq.html" },
  { tag: "FAQ", title: "How to pre-register (Sunflower Land players)", excerpt: "Access dates by Bumpkin Level, plus step-by-step: find Yakkamon in the Plaza, then sign up at yakkamon.com.", url: "faq.html#sunflowerland-guide" },
  { tag: "FAQ", title: "Where can I ask a question?", excerpt: "Our unofficial Telegram channel and chat group — plus an access bot that answers Bumpkin Level lookups.", url: "faq.html#general" },
  { tag: "FAQ", title: "What is Yakkamon?", excerpt: "A creature collector crossed with idle farming \u2014 catch monsters, then put them to work producing while you're away.", url: "faq.html#general" },
  { tag: "FAQ", title: "Who makes Yakkamon?", excerpt: "Thought Farm, the team behind Sunflower Land \u2014 1M+ players, 100+ open-source contributors, five years building in the open.", url: "faq.html#general" },
  { tag: "FAQ", title: "Is Yakkamon free to pre-register?", excerpt: "Yes \u2014 free, email only. No wallet needed and no Sunflower Land account required.", url: "faq.html#general" },
  { tag: "FAQ", title: "What is the official Yakkamon website?", excerpt: "yakkamon.com is the only official site. Yakkamon will never ask for a seed phrase or private key \u2014 only an email address.", url: "faq.html#general" },
  { tag: "FAQ", title: "Do I need to be a Sunflower Land player?", excerpt: "No \u2014 anyone can pre-register with just an email. Your Bumpkin Level only decides when your access code unlocks.", url: "faq.html#general" },
  { tag: "FAQ", title: "Which network does Yakkamon run on?", excerpt: "Ronin \u2014 a blockchain built for games with much lower fees than Ethereum. It's where the free mint happens.", url: "faq.html#general" },
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
  { tag: "Pre-registration", title: "Aug 4 \u2014 pre-registration opens to everyone", excerpt: "From Aug 4, 8 PM ET anyone can sign up with a referral code \u2014 no Sunflower Land account, no Bumpkin level, no wallet.", url: "pre-registration.html#referrals" },
  { tag: "FAQ", title: "Referral rules \u2014 what counts", excerpt: "Unverified, multi-account, bot and inactive sign-ups don't count. Removed referrals are deducted and can lower your rank.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "I signed up late \u2014 am I out of the running?", excerpt: "No. A Basic egg holder who earns points daily finishes above a Platinum holder who never comes back.", url: "faq.html#egg-tiers" },
  { tag: "FAQ", title: "Is there a cutoff for early access?", excerpt: "Yes \u2014 only the top 100,000 trainers on points get in. Below rank 100,000 you wait for full launch.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "What is a Genesis Monster?", excerpt: "One of 5,000 founding creatures given free at early access \u2014 no sale, no second window, never minted again.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "Who gets the NFT airdrop?", excerpt: "Ranks 1\u20131,000 get a Legendary Monster NFT, 1,001\u20135,000 get a Monster NFT, 5,001+ are not eligible. Awarded on points, never on sign-up date.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "Is the airdrop first come, first served?", excerpt: "No. There is no sale, no second window and no way to buy in later \u2014 the only route is the top 5,000 on points.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "The Genesis Reveal Event", excerpt: "You don't find out which Genesis Monster you got until a live unwrapping at early access launch.", url: "faq.html#genesis" },
  { tag: "FAQ", title: "Are Genesis Monsters specialised?", excerpt: "Yes \u2014 some are built for battle, some for gathering resources, others for different parts of the game.", url: "faq.html#genesis" },
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
  { tag: "FAQ", title: "What does my rank get me?", excerpt: "The full ladder from rank 1 to 100,001+, which egg each band receives, which wave \u2014 and the hard cutoff at 100,000.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "How do I earn points?", excerpt: "Daily egg nurture and streaks, Discord and Twitter quests, referrals, the October free mint, and $FLOWER deposits.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "When do I find out my rank?", excerpt: "Trainer numbers and tiers are revealed shortly before early access opens in Q4 2026.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "Is the Genesis Monster tradable?", excerpt: "Yes \u2014 fully tradable, arrives with in-game XP, revealed at launch, and never minted again. Supply fixed at 5,000.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "When does the Genesis Drop leaderboard end?", excerpt: "Trainer numbers and tiers are revealed shortly before early access in Q4 2026; no exact cut-off has been published.", url: "faq.html#mint-vs-airdrop" },
  { tag: "FAQ", title: "When does the game actually launch?", excerpt: "November 1st is early access, rolled out in waves — not a single day for everyone.", url: "faq.html#launch" }
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
