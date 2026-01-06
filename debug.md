---
layout: default
title: Debug Collections
---

<h2>Debug Information</h2>

<h3>Collections Status:</h3>
<ul>
{% for coll in site.collections %}
  <li>
    <strong>{{ coll.label }}</strong>: 
    {{ coll.docs.size }} document(s)
    {% if coll.docs.size > 0 %}
      <ul>
      {% for doc in coll.docs %}
        <li>{{ doc.title }} ({{ doc.url }})</li>
      {% endfor %}
      </ul>
    {% endif %}
  </li>
{% endfor %}
</ul>

<h3>Projects Collection Specifically:</h3>
<p>site.projects size: <strong>{{ site.projects.size }}</strong></p>
<p>site.projects: {{ site.projects | jsonify }}</p>

<h3>Config Check:</h3>
<pre>
Collections config: {{ site.collections | map: "label" | jsonify }}
</pre>
