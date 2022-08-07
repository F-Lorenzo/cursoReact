import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import CardList from './cardList/CardList.jsx'
import DB from '../../db/dbProductos.json'




function ItemListContainer() {
  const [productList,setProductList]=useState([]);
  const {category} =useParams()
  useEffect(() => {
    const products = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(DB)
      },2000)
    })
    products.then((res) =>{
      if(category){
      let catArray = res.filter(item => item.category === category)
      console.log(catArray)
      setProductList(catArray);}
      setProductList(res)
    })
    .catch((err) =>{
      console.log(err)
    })

  },[category])
  return (
    <div>
      <CardList productList={productList}/>
    </div>
  )
}

export default ItemListContainer