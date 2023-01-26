import React from 'react'
import Navbar from './navbar'
import Hero from '../assets/hero.png'


const hero = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className='bg-[#fff5f1] px-10 py-10 rounded-3xl -mx-10'>
      <Navbar />

      <div className='pt-20 flex justify-between items-center'>
        <div>
        <div>
          <p className='text-5xl leading-normal'>A <span className='text-blue-700'>unique</span> approach <br></br>to learning foreign <br></br> languages online</p>
        </div>

        <div className='mt-4'>
          <p>Learn at your own pace, with lifetime <br /> access on mobile and desktop</p>
        </div>

        <div className='mt-10'>
        <button className="btn btn-active btn-primary rounded-full px-8 ">Get started</button>

        </div>
        </div>

        <div >
          <img src={Hero} alt="" className='h-[550px]'/>
        </div>
      </div>

      </div>
    </div>
  )
}

export default hero