"use client"; 

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image';


const images = [
  { src: "/images/foto-exemplo-1.jpg", alt: "Descrição da Imagem 1", legend: "Legenda 1" },
  { src: "/images/foto-exemplo-2.jpg", alt: "Descrição da Imagem 2", legend: "Legenda 2" },
  { src: "/images/foto-exemplo-3.jpg", alt: "Descrição da Imagem 3", legend: "Legenda 3" },
];

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay={true}      
      infiniteLoop={true} 
      showThumbs={false}   
      showStatus={false}   
      interval={3000}     
    >
      {images.map((image, index) => (
        <div key={index}>
          
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={1200} 
            height={700} 
            style={{ objectFit: 'cover' }} 
          />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;