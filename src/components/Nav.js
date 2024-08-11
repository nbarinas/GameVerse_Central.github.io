import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Eventos from './Eventos';
import Main from './Main'; 
import Noticias from './Noticias';
import Comunidad from './Cumunidad';
import Perfil from './Perfil';
const Nav = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/comunidad">Comunidad</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/noticias" element={<Noticias />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/eventos" element={<Eventos />} />
        
        {/* Puedes agregar más rutas aquí para otros enlaces */}
      </Routes>
    </Router>
  );
}

export default Nav;