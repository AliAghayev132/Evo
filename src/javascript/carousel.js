const EDUCATION = {
    cards: document.querySelector('.education__cards'),
    carousel: document.querySelector('.education__carousel')
}
let perView = 5;
EDUCATION.cards.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; ++i) {
    EDUCATION.cards.insertAdjacentHTML('beforeend', EDUCATION.cards.children[i].outerHTML);
}
updateCarousel();
{
    let width = EDUCATION.cards.children[0].offsetWidth + 24;
    let index = 0;
    let autoscroll = setInterval(scroll, 1000);
    function scroll() {
        index++;
        if (index == EDUCATION.cards.children.length - perView + 1) {
            clearInterval(autoscroll);
            index = 1;
            EDUCATION.cards.style.transition = '0s';
            EDUCATION.cards.style.left = '0';
            autoscroll = setInterval(scroll, 2500);
        }
        width = EDUCATION.cards.children[0].offsetWidth + 24;
        EDUCATION.cards.style.left = `-${index * width}px`;
        EDUCATION.cards.style.transition = '.3s';
    }
    window.addEventListener('resize', () => {
        updateCarousel();
        resetCarousel()
    })
    function resetCarousel(){
        index = 0;
        clearInterval(autoscroll);
        autoscroll = setInterval(scroll, 2500);
        width = EDUCATION.cards.children[0].offsetWidth + 24;
        EDUCATION.cards.style.left = `-${index * width}px`;
        EDUCATION.cards.style.transition = '.3s';
    }

    window.addEventListener('load', () => {
        scroll();
    })
}



function updateCarousel(){
    if(window.innerWidth > 1400){
        perView = 5;
    }else if(window.innerWidth > 1000){
        perView = 4;
    }else if(window.innerWidth > 800){
        perView = 3;
    }else if(window.innerWidth > 600){
        perView = 2;
    }else{
        perView = 1;
    }
    EDUCATION.cards.style.setProperty('--per-view', perView);
}