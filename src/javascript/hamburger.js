import { $ } from "./custom.js";
export default function createHamburgerSystem() {



}

{
    let state = true;
    const hambuger__links = $('.hamburger__link > a');
    const hambuger__menu = $(".hamburger__menu");
    const hambuger__menu__bg = $(".hamburger__menu__bg");
    const showHamburgerMenu = state => {
        if (state) {
            hambuger__menu.setAttribute('class', 'hamburger__menu hamburger--animation');
            hambuger__menu__bg.setAttribute('class', 'hamburger__menu__bg hamburger--animation');

            hambuger__menu.style.animationDelay = "";
            hambuger__menu__bg.style.animationDelay = ".2s";
        } else {
            hambuger__menu.setAttribute('class', 'hamburger__menu hamburger--animation--close');
            hambuger__menu__bg.setAttribute('class', 'hamburger__menu__bg hamburger--animation--close');

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
    const menu__icon = $('.menu__icon');
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
        hambuger__menu.setAttribute('class', 'hamburger__menu');
        hambuger__menu__bg.setAttribute('class', 'hamburger__menu__bg');
        hambuger__menu__bg.style.animationDuration = '0';
        hambuger__menu.style.animationDuration = '0';
        menu__icon.children[0].style.transform = '';
        menu__icon.children[2].style.transform = '';
        menu__icon.children[1].style.opacity = 1;
        menu__icon.children[0].style.left = "0";
        menu__icon.children[2].style.left = "0";
        menu__icon.children[0].style.backgroundColor = "";
        menu__icon.children[2].style.backgroundColor = "";
        state = true;
        for (let i = 0; i < hambuger__links.length; ++i) {
            hambuger__links[i].classList.remove('hamburger__link--show')
        }
    });
}