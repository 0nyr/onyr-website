---
layout: general
title: Projects
permalink: /projects/
---

# Projects

A selection of things I have built. Each card expands in place; follow a title for the full write-up on its own page.

<p class="projects-see-also"><a href="{{ '/publications/' | relative_url }}">See also: Publications &rarr;</a></p>

{% assign groups = "Research & software,Web,Earlier work" | split: "," %}
{% for g in groups %}
  <section class="project-group">
    <h2>{{ g }}</h2>
    {% assign ps = site.projects | where: "group", g | sort: "weight" %}
    <div class="project-cards">
      {% for p in ps %}
        <details class="project-card">
          <summary>
            <span class="project-title">{{ p.title }}</span>
            <span class="project-tagline">{{ p.summary }}</span>
          </summary>
          <div class="project-card-body">
            {% if p.image %}<img class="project-thumb" src="{{ p.image | relative_url }}" alt="{{ p.image_alt | default: p.title }}">{% endif %}
            <p>{{ p.blurb }}</p>
            {% if p.links %}
              <ul class="project-links">
                {% for l in p.links %}<li><a href="{{ l.url }}">{{ l.label }}</a></li>{% endfor %}
              </ul>
            {% endif %}
            <p class="project-readmore"><a href="{{ p.url | relative_url }}">Read the full write-up &rarr;</a></p>
          </div>
        </details>
      {% endfor %}
    </div>
  </section>
{% endfor %}
