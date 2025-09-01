import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '5+', label: 'Años Experiencia' },
    { number: '50+', label: 'Proyectos Completados' },
    { number: '100%', label: 'Satisfacción Cliente' },
    { number: '24/7', label: 'Soporte Técnico' }
  ];

  const achievements = [
    'Especialista en IA y Machine Learning',
    'Desarrollo Full Stack React/Node.js',
    'Certificado AWS & Google Cloud',
    'Disponible para proyectos inmediatos'
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {/* Badge de disponibilidad */}
            <div className="hero-badge fade-in">
              <div className="status-indicator"></div>
              <span>Disponible para nuevos proyectos</span>
            </div>

            {/* Headline principal */}
            <h1 className="hero-title slide-up">
              Desarrollador Full Stack &<br />
              <span className="highlight">Especialista en IA</span>
            </h1>

            <p className="hero-description slide-up">
              Creo soluciones tecnológicas innovadoras que combinan desarrollo web moderno 
              con inteligencia artificial para impulsar el éxito de tu negocio.
            </p>

            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn btn-primary"
              >
                Iniciar Proyecto
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="btn btn-secondary"
              >
                Ver Portafolio
                <Play size={20} />
              </button>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <CheckCircle size={20} />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/src/assets/infoBlog/preview.webp"
              alt="Alejandro Orduño - Desarrollador Full Stack & Especialista en IA"
              className="profile-image fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
