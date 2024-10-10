import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../../Context/CarritoContext'
import { Link } from 'react-router-dom'



const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  
  return (
    <div>
      < Link to="/cart">
        < img className='imgCarrito' src='../img/carrito.jpg'/>
        </Link>
        
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }

    </div>
  )
}

export default CartWidget