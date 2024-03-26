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
         <Card src={buildersHub} projects="https://buildershub.vercel.app/" ProjectName="Builders Hub" Projectstack="React + Tailwind + Figma - Frontend" ProjectDesc="Crafted Builders Hub with React and Tailwind, designed in Figma. Our aim? Enhance user experience and foster community collaboration for building projects. Connect with fellow builders to accelerate your project's development and showcase it on Builders Hub!"/>
        <Card src={yogawebsite} projects="https://yoga-website-jet.vercel.app/" ProjectName="Art of Learning Institute" Projectstack="React + Sanity + Figma - Fullstack" ProjectDesc="We upgraded up the Art of Learning Institute's yoga business with a polished UI design, using React and CSS for the frontend. The Builders created the UI in Figma and conducted design research to make sure it's user-friendly. The outcome? A smooth interface that boosts the brand and keeps users engaged."/>
        <Card src={cashflow} projects="https://cashflow-dd61aa.design.webflow.com/" ProjectName="Cashflow" Projectstack="React + TailwinD + Express + MongoDB + Figma - Fullstack" ProjectDesc=" Developed Cashflow, a payment application enabling users to securely log in, authenticate, and transfer funds seamlessly. Leveraging React for the frontend and Express with MongoDB for the backend, we ensured robust functionality. Additionally, integrated a Text-To-Speech module to enhance user experience."/>
        <Link to="/projects" className='font-Inter font-semibold text-base underline'>View all projects</Link>    
        </div>
  )
}

export default OurBuilds