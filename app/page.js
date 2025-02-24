'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Nosotros from './components/Nosotros';
import Tours from './components/Tours';
import styles from './page.module.css';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <Nosotros />
      <Tours />
      <Contact />
    </main>
  );
}