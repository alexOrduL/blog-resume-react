import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Experiencia', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' }
  ];

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

            {/* CTA Button */}
            <div className="nav-cta">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="btn btn-primary btn-sm"
              >
                Contactar
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
          
          <div className="mobile-nav-cta">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="btn btn-primary w-full"
            >
              Contactar Ahora
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
