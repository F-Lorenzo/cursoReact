import Counter from './counter/Counter.jsx'



function Card({products}) {
  return (
    <div class = "container "> 
      <div class = "d-flex">
          <div class="card g-col-4"  style={{width:"18rem"}}>
          <img src={products.image} class="card-img-top" />
              <div class="card-body ">
                  <h5 class="card-title" > {products.marca} {products.modelo}</h5>
                  <p class="card-text" >${products.precio}</p>
                  <p class="card-text" >stock:{products.stock}</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card