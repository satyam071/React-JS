import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className=' font-black bg-black '>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
