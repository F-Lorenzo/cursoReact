import React,{useContext} from 'react'
import logoCarrito from '../../img/carritoDeCompras.svg'


function CartWidget() {

  return (
    <div className="container ">
        <button className="btn border-0">
            <img className="img-fluid w-50 h-50 bg-light bg-gradient rounded p-2" src={logoCarrito} alt="ft" />      
        </button>
    </div>
  )
}

export default CartWidget