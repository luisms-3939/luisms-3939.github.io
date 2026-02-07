export interface ProjectLink {
  label: {
    en: string;
    es: string;
  };
  url: string;
  type: 'github' | 'demo' | 'documentation' | 'other';
}

export interface ChartData {
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  title: {
    en: string;
    es: string;
  };
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
    }[];
  };
}

export interface Project {
  id: string;
  title: {
    en: string;
    es: string;
  };
  shortDescription: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  technologies: string[];
  features: {
    en: string[];
    es: string[];
  };
  image: string; // Main thumbnail image
  gallery?: string[]; // Additional project images
  links?: ProjectLink[]; // External links
  charts?: ChartData[]; // Data visualizations
  category: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-analysis',
    title: {
      en: 'E-Commerce Analytics Dashboard',
      es: 'Panel de análisis de E-Commerce',
    },
    shortDescription: {
      en: 'Comprehensive analysis of e-commerce data including cohort analysis, churn prediction, market basket analysis, and customer lifetime value modeling.',
      es: 'Análisis exhaustivo de datos de comercio electrónico incluyendo análisis de cohortes, predicción de abandono, análisis de cesta de mercado y modelado de valor de vida del cliente.',
    },
    description: {
      en: 'This project demonstrates advanced data analytics techniques applied to an e-commerce dataset. The analysis provides actionable insights for business growth, customer retention strategies, and revenue optimization.',
      es: 'Este proyecto demuestra técnicas avanzadas de análisis de datos aplicadas a un conjunto de datos de comercio electrónico. El análisis proporciona insights accionables para el crecimiento empresarial, estrategias de retención de clientes y optimización de ingresos.',
    },
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Scipy'],
    features: {
      en: [
        'Cohort Analysis: Tracked user behavior patterns across different customer cohorts to identify retention trends',
        'Churn Analysis: Built predictive models to identify at-risk customers and reduce churn rate',
        'Market Basket Analysis: Discovered product associations and cross-selling opportunities using association rules',
        'Customer Lifetime Value (CLV): Calculated and segmented customers based on their predicted lifetime value',
      ],
      es: [
        'Análisis de Cohortes: Seguimiento de los patrones de comportamiento de los usuarios en diferentes cohortes de clientes para identificar tendencias de retención.',
        'Análisis de la tasa de abandono: Creación de modelos predictivos para identificar a los clientes en riesgo y reducir la tasa de abandono.',
        'Análisis de la cesta de la compra: Descubrimiento de asociaciones de productos y oportunidades de venta cruzada mediante reglas de asociación.',
        'Valor del ciclo de vida del cliente (CLV): Cálculo y segmentación de los clientes en función de su valor del ciclo de vida previsto.',
      ],
    },
    image: '/images/ecomm.svg',
    gallery: [
      '/images/ecomm.svg',
      '/images/modules.svg',
      '/images/kpis1.jpg',
    ],
    links: [
      {
        label: {
          en: 'View on GitHub',
          es: 'Ver en GitHub',
        },
        url: 'https://github.com/luis-c2255/E_Commerce_Retail/tree/main',
        type: 'github',
      },
      {
        label: {
          en: 'Live Demo',
          es: 'Demo en Vivo',
        },
        url: 'https://huggingface.co/spaces/Luismodesto86/E_Commerce_Dashboard',
        type: 'demo',
      },
      {
        label: {
          en: 'Documentation',
          es: 'Documentación',
        },
        url: 'https://github.com/luis-c2255/E_Commerce_Retail/blob/main/README.md',
        type: 'documentation',
      },
    ],
    charts: [
      {
        type: 'line',
        title: {
          en: 'Monthly Revenue Trend',
          es: 'Tendencia mensual de ingresos',
        },
        data: {
          labels: ['Jan 2011', 'Mar 2011', 'May 2011', 'Jul 2011', 'Sep 2011', 'Nov 2011'],
          datasets: [
            {
              label: 'Revenue (£M)',
              data: [581.039, 599.853, 677.279, 594.012, 943.298, 1.145545],
              backgroundColor: 'rgba(6, 182, 212, 0.5)',
              borderColor: 'rgba(6, 182, 212, 1)',
            },
          ],
        },
      },
      {
        type: 'pie',
        title: {
          en: 'Customer Segmentation Distribution',
          es: 'Distribución de la segmentación de clientes',
        },
        data: {
          labels: ['Champions', 'New Customers', 'Lost', 'Loyal Customers', 'Promising', 'Potential Loyalists', 'At Risk', 'Hibernating'],
          datasets: [
            {
              label: 'Segment %',
              data: [22.1, 21, 16.2, 11.8, 9.6, 7.2, 6.3, 5.8],
              backgroundColor: [
                'rgba(6, 182, 212, 0.1)',
                'rgba(6, 169, 198, 0.4)',
                'rgba(6, 135, 157, 0.6)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(34, 211, 238, 0.2)',
                'rgba(103, 232, 249, 0.8)',
                'rgba(165, 243, 252, 0.8)',
                'rgba(215, 250, 254, 0.8)'
              ],
              borderColor: [
                'rgba(6, 182, 212, 0.1)',
                'rgba(6, 169, 198, 0.4)',
                'rgba(6, 135, 157, 0.6)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(34, 211, 238, 0.2)',
                'rgba(103, 232, 249, 1)',
                'rgba(165, 243, 252, 1)',
                'rgba(215, 250, 254, 1)'
              ],
            },
          ],
        },
      },
      {
        type: 'bar',
        title: {
          en: 'Average Revenue',
          es: 'CLV medio por segmento',
        },
        data: {
          labels: ['Champions', 'At Risk', 'Promising', 'Loyal Customers', 'New Customers', 'Hibernating', 'Potential Loyalists', 'Lost'],
          datasets: [
            {
              label: 'Average CLV (£)',
              data: [254.644, 107.722, 96.787, 34.099, 11.172, 10.322, 8.559, 4.125],
              backgroundColor: [
                'rgba(6, 182, 212, 0.8)',
                'rgba(6, 169, 198, 0.4)',
                'rgba(6, 135, 157, 0.6)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(34, 211, 238, 0.8)',
                'rgba(103, 232, 249, 0.8)',
                'rgba(165, 243, 252, 0.8)',
                'rgba(215, 250, 254, 0.8)'
              ],
              borderColor: [
                'rgba(6, 182, 212, 0.8)',
                'rgba(6, 169, 198, 0.4)',
                'rgba(6, 135, 157, 0.6)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(34, 211, 238, 0.8)',
                'rgba(103, 232, 249, 1)',
                'rgba(165, 243, 252, 1)',
                'rgba(215, 250, 254, 1)'
              ],
            },
          ],
        },
      },
    ],
    category: 'Data Analysis',
  },

  
{
  id: 'spotify_analysis',
  title: {
    en: 'Spotify Music Analytics',
    es: 'Análisis musical de Spotify',
  },
  shortDescription: {
    en: 'Analyzed 550,619 songs from Spotify spanning 62 years (1961-2023) to uncover patterns in music popularity, artist performance, and audio characteristics. Built an interactive analytics dashboard with 50+ visualizations across 9 pages.',
    es: 'Se analizaron 550 619 canciones de Spotify que abarcan 62 años (1961-2023) para descubrir patrones en la popularidad de la música, el rendimiento de los artistas y las características del audio. Se creó un panel de análisis interactivo con más de 50 visualizaciones en 9 páginas.',
  },
  description: {
    en: 'Analyzed 550,619 songs from Spotify spanning 62 years (1961-2023) to uncover patterns in music popularity, artist performance, and audio characteristics. Built an interactive analytics dashboard with 50+ visualizations across 9 pages.',
    es: 'Se analizaron 550 619 canciones de Spotify que abarcan 62 años (1961-2023) para descubrir patrones en la popularidad de la música, el rendimiento de los artistas y las características del audio. Se creó un panel de análisis interactivo con más de 50 visualizaciones en 9 páginas.',
  },
  technologies: ['Python', 'Plotly', 'Pandas', 'Matplotlib', 'Numpy'],
  features: {
    en: [
      'Genre Analysis: Explore genre characteristics, comparisons, and evolution over time', 
      'Audio Features: Deep dive into audio characteristics like energy, danceability, and valence.', 
      'Artists Analytics: Analyze top artists, followers, and popularity metrics across the platform.',
      'Temporal Analysis: Discover how music evolved over the decades.',
      'Audio Analysis: Mood analysis, feature distribution, and sonic fingerprints.',
      'Popularity Insights: What makes songs popular? Trends, patterns, and optimal characteristics.',
      'Keys & Modes: Musical keys, modes, and harmonic analysis including Circle of Fifths.'
    ],
    es: [
      'Análisis de géneros: explora las características, comparaciones y evolución de los géneros a lo largo del tiempo.', 
      'Características de audio: profundiza en características de audio como la energía, la baileabilidad y la valencia.', 
      'Análisis de artistas: analiza los artistas más populares, sus seguidores y métricas de popularidad en toda la plataforma.',
      'Análisis temporal: descubre cómo ha evolucionado la música a lo largo de las décadas.',
      'Análisis de audio: análisis del estado de ánimo, distribución de características y huellas sonoras.',
      'nformación sobre la popularidad: ¿qué hace que las canciones sean populares? Tendencias, patrones y características óptimas',
      'Tonalidades y modos: tonalidades musicales, modos y análisis armónico, incluido el círculo de quintas'
    ],
  },
  image: '/images/spotify.svg',
  gallery: [
    '/images/spotify.svg',
    '/images/dataset_overview.png',
  ],
  links: [
    {
      label: { en: 'GitHub', es: 'GitHub' },
      url: 'https://github.com/luis-c2255/550k_Spotify_Songs/tree/main',
      type: 'github',
    },
    {
      label: { en: 'Live Demo', es: 'Demo en Vivo'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Spotify_Analysis_Dashboard',
      type: 'demo',
    },
    {
      label: { en: 'Documentation', es: 'Documentación'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Spotify_Analysis_Dashboard/blob/main/README.md',
      type: 'documentation',
    },  
  ],
  charts: [
    {
      type: 'bar',
      title: { en: 'Top 5 Most Followed Artists', es: 'Los 5 artistas con más seguidores' },
        data: {
          labels: ['Taylor Swift', 'Ed Sheeran', 'Drake', 'Vishal-Shekhar', 'The Weekend'],
          datasets: [{
            label: 'Followers (M)',
            data: [295.181, 272.044, 260.751, 258.441, 239.475],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(6, 169, 198, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.6)',
              'rgba(6, 169, 198, 0.6)',
              'rgba(103, 232, 249, 0.8)',
              'rgba(165, 243, 252, 0.8)',
              'rgba(215, 250, 254, 0.8)'
            ],
          }],
         },
      },
      {
      type: 'doughnut',
      title: { en: 'Song Length Distribution', es: 'Distribución de la duración de las canciones' },
        data: {
          labels: ['Standard (3-4m)', 'Long (4-5m)', 'Short(2-3m)', 'Very Long(>5m)', 'Very Short(<2m)'],
          datasets: [{
            label: 'Lenght (%)',
            data: [37.9, 23.2, 18.7, 16.2, 4],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(6, 169, 198, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.2)',
              'rgba(6, 169, 198, 0.2)',
              'rgba(103, 232, 249, 0.2)',
              'rgba(165, 243, 252, 0.2)',
              'rgba(215, 250, 254, 0.2)'
            ],
          }],
         },
      },
      {
      type: 'line',
      title: { en: 'Average Popularity by Decade', es: 'Mediana de popularidad por década' },
        data: {
          labels: ['1920', '1940', '1960', '1980', '2000', '2020'],
          datasets: [{
            label: 'Avg Popularity',
            data: [10.67, 13.3, 23.71, 24.22, 14.77, 20.7],
            backgroundColor: 'rgba(6, 182, 212, 0.5)',
            borderColor: 'rgba(6, 182, 212, 1)',
           }],
         },
      },
     ],
     category: 'Data Analysis',
  },

