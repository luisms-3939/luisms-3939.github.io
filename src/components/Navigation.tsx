import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavigationProps {
  currentView: 'home' | 'projects' | 'skills' | 'contact';
  onNavigate: (view: 'home' | 'projects' | 'skills' | 'contact') => void;
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 backdrop-blur-md bg-[#060b14]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent hover:from-cyan-300 hover:to-cyan-500 transition-all"
            >
              Portfolio
            </button>

            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => onNavigate('home')}
                className={`px-3 py-2 text-sm font-medium transition-all ${
                  currentView === 'home'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className={`px-3 py-2 text-sm font-medium transition-all ${
                  currentView === 'projects'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className={`px-3 py-2 text-sm font-medium transition-all ${
                  currentView === 'skills'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className={`px-3 py-2 text-sm font-medium transition-all ${
                  currentView === 'contact'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all text-cyan-400 hover:text-cyan-300"
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">{language}</span>
          </button>
          <a
            href={language === 'en' ? '/resume-en.pdf' : '/resume-es.pdf'}
            download
            className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <svg
              className="w-4 h-4"
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
            <span className="text-sm">{t.nav.contact === 'Contact' ? 'Resume' : 'CV'}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
