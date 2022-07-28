import {useState,useEffect} from "react"
import CardList from './cardList/CardList.jsx'
import DB from '../../db/dbProductos.json'




function ItemListContainer() {
  const [productList,setProductList]=useState([]);
  useEffect(() => {
    const products = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(DB)
      },2000)
    })
    products.then((res) =>{
      console.log(res)
      setProductList(res);
    })
    .catch((err) =>{
      console.log(err)
    })

  },[])
  return (
    <div>
      <CardList productList={productList}/>
    </div>
  )
}

export default ItemListContainer