---
layout: default
title: Certifications
---

<div class="content-section fade-in">
  <h2>Certifications</h2>

  <ul class="projects-grid">
    {% for cert in site.certifications %}
      <li class="experience-item fade-in">
        <h3 class="experience-title">{{ cert.title }}</h3>
        <p class="experience-company">{{ cert.issuer }}</p>
        <p class="experience-date">{{ cert.date }}</p>
        <p class="experience-description">{{ cert.content | markdownify }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
