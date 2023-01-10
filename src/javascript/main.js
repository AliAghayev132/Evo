import updateLangue from "./language.js";
{
    const btn = document.querySelector('.language');
    let state = "EN";
    btn.addEventListener('click', () => {
        updateLangue(state);
        state = "AZ";
        btn.innerHTML = state;
    })
}