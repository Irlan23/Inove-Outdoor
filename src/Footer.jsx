import React from 'react';
import './Footer.css';

function Footer() {

  return (

    <footer className="footer">

        <section id="contatos" className="contact-section">

        <h2> Contatos </h2>

        <p>
          Siga-nos nas redes sociais para se manter atualizado com as nossas últimas novidades:
        </p>

        <ul>
          <li><a href="https://www.facebook.com/inovemidiaex/?locale=pt_BR"> Facebook </a></li>
          <li><a href="https://www.instagram.com/inovemidiaexterior/"> Instagram </a></li>
          <li><a href="https://whatsapp.com/company/inove"> WhatsApp </a></li>
        </ul>

        </section>

    </footer>

  );
}

export default Footer;
