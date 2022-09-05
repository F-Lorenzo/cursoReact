import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import CardList from './cardList/CardList.jsx'
import {collection,getDocs,getFirestore,query,where,} from 'firebase/firestore'





function ItemListContainer() {
  const [productList,setProductList]=useState([]);
  const {category} =useParams()
  useEffect(() => {
    setProductList([])

    const db = getFirestore()

    const itemCollection = collection(db, 'Productos')
    const collectionFiltered = query(
      collection(db, 'Productos'),
      where('idCategoria', '==', `${category}`),
    )

    getDocs(!category ? itemCollection : collectionFiltered)
      .then((snapshot) => {
        setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch(() => {
        setError(true)
      })
  }, [category])
  return (
    <div>
      <CardList productList={productList}/>
    </div>
  )
}

export default ItemListContainer