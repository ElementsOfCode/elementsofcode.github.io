# Elements of Code

Working notes in Computer Science, one book at a time. Live at <https://elementsofcode.github.io/>.

## How it is built

- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
- Built to be light on slow connections: system fonts only (`font: false`), KaTeX self-hosted in `docs/assets/katex/` and loaded only on pages with math, no analytics or trackers, no third-party requests.
- New chapter notes start from `templates/note-template.md` (six parts plus a status badge).

## Run it locally

```sh
pip install -r requirements.txt
mkdocs serve
```
