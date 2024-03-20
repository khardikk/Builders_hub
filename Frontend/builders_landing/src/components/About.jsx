import React from 'react'
import aboutus from '../assets/aboutus.png'

const About = () => {
  return (
    <>
    <div class="flex flex-row ml-[5rem] justify-between mt-8">
    <div class="flex flex-col">
        <h1 class="text-left mb-4  ">About Us</h1>
        <p class="text-left leading-7 w-[36rem]">With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that 
            each design not only looks great but also delivers an exceptional experience</p>    
    </div>
    <div class="flex mr-[5rem]">
        <img src={aboutus}></img>
    </div>
    </div>
    </>
  )
}

export default About