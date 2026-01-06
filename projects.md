---
layout: default
title: Projects
---

<div class="content-section fade-in">
  <h2>Featured Projects</h2>
  
  <div class="projects-grid">
    {% for project in site.projects %}
    <article class="project-card fade-in">
      {% if project.image %}
      <div class="project-image">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
      </div>
      {% endif %}
      
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        
        {% if project.technologies %}
        <div class="project-tags">
          {% for tech in project.technologies %}
          <span class="tag">{{ tech }}</span>
          {% endfor %}
        </div>
        {% endif %}
        
        <div class="project-links">
          {% if project.github %}
          <a href="{{ project.github }}" class="btn" target="_blank">GitHub</a>
          {% endif %}
          {% if project.demo %}
          <a href="{{ project.demo }}" class="btn btn-secondary" target="_blank">Live Demo</a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</div>
