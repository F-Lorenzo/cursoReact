import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail.jsx'
import{doc,getDoc,getFirestore} from 'firebase/firestore'

function ItemDetailContainer() {
    const [product,setProduct]=useState({});
    const {id}=useParams();
    useEffect(() => {
      const db = getFirestore()
      const response = doc(db, 'Productos', `${id}`)
      getDoc(response).then((snapshot) => {
        snapshot.exists()
          ? setProduct({ id: snapshot.id, ...snapshot.data() })
          : setProduct(undefined)
      })
    }, [id])
  return (
    <div><ItemDetail product={product}/></div>
  )
}

export default ItemDetailContainer