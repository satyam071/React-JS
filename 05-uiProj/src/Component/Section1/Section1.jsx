import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

import CardsCont from './CardsCont'

const Section1 = (props) => {
  // console.log(props)
  return (
    <div>
        <div className='h-screen w-full text-2xl'>
            <NavBar />
            <Hero />
            <CardsCont cardData={props.cardData}/>
            
        </div>
      
    </div>
  )
}

export default Section1
