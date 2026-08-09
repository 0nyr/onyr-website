# [Onyr](https://github.com/0nyr)'s personal website

### Install setup

##### Initial setup on NixOs
>Now, this should work directly using `nix develop`, the following describes the full initial setup.

1. Install [prerequisites](https://jekyllrb.com/docs/installation/other-linux/): Ruby, and Jekyll. If using NixOs, just run `nix develop`.
2. Install Jekyll and Bundler gem: `gem install jekyll bundler`
3. Create a new Jekyll site using `jekyll new INSAlgo`
4. On NixOs, no need to `cd` into the new directory to serve it. Just run `bundle exec jekyll serve`
5. Browse to [http://localhost:4000](http://localhost:4000)

Well, it was actually a lot more trouble than that on NixOs. The problem here is that an environment variable for the theme is missing. Make sure to install the theme as a package, and set `SASS_PATH` accordingly.

```
export SASS_PATH=/home/onyr/.local/share/gem/ruby/3.1.0/gems/minima-2.5.1/_sass
```

Serve locally during development using `bundle exec jekyll serve`.

##### On other distros

Check: [Requirements and install | Jekyll doc](https://jekyllrb.com/docs/installation/#requirements)

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



