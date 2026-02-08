import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects, ChartData } from '../data/projects';
import { ArrowLeft, CheckCircle2, ExternalLink, Github, FileText, Link as LinkIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  BubbleController,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Line, Doughnut, Pie, Bubble, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  BubbleController,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.id === projectId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <p className="text-gray-400">Project not found</p>
      </div>
    );
  }

  const gallery = project.gallery || [project.image];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'demo':
        return <ExternalLink className="w-4 h-4" />;
      case 'documentation':
        return <FileText className="w-4 h-4" />;
      default:
        return <LinkIcon className="w-4 h-4" />;
    }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#a0aec0',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
        titleColor: '#06b6d4',
        bodyColor: '#d1d5db',
        borderColor: 'rgba(6, 182, 212, 0.3)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(6, 182, 212, 0.1)',
        },
        ticks: {
          color: '#a0aec0',
        },
      },
      y: {
        grid: {
          color: 'rgba(6, 182, 212, 0.1)',
        },
        ticks: {
          color: '#a0aec0',
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#a0aec0',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
        titleColor: '#06b6d4',
        bodyColor: '#d1d5db',
        borderColor: 'rgba(6, 182, 212, 0.3)',
        borderWidth: 1,
      },
    },
  };

  const renderChart = (chart: ChartData) => {

    const labels = chart.data.labels[language];
    const data = {
      ...chart.data,
      labels,
    };
    const options = 
      chart.type === 'doughnut' || chart.type === 'pie' ? pieOptions : chartOptions;
    const commonProps = {
      data,
      options,
    };

    switch (chart.type) {
      case 'bar':
        return <Bar {...commonProps} />;
      case 'line':
        return <Line {...commonProps} />;
      case 'doughnut':
        return <Doughnut {...commonProps} />;
      case 'pie':
        return <Pie {...commonProps} />;
      case 'bubble':
        return <Bubble {...commonProps} />;
      case 'radar':
        return <Radar {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{t.projects.backToGallery}</span>
        </button>

        <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.1)]">
          {/* Image Gallery */}
          <div className="relative w-full overflow-hidden bg-black/20 p-4 flex justify-center">
            <img
              src={gallery[selectedImage]}
              alt={`${project.title[language]} - Image ${selectedImage + 1}`}
              className="max-h-[500px] w-auto object-contain rounded-lg"
            />
            
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-all text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-all text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedImage
                          ? 'bg-cyan-400 w-8'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {project.title[language]}
            </h1>

            {/* Project Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                  >
                    {getLinkIcon(link.type)}
                    <span className="font-medium">{link.label[language]}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                {t.projects.overview}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description[language]}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                {t.projects.technologies}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium hover:bg-cyan-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <span className="w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                {t.projects.keyFeatures}
              </h2>
              <div className="space-y-4">
                {project.features[language].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts Section */}
            {project.charts && project.charts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                  <span className="w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                  {language === 'en' ? 'Data Insights' : 'Insights de Datos'}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {project.charts.map((chart, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/30 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-white mb-4">
                        {chart.title[language]}
                      </h3>
                      <div className="h-64">
                        {renderChart(chart)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
