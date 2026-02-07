import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { ArrowRight } from 'lucide-react';

interface GalleryProps {
  onSelectProject: (projectId: string) => void;
}

export default function Gallery({ onSelectProject }: GalleryProps) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title[language]}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.shortDescription[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-cyan-500/5 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded bg-cyan-500/5 text-cyan-300 border border-cyan-500/20">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project.id)}
                  className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <span>{t.projects.viewProject}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
