import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';
import './ContactSection.css';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('contact.sectionBadge')}</span>
          <h2 className="section-title">
            {t('contact.title')} <span className="highlight">{t('contact.highlight')}</span>{t('contact.title-end')}
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <Mail className="info-icon" size={24} />
              <h3>{t('contact.contactInfo.email')}</h3>
              <p>
                <a href="mailto:contact@yourdomain.com">
                  {t('contact.contactInfo.emailValue')}
                </a>
              </p>
              <span className="response-time">
                <Clock size={16} />
                {t('contact.contactInfo.responseTime')}
              </span>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={24} />
              <h3>{t('contact.contactInfo.phoneTitle')}</h3>
              <p>
                <a href="tel:+526141287721">
                  {t('contact.contactInfo.phone')}
                </a>
              </p>
              <span className="availability">
                <Calendar size={16} />
                {t('contact.contactInfo.shceduleTime')}
              </span>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={24} />
              <h3>{t('contact.contactInfo.location')}</h3>
              <p>{t('contact.contactInfo.city')}</p>
              <span className="work-mode">
                {t('contact.contactInfo.availability')}
              </span>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name.label')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact.form.name.placeholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email.label')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact.form.email.placeholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject.label')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t('contact.form.subject.placeholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message.label')}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.form.message.placeholder')}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full">
                {t('contact.form.submit')}
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
