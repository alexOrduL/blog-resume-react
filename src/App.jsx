import './App.css';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutProfessionalSection from './components/AboutProfessionalSection';
import PortfolioSection from './components/PortfolioSection';
import ArtisticSection from './components/ArtisticSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutProfessionalSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ArtisticSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
