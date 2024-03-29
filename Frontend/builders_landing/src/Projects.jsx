import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
const Projects = () => {
  return (

    <div class="lg:px-24 lg:py-24 md:max-lg:py-20 md:max-lg:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:max-lg:gap-28 gap-16">
                        <Navbar />
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-white font-bold text-2xl">
                                Hi we are currently Building this Page!
                                Stay Tuned!
                            </h1>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
  )
}

export default Projects