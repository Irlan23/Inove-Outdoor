import React from 'react';
import './Login.css';

function Login() {

  return (

    <div className="login-simple-wrapper">
      <div className="login-simple-container">
        
        <h2>Login</h2>

        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>

        </form>
      </div>
    </div>

  );
}

export default Login;
