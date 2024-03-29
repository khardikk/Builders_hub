import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Renamed alias for react-scroll Link
import { Link as RouterLink } from 'react-router-dom'; // Renamed alias for react-router-dom Link

const Navbar = () => {
  return (
    <div className='w-full flex pt-6 absolute inset-0 z-[1]'>
      <div className='text-base font-semibold items-center flex-1 font-Inter'>
        {/* <RouterLink
          to='/'
          className='mx-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer'
        >
          Home
        </RouterLink> */}
        <ScrollLink
          to='our-builds-section'
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset to match the height of your fixed navbar
          duration={800}
          className='mx-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer'
        >
          Work
        </ScrollLink>
        <ScrollLink
          to='about-section'
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset to match the height of your fixed navbar
          duration={800}
          className='mx-6 hover:cursor-pointer'
        >
          About
        </ScrollLink>
        <ScrollLink
          to='contact-section'
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset to match the height of your fixed navbar
          duration={800}
          className='mx-6 bg-gradient-to-r from-amber-300 via-cyan-400 to-indigo-400 inline-block text-transparent bg-clip-text hover:cursor-pointer'
        >
          Contact
        </ScrollLink>
        {/* <RouterLink
          to='/projects'
          className='mx-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer'
        >
          Projects
        </RouterLink> */}
      </div>
    </div>
  );
};

export default Navbar;
