---
layout: post
title:  "New website and Jekyll on NixOs"
date:   2024-08-10 09:53:38 +0200
author: 0nyr
categories: miscellaneous
---

### I made a new website for my programming association

It is now time to unleash the new baby website of my programming association: [insalgo.fr](https://insalgo.fr)

This project is based on [Jekyll](https://jekyllrb.com/), a popular tool to generate static website, easy to learn and maintain, well integrated into GitHub in which members are already familiar, and extensively documented and adopted. It was thus the perfect tool for the job.

It took me around 5h to install and parameter Jekyll on my [NixOs-powered laptop](). After around 1 year on this amazing distro, I tend to be pretty effective when having to deal with software install. However, getting Jekyll to work on my dev environment was less easy that the widespreadness of this tool was hinting to me.

### Making Jekyll work on NixOs 

First, I discovered not a single `flake.nix` file on the whole GitHub with Jekyll properly configured with a theme like Minima, since I was trying to follow the tutorial. So I had to make my own. Second, installing the package `minima` into `buildInputs` was not making this package discoverable for the bundler of `rubyPackages.jekyll`.

Following the tutorial for using Jekyll on the official website, I did:
1. Install [prerequisites](https://jekyllrb.com/docs/installation/other-linux/): Ruby, and Jekyll, from the `nixpkgs` store into my `flake.nix` of the project.
2. Install Jekyll and Bundler gem: `gem install jekyll bundler`
3. Create a new Jekyll site using `jekyll new INSAlgo`

What I realized is that the bundler is actually breaking NixOs contained environments, by downloading its packages as gems directly instead of relying on NixOs internal packages. Since NixOs doesn't follow Linux standard paths due to that containment, some paths are incorrectly setup and I kept having the following error, despite the package `minima` being properly installed on both NixOs internal store and ruby's local one too.


A quick fix I did was finding this package, and adding a `shellHook` to my flake to manually *hard-code* the path, taking into account potential new versions. Yes, it's clearly dirty, and not 100% reproducible. Yes, there is probably a better way to do so, but I already spent 2h on that problem and my goal was to make a website quickly, not spend all my time writing a perfect flake. 

>If you ever make a better `flake.nix` for Jekyll, I kindly invite you to do a PR on this repo with the updated flake.

So here is the flake that made my Jekyll project works flawlessly:

```nix
{
  description = "Jekyll website template";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        minima = pkgs.rubyPackages.minima;
        minimaVersion = builtins.getAttr "version" minima;
        minimaPath = "${minima}/lib/ruby/gems/3.1.0/gems/minima-${minimaVersion}/_sass";
      in
      {
        formatter = pkgs.nixpkgs-fmt;

        # development environment
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.ruby
            pkgs.rubyPackages.jekyll
            pkgs.rubyPackages.jekyll-sitemap
            minima
          ];

          shellHook = ''
            if [ ! -d "${minimaPath}" ]; then
              echo "Error: The SASS_PATH (${minimaPath}) does not exist."
              exit 1
            else
              export SASS_PATH=${minimaPath}
            fi
          '';
        };

        packages.default = pkgs.stdenv.mkDerivation {
          name = "jekyll-insalgo-website";
          src = ./.;
          buildInputs = [
            pkgs.ruby
            pkgs.jekyll
            pkgs.rubyPackages.jekyll-sitemap
          ];
          buildPhase = ''
            jekyll build
          '';
          installPhase = ''
            cp -r _site $out
          '';
        };
      }
    );
}
```

The exact problem here is that an environment variable for the theme is missing. Make sure to install the theme as a package, and set `SASS_PATH` accordingly, and adapt your `minimaPath` path to your own environment.

*Informatiquement vôtre,*
