import { $ } from '../custom.js';
const rows = $('.about__row');

document.addEventListener('scroll', () => {
    for (let i = 0; i < rows.length; ++i) {
        console.log(`row[${i}] =  ${rows[i].getBoundingClientRect().y}`);
        if(rows[i].getBoundingClientRect().y < rows[i].getBoundingClientRect().height && rows[i].getBoundingClientRect().y > 0){
            rows[i].style.opacity = 1;
        }else{
            rows[i].style.opacity = 0;
        }
    }
})