(function () {
  'use strict';

  function initGallerySwipers() {
    document.querySelectorAll('.gallery-swiper').forEach(function (el) {
      if (el.swiper) return; // bereits initialisiert

      var slides = parseInt(el.dataset.slides, 10) || 4;

      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 12,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev')
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: Math.min(2, slides),
            spaceBetween: 16
          },
          1024: {
            slidesPerView: slides,
            spaceBetween: 20
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallerySwipers);
  } else {
    initGallerySwipers();
  }
}());
