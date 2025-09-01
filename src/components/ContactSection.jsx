import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Contacto</span>
          <h2 className="section-title">
            ¿Listo para <span className="highlight">Comenzar</span>?
          </h2>
          <p className="section-subtitle">
            Agenda una consulta gratuita para discutir tu proyecto
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <Mail className="info-icon" size={24} />
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@yourdomain.com">
                  contact@yourdomain.com
                </a>
              </p>
              <span className="response-time">
                <Clock size={16} />
                Respuesta en 24h
              </span>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={24} />
              <h3>Teléfono</h3>
              <p>
                <a href="tel:+1234567890">
                  +1 (234) 567-890
                </a>
              </p>
              <span className="availability">
                <Calendar size={16} />
                Lun - Vie, 9AM - 6PM
              </span>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={24} />
              <h3>Ubicación</h3>
              <p>Ciudad de México, México</p>
              <span className="work-mode">
                Trabajo remoto disponible
              </span>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="¿Sobre qué quieres hablar?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full">
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
