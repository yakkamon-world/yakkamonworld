// ASK ME ANYTHING — the site chatbot
//
// A docked bar along the bottom of every page ("Ask me anything…") that opens a
// bottom sheet. Questions go to the yakkamon-chat-worker, which searches the
// official docs first, then this site, then the dev-stream digest, and answers
// with Claude. Every reply shows where it came from.
//
// SETUP (once):
//   1. Deploy the worker (see the yakkamon-chat-worker repo) and copy its URL.
//   2. Paste that URL into WORKER_URL below.
//   3. Done. Until then the bar still renders, and replies say the helper isn't
//      connected yet — nothing on the page breaks.
//
// Markup and styles: everything is injected by this file; the CSS lives in
// style.css under "Ask me anything bar". Loaded with `defer` on every page.
// The character image is chatbot-bird.webp.

const WORKER_URL = "https://yakkamon-chat-worker.yakkamonworld.workers.dev";

// FREE QUESTIONS + FOLLOW NUDGE
// Each browser gets FREE_PER_DAY questions a day. On the next one a card asks
// the visitor to follow us on X / subscribe on YouTube; tapping either button
// unlocks the chat for UNLOCK_DAYS days. It is an honour system, tracked only
// in the visitor's own browser (localStorage) — nothing is sent or stored on
// our side, and the worker's own rate limits remain the real cost control.
// Set FREE_PER_DAY to 0 to turn the nudge off.
const FREE_PER_DAY = 3;
const UNLOCK_DAYS = 30;
const FOLLOW_LINKS = {
  x: "https://x.com/Yakkamon_World",
  youtube: "https://www.youtube.com/@YakkamonWorld",
};

