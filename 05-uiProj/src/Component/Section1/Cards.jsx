import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Cards = (props,key) => {
    console.log(props.image)
  return (
    <div  style={{ backgroundImage: `url(${props.image})` }} className='w-[300px] h-[300px] bg-amber-300 mx-5 rounded-xl p-4 flex flex-col justify-between items-start  w-[95%] bg-cover rounded-xl bg-center  '>
        <button className='py-1 px-6 bg-white/35 rounded-full text-white text-[1rem] flex justify-center items-center  '>
            {props.name}
        </button>
        <div className='flex w-full justify-between'>
            <p className='text-[0.85rem] w-[70%] text-white'>{props.discription} </p>
            <i  className="ri-arrow-right-up-line text-white"></i>
        </div>
        
        
      
    </div>
  )
}

export default Cards
