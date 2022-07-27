import React from 'react'
import CartWidget from '../cartWidget/CartWidget.jsx'
import NavItem from './NavItem.jsx'

function NavBar() {
  return (
    <div class ="container-fluid " >
    <nav class="navbar navbar-expand  bg-warning " >
      <div class="container-fluid ">
        <a class="navbar-brand text-dark fw-bold p-3" href="#">CarShop</a>
        <div class = "d-flex justify-content-end">
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav d-flex">
                  <NavItem title="Home"/>
                  <NavItem title="Autos"/>
                  <NavItem title="Contacto"/>
                  <li>
                    <CartWidget/>
                  </li>
              </ul>
            </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar