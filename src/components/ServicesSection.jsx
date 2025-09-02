import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Bot, 
  Globe, 
  Wrench, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import './ServicesSection.css';
import { useTranslation } from 'react-i18next';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const processSteps = [
    {
      number: '01',
      icon: <Globe size={32} />,
      title: t('services.process.planning.title'),
      description: t('services.process.planning.description')
    },
    {
      number: '02',
      icon: <Wrench size={32} />,
      title: t('services.process.development.title'),
      description: t('services.process.development.description')
    },
    {
      number: '03',
      icon: <Bot size={32} />,
      title: t('services.process.testing.title'),
      description: t('services.process.testing.description')
    },
    {
      number: '04',
      icon: <Lock size={32} />,
      title: t('services.process.launch.title'),
      description: t('services.process.launch.description')
    }
  ];

  const guarantees = [
    {
      icon: <Clock size={24} />,
      text: t('services.guarantees.onTime')
    },
    {
      icon: <Lock size={24} />,
      text: t('services.guarantees.secure')
    },
    {
      icon: <Wrench size={24} />,
      text: t('services.guarantees.support')
    }
  ];

  const services = [
    {
      icon: Code,
      title: t('services.fullstack.title'),
      description: t('services.fullstack.description'),
      price: t('services.fullstack.price'),
      benefits: Object.values(t('services.fullstack.benefits', { returnObjects: true }))
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      price: t('services.ai.price'),
      popular: true,
      benefits: Object.values(t('services.ai.benefits', { returnObjects: true }))
    },
    {
      icon: Database,
      title: t('services.database.title'),
      description: t('services.database.description'),
      price: t('services.database.price'),
      benefits: Object.values(t('services.database.benefits', { returnObjects: true }))
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      price: t('services.cloud.price'),
      benefits: Object.values(t('services.cloud.benefits', { returnObjects: true }))
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('services.sectionBadge')}</span>  
          <h2 className="section-title">
            {t('services.title.start')} <span className="highlight">{t('services.title.highlight')}</span> {t('services.title.end')}
          </h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              data-lang={isSpanish ? 'es' : 'en'}
            >
              
              <div className="service-header">
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <div className="service-price">
                  {service.price}
                </div>
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              
              <p className="service-description">
                {service.description}
              </p>

              <ul className="service-benefits">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="service-benefit">
                    <CheckCircle size={16} className="benefit-check" />
                    <span>{benefit}</span>
                  </li>
                ))}
              {service.popular && (
                <div className="popular-badge">
                  <Star size={15} />
                  {t('services.mostRequested')}
                </div>
              )}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`service-cta ${service.popular ? 'primary' : 'secondary'}`}
              >
                {t('services.requestQuote')}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <h3 className="process-title">{t('services.process.title')}</h3>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="guarantees-section">
          <h3 className="guarantees-title">{t('services.guarantees.title')}</h3>
          <div className="guarantees-grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-item">
                <div className="guarantee-icon">{guarantee.icon}</div>
                <span className="guarantee-text">{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>{t('services.cta.title')}</h3>
            <p>{t('services.cta.description')}</p>
            <div className="cta-actions">
              <button 
                onClick={scrollToContact}
                className="btn btn-primary btn-lg"
              >
                {t('services.cta.button')}
                <ArrowRight size={20} />
              </button>
              <p className="cta-note">
                <Clock size={16} />
                {t('services.cta.response')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;