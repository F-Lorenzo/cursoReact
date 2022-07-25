import './App.css'
import React from 'react'
import NavBar from "./components/navBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Card from './components/ItemListContainer/card/Card.jsx'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
    )
}

export default App


