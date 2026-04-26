import React from 'react'

const Hero = () => {
  return (
    <div className='h-full w-full p-4 flex justify-center'>
        <div className='bg-[url(https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-full w-[95%] bg-cover rounded-xl  '>
            <div className='bg-black/30 backdrop-sepia-0 text-white h-full rounded-xl '>
                <div className='h-[80%] p-5 flex flex-col justify-center items-center'>
                    <h2 className='text-[2rem] py-2 font-bold'>Unleash Your Inner Champion Today.</h2>
                    <h2 className='text-[2rem] pb-2'>All In One Place.</h2>
                    <p className='text-[0.9rem] pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsam ad quia ullam a voluptatum veritatis dolor maiores voluptatem facere.</p>
                    <button className='py-2 px-6 bg-black rounded-full text-white text-[1rem]'>
                    Start your own journey
                    
                </button>
                </div>
                <div className=' flex justify-end items-end h-[20%] py-7 px-5'>
                        <button className='py-1 px-6 m-2 bg-white rounded-full text-black text-[1rem]'>
                        Instagram
                        <i className="ri-arrow-right-up-line"></i>
                        </button>
                        <button className='py-1 px-6 m-2 bg-white rounded-full text-black text-[1rem]'>
                        Facebook
                        <i className="ri-arrow-right-up-line"></i>
                        </button>
                        <button className='py-1 px-6 m-2 bg-white rounded-full text-black text-[1rem]'>
                        Tik Tok
                        <i className="ri-arrow-right-up-line"></i>
                        </button>
                    
                </div>

            </div>

            
        </div>
        
      
    </div>
  )
}

export default Hero
