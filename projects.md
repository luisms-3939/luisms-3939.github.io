---
layout: default
title: Projects
---

<div class="content-section fade-in">
  
  <!-- Header -->
  <div class="projects-header">
    <h2>Featured Projects</h2>
    <p class="projects-subtitle">
      A collection of data analysis, visualization, and automation projects that showcase my skills and approach to solving real-world problems.
    </p>
  </div>

  <!-- Stats Overview -->
  <div class="projects-stats">
    <div class="project-stat-item">
      <iconify-icon icon="fxemoji:briefcase" width="48"></iconify-icon>
      <span class="stat-value">{{ site.projects.size }}</span>
      <span class="stat-label">Total Projects</span>
    </div>
    <div class="project-stat-item">
      <iconify-icon icon="fluent-emoji-flat:laptop" width="48"></iconify-icon>
      <span class="stat-value">10+</span>
      <span class="stat-label">Technologies Used</span>
    </div>
    <div class="project-stat-item">
      <iconify-icon icon="noto:globe-showing-asia-australia" width="48"></iconify-icon>
      <span class="stat-value">100%</span>
      <span class="stat-label">Real-World Impact</span>
    </div>
  </div>

  <!-- Filter Buttons -->
  <div class="project-filters">
    <button class="filter-btn active" onclick="filterProjects('all')">
      All Projects
    </button>
    <button class="filter-btn" onclick="filterProjects('data-analysis')">
      Data Analysis
    </button>
    <button class="filter-btn" onclick="filterProjects('visualization')">
      Visualization
    </button>
    <button class="filter-btn" onclick="filterProjects('automation')">
      Automation
    </button>
    <button class="filter-btn" onclick="filterProjects('web')">
      Web Development
    </button>
  </div>

  <!-- Projects Grid -->
  {% if site.projects.size > 0 %}
  <div class="projects-grid-enhanced">
    {% for project in site.projects %}
    <article class="project-card-enhanced" data-category="{{ project.category | default: 'all' }}">
      
      <!-- Project Image -->
      {% if project.image %}
      <div class="project-image-enhanced">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy">
        <div class="project-overlay-enhanced">
          <a href="{{ project.url | relative_url }}" class="overlay-btn-enhanced">View Project</a>
          {% if project.github %}
          <a href="{{ project.github }}" target="_blank" class="overlay-btn-enhanced overlay-btn-secondary">GitHub</a>
          {% endif %}
        </div>
      </div>
      {% else %}
      <div class="project-image-enhanced project-placeholder">
        <div class="placeholder-icon">📊</div>
      </div>
      {% endif %}
      
      <!-- Project Content -->
      <div class="project-content-enhanced">
        
        <!-- Category Badge -->
        {% if project.category %}
        <span class="project-category-badge">{{ project.category }}</span>
        {% endif %}
        
        <h3 class="project-title-enhanced">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h3>
        
        {% if project.description %}
        <p class="project-description-enhanced">{{ project.description | truncatewords: 25 }}</p>
        {% else %}
        <p class="project-description-enhanced">Explore this project to learn more about the implementation and results.</p>
        {% endif %}
        
        <!-- Technologies -->
        {% if project.technologies %}
        <div class="project-technologies">
          {% for tech in project.technologies limit:4 %}
          <span class="tech-badge">{{ tech }}</span>
          {% endfor %}
        </div>
        {% endif %}
        
        <!-- Project Footer -->
        <div class="project-footer-enhanced">
          <a href="{{ project.url | relative_url }}" class="project-link-enhanced">
            View Details →
          </a>
          {% if project.github %}
          <a href="{{ project.github }}" target="_blank" class="project-github-link" title="View on GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
  
  <!-- Empty State -->
  <div id="emptyState" class="empty-state" style="display: none;">
    <div class="empty-icon">🔍</div>
    <h3>No projects found</h3>
    <p>Try selecting a different filter to see more projects.</p>
    <button onclick="filterProjects('all')" class="btn btn-primary">Show All Projects</button>
  </div>
  
  {% else %}
  <div class="empty-state">
    <div class="empty-icon">🚀</div>
    <h3>Projects Coming Soon</h3>
    <p>I'm currently working on some exciting projects. Check back soon!</p>
  </div>
  {% endif %}

</div>

<style>
/* Projects Header */
.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 800px;
  margin: 1rem auto 0;
}

/* Projects Stats */
.projects-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--slate);
  transition: all 0.3s ease;
}

.project-stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 600;
}

/* Filter Buttons */
.project-filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: var(--bg-card);
  color: var(--text-main);
  border: 2px solid var(--slate);
  border-radius: var(--radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.filter-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.filter-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Projects Grid */
.projects-grid-enhanced {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.project-card-enhanced {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--slate);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card-enhanced:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent);
}

/* Project Image */
.project-image-enhanced {
  position: relative;
  height: 240px;
  overflow: hidden;
  background: var(--bg-main);
}

.project-image-enhanced img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card-enhanced:hover .project-image-enhanced img {
  transform: scale(1.1);
}

.project-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
}

.placeholder-icon {
  font-size: 4rem;
  opacity: 0.5;
}

/* Project Overlay */
.project-overlay-enhanced {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 26, 47, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card-enhanced:hover .project-overlay-enhanced {
  opacity: 1;
}

.overlay-btn-enhanced {
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-sm);
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.overlay-btn-enhanced:hover {
  background: var(--accent-strong);
  transform: scale(1.05);
}

.overlay-btn-secondary {
  background: transparent;
  border: 2px solid white;
}

.overlay-btn-secondary:hover {
  background: white;
  color: var(--navy);
}

/* Project Content */
.project-content-enhanced {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-category-badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: var(--accent);
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  width: fit-content;
}

.project-title-enhanced {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.project-title-enhanced a {
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-title-enhanced a:hover {
  color: var(--accent);
}

.project-description-enhanced {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

/* Technologies */
.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  padding: 0.35rem 0.75rem;
  background: var(--bg-main);
  color: var(--text-main);
  border: 1px solid var(--accent);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
}

/* Project Footer */
.project-footer-enhanced {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--slate);
}

.project-link-enhanced {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.project-link-enhanced:hover {
  color: var(--accent-strong);
  transform: translateX(3px);
  display: inline-block;
}

.project-github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--text-main);
  background: var(--bg-main);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.project-github-link:hover {
  background: var(--accent);
  color: white;
  transform: scale(1.1);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--slate);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  color: var(--text-main);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.empty-state p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid-enhanced {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .project-filters {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  .projects-stats {
    grid-template-columns: 1fr;
  }
  
  .project-image-enhanced {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .overlay-btn-enhanced {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  .project-overlay-enhanced {
    flex-direction: column;
  }
}
</style>

<script>
function filterProjects(category) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Filter projects
  const projects = document.querySelectorAll('.project-card-enhanced');
  let visibleCount = 0;
  
  projects.forEach(project => {
    const projectCategory = project.dataset.category;
    
    if (category === 'all' || projectCategory === category || !projectCategory) {
      project.style.display = 'flex';
      visibleCount++;
    } else {
      project.style.display = 'none';
    }
  });
  
  // Show/hide empty state
  const emptyState = document.getElementById('emptyState');
  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

// Add smooth appearance animation
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-card-enhanced');
  projects.forEach((project, index) => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      project.style.opacity = '1';
      project.style.transform = 'translateY(0)';
    }, index * 100);
  });
});
</script>
