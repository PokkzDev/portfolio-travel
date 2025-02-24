import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const images = useMemo(() => [
    'background-1.jpg',
    'background-2.jpg',
    'background-3.jpg'
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
      const img = new window.Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = `/images/${src}`;
    });
  }, [images]);

  // Function to handle transitions
  const triggerTransition = useCallback((newIndex) => {
    if (isTransitioning || newIndex === currentImage) return;
    
    setNextImage(newIndex);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImage(newIndex);
      setNextImage(null);
      setIsTransitioning(false);
    }, 1500);
  }, [currentImage, isTransitioning]);

  // Handle automatic image transitions
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      triggerTransition((currentImage + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentImage, imagesLoaded, images.length, triggerTransition]);

  // Handle dot clicks
  const handleDotClick = (index) => {
    triggerTransition(index);
  };

  return (
    <section id="hero" className={styles.hero}>
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
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: isTransitioning ? 1 : 2
              }}
            >
              <Image
                src={`/images/${images[currentImage]}`}
                alt={titles[currentImage]}
                fill
                priority
                quality={100}
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            
            {/* Next image - always render but only visible during transition */}
            <div
              key={`next-${nextImage !== null ? nextImage : 'placeholder'}`}
              className={`${styles.backgroundImage} ${isTransitioning && nextImage !== null ? styles.fadeIn : ''}`}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isTransitioning ? null : 0,
                zIndex: isTransitioning ? 2 : 1
              }}
            >
              {nextImage !== null && (
                <Image
                  src={`/images/${images[nextImage]}`}
                  alt={titles[nextImage]}
                  fill
                  priority
                  quality={100}
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              )}
            </div>
          </>
        )}
      </div>
      
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentImage ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

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

        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className={styles.socialIcon} aria-label="Pinterest"><FaPinterest /></a>
          <a href="#" className={styles.socialIcon} aria-label="WhatsApp"><FaWhatsapp /></a>
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
    </section>
  );
};

export default HeroSection; 