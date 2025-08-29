import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Coffee } from 'lucide-react';
import PostCard from '../components/PostCard';
import { getRecentPosts } from '../data/posts';
import './Home.css';

const Home = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <div className="home-page fade-in">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ¡Hola! Soy <span className="highlight">Alejandro Orduño</span>
            </h1>
            <p className="hero-subtitle">
              Desarrollador Full Stack especializado en Inteligencia Artificial y experiencias web innovadoras.
              Con experiencia en el desarrollo de soluciones tecnológicas avanzadas y una pasión por la música y la cultura hip-hop.
            </p>
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">
                <BookOpen size={20} />
                Ver Blog
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Conoce más de mí
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <Code size={48} className="hero-icon" />
              <h3>Desarrollo Web</h3>
              <p>React, JavaScript, Node.js y más</p>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="recent-posts">
          <div className="section-header">
            <h2>Últimos Posts</h2>
            <p>Descubre mis últimas reflexiones y tutoriales</p>
          </div>

          <div className="posts-grid">
            {recentPosts.map((post, index) => (
              <PostCard 
                key={post.id} 
                post={post} 
                featured={index === 0}
              />
            ))}
          </div>

          <div className="section-footer">
            <Link to="/blog" className="btn btn-secondary">
              Ver todos los posts
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3>Contenido de Calidad</h3>
              <p>
                Tutoriales detallados y reflexiones profundas sobre desarrollo web,
                tecnología y mejores prácticas de la industria.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>Ejemplos Prácticos</h3>
              <p>
                Código real y ejemplos aplicables que puedes usar en tus proyectos.
                Siempre con las mejores prácticas actualizadas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Coffee size={32} />
              </div>
              <h3>Experiencias Reales</h3>
              <p>
                Comparto mis experiencias trabajando en proyectos reales,
                los desafíos enfrentados y las lecciones aprendidas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
