import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Sobre Nosotros</h3>
          <p>Descubre los lugares más misteriosos y fascinantes del mundo con nuestros tours especializados. Una experiencia única que nunca olvidarás.</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#destinos">Destinos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <p>📍 Calle Principal 123, Chile</p>
          <p>📞 +56 123 456 789</p>
          <p>✉️ info@tuempresa.com</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Síguenos</h3>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Tu Empresa de Viajes. Todos los derechos reservados.</p>
        <p className={styles.attribution}>Desarrollado por <a href="https://pokkz.dev" target="_blank" rel="noopener noreferrer">pokkz.dev</a></p>
      </div>
    </footer>
  );
};

export default Footer; 