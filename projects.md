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
  {% else %}
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border: 2px dashed #ccc;">
      <h3>⚠️ No projects found</h3>
      <p>Add project files to the <code>_projects</code> folder with front matter.</p>
    </div>
  {% endif %}
</div>
