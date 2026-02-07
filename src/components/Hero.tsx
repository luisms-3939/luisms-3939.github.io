import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
}

export default function Hero({ onViewProjects }: HeroProps) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 text-center px-4">
        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5">
          <p className="text-cyan-400 text-sm font-medium">{t.hero.greeting}</p>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
          {t.hero.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onViewProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/50 rounded-lg hover:from-cyan-500/30 hover:to-cyan-600/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
              {t.hero.cta}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>

          <a
            href={language === 'en' ? '/resume-en.pdf' : '/resume-es.pdf'}
            download
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-white font-medium">
              {language === 'en' ? 'Download Resume' : 'Descargar CV'}
            </span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400/50" />
        </div>
      </div>
    </div>
  );
}
