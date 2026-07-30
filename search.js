// Site-wide search for YakkamonWorld.
// This is a plain static site (no backend), so search runs entirely in
// the browser against a small hand-maintained index below. When you add
// a new page, news post, or gameplay system, add a matching entry here
// so it shows up in search results too.

const SEARCH_INDEX = [
  { tag: "Home", title: "YakkamonWorld", excerpt: "The unofficial Yakkamon player portal — news, gameplay, and pre-registration all in one place.", url: "index.html" },

  { tag: "Pre-registration", title: "Pre-registration", excerpt: "Points, tiers, free mint, and Genesis monsters — explained simply.", url: "pre-registration.html" },
  { tag: "Pre-registration", title: "Getting started", excerpt: "What pre-registration is, how points work, and how to earn them.", url: "pre-registration.html#getting-started" },
  { tag: "Pre-registration", title: "Reward track", excerpt: "What you unlock automatically as your points grow, from your first Monster Pack to Tier I early access.", url: "pre-registration.html#reward-track" },
  { tag: "Pre-registration", title: "Genesis monsters", excerpt: "The one-time Genesis airdrop — 5,000 free monsters, the top 1,000 get a Legendary.", url: "pre-registration.html#genesis-monsters" },
  { tag: "Pre-registration", title: "Free mint — October 1st", excerpt: "How the free Genesis Monster mint works on Ronin, and who's eligible.", url: "pre-registration.html#free-mint" },
  { tag: "Pre-registration", title: "FLOWER deposits", excerpt: "Depositing $FLOWER early banks your balance for launch and earns pre-reg points.", url: "pre-registration.html#flower-deposits" },

  { tag: "News", title: "News archive", excerpt: "Every patch note, event, and community update in one place.", url: "news.html" },
  { tag: "News", title: "New: FAQ Page Answers Your Trickiest Pre-Reg Questions", excerpt: "Wallets, gas, Ronin, and Free Mint vs Genesis Airdrop, all explained in plain language.", url: "article-faq-page-live.html" },
  { tag: "News", title: "Sunflower Land Players (150+ Bumpkin Level): Get Your Access Code Today", excerpt: "Bumpkin Level 150+? Get your code from the Yakkamon sign next to Stella in the Plaza, then sign up at yakkamon.com.", url: "article-access-code-today.html" },
  { tag: "News", title: "Free Mint Goes Live October 1st", excerpt: "Pre-registered trainers can claim a Genesis Monster NFT for free on Ronin.", url: "article-free-mint-october-1.html" },
  { tag: "News", title: "The Genesis Airdrop: 5,000 Monsters, One Chance", excerpt: "The top 5,000 trainers on the leaderboard get a free Genesis Monster at launch.", url: "article-genesis-airdrop-5000.html" },
  { tag: "News", title: "FLOWER Deposits: Deposit Early, Climb the Board", excerpt: "Depositing $FLOWER now saves your balance for launch and earns points today.", url: "article-flower-deposits-explained.html" },
  { tag: "News", title: "Reward Track: What You Unlock as You Climb", excerpt: "From your first Monster Pack to Tier I early access.", url: "article-reward-track-explained.html" },

  { tag: "Gameplay", title: "Gameplay systems", excerpt: "The six core systems that make up Yakkamon.", url: "gameplay.html" },
  { tag: "Gameplay", title: "Creature Collecting", excerpt: "Hunt and catch monsters, then put them to work gathering resources and farming.", url: "gameplay.html?system=creature-collecting" },
  { tag: "Gameplay", title: "Regional Exploration", excerpt: "Deserts, volcanoes, and oceans, each shifting through day and night and the seasons.", url: "gameplay.html?system=regional-exploration" },
  { tag: "Gameplay", title: "Crafting & Hunting", excerpt: "Refine gathered resources into gear to track down rarer, tougher monsters.", url: "gameplay.html?system=crafting-hunting" },
  { tag: "Gameplay", title: "Day & Night Cycle", excerpt: "A living world that shifts between day and night, changing what you'll find in the wild.", url: "gameplay.html?system=day-night-cycle" },
  { tag: "Gameplay", title: "Seasonal System", excerpt: "Every three months, brand-new monsters are released into the wild.", url: "gameplay.html?system=seasonal-system" },
  { tag: "Gameplay", title: "Arena Battles", excerpt: "Face off against the best trainers in PvP arena combat.", url: "gameplay.html?system=arena-battles" },

  { tag: "Community", title: "Community", excerpt: "Follow YakkamonWorld and the official Yakkamon channels.", url: "community.html" },
  { tag: "Community", title: "Follow YakkamonWorld on X", excerpt: "This portal's own account — site updates and behind-the-scenes posts.", url: "community.html" },
  { tag: "Community", title: "Official Discord", excerpt: "The official Discord isn't open yet — coming soon.", url: "community.html" },

  { tag: "Stats", title: "Trainer stats", excerpt: "Look up your roster, match history, and stats. Goes live once connected to real game data.", url: "stats.html" },

  { tag: "FAQ", title: "FAQ", excerpt: "Answers to the most confusing parts of pre-registration, in plain language.", url: "faq.html" },
  { tag: "FAQ", title: "Do I need a crypto wallet?", excerpt: "Pre-registering only needs an email. A wallet only matters if you want to take part in the Free Mint.", url: "faq.html#general" },
  { tag: "FAQ", title: "Rank vs tier vs wave", excerpt: "What each term actually means and how they relate to each other.", url: "faq.html#ranks-tiers" },
  { tag: "FAQ", title: "Free Mint vs the Genesis Airdrop", excerpt: "They sound similar but work completely differently — here's the side-by-side comparison.", url: "faq.html#mint-vs-airdrop" },
  { tag: "FAQ", title: "What is gas? What is Ronin?", excerpt: "The network fee and the blockchain Yakkamon runs on, explained in plain language.", url: "faq.html#mint-vs-airdrop" },
  { tag: "FAQ", title: "Can I get my FLOWER back?", excerpt: "Yes, withdraw anytime tax-free, with small security limits in the first weeks after launch.", url: "faq.html#flower" },
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
