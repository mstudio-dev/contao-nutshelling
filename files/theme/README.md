# Theme – MS Landau an der Isar

Custom-Theme für die Contao-5-Website der Mittelschule Landau an der Isar.
Basiert auf dem Nutshell-Framework (Erdmann & Freunde).

## Struktur

```
files/theme/
├── fonts/          Inter (300–700, woff2)
├── img/            Theme-Grafiken
├── js/             JavaScript (IIFE, kein Build-Schritt)
│   ├── nav-toggle.js       Hamburger-Menü + Mobile-Submenü
│   ├── gallery-swiper.js   Swiper-Galerie (Autoplay, Pagination)
│   ├── parallax.js         Parallax-Scrolleffekt (.parallax-cards)
│   ├── scroll-reveal.js    Scroll-Reveal (IntersectionObserver)
│   └── theme-toggle.js     Dark-Mode-Toggler (Button + localStorage)
└── scss/
    ├── style.scss          Haupt-Einstiegspunkt
    ├── _variables.scss     CI-Farben, Nutshell-Overrides
    ├── _config.scss        Nutshell-Konfiguration
    ├── base/
    │   ├── _animation.scss Scroll-Reveal-Klassen
    │   ├── _article.scss   article--full, article--white, col-4/col-6-6-Grid
    │   ├── _fonts.scss     @font-face Inter
    │   ├── _layout.scss    Header (sticky), #header-top, Footer
    │   ├── _shared.scss    #main-Abstände, h1/h2-Styling, Pagination, Spacing-Utilities
    │   └── _type.scss      Typografie
    └── components/
        ├── _accordion.scss content-accordion (handorgel), Chevron-Icon, Dark Mode
        ├── _contact.scss   ce_contact Profilkarte, FA-Icons, Dark Mode
        ├── _card.scss      ce_card Inhaltskarte + .parallax-cards Sektion
        ├── _downloads.scss content-downloads (Liste) + content-download (Einzelelement), FA-Icons
        ├── _events.scss    mod_eventlist (layout_upcoming Terminliste)
        ├── _faq.scss       module-faqpage Akkordeon (details/summary, FA-Icons)
        ├── _links.scss     content-hyperlink (allgemein, .btn, .card), Externe Links
        ├── _logo.scss      Logo-Hover-Effekt
        ├── _login.scss     mod_login.login Formular-Karte, FA-Icons, Dark Mode
        ├── _media.scss     Gallery Swiper, Float-Utilities, figcaption
        ├── _navs.scss      Haupt- und Mobile-Navigation, #subnav
        ├── _news.scss      Newsliste (Cards, Layouts, Scroll-Reveal, Featured-Badge)
        ├── _newsmenu.scss  mod_newsmenu als Dropdown
        ├── _slider.scss    Hero Swiper
        ├── _tables.scss    .content-table (Basis + thead) + .definition-Variante
        ├── _text.scss      .content-text, .content-list, .callout, .content-description-list
        └── _ticker.scss    mod_ticker
```

## CI-Farben

| Variable | Wert | Verwendung |
|---|---|---|
| `--color-brand-blue` | `oklch(30% 0.09 255)` | Header, Navigation |
| `--color-brand-blue-light` | `oklch(45% 0.10 255)` | Hover, Akzente |
| `--color-brand-blue-dark` | `oklch(20% 0.07 255)` | #header-top, Footer |
| `--color-brand-yellow` | `oklch(83% 0.17 95)` | Akzentlinie, Focus-Outline |

Alle Farben in `oklch()`, Dark-Mode-Overrides in `_variables.scss`.

## JavaScript einbinden

Alle JS-Dateien müssen im Contao-Seitenlayout unter **„JavaScript-Dateien"** eingetragen sein:

```
files/theme/js/nav-toggle.js
files/theme/js/gallery-swiper.js
files/theme/js/parallax.js
files/theme/js/scroll-reveal.js
files/theme/js/theme-toggle.js
```

## Artikel-Grid (CSS-Klasse am Artikel)

| Klasse | Spalten | Beschreibung |
|---|---|---|
| `col-6-6` | 2 (50/50) | Inhaltselemente nebeneinander |
| `col-4` | 3 (33/33/33) | Inhaltselemente in drei Spalten |

