import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    t('hero.achievements.ai'),
    t('hero.achievements.fullstack'),
    t('hero.achievements.cloud'),
    t('hero.achievements.availability')
  ];

  const stats = [
    { 
      number: t('hero.stats.experience.number'),
      label: t('hero.stats.experience.label')
    },
    { 
      number: t('hero.stats.projects.number'),
      label: t('hero.stats.projects.label')
    },
    { 
      number: t('hero.stats.clients.number'),
      label: t('hero.stats.clients.label')
    }
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
            <div className="hero-badge fade-in">
              <div className="status-indicator"></div>
              <span>{t('hero.availability')}</span>
            </div>

            <h1 className="hero-title slide-up">
              {t('hero.greeting')}<br />
              <span className="highlight">{t('hero.name')}</span>
            </h1>

            <p className="hero-description slide-up">
              {t('hero.subtitle')}
            </p>

            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn btn-primary"
              >
                {t('hero.cta')}
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="btn btn-secondary"
              >
                {t('hero.secondaryCta')}
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
              alt={`${t('hero.name')} - ${t('hero.title')}`}
              className="profile-image fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
