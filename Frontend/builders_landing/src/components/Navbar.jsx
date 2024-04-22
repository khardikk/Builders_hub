import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Renamed alias for react-scroll Link
import { Link as RouterLink ,useLocation } from 'react-router-dom'; // Renamed alias for react-router-dom Link
import { Link } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Check if current path is home page
  const isProjectsPage = location.pathname === '/projects'; // Check if current path is projects page
  return (
    
    <div className='w-full pt-4 flex flex-col items-center absolute z-[5] mb-5'>

      <div className='w-fit mx-auto flex pt-4 pb-4 absolute z-[1] border- ring-1  ring-gray-400 rounded-3xl border-white hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#fff,0_0_4px_#fff,0_0_5px_#fff]'>
      <div className='text-base font-semibold items-center flex-1 font-Inter'>
      {isHomePage && (
          <RouterLink
            to='/projects'
            className='mx-6 ml-4 mr-0 lg:mx-6 lg:ml-4 lg:mr-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer'
          >
            Projects
          </RouterLink>
        )}
        {isProjectsPage && (
          <RouterLink
            to='/'
            className='mx-6 ml-4 mr-0 lg:mx-6 lg:ml-6 lg:mr-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer '
          >
            Home
          </RouterLink>
        )}
        {isHomePage && (
        <ScrollLink
          to='our-builds-section'
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset to match the height of your fixed navbar
          duration={800}
          className='mx-6 ml-4 mr-0 lg:mx-6 lg:ml-6 lg:mr-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer'
        >
          Work
        </ScrollLink>
         )}
         {isHomePage && (
        <ScrollLink
          to='about-section'
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset to match the height of your fixed navbar
          duration={800}
          className='mx-6 ml-4 mr-0 lg:mx-6 lg:ml-6 lg:mr-6 hover:cursor-pointer'
        >
          About
        </ScrollLink>
        )}
        <ScrollLink
          to='contact-section'
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset to match the height of your fixed navbar
          duration={800}
          className='mx-6 ml-4 mr-4 lg:mx-6 lg:ml-6 lg:mr-6 bg-gradient-to-r from-amber-300 via-cyan-400 to-indigo-400 inline-block text-transparent bg-clip-text hover:cursor-pointer'
        >
          Contact
        </ScrollLink>
        {window.innerWidth > 768 && ( // Adjust the breakpoint as needed
            <Link
              to='/'
              className='mt-6 mx-6 ml-4 mr-0 lg:mx-6 lg:ml-6 lg:mr-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black hover:cursor-pointer'
            >
              Join Us
            </Link>
              )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
