import React from 'react'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'

const App = () => {
  const cardData=[
    {
      name:"Spiderman",
      image:"https://i.pinimg.com/736x/28/1e/82/281e821d44e8a426103762e5caf5d75a.jpg",
      discription: "The ultimate SPIDERMAN now streaming...",
      

    },
    {
      name:"Hulk",
      image:"https://i.pinimg.com/736x/4d/b8/13/4db8134b5d3742de980e2da13f56305b.jpg",
      discription: "The ultimate Powerhouse HULK now streaming...",


    },
    {
      name:"Loki",
      image:"https://i.pinimg.com/736x/9e/89/93/9e8993be84dbc765292464d74519534a.jpg",
      discription: "The Most Timeless Villian LOKI now streaming...",


    }]
  return (
    <div className='w-[100vw]'>
        <Section1 cardData={cardData}/>
   
      
    </div>
  )
}

export default App

