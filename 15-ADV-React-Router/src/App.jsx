import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Footer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Product/Mens' element={<Mens/>} />
        <Route path='/Product/Womens' element={<Womens/>} />
        <Route path='*' element={<NotFound/>}></Route>

        

      </Routes>
    </div>
  )
}

export default App
