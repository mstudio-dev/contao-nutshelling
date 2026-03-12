(function () {
  'use strict';

  var KEY = 'ms-color-scheme';
  var html = document.documentElement;

  // Sofort anwenden – minimiert Flash beim Laden
  var stored = localStorage.getItem(KEY);
  if (stored) html.setAttribute('data-color-scheme', stored);

  function getScheme() {
    return html.getAttribute('data-color-scheme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function updateButton() {
    var dark = getScheme() === 'dark';
    btn.setAttribute('aria-label', dark ? 'Zum hellen Design wechseln' : 'Zum dunklen Design wechseln');
    btn.setAttribute('aria-pressed', String(dark));
  }

  function toggle() {
    var next = getScheme() === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-color-scheme', next);
    localStorage.setItem(KEY, next);
    btn.classList.add('is-spinning');
    updateButton();
  }

  var container = document.querySelector('#header-top .inside');
  if (!container) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';
  container.appendChild(btn);

  btn.addEventListener('click', toggle);
  btn.addEventListener('animationend', function () {
    btn.classList.remove('is-spinning');
  });

  // System-Präferenz-Änderung live mitverfolgen (falls kein Override gesetzt)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (!localStorage.getItem(KEY)) updateButton();
  });

  updateButton();
}());
