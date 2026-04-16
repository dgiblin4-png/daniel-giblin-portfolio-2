const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const projectToggles = document.querySelectorAll(".project-toggle");
const footerYear = document.querySelector("#footer-year");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

projectToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const details = toggle.nextElementSibling;
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const openLabel = toggle.dataset.openLabel || "View details";
    const closeLabel = toggle.dataset.closeLabel || "Hide details";

    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.textContent = isExpanded ? openLabel : closeLabel;

    if (details) {
      details.hidden = isExpanded;
    }
  });
});

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}
