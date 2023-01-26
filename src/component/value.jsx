import React from 'react'
import Play from '../assets/values/Play.png'
import Paper from '../assets/values/Paper.png'
import Send from '../assets/values/Send.png'


const value = () => {

    
  return (
    <div className=''>
        <div className='pt-28 text-center'>
        <p className='text-[#B0B0C0] text-xs font-bold'>WHY CHOOSE US</p>
        <p className='text-4xl'>Our values</p>
        </div>

        <div className='py-[100px]'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-6'>

                
                        <div  className=' h-[300px] flex flex-col items-center gap-5'>
                        <img src={Play} alt="" />
                        <p className=' text-black font-semibold text-2xl'>Speaking clubs</p>
                        <p className='text-gray-500 text-center font-semibold'>In our school you will practice <br /> your speaking skills and just get <br /> a lot of positive emotions!</p>
                    </div>


                    <div  className=' h-[300px] flex flex-col items-center gap-5'>
                        <img src={Paper} alt="" />
                        <p className=' text-black font-semibold text-2xl'>Quality control</p>
                        <p className='text-gray-500 text-center font-semibold'>A huge work has been done with <br /> the teachers and their work has <br /> been monitored thoroughly. </p>
                    </div>

                    <div  className=' h-[300px] flex flex-col items-center gap-5'>
                        <img src={Send} alt="" />
                        <p className=' text-black font-semibold text-2xl'>Progress analysis</p>
                        <p className='text-gray-500 text-center font-semibold'>The CEF of Reference has been used <br /> at our school. It allows to control our <br /> students’ success in studying.</p>
                    </div>

                    

               
                
                
            </div>

        </div>

    </div>

    
    
  )
}

export default value