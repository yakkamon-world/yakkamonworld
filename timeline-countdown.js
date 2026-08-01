// Live countdown under each milestone on the pre-registration timeline.
//
// Every milestone opens at 00:00 UTC on its labelled date. The countdown
// is worked out from the visitor's own clock, so it reads correctly
// wherever they are — no timezone maths on their part.

(function () {
  "use strict";

  var MINUTE = 60000, HOUR = 3600000, DAY = 86400000;

  function timeLeft(ms) {
    if (ms <= 0) return null;
    var d = Math.floor(ms / DAY);
    var h = Math.floor((ms % DAY) / HOUR);
    var m = Math.floor((ms % HOUR) / MINUTE);
    var s = Math.floor((ms % MINUTE) / 1000);
    if (d > 0) return d + "d " + h + "h left";
    if (h > 0) return h + "h " + m + "m left";
    if (m > 0) return m + "m " + s + "s left";
    return s + "s left";
  }

  // "31 Jul, 8:00 PM" in the visitor's own timezone.
  function localLabel(date) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        month: "short", day: "numeric",
        hour: "numeric", minute: "2-digit"
      }).format(date);
    } catch (e) {
      return date.toLocaleString();
    }
  }

  function render() {
    var nodes = document.querySelectorAll(".st-countdown[data-for]");
    if (!nodes.length) return false;
    var now = Date.now();
    var anyPending = false;

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var when = Date.parse(el.getAttribute("data-for"));
      if (isNaN(when)) continue;

      var diff = when - now;
      var left = timeLeft(diff);

      if (!left) {
        el.textContent = "Unlocked";
        el.className = "st-countdown done";
        el.removeAttribute("title");
      } else {
        anyPending = true;
        el.textContent = left;
        el.className = diff <= DAY ? "st-countdown soon" : "st-countdown";
        el.setAttribute("title", "Opens " + localLabel(new Date(when)) + " your time");
      }
    }
    return anyPending;
  }

  function start() {
    if (render() === false) return;
    setInterval(render, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
