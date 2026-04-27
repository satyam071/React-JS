import React from 'react'

const App = () => {

  
  const user=localStorage.getItem('user')
  console.log(user)

  
  return (
    <div>
      <h1>Hello My name is Satyam</h1>
      
    </div>
  )
}

export default App


//Session Storage 
// Session Storage mai tabtak data saved rehti jabtak pura page reload na ho jaaye 

//Local storage 
//Data will be kept forever even if the page is reload 
 

// localStorage.clear() clears the local storage data 
// sessionStorage.clear() clears the session storage data

//Local storage mai data key vlue pair mai save rehti hai 
// localStorage.setItem('User','Satyam')

//To use or get
// const user=localStorage.getItem('user') 

//Concepts for local storage 
//1) set item
//2) get item 
// 3) clear
// 4) remove item

//localStorage.remove('User')




// > concept
// Local storage mai items string ki form mai rehti hai so to push an object in local storage we need to convert it into string and to convert it into string we use JASON.stringify(user)


// const user={
//   username:"Satyam"
//   age:19
//   city:"Renukoot"

// }
// localStorage.setItem('user' , JSON.stringify(user))