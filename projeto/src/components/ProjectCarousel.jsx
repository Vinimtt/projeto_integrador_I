// components/ProjectCarousel.jsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './ProjectCarousel.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // <-- Importado novamente para ler a URL

// A lista de projetos agora está dentro do componente para simplicidade,
// mas vou exportá-la para manter a funcionalidade do código original (se necessário para o NavBar).
export const projects = [
  {
    id: 1,
    title: "Projeto Residencial Moderno",
    description: "Design arquitetônico contemporâneo com integração total à natureza e soluções sustentáveis.",
    image: "/images/casa1.jpg",
    category: "Residencial",
    path: "/moderno" // <-- Mantido
  },
  {
    id: 2,
    title: "Complexo Corporativo",
    description: "Edifício corporativo com tecnologia de ponta, espaços colaborativos e design inovador.",
    image: "/images/casa2.jpg",
    category: "Corporativo",
    path: "/corporativo" // <-- Mantido
  },
  {
    id: 3,
    title: "Centro Comercial & Lazer",
    description: "Complexo integrado com área comercial, entretenimento e praça de convivência urbana.",
    image: "/images/casa3.jpg",
    category: "Comercial",
    path: "/comercial" // <-- Mantido
  },
  {
    id: 4,
    title: "Galpão de encomendas",
    description: "Galpão com autonomia energética",
    image: "/images/casa4.jpg",
    category: "Comercial",
    path: "/galpao" // <-- Mantido
  },
  {
    id: 5,
    title: "Casa residencial",
    description: "Casa simples",
    image: "/images/casa5.jpg",
    category: "Residencial",
    path: "/residencial" // <-- Mantido
  }
];

const ProjectCarousel = () => {
  const searchParams = useSearchParams(); // <-- Lógica 1: Adicionado da primeira versão

  // Lógica 1: Função para determinar o slide inicial a partir do parâmetro 'slide' na URL
  const getInitialSlide = () => {
    const slideParam = searchParams.get('slide');
    if (slideParam) {
      const index = parseInt(slideParam, 10);
      // Valida se o índice é um número válido e dentro do limite (0 a projects.length - 1)
      if (index >= 0 && index < projects.length) {
        return index;
      }
    }
    return 0;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide); // <-- Lógica 1: Inicializa com base na URL

  // Lógica 1: Efeito para mudar o slide se o parâmetro da URL mudar (navegação externa)
  useEffect(() => {
    setCurrentSlide(getInitialSlide());
  }, [searchParams]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Lógica 2: Auto-avanço (mantido da segunda versão, mas melhorado para reiniciar a animação)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    // Limpa o intervalo antes de recriá-lo ou quando o componente desmonta
    return () => clearInterval(interval);
  }, [currentSlide]); // Dependência em currentSlide para reiniciar o timer a cada mudança

  return (
    <section id="projetos" className={styles.carouselSection}>
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
                        
                        {/* Lógica 2: Utilização do componente Link com o path */}
                        <Link
                            href={project.path}
                            className={styles.projectButton}
                        >
                          Ver Projeto Completo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className={styles.carouselNavigation}>
            <button className={styles.carouselButton} onClick={prevSlide}>
              <span className={styles.arrowIcon}>‹</span>
            </button>
            <button className={styles.carouselButton} onClick={nextSlide}>
              <span className={styles.arrowIcon}>›</span>
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

          
          {/* BARRA DE PROGRESSO COM A CHAVE PARA REINICIAR A ANIMAÇÃO */}
          <div className={styles.progressBar}>
            <div 
              key={currentSlide} // <-- Reinicia a animação CSS em cada slide
              className={styles.progressFill}
              style={{ 
                animationDuration: '6s', // Define a duração no CSS ou aqui se necessário
                // O width deve ser '100%' para a animação começar do zero e preencher
                width: '100%' 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;