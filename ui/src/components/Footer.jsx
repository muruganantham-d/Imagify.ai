import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>

        <img src={assets.logo} alt="" width={150} />

        <p className='flex-1 border-l border-gray-400  pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright &copy; 2025 Vaibhav Patil | All rights reserved.</p>

        <div className='flex gap-2.5'>
            <a href="https://linkedin.com/in/vaibhav-patil-3292aa303"><img className='cursor-pointer' src={assets.linkedin_icon} alt="" width={35} /></a>
            <a href="https://github.com/VaibhavPatil01"><img className='cursor-pointer'  src={assets.github_icon} alt="" width={35} /></a>
            <a href="https://vaibhav-portfolio-navy.vercel.app/"><img className='cursor-pointer'  src={assets.developer_icon} alt="" width={39} /></a>
        </div>
        
    </div>
  )
}

export default Footer