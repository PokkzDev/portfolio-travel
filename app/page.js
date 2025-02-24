'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import styles from './page.module.css';
import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const images = useMemo(() => [
    '/images/background-1.jpg',
    '/images/background-2.jpg',
    '/images/background-3.jpg'
  ], []);

  const titles = [
    'DESCUBRE',
    'RELAJATE',
    'CONECTATE'
  ];

  const subtitles = [
    'AVENTURAS QUE CAMBIAN LA VIDA',
    'ESCAPA DEL MUNDO COTIDIANO',
    'CREA MOMENTOS INOLVIDABLES'
  ];

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;
    
    images.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, [images]);

  // Handle automatic image transitions
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      triggerTransition((currentImage + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentImage, imagesLoaded, images.length]);

  // Function to handle transitions
  const triggerTransition = (newIndex) => {
    if (isTransitioning || newIndex === currentImage) return;
    
    // Set the next image
    setNextImage(newIndex);
    
    // Start transition
    setIsTransitioning(true);
    
    // After transition completes, update current image and reset
    setTimeout(() => {
      setCurrentImage(newIndex);
      setNextImage(null);
      setIsTransitioning(false);
    }, 1500); // Match with CSS transition duration
  };

  // Handle dot clicks
  const handleDotClick = (index) => {
    triggerTransition(index);
  };

  return (
    <main className={styles.main}>
      {!imagesLoaded && (
        <div className={styles.loading}>
          Cargando...
        </div>
      )}
      <div className={styles.backgroundWrapper}>
        {imagesLoaded && (
          <>
            {/* Current image */}
            <div
              key={`current-${currentImage}`}
              className={`${styles.backgroundImage} ${isTransitioning ? styles.fadeOut : ''}`}
              style={{ 
                backgroundImage: `url(${images[currentImage]})`, 
                opacity: isTransitioning ? null : 1
              }}
            />
            
            {/* Next image (only during transition) */}
            {isTransitioning && nextImage !== null && (
              <div
                key={`next-${nextImage}`}
                className={`${styles.backgroundImage} ${styles.fadeIn}`}
                style={{ backgroundImage: `url(${images[nextImage]})` }}
              />
            )}
          </>
        )}
      </div>
      
      <div className={styles.overlay} />
      <Navbar />
      
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          {/* Current title */}
          <h1 
            key={`title-current-${currentImage}`}
            className={`${styles.title} ${isTransitioning ? styles.fadeOut : ''}`}
          >
            {titles[currentImage]}
          </h1>
          
          {/* Next title - only shown during transition */}
          {isTransitioning && nextImage !== null && (
            <h1 
              key={`title-next-${nextImage}`}
              className={`${styles.title} ${styles.titleOverlay} ${styles.fadeIn}`}
            >
              {titles[nextImage]}
            </h1>
          )}
        </div>

        <div className={styles.subtitleWrapper}>
          {/* Current subtitle */}
          <p 
            key={`subtitle-current-${currentImage}`}
            className={`${styles.subtitle} ${isTransitioning ? styles.fadeOut : ''}`}
          >
            {subtitles[currentImage]}
          </p>
          
          {/* Next subtitle - only shown during transition */}
          {isTransitioning && nextImage !== null && (
            <p 
              key={`subtitle-next-${nextImage}`}
              className={`${styles.subtitle} ${styles.subtitleOverlay} ${styles.fadeIn}`}
            >
              {subtitles[nextImage]}
            </p>
          )}
        </div>
        
        <div className={styles.destinations}>
          <button className={styles.destinationButton}>
            <span>Nueva Zelanda</span>
            <span>Planear viaje →</span>
          </button>
          <button className={styles.destinationButton}>
            <span>Indonesia</span>
            <span>Planear viaje →</span>
          </button>
          <button className={styles.destinationButton}>
            <span>Argentina</span>
            <span>Planear viaje →</span>
          </button>
        </div>
      </div>
      
      <div className={styles.socialMedia}>
        <a href="#" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
        <a href="#" className={styles.socialIcon} aria-label="Pinterest"><FaPinterest /></a>
        <a href="#" className={styles.socialIcon} aria-label="WhatsApp"><FaWhatsapp /></a>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentImage ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </main>
  );
}