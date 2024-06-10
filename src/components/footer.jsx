import React from 'react'
import Sociallinks from './sociallinks'
import Navlinks from './navlinks'
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
<footer className="mt-20 bg-sky-950 text-white px-6 py-14 md:mt-24 md:px-10 md:py-6 xl:mt-[9.375rem]">
      <div className="max-w-container mx-auto flex flex-col gap-10 justify-between items-center md:flex-row md:gap-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
        <div className='flex justify-center items-center w-7 rounded-xl '>
        <img src={logo} alt="Logo" className='w-full h-full bg-white rounded-xl'/>
       </div>
          <Navlinks />
        </div>
        <Sociallinks light />
      </div>
    </footer>
  )
}

export default Footer;