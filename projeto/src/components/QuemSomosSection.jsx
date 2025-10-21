// components/QuemSomosSection.jsx
import React from 'react';
import styles from './QuemSomosSection.module.css';

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className={`${styles.section} ${styles.bgLight}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Quem Somos</h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3>Nossa História e Missão</h3>
            <p>
              Fundada em 2010, nossa empresa cresceu com o compromisso de transformar 
              ideias em realidade através da engenharia e arquitetura de excelência. 
              Combinamos expertise técnica com criatividade para entregar projetos 
              que superam expectativas.
            </p>
            
            <div className={styles.missionVision}>
              <div className={styles.mvItem}>
                <h4>Missão</h4>
                <p>
                  Desenvolver soluções inovadoras em engenharia e arquitetura que 
                  contribuam para o desenvolvimento sustentável e melhoria da 
                  qualidade de vida das pessoas.
                </p>
              </div>
              <div className={styles.mvItem}>
                <h4>Visão</h4>
                <p>
                  Ser referência nacional em projetos de engenharia e arquitetura, 
                  reconhecida pela excelência, inovação e compromisso com resultados.
                </p>
              </div>
              <div className={styles.mvItem}>
                <h4>Valores</h4>
                <ul>
                  <li>Qualidade e Excelência</li>
                  <li>Inovação e Criatividade</li>
                  <li>Sustentabilidade</li>
                  <li>Compromisso com o Cliente</li>
                  <li>Ética e Transparência</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;