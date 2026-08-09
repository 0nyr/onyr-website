---
title: Kayros
slug: kayros
group: Research & software
date: 2026-07-23
period: "2026 – present"
tags: [research, software]
summary: An anytime and exact open-source solver for time-dependent vehicle routing.
blurb: >-
  My PhD solver for duration-minimization time-dependent vehicle routing (TDVRPTW and TDVRP). It runs both an anytime heuristic and an exact branch-price-and-cut mode on the open-source HiGHS backend.
links:
  - {label: "Source (GitHub)", url: "https://github.com/0nyr/kayros"}
  - {label: "PyPI", url: "https://pypi.org/project/kayros/"}
  - {label: "Reddit r/optimization post", url: "https://www.reddit.com/r/optimization/comments/1v8t68v/kayros_an_opensource_exact_and_anytime_solver_for/"}
  - {label: "LinkedIn announcement post", url: "https://www.linkedin.com/posts/florian-rascoussier-onyr_kayros-an-anytime-and-exact-open-source-activity-7487836560994824192-ahZs?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcIsOkB0IhxGhcova4MtLZJQQzTt0Z5e0Q"}
  - {label: "Technical report (arXiv)", url: "https://arxiv.org/abs/2607.23116"}
---

**Kayros** is an open-source solver for duration-minimization time-dependent vehicle routing, covering both the time-window variant (TDVRPTW) and the plain TDVRP. Time-dependent means travel times change with the time of day, which Kayros represents with continuous piecewise-linear arrival-time functions rather than a coarse time discretization.

It runs in two modes on a single engine: an anytime heuristic that returns steadily improving solutions under any time budget, and an exact branch-price-and-cut mode that can certify optimality. The exact side runs on the open-source HiGHS solver, so no commercial license is required.

It is beta (currently version 1.1.3), developed as part of my PhD, and installable with `pip install kayros` (MIT, Python 3.11+). A technical report is forthcoming. See the [announcement post]({{ site.baseurl }}{% link _posts/2026/2026-07-22-kayros-poryos2026.md %}) for more.
