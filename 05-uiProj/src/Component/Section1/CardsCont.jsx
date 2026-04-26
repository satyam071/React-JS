import React from 'react'
import Cards from './Cards'

const CardsCont = (props) => {
    // console.log(props)
  return (
    <div className='w-full h-[70vh] flex flex-wrap justify-center items-center'>
        {props.cardData.map(function(elem,idx){
            return <Cards id={idx} name={elem.name} img={elem.img} discription={elem.discription} image={elem.image} />
        })}
        
       
      
    </div>
  )
}

export default CardsCont
