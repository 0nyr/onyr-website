---
title: Poryos2026
group: Research & software
weight: 20
summary: A benchmark family of time-dependent routing instances built from real city road networks.
blurb: >-
  A benchmark family I generated to stress-test time-dependent routing on realistic congestion, derived from OpenStreetMap road networks across five cities. Its best-known solutions are produced by Kayros.
links:
  - {label: "Family page", url: "https://mamut-routing.onyr.net/benchmarks/tdvrptw/poryos2026/"}
  - {label: "mamut-routing-lib (PyPI)", url: "https://pypi.org/project/mamut-routing-lib/"}
---

**Poryos2026** is a benchmark family for time-dependent vehicle routing. Instead of the usual synthetic traffic constructions, its congestion is derived from real city road networks taken from OpenStreetMap, across five cities (Lyon, Paris, San Francisco, Hong Kong, and Tokyo) and six sizes from 10 up to 1000 customers.

The headline set is 360 time-dependent TDVRPTW instances (more if you count the TDVRP view and the static projections). Each instance ships with a best-known `Duration` solution, seeded by [Kayros]({{ site.baseurl }}{% post_url 2026-07-22-kayros-poryos2026 %}) anytime campaigns run on the Grid'5000 cluster. The benchmark data is released under ODbL 1.0, in keeping with its OpenStreetMap origin.

It lives in the MAMUT-routing catalog and is exposed through the `mamut-routing-lib` library as `BenchmarkName.PORYOS_2026`.
