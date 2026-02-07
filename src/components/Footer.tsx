import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'projects' | 'skills' | 'contact') => void;
}
export default function Footer({ onNavigate }: FooterProps) {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      madeWith: 'Made with',
      by: 'by Luis Modesto',
      rights: 'All rights reserved',
      quickLinks: 'Quick Links',
      connect: 'Connect',
    },
    es: {
      madeWith: 'Hecho con',
      by: 'por Luis Modesto',
      rights: 'Todos los derechos reservados',
      quickLinks: 'Enlaces Rápidos',
      connect: 'Conectar',
    },
  };

  const t = content[language];

  const handleLinkClick = (view: 'home' | 'projects' | 'skills' | 'contact') => {
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo({top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-cyan-500/20 backdrop-blur-md bg-[#060b14]/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-4">
              Luis Modesto
            </h3>
            <p className="text-gray-400 mb-4">
              {language === 'en'
                ? 'Data Analyst transforming data into actionable insights'
                : 'Analista de Datos transformando datos en insights accionables'}
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>{t.madeWith}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{t.by}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick("home")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {language === 'en' ? 'Home' : 'Inicio'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("projects")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {language === 'en' ? 'Projects' : 'Proyectos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("skills")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {language === 'en' ? 'Skills' : 'Habilidades'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t.connect}</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/luis-c2255"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/luis-modesto3986"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:luiscsmodesto@outlook.com"
                className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Luis Modesto. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
