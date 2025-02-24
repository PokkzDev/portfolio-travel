'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const tourOptions = [
    'Catacumbas de París',
    'Coliseo Romano',
    'Stonehenge',
    'Otro'
  ];

  return (
    <section className={styles.contactSection} id="contacto">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contáctanos</h2>
        
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3>¿Tienes Preguntas?</h3>
            <p>Estamos aquí para ayudarte a planificar tu próxima aventura. Completa el formulario y nos pondremos en contacto contigo pronto.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <i className={styles.icon}>📞</i>
                <span>+56 123 456 789</span>
              </div>
              <div className={styles.contactItem}>
                <i className={styles.icon}>✉️</i>
                <span>info@tuempresa.com</span>
              </div>
              <div className={styles.contactItem}>
                <i className={styles.icon}>📍</i>
                <span>Calle Principal 123, Chile</span>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre Completo"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <select
                name="tourInterest"
                value={formData.tourInterest}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un Tour de Interés</option>
                {tourOptions.map(tour => (
                  <option key={tour} value={tour}>{tour}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu Mensaje"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 