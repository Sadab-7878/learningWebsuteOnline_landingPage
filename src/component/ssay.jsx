import React from 'react'
import Pic1 from '../assets/ssay/pic1.png'
import Flag from '../assets/ssay/flag.svg'
import Pag from '../assets/ssay/pag.png'

const ssay = () => {
  return (
    <div className='max-w-[1240px] mx-auto mt-20'>
        <div>
            <p className='text-xs text-slate-400 font-semibold'>TOP STUDIYING</p>
            <p className='text-3xl'>Our students say</p>
        </div>
        
        <div className='mt-12 flex gap-32'>
            <div>
                <img src={Pic1} alt="" className='bg-red-100 h-[500px] rounded-3xl'/>
            </div>

            <div className='flex flex-col justify-center'>
                <div className='space-y-8'>
                    <div>

                    <p className='font-semibold'>Martin Watson</p>
                    <div className='flex '>
                        <img src={Flag} alt="" className='h-8'/>
                        <p className='text-xs font-semibold text-slate-400 py-1'>B2 course student</p>
                    </div>
                    </div>

                    <div>
                        <p className='text-3xl font-medium'>There is no way I could have made the same <br /> progress learning Spanish without using Lingua. <br /> The best part is now learning Spanish has <br /> become one of my biggest hobbies.</p>
                    </div>

                    <div>
                        <img src={Pag} alt="" />
                    </div>
                </div>

            </div>
        
        </div>
        

    </div>
  )
}

export default ssay