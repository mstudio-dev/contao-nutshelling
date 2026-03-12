(function () {
  'use strict';

  var subnav = document.getElementById('subnav');
  if (!subnav) return;

  var ul = subnav.querySelector('ul.level_1');
  if (!ul) return;

  var inside = subnav.querySelector('.inside');
  if (!inside) return;

  if (!(ul.scrollWidth > ul.clientWidth + 4)) return;

  var btnLeft = document.createElement('button');
  btnLeft.className = 'subnav-scroll-btn subnav-scroll-btn--left';
  btnLeft.setAttribute('aria-label', 'Zurück scrollen');
  btnLeft.setAttribute('type', 'button');
  inside.appendChild(btnLeft);

  var btnRight = document.createElement('button');
  btnRight.className = 'subnav-scroll-btn subnav-scroll-btn--right';
  btnRight.setAttribute('aria-label', 'Weiter scrollen');
  btnRight.setAttribute('type', 'button');
  inside.appendChild(btnRight);

  function update() {
    btnLeft.hidden  = ul.scrollLeft <= 4;
    btnRight.hidden = ul.scrollLeft + ul.clientWidth >= ul.scrollWidth - 8;
  }

  btnLeft.addEventListener('click', function () {
    ul.scrollBy({ left: -180, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', function () {
    ul.scrollBy({ left: 180, behavior: 'smooth' });
  });

  ul.addEventListener('scroll', update, { passive: true });
  update();
}());
