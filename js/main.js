

const body = document.querySelector('body');


// Выпадающий список
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

    // Запуск выпадающого списка
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
    
    // Запуск скролла к секциям
    if(e.target.classList.contains('_btn-to-scroll') || e.target.closest('._btn-to-scroll')) {
        
        let section = document.querySelector(e.target.getAttribute('href'));

        if(e.target.closest('._btn-to-scroll')) {
            section = document.querySelector(e.target.closest('._btn-to-scroll').getAttribute('href'));
        }
        
        
        if(section) {
            e.preventDefault();
            window.scroll({
                left: 0, 
                top: section.offsetTop, 
                behavior: 'smooth'
            })
            
        }
    
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
