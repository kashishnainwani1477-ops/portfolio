(function () {
  const nav = document.getElementById("primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  const yearEl = document.getElementById("copyright-year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    const label = toggle.querySelector(".visually-hidden");

    const setOpen = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
      if (label) {
        label.textContent = open ? "Close menu" : "Open menu";
      }
    };

    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }
})();
