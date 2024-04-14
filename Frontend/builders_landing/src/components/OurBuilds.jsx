import React from 'react';
import Card from './Card';
import buildersHub from '../assets/buildersHub.png';
import yogawebsite from '../assets/yogaproject.png';
import cashflow from '../assets/cashflow.png';
import { Link } from 'react-router-dom';
import tailwindlogo from '../assets/Tailwind.png';
import rctlogo from '../assets/React-logo.png';
import figmalogo from '../assets/Figma-logo.png';
import nodejslogo from '../assets/nodejs-logo.png';
import expresslogo from '../assets/express-logo.png';
import mongodblogo from '../assets/mongodb-logo.png';
import webflowlogo from '../assets/webflow-logo.png';
import sanitylogo from '../assets/sanity-logo.png';
import {Tilt} from 'react-tilt'

// Define an object to map skill names to their respective logos
const skillLogos = {
  tailwind: tailwindlogo,
  react: rctlogo,
  figma: figmalogo,
  nodejs: nodejslogo,
  express: expresslogo,
  mongodb: mongodblogo,
  webflow: webflowlogo,
  sanity: sanitylogo
};

// Define an array of skills for each project
const projectSkills = {
  buildersHub: ['tailwind', 'react', 'figma'],
  yogawebsite: ['react', 'sanity', 'figma'],
  cashflow: ['react', 'tailwind', 'express', 'mongodb','webflow'],
};
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            10,     // max tilt rotation (degrees)
	perspective:    2800,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          2000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const OurBuilds = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" id='our-builds-section' className='mb-48 max-[480px]:mb-24 max-[480px]:p-4  max-[480px]:flex max-[480px]:flex-col '>
      <h1 className="text-left mb-5 font-Inter font-bold text-5xl max-[480px]:w-[12rem] max-[480px]:text-4xl max-[480px]:text-center"> Our Builds</h1>
      <p className=" w-[48rem] text-left mb-10 font-Inter font-normal text-lg text-neutral-400 max-[480px]:w-[21rem] md:max-xl:w-[37rem] ">Here's a glimpse of some of my recent and exciting projects. Each of them reflects my focus on user-centered design and my commitment to excellence in user experience.</p>
      <Tilt options={defaultOptions}>
      <Card logos={projectSkills.buildersHub.map(skill => skillLogos[skill])} src={buildersHub} projects="https://buildershub.vercel.app/" ProjectName="Builders Hub" Projectstack="React + Tailwind + Figma - Frontend" ProjectDesc="Crafted Builders Hub with React and Tailwind, designed in Figma. Our aim? Enhance user experience and foster community collaboration for building projects. Connect with fellow builders to accelerate your project's development and showcase it on Builders Hub!"/>
      </Tilt>
      <Tilt options={defaultOptions}>
      <Card logos={projectSkills.yogawebsite.map(skill => skillLogos[skill])} src={yogawebsite} projects="https://yoga-website-jet.vercel.app/" ProjectName="Art of Learning Institute" Projectstack="React + Sanity + Figma - Fullstack" ProjectDesc="We upgraded up the Art of Learning Institute's yoga business with a polished UI design, using React and CSS for the frontend. The Builders created the UI in Figma and conducted design research to make sure it's user-friendly. The outcome? A smooth interface that boosts the brand and keeps users engaged."/>
      </Tilt>
      <Tilt options={defaultOptions}>
      <Card logos={projectSkills.cashflow.map(skill => skillLogos[skill])} src={cashflow} projects="https://cashflow-dd61aa.webflow.io/" ProjectName="Cashflow" Projectstack="React + Tailwind + Express + MongoDB + Figma + Webflow - Fullstack" ProjectDesc=" Developed Cashflow, a payment application enabling users to securely log in, authenticate, and transfer funds seamlessly. Leveraging React for the frontend and Express with MongoDB for the backend, we ensured robust functionality. Additionally, integrated a Text-To-Speech module to enhance user experience."/>
      </Tilt>
      <Link to="/projects" className='font-Inter font-semibold text-base underline'>View all projects</Link>    
    </div>
  )
}

export default OurBuilds;
