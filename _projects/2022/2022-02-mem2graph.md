---
title: "Mem2Graph: heap-dump embedding for ML"
slug: mem2graph
group: Research & software
date: 2022-02-01
period: "Feb 2022 – Oct 2023"
tags: [research, ml, security]
summary: Predicting OpenSSH key locations in raw heap dumps with memory graphs and machine learning, my double-master project at Universität Passau.
blurb: >-
  My PhD-track master project at Universität Passau: turning raw heap dumps into memory graphs with a Rust tool (mem2graph), then using embeddings and graph neural networks to predict where OpenSSH keys live in memory.
links:
  - {label: "mem2graph (GitHub)", url: "https://github.com/passau-masterarbeit-2023/mem2graph"}
  - {label: "Memory-graph GCN pipelines (GitHub)", url: "https://github.com/passau-masterarbeit-2023/memory_graph_gcn"}
  - {label: "Feature engineering and ML pipelines (GitHub)", url: "https://github.com/passau-masterarbeit-2023/data_processing"}
  - {label: "Embedding pipelines (GitHub)", url: "https://github.com/passau-masterarbeit-2023/phdtrack_openssh_memory_embedding"}
  - {label: "Master thesis report (GitHub)", url: "https://github.com/passau-masterarbeit-2023/masterarbeit_report_onyr"}
  - {label: "Smart and naive SSH key extraction (GitHub)", url: "https://github.com/0nyr/Smart-and-Naive-SSH-Key-Extraction"}
---

**Mem2Graph** is the umbrella for my double-master research project at Universität Passau (PhD-track M.Sc., 2022 to 2023, joint with INSA Lyon): predicting the location of OpenSSH keys inside raw heap dumps using machine learning.

The core tool, `mem2graph`, is written in Rust. It converts a raw heap dump file into memory graph representations and generates embeddings from them. On top of it, Python pipelines handle feature engineering, classic ML baselines, and graph convolutional networks (GCN) operating directly on the memory graphs.

This work led to a paper at IFIP SEC 2024, *Large Scale Heap Dump Embedding for Machine Learning: Predicting OpenSSH Key Locations*, and to my master thesis. See <a href="{{ '/publications/' | relative_url }}">Publications</a> for the academic record, and the [IFIP SEC 2024 event page]({{ '/projects/ifip-sec-2024/' | relative_url }}) for the conference where I presented it.
