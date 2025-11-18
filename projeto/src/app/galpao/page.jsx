// page.jsx
import React from "react";
import "./page.css"; // importa o CSS local

export default function Page() {
  return (
    <div className="project-container">
      <h1 className="project-title">Título do Projeto</h1>

      <div className="project-image-wrapper">
        <img
          src="/images/exemplo.jpg"
          alt="Imagem do projeto"
          className="project-image"
        />
      </div>

      <p className="project-description">
        Esta é uma descrição genérica do projeto. Substitua este texto pelo
        conteúdo que desejar.
      </p>

     
    </div>
  );
}
