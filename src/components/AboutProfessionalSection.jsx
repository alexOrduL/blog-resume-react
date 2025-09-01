import { FileCode, GraduationCap, Award, Users } from 'lucide-react';
import './AboutProfessionalSection.css';

const achievements = [
  {
    icon: <FileCode size={32} />,
    number: "50+",
    label: "Proyectos Completados",
    description: "Experiencia en desarrollo web y aplicaciones"
  },
  {
    icon: <GraduationCap size={32} />,
    number: "8+",
    label: "Años de Experiencia",
    description: "En desarrollo de software profesional"
  },
  {
    icon: <Award size={32} />,
    number: "15+",
    label: "Certificaciones",
    description: "En tecnologías modernas y metodologías"
  },
  {
    icon: <Users size={32} />,
    number: "30+",
    label: "Clientes Satisfechos",
    description: "Empresas y startups de diversos sectores"
  }
];

const AboutProfessionalSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Sobre Mí</span>
          <h2 className="section-title">
            Desarrollador <span className="highlight">Full Stack</span> &
            Consultor <span className="highlight">Tecnológico</span>
          </h2>
          <p className="section-subtitle">
            Con más de 8 años de experiencia en el desarrollo de soluciones digitales,
            me especializo en crear experiencias web excepcionales y escalables
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Mi pasión por la tecnología y el desarrollo de software me ha llevado a 
              trabajar en una amplia gama de proyectos, desde startups hasta grandes 
              empresas. Me especializo en:
            </p>
            
            <ul className="expertise-list">
              <li>Desarrollo Web Full Stack con React y Node.js</li>
              <li>Arquitectura de Software y Sistemas Distribuidos</li>
              <li>Implementación de soluciones Cloud y DevOps</li>
              <li>Consultoría en Transformación Digital</li>
            </ul>

            <p>
              Mi enfoque se centra en crear soluciones robustas y escalables que no solo 
              resuelven problemas técnicos, sino que también aportan valor real al negocio 
              de mis clientes.
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="achievement-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-number">
                  {achievement.number}
                </div>
                <h3 className="achievement-label">
                  {achievement.label}
                </h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProfessionalSection;
