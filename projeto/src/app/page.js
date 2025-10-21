// pages/index.js
import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import ProjectCarousel from '../components/ProjectCarousel';
import QuemSomosSection from '../components/QuemSomosSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Empresa - Nossos Projetos</title>
        <meta name="description" content="Conheça nossos projetos e serviços" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main>

        <QuemSomosSection/>
        
        <ProjectCarousel />
        <p>Conteúdo adicional da página inicial pode ser adicionado aqui.</p>
        
      </main>
    </>
  );
}