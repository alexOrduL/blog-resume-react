import { Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/alexOrduL' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/aorduno95' },
    // { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/alexorduno' },
    { name: 'Email', icon: Mail, url: 'mailto:aordunol95@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            {/* <h3>Mi Blog Personal</h3> */}
            <p>
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          {/* <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <nav className="footer-nav">
              <a href="/">Inicio</a>
              <a href="/blog">Blog</a>
              <a href="/about">Acerca de</a>
            </nav>
          </div> */}

          {/* Social Links */}
          <div className="footer-section">
            <h4>{t('footer.follow')}</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {t('footer.madeWith')}{' '}
            <Heart size={16} className="heart" /> {t('footer.and') + ' '}
            {t('footer.by')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
