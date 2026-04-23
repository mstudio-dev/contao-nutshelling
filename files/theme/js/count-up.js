(function () {
  'use strict';

  var els = document.querySelectorAll('.count-number[data-to]');
  if (!els.length) return;

  function animateCount(el) {
    var target = parseFloat(el.dataset.to) || 0;
    var duration = parseFloat(el.dataset.speed) || 1500;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out: verlangsamt am Ende
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      els.forEach(function (el) {
        observer.observe(el);
      });
    });
  });
}());
