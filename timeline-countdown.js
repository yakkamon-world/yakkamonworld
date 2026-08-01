// Live countdown on the pre-registration timeline.
//
// Every date on the timeline is US Eastern Time, so the label and the
// time printed under it always agree. The countdown itself is computed
// from the visitor's own clock and ticks once a second, so it's correct
// wherever in the world they are.

(function () {
  "use strict";

  var MINUTE = 60000, HOUR = 3600000, DAY = 86400000;

  // Always includes seconds so it's visibly counting, never a static string.
  function timeLeft(ms) {
    if (ms <= 0) return null;
    var d = Math.floor(ms / DAY);
    var h = Math.floor((ms % DAY) / HOUR);
    var m = Math.floor((ms % HOUR) / MINUTE);
    var s = Math.floor((ms % MINUTE) / 1000);
    if (d > 0) return d + "d " + h + "h " + m + "m " + s + "s";
    if (h > 0) return h + "h " + m + "m " + s + "s";
    if (m > 0) return m + "m " + s + "s";
    return s + "s";
  }

  // "8:00 PM ET" — the milestone's own moment, in US Eastern.
  function etTime(date) {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric", minute: "2-digit"
      }).format(date) + " ET";
    } catch (e) {
      return "";
    }
  }

  // "Sat, 8:00 PM" in the visitor's own timezone, for the tooltip.
  function localTime(date) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
      }).format(date);
    } catch (e) {
      return date.toLocaleString();
    }
  }

  var timer = null;

  function render() {
    var nodes = document.querySelectorAll(".st-countdown[data-for]");
    if (!nodes.length) return false;
    var now = Date.now();
    var pending = false;

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var when = Date.parse(el.getAttribute("data-for"));
      if (isNaN(when)) continue;
      var date = new Date(when);

      // Stamp the Eastern time under the date label, once.
      var host = el.parentNode;
      var etEl = host ? host.querySelector(".st-et") : null;
      if (etEl && !etEl.textContent) etEl.textContent = etTime(date);

      var diff = when - now;
      var left = timeLeft(diff);

      if (!left) {
        el.textContent = "Unlocked";
        el.className = "st-countdown done";
        el.removeAttribute("title");
      } else {
        pending = true;
        el.textContent = left;
        el.className = diff <= DAY ? "st-countdown soon" : "st-countdown";
        el.setAttribute("title", "Opens " + localTime(date) + " your time");
      }
    }

    // Everything has passed — stop ticking.
    if (!pending && timer) { clearInterval(timer); timer = null; }
    return pending;
  }

  function start() {
    if (render() === false) return;      // no timeline on this page
    timer = setInterval(render, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
