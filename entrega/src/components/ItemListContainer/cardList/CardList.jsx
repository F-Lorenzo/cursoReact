import Card from './card/Card.jsx'
import Carga from './Carga.jsx'


function CardList({productList}) {
 
  return (
    <div class="grid text-center">
      <div class="g-col-4">
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