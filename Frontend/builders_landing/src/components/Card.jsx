import React from "react";
import tailwindlogo from "../assets/Tailwind.png";
import rctlogo from "../assets/React-logo.png";
import figmalogo from "../assets/Figma-logo.png";
import nodejslogo from "../assets/nodejs-logo.png";
import expresslogo from "../assets/express-logo.png";
import mongodblogo from "../assets/mongodb-logo.png";
import webflowlogo from "../assets/webflow-logo.png";
import sanitylogo from "../assets/sanity-logo.png";

const Card = (props) => {
  const { src, projects, ProjectName, Projectstack, ProjectDesc, logos } =
    props;
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="bg-neutral-900 rounded-3xl ring-1 ring-neutral-500 w-1200 h-620 my-10"
    >
      <div className="py-16 px-16 max-[480px]:py-8 max-[480px]:px-8">
        <div className="grid grid-cols-3 h-full max-[480px]:flex max-[480px]:flex-col md:max-xl:flex md:max-xl:flex-col">
          {/* Text div */}
          <div className="pr-4  flex flex-col">
            <div className="h-full items-start col-span-1 flex flex-col justify-around max-sm:mb-6">
              <h1 className="mb-6 font-Inter font-bold text-4xl text-left max-sm:w-[18rem] max-sm:text-left">
                {ProjectName}
              </h1>
              <span className="py-6 font-Inter font-normal text-base text-left max-sm:text-left max-sm:w-full">
                {Projectstack}
              </span>
              <p className="font-Inter font-normal text-lg text-left max-sm:w-full max-sm:text-left">
                {ProjectDesc}
              </p>
              <div className="flex gap-3">
                {/* <img className='w-[40px] h-[32px] mb-20 mt-14 max-sm:mb-8' src={tailwindlogo} alt='tailwindlogo-logo' />
          <img className='w-[40px] h-[32px] mb-20 mt-14 max-sm:mb-8' src={rctlogo} alt='React-logo' />
          <img className='w-[40px] h-[32px] mb-20 mt-14 max-sm:mb-8' src={figmalogo} alt='Figma-logo' /> */}
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    className="w-[40px] h-[40px] mb-20 mt-14 max-sm:mb-8"
                    src={logo}
                    alt={"Logo not loading for " + logo}
                  />
                ))}
              </div>
              <a href={projects} target="blank">
                <button className="ring-2 ring-neutral-300 rounded-lg py-3 px-6 font-Inter font-semibold text-base md:max-xl:mb-8">
                  View Project
                </button>
              </a>
            </div>
          </div>

          {/* Image div */}
          <div className="col-span-2">
            <img
              src={src}
              alt="cashflow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
