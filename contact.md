---
layout: default
title: Contact
---

<div class="contact-container fade-in">
  
  <!-- Header -->
  <div class="contact-header">
    <h1>Let's Connect</h1>
    <p class="contact-subtitle">
      I'm always open to discussing new projects, opportunities, or just having a chat about data and analytics.
    </p>
  </div>

  <!-- Availability Badge -->
  <div class="availability-badge">
    <span class="availability-dot"></span>
    <span>Currently available for opportunities</span>
  </div>

  <!-- Contact Links -->
  <div class="contact-links-grid">
    
    <!-- Email -->
    <a href="mailto:luiscsmodesto@outlook.com" class="contact-link-card">
      <div class="contact-icon">
        <iconify-icon icon="ph:envelope-light" width="48" style="color:#ffffff"></iconify-icon>
      </div>
      <div class="contact-info">
        <h3>Email</h3>
        <p class="contact-detail">luiscsmodesto@outlook.com</p>
        <span class="contact-action">Send me an email →</span>
      </div>
    </a>

    <!-- LinkedIn -->
    <a href="www.linkedin.com/in/luis-modesto3986" target="_blank" class="contact-link-card">
      <div class="contact-icon">
        <iconify-icon icon="streamline-logos:linkedin-logo-block" width="48" style="color:#ffffff"></iconify-icon>
      </div>
      <div class="contact-info">
        <h3>LinkedIn</h3>
        <p class="contact-detail">Connect with me</p>
        <span class="contact-action">View profile →</span>
      </div>
    </a>

    <!-- GitHub -->
    <a href="https://github.com/luis-c2255" target="_blank" class="contact-link-card">
      <div class="contact-icon">
        <iconify-icon icon="formkit:github" width="48" style="color:#ffffff"></iconify-icon>
      </div>
      <div class="contact-info">
        <h3>GitHub</h3>
        <p class="contact-detail">Check out my code</p>
        <span class="contact-action">View repositories →</span>
      </div>
    </a>

  </div>

  <!-- Additional Note -->
  <div class="contact-note">
    <h3>Prefer another way?</h3>
    <p>You can also find me on other platforms or send me a message through LinkedIn. I typically respond within 24 hours.</p>
  </div>

  <!-- Quick Links -->
  <div class="contact-quick-links">
    <a href="/projects" class="quick-link">View My Projects</a>
    <a href="/about" class="quick-link">Learn More About Me</a>
    <a href="/assets/resume.pdf" class="quick-link" download>Download Resume</a>
  </div>

</div>

<style>
/* Contact Container */
.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Header */
.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 3rem;
  color: var(--text-main);
  margin-bottom: 1rem;
  font-weight: 700;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}

/* Availability Badge */
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--slate);
  border-radius: 50px;
  margin: 0 auto 3rem;
  font-weight: 600;
  color: var(--text-main);
  display: flex;
  justify-content: center;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.availability-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
}

/* Contact Links Grid */
.contact-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-link-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-card);
  border: 2px solid var(--slate);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.contact-link-card:hover::before {
  transform: scaleY(1);
}

.contact-link-card:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

/* Contact Icon */
.contact-icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-main);
  border-radius: var(--radius-md);
  color: var(--accent);
  transition: all 0.3s ease;
}

.contact-link-card:hover .contact-icon {
  background: var(--accent);
  color: white;
  transform: scale(1.1) rotate(5deg);
}

/* Contact Info */
.contact-info {
  flex: 1;
}

.contact-info h3 {
  color: var(--text-main);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.contact-detail {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.contact-action {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.3s ease;
  display: inline-block;
}

.contact-link-card:hover .contact-action {
  transform: translateX(5px);
}

/* Contact Note */
.contact-note {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  padding: 2rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--slate);
}

.contact-note h3 {
  color: var(--text-main);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.contact-note p {
  color: var(--text-muted);
  line-height: 1.7;
}

/* Quick Links */
.contact-quick-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.quick-link {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quick-link:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-links-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-link-card {
    flex-direction: column;
    text-align: center;
  }
  
  .availability-badge {
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
  }
  
  .quick-link {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-icon {
    width: 60px;
    height: 60px;
  }
  
  .contact-icon svg {
    width: 36px;
    height: 36px;
  }
  
  .contact-info h3 {
    font-size: 1.25rem;
  }
}
</style>
