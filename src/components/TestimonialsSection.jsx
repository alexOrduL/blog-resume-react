import { Star, Quote } from 'lucide-react';
import './TestimonialsSection.css';
import { useTranslation } from 'react-i18next';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  // Ahora obtenemos el array desde "testimonials.items"
  const testimonials = t('testimonials.items', { returnObjects: true });

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('testimonials.sectionBadge')}</span>
          <h2 className="section-title">
            {t('testimonials.title')}{" "}
            <span className="highlight">{t('testimonials.highlight')}</span>{" "}
            {t('testimonials.title-end')}
          </h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
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
                <p className="testimonial-text">{testimonial.quote}</p>

                {testimonial.rating && (
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
                )}
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-summary">
          <div className="summary-stat">
            <span className="stat-number">
              {t('testimonials.stats.satisfaction.value')}
            </span>
            <span className="stat-label">
              {t('testimonials.stats.satisfaction.label')}
            </span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">
              {t('testimonials.stats.clients.value')}
            </span>
            <span className="stat-label">
              {t('testimonials.stats.clients.label')}
            </span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">
              {t('testimonials.stats.projects.value')}
            </span>
            <span className="stat-label">
              {t('testimonials.stats.projects.label')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
