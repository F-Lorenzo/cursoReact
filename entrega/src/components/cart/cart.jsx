import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { MyContext } from '../../context/CartContext.jsx'
import { Link } from 'react-router-dom'


function cart() {
    //Context data
    const { clear, cart, setTotal, total } = useContext(MyContext)
    const clean = () => {
      clear()
    }
  
    //We use reduce method to summarize the price times the quantity of each cart item
    useEffect(() => {
      const cartTotal = cart.reduce(
        (total, cartItem) => total + cartItem.precio * cartItem.quantity,
        0,
      )
      setTotal(cartTotal)
    }, [cart])


  return (
    <div >
    {cart.length > 0 ? (
      <>
        <div>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div>
          <p>Total: U$S {total}</p>
          <div>
            <button onClick={clean}>
              Clean cart
            </button>
            <Link to={'/checkout'}>
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </>
    ) : (
      <>
        <h1 >The cart is empty</h1>
        <Link to="/">
          <button onClick={clean}>
            Explore the store
          </button>
        </Link>
      </>
    )}
  </div>
  )
}

export default cart