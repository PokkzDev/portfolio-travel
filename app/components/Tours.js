'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Tours.module.css';

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: 'Catacumbas de París',
      image: '/images/pariscatacombs.jpg',
      description: 'Explora los misteriosos túneles subterráneos que contienen los restos de más de seis millones de personas.',
      details: 'Datando del siglo XVIII, las Catacumbas de París se extienden por 1.7 kilómetros de pasadizos serpenteantes. Experimenta un viaje único a través de la historia en una de las atracciones más singulares y sobrecogedoras del mundo.',
      price: '99€',
      duration: '2 horas'
    },
    {
      id: 2,
      title: 'Coliseo Romano',
      image: '/images/romecolliseum.jpg',
      description: 'Visita el icónico anfiteatro que albergó combates de gladiadores y espectáculos públicos en la antigua Roma.',
      details: 'Construido entre los años 70-80 d.C., el Coliseo podía albergar hasta 80,000 espectadores y es considerado una de las mayores obras de la arquitectura e ingeniería romana. Camina por los pasos de emperadores, gladiadores y ciudadanos de la antigua Roma.',
      price: '129€',
      duration: '3 horas'
    },
    {
      id: 3,
      title: 'Stonehenge',
      image: '/images/stonehenge.jpg',
      description: 'Descubre el monumento prehistórico que ha fascinado a arqueólogos y visitantes durante siglos.',
      details: 'Este monumento prehistórico en Wiltshire, Inglaterra, se remonta al 3000-2000 a.C. Sus enormes piedras verticales, dispuestas en un diseño circular, se han convertido en un símbolo icónico del patrimonio antiguo británico y continúan desconcertando a los investigadores en la actualidad.',
      price: '89€',
      duration: '4 horas'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTour = tours[activeIndex];

  return (
    <section className={styles.toursSection} id="tours">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Tours Destacados</h2>
        
        <div className={styles.carouselContainer}>
          {/* Main featured tour display */}
          <div className={styles.featuredTour}>
            <div className={styles.mainImageContainer}>
              <Image 
                src={activeTour.image} 
                alt={activeTour.title}
                fill
                className={styles.mainImage}
                priority
              />
            </div>
            
            <div className={styles.tourInfo}>
              <h3 className={styles.tourTitle}>{activeTour.title}</h3>
              <p className={styles.tourDescription}>{activeTour.description}</p>
              <p className={styles.tourDetails}>{activeTour.details}</p>
              
              <div className={styles.tourMeta}>
                <span className={styles.price}>{activeTour.price}</span>
                <span className={styles.duration}>{activeTour.duration}</span>
              </div>
              
              <button className={styles.bookButton}>Reservar Ahora</button>
            </div>
          </div>
          
          {/* Thumbnail navigation */}
          <div className={styles.thumbnailContainer}>
            {tours.map((tour, index) => (
              <div 
                key={tour.id} 
                className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.thumbnailImage}>
                  <Image 
                    src={tour.image} 
                    alt={tour.title}
                    fill
                    className={styles.thumbnailImg}
                  />
                </div>
                <h4 className={styles.thumbnailTitle}>{tour.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours; 