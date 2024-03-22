import React from 'react'
import aboutus from '../assets/aboutus.png'

const About = () => {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="1500" id='about-section' class="flex flex-row justify-between mt-8 mb-20">
    <div class="flex flex-col w-[51.375rem]">
        <h1 className="text-left mb-10 font-Inter font-bold text-5xl">About Us</h1>
        <p class="text-left w-[45rem] font-DMSans text-2xl leading-relaxed ">With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that 
            each design not only looks great but also delivers an exceptional experience</p>    
    </div>
    <div class="flex ml-10">
        <img src={aboutus}></img>
    </div>
    </div>
    </>
  )
}

export default About