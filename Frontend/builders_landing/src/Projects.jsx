import React from 'react';
import Navbar from './components/Navbar'
import sampleImg from './assets/sample-logo.png'
import {Tilt} from 'react-tilt'

const Projects = () => {


    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
        <>
        <Navbar />
      <div className="lg:px-24 lg:py-24 md:max-xl:py-20 md:max-xl:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:max-xl:gap-28 gap-16 z-[1]">
        <section className="flex flex-col items-center">
            {/* Main div to enclose the 2 divs */}
            <div className="relative mb-16 w-full items-start gap-6 lg:flex xl:gap-8 mx-auto">
                    {/* Div for sticky navbar for filters */}
                        <div className="w-full lg:sticky lg:left-0 lg:top-20 lg:w-48 lg:flex-shrink-0">
                    <div className="relative w-full rounded-md group border-gray-800 bg-gray-800 text-gray-300 placeholder-gray-300 shadow-lg mb-5 sm:max-w-xs">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 opacity-50 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
                        <div className="h-5 w-5 text-white/30">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        </div>
                        <input className="block w-full rounded-md border border-transparent py-2 pl-10 pr-3 text-sm placeholder-opacity-60 outline-none transition hover:placeholder-opacity-100 focus:border-blue-500 focus:placeholder-opacity-30 focus:ring-4 focus:ring-blue-500/30 bg-gray-300 bg-opacity-5 text-gray-300 placeholder-gray-300 ring-offset-gray-900 hover:bg-opacity-10 focus:bg-gray-800 focus:bg-opacity-100" placeholder="Search…" />
                    </div>
                    <nav aria-label="Sidebar" className="space-y-2 z-10 hidden lg:block">
                        <a aria-current="page" className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 cursor-default bg-yellow-400 bg-opacity-30 text-white ring-yellow-400 ring-opacity-80">
                        <span className="truncate">All</span>
                        </a>
                        <a aria-current="false" className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 ease-out-back-smooth cursor-pointer text-white/80 ring-white/20 transition duration-200 hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-20 hover:text-white/90 hover:ring-yellow-400 hover:ring-opacity-50 active:scale-95">
                        <span className="truncate">Frontend</span>
                        </a>
                        <a aria-current="false" className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 ease-out-back-smooth cursor-pointer text-white/80 ring-white/20 transition duration-200 hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-20 hover:text-white/90 hover:ring-yellow-400 hover:ring-opacity-50 active:scale-95">
                        <span className="truncate">Backend</span>
                        </a>
                        <a aria-current="false" className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 ease-out-back-smooth cursor-pointer text-white/80 ring-white/20 transition duration-200 hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-20 hover:text-white/90 hover:ring-yellow-400 hover:ring-opacity-50 active:scale-95">
                        <span className="truncate">Fullstack</span>
                        </a>
                    </nav>
                    </div>
                    
                    {/* Div for grid */}

<div className="grid w-full grid-cols-2 grid-rows-[9rem] gap-2 md:grid-cols-3 xl:grid-cols-3 xl:gap-3 2xl:grid-cols-4">
  {/* a sqaure div to fit in the grid of red color */}
  <Tilt options={defaultOptions}>
    <a href="/projects">
    <div class="relative flex h-36 items-center rounded-lg text-center text-white outline-none hover:z-10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4">
        <div class="absolute h-full w-full bg-gray-900 opacity-100 delay-200  lg:group-hover:opacity-0"></div>
        <div class="absolute -top-1/2 flex h-[200%] w-full origin-center scale-y-[50%] flex-col items-center rounded-lg text-center ring-1 ring-white ring-opacity-0 group-hover:ring-opacity-100">
        <div class="absolute top-0 hidden h-64 w-full lg:block lg:opacity-0 lg:group-hover:opacity-100">
        </div>
        </div>
        <div class="hidden h-32 w-32 opacity-0 lg:block lg:group-hover:opacity-95">
        </div>
        <div class="absolute bottom-6 flex min-h-[96px] w-full flex-col items-center justify-start text-center lg:group-hover:translate-y-[100%]">
        <p class="absolute bottom-0 px-3 text-center text-sm font-medium capitalize leading-tight text-white text-opacity-60 opacity-100 md:text-base md:leading-tight lg:opacity-0">Design Blunders</p>
        </div>
    </div>
    </a>
    </Tilt>
    {Array.from({ length: 20 }).map((_, index) => (
        <Tilt options={defaultOptions} key={index}>
        <a
            href="/projects"
            className="lg:hover:preserve-3d lg:hover:translate-z-[1000px] lg:translate-z-0 lg:transition-transform lg:duration-100 lg:hover:z-10"
        >
            <div className="lg:hover:preserve-3d group relative flex h-36 bg-gray-900 flex-col items-center rounded-lg text-center text-white outline-none ring-offset-gray-900 hover:z-10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4">
                <img src={sampleImg} alt="Your Image Alt Text" className="z-40 flex pt-2" />
                <div className="lg:group-hover:preserve-3d flat translate-z-2 absolute z-30 h-full w-full text-white opacity-100 delay-200 lg:group-hover:opacity-0 lg:group-hover:delay-[0s] flex items-center justify-center flex-wrap content-end">
                    <h2 className="text-lg font-bold pb-4">Your Title</h2>
                </div>
                <div className="ease-out-back-smooth absolute -top-1/2 flex h-[200%] w-full origin-center scale-y-[50%] flex-col bg-gray-900 items-center rounded-lg text-center ring-1 ring-white ring-opacity-0 transition-transform duration-300 group-hover:ring-opacity-100 lg:group-hover:scale-y-100 lg:hover:translate-z-[9999px]">
                    <p className="absolute top-0 hidden h-64 w-full lg:block lg:opacity-0 lg:group-hover:opacity-100">Your Description</p>
                </div>
            </div>
        </a>
    </Tilt>
            ))}

</div>
</div>
</section>
</div>
</>
  )
}

export default Projects