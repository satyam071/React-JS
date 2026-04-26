import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function inc5Num(){
    setNum(num+5)
  }
  

  return (


    <div className=' flex flex-col' >
      <h1 className='text-[10rem] rounded-full bg-green-500 w-auto flex justify-center items-center' >{num}</h1>
      <div className='flex justify-center items-center'>
        <button  onClick={increaseNum} className=' p-8 bg-pink-500 rounded-full m-4' >Increase</button>
        <button onClick={decreaseNum} className=' p-8 bg-pink-500 rounded-full m-4'>Decrease</button>
        <button onClick={inc5Num} className=' p-8 bg-pink-500 rounded-full m-4'>Increase 5</button>

      </div>
      
      
    </div>
  )
}

export default App
