import React from 'react'

const Card = ({nombre, img}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h3>{nombre}</h3>
    </div>
  )
}

export default Card