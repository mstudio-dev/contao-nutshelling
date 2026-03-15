# Nut Shelling

Contao 5.3 Theme auf Basis von [Nutshell](https://nutshell.erdmann-freunde.de/) (Erdmann & Freunde).

## Stack

| Komponente | Details |
|---|---|
| CMS | Contao 5.3 (Twig + html5 Templates) |
| SCSS-Framework | Nutshell (Erdmann & Freunde) |
| Farbraum | `oklch()` durchgehend |
| Icons | Font Awesome 7 Free (Solid weight 900) |
| Slider | Swiper.js |
| Accordion | handorgel |


---

## Features

### Design & Farben

- CI-Farben vollständig in `oklch()` als CSS Custom Properties (Dunkelblau + Gelb)
- Dark Mode: folgt `prefers-color-scheme`, manuell umschaltbar; Toggle persistiert in `localStorage`, kein Flash beim Laden
- Heading-Underlines: h1 → 3 rem Gold-Bar, h2 → volle Breite

```scss
--color-brand-blue:        oklch(30% 0.09 255)  // Text, Überschriften
--color-brand-blue-light:  oklch(45% 0.10 255)  // Hover
--color-brand-blue-dark:   oklch(20% 0.07 255)  // Active, Header-Top, Overlay
--color-brand-yellow:      oklch(83% 0.17 95)   // Akzent – nur auf dunklem Hintergrund
--color-brand-yellow-dark: oklch(65% 0.15 88)   // Text auf hellem Hintergrund (AA 4.6:1)
```

### Layout & Navigation

- Sticky Header mit Utility-Bar (`#header-top`): Kontaktinfos, FA-Icons, rechtsbündig
- Hauptnavigation Desktop: horizontal, Dropdown Ebene 2 mit CI-Farben
- Hauptnavigation Mobile: Hamburger-Button, Fullscreen-Overlay, Accordion-Submenü
- Pill-Subnav (`#subnav`): horizontale Scroll-Navigation mit automatischen Scroll-Buttons bei Overflow

### Hero & Slider

- Swiper Hero-Slider: CI-Filter-Overlay, H1-Overlay-Artikel über Slider, figcaption-Overlay oben
- Gallery-Swiper: autoplay, loop, `loopAdditionalSlides`, responsive Breakpoints (1 → 2 → N Spalten)

### Galerie & Medien

- Normale Galerie: 1–12 Spalten via `.content-gallery--cols-N`
- Partner-Galerie `.partner.content-gallery`: Grayscale → Farbe on Hover
- Float-Utilities: `.float_left/.right`, Contao-5-API `.media--left/.right`, Clearfix via `flow-root`
- Hover-Zoom auf klickbaren Galeriebildern

### Inhaltselemente

- **Accordion** (handorgel): Chevron-Icon, Border-Radius, flache Contao-5.3+-Struktur und Wrapper-Struktur unterstützt
- **FAQ** (`<details>`): Chevron + Fragezeichen-Icons, smooth open/close via `::details-content` + `@starting-style`
- **Downloads** `.content-downloads / .content-download / ul.enclosure`: Card-Layout, Dateityp-Icons via FA, Dark Mode
- **Card** `.ce_card` / `.content-element-group.card`: weißer Hintergrund, Border-Radius, Box-Shadow, Dark Mode
- **Parallax-Cards**: Sektion mit Parallax-Hintergrundbild (rAF, `prefers-reduced-motion`) und 3-spaltigem Karten-Grid
- **Kontaktkarte** `.ce_contact`: Bild 3:4, figcaption-Overlay, FA-Icons für Telefon/E-Mail
- **Content-Text**: max-width 45 rem, Info-Leisten, Blockquote (gelber Rand), Callouts, Custom-Listen-Marker (blaue Kreise), Description Lists als Grid
- **Newsliste**: Karten-Grid mit Bild-Overlay (Gradient + Uhr-Icon), Box-Shadow, Hover, Dark Mode, scroll-reveal Stagger
- **Ticker** `mod_ticker`: CI-Dunkelblau, Monospace, Uppercase, `+++`-Trenner
- Pagination mit FA-Icons (prev/next/first/last)
- Spacing-Utilities: `.mt-*`, `.mb-*`, `.pt-*`, `.pb-*`

### JavaScript

| Datei | Funktion |
|---|---|
| `theme-toggle.js` | Dark/Light-Toggle, kein Flash beim Laden, `localStorage` |
| `nav-toggle.js` | Hamburger-Nav, Mobile-Accordion-Submenü, Resize-Handler |
| `scroll-reveal.js` | IntersectionObserver, 12 % Threshold, 2-rAF-Delay, `prefers-reduced-motion` |
| `subnav-scroll.js` | Scroll-Buttons für `#subnav`-Overflow, nur wenn nötig |
| `parallax.js` | Parallax-Hintergrund auf `.parallax-cards`, `requestAnimationFrame` |
| `read-more.js` | Ausklappbare `.content-text.collapsible` Elemente mit Verlauf + Toggle |

---

## Dateistruktur

```
files/theme/scss/
├── style.scss                  Hauptdatei (Import-Reihenfolge)
├── _config.scss                Nutshell-Konfiguration
├── _variables.scss             CI-Farben, Dark-Mode-Mixin, Overrides
├── mixins/
│   ├── _general.scss
│   └── _responsive.scss
├── base/
│   ├── _shared.scss            img-Reset, Pagination, Heading-Underlines, Spacing-Utilities
│   ├── _page.scss
│   ├── _fonts.scss             Inter (selbst gehostet)
│   ├── _grid.scss
│   ├── _type.scss
│   ├── _layout.scss            Header, #header-top, Footer, Dark-Mode-Toggle
│   ├── _article.scss           article--full, .col-3/4/6 Grids
│   ├── _animation.scss         .reveal (fade/scale/blur, IntersectionObserver)
│   └── _icons.scss
└── components/
    ├── _slider.scss            Hero-Swiper
    ├── _ticker.scss            mod_ticker
    ├── _navs.scss              Desktop + Mobile Navigation, Subnav
    ├── _media.scss             Galerie, Float-Utilities, Swiper-Galerie
    ├── _news.scss              mod_newslist (alle Layouts + Scroll-Reveal)
    ├── _newsmenu.scss
    ├── _links.scss             Textlinks, Buttons, Card-Hyperlinks
    ├── _contact.scss           ce_contact (Personenkarte)
    ├── _card.scss              .ce_card, .content-element-group.card, .parallax-cards
    ├── _text.scss              Blockquote, Callout, Listen, Description Lists
    ├── _accordion.scss         handorgel
    ├── _faq.scss               mod_faqpage (<details> Akkordeon)
    ├── _downloads.scss         Card-Layout, Dateityp-Icons
    ├── _markdown.scss
    ├── _tables.scss
    ├── _forms.scss
    ├── _newsletter.scss
    ├── _comments.scss
    ├── _events.scss
    ├── _search.scss
    ├── _sitemap.scss
    ├── _logo.scss
    ├── _hero.scss
    ├── _portfolio.scss
    ├── _notes.scss
    └── _login.scss

files/theme/js/
├── theme-toggle.js
├── nav-toggle.js
├── scroll-reveal.js
├── subnav-scroll.js
├── parallax.js
└── read-more.js

templates/
├── mod_article.html.twig               .inside Wrapper für wrapper-max + Padding
├── mod_article.html5                   Fallback
├── mod_faqpage.html.twig               FAQ mit <details>
├── mod_newsmenu.html.twig
├── news_latest_compact.html.twig
└── content_element/gallery/
    └── swiper.html.twig                Gallery-Swiper inkl. JS-Init
```

---

## Architektur

- `mod_article`-Template erzeugt `.inside`-Wrapper → ermöglicht `@include wrapper-max` + Padding
- `article--full > .inside` bekommt `padding-left: 0; padding-right: 0`
- `font-size` nicht auf `#header-top` setzen — `max-width: 66.625em` in `wrapper-max` ist em-relativ
- Dark Mode: Zwei parallele Auslöser für denselben `@mixin theme-dark`:
  - `@media (prefers-color-scheme: dark)` mit `html:not([data-color-scheme="light"])`
  - Manuell via `html[data-color-scheme="dark"]`
- Font Awesome vorkompiliert eingebunden (`all.min.css`), da FA 7.x `@use` verwendet

## Nutshell-Mixins

```scss
@include wrapper-max      // max-width: 66.625em; width: 100%; margin: 0 auto
@include padding-default  // padding-left/right: var(--layout-spacing-sides)

@include media-query(screen-xs-max)  // max-width ~549px
@include media-query(screen-sm)      // min-width 550px
@include media-query(screen-md)      // min-width 768px
@include media-query(screen-lg)      // min-width 1024px
```

