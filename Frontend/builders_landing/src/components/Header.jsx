import React from 'react'
import headergraphic from '../assets/headergraphic.jpg'

const Header = () => {
  return (
    <div>
        <img src={headergraphic} alt="builders" className="w-full h-96 object-cover"/>
    <h1 className="text-3xl font-bold">
    We Build Stuff
    We are Builders Hub.
    </h1>
    <p>We are a community of builders and we believe in building projects that we do not leave in between. 
      We collaborate to make the building experience better, faster and more enjoyable.</p></div>
  )
}

export default Header