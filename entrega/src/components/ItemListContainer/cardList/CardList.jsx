import Card from './card/Card.jsx'
import Carga from './Carga.jsx'


function CardList({productList}) {
 
  return (
    <>
      {
      productList.map((products)=>(
      <Card key={products.id} products={products}/>)
      )
      }
    </>
  )
}


export default CardList