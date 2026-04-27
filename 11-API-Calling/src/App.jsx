import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  

  const [data, setData] = useState([]) 

  const getData= async()=>{
    const response= await axios.get('https://picsum.photos/v2/list')
    // const data= await response.json()
    setData(response.data)
    console.log(response.data)

  }
  
    
  return (
    <div>
      <button onClick={()=>{
        getData()
      }}>Click me</button>


      {/* ignore this  below*/}

      {data.map(function(elem,idx){
        return <div 
                  // style={{ backgroundImage: `url(${elem.url})` }}
                  key={idx} 
                  className=' h-64 w-64 bg-pink rounded-xl'></div>

      })}
    </div>
  )
}

export default App
