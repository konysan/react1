import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget.jsx'
<<<<<<< HEAD

=======
import { Link, NavLink } from 'react-router-dom'
>>>>>>> master

const NavBar = () => {
  return (
    <header>
<<<<<<< HEAD
<h1>Tienda Ropa</h1>

    <nav>

        <ul>
            <li>Camperas</li>
            <li>Pantalones</li>
            <li>Remeras</li>
=======
    <Link to="/">
     <img className='logo' src={"./img/Logo.png"} alt='Logo Tienda'/>
     </Link>
    <nav>

        <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
              </li>
            <li>
              <NavLink to="/categoria/ropa"> Ropa </NavLink>
              </li>
            <li><NavLink to="/categoria/calzados">Calzados</NavLink> </li>
>>>>>>> master

        </ul>


    </nav>

    <CartWidget/>
    </header>
  )
}

export default NavBar