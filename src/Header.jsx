import React from 'react';
import './Header.css';

function Header() {

  return (

    <header className="header">

      <div className="logo">
        <img src="logo.png" alt="Inove Logo" />
      </div>

      <nav>
        <ul>
          <li><a href="#cadastre-se"> CADASTRE-SE </a></li>
          <li><a href="#contatos"> CONTATOS </a></li>
          <li><a href="#sobre-nos"> SOBRE NÓS </a></li>
        </ul>
      </nav>

    </header>

  );
}

export default Header;