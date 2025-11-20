import React from 'react';
import Image from 'next/image';
import styles from './InicioSection.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={styles.sun} />
        <div className={styles.orbSmall} />
      </div>
      <div className={styles.topBar}></div>
      
      <div className={styles.heroContainer}>
        
        {}
        <div className={styles.textWrapper}>
          <h1 className={styles.heroTitle}>
            Soluções
            <br />
            Solares
            <br />
            Inteligentes
            <br />
            <span>Para Empresas e</span>
            <br />
            <span>Residências</span>
          </h1>
        </div>

        {}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/casa3.jpg" 
            alt="Painéis solares em um campo"
            width={600}
            height={450}
            className={styles.heroImage}
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;