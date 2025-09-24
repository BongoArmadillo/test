# Lost Ark Mechaniki – GitHub Pages z MkDocs

## Jak uruchomić lokalnie

1. Zainstaluj MkDocs i motyw Material:

```bash
pip install mkdocs-material
```

2. Uruchom lokalny serwer podglądu:

```bash
mkdocs serve
```

Strona będzie dostępna pod adresem http://127.0.0.1:8000

## Jak opublikować na GitHub Pages

1. Upewnij się, że repozytorium jest na GitHubie.
2. W pliku `mkdocs.yml` zmień `site_url` na swój adres (np. `https://twoj-login.github.io/twoj-repozytorium/`).
3. Wykonaj polecenie:

```bash
mkdocs gh-deploy
```

To automatycznie zbuduje stronę i opublikuje ją na GitHub Pages (gałąź `gh-pages`).

---

Menu po lewej stronie edytujesz w pliku `mkdocs.yml` (sekcja `nav`). Treści edytujesz w plikach Markdown w katalogu `docs/`.

Więcej o motywie Material: https://squidfunk.github.io/mkdocs-material/
# test