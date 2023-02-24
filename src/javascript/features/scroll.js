export default function createScrollAnimation() {
    let offset_y = 102;
    const scroll = document.querySelector('.scroll'),
        window_height = window.innerHeight,
        content_height = document.body.getBoundingClientRect().height;
    let scale = (content_height - offset_y) / (window_height - offset_y),
        timer = null;
    scroll.style.height = window_height / scale + 'px';
    document.addEventListener('scroll', () => {
        let temp = ((window.scrollY - offset_y) / scale);
        timer && clearTimeout(timer);
        scroll.style.transition = "0"
        scroll.style.opacity = 1;
        scroll.style.top = (temp > 0 ? temp : 0) + offset_y + 'px';
        timer = setTimeout(() => {
            scroll.style.transition = "1s"
            scroll.style.opacity = 0;
        }, 3000)
    })
}



