function applyBrandColors() {
  document.documentElement.style.setProperty("--brand-color", CONFIG.brandColor);
  document.documentElement.style.setProperty("--brand-light", CONFIG.brandLight);
  document.documentElement.style.setProperty("--brand-text", CONFIG.brandText);
}

function setPageTitle(pageName) {
  document.title = CONFIG.barName + " — " + pageName;
}

function renderSiteFooter(metaText) {
  document.getElementById("footer-name").textContent = CONFIG.barName;
  document.getElementById("footer-address").textContent = CONFIG.address;

  var instagramHandle = CONFIG.instagram.replace(/^@/, "");
  var socialLinks = [
    {
      icon: "ti-brand-instagram",
      label: CONFIG.instagram,
      href: "https://instagram.com/" + instagramHandle,
    },
    {
      icon: "ti-brand-facebook",
      label: CONFIG.facebook,
      href: "https://facebook.com/" + CONFIG.facebook,
    },
  ];

  document.getElementById("footer-social").innerHTML = socialLinks
    .map(function (link) {
      return (
        '<a href="' +
        link.href +
        '" target="_blank" rel="noopener noreferrer">' +
        '<i class="ti ' +
        link.icon +
        '" aria-hidden="true"></i>' +
        link.label +
        "</a>"
      );
    })
    .join("");

  var metaEl = document.getElementById("footer-meta");
  if (metaEl) {
    if (metaText) {
      metaEl.textContent = metaText;
      metaEl.hidden = false;
    } else {
      metaEl.textContent = "";
      metaEl.hidden = true;
    }
  }
}
