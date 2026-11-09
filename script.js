// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

function setNav(open) {
  siteNav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.addEventListener("click", () => {
  setNav(navToggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu after choosing a link or pressing Escape
siteNav.addEventListener("click", (e) => {
  if (e.target.closest("a")) setNav(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNav(false);
});

// FAQ: keep one answer open at a time
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("toggle", () => {
    if (!faq.open) return;
    faqs.forEach((other) => {
      if (other !== faq) other.open = false;
    });
  });
});
