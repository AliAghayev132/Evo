import { $ } from "../custom.js";
const startDynamicText = par => {
    const dynamic__text = $(par.className),
        texts = par.texts;
    let wordcount = 0, lettercount = 0, text = "", state = true, countSpace = 0;
    setInterval(() => {
        if (state) {
            wordcount === texts.length && (
                wordcount = 0,
                lettercount = 0,
                text = ""
            )
            if (lettercount == texts[wordcount].length) {
                countSpace !== 30 ? ++countSpace : (
                    countSpace = 0,
                    lettercount = 0,
                    ++wordcount,
                    state = false
                )
            }
            else {
                text += texts[wordcount][lettercount++];
                dynamic__text.innerHTML = text + `<span class = "fade__line">|</span>`;
            }
        } else {
            text == "" ? state = true :
                (
                    text = text.substring(0, text.length - 1),
                    dynamic__text.textContent = text + "|"
                )
        }
    }, 60);
}
export default startDynamicText;