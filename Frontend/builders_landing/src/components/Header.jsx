import React from 'react'
import headergraphic from '../assets/headergraphic.jpg'


const Header = () => {
  return (
    <div className='flex justify-center items-center h-screen mb-24 max-sm:mb-0 md:max-xl:mb-0'>
      <div className='max-w-5xl flex flex-col items-center z-[1]'>
        <img src={headergraphic} alt="builders" className="w-60 h-86 object-cover my-12 hover:animate-pulse hover:cursor-pointer max-[480px]:w-[13rem] max-[480px]:mt-0"/>
    <h1  className="bg-gradient-to-b from-white via-slate-200 to-slate-300 inline-block text-transparent bg-clip-text text-8xl font-bold font-Inter leading-none max-[480px]:text-5xl md:max-xl:text-6xl md:max-xl:mb-4 ">
    We Build Stuff<br></br>
    We are Builders Hub.
    </h1>
    <p className='text-3xl leading-normal my-5 text-gray-300 font-DMSans font-normal max-[480px]:w-[22rem] max-[480px]:text-2xl'>We are a community of builders and we believe in building projects that we do not leave in between. 
      We collaborate to make the building experience better, faster and more enjoyable.</p></div>
    </div>
    
  )
}

export default Header