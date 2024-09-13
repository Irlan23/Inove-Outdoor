import React from 'react';
import './Header.css';

function Header() {
  
  return (

    <header className="header">

      <div className="logo">

        <img src="logo-inove.png" alt="INOVE" />
        
      </div>

      <nav className="nav">

        <ul>
          <li><a href="#login"> LOGIN </a></li>
          <li><a href="#contatos"> CONTATOS </a></li> 
          <li><a href="#sobre-nos"> SOBRE NÓS </a></li>
        </ul>

      </nav>

    </header>

  );
}

export default Header;
