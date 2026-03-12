(function () {
  'use strict';

  var els = document.querySelectorAll(
    '.reveal, .layout_latest, .layout_latest_compact, .layout_short, .layout_simple'
  );
  if (!els.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Zwei rAF-Zyklen warten: sicherstellt, dass der Browser den
  // initialen opacity:0-Zustand gerendert hat, bevor der Observer
  // für bereits sichtbare Elemente feuert.
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      els.forEach(function (el) {
        observer.observe(el);
      });
    });
  });
}());
