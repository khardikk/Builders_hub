import React from 'react'
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-white font-bold text-2xl">
                                Hi we are currently Building this Page!
                                Stay Tuned!
                            </h1>
                            <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-zinc-600 text-white
                             hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"><Link to="/">Take me back</Link></button>
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