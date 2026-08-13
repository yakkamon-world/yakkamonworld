// SUNFLOWER LAND REFERRAL BANNER
//
// The banner markup lives here and nowhere else. Every page loads this file, so
// changing the artwork, the reward list or the link is a one-file edit — not 37.
//
// Placement:
//   - If the page contains <div class="sfl-slot"></div>, it renders there.
//     (index.html uses this to sit it BELOW the ticket and countdown, so the
//     Yakkamon sign-up stays the first call to action on the page.)
//   - Otherwise it renders directly above the footer, so it never pushes an
//     article headline down the page.
//   - Pages in SKIP never show it: privacy.html because a page about our
//     disclosure practices shouldn't carry an undisclosed promo, and
//     pre-registration.html because a reader there is mid-task on the one
//     thing we most want them to finish.
//
// To retire the banner: delete the two lines below and it disappears everywhere.

const SFL_BANNER_SKIP = ["privacy.html", "pre-registration.html"];

const SFL_BANNER = {
  href: "https://sunflower-land.com/play/?ref=Airerdem",
  img: "sunflower-banner.webp",
  width: 1600,
  height: 192,
  alt:
    "Sunflower Land \u2014 same team as Yakkamon. Sign up free and start with " +
    "3 Time Warp Totems, 20 Gems and 25 Love Charms.",
  cta: "Claim my rewards \u2192",
};

(function () {
  "use strict";

  const b = SFL_BANNER;
  if (!b || !b.href) return;

  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (SFL_BANNER_SKIP.indexOf(page) !== -1) return;

  const wrap = document.createElement("aside");
  wrap.className = "sfl-banner";
  wrap.innerHTML =
    '<a class="sfl-link" href="' + b.href + '" target="_blank" rel="noopener sponsored">' +
      '<img src="' + b.img + '" width="' + b.width + '" height="' + b.height + '"' +
        ' loading="lazy" decoding="async" alt="' + b.alt + '">' +
      '<span class="sfl-cta">' + b.cta + "</span>" +
    "</a>";

  const slot = document.querySelector(".sfl-slot");
  let placement = null;

  if (slot) {
    slot.appendChild(wrap);
    placement = "home_below_ticket";
  } else {
    const footer = document.querySelector("footer");
    if (footer && footer.parentNode) {
      wrap.classList.add("sfl-banner-tail");
      footer.parentNode.insertBefore(wrap, footer);
      placement = "above_footer";
    }
  }
  if (!placement) return;

  // Tell us which placement actually earns clicks. Only fires once analytics
  // consent has been granted — gtag simply won't exist otherwise.
  const link = wrap.querySelector(".sfl-link");
  if (link) {
    link.addEventListener("click", function () {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "sfl_banner_click", {
        page_path: location.pathname,
        placement: placement,
      });
    });
  }
})();
