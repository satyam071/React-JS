import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex justify-center items-center gap-5 h-[90vh] bg-fuchsia-900 text-white'>
        <Link className='text-xl font-bold' to='/Product/Mens' >Mens</Link>
        <Link className='text-xl font-bold' to='/Product/Womens' >Women's</Link>
      
    </div>
  )
}

export default Contact
