import React from 'react'
import logoCarrito from '../../img/carritoDeCompras.svg'


function CartWidget() {
  return (
    <div class="container ">
        <img class="img-fluid w-50 h-50 p-3" src={logoCarrito} alt="ft" />      
    </div>
  )
}

export default CartWidget