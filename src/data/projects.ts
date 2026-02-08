export interface ProjectLink {
  label: {
    en: string;
    es: string;
  };
  url: string;
  type: 'github' | 'demo' | 'documentation' | 'other';
}

export interface ChartData {
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'bubble' | 'radar';
  title: {
    en: string;
    es: string;
  };
  data: {
    labels: {
      en: string[];
      es: string[];
    };
    datasets: {
      label: string;
      data: number[] | { x: number; y: number; r?: number }[]; // For bubble charts
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
          labels: { 
            en: ['Jan 2011', 'Mar 2011', 'May 2011', 'Jul 2011', 'Sep 2011', 'Nov 2011'],
            es: ['Ene 2011', 'Mar 2011', 'May 2011', 'Jul 2011', 'Sep 2011', 'Nov 2011'],
          },
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
          labels: { 
            en: ['Champions', 'New Customers', 'Lost', 'Loyal Customers', 'Promising', 'Potential Loyalists', 'At Risk', 'Hibernating'],
            es: ['Campeones', 'Nuevos Clientes', 'Perdidos', 'Clientes Leales', 'Prometedores', 'Potenciales Leales', 'En Riesgo', 'Hibernando'],
          },
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
          labels: { 
            en: ['Champions', 'At Risk', 'Promising', 'Loyal Customers', 'New Customers', 'Hibernating', 'Potential Loyalists', 'Lost'],
            es: ['Campeones', 'En Riesgo', 'Prometedores', 'Clientes Leales', 'Nuevos Clientes', 'Hibernando', 'Potenciales Leales', 'Perdidos'],
          },
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
          labels: { 
            en: ['Taylor Swift', 'Ed Sheeran', 'Drake', 'Vishal-Shekhar', 'The Weekend'],
            es: ['Taylor Swift', 'Ed Sheeran', 'Drake', 'Vishal-Shekhar', 'The Weekend'],
          },
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
          labels: { 
            en: ['Standard (3-4m)', 'Long (4-5m)', 'Short(2-3m)', 'Very Long(>5m)', 'Very Short(<2m)'],
            es: ['Estándar (3-4m)', 'Larga (4-5m)', 'Corta(2-3m)', 'Muy Larga(>5m)', 'Muy Corta(<2m)'],
          },
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
          labels: { 
            en: ['1920', '1940', '1960', '1980', '2000', '2020'],
            es: ['1920', '1940', '1960', '1980', '2000', '2020'],
          },
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
  id: 'disasters_analysis',
  title: {
    en: 'Global Disaster Events Dashboard',
    es: 'Análisis de eventos globales de desastres',
  },
  shortDescription: {
    en: 'Understanding Patterns, Impact, and Response in Natural Disasters.',
    es: 'Comprender los patrones, el impacto y la respuesta ante los desastres naturales.',
  },
  description: {
    en: 'This comprehensive dashboard provides deep insights into global disaster events, helping stakeholders make data-driven decisions for disaster preparedness, response, and recovery.',
    es: 'Este completo panel de control proporciona información detallada sobre los desastres naturales a nivel mundial, lo que ayuda a las partes interesadas a tomar decisiones basadas en datos para la preparación, la respuesta y la recuperación ante desastres.',
  },
  technologies: ['Python', 'Plotly', 'Pandas', 'Matplotlib', 'Numpy', 'Seaborn', 'Scikit-Learn', 'Scipy'],
  features: {
    en: [
      'Overview: Executive summary of global disaster trends, key statistics, and major events.', 
      'Temporal Analysis: Time-based patterns, seasonality, and trends in disaster occurrences.', 
      'Disaster Types: Deep dive into different disaster categories (natural, technological, human-made) and their characteristics.',
      'Geographic Analysis: Spatial distribution of disasters, hotspots, and regional vulnerabilities.',
      'Severity & Impact: Understanding the scale of disasters through metrics like fatalities, economic losses, and affected populations.',
      'Response Analysis: Evaluating the effectiveness of disaster response efforts and recovery timelines.',
      'Correlations: Discovering relationships between variables such as disaster type, location, severity, and response outcomes.'
    ],
    es: [
      'Resumen ejecutivo: resumen de las tendencias mundiales en materia de desastres, estadísticas clave y acontecimientos importantes.', 
      'Análisis temporal: patrones basados en el tiempo, estacionalidad y tendencias en la ocurrencia de desastres.', 
      'Tipos de desastres: análisis profundo de las diferentes categorías de desastres (naturales, tecnológicos, causados por el hombre) y sus características.',
      'Análisis geográfico: distribución espacial de los desastres, puntos calientes y vulnerabilidades regionales.',
      'Gravedad e impacto: comprensión del alcance de los desastres mediante métricas como fallecimientos, pérdidas económicas y poblaciones afectadas.',
      'Análisis de respuesta: evaluación de la eficacia de los esfuerzos de respuesta ante desastres y cronogramas de recuperación.',
      'Correlaciones: descubrimiento de relaciones entre variables como tipo de desastre, ubicación, gravedad y resultados de respuesta.'
    ],
  },
  image: '/images/disaster.png',
  gallery: [
    '/images/disaster.png',
    '/images/types.png',
  ],
  links: [
    {
      label: { en: 'GitHub', es: 'GitHub' },
      url: 'https://github.com/luis-c2255/Disasters_2025',
      type: 'github',
    },
    {
      label: { en: 'Live Demo', es: 'Demo en Vivo'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Disasters_2025',
      type: 'demo',
    },
    {
      label: { en: 'Documentation', es: 'Documentación'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Disaster_2025/blob/main/README.md',
      type: 'documentation',
    },  
  ],
  charts: [
    {
      type: 'line',
      title: { en: 'Response Time Trend', es: 'Tendencia del Tiempo de Respuesta' },
        data: {
          labels: { 
            en: ['Jan 2023', 'Jul 2023', 'Jan 2024', 'Jul 2024', 'Jan 2025', 'Jul 2025'],
            es: ['Ene 2023', 'Jul 2023', 'Ene 2024', 'Jul 2024', 'Ene 2025', 'Jul 2025'],
          },
          datasets: [{
            label: 'Avg Response Time (hrs)',
            data: [37.62, 36.26, 37.12, 35.54, 36.13, 35.28],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(41, 193, 219, 1)',
              'rgba(76, 205, 226, 1)',
              'rgba(111, 216, 233, 1)',
              'rgba(145, 227, 240, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(41, 193, 219, 0.4)',
              'rgba(76, 205, 226, 0.4)',
              'rgba(111, 216, 233, 0.4)',
              'rgba(145, 227, 240, 0.4)'
            ],
          }],
         },
      },
      {
      type: 'doughnut',
      title: { en: 'Proportion of Each Disaster Type', es: 'Distribución de tipos de desastres' },
        data: {
          labels: { 
            en: ['Earthquake', 'Landslide', 'Wildfire', 'Hurricane', 'Drought', 'Volcanic Eruption', 'Flood'],
            es: ['Terremoto', 'Deslizamiento de Tierra', 'Incendio Forestal', 'Huracán', 'Sequia', 'Erupción Volcánica', 'Inundación'],
          },
          datasets: [{
            label: '%',
            data: [14.5, 14.5, 14.3, 14.3, 14.3, 14.1, 13.9],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(41, 193, 219, 1)',
              'rgba(76, 205, 226, 1)',
              'rgba(111, 216, 233, 1)',
              'rgba(145, 227, 240, 1)',
              'rgba(180, 239, 247, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(41, 193, 219, 0.4)',
              'rgba(76, 205, 226, 0.4)',
              'rgba(111, 216, 233, 0.4)',
              'rgba(145, 227, 240, 0.4)',
              'rgba(180, 239, 247, 0.4)',
              'rgba(215, 250, 254, 0.4)'
            ],
          }],
         },
      },
      {
      type: 'bar',
      title: { en: 'Top 5 Disaster Types: Evolution Over Time', es: 'Evolución de los 5 tipos de desastres más comunes' },
        data: {
          labels: { 
            en: ['Drought', 'Earthquake', 'Hurricane', 'Landslide', 'Wildfire'],
            es: ['Sequia', 'Terremoto', 'Huracán', 'Deslizamiento de Tierra', 'Incendio Forestal']
          },
          datasets: [{
            label: 'Total Events',
            data: [2863, 2910, 2866, 2891, 2870],
            backgroundColor: [
              'rgba(41, 193, 219, 1)',
              'rgba(76, 205, 226, 1)',
              'rgba(111, 216, 233, 1)',
              'rgba(145, 227, 240, 1)',
              'rgba(180, 239, 247, 1)'
            ],
            borderColor: [
              'rgba(41, 193, 219, 0.4)',
              'rgba(76, 205, 226, 0.4)',
              'rgba(111, 216, 233, 0.4)',
              'rgba(145, 227, 240, 0.4)',
              'rgba(180, 239, 247, 0.4)'
             ],           
            }],
         },
      },
     ],
     category: 'Data Analysis',
  },
{
  id: 'customer_segmentation',
  title: {
    en: 'Mall Customers Analytics Dashboard',
    es: 'Análisis de clientes de un centro comercial',
  },
  shortDescription: {
    en: 'A complete end to end customer segmentation and behavioral insights project',
    es: 'Un proyecto completo de segmentación de clientes y análisis del comportamiento de principio a fin.',
  },
  description: {
    en: 'This project transforms the classic Mall Customers dataset into a fully interactive analytics product. The goal is to demonstrate how even a small dataset can support a complete analytical workflow and a polished, user-friendly dashboard.',
    es: 'Este proyecto transforma el conjunto de datos clásico «Mall Customers» en un producto analítico totalmente interactivo. El objetivo es demostrar cómo incluso un conjunto de datos pequeño puede respaldar un flujo de trabajo analítico completo y un panel de control pulido y fácil de usar.',
  },
  technologies: ['Python', 'Plotly', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
  features: {
    en: [
      'Overview: Executive summary of customer demographics, spending patterns, and key insights.', 
      'Distribution Analysis: Explore distributions of age, income, spending score, and other key variables.', 
      'Relationship Analysis: Analyze correlations between variables to uncover hidden patterns and customer behaviors.',
      'Segmentation: Apply clustering algorithms to segment customers into distinct groups based on their characteristics and behaviors.',
      'Behavioral Insights: Analyze spending patterns, preferences, and behaviors of different customer segments.',
      'Modeling: Build predictive models to forecast customer behavior, such as spending score or segment membership.'
    ],
    es: [
      'Resumen ejecutivo: resumen ejecutivo de los datos demográficos de los clientes, los patrones de gasto y la información clave.', 
      'Análisis de distribución: explora las distribuciones de edad, ingresos, puntuación de gasto y otras variables clave.', 
      'Análisis de relaciones: analiza las correlaciones entre variables para descubrir patrones ocultos y comportamientos de los clientes.',
      'Segmentación: aplica algoritmos de agrupamiento para segmentar a los clientes en grupos distintos basados en sus características y comportamientos.',
      'Insights comportamentales: analiza los patrones de gasto, preferencias y comportamientos de diferentes segmentos de clientes.',
      'Modelado: construye modelos predictivos para predecir el comportamiento del cliente, como la puntuación de gasto o la membresía en un segmento.'
    ],
  },
  image: '/images/mall.png',
  gallery: [
    '/images/mall.png',
    '/images/dash1.png',
  ],
  links: [
    {
      label: { en: 'GitHub', es: 'GitHub' },
      url: 'https://github.com/luis-c2255/mall_customers_segmentation',
      type: 'github',
    },
    {
      label: { en: 'Live Demo', es: 'Demo en Vivo'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Customer_Segmentation',
      type: 'demo',
    },
    {
      label: { en: 'Documentation', es: 'Documentación'},
      url: 'https://huggingface.co/spaces/Luismodesto86/Customer_Segmentation/blob/main/README.md',
      type: 'documentation',
    },  
  ],
  charts: [
    {
      type: 'pie',
      title: { en: 'Customer Distribution by Gender', es: 'Distribución de clientes por género' },
        data: {
          labels: { en: ['Male', 'Female'], es: ['Hombre', 'Mujer'] },
          datasets: [{
            label: 'Number of Customers',
            data: [88, 112],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(103, 232, 249, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(103, 232, 249, 0.4)'
            ],
          }],
         },
      },
      {
      type: 'line',
      title: { en: 'Elbow Method (2D: Income + Score)', es: 'Método del codo (2D: Ingreso + Puntuación)' },
        data: {
          labels: { 
            en: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
            es: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
          },
          datasets: [{
            label: 'Inertia',
            data: [273.66, 157.70, 109.22, 65.56, 60.13, 49.66, 37.31, 32.49, 30.05],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(41, 193, 219, 1)',
              'rgba(32, 191, 217, 1)',
              'rgba(58, 199, 223, 1)',
              'rgba(84, 208, 228, 1)',
              'rgba(76, 205, 226, 1)',
              'rgba(111, 216, 233, 1)',
              'rgba(145, 227, 240, 1)',
              'rgba(180, 239, 247, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(41, 193, 219, 0.4)',
              'rgba(32, 191, 217, 0.4)',
              'rgba(58, 199, 223, 0.4)',
              'rgba(84, 208, 228, 0.4)',
              'rgba(76, 205, 226, 0.4)',
              'rgba(111, 216, 233, 0.4)',
              'rgba(145, 227, 240, 0.4)',
              'rgba(180, 239, 247, 0.4)',
              'rgba(215, 250, 254, 0.4)'
            ],
          }],
         },
      },
      {
      type: 'bubble',
      title: { en: 'Segmentation: Income vs Spending', es: 'Segmentación: Ingreso vs Gasto' },
        data: {
          labels: { 
            en: ['Low income, high score', 'High income, low score', 'High income, high score', 'Low income, low score'],
            es: ['Bajo ingreso, alta puntuación', 'Alto ingreso, baja puntuación', 'Alto ingreso, alta puntuación', 'Bajo ingreso, baja puntuación'],
          },
          datasets: [{
            label: 'Customer Segments',
            data: [ 
              { x: 46, y: 55, r: 19 },
              { x: 65, y: 50, r: 19 },
              { x: 46, y: 56, r: 70 },
              { x: 50, y: 56, r: 60 },
              { x: 18, y: 6, r: 35 },
              { x: 38, y: 35, r: 65 },
              { x: 99, y: 97, r: 30 },
              { x: 113, y: 91, r: 38 },
              { x: 19, y: 81, r: 21 },
              { x: 25, y: 73, r: 31 },
              { x: 137, y: 18, r: 32 },
              { x: 78, y: 22, r: 34 },
            ],
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
