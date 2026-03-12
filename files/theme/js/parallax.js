(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var sections = document.querySelectorAll('.parallax-cards');
  if (!sections.length) return;

  var ticking = false;

  function update() {
    var windowCenterY = window.innerHeight / 2;
    sections.forEach(function (section) {
      var bg = section.querySelector('.parallax-cards__bg');
      if (!bg) return;
      var rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // Offset = 0 wenn Sektion-Mitte im Viewport-Zentrum — begrenzt Bewegungsbereich
      var sectionCenterY = rect.top + section.offsetHeight / 2;
      var offset = (sectionCenterY - windowCenterY) * 0.2;
      bg.style.transform = 'translateY(' + offset + 'px)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}());
