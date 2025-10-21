// components/ProjectCarousel.jsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './ProjectCarousel.module.css';
import Image from 'next/image';

const ProjectCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Projeto Residencial Moderno",
      description: "Design arquitetônico contemporâneo com integração total à natureza e soluções sustentáveis.",
      image: "/images/casa1.jpg",
      category: "Residencial"
    },
    {
      id: 2,
      title: "Complexo Corporativo",
      description: "Edifício corporativo com tecnologia de ponta, espaços colaborativos e design inovador.",
      image: "/images/casa2.jpg",
      category: "Corporativo"
    },
    {
      id: 3,
      title: "Centro Comercial & Lazer",
      description: "Complexo integrado com área comercial, entretenimento e praça de convivência urbana.",
      image: "/images/casa3.jpg",
      category: "Comercial"
    },
    {
      id: 4,
      title: "Galpão de encomendas",
      description: "Galpão com autonomia energética",
      image:  "/images/casa4.jpg",
      category: "Comercial"
    },
    {
      id: 5,
      title: "Casa residencial",
      description: "Casa simples",
      image:  "/images/casa5.jpg",
      category: "Residencial"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <h2 className={styles.carouselTitle}>NOSSOS PROJETOS</h2>
        
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.carouselSlide} ${
                  index === currentSlide ? styles.active : ''
                }`}
              >
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className={styles.image}
                      priority={index === 0}
                    />
                    <div className={styles.projectOverlay}>
                      <div className={styles.projectInfo}>
                        <span className={styles.projectCategory}>
                          {project.category}
                        </span>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>
                          {project.description}
                        </p>
                        <button className={styles.projectButton}>
                          Ver Projeto Completo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className={styles.carouselNavigation}>
            <button className={styles.carouselButton} onClick={prevSlide}>
              ‹
            </button>
            <button className={styles.carouselButton} onClick={nextSlide}>
              ›
            </button>
          </div>

          
          <div className={styles.carouselIndicators}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.active : ''
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ 
                width: `${((currentSlide + 1) / projects.length) * 100}%`,
                transition: 'width 6s linear'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;