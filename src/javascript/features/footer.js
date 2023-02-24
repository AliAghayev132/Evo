export default function createFooterAnimation() {
    let footerPosY = null;
    let height = window.innerHeight;
    const nav = document.querySelector('nav');
    document.addEventListener('scroll', () => {
        footerPosY = document.querySelector('footer').getBoundingClientRect().y + window.scrollY;
        if (footerPosY < window.scrollY + height - 100) {
            nav.classList.add('nav--close')
        } else {
            nav.classList.remove('nav--close')
        }
    })
}