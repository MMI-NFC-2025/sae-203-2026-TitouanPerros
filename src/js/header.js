function initMobileMenu() {
  const toggle = document.querySelector("#menu-btn");
  const nav = document.querySelector("#menu");
  const page = document.body;

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.ariaExpanded === "true";
      const isClosed = !isOpen;
      // Mise à jour des attributs ARIA pour accessibilité
      toggle.ariaExpanded = String(isClosed);
      nav.ariaHidden = String(isOpen);
      page.classList.toggle("overflow-hidden", isClosed);
    });
  }
}
// Initialisation au chargement du DOM
initMobileMenu();