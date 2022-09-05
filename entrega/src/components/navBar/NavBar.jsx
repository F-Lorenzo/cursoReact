import React from 'react'
import CartWidget from '../cartWidget/CartWidget.jsx'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div className ="container-fluid w-75 " >
    <nav className="navbar navbar-expand  bg-dark  " >
      <div className="container-fluid ">
        <div className="navbar-brand fw-bold text-light p-3"><Link to={"/"}>CarShop</Link></div>
        <div className = "d-flex justify-content-end">
            <div className="collapse navbar-collapse " id="navbarNav">
               <ul className="navbar-nav"> 
                  <li className= "nav-link m-4 "role="button">
                    <Link className="text-light" to={"/"}>Home</Link>
                  </li>
                  <li className= "nav-item dropdown m-4">
                    <Link className="nav-link dropdown-toggle text-light" href="categorias" role="button" data-bs-toggle="dropdown" aria-expanded="false"  to={"/"}>Autos</Link>
                    <ul className="dropdown-menu">
                      <li><Link to={"/productos/suv"} className="dropdown-item" href="categorias">suv</Link></li>
                      <li><Link to={"/productos/5p"} className="dropdown-item" href="categorias">5p</Link> </li>
                      <li><Link to={"/productos/sedan"} className="dropdown-item" href="categorias">sedan</Link></li>
                    </ul>
                  </li>
                  <li className="nav-link m-4"role="button">
                    <Link  className="text-light" to={"/contacto"}>Contacto</Link>
                  </li> 
                  <li className="nav-link m-1">
                    <Link  className="text-light" to={"/cart"}><CartWidget/></Link> 
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