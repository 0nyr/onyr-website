---
title: Kayros
group: Research & software
weight: 10
summary: An anytime and exact open-source solver for time-dependent vehicle routing.
blurb: >-
  My PhD solver for duration-minimization time-dependent vehicle routing (TDVRPTW and TDVRP). It runs both an anytime heuristic and an exact branch-price-and-cut mode on the open-source HiGHS backend.
links:
  - {label: "Source (GitHub)", url: "https://github.com/0nyr/kayros"}
  - {label: "PyPI", url: "https://pypi.org/project/kayros/"}
---

**Kayros** is an open-source solver for duration-minimization time-dependent vehicle routing, covering both the time-window variant (TDVRPTW) and the plain TDVRP. Time-dependent means travel times change with the time of day, which Kayros represents with continuous piecewise-linear arrival-time functions rather than a coarse time discretization.

It runs in two modes on a single engine: an anytime heuristic that returns steadily improving solutions under any time budget, and an exact branch-price-and-cut mode that can certify optimality. The exact side runs on the open-source HiGHS solver, so no commercial license is required.

It is beta (currently version 1.1.3), developed as part of my PhD, and installable with `pip install kayros` (MIT, Python 3.11+). A technical report is forthcoming. See the [announcement post]({{ site.baseurl }}{% post_url 2026-07-22-kayros-poryos2026 %}) for more.
