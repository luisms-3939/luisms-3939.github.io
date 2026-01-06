---
layout: default
title: Test Projects
---

<h2>Total proyectos: {{ site.projects.size }}</h2>

<ul>
{% for project in site.projects %}
  <li>{{ project.title }} - {{ project.url }}</li>
{% else %}
  <li>NO HAY PROYECTOS</li>
{% endfor %}
</ul>
