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
    <a href="mailto:your@email.com" class="contact-link-card">
      <div class="contact-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      <div class="contact-info">
        <h3>Email</h3>
        <p class="contact-detail">your@email.com</p>
        <span class="contact-action">Send me an email →</span>
      </div>
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="contact-link-card">
      <div class="contact-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
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
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
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
