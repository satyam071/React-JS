import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {
  console.log(props.companyName )
  return (
    <div className='m-0 p-6  '>
      <div className="h-[400px] w-[350px] bg-[#f5f5f5] p-6  rounded-[30px] flex flex-col justify-between ">
        <div className='flex flex-col' >
          <div className="flex justify-between items-start ">
            <img className='h-[50px] rounded-[50%] border-1 border-[#c4c1c1] ' src={props.companyLogo}  alt="" />
            <button className='flex text-[14px] items-center justify-center py-0.5 px-2 rounded-[5px]   border-1 border-[#c4c1c1] text-[#c4c1c1]' >Save <Bookmark  width={15}/> </button>

          </div>
           <div className="center">
          <h2 className='text-[21px] font-medium mt-4' >{props.companyName} <span className='text-[13px] font-light text-[#c4c1c1]'>{props.datePosted}</span></h2>
          <h2 className='text-[22px] font-bold my-1'>{props.post}</h2>
          <div>
            <button className=' text-[12px] py-0.5 px-2 mr-1 rounded-[5px] font-semibold  bg-[#c4c1c1]'>{props.tag1}</button>
            <button className='text-[12px] py-0.5 px-2 mr-1 rounded-[5px] font-semibold  bg-[#c4c1c1]'>{props.tag2}</button>
          </div>

        </div>
          
          

        </div>

       

        <div className=" border-t-1 border-[#c4c1c1]  pt-4 px-1 flex items-center justify-between">
          <div>
            <h2 className='text-[18px] font-medium mt-4'>{props.price}</h2>
            <p className='text-[13px] font-light text-[#868484]'>{props.location}</p>
          </div>
          <div>
            <button className=' text-[15px] py-[7px] px-[12px] mr-1 rounded-[5px] font-normal  bg-[#000] text-white'>Apply Now</button>
          </div>

        </div>

        
      </div>
     
      
    </div>
  )
}

export default Card
