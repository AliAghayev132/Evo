document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('vacancy__list__element')) {
        const index = target.getAttribute('data-element');
        const element = document.querySelector(`[data-more="${index}"]`);
        element.classList.toggle('list__element__more--open');
    }
})