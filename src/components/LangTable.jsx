import React from "react";
import "../css/LangTable.css";

const LangTable = ({ Lenguajes }) => {
  return (
    <div className="tabla">
      <table className="lang-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        {Lenguajes.map((lenguaje, index) => (
          <tbody>
            <tr>
              <td key={index}>{lenguaje.id}</td>
              <td key={index}>{lenguaje.nombre}</td>
              <td key={index}>{lenguaje.tipo}</td>
              <td key={index}>{lenguaje.descripcion}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default LangTable;