Innerhalb eines Grid-Artikels kann ein Element die volle Breite einnehmen:
CSS-Klasse `full-width` am Inhaltselement eintragen.

Mobile (< 550px): immer 1 Spalte.

## Artikel-Modifier (CSS-Klasse am Artikel)

| Klasse | Effekt |
|---|---|
| `article--full` | Kein seitliches Padding (für Vollbreite-Sektionen) |
| `article--white` | Weißer Hintergrund (Dark Mode: dunkelblau-grau) |

## Inhaltselement-Modifier

| Klasse | Element | Effekt |
|---|---|---|
| `callout` | content-text | Callout-Box mit blauem Akzentbalken und ℹ-Icon |
| `definition` | content-table | Definition-Listen-Optik (Begriff + Beschreibung, borderless) |
| `table` | content-description-list | Zweispaltig tabellarisch (dt links, dd rechts) |
| `headline--line` | content-headline | Gelbe Unterstrich-Linie unter Überschrift |
| `btn` | content-hyperlink | Link als CI-Blau-Button mit Chevron-Icon |
| `card` | content-hyperlink | Link als Karte (Überschrift + Fließtext + optionales Bild) |
| `full-width` | beliebig (in col-4/col-6-6 oder card-Grid) | Element spannt alle Grid-Spalten |

## Spacing-Utilities (CSS-Klasse am Element)

Basieren auf den `--base-spacing-unit-*` Variablen:

| Klasse | Wert |
|---|---|
| `mt-0` / `mb-0` | `0` |
| `mt-xs` / `mb-xs` | `0.25rem` |
| `mt-sm` / `mb-sm` | `0.5rem` |
| `mt-md` / `mb-md` | `1rem` |
| `mt-lg` / `mb-lg` | `2rem` |
| `mt-xl` / `mb-xl` | `4rem` |
| `pt-0` / `pb-0` | `0` |
| `pt-sm` / `pb-sm` | `0.5rem` |
| `pt-md` / `pb-md` | `1rem` |
| `pt-lg` / `pb-lg` | `2rem` |

## Scroll-Reveal

CSS-Klassen im Contao-Backend am Element oder Artikel eintragen:

| Klasse | Effekt |
|---|---|
| `reveal reveal--fade-up` | von unten einblenden |
| `reveal reveal--fade-down` | von oben einblenden |
| `reveal reveal--fade-left` | von rechts einblenden |
| `reveal reveal--fade-right` | von links einblenden |
| `reveal reveal--scale` | heranzoomen |
| `+ reveal--delay-1` | +0.1s Verzögerung |
| `+ reveal--delay-2` | +0.2s Verzögerung |
| `+ reveal--delay-3` | +0.35s Verzögerung |

News-Karten (`.layout_*`) werden automatisch eingeblendet — kein CSS-Feld nötig.

`prefers-reduced-motion` wird respektiert – bei aktivierter Einstellung keine Animation.

## Dark Mode

Der Dark-Mode-Toggler wird automatisch per JavaScript in `#header-top` eingefügt.

- **Automatisch**: System-Präferenz (`prefers-color-scheme: dark`) wird respektiert
- **Manuell**: Button schaltet zwischen hell und dunkel um, Wahl wird in `localStorage` gespeichert
- **Icon**: Font Awesome – Mond (dunkel) / Sonne (hell), mit Dreh-Animation beim Wechsel
- **Attribut**: `<html data-color-scheme="dark|light">` steuert das aktive Theme

Die Dark-Mode-Variablen sind als `@mixin theme-dark` in `_variables.scss` definiert und
gelten sowohl für `@media (prefers-color-scheme: dark)` als auch für manuellen Override.

## Externe Links

Externe Links (`target="_blank"`) werden automatisch gekennzeichnet:
- **Bildlinks**: halbtransparentes Overlay mit FA-Icon on Hover
- **Textlinks** (in `#main`): kleines Extern-Icon nachgestellt

## content-hyperlink

Allgemeines Styling für das Contao Hyperlink-Element (`ce_hyperlink`):

