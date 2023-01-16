{
    const scroll = document.querySelector('.scroll');
    const window_height = this.innerHeight;
    const content_height = document.body.getBoundingClientRect().height;
    const offset_y = 85;
    let size = content_height / window_height;
    size = window_height / size;
    scroll.style.height = size - offset_y + 'px';
    const rect = scroll.getBoundingClientRect();
    let timer = null;
    document.addEventListener('scroll', e => {
        timer && clearTimeout(timer);
        scroll.style.transition = "0"
        scroll.style.opacity = 1;
        let temp = window_height / (window_height - offset_y - rect.height);
        scroll.style.top = window.scrollY / temp + offset_y + 'px';
        timer = setTimeout(() => {
            fadeScroll();
        }, 3000)
    })

    function fadeScroll() {
        scroll.style.transition = "1s"
        scroll.style.opacity = 0;
    }
}