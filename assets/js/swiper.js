
const swiper = new Swiper('.convert-swiper', {
    loop: true,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },

});

const swiperAssistant = new Swiper('.assistant-swiper', {
    loop: true,
    slidesPerView: 3,


    pagination: {
        el: '.swiper-pagination',
    },


    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        567: {
            slidesPerView: 1,
            spaceBetween: 10

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20

        },
        1200: {
            slidesPerView: 3,
        },
    }

});
const swiperReviews = new Swiper('.reviews-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,


    pagination: {
        el: '.swiper-pagination',
    },


    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10

        },
        900: {
            slidesPerView: 3,
            spaceBetween: 10

        },
        1200: {
            slidesPerView: 3,
        },
    }

});

