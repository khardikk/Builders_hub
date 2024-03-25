import React from 'react';
import aboutus from '../assets/aboutus.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import Hardikk from '../assets/Hardikk.png';
import Akshat from '../assets/Akshat.png';
import Himanshu from '../assets/Himanshu.png';

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
    memberIntro: "Meet Akshat, the full-stack ninja who slays in JavaScript and Python. With ReactJS and ExpressJS as their trusty sidekicks, they whip up digital marvels faster than you can say TailwindCSS. Armed with MongoDB and PostgreSQL, Akshat's on a mission to make the web cooler, one line of code at a time! 🚀",
    twitterLink: "https://twitter.com/AkshatGirdhar2",
    linkedinLink: "https://www.linkedin.com/in/akshat-girdhar-56a848206/",
    githubLink: "https://github.com/akshatg5",
    memberImage: Akshat
  },
  {
    memberName: "Hardikk Kamboj",
    memberIntro: "Say hi to Hardikk! Tech wizard by day, community champ by night. With React and Python, they build digital dreams. From Webflow, GenAI to AR filters, they love to tinker. But what really lights their fire? Connecting with people! Get ready to be amazed because Hardikk's bringing the human touch to tech! 🚀",
    twitterLink: "https://twitter.com/HdKamboj",
    linkedinLink: "https://www.linkedin.com/in/hardikk-kamboj/",
    githubLink: "https://github.com/khardikk",
    memberImage: Hardikk
  },
  {
    memberName: "Himanshu Gupta",
    memberIntro: "Meet Himanshu!  Frontend master and people-person extraordinaire. With HTML, CSS, JS, and React, he's a digital dynamo. But what really sets him apart? His infectious humor and love for building cool stuff! Get ready to be inspired and entertained because with Himanshu, it's always a fun ride! 🚀",
    twitterLink: "https://twitter.com/Himanshuu3112",
    linkedinLink: "https://www.linkedin.com/in/himanshu-gupta-431a0722a/",
    githubLink: "https://github.com/Himanshu-gupta31",
    memberImage: Himanshu
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
              memberImage={member.memberImage}
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

const AboutComponent = ({ memberName, memberIntro, twitterLink, linkedinLink, githubLink, memberImage }) => {
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
        <img src={memberImage} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
