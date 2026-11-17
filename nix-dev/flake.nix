{
  description = "onyr-website dev shell (extends nix-dev-base)";

  inputs = {
    base.url = "path:/home/onyr/nix-dev-base";
    nixpkgs.follows = "base/nixpkgs"; # share ONE nixpkgs
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { base, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; config.allowUnfree = true; };
        # Jekyll with its bundled plugin set (jekyll-feed, jekyll-sitemap, jekyll-seo-tag, ...).
        # The site ships its own layouts and CSS, so no theme gem is needed.
        jekyll = pkgs.jekyll.override { withOptionalDependencies = true; };
      in
      {
        devShells.default = pkgs.mkShell {
          inputsFrom = [ base.devShells.${system}.default ]; # packages + shellHook
          packages = [ jekyll ];
          shellHook = ''
            echo "[onyr-website] dev shell active (extends nix-dev-base). Serve with: jekyll serve"
          '';
        };
      });
}
