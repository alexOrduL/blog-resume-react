import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.experience'), href: '#about' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const toggleLanguage = async () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'es' ? 'en' : 'es';
    try {
      await i18n.changeLanguage(newLang);
      document.documentElement.lang = newLang;
      localStorage.setItem('i18nextLng', newLang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-logo">
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
                <span className="logo-text">Alejandro <span className="highlight">Orduño</span></span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <button 
              onClick={toggleLanguage}
              className="language-switch"
              aria-label={t('nav.changeLanguage')}
            >
              <Globe size={20} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            {/* CTA Button */}
            <div className="nav-cta">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="btn btn-primary btn-sm"
              >
                {t('nav.contact')}
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="mobile-nav-link"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Language Selector for Mobile */}
          <button 
            onClick={toggleLanguage}
            className="language-switch mobile"
            aria-label={t('nav.changeLanguage')}
          >
            <Globe size={20} />
            <span>{i18n.language === 'es' ? 'Español' : 'English'}</span>
          </button>
          
          <div className="mobile-nav-cta">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="btn btn-primary w-full"
            >
              {t('nav.contact')}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
