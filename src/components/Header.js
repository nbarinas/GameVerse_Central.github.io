import React from "react";
import banner from "../assets/menu-hamburguesa.png";
import logo from "../assets/Logo_new-removebg-preview.png";
import "./Header.css";
import Nav from "./Nav";
import Bodys from "./Body_s";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Router>
        <header className="header">
          <div className="menu">
            <div className="logo">
              <p>
                <img
                  src={logo}
                  alt="Logo de la Empresa"
                  className="LogoEmpresa"
                />
              </p>
            </div>
            <div className="hamburguesa">
              <img
                src={banner}
                alt="GameVerse Central Banner"
                className="banner"
              />
            </div>
            <Nav />
          </div>
          <div className="informacion">
            <div className="informacion--seccion">
              <h1>HAVE AN AVENTURE</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                vero libero, sapiente eos aperiam.
              </p>
              <button type="button">
                <Link to="/perfil">Perfil</Link>
              </button>
            </div>
          </div>
        </header>
        <Bodys />
      </Router>
    </>
  );
};

export default Header;
