---
layout: default
title: Certifications
---

<div class="content-section fade-in">
  <h2>Professional Certifications</h2>
  
  <p class="about-text">
    A collection of professional certifications showcasing continuous learning and technical expertise.
  </p>

  <!-- Stats Section -->
  <div class="cert-stats">
    <div class="stat-card">
      <span class="stat-number">{{ site.certifications.size }}</span>
      <span class="stat-label">Certifications Earned</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">45</span>
      <span class="stat-label">Courses Completed</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">500+</span>
      <span class="stat-label">Hours of Learning</span>
    </div>
  </div>

  <!-- View Toggle & Filters -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
    
    <!-- Filter Tabs -->
    <div class="cert-filter-tabs" style="margin: 0;">
      <button class="filter-tab active" onclick="filterCerts('all')">All</button>
      <button class="filter-tab" onclick="filterCerts('data')">Data Science</button>
      <button class="filter-tab" onclick="filterCerts('design')">Design</button>
      <button class="filter-tab" onclick="filterCerts('it')">IT</button>
      <button class="filter-tab" onclick="filterCerts('pm')">Management</button>
    </div>

    <!-- View Toggle -->
    <div style="display: flex; gap: 0.5rem;">
      <button onclick="switchView('timeline')" id="timelineBtn" class="view-toggle-btn active">
        📅 Timeline
      </button>
      <button onclick="switchView('grid')" id="gridBtn" class="view-toggle-btn">
        📊 Grid
      </button>
    </div>
  </div>

  <!-- Timeline View -->
  <div id="timelineView" class="certifications-timeline">
    {% assign sorted_certs = site.certifications | sort: 'date' | reverse %}
    {% for cert in sorted_certs %}
    <article class="timeline-item" data-category="{% if cert.title contains 'Data' %}data{% elsif cert.title contains 'UX' or cert.title contains 'Design' %}design{% elsif cert.title contains 'IT' or cert.title contains 'Automation' %}it{% elsif cert.title contains 'Project Management' %}pm{% endif %}">
      
      <div class="timeline-marker"></div>
      <div class="timeline-date">{{ cert.date | date: "%b %Y" }}</div>
      
      <div class="timeline-content">
        <div class="timeline-cert-header">
          <div class="timeline-cert-icon">
            {% if cert.title contains 'Data Science' %}<iconify-icon icon="stash:chart-pie-duotone" width="48" style="color:#0a1a2f"></iconify-icon>
            {% elsif cert.title contains 'Data Analytics' %}<iconify-icon icon="noto-v1:bar-chart" width="48" style="color:#4CC9A6"></iconify-icon>
            {% elsif cert.title contains 'UX' or cert.title contains 'Design' %}<iconify-icon icon="ix:screen-pc-tower-settings" width="48" style="color:#0a1a2f"></iconify-icon>
            {% elsif cert.title contains 'Project Management' %}<iconify-icon icon="icon-park-twotone:tree-list" width="48" style="color:#0a1a2f"></iconify-icon>
            {% elsif cert.title contains 'IT Support' %}<iconify-icon icon="vscode-icons:folder-type-tools" width="48" style="color:#4CC9A6"></iconify-icon>
            {% elsif cert.title contains 'Automation' %}<iconify-icon icon="el:cogs" width="48" style="color:#0a1a2f"></iconify-icon>
            {% else %}🎓{% endif %}
          </div>
          
          <div class="timeline-cert-info">
            <h3 class="timeline-cert-title">{{ cert.title }}</h3>
            <div class="timeline-cert-org">
              {% if cert.title contains 'Google' %}Google Career Certificates
              {% elsif cert.title contains 'IBM' %}IBM
              {% else %}Professional Certificate{% endif %}
            </div>
          </div>
        </div>
        
        <div class="timeline-cert-description">
          {{ cert.content | strip_html | truncatewords: 25 }}
        </div>
        
        <div class="timeline-skills">
          {% if cert.title contains 'Data Science' %}
            <span class="skill-pill">Python</span>
            <span class="skill-pill">ML</span>
            <span class="skill-pill">SQL</span>
          {% elsif cert.title contains 'Data Analytics' %}
            <span class="skill-pill">SQL</span>
            <span class="skill-pill">Tableau</span>
            <span class="skill-pill">R</span>
          {% elsif cert.title contains 'UX' %}
            <span class="skill-pill">Figma</span>
            <span class="skill-pill">Prototyping</span>
            <span class="skill-pill">Research</span>
          {% elsif cert.title contains 'Project Management' %}
            <span class="skill-pill">Agile</span>
            <span class="skill-pill">Scrum</span>
          {% elsif cert.title contains 'IT Support' %}
            <span class="skill-pill">Networking</span>
            <span class="skill-pill">Linux</span>
          {% elsif cert.title contains 'Automation' %}
            <span class="skill-pill">Python</span>
            <span class="skill-pill">Git</span>
          {% endif %}
        </div>
        
        <div class="timeline-cert-actions">
          <a href="{{ cert.url }}" class="timeline-btn timeline-btn-primary">View Details →</a>
          {% if cert.certificate_url and cert.certificate_url != '#' %}
          <a href="{{ cert.certificate_url }}" target="_blank" class="timeline-btn timeline-btn-secondary">📜 Cert</a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>

  <!-- Grid View -->
  <div id="gridView" class="certifications-grid" style="display: none;">
    {% for cert in sorted_certs %}
    <article class="certification-card grid-item" data-category="{% if cert.title contains 'Data' %}data{% elsif cert.title contains 'UX' or cert.title contains 'Design' %}design{% elsif cert.title contains 'IT' or cert.title contains 'Automation' %}it{% elsif cert.title contains 'Project Management' %}pm{% endif %}">
      
      {% if cert.certificate_image %}
      <div class="certification-image">
        <img src="{{ cert.certificate_image }}" alt="{{ cert.title }}" loading="lazy">
      </div>
      {% endif %}
      
      <div class="certification-content">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">
          {% if cert.title contains 'Data Science' %}<iconify-icon icon="stash:chart-pie-duotone" width="48" style="color:#0a1a2f"></iconify-icon>
          {% elsif cert.title contains 'Data Analytics' %}<iconify-icon icon="noto-v1:bar-chart" width="48" style="color:#4CC9A6"></iconify-icon>
          {% elsif cert.title contains 'UX' or cert.title contains 'Design' %}<iconify-icon icon="ix:screen-pc-tower-settings" width="48" style="color:#4CC9A6"></iconify-icon>
          {% elsif cert.title contains 'Project Management' %}<iconify-icon icon="icon-park-twotone:tree-list" width="48" style="color:#4CC9A6"></iconify-icon>
          {% elsif cert.title contains 'IT Support' %}<iconify-icon icon="vscode-icons:folder-type-tools" width="48" style="color:#4CC9A6"></iconify-icon>
          {% elsif cert.title contains 'Automation' %}<iconify-icon icon="el:cogs" width="48" style="color:#4CC9A6"></iconify-icon>
          {% else %}🎓{% endif %}
        </div>
        
        <h3>{{ cert.title }}</h3>
        
        <div class="certification-date">
          ✓ {{ cert.date | date: "%B %Y" }}
        </div>
        
        <div class="certification-excerpt">
          {{ cert.content | strip_html | truncatewords: 20 }}
        </div>
        
        <a href="{{ cert.url }}" class="certification-link">
          View Details →
        </a>
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<script>
function filterCerts(category) {
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter items in current view
  const currentView = document.getElementById('timelineView').style.display !== 'none' ? 'timeline' : 'grid';
  const selector = currentView === 'timeline' ? '.timeline-item' : '.grid-item';
  
  document.querySelectorAll(selector).forEach(item => {
    item.style.display = (category === 'all' || item.dataset.category === category) 
      ? (currentView === 'timeline' ? 'flex' : 'block')
      : 'none';
  });
}

function switchView(view) {
  const timelineView = document.getElementById('timelineView');
  const gridView = document.getElementById('gridView');
  const timelineBtn = document.getElementById('timelineBtn');
  const gridBtn = document.getElementById('gridBtn');
  
  if (view === 'timeline') {
    timelineView.style.display = 'block';
    gridView.style.display = 'none';
    timelineBtn.classList.add('active');
    gridBtn.classList.remove('active');
  } else {
    timelineView.style.display = 'none';
    gridView.style.display = 'grid';
    timelineBtn.classList.remove('active');
    gridBtn.classList.add('active');
  }
  
  // Save preference
  localStorage.setItem('certViewPreference', view);
}

// Load saved preference
document.addEventListener('DOMContentLoaded', () => {
  const savedView = localStorage.getItem('certViewPreference');
  if (savedView) {
    switchView(savedView);
  }
});
</script>
