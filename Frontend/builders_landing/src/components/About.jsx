import React from 'react'
import aboutus from '../assets/aboutus.png'
import connect from '../assets/connect.png';
const About = () => {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="1500" id='about-section' class="flex flex-row justify-between mt-8 ">
    <div class="flex flex-col w-[51.375rem]">
        <h1 className="text-left mb-10 font-Inter font-bold text-5xl">About Us</h1>
        <p class="text-left w-[45rem] font-DMSans text-2xl leading-relaxed mb-8">With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that 
            each design not only looks great but also delivers an exceptional experience</p>  
            <div className='flex gap-3'>
              <div className='bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center' >
                <img className='w-[24px] h-[24px]' src={connect}></img>
              </div>
              <div className='bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center' >
                <img className='w-[24px] h-[24px]' src={connect}></img>
              </div>
              <div className='bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center' >
                <img className='w-[24px] h-[24px]' src={connect}></img>
              </div>
              <div className='bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center' >
                <img className='w-[24px] h-[24px]' src={connect}></img>
              </div>
            </div>  
    </div>
  
    <div class="flex ml-10">
        <img src={aboutus}></img>
    </div>

    </div>

    </>
  )
}

export default About