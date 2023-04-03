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
    let selectedCatagory = "";
    let courses = [
        {
            title: "Front End React",
            content: "Front End Olmaq istəyənlər gələ bilər React",
            keywords: [
                'frontend', 'front', 'veb', 'web', 'veb proqramlaşdırma', 'kodlaşdırma', 'react', 'javascript', 'sayt'
            ],
            type: [
                'veb', 'react'
            ]
        },
        {
            title: "Back End C#",
            content: "Back End Olmaq istəyənlər gələ bilər Vue",
            keywords: [
                'backend', 'back end', 'back', 'veb', 'web', 'veb proqramlaşdırma', 'kodlaşdırma', 'c#', 'sayt'
            ],
            type: [
                'veb', 'c#'
            ]
        },
        {
            title: "Back End Java",
            content: "Back End Olmaq istəyənlər gələ bilər Vue",
            keywords: [
                'backend', 'back end', 'back', 'veb', 'web', 'veb proqramlaşdırma', 'kodlaşdırma', 'java', 'sayt'
            ],
            type: [
                'veb', 'java'
            ]
        },
    ]
    const checkKeyWords = (key, keywords) => {
        for (let i of keywords)
            if (i.includes(key))
                return true;
        return false;
    }
    const feducation = document.getElementById('feducation');
    const cards = document.querySelector('.education__cards');
    const inputContainer = document.querySelector('.education__input__container');
    feducation.addEventListener('input', e => {
        cards.innerHTML = "";
        refrestCards(e.target.value);
    })
    function refrestCards(value) {
        cards.innerHTML = '';
        for (let i = 0; i < courses.length; ++i) {
            console.log(selectedCatagory);
            if (
                (courses[i].title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                    ||
                    checkKeyWords(value.toLocaleLowerCase(), courses[i].keywords))
                &&
                (selectedCatagory !== "" ? courses[i].type.includes(selectedCatagory) : true)
            ) {
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
    }
    document.addEventListener('click', ({ target }) => {
        if (target.getAttribute('data-button') === 'catagory__button') {
            if (document.querySelector('.selected__catagory'))
                document.querySelector('.selected__catagory').remove();
            selectedCatagory = target.getAttribute('data-catagory');
            inputContainer.innerHTML +=
                `
            <span class="selected__catagory">
                ${selectedCatagory}
                <button class="selected__catagory__remove">
                    <i class="fa-solid fa-xmark" style="color: #000000;"></i>
                </button>
            </span>
            `
            refrestCards(feducation.value);
        } else if (target.classList.contains('selected__catagory__remove')) {
            document.querySelector('.selected__catagory').remove();
            selectedCatagory = "";
            refrestCards(feducation.value);

        }
    })
}





