{
    let offset_y = 85;
    const scroll = document.querySelector('.scroll'),
        window_height = this.innerHeight,
        content_height = document.body.getBoundingClientRect().height;
    let scale = (content_height - offset_y) / (window_height - offset_y),
        timer = null;
    scroll.style.height = window_height / scale + 'px';
    document.addEventListener('scroll', () => {
        timer && clearTimeout(timer);
        scroll.style.transition = "0"
        scroll.style.opacity = 1;
        scroll.style.top = ((window.scrollY - offset_y) / scale) + offset_y + 'px';
        timer = setTimeout(() => {
            scroll.style.transition = "1s"
            scroll.style.opacity = 0;
        }, 3000)
    })
}
{
    const mouse = document.querySelector('.mouse__down');
    let timeout = setTimeout(
        () => {
            mouse.style.opacity = 1;
        }, 3000
    )
    document.addEventListener('scroll', () => {
        mouse.style.opacity = 0;
        clearTimeout(timeout);
        timeout = setTimeout(
            () => {
                mouse.style.opacity = 1;
            }, 3000)
    })
}