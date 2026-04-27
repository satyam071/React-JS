import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log("A ki value change ho rhi hai")
  }
  function bChanging(){
    console.log("B ki value change ho rhi hai")
  }

  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
  },[b])

  return (
    <div className='bg-black h-screen flex justify-around items-center'>
      <div>
        <h1 className='text-7xl font-bold m-4'>A is {a}</h1>
        <button  
          className='p-8 bg-pink-400 border-2 border-white'
          onClick={()=>{
            setA(a+1)
          }}>
            Click me
        </button>
      </div>
      <button className='p-8 bg-pink-400 border-2 border-white ' onClick={()=>{
        setA(0)
        setB(0)
      }}>Reset</button>
      <div>
        <h1 className='text-7xl font-bold m-4'>B is {b}</h1>
        <button  
          className='p-8 bg-pink-400 border-2 border-white'
          onClick={()=>{
            setB(b-1)
          }}>
            Click me
        </button>
      </div>
      
    </div>
  )
}

export default App
