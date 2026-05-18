import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='flex justify-around  p-5 bg-fuchsia-800 text-white font-bold'>
        <h1 className='text-xl font-extrabold'>MYWEB 4</h1>
        <ul className='flex gap-3 '>
            <Link to='/' >Home</Link>
            <Link to='/Contact' >Contact</Link>
            <Link to='/Product' >Product</Link>
          
        </ul>
      
    </div>
  )
}

export default NavBar
