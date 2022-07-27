import './App.css'
import React,{useState,useEffect} from 'react'
import NavBar from "./components/navBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
    )
}

export default App


