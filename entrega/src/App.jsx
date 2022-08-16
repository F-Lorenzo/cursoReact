import './App.css'
import React ,{useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx'
import cart from './components/cart/cart.jsx'
import CartProvider from './context/CartContext.jsx'




function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/productos/:category" element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path ="/cart" element={cart}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
    )
}

export default App


