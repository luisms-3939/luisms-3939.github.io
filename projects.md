---
layout: default
title: Projects
---

<div class="content-section fade-in">
  <h2>Featured Projects</h2>
  
  <p>Total projects: <strong>{{ site.projects.size }}</strong></p>
  
  {% if site.projects.size > 0 %}
<div class="projects-grid">
  {% for project in site.projects %}
  <article class="project-card fade-in">
    
    <!-- SECCIÓN DE IMAGEN (NUEVO) -->
    {% if project.image %}
    <div class="project-image">
      <img 
        src="{{ project.image | relative_url }}" 
        alt="{{ project.title }}"
        loading="lazy"
      >
    </div>
    {% endif %}
    
    <div class="project-content">
      <h3>
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </h3>
      
      {% if project.description %}
        <p>{{ project.description }}</p>
      {% else %}
        <p>View project details...</p>
      {% endif %}
      
      {% if project.technologies %}
        <div class="project-tags">
          {% for tech in project.technologies %}
            <span class="tag">{{ tech }}</span>
          {% endfor %}
        </div>
      {% endif %}
      
      <div class="project-links">
        <a href="{{ project.url | relative_url }}" class="btn">View Project</a>
        {% if project.github %}
          <a href="{{ project.github }}" class="btn btn-secondary" target="_blank">GitHub</a>
        {% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>
{% endif %}
