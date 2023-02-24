export default function createCarouselAnimation() {
    const delay = 2000;
    const checkSizes = () => {
        const width = window.innerWidth;
        if (width > 1400) perView = 5;
        else if (width > 1200) perView = 4;
        else if (width > 1000) perView = 3;
        else if (width > 800) perView = 2;
        else perView = 1
        cards.setAttribute('style', `--per-view:${perView}`);
    }
    const scroll = dir => {
        if (dir == "RIGHT") {
            ++currentPos;
            clearTimeout(autoScroll);
        } else if (dir === "LEFT") {
            --currentPos;
            clearTimeout(autoScroll);
        } else {
            ++currentPos;
        }

        if (currentPos > cards.children.length - perView) {
            currentPos = 1;
            cards.style.transition = '';
            cards.style.left = '';
        } else if (currentPos < 0) {
            currentPos = cards.children.length - perView - 1;
            cards.style.transition = '';
            cards.style.left = `-${(cards.children.length - perView) * width}px`;
        }
        width = cards.children[0].offsetWidth + 24;
        cards.style.transition = '.3s';
        cards.style.left = `-${currentPos * width}px`;
        autoScroll = setTimeout(scroll, delay);
    }
    const initCarousel = () => {
        for (let i = 0; i < perView; ++i) {
            cards.insertAdjacentHTML('beforeend', cards.children[i].outerHTML);
        }

    }
    const BTN = {
        left: document.querySelectorAll('.education__button')[0],
        right: document.querySelectorAll('.education__button')[1],
    }, cards = document.querySelector('.education__cards'),
        carousel = document.querySelector('.education__carousel');
    let width = cards.children[0].offsetWidth + 24,
        perView = 5,
        currentPos = 0,
    autoScroll = null;

    cards.setAttribute('style', `--per-view:${perView}`);

    BTN.left.addEventListener('click', () => {
        scroll("LEFT");
    })
    BTN.right.addEventListener('click', () => {
        scroll("RIGHT");
    })
    window.addEventListener('resize', e => {
        checkSizes();
    })
    window.addEventListener('load', e => {
        checkSizes();
        autoScroll = setTimeout(scroll, delay);
    })

    initCarousel();

    {
        let inContent = false;
        document.addEventListener('mousemove', ({ target }) => {
            if (target.classList.contains('education__card') && !inContent) {
                console.log("Hey");
                clearTimeout(autoScroll);
                inContent = true;
            } else if (!target.classList.contains('education__card') && inContent) {
                console.log("Hi");
                autoScroll = setTimeout(scroll, delay);
                inContent = false;
            }
        })
    }
}
