// Type 1
// import React from 'react'

// const App = () => {
//   return (
//     <div >
//       <button onClick={()=>{
//         console.log("he's clicking me")
//       }}>Hii Click me i am a button</button>
      
//     </div>
//   )
// }

// export default App


//Type 2


// import React from 'react'

// const App = () => {
//   function inputChanging(){
//     console.log("User is click me, Help!")
//   }
//   return (
//     <div>
//       <button onClick={inputChanging} >Hii click me i am a button</button>
      
//     </div>
//   )
// }

// export default App

//Type 3 with arguments

import React from 'react'

const App = () => {
  return (
    <div>
      <button onClick={(elem)=>{
        console.log(elem.clientX)

      }} >Hii click me i am a button</button>
      
      
      
    </div>
  )
}

export default App


