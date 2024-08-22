import React from 'react';
import Slideshow from './Slideshow';
import './Principal.css';


function Principal() {


  return (

    <main className="main-content">

        <Slideshow/>

      <section className="ad-section">
        <h1>ANUNCIE SUA EMPRESA AQUI</h1>
        <p>
          Leve sua marca a novos patamares com nossos espaços publicitários em outdoors estrategicamente localizados. 
          Alcance um público amplo e diversificado, maximizando o impacto do seu negócio. 
          Oferecemos soluções personalizadas para atender às suas necessidades de marketing, garantindo que sua mensagem chegue ao seu público-alvo de maneira eficaz e direta.
        </p>
        <div className="ad-buttons">
          <button className="budget-button">Solicitar Orçamento</button>
          <button className="hire-button">Contratar</button>
        </div>
      </section>
      <section className="outdoor-types">
        <div className="outdoor-type">
          <img src="outdoor-simples.png" alt="Outdoor Simples" />
          <h3>Outdoor Simples</h3>
          <p>Área total de 9m x 3m</p>
        </div>
        <div className="outdoor-type">
          <img src="outdoor-duplo.png" alt="Outdoor Duplo" />
          <h3>Outdoor Duplo</h3>
          <p>Duas vezes mais área para transmitir a sua mensagem.</p>
        </div>
        <div className="outdoor-type">
          <img src="outdoor-aplique.png" alt="Outdoor com Aplique" />
          <h3>Outdoor com Aplique</h3>
          <p>Para aqueles que gostam de sair da caixinha.</p>
        </div>
      </section>
      
    </main>
  );
}

export default Principal;
