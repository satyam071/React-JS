import React from 'react'
import 'remixicon/fonts/remixicon.css'

const NavBar = () => {
  return (
    <div className=' flex items-center justify-between px-16 py-4 w-full'>
        <h2 className='font-medium' >Horizon Courts</h2>
        <div className='w-[60%] flex justify-evenly items-center'>
            <button className='text-[1rem] py-[1px] px-3 rounded-full border-1 border-black-100'>About Us</button>
            <button className='text-[1rem] py-[1px] px-3 rounded-full border-1 border-black-100'>Services</button>
            <button className='text-[1rem] py-[1px] px-3 rounded-full border-1 border-black-100'>Coaches</button>
            <button className='text-[1rem] py-[1px] px-3 rounded-full border-1 border-black-100'>Events</button>
            <button className='text-[1rem] py-[1px] px-3 rounded-full border-1 border-black-100'>Contacts</button>
        </div>
        <button className='py-1 px-6 bg-black rounded-full text-white text-[1rem]'>
            Book Now
            <i className="ri-arrow-right-up-line"></i>
        </button>


      
    </div>
  )
}

export default NavBar
