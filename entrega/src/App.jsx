import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'




function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:category" element={<ItemListContainer/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path ="/cart" element={cart}/>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App


