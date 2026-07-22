---
layout: post
title:  "A personal mirror of the MAMUT-routing benchmark catalog"
date:   2026-07-21 10:00:00 +0200
author: 0nyr
tags: [research, tech]
---

I have put up a personal mirror of the **MAMUT-routing** benchmark catalog, now live at [mamut-routing.onyr.net](https://mamut-routing.onyr.net). It serves a complete, static copy of the catalog from my own server, so the instances and their documentation stay reachable independently of the official site.

### What MAMUT-routing is

MAMUT-routing is the public benchmark and instance catalog of the ANR-MAMUT project (*Machine learning And Matheuristics algorithms for Urban Transportation*, grant [ANR-22-CE22-0016](https://anr.fr/Projet-ANR-22-CE22-0016)), run at Université Bretagne Sud (Lab-STICC). It catalogs vehicle-routing instances, from the classic VRPTW and CVRP families to modern time-dependent TDVRPTW and TDVRP families, each shipped in a documented JSON format with per-instance best-known solutions and a clearly stated objective contract. The benchmark catalog is developed by [Adrien Pichon](https://www.linkedin.com/in/adrien-p-9332a4217/) and mylself under the supervision of [Romain Billot](https://www.imt-atlantique.fr/en/person/romain-billot), [Lina Fahed](https://www.imt-atlantique.fr/en/person/lina-fahed), [Alexandru-Liviu Olteanu](http://www-labsticc.univ-ubs.fr/~olteanu/), [Marc Sevaux](http://www-labsticc.univ-ubs.fr/~sevaux/) and [Christine Solnon](http://perso.citi.insa-lyon.fr/csolnon/) within the ANR-MAMUT project, and I am glad to help make their work more visible in this AI-driven fast-paced field of vehicle routing optimization.

### What the mirror serves

The mirror is a faithful, static copy of the upstream site:

+ the catalog and family pages,
+ the raw benchmark artifacts (instances and their best-known solutions),
+ the per-city route geometries derived from OpenStreetMap extracts.

As a small taste of the catalog, here is the [Poryos2026 time-dependent family](https://mamut-routing.onyr.net/benchmarks/tdvrptw/poryos2026/), a set of instances whose congestion comes from real city road networks. I write more about it in a companion post on the Kayros solver.

### Why a personal mirror

This is my own **independent mirror**, not a fork, though it might evolve in the future to include additional features or elements that matter to my PhD research. As of now, very page carries a disclosure banner making that clear and linking back to the source. The official site, [mamut-routing.univ-ubs.fr](https://mamut-routing.univ-ubs.fr/), is temporarily unavailable, so this mirror is a convenient stand-in in the meantime. When the official site is back, it remains the canonical reference. 

### Links

+ Personal mirror: [mamut-routing.onyr.net](https://mamut-routing.onyr.net)
+ Official site: [mamut-routing.univ-ubs.fr](https://mamut-routing.univ-ubs.fr/)
+ Upstream source: [github.com/ANR-MAMUT/MAMUT-routing](https://github.com/ANR-MAMUT/MAMUT-routing)
+ ANR project: [anr.fr/Projet-ANR-22-CE22-0016](https://anr.fr/Projet-ANR-22-CE22-0016)
