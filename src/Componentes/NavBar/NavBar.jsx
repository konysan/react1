import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget.jsx'


const NavBar = () => {
  return (
    <header>
<h1>Tienda Ropa</h1>

    <nav>

        <ul>
            <li>Camperas</li>
            <li>Pantalones</li>
            <li>Remeras</li>

        </ul>


    </nav>

    <CartWidget/>
    </header>
  )
}

export default NavBar