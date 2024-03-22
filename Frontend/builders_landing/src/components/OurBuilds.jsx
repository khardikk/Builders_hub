import React from 'react'
import Card from './Card'
import projectimg from '../assets/projectimg.png';
import yogawebsite from '../assets/yogaproject.png';
import cashflow from '../assets/cashflow.png';
const OurBuilds = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" id='our-builds-section' className='mb-48'>
        <h1 className="text-left mb-5 font-Inter font-bold text-5xl"> Our Builds</h1>
        <p className=" w-[48rem] text-left mb-10 font-Inter font-normal text-lg text-neutral-400">Here's a glimpse of some of my recent and exciting projects.
         Each of them reflects my focus on user-centered design and my commitment to excellence in user experience.</p>
        <Card src={projectimg} />
        <Card src={yogawebsite} />
        <Card src={cashflow} />
        <a href="#" className='font-Inter font-semibold text-base underline'>View all projects</a>
    </div>
  )
}

export default OurBuilds