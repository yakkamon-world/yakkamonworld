// LIVE DEPOSIT WEEK INDICATOR
//
// The $FLOWER multiplier steps down every week — 3.0x in the opening week,
// then -0.2x weekly until it rests at 1.0x. Hard-coding "the opening week pays
// 3x" means the site quietly goes wrong every Monday, so this works it out from
// the date instead.
//
// ONE EXCEPTION: depositing was paused during week 2, so the team held week 3
// (24 Aug) at 2.8x instead of dropping to 2.6x. The -0.2x step resumes from
// week 4, which shifts every later week — and the 1.0x floor — one week later
// (floor now from week 12, 26 Oct).
//
// Renders into any element with class .deposit-week.
//
// Week 1 starts 10 Aug 2026 at 02:00 UTC — the official windows run 02:00 UTC
// Monday to 01:59 UTC the next Monday, NOT midnight to midnight. The displayed
// date range is the Monday-to-Sunday span, matching the schedule tables.

const WEEK_ONE_START_UTC = Date.UTC(2026, 7, 10, 2);   // 10 Aug 2026, 02:00 UTC
const START_RATE = 3.0;
const STEP = 0.2;
const FLOOR_RATE = 1.0;
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

(function () {
  "use strict";

  function rateForWeek(week) {
    // Week 3 was held at week 2's 2.8x after the week-2 deposit pause, so from
    // week 3 onward the schedule runs one step behind the original plan.
    var steps = week <= 2 ? week - 1 : week - 2;
    return Math.max(FLOOR_RATE, +(START_RATE - STEP * steps).toFixed(1));
  }

  function fmt(ms) {
    return new Date(ms).toLocaleDateString("en-GB", {
      day: "numeric", month: "short", timeZone: "UTC",
    });
  }

  function render() {
    const nodes = document.querySelectorAll(".deposit-week");
    if (!nodes.length) return;

    const now = Date.now();

    // Before deposits opened — shouldn't happen now, but harmless to handle.
    if (now < WEEK_ONE_START_UTC) {
      nodes.forEach((el) => {
        el.innerHTML = '<strong>Deposits open 10 August.</strong> The opening week pays <strong>3.0&times;</strong>.';
        el.hidden = false;
      });
      return;
    }

    const week = Math.floor((now - WEEK_ONE_START_UTC) / WEEK_MS) + 1;
    const rate = rateForWeek(week);
    const weekStart = WEEK_ONE_START_UTC + (week - 1) * WEEK_MS;
    const weekEnd = weekStart + WEEK_MS - 1;          // next Monday 01:59 UTC
    const shownEnd = weekStart + 6 * 24 * 60 * 60 * 1000;  // the Sunday, for display
    const atFloor = rate <= FLOOR_RATE;
    const nextRate = rateForWeek(week + 1);

    nodes.forEach((el) => {
      el.innerHTML =
        '<span class="dw-tag">LIVE NOW</span>' +
        '<span class="dw-body">Deposit week <strong>' + week + '</strong> &middot; ' +
        fmt(weekStart) + '&ndash;' + fmt(shownEnd) + ' &middot; paying <strong>' +
        rate.toFixed(1) + '&times;</strong>' +
        (atFloor
          ? '. This is the floor &mdash; the rate no longer drops.'
          : '. Drops to <strong>' + nextRate.toFixed(1) + '&times;</strong> on ' + fmt(weekEnd + 1) + '.') +
        '</span>';
      el.hidden = false;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
