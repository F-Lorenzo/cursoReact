import React, {useState,useContext} from 'react'
import cartContext from '../../../context/CartContext'
import Counter from '../../counter/Counter.jsx'

function ItemDetail({product}) {
  const onAdd =(quantity)=>{
    console.log(`compraste ${quantity}`)
  }
  return (
    <div>
      <div className= "container w-75">
        <div className = "d-flex">
          <div className="card card-body justify-content bg-light">
            <div className="col-6">{product.image}</div>
            <div className="col-6">
              <div>
                Precio: ${product.Precio}
              </div>
              <div>
                {product.Description}
              </div>
                <div className="">
                <Counter initial={1} stock={product.Stock} onAdd={onAdd} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail