import React from 'react'
import "../css/Aside.css";

const Aside = ({Lenguajes}) => {
  return (
    <div>
      <h3 className='titulo'>Programación 2</h3>
      <p className='intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ex dolor, ipsam et dolores perferendis perspiciatis obcaecati veniam. Quo id natus sapiente illum aspernatur! Velit dolore nemo esse nisi!</p>
      {console.log(Lenguajes)}
      {Lenguajes.map((lenguaje, index) => (

              <li className="lista" key={index}>{lenguaje.nombre}:{lenguaje.descripcion}</li>
            ))}
    </div>
  )
}

export default Aside
