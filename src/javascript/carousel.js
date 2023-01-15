const cards = document.querySelector('.education__cards').children;
const height = cards[0].getBoundingClientRect().height;
const width = cards[0].getBoundingClientRect().width;
const contentWidth = document.querySelector('.education__carousel').getBoundingClientRect().width;
const perView = 5;
const gap = 20;

for (let i = 0; i < cards.length; ++i) {
    cards[i].style.left = width * i + i * gap + 'px';
}