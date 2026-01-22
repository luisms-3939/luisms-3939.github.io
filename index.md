---
layout: default
title: Home
---

<!-- Hero Section -->
<div class="hero-section fade-in">
  <div class="hero-content">
    <h1 class="hero-title">
      Hi, I'm <span class="highlight">Luis Modesto</span>
    </h1>
    <p class="hero-subtitle">
      Data Analyst | Process Optimizer | Customer Experience Specialist
    </p>
    <p class="hero-description">
      I transform complex datasets into actionable business stories. With a decade of experience in customer operations and a suite of professional certifications in Data Science and Automation, I bridge the gap between technical analysis and human-centric solutions.
    </p>
    
    <div class="hero-cta">
      <a href="/projects" class="btn btn-primary">View My Work</a>
      <a href="/contact" class="btn btn-secondary">Get in Touch</a>
    </div>
  </div>
</div>

<!-- Quick Stats -->
<div class="home-stats fade-in">
  <div class="stat-item">
    <span class="stat-icon">
    <iconify-icon icon="fxemoji:briefcase" width="48" style="color:#4CC9A6"></iconify-icon>
    </span>
    <span class="stat-number">{{ site.projects.size }}+</span>
    <span class="stat-label">Projects</span>
  </div>
  <div class="stat-item">
    <span class="stat-icon">
    <iconify-icon icon="vscode-icons:file-type-allcontributors" width="48" style="color:#4CC9A6"></iconify-icon>
    </span>
    <span class="stat-number">{{ site.certifications.size }}</span>
    <span class="stat-label">Certifications</span>
  </div>
  <div class="stat-item">
    <span class="stat-icon">
    <iconify-icon icon="streamline-sharp-color:reset-clock-flat" width="48" style="color:#4CC9A6"></iconify-icon>
    </span>
    <span class="stat-number">500+</span>
    <span class="stat-label">Hours Learning</span>
  </div>
  <div class="stat-item">
    <span class="stat-icon">
    <iconify-icon icon="fluent-emoji-flat:laptop" width="48" style="color:#4CC9A6"></iconify-icon>
    </span>
    <span class="stat-number">10+</span>
    <span class="stat-label">Technologies</span>
  </div>
</div>

<!-- What I Do -->
<div class="content-section fade-in">
  <h2>What I Do</h2>
  
  <div class="what-i-do-grid">
    <div class="what-i-do-card">
      <div class="wid-icon">
      <iconify-icon icon="emojione:bar-chart" width="48" style="color:#4CC9A6"></iconify-icon>
      </div>
      <h3>Data Analysis</h3>
      <p>Extracting insights from complex datasets using Python, SQL, and statistical methods to drive business decisions.</p>
    </div>
    
    <div class="what-i-do-card">
      <div class="wid-icon">
        <iconify-icon icon="emojione-v1:stock-chart" width="48" style="color:#4CC9A6"></iconify-icon>
          </div>
      <h3>Data Visualization</h3>
      <p>Creating compelling visual stories with Tableau, Power BI, and custom dashboards that make data accessible to everyone.</p>
    </div>
    
    <div class="what-i-do-card">
      <div class="wid-icon">
        <iconify-icon icon="vscode-icons:file-type-tmux" width="48"></iconify-icon>
          </div>
      <h3>UI/UX Design</h3>
      <p>Designing user-centered interfaces and experiences that are both functional and delightful to use.</p>
    </div>
  </div>
</div>

<!-- Featured Projects -->
<div class="content-section fade-in">
  <div class="section-header">
    <h2>Featured Projects</h2>
    <a href="/projects" class="section-link">View All Projects →</a>
  </div>
  
  {% if site.projects.size > 0 %}
  <div class="featured-projects">
    {% for project in site.projects limit:3 %}
    <article class="featured-project-card">
      {% if project.image %}
      <div class="featured-project-image">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy">
        <div class="project-overlay">
          <a href="{{ project.url | relative_url }}" class="overlay-btn">View Project</a>
        </div>
      </div>
      {% endif %}
      
      <div class="featured-project-content">
        <h3>
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h3>
        
        {% if project.description %}
        <p>{{ project.description | truncatewords: 20 }}</p>
        {% endif %}
        
        {% if project.technologies %}
        <div class="project-tech-tags">
          {% for tech in project.technologies limit:3 %}
          <span class="tech-tag">{{ tech }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p class="about-text">Featured projects coming soon. Check back later!</p>
  {% endif %}
</div>

<!-- Call to Action -->
<div class="cta-section fade-in">
  <h2>Let's Work Together</h2>
  <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
  <div class="cta-buttons">
    <a href="/contact" class="btn btn-primary">Contact Me</a>
    <a href="/about" class="btn btn-secondary">More About Me</a>
  </div>
</div>

<style>
/* Hero Section */
.hero-section {
  padding: 4rem 0 4rem;
  text-align: center;
}

.hero-title {
  font-size: 2.75rem;
  color: var(--text-main);
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 700;
}

.hero-title .highlight {
  color: var(--accent);
  position: relative;
  display: inline-block;
}

.hero-title .highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent);
  opacity: 0.3;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: var(--accent-strong);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 750px;
  margin: 0 auto 2.5rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2.5rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-strong);
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.btn-secondary {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.btn-secondary:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-3px);
}

/* Quick Stats */
.home-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 4rem 0;
}

.stat-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--slate);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent);
}

.stat-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  display: block;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 600;
}

/* What I Do Section */
.what-i-do-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.what-i-do-card {
  background: var(--bg-card);
  padding: 2.5rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--slate);
  text-align: center;
  transition: all 0.3s ease;
}

.what-i-do-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent);
}

.wid-icon {
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
  display: block;
}

.what-i-do-card h3 {
  color: var(--text-main);
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.what-i-do-card p {
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 1rem;
}

/* Section Headers */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.section-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.section-link:hover {
  color: var(--accent-strong);
  transform: translateX(3px);
  display: inline-block;
}

/* Featured Projects */
.featured-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.featured-project-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--slate);
  transition: all 0.3s ease;
}

.featured-project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.featured-project-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: var(--bg-main);
}

.featured-project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-project-card:hover .featured-project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 26, 47, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-btn {
  padding: 0.875rem 2rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-sm);
  font-weight: 600;
  transition: all 0.3s ease;
}

.overlay-btn:hover {
  background: var(--accent-strong);
  transform: scale(1.05);
}

.featured-project-content {
  padding: 1.75rem;
}

.featured-project-content h3 {
  margin-bottom: 0.875rem;
  font-size: 1.25rem;
}

.featured-project-content h3 a {
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.3s ease;
}

.featured-project-content h3 a:hover {
  color: var(--accent);
}

.featured-project-content p {
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.project-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--bg-main);
  color: var(--text-main);
  padding: 0.35rem 0.875rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid var(--accent);
  font-weight: 500;
}

/* Call to Action */
.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-main) 100%);
  border-radius: var(--radius-lg);
  border: 1px solid var(--slate);
  margin: 4rem 0 2rem;
}

.cta-section h2 {
  color: var(--text-main);
  margin-bottom: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
}

.cta-section p {
  color: var(--text-muted);
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.15rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .home-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .what-i-do-grid,
  .featured-projects {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .cta-section {
    padding: 3rem 1.5rem;
  }
  
  .cta-section h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .home-stats {
    grid-template-columns: 1fr;
  }
  
  .hero-cta,
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
  
  .what-i-do-card {
    padding: 2rem 1.5rem;
  }
}
</style>
