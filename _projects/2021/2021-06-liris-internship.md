---
title: Web scraping and noisy classification at LIRIS
slug: liris-internship
group: Earlier work
date: 2021-06-01
period: "Jun – Sep 2021"
tags: [internship, ml, nlp]
summary: A newspaper web-scraping library and outlier detection in noisy multi-label classification, during a research internship at LIRIS.
blurb: >-
  My research internship at the LIRIS lab: a Python library automating the scraping of online newspapers with ML and NLP link filtering, then outlier detection on a noisy, imbalanced industrial classification problem.
links:
  - {label: "LIRIS", url: "https://liris.cnrs.fr/"}
  - {label: "Infolegale", url: "https://www.infolegale.fr/en/"}
---

My research internship at the **LIRIS** lab (Villeurbanne, June to September 2021) was split into two projects of about five weeks each.

The first was a complete Python library automating the web scraping of online newspapers. Since a front page holds a huge number of links, the library combines machine learning, heuristics, and NLP techniques to decide which URLs actually lead to articles, improving both precision and recall.

The second worked on data provided by [Infolegale](https://www.infolegale.fr/en/): outlier detection in a noisy, imbalanced multi-label classification problem. I developed my own features and implemented four approaches on a simplified multi-class version of the problem, using Cleanlab, scikit-learn, and PyTorch among others; my best approach beat the standard Cleanlab baseline.

This internship was supervised by [Előd Egyed-Zsigmond](https://perso.liris.cnrs.fr/eegyedzs/dw/doku.php) at LIRIS. The code stayed with the lab, so there is no public repository.
