import React from 'react';
import stack from '../assets/stack.png';

const Card = (props) => {
  const { src,projects} = props;
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className='bg-neutral-900 rounded-3xl ring-1 ring-neutral-500 w-1200 h-620 my-10'>
      <div className='py-16 px-16 max-[480px]:py-8 max-[480px]:px-8'>
      <div className='grid grid-cols-3 h-full max-[480px]:flex max-[480px]:flex-col'>
        {/* Text div */}
        <div className='pr-4  flex flex-col'>
        <div className='h-full items-start col-span-1 flex flex-col justify-around max-sm:mb-6'>
          <h1 className='mb-6 font-Inter font-bold text-4xl text-left max-sm:w-[16rem] max-sm:text-left'>Cashflow</h1>
          <span className='py-6 font-Inter font-normal text-base text-left max-sm:text-left max-sm:w-[15rem]'>2024-Fullstack</span>
          <p className='font-Inter font-normal text-lg text-left max-sm:w-[19rem] max-sm:text-left'>
            Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.
          </p>
          <img className='w-[40px] h-[24px] mb-20 mt-14 max-sm:mb-8' src={stack} alt='stack' />
          <a href={projects} target='blank'>
          <button className='ring-2 ring-neutral-300 rounded-lg py-3 px-6 font-Inter font-semibold text-base'>
           View Project
          </button>
          </a>
        </div>
        </div>

        {/* Image div */}
        <div className='col-span-2'>
          <img src={src} alt='cashflow' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
