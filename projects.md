---
layout: general
title: Projects
permalink: /projects/
wide: true
---

# Projects

Things I have built, and places I have been. Each card opens a full write-up on its own page. For the academic record, see <a href="{{ '/publications/' | relative_url }}">Publications</a>.

{% assign groups = "Research & software|Web|Events|Earlier work" | split: "|" %}
{% for g in groups %}
  <section class="project-group">
    <h2>{{ g }}</h2>
    {% assign ps = site.projects | where: "group", g | sort: "date" | reverse %}
    <div class="card-grid">
      {% for p in ps %}
        {% include entry-card.html item=p %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
