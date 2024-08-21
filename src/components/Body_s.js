import React from "react";
import "./bodys.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Noticias from "./Noticias";
import Perfil from "./Perfil";
import Registrar from "./Registrar";
import Comunidad from "./Comunidad";
import Eventos from "./Eventos";

const Bodys = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="registrar" element={<Registrar />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/eventos" element={<Eventos />} />

        {/* Puedes agregar más rutas aquí para otros enlaces */}
      </Routes>
    </>
  );
};

export default Bodys;
