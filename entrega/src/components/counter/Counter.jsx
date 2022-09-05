import React,{useState,useEffect} from 'react'

function Counter({initial,stock,onAdd}) {

    const [count, setCount] = useState(initial);

    function handleClickMas(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleClickMenos(){
        if(count > 1){
            setCount(count -1)
        }
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="d-flex justify-content-end ">
                    <div className="btn btn-outline-dark m-2" onClick={handleClickMas}>+</div>
                    <h3>{count}</h3>
                    <div className="btn btn-outline-dark m-2" disabled={count <=1} onClick={handleClickMenos}>-</div>
                    <div className="btn btn-dark m-2" disabled={count >= stock} onClick={()=>onAdd(count)}>Agregar al carrito</div>
                </div>
            </div>                
        </div>
    )
}

export default Counter