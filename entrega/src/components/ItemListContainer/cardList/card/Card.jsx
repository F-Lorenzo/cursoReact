import Counter from './counter/Counter.jsx'



function Card({id,modelo,marca,stock}) {
  return (
    <div>
        <div class="card col-4"  style={{width:"18rem"}}>
         {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
                <h5 class="card-title" key={id}>{modelo} {marca}</h5>
                <p class="card-text" key={id}>${precio}</p>
                <p class="card-text" key={id}>${stock}</p>
                <Counter/>
            </div>
        </div>
    </div>
  )
}

export default Card