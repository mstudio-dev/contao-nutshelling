(function () {
  'use strict';

  document.querySelectorAll('.content-text.collapsible').forEach(function (el) {
    if (el.scrollHeight <= el.clientHeight + 2) return; // Inhalt passt rein – kein Button

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'read-more-btn';
    btn.textContent = 'Weiterlesen';
    el.after(btn);

    btn.addEventListener('click', function () {
      var expanded = el.classList.toggle('is-expanded');
      btn.classList.toggle('is-expanded', expanded);
      btn.textContent = expanded ? 'Weniger anzeigen' : 'Weiterlesen';

      if (expanded) {
        // Exakte Zielhöhe setzen → max-height kann smooth animieren
        el.style.maxHeight = el.scrollHeight + 'px';
      } else {
        // Erst auf aktuelle Höhe fixieren (verhindert Sprung), dann zurück
        el.style.maxHeight = el.scrollHeight + 'px';
        requestAnimationFrame(function () {
          el.style.maxHeight = '12rem';
        });
      }
    });
  });
}());
