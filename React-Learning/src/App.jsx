import React from 'react'
import './App.css'
import NavBar from './Components/nav-bar'
import Card from './Components/card'
function App() {
  return (
    <div>
      <NavBar />
      <Card user="Mani" age="25" />
      <Card user="basit" age="25" />
      <Card user="ali" age="25" />
    </div>
  )}

export default App