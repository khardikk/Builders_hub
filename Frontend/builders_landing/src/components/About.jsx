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
      <div className="about-container">
        <h1 className="text-left mb-10 font-Inter font-bold text-4xl">About Us</h1>
        <div className="swiper-container">
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper-about"
          >
            {memberInfo.map((member, index) => (
              <SwiperSlide key={index} className="about-member">
                <AboutComponent member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const AboutComponent = ({ member }) => {
  const { memberName, memberIntro, twitterLink, linkedinLink, githubLink } = member;

  return (
    <div className="flex flex-row max-sm:flex-col justify-between max-sm:items-center mt-8 mb-20">
      <div className="about-member-info flex flex-col w-full md:w-1/2 px-4 md:px-0">
        <h4 className="text-center mb-10 font-Inter font-bold text-4xl max-sm:text-2xl">
          {memberName}
        </h4>
        <p className="text-left font-DMSans text-xl max-sm:text-xl leading-relaxed mb-8">
          {memberIntro}
        </p>
        <div className="flex gap-3">
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-link flex items-center justify-center hover:bg-neutral-800 active:bg-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500"
          >
            <img className="w-[24px] h-[24px]" src={twitter} alt="Twitter" />
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-link flex items-center justify-center hover:bg-neutral-800 active:bg-neutral-700 bg-neutral-950 px-3 py-3 rounded-lg ring-1 ring-neutral-500"
          >
            <img className="w-[24px] h-[24px]" src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-link flex items-center justify-center hover:bg-neutral-800 active:bg-neutral-700 bg-white px-3 py-3 rounded-lg ring-1 ring-neutral-500"
          >
            <img className="w-[24px] h-[24px]" src={github} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="about-member-image flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
        <img src={aboutus} alt="About Us" />
      </div>
    </div>
  );
};
export default About;

