import HeroSection from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';

export default function App() {
  return (
    <main className="main-wrapper">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
