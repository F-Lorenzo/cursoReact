import React,{useContext} from 'react'
import logoCarrito from '../../img/carritoDeCompras.svg'


function CartWidget() {

  return (
    <div class="container ">
        <button class="btn border-0">
            <img class="img-fluid w-50 h-50 bg-light bg-gradient rounded p-2" src={logoCarrito} alt="ft" />      
        </button>
    </div>
  )
}

export default CartWidget