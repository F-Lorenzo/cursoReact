import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail.jsx'
import DB from '../../db/dbProductos.json'

function itemDetailContainer() {
    const [product,setProduct]=useState({});
    const {id}=useParams();
    useEffect(() => {
      const products = new Promise((resolve, reject) => {
        setTimeout(() =>{
          resolve(DB)
        },2000)
      })
      products.then((res) =>{
       let prod=res.filter(product=> product.id === id);
        console.log("prod",prod)
        setProduct(prod);
      })
      .catch((err) =>{
        console.log(err)
      })
  
    },[id])
  return (
    <div><ItemDetail product={product}/></div>
  )
}

export default itemDetailContainer