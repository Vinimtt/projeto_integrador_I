// pages/index.js
import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import InicioSection from '../components/InicioSection';
import QuemSomosSection from '../components/QuemSomosSection';
import ProjectCarousel from '../components/ProjectCarousel';

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
        
        <InicioSection /> {}

        <QuemSomosSection/>
        
        <ProjectCarousel />
        <p></p>
        
      </main>
    </>
  );
}