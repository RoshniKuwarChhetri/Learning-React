import React from 'react'
import './style.css'
import {Card} from './Component/Card'
import { Navbar } from './Component/Navbar'
import PropsDrilling from './Component/PropsDrilling'
const App = () => {
  return (
    <div className="container">
      <PropsDrilling country="Uk" year={33} city="rrr" img="https://i.pinimg.com/474x/a5/f8/a6/a5f8a6d6c02976d90365c20c3cfb8a9c.jpg"/>
      <PropsDrilling country="Uk" year={44} city="rrr" img="https://i.pinimg.com/736x/28/b8/72/28b872f8a774aee6d92ebbd1dcfa1f56.jpg"/>
      <PropsDrilling country="Uk" year={66} city="rrr" img="https://i.pinimg.com/736x/62/41/b2/6241b26e6cf04e873795ec6cfe40df8c.jpg"/>
      
    </div>
    
  )
}

export default App

  