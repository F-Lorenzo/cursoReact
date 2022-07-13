import React from 'react'

function NavBar() {
  return (
    <div class ="container">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid ">
        <a class="navbar-brand text-bg-dark p-3" href="#">Alerta Bitcoin</a>
        <div class = "d-flex justify-content-end">
            <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav d-flex">
                <li class="nav-item">
                <a class="nav-link text-bg-dark p-3" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-bg-dark p-3" href="#">Productos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-bg-dark p-3" href="#">Contacto</a>
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