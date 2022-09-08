import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../context/CartContext.jsx'

function CartItem({ product }) {
    const { removeItem } = useContext(MyContext)
    const remove = () => {
      removeItem(product.id, product.quantity)
    }
  return (
    <div >
    <Link  to={'/product/' + product.id}>
      <img src={product.imagen}  alt={product.modelo} />
    </Link>
    <h3>{product.Modelo} + " " + {product.Marca}</h3>
    <h4>U$S {product.Precio}</h4>
    <h2>|</h2>
    <h4>x{product.quantity}</h4>
    <h2>|</h2>
    <h4>$ {product.Precio * product.quantity}</h4>
    <button  onClick={remove}>
      Delete
    </button>
  </div>
  )
}

export default CartItem