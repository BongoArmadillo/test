# Lost Ark Mechaniki – GitHub Pages z MkDocs# Lost Ark Mechaniki – GitHub Pages z MkDocs



## Jak uruchomić lokalnie## Jak uruchomić lokalnie



1. Zainstaluj MkDocs i motyw Material:1. Zainstaluj MkDocs i motyw Material:



```bash```bash

pip install mkdocs-materialpip install mkdocs-material

``````



2. Uruchom lokalny serwer podglądu:2. Uruchom lokalny serwer podglądu:



```bash```bash

mkdocs servemkdocs serve

``````



Strona będzie dostępna pod adresem http://127.0.0.1:8000Strona będzie dostępna pod adresem http://127.0.0.1:8000



## Jak opublikować na GitHub Pages## Jak opublikować na GitHub Pages



1. Upewnij się, że repozytorium jest na GitHubie.1. Upewnij się, że repozytorium jest na GitHubie.

2. W pliku `mkdocs.yml` zmień `site_url` na swój adres (np. `https://twoj-login.github.io/twoj-repozytorium/`).2. W pliku `mkdocs.yml` zmień `site_url` na swój adres (np. `https://twoj-login.github.io/twoj-repozytorium/`).

3. Wykonaj polecenie:3. Wykonaj polecenie:



```bash```bash

mkdocs gh-deploymkdocs gh-deploy

``````



To automatycznie zbuduje stronę i opublikuje ją na GitHub Pages (gałąź `gh-pages`).To automatycznie zbuduje stronę i opublikuje ją na GitHub Pages (gałąź `gh-pages`).



------



Menu po lewej stronie edytujesz w pliku `mkdocs.yml` (sekcja `nav`). Treści edytujesz w plikach Markdown w katalogu `docs/`.Menu po lewej stronie edytujesz w pliku `mkdocs.yml` (sekcja `nav`). Treści edytujesz w plikach Markdown w katalogu `docs/`.



Więcej o motywie Material: https://squidfunk.github.io/mkdocs-material/Więcej o motywie Material: https://squidfunk.github.io/mkdocs-material/

# test