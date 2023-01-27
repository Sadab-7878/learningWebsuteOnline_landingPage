import React from 'react'

const trial = () => {
  return (
    <div className='max-w-[1240px] mx-auto mt-36'>
            <div className='space-y-2'>
                <p className='capitalize text-center text-4xl font-semibold'>Get a free trial lesson today</p>

                <p className='capitalize text-center text-sm text-gray-400 font-semibold'>Start fulfilling your language dreams with our school</p>
            </div>

            <div className='text-center mt-12'>
                <div className='space-x-6'>
                <input type="text" placeholder="Enter your email" className="input w-full max-w-xs border border-gray-100 rounded-full" />

                <button className="btn btn-active btn-primary rounded-full px-6">Send</button>

                </div>
            </div>

    </div>
  )
}

export default trial