import { useLanguage } from '../context/LanguageContext';
import { skills, certifications } from '../data/skills';
import { Award, BarChart3, Code2, Wrench, PieChart } from 'lucide-react';

const categoryIcons = {
  analytics: BarChart3,
  programming: Code2,
  tools: Wrench,
  visualization: PieChart,
};

const categoryNames = {
  en: {
    analytics: 'Analytics',
    programming: 'Programming',
    tools: 'Tools',
    visualization: 'Visualization',
  },
  es: {
    analytics: 'Análisis',
    programming: 'Programación',
    tools: 'Herramientas',
    visualization: 'Visualización',
  },
};

export default function Skills() {
  const { language, t } = useLanguage();

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <div
                key={category}
                className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {categoryNames[language][category as keyof typeof categoryNames.en]}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/20">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
              <Award className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">{t.skills.certifications}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] hover:-translate-y-1"
              >
                {cert.thumbnail && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cert.thumbnail}
                      alt={cert.title[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060b14'] via-[#060b14]/70 to-transparent"></div>
                      </div>
                )}
                <div className={`p-6 ${cert.thumbnail ? '-mt-4 relative z-10' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title[language]}
                    </h4>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-cyan-400 font-medium">{cert.issuer}</span>
                      <span className="text-gray-500">{cert.date}</span>
                    </div>

                    {cert.credentialUrl && (
                      <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/link'>
                        <span>{language === 'en' ? 'View Certificate' : 'Ver Certificado'}</span>
                        <svg
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox='0 0 24 24'
                          >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
