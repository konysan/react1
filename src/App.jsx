<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
=======
import React from 'react'
import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

>>>>>>> master

function App() {
  

  return (
    <>
<<<<<<< HEAD
      <NavBar/>
      <ItemListContainer greeting="Mis Productos"/>
=======
      <BrowserRouter>
      <NavBar/>

       <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>

       </Routes>

      </BrowserRouter>
      
      
      
>>>>>>> master
    </>
  )
}

export default App
