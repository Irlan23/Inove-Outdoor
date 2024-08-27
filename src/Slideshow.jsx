import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  'Imagem.slide3.jpg', // Substitua pelo caminho real da sua imagem
  'Imagem.slide4.jpg'  // Substitua pelo caminho real da sua imagem
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}

export default Slideshow;
