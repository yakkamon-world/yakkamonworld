// SUNFLOWER LAND REFERRAL BANNER
//
// The banner markup lives here and nowhere else. Every page loads this file, so
// changing the artwork, the reward list or the link is a one-file edit — not 37.
//
// Placement:
//   - If the page contains <div class="sfl-slot"></div>, it renders there.
//     (index.html uses this to sit the banner above the pre-registration ticket.)
//   - Otherwise it renders directly above the footer, so it never pushes an
//     article headline down the page.
//
// To retire the banner: delete the two lines below and it disappears everywhere.

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

  const wrap = document.createElement("aside");
  wrap.className = "sfl-banner";
  wrap.innerHTML =
    '<a class="sfl-link" href="' + b.href + '" target="_blank" rel="noopener sponsored">' +
      '<img src="' + b.img + '" width="' + b.width + '" height="' + b.height + '"' +
        ' loading="lazy" decoding="async" alt="' + b.alt + '">' +
      '<span class="sfl-cta">' + b.cta + "</span>" +
    "</a>";

  const slot = document.querySelector(".sfl-slot");
  if (slot) {
    slot.appendChild(wrap);
    return;
  }

  const footer = document.querySelector("footer");
  if (footer && footer.parentNode) {
    wrap.classList.add("sfl-banner-tail");
    footer.parentNode.insertBefore(wrap, footer);
  }
})();
