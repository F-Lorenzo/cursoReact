import React,{useState,useEffect} from 'react'
export  const CartContext = React.createContext([])
function CartProvider({children}) {
  const [cart,setCart]=([]);

  const addproduct = (item,newQuantity) => {
    const newCart = cart.filter(prod => prod.id === item.id);
    newCart.push({...item,quantity: newQuantity});
    setCart(newCart);
  }

  const clearCart = () =>setCart([]);

  const isInCart = (id) =>( cart.find(product => product.id === id)? true : false)

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


  return (
    <CartContext.Provider value ={{
      clearCart,
      isInCart,
      removeProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider