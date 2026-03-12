(function () {
  'use strict';

  const header = document.getElementById('header');
  const nav    = document.getElementById('main-nav');
  if (!nav || !header) return;

  // --- Hamburger-Button ins DOM einfügen ---
  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'main-nav');
  btn.setAttribute('aria-label', 'Navigation öffnen');
  btn.innerHTML = '<span class="nav-toggle__bar"></span>'.repeat(3);
  nav.parentNode.insertBefore(btn, nav);

  // --- Hilfsfunktion: Nav-Position aktualisieren (für position:fixed) ---
  function updateNavTop() {
    const bottom = header.getBoundingClientRect().bottom;
    nav.style.top = bottom + 'px';
    nav.style.setProperty('--nav-top', bottom + 'px');
  }

  // --- Hauptmenü öffnen/schließen ---
  function openNav() {
    updateNavTop();
    nav.classList.add('nav-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Navigation schließen');
  }

  function closeNav() {
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Navigation öffnen');
    // Alle offenen Untermenüs schließen
    nav.querySelectorAll('.submenu-open').forEach(function (li) {
      li.classList.remove('submenu-open');
    });
  }

  btn.addEventListener('click', function () {
    nav.classList.contains('nav-open') ? closeNav() : openNav();
  });

  // Schließen bei Klick außerhalb
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-open') &&
        !nav.contains(e.target) &&
        !btn.contains(e.target)) {
      closeNav();
    }
  });

  // Position bei Resize/Scroll aktualisieren
  window.addEventListener('resize', function () {
    if (nav.classList.contains('nav-open')) updateNavTop();
  });

  // --- Level-2-Toggle auf Mobile ---
  nav.querySelectorAll('.level_1 > li > a[aria-haspopup], .level_1 > li > strong[aria-haspopup]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Nur auf Touch/Mobile aktiv (Button sichtbar = mobile Breakpoint)
      if (btn.offsetParent === null) return; // Button unsichtbar = Desktop

      const li = link.parentElement;
      const isOpen = li.classList.contains('submenu-open');

      // Accordion: alle anderen schließen
      nav.querySelectorAll('.submenu-open').forEach(function (other) {
        if (other !== li) other.classList.remove('submenu-open');
      });

      if (isOpen) {
        // Zweiter Tap: Untermenü schließen, Link navigiert normal
        li.classList.remove('submenu-open');
      } else {
        // Erster Tap: Untermenü öffnen, Navigation verhindern
        e.preventDefault();
        li.classList.add('submenu-open');
      }
    });
  });
})();
