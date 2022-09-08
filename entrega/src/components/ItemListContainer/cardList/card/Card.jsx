import React from 'react'
import {Link} from 'react-router-dom'

function Card({products}) {
  return (
    <div className = "container m-2 col-4  "> 
          <div className="card text-center p-2"  style={{width:"18rem"}}>
         
          <img src={products.image} className="card-img-top" />
              <div className="card-body ">
              <h5 className="card-title" > {products.Marca} {products.Modelo}</h5>
                  <p className="card-text" >${products.Precio}</p>
                  <p className="card-text" >stock:{products.Stock}</p>
              </div>
              <Link to={'/producto/' + products.id}><div className="btn btn-primary">Más info</div></Link>
          </div>
    </div>
  )
}

export default Card    