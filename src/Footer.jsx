import React from 'react';
import './Footer.jsx';
import './Footer.css';

function Footer() {

  return (

    <footer className="footer">

        <section id="contatos" className="contact-section">

        <h2>Contatos</h2>

        <p>
          Siga-nos nas redes sociais para se manter atualizado com as nossas últimas novidades:
        </p>

        <ul>
          <li><a href="https://facebook.com/inove"> Facebook </a></li>
          <li><a href="https://instagram.com/inove"> Instagram </a></li>
          <li><a href="https://whatsapp.com/company/inove"> WhatsApp </a></li>
        </ul>

        </section>

    </footer>

  );
}

export default Footer;