(function () {
  "use strict";
  if (document.getElementById("cb-bar")) return;

  const BIRD = "chatbot-bird.webp";
  // Starter block: TOPICS (one per FAQ category, each sends a well-formed question) and the five MOST ASKED questions.
  const TOPICS = [
    ["Start here", "What is Yakkamon, in short, and who makes it?"],
    ["Free mint", "How does the Ronin free mint work — dates, waves and what I need to do?"],
    ["Ranks & waves", "What is the difference between my rank, my tier and my wave?"],
    ["Legendaries", "What are the four Genesis Legendaries and what does each one do?"],
    ["$FLOWER deposits", "How do $FLOWER deposits earn points, and what is the multiplier this week?"],
    ["Leaderboard", "Where can I see the live deposit leaderboard and how often does it update?"],
    ["Referrals", "How do referral points work now?"],
    ["Nurture streak", "How does the daily nurture streak work, and what time should I nurture?"],
    ["Gameplay", "How does Yakkamon gameplay work — the idle half and the active half?"],
    ["Regions", "How do Regions and tiles work?"],
    ["Economy", "Is Yakkamon free to play, and how does the in-game market work?"],
    ["Launch timing", "When does early access start, and what happens at Chapter 0?"],
    ["Dev streams", "What did the latest dev stream cover?"],
    ["Stay safe", "How do I know a mint link is real, and what should I never do?"],
  ];
  const QUESTIONS = [
    "When is the free mint, and which wave am I in?",
    "When does early access start?",
    "What does my rank get me?",
    "How do I earn points?",
    "Do I need a Ronin wallet?",
  ];
  const GREETING = "Hi! Ask me anything about Yakkamon — or tap Topics & most asked above for ideas. I check the official docs first, then YakkamonWorld, then the dev streams, and every answer shows where it came from.";
  const SRC_LABEL = { official: "OFFICIAL DOCS", yw: "YAKKAMONWORLD", stream: "DEV STREAM" };
  const STORE = "yw-chat";
  const QUOTA = "yw-chat-quota";
  const configured = WORKER_URL && !WORKER_URL.startsWith("PASTE-");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- markup ---------- */
  const bar = el("button", "cb-bar", {
    id: "cb-bar", type: "button", "aria-label": "Ask me anything about Yakkamon", "aria-haspopup": "dialog",
  });
  bar.innerHTML =
    '<img class="cb-bird" src="' + BIRD + '" alt="" width="175" height="240" loading="lazy" decoding="async">' +
    '<span class="cb-fake">Ask me anything…</span>' +
    '<span class="cb-go" aria-hidden="true">➜</span>';

  const scrim = el("div", "cb-scrim", { id: "cb-scrim", hidden: "" });
  const sheet = el("section", "cb-sheet", { id: "cb-sheet", role: "dialog", "aria-modal": "true", "aria-label": "Ask me anything about Yakkamon", hidden: "" });
  sheet.innerHTML =
    '<button type="button" class="cb-handle" aria-label="Toggle full height"><i></i></button>' +
    '<header class="cb-head">' +
      '<img class="cb-head-bird" src="' + BIRD + '" alt="" width="175" height="240" decoding="async">' +
      '<div class="cb-title"><b>ASK ME ANYTHING</b><span><i></i>Official docs first, then YakkamonWorld</span></div>' +
      '<button type="button" class="cb-close" aria-label="Close">&times;</button>' +
    '</header>' +
    '<div class="cb-starter-wrap">' +
      '<button type="button" class="cb-starter-toggle" id="cb-starter-toggle" aria-expanded="false" aria-controls="cb-starter">Topics &amp; most asked <i aria-hidden="true">&#9662;</i></button>' +
      '<div class="cb-starter" id="cb-starter" hidden>' +
        '<div class="cb-sec"><span class="cb-sec-h">Topics</span><div class="cb-topics" id="cb-topics"></div></div>' +
        '<div class="cb-sec"><span class="cb-sec-h">Most asked</span><div class="cb-qs" id="cb-qs"></div></div>' +
      '</div>' +
    '</div>' +
    '<div class="cb-msgs" id="cb-msgs" role="log" aria-live="polite"></div>' +
    '<form class="cb-form" id="cb-form">' +
      '<label for="cb-input" class="cb-sr">Your question</label>' +
      '<input id="cb-input" type="text" autocomplete="off" enterkeyhint="send" maxlength="400" placeholder="Ask me anything…">' +
      '<button type="submit" id="cb-send">SEND</button>' +
    '</form>' +
    '<p class="cb-foot"><b>Official docs</b> → <b>YakkamonWorld</b> → <b>Dev streams</b> · unofficial fan helper, not financial advice</p>';

  document.body.append(bar, scrim, sheet);
  document.body.classList.add("cb-bar-on");

  const msgs = sheet.querySelector("#cb-msgs");
  const starter = sheet.querySelector("#cb-starter");
  const starterToggle = sheet.querySelector("#cb-starter-toggle");
  const form = sheet.querySelector("#cb-form");
  const input = sheet.querySelector("#cb-input");
  const sendBtn = sheet.querySelector("#cb-send");
  const handle = sheet.querySelector(".cb-handle");

  const topicsBox = sheet.querySelector("#cb-topics"), qsBox = sheet.querySelector("#cb-qs");
  TOPICS.forEach(function (t) {
    const b = el("button", "cb-topic", { type: "button", title: t[1] });
    b.textContent = t[0];
    b.addEventListener("click", function () { send(t[1]); });
    topicsBox.appendChild(b);
  });
  QUESTIONS.forEach(function (q) {
    const b = el("button", "cb-q", { type: "button" });
    b.innerHTML = '<i>?</i><span></span>';
    b.querySelector("span").textContent = q;
    b.addEventListener("click", function () { send(q); });
    qsBox.appendChild(b);
  });
  // The block is a dropdown: closed by default on every device, opened from the toggle bar, and it
  // closes itself as soon as the visitor picks something, starts typing, or taps the conversation.
  function setStarter(open) {
    starter.hidden = !open;
    starterToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      // on a phone, give the list the full sheet height so most of it shows without scrolling
      if (window.innerWidth < 760) sheet.classList.add("cb-full");
      // never let the dropdown cover the input box — it stops just above the form and scrolls inside
      const room = form.getBoundingClientRect().top - starter.getBoundingClientRect().top - 10;
      starter.style.maxHeight = Math.max(160, room) + "px";
    }
  }
  starterToggle.addEventListener("click", function () { setStarter(starter.hidden); });
  input.addEventListener("focus", function () { setStarter(false); });
  input.addEventListener("input", function () { setStarter(false); });
  sheet.addEventListener("pointerdown", function (e) { if (!starter.hidden && !e.target.closest(".cb-starter-wrap")) setStarter(false); });

  /* ---------- state ---------- */
  let history = load();
  let busy = false;
  let lastFocus = null;
  let pending = "";

  if (history.length) history.forEach(render);
  else pushBot({ answer: GREETING, sources: [], link: null }, false);

  /* ---------- usage tracking ----------
     Two channels, both anonymous:
     - GA4 events (only when the visitor accepted analytics): chat_open, chat_question,
       chat_follow_card, chat_follow_click {platform}, chat_unlock.
     - A one-word ping to the worker's /event for the follow funnel (open, card, follow_x,
       follow_youtube), which just adds 1 to a daily counter — no cookies, no ids.
       The owner reads them at WORKER_URL/stats?key=… */
  function track(name, params) {
    try { if (typeof window.gtag === "function") window.gtag("event", name, Object.assign({ event_category: "chatbot" }, params || {})); } catch (e) {}
  }
  function ping(type) {
    if (!configured) return;
    try {
      const u = WORKER_URL.replace(/\/$/, "") + "/event";
      if (navigator.sendBeacon) navigator.sendBeacon(u, type);
      else fetch(u, { method: "POST", body: type, keepalive: true }).catch(function () {});
    } catch (e) {}
  }
  let openedOnce = false;

  /* ---------- open / close ---------- */
  function open() {
    if (!sheet.hidden) return;
    lastFocus = document.activeElement;
    scrim.hidden = false; sheet.hidden = false;
    document.documentElement.classList.add("cb-lock");
    if (!openedOnce) { openedOnce = true; track("chat_open"); ping("open"); }
    bar.classList.remove("cb-hide");
    scrollBottom();
    watchViewport(true);
    if (!window.matchMedia("(pointer: coarse)").matches) setTimeout(function () { input.focus({ preventScroll: true }); }, reduceMotion ? 0 : 260);
  }
  function close() {
    if (sheet.hidden) return;
    sheet.hidden = true; scrim.hidden = true;
    sheet.classList.remove("cb-full");
    document.documentElement.classList.remove("cb-lock");
    watchViewport(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); else bar.focus({ preventScroll: true });
  }
  bar.addEventListener("click", open);
  scrim.addEventListener("click", close);
  sheet.querySelector(".cb-close").addEventListener("click", close);
  handle.addEventListener("click", function () { sheet.classList.toggle("cb-full"); scrollBottom(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !sheet.hidden) close(); });
  if (location.hash === "#ask") setTimeout(open, 300);

  /* ---------- hide the bar while reading (scrolling down), bring it back on the way up ---------- */
  let lastY = window.scrollY, ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      const y = window.scrollY;
      const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 160;
      if (sheet.hidden) bar.classList.toggle("cb-hide", y > lastY + 4 && y > 120 && !nearBottom);
      lastY = y; ticking = false;
    });
  }, { passive: true });

  /* ---------- the phone keyboard: keep the sheet inside the visible viewport ---------- */
  const vv = window.visualViewport;
  function fitViewport() {
    if (sheet.hidden || !vv) return;
    const keyboard = vv.height < window.innerHeight * 0.85;
    if (keyboard) {
      sheet.style.top = vv.offsetTop + "px";
      sheet.style.height = vv.height + "px";
      sheet.style.bottom = "auto";
      sheet.style.borderRadius = "0";
    } else {
      sheet.style.top = ""; sheet.style.height = ""; sheet.style.bottom = ""; sheet.style.borderRadius = "";
    }
    scrollBottom();
  }
  function watchViewport(on) {
    if (!vv) return;
    if (on) { vv.addEventListener("resize", fitViewport); vv.addEventListener("scroll", fitViewport); }
    else { vv.removeEventListener("resize", fitViewport); vv.removeEventListener("scroll", fitViewport); fitViewport(); }
  }

  /* ---------- sending ---------- */
  form.addEventListener("submit", function (e) { e.preventDefault(); send(input.value); });

  function send(text) {
    text = (text || "").replace(/\s+/g, " ").trim();
    if (!text || busy) return;
    if (FREE_PER_DAY > 0 && !quota.unlocked() && quota.used() >= FREE_PER_DAY) {
      pending = text; input.value = "";
      showFollowCard();
      return;
    }
    input.value = "";
    pushUser(text);
    quota.bump();
    if (!configured) {
      pushBot({ answer: "The helper isn't connected yet — it'll be live soon. In the meantime the FAQ covers most questions.", sources: [], link: { title: "Browse the FAQ →", url: "faq.html" } }, true);
      return;
    }
    busy = true; sendBtn.disabled = true;
    const typing = el("div", "cb-m cb-bot cb-typing");
    typing.innerHTML = '<div class="cb-bub"><i></i><i></i><i></i></div>';
    msgs.appendChild(typing); scrollBottom();

    const ctrl = ("AbortController" in window) ? new AbortController() : null;
    const timer = ctrl && setTimeout(function () { ctrl.abort(); }, 30000);
    fetch(WORKER_URL.replace(/\/$/, "") + "/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      signal: ctrl ? ctrl.signal : undefined,
      body: JSON.stringify({ q: text, history: history.slice(-6).map(function (m) { return { role: m.role, content: m.content }; }) }),
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); })
      .then(function (res) {
        typing.remove();
        const j = res.j || {};
        if (res.status === 429) pushBot({ answer: j.answer || "Too many questions at once — give it a minute and try again.", sources: [], link: null }, false);
        else if (typeof j.answer === "string") pushBot(j, true);
        else pushBot({ answer: "Something went wrong on my side. Try again in a moment, or check the FAQ.", sources: [], link: { title: "Browse the FAQ →", url: "faq.html" } }, false);
        track("chat_question", { sources: (j.sources || []).join(",") || "none" });
      })
      .catch(function () {
        typing.remove();
        pushBot({ answer: "I couldn't reach the helper. Check your connection and try again — or browse the FAQ.", sources: [], link: { title: "Browse the FAQ →", url: "faq.html" } }, false);
      })
      .finally(function () { clearTimeout(timer); busy = false; sendBtn.disabled = false; if (!sheet.hidden) input.focus({ preventScroll: true }); });
  }

  /* ---------- free questions + follow nudge (browser-side, honour system) ---------- */
  const quota = {
    read: function () { try { return JSON.parse(localStorage.getItem(QUOTA) || "{}") || {}; } catch (e) { return {}; } },
    write: function (v) { try { localStorage.setItem(QUOTA, JSON.stringify(v)); } catch (e) { /* private mode: nothing to do */ } },
    today: function () { return new Date().toISOString().slice(0, 10); },
    used: function () { const v = this.read(); return v.day === this.today() ? (v.n || 0) : 0; },
    bump: function () { const v = this.read(); if (v.day !== this.today()) { v.day = this.today(); v.n = 0; } v.n = (v.n || 0) + 1; this.write(v); },
    unlocked: function () { const v = this.read(); return !!v.until && v.until > Date.now(); },
    unlock: function () { const v = this.read(); v.until = Date.now() + UNLOCK_DAYS * 864e5; this.write(v); },
  };
  function showFollowCard() {
    let card = msgs.querySelector(".cb-follow");
    if (!card) {
      card = el("div", "cb-m cb-bot cb-follow");
      card.innerHTML =
        '<div class="cb-bub">' +
          '<p><strong>Enjoying this?</strong> That was today\u2019s ' + FREE_PER_DAY + ' free questions. Follow us and the chat stays open \u2014 no sign-up, we just ask.</p>' +
          '<div class="cb-follow-btns">' +
            '<a class="cb-follow-x" href="' + FOLLOW_LINKS.x + '" target="_blank" rel="noopener">Follow on X</a>' +
            '<a class="cb-follow-yt" href="' + FOLLOW_LINKS.youtube + '" target="_blank" rel="noopener">Subscribe on YouTube</a>' +
          '</div>' +
          '<p class="cb-follow-note">Or come back tomorrow for ' + FREE_PER_DAY + ' more.</p>' +
        '</div>';
      track("chat_follow_card"); ping("card");
      card.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          const platform = a.classList.contains("cb-follow-x") ? "x" : "youtube";
          track("chat_follow_click", { platform: platform }); ping("follow_" + platform);
          track("chat_unlock");
          quota.unlock();
          setTimeout(function () {
            card.remove();
            pushBot({ answer: "Thank you! The chat is yours \u2014 ask away.", sources: [], link: null }, false);
            if (pending) { const q = pending; pending = ""; send(q); }
          }, 400);
        });
      });
      msgs.appendChild(card);
    } else {
      card.classList.remove("cb-nudge"); void card.offsetWidth; card.classList.add("cb-nudge");
    }
    scrollBottom();
  }

  /* ---------- rendering ---------- */
  function pushUser(text) {
    const m = { role: "user", content: text };
    history.push(m); save(); render(m);
    setStarter(false);
  }
  function pushBot(res, remember) {
    const m = { role: "assistant", content: res.answer, sources: res.sources || [], link: res.link || null };
    if (remember) { history.push(m); save(); }
    render(m);
  }
  function render(m) {
    const wrap = el("div", "cb-m " + (m.role === "user" ? "cb-user" : "cb-bot"));
    const bub = el("div", "cb-bub");
    bub.innerHTML = fmt(m.content);
    wrap.appendChild(bub);
    if (m.role !== "user") {
      if (m.sources && m.sources.length) {
        const src = el("div", "cb-src");
        src.appendChild(document.createTextNode("Source: "));
        m.sources.forEach(function (s) {
          if (!SRC_LABEL[s]) return;
          const c = el("span", "cb-chip cb-chip-" + s); c.textContent = SRC_LABEL[s]; src.appendChild(c);
        });
        wrap.appendChild(src);
      }
      if (m.link && m.link.url) {
        const a = el("a", "cb-more", { href: m.link.url });
        a.textContent = m.link.title || "Read more →";
        if (/^https?:\/\//.test(m.link.url) && !/^https?:\/\/(www\.)?yakkamonworld\.com/.test(m.link.url)) { a.target = "_blank"; a.rel = "noopener"; }
        wrap.appendChild(a);
      }
    }
    msgs.appendChild(wrap);
    while (msgs.children.length > 40) msgs.removeChild(msgs.firstChild);
    scrollBottom();
  }
  // plain text in, light markdown out: **bold**, line breaks, simple "- " bullets
  function fmt(s) {
    s = String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    const lines = s.split(/\n/);
    let out = "", inList = false;
    lines.forEach(function (line) {
      const li = line.match(/^\s*[-•]\s+(.*)$/);
      if (li) { if (!inList) { out += "<ul>"; inList = true; } out += "<li>" + li[1] + "</li>"; }
      else { if (inList) { out += "</ul>"; inList = false; } if (line.trim()) out += "<p>" + line + "</p>"; }
    });
    if (inList) out += "</ul>";
    return out;
  }
  function scrollBottom() { msgs.scrollTop = msgs.scrollHeight; }

  /* ---------- keep the conversation while moving between pages ---------- */
  function load() {
    try { const v = JSON.parse(sessionStorage.getItem(STORE) || "[]"); return Array.isArray(v) ? v.slice(-20) : []; } catch (e) { return []; }
  }
  function save() {
    try { sessionStorage.setItem(STORE, JSON.stringify(history.slice(-20))); } catch (e) { /* private mode: fine */ }
  }

  function el(tag, cls, attrs) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
})();
