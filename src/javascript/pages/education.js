//Menu
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



{
    let courses = [
        {
            title: "Front End React",
            content: "Front End Olmaq istəyənlər gələ bilər React"
        },
        {
            title: "Front End Angular",
            content: "Front End Olmaq istəyənlər gələ bilər Angular"

        },
        {
            title: "Front End Vue",
            content: "Front End Olmaq istəyənlər gələ bilər Vue"
        },
        {
            title: "Back End C#",
            content: "Back End Olmaq istəyənlər gələ bilər Vue"
        },
        {
            title: "Back End Java",
            content: "Back End Olmaq istəyənlər gələ bilər Vue"
        },
        {
            title: "Grafik Dizayn",
            content: "Salam Mən Gəldim"
        },
    ]



    const feducation = document.getElementById('feducation');
    const cards = document.querySelector('.education__cards');
    feducation.addEventListener('input', (e) => {
        cards.innerHTML = "";
        for(let i = 0;i<courses.length;++i){
            if(courses[i].title.includes(e.target.value)){
                cards.innerHTML += 
                `
                <div class="education__card">
                <h3 class="education__card__title">
                    ${courses[i].title}
                </h3>
                <p class="education__card__description">
                ${courses[i].content}
                </p>
                <div class="eduication__card__additional">
                    <div class="eduication__card__additional--left">
                        <span>
                            Fərdi
                        </span>
                        <span>
                            300 saat
                        </span>
                        <span>
                            Həftədə 5 dəfə
                        </span>
                    </div>
                    <div class="eduication__card__additional--right">
                        <button class="">
                            <a>Ətraflı</a>
                        </button>
                    </div>
                </div>
            </div>
                
                `
            }
        }
    })
}