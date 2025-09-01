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

const processSteps = [
  {
    number: '01',
    icon: <Globe size={32} />,
    title: 'Planificación',
    description: 'Análisis detallado de tus necesidades y objetivos'
  },
  {
    number: '02',
    icon: <Wrench size={32} />,
    title: 'Desarrollo',
    description: 'Implementación ágil con revisiones regulares'
  },
  {
    number: '03',
    icon: <Bot size={32} />,
    title: 'Pruebas',
    description: 'Testing exhaustivo y optimización'
  },
  {
    number: '04',
    icon: <Lock size={32} />,
    title: 'Lanzamiento',
    description: 'Despliegue seguro y soporte continuo'
  }
];

const guarantees = [
  {
    icon: <Clock size={24} />,
    text: 'Entregas Puntuales'
  },
  {
    icon: <Lock size={24} />,
    text: 'Código Seguro'
  },
  {
    icon: <Wrench size={24} />,
    text: 'Soporte Continuo'
  }
];

const services = [
  {
    icon: Code,
    title: "Desarrollo Web Full Stack",
    description: "Aplicaciones web modernas y escalables con las últimas tecnologías.",
    price: "Desde $2,000 USD",
    popular: true,
    benefits: [
      "Diseño Responsivo",
      "SEO Optimizado",
      "Alto Rendimiento",
      "API RESTful",
      "Seguridad Avanzada"
    ]
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Soluciones de IA y Machine Learning para optimizar procesos.",
    price: "Desde $3,000 USD",
    benefits: [
      "Modelos Personalizados",
      "Procesamiento de Datos",
      "Integración APIs",
      "Mantenimiento",
      "Documentación"
    ]
  },
  {
    icon: Database,
    title: "Arquitectura de Datos",
    description: "Diseño e implementación de arquitecturas de datos eficientes.",
    price: "Desde $2,500 USD",
    benefits: [
      "Modelado de Datos",
      "Optimización",
      "Migración",
      "Seguridad",
      "Escalabilidad"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Implementación y gestión de infraestructura en la nube.",
    price: "Desde $1,500 USD",
    benefits: [
      "CI/CD",
      "Monitoreo 24/7",
      "Automatización",
      "Backups",
      "Escalado Automático"
    ]
  }
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Servicios</span>  
          <h2 className="section-title">
            Soluciones <span className="highlight">Tecnológicas</span> Integrales
          </h2>
          <p className="section-subtitle">
            Desarrollo profesional y consultoría para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${service.popular ? 'popular' : ''}`}
            >
              {service.popular && (
                <div className="popular-badge">
                  <Star size={14} />
                  Más Solicitado
                </div>
              )}
              <div className="service-header">
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <div className="service-price">{service.price}</div>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-benefits">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="service-benefit">
                    <CheckCircle size={16} className="benefit-check" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`btn ${service.popular ? 'btn-primary' : 'btn-outline'} w-full service-cta`}
              >
                Solicitar Cotización
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <h3 className="process-title">Mi Proceso de Desarrollo</h3>
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
          <h3 className="guarantees-title">¿Por qué Elegir mis Servicios?</h3>
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
            <h3>¿Listo para Iniciar tu Proyecto?</h3>
            <p>
              Hablemos sobre tu idea y cómo puedo ayudarte a convertirla en realidad. 
              Consulta gratuita de 30 minutos para evaluar tu proyecto.
            </p>
            <div className="cta-actions">
              <button 
                onClick={scrollToContact}
                className="btn btn-primary btn-lg"
              >
                Consulta Gratuita
                <ArrowRight size={20} />
              </button>
              <p className="cta-note">
                <Clock size={16} />
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
