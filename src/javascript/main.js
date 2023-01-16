import updateLangue from "./language.js";
import startDynamicText from './dynamictext.js';
import createCircleSystem from "./circle.js";
import createHamburgerSystem from "./hamburger.js";
// #region Language`
{
    const btn = document.querySelector('.language');
    let state = "EN";
    btn.addEventListener('click', () => {
        updateLangue(state);
        state = "AZ";
        btn.innerHTML = state;
    })
}
// #endregion
startDynamicText(
    {
        className: ".home__text",
        texts: ["Time is Passing", "The Future is Here"]
    }
)
createCircleSystem()

createHamburgerSystem();