import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
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

        </ul>


    </nav>

    <CartWidget/>
    </header>
  )
}

export default NavBar