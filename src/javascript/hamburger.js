
{
    let state = true;
    const hambuger__links = document.querySelectorAll('.hamburger__link > a');
    const hambuger__menu = document.querySelector(".hamburger__menu");
    const hambuger__menu__bg = document.querySelector(".hamburger__menu__bg");
    const showHamburgerMenu = state => {
        if (state) {
            hambuger__menu.classList.add('hamburger--animation');
            hambuger__menu__bg.classList.add('hamburger--animation');
            hambuger__menu.classList.remove('hamburger--animation--close');
            hambuger__menu__bg.classList.remove('hamburger--animation--close');
            hambuger__menu__bg.style.animationDelay = ".2s";
            hambuger__menu.style.animationDelay = "";
        } else {
            hambuger__menu.classList.add('hamburger--animation--close');
            hambuger__menu__bg.classList.add('hamburger--animation--close');
            hambuger__menu__bg.style.animationDelay = "";
            hambuger__menu.style.animationDelay = ".2s";
        }
    }
    const showHamburgerLinks = state => {
        if (state) {
            setTimeout(() => {
                for (let i = 0; i < hambuger__links.length; ++i) {
                    setTimeout(
                        () => hambuger__links[i].classList.add('hamburger__link--show')
                        , (i + 1) * 100)
                }
            }, 400)
        } else {
            for (let i = 0; i < hambuger__links.length; ++i) {
                setTimeout(
                    () => hambuger__links[i].classList.remove('hamburger__link--show')
                    , (i + 1) * 100)
            }
        }
    }
    const menu__icon = document.querySelector('.menu__icon');
    menu__icon.addEventListener('click', () => {
        showHamburgerMenu(state);
        showHamburgerLinks(state);
        updateMenuIcon();

    })
    const updateMenuIcon = () => {
        if (state) {
            menu__icon.children[0].style.transform = 'rotate(135deg) translateX(25px)';
            menu__icon.children[2].style.transform = 'rotate(-135deg) translateX(25px)';
            menu__icon.children[1].style.opacity = 0;
            menu__icon.children[0].style.left = "20px";
            menu__icon.children[2].style.left = "20px";
            menu__icon.children[0].style.backgroundColor = "white";
            menu__icon.children[2].style.backgroundColor = "white";
            state = false;
        } else {
            menu__icon.children[0].style.transform = '';
            menu__icon.children[2].style.transform = '';
            menu__icon.children[1].style.opacity = 1;
            menu__icon.children[0].style.left = "0";
            menu__icon.children[2].style.left = "0";
            menu__icon.children[0].style.backgroundColor = "";
            menu__icon.children[2].style.backgroundColor = "";
            state = true;
        }
    }
    function main() {
        showHamburgerMenu(state);
        showHamburgerLinks(state);
        updateMenuIcon();
    }

    window.addEventListener('resize', () => {
        if (state) {
            state = false
            main();
        }
    });
}