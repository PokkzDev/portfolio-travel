'use client'
import React, { useEffect } from 'react';
import styles from './Nosotros.module.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nosotros = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const stats = [
    { label: 'Destinos', value: '50+' },
    { label: 'Clientes Felices', value: '10K+' },
    { label: 'Años de Experiencia', value: '15+' },
    { label: 'Guías Expertos', value: '25+' },
  ];

  return (
    <section id="nosotros" className={styles.nosotrosSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        <div 
          className={styles.imageContainer}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Image
            src="/images/nosotros-image.jpg"
            alt="Beautiful travel destination"
            width={600}
            height={800}
            className={styles.aboutImage}
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div 
          className={styles.contentCard}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2>Nosotros</h2>
          <h3>Tu Compañero de Viaje de Confianza</h3>
          
          <p>
            Con más de 15 años de experiencia en la industria turística, nos enorgullece ser
            tu socio confiable en la creación de experiencias de viaje inolvidables. Nuestro
            equipo de expertos apasionados trabaja incansablemente para diseñar itinerarios
            únicos que satisfagan tus deseos de aventura y descubrimiento.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={styles.statCard}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
              >
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros; 