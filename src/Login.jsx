import React from 'react';
import './Login.css';

function Login() {

  return (

    <div id="login" className="login-simple-wrapper">
      <div className="login-simple-container">
        
        <h2> FAÇA SEU LOGIN </h2>

        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit"> ENTRAR </button>

        </form>
      </div>
    </div>

  );
}

export default Login;
