function slider() {
    const swiper = new Swiper('.swiper', {
        speed: 3000,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const swiperBtn = document.querySelector('.swiper-btn');

    swiperBtn.addEventListener('click', function () {
        if (swiper.autoplay.running) {
            swiper.autoplay.stop();
            swiperBtn.classList.add('active');
        } else {
            swiper.autoplay.start();
            swiperBtn.classList.remove('active');
        }
    });

}

document.addEventListener('DOMContentLoaded', slider);