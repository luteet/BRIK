/* $(function() {

    

}); */

/* document.querySelector('.header__video').addEventListener('ended', function() {
    console.log('end');
}); */

const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('.burger, .header__nav, body'),
    burger = document.querySelector('.burger'),
    header = document.querySelector('.header');

    let checkSlide = false;
function slideFunc(elem) {

    if(checkSlide == false) {
        checkSlide = true;

        let listItem = document.querySelectorAll('.services__block--item');

        listItem.forEach(element => {
            
            if(element.classList.contains('_active')) {
                element.classList.remove('_active');
                slideUp(element.querySelector('.services__block--item-list'), 500);
            }
        });

        slideToggle(elem.parentNode.querySelector('.services__block--item-list'), 500);

        setTimeout(function() {
            checkSlide = false;
        },500)

        elem.parentNode.classList.add('_active')
    }

}

body.addEventListener('click', function (e) {

    // Меню в шапке
    if (e.target.classList.contains('burger') || e.target.parentNode.classList.contains('burger')) {
        menu.forEach(elem => {
            elem.classList.toggle('_active')
        })
    }
    if(e.target.classList.contains('services__block--item-title') || e.target.parentNode.classList.contains('services__block--item')) {
        if(e.target.parentNode.classList.contains('services__block--item') && window.innerWidth < 992) {
            let parent = e.target.parentNode;
            if(!parent.classList.contains('_active')) {
                slideFunc(e.target);
            }
        }
        /* if(e.target.parentNode.classList.contains('services__block--item') && e.target.parentNode.classList.contains('_active')) {
            slideFunc(e.target);
        } */
        
    }

})



let achievementsSlider, mobSliderCheck = false,
    clientsSlider;

function resize() {
    let windowSize = window.innerWidth;

    if(windowSize <= 992 && !mobSliderCheck) {
        mobSliderCheck = true;
        achievementsSlider = new Swiper('.achievements__slider', {
    
            slidesPerView: 1,
            spaceBetween: 10,
        
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        })
        clientsSlider = new Swiper('.clients__slider', {
    
            //loop: true,
            slidesPerView: 3,
            spaceBetween: 10,

            grid: {
                rows: 2,
            },
        
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        })
        //mobSlider(true);
    } else if(windowSize >= 992 && mobSliderCheck) {
        mobSliderCheck = false;
        achievementsSlider.destroy(true, true);
        clientsSlider.destroy(true, true)
    }
}

resize();

window.onresize = resize;

















/* // Анимация {

wow = new WOW({
mobile:       false,
})
wow.init();

// } */
