import Counter from './counter/Counter.jsx'



function Card({products}) {
  return (
    <div class = "container "> 
      <div class = "d-flex">
          <div class="card col-4"  style={{width:"18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                  <h5 class="card-title" > {products.modelo}  {products.marca}</h5>
                  <p class="card-text" >${products.precio}</p>
                  <p class="card-text" >${products.stock}</p>
                  <Counter/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card