export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  projects: {
    title: string;
    viewProject: string;
    backToGallery: string;
    technologies: string;
    overview: string;
    keyFeatures: string;
  };
  skills: {
    title: string;
    certifications: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      title: 'Luis Modesto',
      subtitle: 'Transforming data into actionable insights',
      cta: 'View My Work',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      backToGallery: 'Back to Gallery',
      technologies: 'Technologies',
      overview: 'Overview',
      keyFeatures: 'Key Features',
    },
    skills: {
      title: 'Skills & Expertise',
      certifications: 'Certifications',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Luis Modesto',
      subtitle: 'Transformando datos en insights accionables',
      cta: 'Ver Mi Trabajo',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver Proyecto',
      backToGallery: 'Volver a la Galería',
      technologies: 'Tecnologías',
      overview: 'Descripción General',
      keyFeatures: 'Características Clave',
    },
    skills: {
      title: 'Habilidades y Experiencia',
      certifications: 'Certificaciones',
    },
    footer: {
      rights: 'Todos los derechos reservados',
    },
  },
};
