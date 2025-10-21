// components/ServicosSection.jsx
import React from 'react';
import styles from './ServicosSection.module.css';

const ServicosSection = () => {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Nossos Serviços</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionSubtitle}>
            Soluções completas em engenharia e arquitetura
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏢</div>
            <h3>Projetos Arquitetônicos</h3>
            <p>
              Desenvolvimento de projetos residenciais, comerciais e industriais 
              com foco em funcionalidade, estética e sustentabilidade.
            </p>
            <ul>
              <li>Plantas e memorial descritivo</li>
              <li>Renderização 3D</li>
              <li>Adequação às normas técnicas</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⚡</div>
            <h3>Instalações Elétricas</h3>
            <p>
              Projetos e execução de sistemas elétricos prediais e industriais, 
              garantindo segurança e eficiência energética.
            </p>
            <ul>
              <li>Diagramas elétricos</li>
              <li>SPDA (Para-raios)</li>
              <li>Automação predial</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>💧</div>
            <h3>Hidrossanitários</h3>
            <p>
              Sistemas completos de água fria, água quente, esgoto e drenagem, 
              seguindo as mais rigorosas normas técnicas.
            </p>
            <ul>
              <li>Projeto hidráulico</li>
              <li>Esgoto e drenagem</li>
              <li>Águas pluviais</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🌡️</div>
            <h3>Climatização</h3>
            <p>
              Projetos de sistemas de ar condicionado e ventilação para conforto 
              térmico e qualidade do ar interior.
            </p>
            <ul>
              <li>Ar condicionado central</li>
              <li>Ventilação industrial</li>
              <li>Controle de umidade</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔧</div>
            <h3>Estrutural</h3>
            <p>
              Cálculo e dimensionamento de estruturas em concreto, aço e madeira, 
              garantindo segurança e estabilidade.
            </p>
            <ul>
              <li>Laudos técnicos</li>
              <li>Reformas estruturais</li>
              <li>Fundações e contenções</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📊</div>
            <h3>Consultoria</h3>
            <p>
              Assessoria técnica especializada para gestão de projetos, 
              fiscalização de obras e regularização documental.
            </p>
            <ul>
              <li>Gestão de projetos</li>
              <li>Fiscalização de obras</li>
              <li>Regularização</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;