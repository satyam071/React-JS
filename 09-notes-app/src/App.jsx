import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task]

    copyTask.push({title,details})
    
    setTask(copyTask)
    console.log(copyTask)
    setTitle('')
    setDetails('')
    



  }
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen w-screen bg-black flex' >

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col items-start w-1/2 ' >
        <h1 className=' text-2xl mx-20 mt-8 text-white font-bold m-5  '> Add Your Notes</h1>
        <input   
          value={title}
          className='w-1/2 py-3 px-6 mx-20  rounded border-2 border-white text-white outline-none'  type="text" 
          placeholder='Enter the topic here: ' 
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <textarea  
          value={details}
          className='w-1/2 h-32 py-3 px-6 mx-20 mt-8  rounded border-2 border-white text-white outline-none' 
          placeholder='Enter notes here' 
          id=""
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className=' w-1/2 py-3 px-6 mx-20 mt-8   rounded border-2 border-white text-black outline-none bg-white font-bold'>Publish</button>
      </form>
      <div className='border-l-2 w-1/2 border-white'>
        <h1 className='text-2xl text-white font-bold m-8'> Your Recent Notes</h1>
        <div>
          <div className='flex  gap-5 mx-8 flex-wrap'>
            
            {task.map(function( elem,idx){
              return <div  key={idx} className='bg-white h-52 w-40 rounded flex flex-col flex-wrap justify-between'>
                
                <div>
                  <h3 className='text-xl font-bold px-3 py-2'>{elem.title}</h3>
                  <p className='px-3 py-1 text-gray-600'>{elem.details}</p>
                </div>
                <div>
                  <button onClick={()=>{
                    deleteNote(idx)
                  }} className='w-[90%] m-2 bg-red-500 rounded font-bold cursor-pointer text-white active:scale-95'>Delete</button>
                  
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
