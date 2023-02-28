import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App({card_title, description, image, link }) {
  return (
    <div className="App">
      <div class="card">
      <img 
      src={image}
      alt="Placeholder Image"/>
      <div class="card-content">
        <h2>{card_title}</h2>
        <p>{description}</p>
        <a href={link}>Learn More</a>
     </div>
    </div>  
  </div>
  )
}

export default App
