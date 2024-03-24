import React from 'react';
import aboutus from '../assets/aboutus.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

//swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Define memberInfo properly
const memberInfo = [
  {
    memberName: "Akshat Girdhar",
    memberIntro: "Once an electronics whiz, I traded circuits for code. Now a full-stack dev, I wield Javascript & Python, crafting beautiful experiences (ReactJS, TailwindCSS) and robust backends (ExpressJS, MongoDB, PostgreSQL, Flask). My fuel is my desire to build data-driven solutions that empower decision-makers and drive business success. My ultimate goal? To create innovative financial tools that propel businesses towards unparalleled success. Let's build something revolutionary together.",
    twitterLink: "https://twitter.com/AkshatGirdhar2",
    linkedinLink: "https://www.linkedin.com/in/akshat-girdhar-56a848206/",
    githubLink: "https://github.com/akshatg5"
  },
  {
    memberName: "Hardikk Kamboj",
    memberIntro: "Once an electronics whiz, I traded circuits for code. Now a full-stack dev, I wield Javascript & Python, crafting beautiful experiences (ReactJS, TailwindCSS) and robust backends (ExpressJS, MongoDB, PostgreSQL, Flask). My fuel is my desire to build data-driven solutions that empower decision-makers and drive business success. My ultimate goal? To create innovative financial tools that propel businesses towards unparalleled success. Let's build something revolutionary together.",
    twitterLink: "https://twitter.com/HdKamboj",
    linkedinLink: "https://www.linkedin.com/in/hardikk-kamboj/",
    githubLink: "https://github.com/khardikk"
  },
  {
    memberName: "Himanshu",
    memberIntro: "Once an electronics whiz, I traded circuits for code. Now a full-stack dev, I wield Javascript & Python, crafting beautiful experiences (ReactJS, TailwindCSS) and robust backends (ExpressJS, MongoDB, PostgreSQL, Flask). My fuel is my desire to build data-driven solutions that empower decision-makers and drive business success. My ultimate goal? To create innovative financial tools that propel businesses towards unparalleled success. Let's build something revolutionary together.",
    twitterLink: "https://twitter.com/AkshatGirdhar2",
    linkedinLink: "https://www.linkedin.com/in/akshat-girdhar-56a848206/",
    githubLink: "https://github.com/akshatg5"
  },
  
];

const About = () => {
  return (
    <>
    <div className='max-[480px]:p-4 max-[480px]:mb-10'> 
   <h1 className="text-left mb-10 font-Inter font-bold text-4xl">About Us</h1>
    <div className="swiper-container">
      <Swiper
          
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[ Navigation, Pagination]}
          className="mySwiper-about"
        >
        {memberInfo.map((member, index) => (
          <SwiperSlide className='px-12  max-[480px]:px-4'>
          <div  key={index}>
            <AboutComponent
              memberName={member.memberName}
              memberIntro={member.memberIntro}
              twitterLink={member.twitterLink}
              linkedinLink={member.linkedinLink}
              githubLink={member.githubLink}
            />
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </>
  );
};

const AboutComponent = ({ memberName, memberIntro, twitterLink, linkedinLink, githubLink }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" id='about-section' className="flex flex-row justify-between mt-8 mb-20  max-[480px]:flex-col-reverse max-[480px]:items-center max-[480px]:mb-10">
      <div className="flex flex-col w-[51.375rem] max-[480px]:w-full">
        <h4 className="text-left mb-10 font-Inter font-bold text-4xl max-[480px]:text-center">{memberName}</h4>
        <p className="text-left w-[45rem] font-DMSans text-2xl leading-relaxed mb-8  max-[480px]:text-base  max-[480px]:w-[315px] max-[480px]:text-center max-[480px]:mt-5">{memberIntro}</p>
        <div className='flex gap-3 max-[480px]:justify-center'>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer" className='bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center'>
            <img className='w-[24px] h-[24px]' src={twitter} alt="Twitter" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className='bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center'>
            <img className='w-[24px] h-[24px]' src={linkedin} alt="LinkedIn" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className='bg-white px-3 py-3 rounded-lg ring-1 ring-neutral-500 flex items-center justify-center'>
            <img className='w-[24px] h-[24px]' src={github} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="flex ml-10 max-[480px]:ml-2">
        <img src={aboutus} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
