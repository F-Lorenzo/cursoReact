import './App.css'
import React ,{useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx'
import cart from './components/cart/cart.jsx'
import  ContextData from './context/CartContext.jsx'
import swal from 'sweetalert'




function App() {
  return (
    <ContextData>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:category" element={<ItemListContainer/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path ="/cart" element={cart}/>
          </Routes>
      </BrowserRouter>
    </ContextData>
    )
}

export default App


