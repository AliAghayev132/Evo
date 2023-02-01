{
    const cursor = document.querySelector('.cursor'),
    cursorBorder = document.querySelector('.cursor-border');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    })
}
