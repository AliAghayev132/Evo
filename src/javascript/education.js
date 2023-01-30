{
    const menu = document.querySelector('.education__list'),
        btn = document.querySelector('.education__hamburger');
    btn.addEventListener('click', () => {
        if (menu.classList.contains('d-block')) {
            menu.classList.remove('d-block');
            btn.innerHTML = 'Katogoriya seç <i class="fa-solid fa-caret-down"></i>';
            btn.setAttribute('style', "");
            btn.classList.remove('education__hamburger__close');
        } else {
            menu.classList.add('d-block');
            btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            btn.classList.add('education__hamburger__close');
        }
    })

    window.addEventListener('resize', () => {
        menu.classList.remove('d-block');
        btn.innerHTML = 'Katogoriya seç <i class="fa-solid fa-caret-down"></i>';
        btn.setAttribute('style', "");
        btn.classList.remove('education__hamburger__close');
    })
}
