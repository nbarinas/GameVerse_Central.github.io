import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navegacion">
      <ul className="navegacion--lista">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/eventos">Eventos</Link>
        </li>
        <li>
          <Link to="/noticias">Noticias</Link>
        </li>
        <li>
          <Link to="/comunidad">Comunidad</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
