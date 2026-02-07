export interface Skill {
  name: string;
  level: number;
  category: 'analytics' | 'programming' | 'tools' | 'visualization';
}

export interface Certification {
  title: {
    en: string;
    es: string;
  };
  issuer: string;
  date: string;
  credentialUrl?: string;
  thumbnail?: string;
}

export const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'SQL', level: 90, category: 'programming' },
  { name: 'Pandas', level: 90, category: 'analytics' },
  { name: 'NumPy', level: 85, category: 'analytics' },
  { name: 'Matplotlib', level: 85, category: 'visualization' },
  { name: 'Seaborn', level: 85, category: 'visualization' },
  { name: 'Scikit-learn', level: 80, category: 'analytics' },
  { name: 'Tableau', level: 80, category: 'visualization' },
  { name: 'Excel', level: 90, category: 'tools' },
  { name: 'R', level: 70, category: 'programming' },
  { name: 'Git', level: 85, category: 'tools' },
];

export const certifications: Certification[] = [
  {
    title: {
      en: 'Google Data Analytics Professional Certificate',
      es: 'Certificado Profesional de Análisis de Datos de Google',
    },
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://coursera.org/share/529b22f51419b7a5c0724264450436fc',
    thumbnail: '/images/data.png',
  },
  {
    title: {
      en: 'IBM Data Science Professional Certificate',
      es: 'Certificado Profesional en ciencia de datos de IBM',
    },
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://github.com/luis-c2255/Project_Capstone_IBM_SpaceX/blob/main/ibm.pdf',
    thumbnail: '/images/ibm.png',
  },
  {
    title: {
      en: 'Google UX Design Professional Certificate',
      es: 'Certificado Microsoft: Analista de Datos Asociado',
    },
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://coursera.org/share/dcf5f75244eff836a7bfbdfafbe65b1c',
    thumbnail: '/images/ux.png',
  },
  {
    title: {
      en: 'Google Project Management Professional Certificate',
      es: 'Python para Ciencia de Datos y Aprendizaje Automático',
    },
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://coursera.org/share/f9a1c52b8d4a60f556af20dd2b08c806',
    thumbnail: '/images/proj.png',
  },
  {
    title: {
      en: 'Google IT Automation with Python Professional Certificate',
      es: 'Certificado profesional en automatización de TI con Python de Google.',
    },
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://github.com/luis-c2255/Google-IT-Automation-with-Python/blob/main/Certificate.pdf',
    thumbnail: '/images/it_auto.png',
  },
  {
    title: {
      en: 'Google IT Support Professional Certificate',
      es: 'Certificado profesional en soporte de TI de Google.',
    },
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://github.com/luis-c2255/Google-IT-Support/blob/main/IT%20Support%20Certificate.pdf',
    thumbnail: '/images/it_sup.png',
  },
];
