import { Link } from 'react-router-dom';
import { 
  Code, 
  BookOpen, 
  Music, 
  Heart,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Coffee
} from 'lucide-react';
import './About.css';

const About = () => {
  const professionalSkills = [
    'Inteligencia Artificial', 'Machine Learning', 'Python', 'React', 
    'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 
    'PostgreSQL', 'Git', 'Docker', 'AWS'
  ];

  const personalSkills = [
    'Música', 'Producción Musical', 'Hip Hop', 'Breaking', 'Street Dance'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/alexOrduL' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/alejandro-orduno' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/alexorduno' },
    { name: 'Email', icon: Mail, url: 'mailto:contacto@alejandroorduno.com' },
  ];

  return (
    <div className="about-page fade-in">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-content">
            <div className="profile-section">
              <div className="profile-image">
                <img 
                  src="/images/alejandro-profile.webp" 
                  alt="Alejandro Orduño"
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h1>Alejandro Orduño</h1>
                <p className="intro-text">
                  Desarrollador Full Stack especializado en Inteligencia Artificial, 
                  con una pasión por la tecnología y el arte. Además de crear soluciones 
                  tecnológicas innovadoras, soy músico y bailarín de hip-hop, 
                  fusionando la creatividad técnica con la expresión artística.
                </p>
              </div>
            </div>
            
            <div className="dual-section">
              <div className="professional-section">
                <h2><Code size={24} className="section-icon" /> Perfil Profesional</h2>
                <p>
                  Especialista en desarrollo de software con enfoque en IA y soluciones web.
                  Mi experiencia abarca desde el desarrollo de aplicaciones empresariales
                  hasta la implementación de sistemas de inteligencia artificial.
                </p>
                <div className="skills-container">
                  <h3>Habilidades Técnicas</h3>
                  <div className="skills-grid">
                    {professionalSkills.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="personal-section">
                <h2><Music size={24} className="section-icon" /> Perfil Artístico</h2>
                <p>
                  Artista multifacético en la escena del hip-hop, combinando la producción
                  musical con el breaking y la cultura urbana. Mi música está disponible en
                  Spotify y participo activamente en eventos y competencias de baile.
                </p>
                <div className="skills-container">
                  <h3>Habilidades Artísticas</h3>
                  <div className="skills-grid">
                    {personalSkills.map((skill) => (
                      <span key={skill} className="skill-tag personal">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="about-main">
          {/* Story Section */}
          <section className="story-section">
            <h2>Mi Historia</h2>
            <div className="story-content">
              <p>
                Mi viaje en el desarrollo web comenzó hace varios años cuando descubrí 
                la magia de transformar ideas en realidades digitales. Desde entonces, 
                he tenido la oportunidad de trabajar en proyectos emocionantes y 
                aprender de increíbles equipos de desarrollo.
              </p>
              <p>
                Lo que más me emociona del desarrollo web es la posibilidad de crear 
                soluciones que realmente impacten la vida de las personas. Cada línea 
                de código es una oportunidad para mejorar una experiencia de usuario 
                o resolver un problema complejo.
              </p>
              <p>
                Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
                contribuir a proyectos open source, y por supuesto, escribir en este blog 
                para compartir lo que he aprendido en el camino.
              </p>
            </div>
          </section>

          {/* Experience & Education */}
          <div className="info-grid">
            <section className="experience-section">
              <div className="section-header">
                <Briefcase size={24} />
                <h3>Experiencia</h3>
              </div>
              <div className="experience-list">
                <div className="experience-item">
                  <h4>Senior Full Stack Developer</h4>
                  <p className="company">Tech Company • 2022 - Presente</p>
                  <p className="description">
                    Desarrollo de aplicaciones web escalables usando React, Node.js 
                    y tecnologías cloud. Liderando un equipo de 5 desarrolladores.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>Full Stack Developer</h4>
                  <p className="company">Startup XYZ • 2020 - 2022</p>
                  <p className="description">
                    Construcción de MVP y features clave para plataforma SaaS. 
                    Trabajo con React, Express, y MongoDB.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>Frontend Developer</h4>
                  <p className="company">Digital Agency • 2019 - 2020</p>
                  <p className="description">
                    Desarrollo de sitios web responsive y aplicaciones frontend 
                    para diversos clientes.
                  </p>
                </div>
              </div>
            </section>

            <section className="education-section">
              <div className="section-header">
                <GraduationCap size={24} />
                <h3>Educación</h3>
              </div>
              <div className="education-list">
                <div className="education-item">
                  <h4>Ingeniería en Sistemas</h4>
                  <p className="institution">Universidad Tecnológica • 2015 - 2019</p>
                  <p className="description">
                    Enfoque en desarrollo de software, algoritmos y estructuras de datos.
                  </p>
                </div>
                <div className="education-item">
                  <h4>Certificaciones</h4>
                  <p className="institution">Varias Plataformas</p>
                  <ul>
                    <li>AWS Certified Developer</li>
                    <li>React Advanced Patterns</li>
                    <li>Node.js Professional</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Skills Section */}
          <section className="skills-section">
            <h3>Tecnologías que Uso</h3>
            <div className="skills-grid">
              {professionalSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h3>Lo que Me Motiva</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <BookOpen size={28} />
                </div>
                <h4>Aprendizaje Continuo</h4>
                <p>
                  La tecnología evoluciona constantemente, y yo también. 
                  Siempre estoy buscando aprender algo nuevo.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Heart size={28} />
                </div>
                <h4>Compartir Conocimiento</h4>
                <p>
                  Creo firmemente que el conocimiento se multiplica cuando 
                  se comparte. Este blog es mi forma de contribuir.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Coffee size={28} />
                </div>
                <h4>Código de Calidad</h4>
                <p>
                  Me enfoco en escribir código limpio, mantenible y bien 
                  documentado que pueda entender cualquier desarrollador.
                </p>
              </div>
            </div>
          </section>

          {/* Music & Art Section */}
          <section className="music-art-section">
            <h3>Maxol - Mi Lado Artístico</h3>
            <div className="art-content">
              <div className="art-images">
                <div className="art-image-container">
                  <img src="/images/alejandro-artistic.webp" alt="Maxol en acción" />
                  <div className="image-overlay">
                    <Music size={32} />
                  </div>
                </div>
                <div className="art-image-container">
                  <img src="/images/alejandro-personal.webp" alt="Breaking y Hip-Hop" />
                  <div className="image-overlay">
                    <Music size={32} />
                  </div>
                </div>
              </div>
              
              <div className="art-description">
                <p>
                  Como <strong>Maxol</strong>, expreso mi creatividad a través de la música hip-hop y el breaking. 
                  Mi trabajo combina producción musical innovadora con la energía del street dance, 
                  participando activamente en la escena cultural urbana.
                </p>
                
                <div className="music-links">
                  <a 
                    href="https://open.spotify.com/artist/0KTegBzreW7d5zsJrw4fQX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Music size={20} />
                    Escuchar en Spotify
                  </a>
                  <a 
                    href="https://www.instagram.com/alexorduno" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <BookOpen size={20} />
                    Ver en Instagram
                  </a>
                </div>
                
                <div className="instagram-highlights">
                  <h4>🎤 Destacados Musicales</h4>
                  <div className="highlight-links">
                    <a href="https://www.instagram.com/p/DKBIYFmMiNC/" target="_blank" rel="noopener noreferrer">
                      Post musical reciente
                    </a>
                    <a href="https://www.instagram.com/p/DC7j2w4TllB/" target="_blank" rel="noopener noreferrer">
                      Colaboración artística
                    </a>
                  </div>
                  
                  <h4>🕺 Destacados de Baile</h4>
                  <div className="highlight-links">
                    <a href="https://www.instagram.com/reel/DLFwYbURQiI/" target="_blank" rel="noopener noreferrer">
                      Breaking session
                    </a>
                    <a href="https://www.instagram.com/reel/DIbuHs9uTZe/" target="_blank" rel="noopener noreferrer">
                      Street dance performance
                    </a>
                    <a href="https://www.instagram.com/p/DHT574yv5YX/" target="_blank" rel="noopener noreferrer">
                      Hip-hop showcase
                    </a>
                    <a href="https://www.instagram.com/reel/DGWZq-1OTjB/" target="_blank" rel="noopener noreferrer">
                      Dance battle
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h3>¡Conecta Conmigo!</h3>
            <p>
              Me encanta conectar con otros desarrolladores y profesionales tech. 
              Si quieres charlar sobre tecnología, colaborar en un proyecto, 
              o simplemente saludar, ¡no dudes en contactarme!
            </p>
            
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="cta-buttons">
              <Link to="/blog" className="btn btn-primary">
                <BookOpen size={20} />
                Lee mi blog
              </Link>
              <a href="mailto:tu@email.com" className="btn btn-secondary">
                <Mail size={20} />
                Envía un email
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
