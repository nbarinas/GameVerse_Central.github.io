import React from 'react';
import logo from '../assets/GameVerse_Central_Logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="GameVerse Central Logo" className="logo" />
      <h1>GameVerse Central</h1>
      <p className="slogan">Donde la cultura pop y los videojuegos se encuentran</p>
    </header>
  );
}

export default Header;
