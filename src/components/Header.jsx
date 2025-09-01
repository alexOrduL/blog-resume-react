import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.about'), path: '/about' },
  ];

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <BookOpen size={24} />
            <span className="logo-text">Mi Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="language-btn"
              onClick={changeLanguage}
              aria-label={t('nav.changeLanguage')}
            >
              <Globe size={20} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            className="mobile-nav-link language-btn"
            onClick={changeLanguage}
          >
            <Globe size={20} />
            <span>{t('nav.changeLanguage')} ({i18n.language.toUpperCase()})</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
