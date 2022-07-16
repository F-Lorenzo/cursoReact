import React from 'react'
// props {title,description,img}
function Card() {
  return (
    <div>
         <div class="card" style="width: 18rem;">
            {/* <img src="" class="card-img-top" alt=""/> */}
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    </div>
  )
}

export default Card