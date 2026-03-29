import React from 'react'
import './App.css'
import NavBar from './Components/nav-bar'
import Card from './Components/card'
function App() {
  return (
    <div >
      <NavBar />
      <Card user="MANI" age="25" img="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" />
      <Card user="BASIT" age="25" img="https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_incoming&w=740&q=80" />
      <Card user="ALI" age="25" img="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" />
    </div>
  )}

export default App