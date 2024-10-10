import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, detalle, stock, }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
  
  
    const item = {id, nombre, precio}
    agregarAlCarrito (item, cantidad)
 
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <h3> {detalle} </h3>
     
     <h4 className='botones'>
       {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
         
      }
      <hr />
        <Link to="/">Ver Productos</Link>

        </h4>
     </div>
    
  )
}

export default ItemDetail