import React from 'react'
import Card from './Card'

const OurBuilds = () => {
  return (
    <div>
        <h1 className="text-left mb-5 font-Inter font-bold text-5xl"> Our Builds</h1>
        <p className=" w-[48rem] text-left mb-10 font-Inter font-normal text-lg text-neutral-400">Here's a glimpse of some of my recent and exciting projects.
         Each of them reflects my focus on user-centered design and my commitment to excellence in user experience.</p>
        <Card />
        <Card />
        <Card />
        <a href="#">View all projects</a>
    </div>
  )
}

export default OurBuilds