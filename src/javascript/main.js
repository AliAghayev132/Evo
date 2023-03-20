import createFooterAnimation from "./features/footer.js";
import createHamburgerSystem from "./features/hamburger.js";
createHamburgerSystem();
createFooterAnimation();

window.onload = () => document.body.classList.remove('preload');

