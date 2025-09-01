import { Star, Quote } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "CEO, TechStart",
    company: "TechStart Solutions",
    image: "/images/testimonials/testimonial1.webp",
    rating: 5,
    text: "Alejandro demostró un nivel excepcional de profesionalismo y expertise técnico. Entregó nuestro proyecto antes de lo previsto y con una calidad sobresaliente."
  },
  {
    name: "María González",
    position: "CTO, DataCore",
    company: "DataCore Analytics",
    image: "/images/testimonials/testimonial2.webp",
    rating: 5,
    text: "Su capacidad para entender nuestras necesidades y traducirlas en soluciones técnicas efectivas fue impresionante. Definitivamente volveremos a trabajar juntos."
  },
  {
    name: "Juan Pérez",
    position: "Founder",
    company: "InnovaTech",
    image: "/images/testimonials/testimonial3.webp",
    rating: 5,
    text: "La atención al detalle y la calidad del código entregado superaron nuestras expectativas. Un profesional altamente recomendable."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonios</span>
          <h2 className="section-title">
            Lo que Dicen mis <span className="highlight">Clientes</span>
          </h2>
          <p className="section-subtitle">
            Opiniones de clientes satisfechos que han confiado en mis servicios
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="quote-icon" size={48} />
              
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="star-icon" 
                      fill="currentColor" 
                    />
                  ))}
                </div>
              </div>

              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-summary">
          <div className="summary-stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfacción</span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Clientes</span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Proyectos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
