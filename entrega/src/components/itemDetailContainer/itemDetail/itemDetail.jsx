import React, {useState} from 'react'
import Counter from '../../ItemListContainer/cardList/card/counter/Counter.jsx'

function itemDetail({product}) {
  // const [toCart,setToCart] = useState(false);
  // const addToCart () =>{
  //   setToCart = true;
  // } 
  return (
    <div>
      <div class = "container">
        <div class = "d-row">
          <div>
            <img src={product.image} />
          </div>
          <div>
            {product.description}
          </div>
        </div>
          {/* {
            toCart?
            <Counter addToCart={addToCart}/>:
            <button onClick={addToCart}>
            <Link to={/cart}>ir al carrito</Link>
            </button>
          } */}
      </div>
    </div>
  )
}

export default itemDetail