---
title: GitHub analytics at Esker
slug: esker-github-analytics
group: Earlier work
date: 2022-05-01
period: "May – Aug 2022"
tags: [internship, data]
summary: Commit-analytics tooling for a large company repository, from GitHub GraphQL API to Elasticsearch and Kibana dashboards.
blurb: >-
  My 4th-year internship at Esker: analysis tools for company commits based on the GitHub GraphQL API, with metrics like coding time, cycle time, and rework rate, served through an Elastic and Kibana stack.
links:
  - {label: "Esker", url: "https://www.esker.com/"}
---

During my 4th-year internship at **Esker** (Villeurbanne, May to August 2022), I built analysis tools that present the development activity of a large company GitHub repository, one that hundreds of developers interact with daily.

The pipeline started as Python notebooks querying the GitHub GraphQL API, grew into a Python module generating reports through GitHub Actions, and ended as an Elasticsearch and Kibana stack deployed on a custom Ubuntu server on the company intranet. I worked on metrics such as coding time, cycle time, and the trickiest one, rework rate, and delivered full documentation for maintainers and successors.

The code is company-internal, so there is no public repository for this one.
