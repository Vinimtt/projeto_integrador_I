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
            Soluções completas em engenharia
          </p>
        </div>
        
<div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>☀️</div>
            <h3>Energia Solar</h3>
            <p>
              Soluções completas em energia fotovoltaica para residências e empresas, 
              focadas na máxima eficiência energética e retorno financeiro.
            </p>
            <ul>
              <li>Dimensionamento e projetos fotovoltaicos</li>
              <li>Instalação e homologação na concessionária</li>
              <li>Monitoramento de geração e manutenção</li>
            </ul>
          </div>

<div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>⚡</div>
          <h3>Instalações Elétricas</h3>
          <p>
            Execução especializada em serviços elétricos de baixa e média tensão, 
            com foco na segurança operacional e infraestrutura industrial.
          </p>
          <ul>
            <li>Redes de baixa e média tensão</li>
            <li>Montagem de subestações e painéis</li>
            <li>Manutenção elétrica industrial</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>📊</div>
          <h3>Engenharia e Consultoria</h3>
          <p>
            Suporte técnico completo para gestão de obras de energia e 
            regularização de ativos, garantindo conformidade com as normas.
          </p>
          <ul>
            <li>Fiscalização e gestão de obras</li>
            <li>Laudos técnicos e comissionamento</li>
            <li>Projetos executivos e As-Built</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;