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