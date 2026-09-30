# kuvvius.github.io

Personal homepage of Jiawei Gu. Built by GitHub Pages with Jekyll from the `master` branch.

## Update content

All content lives in `_data/`. Edit the YAML and push; no HTML changes needed.

| File | What it holds |
|---|---|
| `profile.yml` | name, role, motto, photo, bio, social links |
| `news.yml` | news items, newest first (the first 5 show, the rest fold under "More news") |
| `publications.yml` | all papers in display order; `selected: 1-4` puts a paper in Selected Publications |
| `talks.yml` | talk cards in the carousel |
| `awards.yml` | awards; `note` is the percentage shown after the name |
| `service.yml` | reviewing and other service |
| `link_labels.yml` | display names for paper link keys (`pdf` shows as `[Paper]`) |

A publication entry looks like this:

```yaml
- title: 'Paper Title: Subtitle'
  url: https://arxiv.org/abs/xxxx.xxxxx
  authors: Jiawei Gu*, Coauthor A*, Coauthor B
  badges:
  - ICLR 2026
  image: /assets/paper_thumb.png
  selected: 1                      # optional
  feature_image: /assets/big.jpg   # optional, used in Selected
  label: 🔥 Newest                 # optional, overlay on the Selected card
  tldr: One sentence summary.      # optional
  links:
    pdf: https://arxiv.org/pdf/xxxx.xxxxx
    code: https://github.com/...
```

## Layout and style

- `_layouts/home.html` and `_includes/*.html`: page structure
- `assets/css/site.css`: all styles; colors are variables in `:root`
- `assets/js/talks.js`: talks carousel
- `assets/fonts/chillkai-name.woff2`: ChillKai subset for the Chinese name (SIL OFL, license alongside)

## Preview locally

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

The pre-redesign site is kept at tag `archive/original-2026-09`; an edited version of that layout is on branch `archive/classic-edit`.
