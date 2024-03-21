import React from 'react';
import projectimg from '../assets/projectimg.png';
import stack from '../assets/stack.png';

const Card = () => {
  return (
    <div className='bg-neutral-900 rounded-3xl ring-1 ring-neutral-500 w-1200 h-620 my-10'>
      <div className='py-16 px-16'>
      <div className='grid grid-cols-3 h-full'>
        {/* Text div */}
        <div className='pr-16  flex flex-col'>
        <div className='h-full items-start col-span-1 flex flex-col justify-around'>
          <h1 className='mb-6 font-Inter font-bold text-4xl text-left'>Cashflow</h1>
          <span className='py-6 font-Inter font-normal text-base text-left'>2024-Fullstack</span>
          <p className='font-Inter font-normal text-lg text-left'>
            It is a web application that helps you to track your expenses and income. It is a
            full-stack application that is built using React, Node.js, Express, and MongoDB.
          </p>
          <img className='w-[40px] h-[24px] mb-20 mt-14' src={stack} alt='stack' />
          <button className='ring-2 ring-neutral-300 rounded-lg py-3 px-6 font-Inter font-semibold text-base'>
            Read case study
          </button>
        </div>
        </div>

        {/* Image div */}
        <div className='col-span-2'>
          <img src={projectimg} alt='cashflow' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
