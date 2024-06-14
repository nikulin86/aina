import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

{/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js">

</script> */}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    parallax: true,
    speed: 1000,
    effect: 'fade',
    autoplay: {
        delay: 1500,
    },


    keyboard: {
        enabled: true
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});



// burger
const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger__menu');
const burgerClose = document.querySelector('.burger__close');
const burgerList = document.querySelectorAll('.burger__menu-list');




burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger__show');
    // burgerList.classList.add('list__show');
    burgerList.forEach(list => list.classList.add('list__show'));
    console.log(1223)
    document.body.style.overflowY = 'hidden';
});

burgerClose.addEventListener('click', function () {
    burgerMenu.classList.remove('burger__show');
    burgerList.forEach(list => list.classList.remove('list__show'));
    document.body.style.overflowY = 'visible';
});
// burgerList.addEventListener('click', function () {
//     burgerMenu.classList.remove('burger__show');

//     document.body.style.overflowY = 'visible';
// });
burgerList.forEach(function (btn) {
    btn.addEventListener('click', function () {
        burgerMenu.classList.remove('burger__show');
        document.body.style.overflowY = 'visible';
    });

});






// burgerLInks.addEventListener('click', function () {
//     burgerMenu.classList.remove('burger__show')
// })


// up
const buttonUp = document.querySelector('.content__button');


buttonUp.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

// скрывает и показывает кнопку вверх
function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        buttonUp.classList.add("show")
    } else {
        buttonUp.classList.remove("show")
    }
};


function goTop() {
    event.preventDefault();
    window.scrollTo(0, 0)
    // if (window.pageXOffset > 0) {
    //     window.scrollBy(0, -75);
    //     setTimeout(goTop, 0);
    // }
}



// анимация при скролле
// настройки
let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}




// функции обратного вызова
const header = document.querySelectorAll('header')

let callback = function (entries, observer) {
    entries.forEach(entry => {
        // если элемнет является наблюдаемым
        if (entry.isIntersecting) {
            console.log('find', entry)
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active')
        }
    })
}

// наблюдатель
let observer = new IntersectionObserver(callback, options);

// оределяем элемент за которым наблюдаем
let targets = document.querySelectorAll('.content__item');
targets.forEach(target => {
    observer.observe(target)
});


// let observerB = new IntersectionObserver(callback, options);
// let targetsB = document.querySelectorAll('.content__button');
// targetsB.forEach(target => {
//     observer.observe(target)
// });




// accordion


document.querySelectorAll('.price__button').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('list__item--active')) {
            parent.classList.remove('list__item--active')
        } else {
            document
                .querySelectorAll('.list__item')
                .forEach((child) => child.classList.remove('list__item--active'));

            parent.classList.add('list__item--active')
        }
    });
});

// шапка
let lastScrollTop = 0;

const headerTop = document.getElementById('header');
console.log(headerTop)
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        headerTop.style.top = "-100px";
    } else {
        headerTop.style.top = "0";
    }

    lastScrollTop = scrollTop;
});



// content навигация якорь
let navLInks = document.querySelectorAll('.header__nav-link');
// let burgerLinks = document.querySelectorAll('.header__nav-link');

let sections = document.querySelectorAll('.section');

let currentSec = '';
windows.addEventListener('scroll', () => {
    sections.forEach(sec => {
        if (window.scrollY >= (sec.offsetTop - sec.clientHeight / 2)) {
            currentSec = sec.id;
        }
    });

    navLInks.forEach(nav => {
        if (nav.href.includes(currentSec)) {
            document.querySelector('.acc').classList.remove('acc');
            nav.classList.add('acc')
        }
    });
    // burgerLinks.forEach(nav => {
    //     if (nav.href.includes(currentSec)) {
    //         document.querySelector('.acc').classList.remove('acc');
    //         nav.classList.add('acc')
    //     }
    // });
});





// up


// let sectionsS = document.querySelectorAll('.section');

// let currentSecS = '';
// windows.addEventListener('scroll', () => {
//     sectionsS.forEach(sec => {
//         if (window.scrollY >= (sec.offsetTop - sec.clientHeight / 2)) {
//             currentSecS = sec.id;
//         }
//     });

//     burgerLInks.forEach(nav => {
//         if (nav.href.includes(currentSecS)) {
//             document.querySelector('.acc').classList.remove('acc');
//             nav.classList.add('acc')
//         }
//     });
// });