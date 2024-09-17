import React from 'react'
import "./ItemDetail.css"



const ItemDetail = ({ id, nombre, precio, img, detalle }) => {

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <h3> {detalle} </h3>
    </div>
  )
}

export default ItemDetail