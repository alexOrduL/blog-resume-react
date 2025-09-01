import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Brain, Database, Cloud, Globe } from 'lucide-react';
import '../styles/ServicesSection.css';

const getServiceIcon = (size = 32) => ({
  fullstack: <Code size={size} />,
  ai: <Brain size={size} />,
  data: <Database size={size} />,
  cloud: <Cloud size={size} />
});

const serviceColors = {
  fullstack: "blue",
  ai: "purple",
  data: "green",
  cloud: "orange"
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('services.sectionBadge')}</span>
          <h2 className="section-title">
            {t('services.title')}
          </h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {['fullstack', 'ai', 'data', 'cloud'].map((serviceKey, index) => (
            <div 
              key={serviceKey} 
              className={`service-card ${serviceColors[serviceKey]}`} 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="service-icon">{getServiceIcon()[serviceKey]}</div>
              <h3>{t(`services.cards.${serviceKey}.title`)}</h3>
              <p>{t(`services.cards.${serviceKey}.description`)}</p>
              <div className="service-tags">
                {t(`services.cards.${serviceKey}.tags`, { returnObjects: true }).map((tag, i) => (
                  <span key={i} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
