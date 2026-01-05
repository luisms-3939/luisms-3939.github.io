---
layout: page
title: Projects
---

<div class="projects-grid">
  {% for project in site.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
