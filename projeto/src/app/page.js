// pages/index.js
import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import InicioSection from '../components/InicioSection';
import QuemSomosSection from '../components/QuemSomosSection';
<<<<<<< HEAD
import ServicosSection from '../components/ServicosSection';
=======
import ProjectCarousel from '../components/ProjectCarousel';
>>>>>>> fc43b7777597124711b643bcd793046bc6a41fd3

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
        <ServicosSection/>
        <ProjectCarousel />
        <p></p>
        
      </main>
    </>
  );
}