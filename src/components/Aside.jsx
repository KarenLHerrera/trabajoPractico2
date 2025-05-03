import React from 'react'
import "../css/Aside.css";

const Aside = ({Lenguajes}) => {
  return (
    <div>
      {console.log(Lenguajes)}
      {Lenguajes.map((lenguaje, index) => (

              <li key={index}>{lenguaje.nombre}:{lenguaje.descripcion}</li>
            ))}
    </div>
  )
}

export default Aside
