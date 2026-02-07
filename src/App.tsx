import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HudBackground from './components/HudBackground';

type View = 'home' | 'projects' | 'skills' | 'contact';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleViewProjects = () => {
    setCurrentView('projects');
    setSelectedProjectId(null);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleBackToGallery = () => {
    setSelectedProjectId(null);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedProjectId(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#060b14] text-white flex flex-col">
        <HudBackground />
        <div className="relative z-10">
          <Navigation currentView={currentView} onNavigate={handleNavigate} />

          <main className="flex-grow">
            {currentView === 'home' && <Hero onViewProjects={handleViewProjects} />}

            {currentView === 'projects' && !selectedProjectId && (
              <Gallery onSelectProject={handleSelectProject} />
            )}

            {currentView === 'projects' && selectedProjectId && (
              <ProjectDetail projectId={selectedProjectId} onBack={handleBackToGallery} />
            )}

            {currentView === 'skills' && <Skills />}

            {currentView === 'contact' && <Contact />}
          </main>

          <Footer onNavigate={handleNavigate}/>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
