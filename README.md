# [Onyr](https://github.com/0nyr)'s personal website

### Install setup

##### On NixOS

The dev shell is a flake in `nix-dev/` that extends the shared base shell (`/home/onyr/nix-dev-base`) and provides Jekyll 4 with its plugins. Enter it from the repository root, with the `path:` prefix:

```
nix develop path:./nix-dev
```

Then serve the site locally and browse to [http://localhost:4000](http://localhost:4000):

```
jekyll serve --baseurl "" --livereload
```

The 2 commands in 1 line: `nix develop path:./nix-dev -c bash -c 'jekyll serve --baseurl "" --livereload'`.

The deployment workflows do not use Nix. They build with Bundler from the `Gemfile` (the `github-pages` gem, on Ruby 3.1).

##### On other distros

Check: [Requirements and install | Jekyll doc](https://jekyllrb.com/docs/installation/#requirements), then run `bundle install` and `bundle exec jekyll serve`.

### Working on the website.

This website is built using [Jekyll](https://jekyllrb.com/).

All content on the website is written in Markdown or HTML, with a preference for Markdown which is simple. Note that if you need punctually some HTML inside your Markdown file, you can use it directly inside.

For icons, use inline SVG. The site no longer loads a webfont, so the old `nf` NerdFont classes will not render. Prefer small, monochrome SVGs that inherit `currentColor` so they follow the theme; see the GitHub mark in `_layouts/default.html` for an example.

```html
<svg class="footer-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="…"/></svg>
```

##### Cards on posts and projects

The blog board (`/blog/`), the projects board (`/projects/`) and the "Latest writing" strip on the home page all render the same card, `_includes/entry-card.html`. A card reads from front matter only:

+ `summary:` — the one-sentence card blurb. Add it to every post and project. Without it the card falls back to the truncated excerpt, which reads poorly.
+ `thumb:` / `thumb_alt:` — optional 16:9 card image. Posts fall back to their `cover:` (and `cover_alt:`) when no `thumb:` is set, so a post with a hero image gets a card image for free.
+ the meta line is built automatically: `period:` if present (projects), otherwise the date, then the tags.

Watch out for YAML: a `summary` containing a colon followed by a space must be quoted, otherwise the whole front matter fails to parse and the entry silently loses its title and date.

The blog board keeps its filter bar (search, tag chips, year and month). `blog-filter.js` hooks on `#blog-list` and the `blog-item` class the include receives, plus the `data-*` attributes passed to it, so those names must not be renamed.

##### Links on posts and projects

Posts (`_posts/`) and projects (`_projects/`) register their external links the same way: a `links:` list in the front matter, never a hand-written `### Links` section in the body.

```yaml
links:
  - {label: "Source (GitHub)", url: "https://github.com/0nyr/kayros"}
  - {label: "PyPI", url: "https://pypi.org/project/kayros/"}
```

Both layouts render it through the shared `_includes/links-section.html`, which prints the label as the anchor and the raw URL beside it (`.links-block` / `.links-list` / `.link-url` in the stylesheet). The block only appears when `links:` is present, and it always sits at the end of the article. Links that belong inside a sentence stay inline in the body as normal Markdown; the `links:` list is for the reference block.

Body sections therefore start at `##`, since the title is the page `h1` and the rendered Links heading is an `h2`. Do not open a section with `###`, it would sit below the Links block in the hierarchy.



