import createFooterAnimation from "./features/footer.js";
import createScrollAnimation from "./features/scroll.js";
import createHamburgerSystem from "./features/hamburger.js";
createHamburgerSystem();
createFooterAnimation();
createScrollAnimation();

window.onload = () => document.body.classList.remove('preload');