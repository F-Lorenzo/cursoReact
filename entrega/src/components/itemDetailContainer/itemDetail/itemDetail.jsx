import React, {useState,useContext} from 'react'
import cartContext from '../../../context/CartContext'
import Counter from '../../ItemListContainer/cardList/card/counter/Counter.jsx'

function itemDetail({product}) {
 const newCart = useContext(cartContext)
  return (
    <div>
      <div class = "container">
        <div class = "d-row">
          <div>
            <img src={product.marca} />
          </div>
          <div>
            {product.description}
          </div>
        </div>
        <Counter/>
      </div>
    </div>
  )
}

export default itemDetail