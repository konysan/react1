import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Mis Productos"/>
    </>
  )
}

export default App
