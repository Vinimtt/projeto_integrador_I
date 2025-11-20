// projeto/src/app/page.js
import React, { Suspense } from 'react'; // 1. Importe o Suspense
import Head from 'next/head';
import NavBar from '../components/NavBar';
import InicioSection from '../components/InicioSection';
import QuemSomosSection from '../components/QuemSomosSection';
import ServicosSection from '../components/ServicosSection';
import ProjectCarousel from '../components/ProjectCarousel';
import ContatoSection from '../components/ContatoSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>ABengenharia - Nossos Projetos</title>
        <meta name="description" content="Conheça nossos projetos e serviços" />
      </Head>

      <NavBar />
      <main>
        <InicioSection />
        <QuemSomosSection/>
        <ServicosSection/>
      
        <Suspense fallback={<div>Carregando projetos...</div>}>
          <ProjectCarousel />
        </Suspense>

        <ContatoSection />
      </main>
    </>
  );
}