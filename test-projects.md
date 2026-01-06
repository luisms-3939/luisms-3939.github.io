---
layout: default
title: Test Projects
---

<h2>Debug de Colecciones</h2>

<p>Total de proyectos: <strong>{{ site.projects.size }}</strong></p>

<h3>Lista de proyectos:</h3>
<ul>
{% for project in site.projects %}
  <li>
    <strong>{{ project.title }}</strong><br>
    Ruta: {{ project.url }}<br>
    Layout: {{ project.layout }}
  </li>
{% else %}
  <li><strong style="color:red;">NO SE ENCONTRARON PROYECTOS</strong></li>
{% endfor %}
</ul>

<h3>Variables de sitio:</h3>
<pre>
Config collections: {{ site.collections | inspect }}
</pre>
