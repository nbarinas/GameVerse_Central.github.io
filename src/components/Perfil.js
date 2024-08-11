import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './perfil.css';
import Footer from './Footer';

const Perfil = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const validUsername = 'usuario';
    const validPassword = 'contraseña';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('username', username);
      localStorage.setItem('authenticated', 'true');

      // Simula la lógica de tipo de usuario para redirigir
      const userType = 1; // Puedes definir lógica para tipo de usuario
      localStorage.setItem('userType', userType.toString());

      switch (userType) {
        case 1:
          navigate('/Registrar'); // Redirige a la página de registro
          break;
        case 2:
          navigate('/dashboard'); // Redirige al dashboard
          break;
        default:
          alert('Tipo de usuario desconocido');
          break;
      }
    } else {
      alert('Inicio de sesión fallido.');
    }
  };

  return (
    <div>
      <h2>Perfil</h2>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
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
        <div className="button-group">
          <button type="submit">Iniciar sesión</button>
          <button type="button" onClick={() => navigate('/Registrar')} className="register-button">
            Registrar
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Perfil;
