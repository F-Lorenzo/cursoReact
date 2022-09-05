import React from 'react';
import Card from './card/Card.jsx'


function CardList({productList}) {
 
  return (
    <div className="container">
      <div className="row align-center bg-light">
        {
        productList.map((products)=>(
        <Card key={products.id} products={products}/>)
        )
        }
      </div>
    </div>
  )
}


export default CardList