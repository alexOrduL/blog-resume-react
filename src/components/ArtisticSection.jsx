import { Palette, Music, Camera, Film, PenTool, Heart, Disc3, DiscAlbum, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ArtisticSection.css';
import Craneo2 from '@/assets/artistic/Craneo2.webp';
import Rea from '@/assets/artistic/Rea.webp';
import music1 from '@/assets/artistic/music1.webp';
import music2 from '@/assets/artistic/music2.webp';

// Función para cargar el script de Instagram
const loadInstagramWidget = () => {
  if (document.getElementById('instagram-embed-script')) return;
  
  const script = document.createElement('script');
  script.id = 'instagram-embed-script';
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  script.onload = () => {
    // Procesar embeds cuando el script se carga
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  };
  document.body.appendChild(script);
};

const ArtisticSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    loadInstagramWidget();
    
    // Recargar embeds después de que el componente se monte
    const timer = setTimeout(() => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const artworks = [
    {
      title: t('artistic.sections.design.title'),
      icon: <PenTool size={32} />,
      description: t('artistic.sections.design.description'),
      images: [
        {
          url: Craneo2,
          caption: t('artistic.sections.design.photos.abstract')
        },
        {
          url: Rea,
          caption: t('artistic.sections.design.photos.minimal')
        }
      ]
    },
    {
      title: t('artistic.sections.music.title'),
      icon: <Music size={32} />,
      description: t('artistic.sections.music.description'),
      spotifyLink: "https://open.spotify.com/artist/0KTegBzreW7d5zsJrw4fQX",
      images: [
        {
          url: music1,
          caption: t('artistic.sections.music.photos.studio')
        },
        {
          url: music2,
          caption: t('artistic.sections.music.photos.composition')
        }
      ]
    }
  ];

  // Tus posts reales de Instagram
  const instagramPosts = [
    "https://www.instagram.com/p/DKBIYFmMiNC/",
    "https://www.instagram.com/p/DLFwYbURQiI/",
    "https://www.instagram.com/p/DC7j2w4TllB/"
    // Agrega más posts aquí si quieres
  ];

  return (
    <section id="artistic" className="artistic-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('artistic.sectionBadge')}</span>
          <h2 className="section-title">{t('artistic.title')}</h2>
          <p className="section-subtitle">{t('artistic.subtitle')}</p>
        </div>

        {/* Grid para artworks - lado a lado y responsive */}
        <div className="artistic-grid" style={{display:"flex"}}>
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
                {art.spotifyLink && (
                  <a 
                    href={art.spotifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="spotify-button"
                  >
                    <DiscAlbum size={18} />
                    Spotify
                  </a>
                )}
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

        {/* Sección separada para Instagram */}
        <div className="instagram-section">
          <div className="artistic-header instagram-header">
            <div className="artistic-icon">
              <Instagram size={32} />
            </div>
            <h3 className="artistic-title">Instagram</h3>
            <p className="artistic-description">{t('artistic.instagram.description')}</p>
          </div>

          <div 
            className="instagram-grid"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            {instagramPosts.map((postUrl, index) => (
              <div 
                key={index} 
                className="instagram-post-wrapper"
                style={{
                  width: '350px',
                  height: '450px',
                  display: 'flex',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: '#fff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '12px',
                    boxShadow: 'none',
                    margin: '0',
                    padding: '0',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    minWidth: 'auto'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a 
                      href={postUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                        color: '#c9c8cd'
                      }}
                    >
                      Ver este post en Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
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