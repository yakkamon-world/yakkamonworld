// Renders the FAQ from FAQ_CATEGORIES (faq.js) as topic pills + collapsed
// accordions, so nobody has to scroll one endless page. Three behaviours:
//   1. Pills switch topics - only one topic's questions are on screen at once.
//   2. The filter box searches question AND answer text across every topic.
//   3. Deep links: faq.html#<category-id> opens a topic, faq.html#<question-id>
//      opens the topic, expands that question and scrolls to it. Category ids
//      are the old section anchors, so pre-redesign links still land.
(function () {
  "use strict";
  if (typeof FAQ_CATEGORIES === "undefined") return;

  function $(id) { return document.getElementById(id); }
  function strip(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  var pillsEl = $("faq-pills"), contentEl = $("faq-content"),
      searchEl = $("faq-search"), metaEl = $("faq-meta"), expandEl = $("faq-expand");
  if (!pillsEl || !contentEl) return;

  // Pre-compute lowercase searchable text per question.
  var total = 0;
  FAQ_CATEGORIES.forEach(function (c) {
    c.items.forEach(function (it) {
      it._hay = (strip(it.q) + " " + strip(it.a)).toLowerCase();
      total++;
    });
  });
  if (metaEl) metaEl.textContent = total + " answers across " + FAQ_CATEGORIES.length + " topics \u2014 pick a topic, or just start typing.";

  var active = FAQ_CATEGORIES[0].id;

  function catById(id) {
    for (var i = 0; i < FAQ_CATEGORIES.length; i++) {
      if (FAQ_CATEGORIES[i].id === id) return FAQ_CATEGORIES[i];
    }
    return null;
  }
  function catOfQuestion(qid) {
    for (var i = 0; i < FAQ_CATEGORIES.length; i++) {
      var items = FAQ_CATEGORIES[i].items;
      for (var j = 0; j < items.length; j++) {
        if (items[j].id === qid) return FAQ_CATEGORIES[i];
      }
    }
    return null;
  }

  function itemHTML(it, catName) {
    return '<details class="faq-item" id="' + it.id + '"><summary>' +
      (catName ? '<span class="faq-chip">' + catName + "</span>" : "") +
      "<span class=\"faq-qtext\">" + it.q + "</span></summary>" +
      '<div class="faq-a">' + it.a + "</div></details>";
  }

  function drawPills() {
    pillsEl.innerHTML = FAQ_CATEGORIES.map(function (c) {
      return '<button class="faq-pill" type="button" data-cat="' + c.id +
        '" aria-pressed="' + (c.id === active ? "true" : "false") + '">' + c.name + "</button>";
    }).join("");
  }

  function showCategory(id, openQ) {
    var c = catById(id);
    if (!c) return;
    active = id;
    drawPills();
    var html = '<section class="faq-pane prereg-section"><h2>' + c.name + "</h2>";
    if (c.intro) html += c.intro;
    if (c.rich) html += c.rich;
    html += c.items.map(function (it) { return itemHTML(it); }).join("");
    html += "</section>";
    contentEl.innerHTML = html;
    if (expandEl) { expandEl.hidden = !c.items.length; expandEl.textContent = "Expand all"; }
    if (openQ) {
      var d = $(openQ);
      if (d) {
        d.open = true;
        d.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Switching topics via pills shouldn't leave you stranded mid-page.
      var head = $("faq-top");
      if (head && head.getBoundingClientRect().top < 0) head.scrollIntoView();
    }
  }

  function showResults(q) {
    var tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = [];
    FAQ_CATEGORIES.forEach(function (c) {
      c.items.forEach(function (it) {
        var ok = tokens.every(function (t) { return it._hay.indexOf(t) !== -1; });
        if (ok) hits.push({ it: it, cat: c.name });
      });
    });
    drawPillsNone();
    var html = '<section class="faq-pane prereg-section"><h2>' +
      (hits.length ? hits.length + (hits.length === 1 ? " match" : " matches") : "No matches") + "</h2>";
    if (!hits.length) {
      html += "<p>Nothing found for that \u2014 try fewer or different words, or pick a topic above.</p>";
    }
    html += hits.map(function (h) { return itemHTML(h.it, h.cat); }).join("");
    html += "</section>";
    contentEl.innerHTML = html;
    if (expandEl) expandEl.hidden = true;
    // A handful of results might as well arrive open.
    if (hits.length && hits.length <= 3) {
      var all = contentEl.querySelectorAll("details");
      for (var i = 0; i < all.length; i++) all[i].open = true;
    }
  }
  function drawPillsNone() {
    var b = pillsEl.querySelectorAll(".faq-pill");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-pressed", "false");
  }

  pillsEl.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-cat]");
    if (!b) return;
    if (searchEl) searchEl.value = "";
    var id = b.getAttribute("data-cat");
    if (history.replaceState) history.replaceState(null, "", "#" + id);
    showCategory(id);
  });

  if (searchEl) searchEl.addEventListener("input", function () {
    var q = searchEl.value.trim();
    if (q.length >= 2) showResults(q);
    else showCategory(active);
  });

  if (expandEl) expandEl.addEventListener("click", function () {
    var open = expandEl.textContent === "Expand all";
    var all = contentEl.querySelectorAll("details");
    for (var i = 0; i < all.length; i++) all[i].open = open;
    expandEl.textContent = open ? "Collapse all" : "Expand all";
  });

  function fromHash() {
    var h = (location.hash || "").replace("#", "");
    if (!h) { showCategory(active); return; }
    if (catById(h)) { showCategory(h); return; }
    var c = catOfQuestion(h);
    if (c) { showCategory(c.id, h); return; }
    showCategory(active);
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();
