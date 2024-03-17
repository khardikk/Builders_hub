import React from 'react'
import aboutus from '../assets/aboutus.png'

const About = () => {
  return (
    <>
    
    <div>
        <h1>About Us</h1>
        <p>With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that 
            each design not only looks great but also delivers an exceptional experience</p>    
    </div>
    <div>
        <img src={aboutus}></img>
    </div>
    </>
  )
}

export default About