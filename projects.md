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
    <div class="card-grid project-grid">
      {% for p in ps %}
        <a class="post-card project-card" href="{{ p.url | relative_url }}">
          {% if p.thumb %}
            <img class="project-card-thumb" src="{{ p.thumb | relative_url }}" alt="{{ p.thumb_alt | default: p.title }}" loading="lazy">
          {% endif %}
          <div class="project-card-body">
            <span class="meta">{% if p.period %}{{ p.period }}{% endif %}{% if p.tags.size > 0 %}{% if p.period %} · {% endif %}{{ p.tags | join: " · " }}{% endif %}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.summary }}</p>
            <span class="read-more">Read more &rarr;</span>
          </div>
        </a>
      {% endfor %}
    </div>
  </section>
{% endfor %}
