import { Palette, Music, Camera, Film, PenTool, Heart, Disc3, DiscAlbum, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ArtisticSection.css';

// Función para cargar el script de Instagram
const loadInstagramWidget = () => {
  if (document.getElementById('instagram-embed-script')) return;
  
  const script = document.createElement('script');
  script.id = 'instagram-embed-script';
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
};

const ArtisticSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    loadInstagramWidget();
  }, []);

  const artworks = [
    {
      title: t('artistic.sections.design.title'),
      icon: <PenTool size={32} />,
      description: t('artistic.sections.design.description'),
      images: [
        {
          url: "/src/assets/artistic/Craneo2.webp",
          caption: t('artistic.sections.design.photos.abstract')
        },
        {
          url: "/src/assets/artistic/Rea.webp",
          caption: t('artistic.sections.design.photos.minimal')
        }
      ]
    },
    {
      title: t('artistic.sections.music.title'),
      icon: <Music size={32} />,
      description: t('artistic.sections.music.description'),
      images: [
        {
          url: "/src/assets/artistic/music1.webp",
          caption: t('artistic.sections.music.photos.studio')
        },
        {
          url: "/src/assets/artistic/music2.webp",
          caption: t('artistic.sections.music.photos.composition')
        }
      ]
    },
    {
      title: "Instagram",
      icon: <Instagram size={32} />,
      description: "Aquí comparto mi proceso creativo y más contenido",
      instagramPosts: [
        "https://www.instagram.com/p/DKBIYFmMiNC/?img_index=1",
        "https://www.instagram.com/p/DLFwYbURQiI/"
      ]
    }
  ];

  return (
    <section id="artistic" className="artistic-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('artistic.sectionBadge')}</span>
          <h2 className="section-title">{t('artistic.title')}</h2>
          <p className="section-subtitle">{t('artistic.subtitle')}</p>
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
                {art.instagramPosts ? (
                  <div className="instagram-grid">
                    {art.instagramPosts.map((postUrl, postIndex) => (
                      <blockquote
                        key={postIndex}
                        className="instagram-media"
                        data-instgrm-permalink={postUrl}
                        data-instgrm-version="14"
                      ></blockquote>
                    ))}
                  </div>
                ) : (
                  art.images.map((image, imageIndex) => (
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
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="passion-section">
          <div className="passion-content">
            <Film size={48} className="passion-icon" />
            <h3>{t('artistic.passion.title')}</h3>
            <p>{t('artistic.passion.description')}</p>
            <div className="passion-stats">
              <div className="stat-item">
                <Heart size={20} className="stat-icon" />
                <span className="stat-number">{t('artistic.passion.stats.works.number')}</span>
                <span className="stat-label">{t('artistic.passion.stats.works.label')}</span>
              </div>
              <div className="stat-item">
                <Palette size={20} className="stat-icon" />
                <span className="stat-number">{t('artistic.passion.stats.disciplines.number')}</span>
                <span className="stat-label">{t('artistic.passion.stats.disciplines.label')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticSection;
