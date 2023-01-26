import React from 'react'
import Icon from "../assets/icon.png"

const navbar = () => {
  return (
    <div className='flex justify-between items-center'>

        <img src={Icon} alt="icon" />

        <ul className='flex gap-10'>
            <li>Courses</li>
            <li>About Us</li>
            <li>Teachers</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Blog</li>
        </ul>

        <button className="btn btn-outline btn-accent px-6 rounded-full">Get Started</button>


    </div>
  )
}

export default navbar