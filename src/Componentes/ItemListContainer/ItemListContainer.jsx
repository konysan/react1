import React from 'react'
import "./ItemListContainer.css"


const ItemListContainer = (props) => {
  return (
    <div>
        <h2 className='Productos'>
        {props.greeting}
        </h2>
    </div>
  )
}

export default ItemListContainer