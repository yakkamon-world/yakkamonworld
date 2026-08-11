// GOOGLE ANALYTICS (GA4) — CONSENT-GATED
//
// Loaded from <head> on every page as a single line:
//   <script src="analytics.js"></script>
//
// Two things this does beyond Google's copy-paste snippet:
//
// 1. The measurement ID lives here, once, instead of in 32 HTML files.
//
// 2. Nothing loads until the visitor agrees. GA4 sets cookies, and under GDPR
//    that needs consent before it happens — not after. So on a first visit no
//    request is made to Google at all; a small bar asks, and the answer is
//    remembered. Decline and analytics never loads on any page.
//
// Deliberately no "essential cookies" hand-waving: this site sets nothing at
// all except the consent choice itself, so there is nothing else to justify.

const GA_MEASUREMENT_ID = "G-44CF80PEHS";
const CONSENT_KEY = "yw-analytics-consent";   // "granted" | "denied"

(function () {
  "use strict";

  // Don't measure local previews or Cloudflare preview deployments — otherwise
  // your own testing shows up in the reports as real traffic.
  const host = location.hostname;
  if (
    host === "localhost" || host === "127.0.0.1" || host === "" ||
    host.endsWith(".pages.dev") || host.endsWith(".workers.dev")
  ) return;

  function read() {
    try { return localStorage.getItem(CONSENT_KEY); } catch { return null; }
  }
  function write(v) {
    try { localStorage.setItem(CONSENT_KEY, v); } catch { /* private mode */ }
  }

  function loadAnalytics() {
    if (window.__ywAnalyticsLoaded) return;
    window.__ywAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
  }

  function banner() {
    const bar = document.createElement("div");
    bar.className = "consent-bar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Analytics consent");
    bar.innerHTML =
      '<p>We\u2019d like to count visits with Google Analytics so we know which guides are worth writing. ' +
      'No ads, no tracking you across other sites, nothing sold. ' +
      '<a href="privacy.html">What we collect &rarr;</a></p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="pixel-btn sky consent-yes">ALLOW</button>' +
      '<button type="button" class="consent-no">No thanks</button>' +
      "</div>";
    document.body.appendChild(bar);

    bar.querySelector(".consent-yes").addEventListener("click", function () {
      write("granted"); bar.remove(); loadAnalytics();
    });
    bar.querySelector(".consent-no").addEventListener("click", function () {
      write("denied"); bar.remove();
    });
  }

  function start() {
    const choice = read();
    if (choice === "granted") { loadAnalytics(); return; }
    if (choice === "denied") return;
    banner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

// Lets the privacy page offer a "change your mind" control.
window.ywSetAnalyticsConsent = function (granted) {
  try { localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied"); } catch {}
  if (granted) location.reload();
};
