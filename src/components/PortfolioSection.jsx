import { Github, ExternalLink, Search } from 'lucide-react';
import './PortfolioSection.css';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico moderna con procesamiento de pagos y gestión de inventario.",
    image: "/images/portfolio/ecommerce.webp",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    featured: true
  },
  {
    title: "AI Image Generator",
    description: "Aplicación web que utiliza IA para generar imágenes artísticas a partir de descripciones textuales.",
    image: "/images/portfolio/ai-image.webp",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com/yourusername/ai-image-generator",
    liveUrl: "https://ai-image-gen.demo.com"
  },
  {
    title: "Task Management System",
    description: "Sistema de gestión de tareas empresariales con características avanzadas de colaboración.",
    image: "/images/portfolio/task-manager.webp",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Dashboard de análisis en tiempo real para monitoreo de métricas empresariales.",
    image: "/images/portfolio/analytics.webp",
    tags: ["Vue.js", "D3.js", "WebSocket", "Express"],
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    liveUrl: "https://analytics-demo.com"
  },
  {
    title: "Social Media Platform",
    description: "Red social con características modernas como chat en tiempo real y compartir multimedia.",
    image: "/images/portfolio/social-media.webp",
    tags: ["React Native", "Firebase", "GraphQL", "Node.js"],
    githubUrl: "https://github.com/yourusername/social-platform",
    liveUrl: "https://social-demo.com"
  },
  {
    title: "Fitness Tracking App",
    description: "Aplicación móvil para seguimiento de ejercicios y nutrición con integración de IA.",
    image: "/images/portfolio/fitness-app.webp",
    tags: ["Flutter", "TensorFlow Lite", "Firebase", "Node.js"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-demo.com"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Proyectos <span className="highlight">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes en desarrollo web y aplicaciones
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`portfolio-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      <Github size={20} />
                      <span>Código</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                    <button className="portfolio-link">
                      <Search size={20} />
                      <span>Detalles</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>¿Te interesa ver más de mi trabajo?</p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Ver más en GitHub
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
