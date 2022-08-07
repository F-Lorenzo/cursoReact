import React from 'react'
import CartWidget from '../cartWidget/CartWidget.jsx'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div class ="container-fluid " >
    <nav class="navbar navbar-expand  bg-warning " >
      <div class="container-fluid ">
        <a class="navbar-brand text-dark fw-bold p-3" href="#">CarShop</a>
        <div class = "d-flex justify-content-end">
            <div class="collapse navbar-collapse " id="navbarNav">
               <ul class="navbar-nav"> 
                  <li class= "nav-item m-4">
                    <Link  to={"/"}>Home</Link>
                  </li>
                  <li class= "nav-item m-4">
                    <Link  to={"/productos"}>Autos</Link>
                  </li>
                  <li class="nav-item m-4">
                    <Link to={"/contacto"}>Contacto</Link>
                  </li> 
                  <li class="nav-item m-1">
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