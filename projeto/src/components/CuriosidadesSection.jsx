// components/CuriosidadesSection.jsx
'use client';

import React from 'react';
import styles from './CuriosidadesSection.module.css';

const curiosidades = [
  {
    title: 'Como funcionam os painéis solares',
    text: 'Painéis solares convertem luz em eletricidade através do efeito fotovoltaico: fótons liberam elétrons em células de silício, gerando corrente contínua.',
  },
  {
    title: 'Eficiência típica',
    text: 'Painéis comerciais atuais têm eficiência entre 15% e 22%. Tecnologias de ponta em laboratório já ultrapassam 40% em células multi-juction.',
  },
  {
    title: 'Vida útil e degradação',
    text: 'Painéis solares normalmente duram 25–30 anos; a produção declina gradualmente (cerca de 0.5% a 1% ao ano). Manutenção simples prolonga sua vida útil.',
  },
  {
    title: 'Impacto ambiental',
    text: 'A fabricação tem impacto inicial, mas em poucos anos um painel gera a mesma energia necessária para produzi-lo — depois produz energia “limpa”.',
  },
  {
    title: 'Instalação e orientação',
    text: 'O ângulo e a orientação influenciam a geração: inclinação e face para o equador (no Brasil, orientados para norte) maximizam produção anual.',
  },
];

const CuriosidadesSection = () => {
  return (
    <section id="curiosidades" className={styles.section} aria-labelledby="curiosidades-title">
      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={styles.sun} />
        <div className={styles.orbSmall} />
        <div className={styles.orbTiny} />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="curiosidades-title">Curiosidades sobre Energia Elétrica</h2>
          <p className={styles.lead}>Fatos rápidos e surpreendentes — energia com um toque futurista.</p>
        </header>

        <div className={styles.grid}>
          {curiosidades.map((c, i) => (
            <article key={i} className={styles.card} tabIndex={0} aria-label={c.title}>
              <div className={styles.cardIcon} aria-hidden="true">⚡</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className={styles.cardFooter}>
                <button className={styles.cta}>Saiba Mais</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuriosidadesSection;
