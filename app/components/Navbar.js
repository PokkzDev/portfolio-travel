'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
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