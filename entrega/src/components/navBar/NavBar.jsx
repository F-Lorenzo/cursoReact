import React from 'react'
import CartWidget from '../cartWidget/CartWidget.jsx'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div class ="container-fluid " >
    <nav class="navbar navbar-expand  bg-warning " >
      <div class="container-fluid ">
        <div class="navbar-brand text-dark fw-bold p-3"><Link to={"/"}>CarShop</Link></div>
        <div class = "d-flex justify-content-end">
            <div class="collapse navbar-collapse " id="navbarNav">
               <ul class="navbar-nav"> 
                  <li class= "nav-link m-4"role="button">
                    <Link  to={"/"}>Home</Link>
                  </li>
                  <li class= "nav-item dropdown m-4">
                    <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  to={"/"}>Autos</Link>
                    <ul class="dropdown-menu">
                      <li><Link to={"/productos/suv"} class="dropdown-item" href="#">suv</Link></li>
                      <li><Link to={"/productos/5p"} class="dropdown-item" href="#">5p</Link> </li>
                      <li><Link to={"/productos/sedan"} class="dropdown-item" href="#">sedan</Link></li>
                    </ul>
                  </li>
                  <li class="nav-link m-4"role="button">
                    <Link to={"/contacto"}>Contacto</Link>
                  </li> 
                  <li class="nav-link m-1">
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