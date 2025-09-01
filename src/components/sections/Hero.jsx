import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transformando Ideas en <br />
            <span className="highlight">Soluciones Tecnológicas</span>
          </h1>
          <p className="hero-subtitle">
            Desarrollador Full Stack & Especialista en IA con pasión por crear 
            experiencias digitales innovadoras que impulsan el éxito de los negocios
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Iniciar Proyecto
              <ArrowRight size={20} />
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              Ver Portafolio
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Años de<br />Experiencia</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Proyectos<br />Completados</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Satisfacción<br />Cliente</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/path-to-your-professional-image.jpg" 
            alt="Alejandro Orduño - Desarrollador Full Stack & Especialista en IA" 
            className="profile-image"
          />
          <div className="hero-background"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
