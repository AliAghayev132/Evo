// #region Input
{
    const numberInput = document.querySelector('#fnumber');
    const numberInputParent = numberInput.parentNode;
    numberInput.addEventListener('focus', () => {
        numberInputParent.classList.add('form__focus');
    })
    numberInput.addEventListener('blur', () => {
        numberInputParent.classList.remove('form__focus');
    })
}
// #endregion
// #region
{
    let footerPosY = null;
    let height = window.innerHeight;
    const nav = document.querySelector('nav');
    document.addEventListener('scroll', () => {
        footerPosY = document.querySelector('footer').getBoundingClientRect().y + window.scrollY;
        if (footerPosY < window.scrollY + height - 100) {
            nav.classList.add('nav--close')
        }else{
            nav.classList.remove('nav--close')
        }
    })
}
// #endregion