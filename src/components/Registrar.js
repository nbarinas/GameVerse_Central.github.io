import React, { useState } from 'react';
import Footer from './Footer';

const Registrar = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    alert(`Usuario: ${username}\nContraseña: ${password}\nCorreo Electrónico: ${email}`);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="button-group">
          <button type="submit">Registrarse</button>
          <button type="button" onClick={() => window.location.href = '/'} className="register-button">
            Página Principal
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Registrar;