- **Standard**: Textlink in CI-Blau mit `fa-chevron-right` nach dem Text
- **`.btn`**: Gefüllter CI-Blau-Button mit Chevron-Icon, Hover hellt auf
- **`.card`**: Karte mit Link als Überschrift (fett, CI-Blau), Fließtext darunter (klein, grau).
  Bei externen Links erscheint ein kleines `fa-arrow-up-right-from-square`-Icon.
  Automatisches Grid: Wenn ein Artikel (ohne `col-4`/`col-6-6`) mehrere `.card`-Hyperlinks enthält,
  werden sie per `:has()` automatisch in `auto-fill`-Grid arrangiert.

## ce_card

Das Contao-Inhaltselement `ce_card` erscheint als weiße Karte:
- `card__image`: Bild randlos (negativer Margin), abgerundete obere Ecken
- `card__headline`: CI-Blau, kein gelbes Underline
- `card__description`: normaler Fließtext
- Dark Mode unterstützt

## mod_faqpage

FAQ-Modul als CSS-only-Akkordeon (natives `<details>/<summary>`):
- Template-Override: `templates/mod_faqpage.html.twig` (Twig) + `templates/mod_faqpage.html5` (PHP-Fallback)
- `fa-circle-question`-Icon vor der Frage, `fa-chevron-down` rechts (dreht beim Öffnen)
- `.info`: sehr klein, grau, unauffällig
- `.toplink`: kleiner Link rechts mit `fa-chevron-up`, kein Button

## mod_eventlist

`layout_upcoming`-Termine als zweispaltiges Grid:
- Datum (auto-Breite, tabular-nums) | Titel (1fr)
- `.current`-Einträge: Datum und Titel fett hervorgehoben
- Mobile (< 550px): gestapelt

## content-table

Basis-Styling für alle `.content-table`-Elemente:
- Zebra-Streifen, Trennlinien, `th[scope="row"]` CI-Blau
- `thead`: CI-Dunkelblau-Hintergrund, weißer Text, Uppercase
- Dark Mode: dunklere Streifen
- `.definition`-Variante: borderless, erste Spalte als Begriff

## Twig-Template-Overrides

| Template | Pfad | Beschreibung |
|---|---|---|
| `mod_faqpage` | `templates/mod_faqpage.html.twig` | FAQ als details/summary Akkordeon |
| `mod_newsmenu` | `templates/mod_newsmenu.html.twig` | Newsarchiv als details/summary Dropdown |
| `mod_article` | `templates/mod_article.html.twig` | Artikel mit .inside-Wrapper |
| `gallery/swiper` | `templates/content_element/gallery/swiper.html.twig` | Swiper-Galerie-Variante |

## ce_contact (Kontaktelement)

Das Contao-Kontaktelement (`ce_contact`) erscheint als Profilkarte:
- Bild oben (volle Breite, natürliche Höhe — geeignet für Hochkant-Portraits)
- Name (groß, CI-Blau), Position (grau, Trennlinie)
- Telefon mit `fa-phone`-Icon, E-Mail mit `fa-envelope`-Icon
- Dark Mode: dunkelblau-grauer Kartenhintergrund

## mod_login

`mod_login.login` erscheint als moderne Formular-Karte:
- Weißer Hintergrund, blauer Akzentbalken oben, Box-Shadow
- FA-Icons vor Labels: `fa-user` (Benutzername), `fa-lock` (Passwort)
- Focus-Ring: gelb, Submit-Button: volle Breite, CI-Blau
- Dark Mode: dunkelblauer Kartenhintergrund

## content-accordion (handorgel)

Akkordeon-Element mit CI-Styling:
- Button CI-Blau, `fa-chevron-down` rechts (dreht bei öffnen)
- Alle Heading-Level (h2/h3/h4) gleich groß
- Focus-Outline: gelb
- Content-Hintergrund: leichtes Blau-Grau
- Dark Mode unterstützt

## SCSS kompilieren

Das kompilierte CSS liegt unter `assets/css/files_theme_scss_style.scss.css` und wird von
Contao automatisch über den Asset-Compiler erzeugt (kein manueller Build-Schritt nötig).

## Fonts

Inter via `@font-face` aus `files/theme/fonts/` – kein Google Fonts, DSGVO-konform.
Gewichte: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).
