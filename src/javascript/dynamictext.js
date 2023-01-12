const $ = par => {
    const temp = document.querySelectorAll(par);
    return temp.length === 1 ? temp[0] : temp;
};
const rect = par => par.getBoundingClientRect();

function startDynamicText(par) {
    const dynamic__text = $(par.class);
    const texts = par.texts;
    let wordcount = 0, lettercount = 0, text = "", state = true, countSpace = 0;
    setInterval(() => {
        if (state) {
            if (wordcount === texts.length) {
                wordcount = 0;
                lettercount = 0;
                text = "";
            }
            if (lettercount == texts[wordcount].length) {
                if (countSpace !== 30) {
                    ++countSpace;
                } else {
                    countSpace = 0;
                    lettercount = 0;
                    ++wordcount;
                    state = false;
                }
            }
            else {
                text += texts[wordcount][lettercount++];
                dynamic__text.innerHTML = text + `<span class = "fade__line">|</span>`;
            }
        } else {
            if (text == "") {
                state = true;
            } else {
                text = text.substring(0, text.length - 2);
                dynamic__text.textContent = text + "|";
            }
        }
    }, 100);
}

startDynamicText(
    {
        class: ".home__text",
        texts: ["Həzrəti İlqar", "Time is Passing", "Zort Ali", "The Future is Here"]
    }
)