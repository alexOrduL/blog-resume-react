import { Github, ExternalLink, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PortfolioSection.css';
import avance from '@/assets/infoBlog/avance.webp';
import tally from '@/assets/infoBlog/tally.webp';
import leanfit from '@/assets/infoBlog/leanfit.webp';
import movigoo from '@/assets/infoBlog/movigoo.webp';
import yojma from '@/assets/infoBlog/yojma.webp';


const PortfolioSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.projects.ecommerce.title'),
      description: t('portfolio.projects.ecommerce.description'),
      image: avance,
      tags: ["React", ".Net", "MariaDB", "PayPal", "MercadoPago"],
      githubUrl: false,
      liveUrl: "https://avanceytec.com.mx/",
      featured: true
    },
    {
      title: t('portfolio.projects.aiImage.title'),
      description: t('portfolio.projects.aiImage.description'),
      image: leanfit,
      tags: ["Laravel", "Flutter", "PostgreSql", "FastAPI"],
      githubUrl: false,
      liveUrl: "https://leanfit.mx/"
    },
    {
      title: t('portfolio.projects.taskManager.title'),
      description: t('portfolio.projects.taskManager.description'),
      image: tally,
      tags: ["Laravel", "Vue.js", "PostgreSQL", "Docker", "Cypress"],
      githubUrl: false,
      liveUrl: "https://www.tallylegal.io/"
    },
    {
      title: t('portfolio.projects.analytics.title'),
      description: t('portfolio.projects.analytics.description'),
      image: movigoo,
      tags: ["Laravel", "NodeJs", "MetaApis", "Five9", "Python"],
      githubUrl: false,
      liveUrl: "https://movigoo.com/"
    },
    {
      title: t('portfolio.projects.social.title'),
      description: t('portfolio.projects.social.description'),
      image: yojma,
      tags: ["Ruby", "Rails"],
      githubUrl: false,
      liveUrl: "https://yojma.tv"
    },
    // {
    //   title: t('portfolio.projects.fitness.title'),
    //   description: t('portfolio.projects.fitness.description'),
    //   image: "/images/portfolio/fitness-app.webp",
    //   tags: ["Flutter", "TensorFlow Lite", "Firebase", "Node.js"],
    //   githubUrl: "https://github.com/yourusername/fitness-app",
    //   liveUrl: "https://fitness-demo.com"
    // }
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
                    {project.githubUrl && (
                        <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="portfolio-link"
                        >
                        <Github size={20} />
                        <span>{t('portfolio.viewCode')}</span>
                        </a>
                    )}
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
