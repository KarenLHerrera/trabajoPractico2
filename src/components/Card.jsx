import React from 'react'
import "../Css/Card.css"

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imagen} alt={item.nombre} className="card-img" />
      <div className="title">
        <h5>{item.nombre}</h5>
      </div>
    </div>
  )
}

export default Card
