import React from 'react'


function itemDetail({product}) {
  return (
    <div>
      <div class = "container">
        <div class = "d-flex">
          <div>
            <img src={product.image} />
          </div>
          <div>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default itemDetail