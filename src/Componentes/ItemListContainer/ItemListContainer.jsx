import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
   const {idCategoria} = useParams(false)
   const [loading, setLoading] = useState(false)


   useEffect(()=> {
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : (collection(db,"productos"))

    getDocs(misProductos)
    .then (res => {
        
        const nuevosProductos = res.docs.map(doc =>{
            const data = doc.data()
            return {id:doc.id , ...data}
        })
        setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
    .finally(()=>{
        console.log("proceso finalizado")
        setLoading(false)
    })
}, [idCategoria])
   
  return (
      <>
          <h2 className='Productos'>Mis Productos</h2>
          <ItemList productos={productos} />
      </>
  )
}

export default ItemListContainer