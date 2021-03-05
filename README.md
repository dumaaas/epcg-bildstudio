# 🔌 epcg-bildstudio 

Staticna veb stranica izradjena upotrebom TailwindCSS framework-a + jQuery + HTML.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## ⚡Kako pokrenuti projekat a da Vas ne fisne struja ?

1. Nakon sto ste pristupili ovom repository-u, potrebno je kliknuti zeleno dugme na kojem pise 'Code'. Nakon toga ce se otvoriti meni gdje treba da preuzmete zipovani projekat. 
2. Kada se zavrsi preuzimanje, potrebno je extract-ovati projekat na lokaciji po Vasem izboru. (Za prikaz projekta nije potrebno da extract-ujete sve direktorijume, pa mozete extract-ovati samo direktorijum 'public').
3. Na kraju je potrebno otvoriti direktorijum public i u njemu pronaci index.html fajl nakon cijeg pokretanja mozete pogledati trenutno stanje projekta 😐.
4. ✨Cestitam. Ovaj put ste izbjegli struju. 😄

## Struktura projekta

* 📄 *.gitignore* - fajl koji sluzi ignorisanje nepotrebnih direktorijuma prilikom commita. (u ovom slucaju node_modules)
* 📄 *README.MD* - fajl u kojem se nalazi opis projekta
* 📄 *package.json* - fajl u kojem se nalazi neophodni dependency-i za rad projekta, kao i konfiguracija skripte koju pokrecemo za primjenu TailwindCSS izmjena
* 📄 *tailwind.config.js* - fajl u kojem se nalaze sva neophodna custom konfiguracija (fontovi, spacings, boje, slike, sirine, lineHeight, letterSpacing...)
* 📂 *src* - direktorijum u kojem se nalazi 📄style.css fajl koji se pise u TailwindCSS-u, koji se nakon izvrsavanja skripte prevodi u cisti CSS kod (public/style.css)
* 📂 *public* - direktorijum u kojem se nalaze svi stilovi, skripte, slike, fontovi nepohodni za rad projekta
  * 📄 *index.html* - fajl u kojem se kodira kostur projekta, pokrece se za prikaz projekta
  * 📂 *img* - direktorijum sa slikama
  * 📂 *fonts* - direktorijum sa fontovima
  * 📂 *style* - direktorijum sa stilovima (📄style.css - custom stil, 📄animate.css - stil za animacije, 📄owl.carousel.css - stil za slidere) 
  * 📂 *js* - direktorijum sa skriptama ( 📄app.js - custom skripta, 📄jquery.js - skripta neophodna za koriscenje jquery-a, 📄owl.carousel.js - skripta za slidere, 📄wow.min.js - skripta za animacije)


## 📝 Tekst editor

[Visual Studio Code](https://code.visualstudio.com/download)

## 📌 VSC ekstenzije 

* [Headwind](https://github.com/heybourn/headwind) - ekstenzija koja omogucava sortiranje TailwindCSS klasa 
* [TailwindCSS Intellisense](https://github.com/tailwindlabs/tailwindcss-intellisense) - ekstenzija za prepoznavanje TailwindCSS klasa tokom kucanja
* [Live Server](https://github.com/ritwickdey/vscode-live-server) - ektenzija za pokretanje projekta na live serveru u lokalu
* [JS-CSS-HTML-formatter](https://github.com/Lonefy/vscode-JS-CSS-HTML-formatter) - ekstenzija za formiranje JS, HTML i CSS koda

## 🚀 Tech/framework 

* TailwindCSS
* HTML
* jQuery

## 📚 Biblioteke

* [Animate.css](https://github.com/animate-css/animate.css) - biblioteka koja nudi niz gotovih animacija
* [WOW.JS](https://github.com/matthieua/WOW) - biblioteka koja se koristi u kombinaciji sa animate.css bibliotekom i omogucava manipulisanje animacijama
* [OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2) - biblioteka za laku i brzu implementaciju slider-a sa ogromnim brojem mogucnosti
