/* ============================================================
   Igreja Presbiteriana Central de São Sebastião do Paraíso
   Lightweight interactions: mobile menu + current year
   ============================================================ */

(function () {
  "use strict";

  // ---- Mobile navigation toggle ----
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  function closeNav() {
    if (!navToggle || !primaryNav) return;
    primaryNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu de navegação");
  }

  function openNav() {
    if (!navToggle || !primaryNav) return;
    primaryNav.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Fechar menu de navegação");
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.contains("open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close the menu when a navigation link is clicked (mobile UX)
    primaryNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeNav();
      }
    });

    // Close on Escape for keyboard users
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });
  }

  // ---- Current year in footer ----
  var yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
