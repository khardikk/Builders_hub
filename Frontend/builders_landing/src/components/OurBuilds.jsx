import React from 'react'
import Card from './Card'
import buildersHub from '../assets/buildersHub.png';
import yogawebsite from '../assets/yogaproject.png';
import cashflow from '../assets/cashflow.png';
import { Link } from 'react-router-dom';

const OurBuilds = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" id='our-builds-section' className='mb-48 max-[480px]:mb-24 max-[480px]:p-4  max-[480px]:flex max-[480px]:flex-col'>
        <h1 className="text-left mb-5 font-Inter font-bold text-5xl max-[480px]:w-[12rem] max-[480px]:text-4xl max-[480px]:text-center"> Our Builds</h1>
        <p className=" w-[48rem] text-left mb-10 font-Inter font-normal text-lg text-neutral-400 max-[480px]:w-[21rem]">Here's a glimpse of some of my recent and exciting projects.
         Each of them reflects my focus on user-centered design and my commitment to excellence in user experience.</p>
         <Card src={buildersHub} projects="https://buildershub.vercel.app/" ProjectName="Builders Hub" Projectstack="React + Tailwind - Frontend"/>
        <Card src={yogawebsite} projects="https://yoga-website-jet.vercel.app/" ProjectName="Art of Learning Institute" Projectstack="React + Sanity - Fullstack" />
        <Card src={cashflow} projects="https://cash-flow-alpha.vercel.app/" ProjectName="Cashflow" Projectstack="React + TailwinD + Express + MongoDB - Fullstack" />
        <Link to="/projects" className='font-Inter font-semibold text-base underline'>View all projects</Link>    
        </div>
  )
}

export default OurBuilds