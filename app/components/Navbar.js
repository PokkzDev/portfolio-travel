'use client';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <button 
          onClick={() => scrollToSection('hero')} 
          className={styles.navLink}
        >
          Inicio
        </button>
        <button 
          onClick={() => scrollToSection('nosotros')} 
          className={styles.navLink}
        >
          Nosotros
        </button>
        <button 
          onClick={() => scrollToSection('tours')} 
          className={styles.navLink}
        >
          Tours
        </button>
        <button 
          onClick={() => scrollToSection('contacto')} 
          className={styles.navLink}
        >
          Contacto
        </button>
      </div>
      <button className={styles.bookNow}>Reservar</button>
    </nav>
  );
} 