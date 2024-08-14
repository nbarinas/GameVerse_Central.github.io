import React from "react";
import banner from "../assets/Banner 1000 x 240 Ga.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={banner} alt="GameVerse Central Banner" className="banner" />
      <h1>GameVerse Central</h1>
      <p className="slogan">
        Donde la cultura pop y los videojuegos se encuentran
      </p>
    </header>
  );
};

export default Header;