{
  id: 'spotify_analysis',
  title: {
    en: 'Global Disaster Events Dashboard',
    es: 'Análisis musical de Spotify',
  },
  shortDescription: {
    en: 'Analyzed 550,619 songs from Spotify spanning 62 years (1961-2023) to uncover patterns in music popularity, artist performance, and audio characteristics. Built an interactive analytics dashboard with 50+ visualizations across 9 pages.',
    es: 'Se analizaron 550 619 canciones de Spotify que abarcan 62 años (1961-2023) para descubrir patrones en la popularidad de la música, el rendimiento de los artistas y las características del audio. Se creó un panel de análisis interactivo con más de 50 visualizaciones en 9 páginas.',
  },
  description: {
    en: 'Analyzed 550,619 songs from Spotify spanning 62 years (1961-2023) to uncover patterns in music popularity, artist performance, and audio characteristics. Built an interactive analytics dashboard with 50+ visualizations across 9 pages.',
    es: 'Se analizaron 550 619 canciones de Spotify que abarcan 62 años (1961-2023) para descubrir patrones en la popularidad de la música, el rendimiento de los artistas y las características del audio. Se creó un panel de análisis interactivo con más de 50 visualizaciones en 9 páginas.',
  },
  technologies: ['Python', 'Plotly', 'Pandas', 'Matplotlib', 'Numpy'],
  features: {
    en: [
      'Genre Analysis: Explore genre characteristics, comparisons, and evolution over time', 
      'Audio Features: Deep dive into audio characteristics like energy, danceability, and valence.', 
      'Artists Analytics: Analyze top artists, followers, and popularity metrics across the platform.',
      'Temporal Analysis: Discover how music evolved over the decades.',
      'Audio Analysis: Mood analysis, feature distribution, and sonic fingerprints.',
      'Popularity Insights: What makes songs popular? Trends, patterns, and optimal characteristics.',
      'Keys & Modes: Musical keys, modes, and harmonic analysis including Circle of Fifths.'
    ],
    es: [
      'Análisis de géneros: explora las características, comparaciones y evolución de los géneros a lo largo del tiempo.', 
      'Características de audio: profundiza en características de audio como la energía, la baileabilidad y la valencia.', 
      'Análisis de artistas: analiza los artistas más populares, sus seguidores y métricas de popularidad en toda la plataforma.',
      'Análisis temporal: descubre cómo ha evolucionado la música a lo largo de las décadas.',
      'Análisis de audio: análisis del estado de ánimo, distribución de características y huellas sonoras.',
      'nformación sobre la popularidad: ¿qué hace que las canciones sean populares? Tendencias, patrones y características óptimas',
      'Tonalidades y modos: tonalidades musicales, modos y análisis armónico, incluido el círculo de quintas'
    ],
  },
  image: '/images/disaster.png',
  gallery: [
    '/images/disaster.png',
    '/images/dataset_overview.png',
  ],
  links: [
    {
      label: { en: 'GitHub', es: 'GitHub' },
      url: 'https://github.com/luis-c2255/550k_Spotify_Songs/tree/main',
      type: 'github',
    },
    {
      label: { en: 'Live Demo', es: 'Demo en Vivo'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Spotify_Analysis_Dashboard',
      type: 'demo',
    },
    {
      label: { en: 'Documentation', es: 'Documentación'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Spotify_Analysis_Dashboard/blob/main/README.md',
      type: 'documentation',
    },  
  ],
  charts: [
    {
      type: 'bar',
      title: { en: 'Top 5 Most Followed Artists', es: 'Los 5 artistas con más seguidores' },
        data: {
          labels: ['Taylor Swift', 'Ed Sheeran', 'Drake', 'Vishal-Shekhar', 'The Weekend'],
          datasets: [{
            label: 'Followers (M)',
            data: [295.181, 272.044, 260.751, 258.441, 239.475],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(6, 169, 198, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.6)',
              'rgba(6, 169, 198, 0.6)',
              'rgba(103, 232, 249, 0.8)',
              'rgba(165, 243, 252, 0.8)',
              'rgba(215, 250, 254, 0.8)'
            ],
          }],
         },
      },
      {
      type: 'doughnut',
      title: { en: 'Song Length Distribution', es: 'Distribución de la duración de las canciones' },
        data: {
          labels: ['Standard (3-4m)', 'Long (4-5m)', 'Short(2-3m)', 'Very Long(>5m)', 'Very Short(<2m)'],
          datasets: [{
            label: 'Lenght (%)',
            data: [37.9, 23.2, 18.7, 16.2, 4],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(6, 169, 198, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.2)',
              'rgba(6, 169, 198, 0.2)',
              'rgba(103, 232, 249, 0.2)',
              'rgba(165, 243, 252, 0.2)',
              'rgba(215, 250, 254, 0.2)'
            ],
          }],
         },
      },
      {
      type: 'line',
      title: { en: 'Average Popularity by Decade', es: 'Mediana de popularidad por década' },
        data: {
          labels: ['1920', '1940', '1960', '1980', '2000', '2020'],
          datasets: [{
            label: 'Avg Popularity',
            data: [10.67, 13.3, 23.71, 24.22, 14.77, 20.7],
            backgroundColor: 'rgba(6, 182, 212, 0.5)',
            borderColor: 'rgba(6, 182, 212, 1)',
           }],
         },
      },
     ],
     category: 'Data Analysis',
  },
{
  id: 'spotify_analysis',
  title: {
    en: 'Mall Customers Analytics Dashboard',
    es: 'Análisis musical de Spotify',
  },
  shortDescription: {
    en: 'Analyzed 550,619 songs from Spotify spanning 62 years (1961-2023) to uncover patterns in music popularity, artist performance, and audio characteristics. Built an interactive analytics dashboard with 50+ visualizations across 9 pages.',
    es: 'Se analizaron 550 619 canciones de Spotify que abarcan 62 años (1961-2023) para descubrir patrones en la popularidad de la música, el rendimiento de los artistas y las características del audio. Se creó un panel de análisis interactivo con más de 50 visualizaciones en 9 páginas.',
  },
  description: {
    en: 'Analyzed 550,619 songs from Spotify spanning 62 years (1961-2023) to uncover patterns in music popularity, artist performance, and audio characteristics. Built an interactive analytics dashboard with 50+ visualizations across 9 pages.',
    es: 'Se analizaron 550 619 canciones de Spotify que abarcan 62 años (1961-2023) para descubrir patrones en la popularidad de la música, el rendimiento de los artistas y las características del audio. Se creó un panel de análisis interactivo con más de 50 visualizaciones en 9 páginas.',
  },
  technologies: ['Python', 'Plotly', 'Pandas', 'Matplotlib', 'Numpy'],
  features: {
    en: [
      'Genre Analysis: Explore genre characteristics, comparisons, and evolution over time', 
      'Audio Features: Deep dive into audio characteristics like energy, danceability, and valence.', 
      'Artists Analytics: Analyze top artists, followers, and popularity metrics across the platform.',
      'Temporal Analysis: Discover how music evolved over the decades.',
      'Audio Analysis: Mood analysis, feature distribution, and sonic fingerprints.',
      'Popularity Insights: What makes songs popular? Trends, patterns, and optimal characteristics.',
      'Keys & Modes: Musical keys, modes, and harmonic analysis including Circle of Fifths.'
    ],
    es: [
      'Análisis de géneros: explora las características, comparaciones y evolución de los géneros a lo largo del tiempo.', 
      'Características de audio: profundiza en características de audio como la energía, la baileabilidad y la valencia.', 
      'Análisis de artistas: analiza los artistas más populares, sus seguidores y métricas de popularidad en toda la plataforma.',
      'Análisis temporal: descubre cómo ha evolucionado la música a lo largo de las décadas.',
      'Análisis de audio: análisis del estado de ánimo, distribución de características y huellas sonoras.',
      'nformación sobre la popularidad: ¿qué hace que las canciones sean populares? Tendencias, patrones y características óptimas',
      'Tonalidades y modos: tonalidades musicales, modos y análisis armónico, incluido el círculo de quintas'
    ],
  },
  image: '/images/mall.png',
  gallery: [
    '/images/mall.png',
    '/images/dataset_overview.png',
  ],
  links: [
    {
      label: { en: 'GitHub', es: 'GitHub' },
      url: 'https://github.com/luis-c2255/550k_Spotify_Songs/tree/main',
      type: 'github',
    },
    {
      label: { en: 'Live Demo', es: 'Demo en Vivo'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Spotify_Analysis_Dashboard',
      type: 'demo',
    },
    {
      label: { en: 'Documentation', es: 'Documentación'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Spotify_Analysis_Dashboard/blob/main/README.md',
      type: 'documentation',
    },  
  ],
  charts: [
    {
      type: 'bar',
      title: { en: 'Top 5 Most Followed Artists', es: 'Los 5 artistas con más seguidores' },
        data: {
          labels: ['Taylor Swift', 'Ed Sheeran', 'Drake', 'Vishal-Shekhar', 'The Weekend'],
          datasets: [{
            label: 'Followers (M)',
            data: [295.181, 272.044, 260.751, 258.441, 239.475],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(6, 169, 198, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.6)',
              'rgba(6, 169, 198, 0.6)',
              'rgba(103, 232, 249, 0.8)',
              'rgba(165, 243, 252, 0.8)',
              'rgba(215, 250, 254, 0.8)'
            ],
          }],
         },
      },
      {
      type: 'doughnut',
      title: { en: 'Song Length Distribution', es: 'Distribución de la duración de las canciones' },
        data: {
          labels: ['Standard (3-4m)', 'Long (4-5m)', 'Short(2-3m)', 'Very Long(>5m)', 'Very Short(<2m)'],
          datasets: [{
            label: 'Lenght (%)',
            data: [37.9, 23.2, 18.7, 16.2, 4],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(6, 169, 198, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.2)',
              'rgba(6, 169, 198, 0.2)',
              'rgba(103, 232, 249, 0.2)',
              'rgba(165, 243, 252, 0.2)',
              'rgba(215, 250, 254, 0.2)'
            ],
          }],
         },
      },
      {
      type: 'line',
      title: { en: 'Average Popularity by Decade', es: 'Mediana de popularidad por década' },
        data: {
          labels: ['1920', '1940', '1960', '1980', '2000', '2020'],
          datasets: [{
            label: 'Avg Popularity',
            data: [10.67, 13.3, 23.71, 24.22, 14.77, 20.7],
            backgroundColor: 'rgba(6, 182, 212, 0.5)',
            borderColor: 'rgba(6, 182, 212, 1)',
           }],
         },
      },
     ],
     category: 'Data Analysis',
  },
];
  // Template for adding new projects
  // {
  //   id: 'project-id',
  //   title: {
  //     en: 'Project Title',
  //     es: 'Título del Proyecto',
  //   },
  //   shortDescription: {
  //     en: 'Brief description for gallery view',
  //     es: 'Breve descripción para vista de galería',
  //   },
  //   description: {
  //     en: 'Detailed project description',
  //     es: 'Descripción detallada del proyecto',
  //   },
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   features: {
  //     en: ['Feature 1', 'Feature 2', 'Feature 3'],
  //     es: ['Característica 1', 'Característica 2', 'Característica 3'],
  //   },
  //   image: 'https://example.com/thumbnail.jpg',
  //   gallery: [
  //     'https://example.com/image1.jpg',
  //     'https://example.com/image2.jpg',
  //   ],
  //   links: [
  //     {
  //       label: { en: 'GitHub', es: 'GitHub' },
  //       url: 'https://github.com/username/repo',
  //       type: 'github',
  //     },
  //   ],
  //   charts: [
  //     {
  //       type: 'bar',
  //       title: { en: 'Chart Title', es: 'Título del Gráfico' },
  //       data: {
  //         labels: ['A', 'B', 'C'],
  //         datasets: [{
  //           label: 'Dataset',
  //           data: [10, 20, 30],
  //           backgroundColor: 'rgba(6, 182, 212, 0.5)',
  //           borderColor: 'rgba(6, 182, 212, 1)',
  //         }],
  //       },
  //     },
  //   ],
  //   category: 'Category Name',
  // },
//];
