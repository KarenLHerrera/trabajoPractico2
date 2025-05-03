import React from "react";
import NavBar from "./Nav";
import "../css/Header.css"

const Header = () => {
  return (
    <div className="Header">
      <h2 className="titulo">Trabajo Practico N2</h2>
      <h3 className="subtitulo">Comision 4- Grupo 2</h3>
      <NavBar />
    </div>
  );
};

export default Header;
