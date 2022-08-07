import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './itemDetail/itemDetail.jsx'
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
        let prod = res;
        prod=prod.find(p => p.id === id);
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