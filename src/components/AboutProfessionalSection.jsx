import { FileCode, GraduationCap, Award, Users } from 'lucide-react';
import './AboutProfessionalSection.css';
import { useTranslation } from 'react-i18next';

const AboutProfessionalSection = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: <FileCode size={32} />,
      number: t('about.achievements.projects.number'),
      label: t('about.achievements.projects.label'),
      description: t('about.achievements.projects.description')
    },
    {
      icon: <GraduationCap size={32} />,
      number: t('about.achievements.experience.number'),
      label: t('about.achievements.experience.label'),
      description: t('about.achievements.experience.description')
    },
    {
      icon: <Award size={32} />,
      number: t('about.achievements.certifications.number'),
      label: t('about.achievements.certifications.label'),
      description: t('about.achievements.certifications.description')
    },
    {
      icon: <Users size={32} />,
      number: t('about.achievements.clients.number'),
      label: t('about.achievements.clients.label'),
      description: t('about.achievements.clients.description')
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('about.sectionBadge')}</span>
          <h2 className="section-title">
            {t('about.title.first')} <span className="highlight">{t('about.title.highlight1')}</span> {t('about.title.and')}
            {t('about.title.second')} <span className="highlight">{t('about.title.highlight2')}</span>
          </h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>{t('about.intro')}</p>
            
            <ul className="expertise-list">
              <li>{t('about.expertise.fullstack')}</li>
              <li>{t('about.expertise.architecture')}</li>
              <li>{t('about.expertise.cloud')}</li>
              <li>{t('about.expertise.consulting')}</li>
            </ul>

            <p>{t('about.description')}</p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="achievement-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-number">
                  {achievement.number}
                </div>
                <h3 className="achievement-label">
                  {achievement.label}
                </h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProfessionalSection;
