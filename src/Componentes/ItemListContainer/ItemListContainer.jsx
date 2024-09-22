import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProductos,getProductosPorCategorias } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams()

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        
    }, [idCategoria])
  return (
      <>
          <h2 className='Productos'>Mis Productos</h2>
          <ItemList productos={productos} />
      </>
  )
}

export default ItemListContainer