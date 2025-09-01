import { Palette, Music, Camera, Film, PenTool, Heart } from 'lucide-react';
import './ArtisticSection.css';

const artworks = [
  {
    title: "Fotografía",
    icon: <Camera size={32} />,
    description: "Fotografía urbana y retratos",
    images: [
      {
        url: "/images/artistic/photo1.webp",
        caption: "Ciudad al atardecer"
      },
      {
        url: "/images/artistic/photo2.webp",
        caption: "Retrato en B&N"
      }
    ]
  },
  {
    title: "Diseño Digital",
    icon: <PenTool size={32} />,
    description: "Ilustración y diseño gráfico",
    images: [
      {
        url: "/images/artistic/design1.webp",
        caption: "Ilustración abstracta"
      },
      {
        url: "/images/artistic/design2.webp",
        caption: "Diseño minimalista"
      }
    ]
  },
  {
    title: "Música",
    icon: <Music size={32} />,
    description: "Composición y producción",
    images: [
      {
        url: "/images/artistic/music1.webp",
        caption: "Estudio de grabación"
      },
      {
        url: "/images/artistic/music2.webp",
        caption: "Composición musical"
      }
    ]
  }
];

const ArtisticSection = () => {
  return (
    <section id="artistic" className="artistic-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Arte & Creatividad</span>
          <h2 className="section-title">
            Mi Lado <span className="highlight">Artístico</span>
          </h2>
          <p className="section-subtitle">
            Más allá del código, exploro diferentes formas de expresión creativa
          </p>
        </div>

        <div className="artistic-grid">
          {artworks.map((art, index) => (
            <div 
              key={index} 
              className="artistic-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="artistic-header">
                <div className="artistic-icon">
                  {art.icon}
                </div>
                <h3 className="artistic-title">{art.title}</h3>
                <p className="artistic-description">{art.description}</p>
              </div>

              <div className="artistic-gallery">
                {art.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="gallery-item">
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <p className="gallery-caption">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="passion-section">
          <div className="passion-content">
            <Film size={48} className="passion-icon" />
            <h3>La Creatividad como Motor</h3>
            <p>
              El arte y la tecnología son dos caras de la misma moneda: la innovación. 
              Mi pasión por ambos campos me permite aportar una perspectiva única a cada proyecto.
            </p>
            <div className="passion-stats">
              <div className="stat-item">
                <Heart size={20} className="stat-icon" />
                <span className="stat-number">100+</span>
                <span className="stat-label">Obras Creadas</span>
              </div>
              <div className="stat-item">
                <Palette size={20} className="stat-icon" />
                <span className="stat-number">3</span>
                <span className="stat-label">Disciplinas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticSection;
