import { Github, ExternalLink, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.projects.ecommerce.title'),
      description: t('portfolio.projects.ecommerce.description'),
      image: "/images/portfolio/ecommerce.webp",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: t('portfolio.projects.aiImage.title'),
      description: t('portfolio.projects.aiImage.description'),
      image: "/images/portfolio/ai-image.webp",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      githubUrl: "https://github.com/yourusername/ai-image-generator",
      liveUrl: "https://ai-image-gen.demo.com"
    },
    {
      title: t('portfolio.projects.taskManager.title'),
      description: t('portfolio.projects.taskManager.description'),
      image: "/images/portfolio/task-manager.webp",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/yourusername/task-management",
      liveUrl: "https://task-manager-demo.com"
    },
    {
      title: t('portfolio.projects.analytics.title'),
      description: t('portfolio.projects.analytics.description'),
      image: "/images/portfolio/analytics.webp",
      tags: ["Vue.js", "D3.js", "WebSocket", "Express"],
      githubUrl: "https://github.com/yourusername/analytics-dashboard",
      liveUrl: "https://analytics-demo.com"
    },
    {
      title: t('portfolio.projects.social.title'),
      description: t('portfolio.projects.social.description'),
      image: "/images/portfolio/social-media.webp",
      tags: ["React Native", "Firebase", "GraphQL", "Node.js"],
      githubUrl: "https://github.com/yourusername/social-platform",
      liveUrl: "https://social-demo.com"
    },
    {
      title: t('portfolio.projects.fitness.title'),
      description: t('portfolio.projects.fitness.description'),
      image: "/images/portfolio/fitness-app.webp",
      tags: ["Flutter", "TensorFlow Lite", "Firebase", "Node.js"],
      githubUrl: "https://github.com/yourusername/fitness-app",
      liveUrl: "https://fitness-demo.com"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('portfolio.sectionBadge')}</span>
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`portfolio-card ${project.featured ? 'featured' : ''}`}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>{t('portfolio.featured')}</span>
                </div>
              )}

              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      <ExternalLink size={20} />
                      <span>{t('portfolio.viewProject')}</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      <Github size={20} />
                      <span>{t('portfolio.viewCode')}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
