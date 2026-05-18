import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { ThemeDataContext } from './Context/ThemeContext'

function App() {
  const[theme]=useContext(ThemeDataContext)

  return (
    <div className= {"h-screen text-white " + theme }>
      <Navbar/>
      
    </div>
  )
}

export default App
