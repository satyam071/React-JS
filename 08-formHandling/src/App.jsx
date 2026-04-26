  import React, { useState } from 'react'

  
  const App = () => {
    const [title, setTitle] = useState('')
    const submitHandler=(e)=>{
      e.preventDefault()
      console.log("Form submitted by: ", title)
      setTitle('')

    }
    return (
      
      <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
          <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }} type="text" placeholder='Enter you name here' />
          <button>Submit Now</button>
        </form>
        
      </div>
    )
  }
  
  export default App
  