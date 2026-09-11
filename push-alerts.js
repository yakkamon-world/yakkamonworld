// YakkamonWorld push alerts.
// Adds a NEWS ALERTS bell to the masthead's social row on every page, wires it
// to OneSignal web push (desktop + Android), and shows iPhone users the
// Add-to-Home-Screen steps that iOS requires before it will deliver web push.
//
// SETUP: paste your OneSignal App ID (Settings → Keys & IDs) between the
// quotes below. Until a real App ID is pasted this script does nothing at all,
// so the file is safe to deploy first and configure second.
//
// Notifications are SENT automatically by .github/workflows/push-notify.yml
// whenever a new post lands at the top of posts.js.

(function () {
  "use strict";

  var APP_ID = "PASTE-YOUR-ONESIGNAL-APP-ID-HERE";

  // Not configured yet → do nothing, render nothing.
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(APP_ID)) return;

  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var isStandalone = (window.navigator.standalone === true) ||
                     (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
  var iosNeedsInstall = isIOS && !isStandalone;

  // Browsers with no push support at all (and not the fixable iOS case) get no bell.
  if (!iosNeedsInstall && (!("serviceWorker" in navigator) || !("PushManager" in window))) return;

  var BELL_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2v.4A6.5 6.5 0 0 1 18.5 11v3.6l1.6 2.6c.5.8-.1 1.8-1 1.8H4.9c-.9 0-1.5-1-1-1.8l1.6-2.6V11A6.5 6.5 0 0 1 10 4.4V4a2 2 0 0 1 2-2Zm2.8 18a2.9 2.9 0 0 1-5.6 0h5.6Z"/></svg>';

  var btn = null;

  function setLabel(text, on) {
    if (!btn) return;
    var lab = btn.querySelector(".fb-label");
    if (lab) lab.textContent = text;
    btn.classList.toggle("yw-on", !!on);
  }

  function makeBell() {
    var row = document.querySelector(".mh-social");
    if (!row || document.getElementById("yw-alerts")) return;
    btn = document.createElement("button");
    btn.type = "button";
    btn.id = "yw-alerts";
    btn.className = "follow-badge yw-alerts-badge";
    btn.setAttribute("aria-label", "Get a notification when news drops");
    btn.title = "Get a notification when news drops";
    btn.innerHTML = BELL_SVG + '<span class="fb-label">News Alerts</span>';
    row.appendChild(btn);
  }

  /* ---------- iPhone (Safari, not installed): show the install steps ---------- */

  function iosTip() {
    var old = document.querySelector(".yw-tip-scrim");
    if (old) { old.remove(); return; }
    var scrim = document.createElement("div");
    scrim.className = "yw-tip-scrim";
    scrim.innerHTML =
      '<div class="yw-tip" role="dialog" aria-label="Get news alerts on iPhone">' +
        '<button type="button" class="yw-tip-x" aria-label="Close">&times;</button>' +
        '<h3>Get news alerts on iPhone</h3>' +
        '<p>iPhones only deliver website notifications from sites saved to the Home Screen. It takes three taps:</p>' +
        '<ol>' +
          '<li>Tap the <strong>Share</strong> button in Safari (the square with the arrow <svg class="yw-share-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5 8 6.5l1.06 1.06L11.25 5.4V15h1.5V5.4l2.19 2.16L16 6.5l-4-4ZM5 10h4v1.5H6.5v9h11v-9H15V10h4v12H5V10Z"/></svg>).</li>' +
          '<li>Scroll down and tap <strong>Add to Home Screen</strong>, then <strong>Add</strong>.</li>' +
          '<li>Open <strong>YakkamonWorld from the new Home Screen icon</strong> and tap the bell again — then tap <strong>Allow</strong>.</li>' +
        '</ol>' +
        '<p class="yw-tip-note">Needs iOS 16.4 or newer. On desktop and Android the bell works right away, no install needed.</p>' +
      '</div>';
    scrim.addEventListener("click", function (e) {
      if (e.target === scrim || e.target.classList.contains("yw-tip-x")) scrim.remove();
    });
    document.body.appendChild(scrim);
  }

  /* ---------- Everyone else: OneSignal ---------- */

  function paintFromState(OneSignal) {
    try {
      if (Notification.permission === "denied") { setLabel("Alerts Blocked", false); return; }
      var optedIn = OneSignal.User.PushSubscription.optedIn;
      setLabel(optedIn ? "Alerts On \u2713" : "News Alerts", optedIn);
    } catch (e) { /* leave default label */ }
  }

  function startOneSignal() {
    var s = document.createElement("script");
    s.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
    s.defer = true;
    document.head.appendChild(s);

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({ appId: APP_ID });
      paintFromState(OneSignal);
      OneSignal.User.PushSubscription.addEventListener("change", function () {
        paintFromState(OneSignal);
      });
      if (btn) btn.addEventListener("click", async function () {
        try {
          if (Notification.permission === "denied") {
            alert("Notifications are blocked for yakkamonworld.com in your browser settings. Allow them there, then tap the bell again.");
            return;
          }
          if (OneSignal.User.PushSubscription.optedIn) {
            await OneSignal.User.PushSubscription.optOut();
          } else if (Notification.permission === "granted") {
            await OneSignal.User.PushSubscription.optIn();
          } else {
            await OneSignal.Notifications.requestPermission();
          }
          paintFromState(OneSignal);
        } catch (e) { /* user dismissed the prompt — fine */ }
      });
    });
  }

  function boot() {
    makeBell();
    if (!btn) return;
    if (iosNeedsInstall) {
      btn.addEventListener("click", iosTip);
    } else {
      startOneSignal();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
