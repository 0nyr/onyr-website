---
layout: post
title: "Four arXiv releases on Kayros, anytime evaluation, and Hexaly"
date: 2026-09-29 17:00:00 +0200
author: 0nyr
tags: [research, tech]
summary: "Two papers and two reports connect the Kayros solver, its evaluation method, benchmark construction, and a separate Hexaly scaling study."
links:
  - {label: "Kayros paper (arXiv v1)", url: "https://arxiv.org/abs/2609.29597v1"}
  - {label: "Anytime evaluation paper (arXiv v2)", url: "https://arxiv.org/abs/2608.18288v2"}
  - {label: "Kayros technical report (arXiv v2)", url: "https://arxiv.org/abs/2607.23116v2"}
  - {label: "Hexaly experimental report (arXiv v2)", url: "https://arxiv.org/abs/2608.10079v2"}
---

Four pieces of my doctoral research are now available on arXiv: two papers and two reports. They share a setting, the Time-Dependent Vehicle Routing Problem with Time Windows (TDVRPTW), but answer different questions about solving it, measuring progress, constructing benchmarks, and using multiple threads in a competing solver.

## Kayros: the solver and its evaluation

The [Kayros paper](https://arxiv.org/abs/2609.29597v1) presents an [open-source solver](https://github.com/0nyr/kayros) that produces improving solutions during a run and can also issue computational optimality certificates under explicit assumptions. It develops the treatment of time-dependent arrival functions and evaluates the anytime and exact components on published routing instances. On a campaign of 212 instances from five families, with a one-hour single-threaded budget, Kayros achieves a pooled anytime score 63.3% lower than Timefold, the strongest of the three available contenders in that comparison. The paper also reports 704 published computational certificates as of 8 August 2026. Those certificates cover particular instances under the paper's stated protocol, not every benchmark family or instance size.

The companion [anytime evaluation paper](https://arxiv.org/abs/2608.18288v2) examines how to compare solvers that may find a first feasible solution at different times and then continue improving it. It develops a normalized signed primal integral (Λ), including a defined score for runs with no valid incumbent and a way to retain improvements below a frozen reference value. Its v2 analysis remeasures the descriptive time-sliced Hexaly arm and two model-fidelity ladders through the C++ binding at 10 seeds. This paper gives the measurement choices behind the Kayros comparison their own examination.

## Benchmarks, certificates, and thread scaling

The [Kayros technical report](https://arxiv.org/abs/2607.23116v2) describes the solver and the verification process behind its public results. It documents the integration of the measured-traffic Blauth2024 family and the construction of Poryos2026, whose real road networks are combined with controlled synthetic congestion. The report's v2 also records the retraction and repair of earlier invalid certificate claims. Kayros improved the 30 imported high-effort Blauth2024 references at unchanged route counts, but does not claim an optimality certificate for that family.

The separate [Hexaly experimental report](https://arxiv.org/abs/2608.10079v2) asks how thread count affects two TDVRPTW model encodings through Hexaly's C++ binding. One encoding evaluates continuous travel-time functions through external callbacks, while the other uses time slices evaluated by the solver. Across its 10-instance, 10-seed study, the time-sliced encoding benefits more consistently from additional threads. These are results for the tested models and instances, rather than a general ranking of the encodings or solvers.

The papers and reports can be read independently. Together they make the solver's claims, the scoring method, the benchmark data, and the comparison conditions available for inspection. The [publications page]({{ '/publications/' | relative_url }}) lists their full citations, while the earlier [Kayros and Poryos2026 announcement]({{ site.baseurl }}{% link _posts/2026/2026-07-22-kayros-poryos2026.md %}) gives the original release context.
