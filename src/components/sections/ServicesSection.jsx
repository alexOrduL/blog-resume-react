import React from 'react';
import { Code, Brain, Database, Cloud, Bot, Globe, Tool, Lock } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    icon: <Code size={32} />,
    color: "blue",
    title: "Desarrollo Full Stack",
    description: "Creo aplicaciones web completas y escalables utilizando las últimas tecnologías y mejores prácticas.",
    tags: ["React", "Node.js", "TypeScript", "MongoDB"]
  },
  {
    icon: <Brain size={32} />,
    color: "purple",
    title: "Inteligencia Artificial",
    description: "Implemento soluciones de IA y Machine Learning para optimizar procesos y crear experiencias inteligentes.",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    icon: <Database size={32} />,
    color: "green",
    title: "Arquitectura de Datos",
    description: "Diseño e implemento arquitecturas de datos eficientes y escalables para aplicaciones modernas.",
    tags: ["SQL", "NoSQL", "Data Modeling", "ETL"]
  },
  {
    icon: <Cloud size={32} />,
    color: "orange",
    title: "Cloud & DevOps",
    description: "Despliego y mantengo aplicaciones en la nube con prácticas DevOps modernas.",
    tags: ["AWS", "Docker", "CI/CD", "Kubernetes"]
  }
];

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
            Ofrezco servicios profesionales de desarrollo y consultoría para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.color}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
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
