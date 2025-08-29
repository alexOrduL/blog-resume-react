import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page fade-in">
      <div className="container">
        <div className="not-found-content">
          <div className="error-visual">
            <div className="error-number">404</div>
            <div className="error-animation">
              <div className="floating-icon">
                <Search size={48} />
              </div>
            </div>
          </div>
          
          <div className="error-text">
            <h1>¡Oops! Página no encontrada</h1>
            <p>
              Lo siento, la página que estás buscando no existe o ha sido movida. 
              Puede que hayas escrito mal la URL o que el enlace esté desactualizado.
            </p>
          </div>

          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={20} />
              Ir al inicio
            </Link>
            <Link to="/blog" className="btn btn-secondary">
              <Search size={20} />
              Ver el blog
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-secondary"
            >
              <ArrowLeft size={20} />
              Volver atrás
            </button>
          </div>

          <div className="helpful-links">
            <h3>¿Quizás buscabas esto?</h3>
            <div className="links-grid">
              <Link to="/" className="helpful-link">
                <Home size={16} />
                <span>Página principal</span>
              </Link>
              <Link to="/blog" className="helpful-link">
                <Search size={16} />
                <span>Todos los posts</span>
              </Link>
              <Link to="/about" className="helpful-link">
                <Search size={16} />
                <span>Acerca de mí</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
