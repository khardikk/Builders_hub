import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import sampleImg from "./assets/sample-logo.png";
import { Tilt } from "react-tilt";
import Contact from "./components/Contact.jsx";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Accessing environment variables
const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;
const db = import.meta.env.VITE_REACT_APP_DATABASE;

const client = createClient({
  projectId: projectId,
  dataset: db,
  apiVersion: "2022-01-30",
});
const builder = imageUrlBuilder(client);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch('*[_type == "post"]');
        setProjects(data);
      } catch (error) {
        console.error("Error fetching Projects Details", error);
      }
    };
    fetchProjects();
  }, []);

  console.log(projects);

  // Tilt options
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <>
      <Navbar />
      <div className="lg:px-24 lg:py-24 md:max-xl:py-20 md:max-xl:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:max-xl:gap-28 gap-16 z-[1]">
        <section className="flex flex-col items-center">
          {/* Main div to enclose the 2 divs */}
          <div className="relative mb-8 w-full items-start gap-6 lg:flex xl:gap-8 mx-auto">
            {/* Div for sticky navbar for filters */}
            <div className="w-full lg:sticky lg:left-0 lg:top-20 lg:w-48 lg:flex-shrink-0">
              {/* Search input */}
              <div className="relative w-full rounded-md group border-gray-800 bg-gray-800 text-gray-300 placeholder-gray-300 shadow-lg mb-5 sm:max-w-xs">
                {/* Search icon */}
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 opacity-50 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
                  <div className="h-5 w-5 text-white/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Search input field */}
                <input
                  className="block w-full rounded-md border border-transparent py-2 pl-10 pr-3 text-sm placeholder-opacity-60 outline-none transition hover:placeholder-opacity-100 focus:border-blue-500 focus:placeholder-opacity-30 focus:ring-4 focus:ring-blue-500/30 bg-gray-300 bg-opacity-5 text-gray-300 placeholder-gray-300 ring-offset-gray-900 hover:bg-opacity-10 focus:bg-gray-800 focus:bg-opacity-100"
                  placeholder="Search…"
                />
              </div>
              {/* Navigation links */}
              <nav
                aria-label="Sidebar"
                className="space-y-2 z-10 hidden lg:block"
              >
                <a
                  aria-current="page"
                  className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 cursor-default bg-yellow-400 bg-opacity-30 text-white ring-yellow-400 ring-opacity-80"
                >
                  <span className="truncate">All</span>
                </a>
                <a
                  aria-current="false"
                  className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 ease-out-back-smooth cursor-pointer text-white/80 ring-white/20 transition duration-200 hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-20 hover:text-white/90 hover:ring-yellow-400 hover:ring-opacity-50 active:scale-95"
                >
                  <span className="truncate">Frontend</span>
                </a>
                <a
                  aria-current="false"
                  className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 ease-out-back-smooth cursor-pointer text-white/80 ring-white/20 transition duration-200 hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-20 hover:text-white/90 hover:ring-yellow-400 hover:ring-opacity-50 active:scale-95"
                >
                  <span className="truncate">Backend</span>
                </a>
                <a
                  aria-current="false"
                  className="group flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ring-1 ease-out-back-smooth cursor-pointer text-white/80 ring-white/20 transition duration-200 hover:scale-105 hover:bg-yellow-400 hover:bg-opacity-20 hover:text-white/90 hover:ring-yellow-400 hover:ring-opacity-50 active:scale-95"
                >
                  <span className="truncate">Fullstack</span>
                </a>
              </nav>
            </div>

            {/* Div for grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <Tilt options={defaultOptions} key={index}>
                  <a
                    href={project.link}
                    className="lg:translate-z-0 lg:transition-transform lg:duration-100 lg:hover:z-10"
                  >
                    <div className="group relative flex h-60 bg-gray-900 flex-col items-center rounded-lg text-center text-white outline-none ring-offset-gray-900 hover:z-10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4">
                      {/* Project image */}
                      <img
                        src={builder.image(project.mainImage.asset._ref).url()}
                        alt={project.title}
                        className="z-0 flex pt-2"
                      />
                      {/* Project details */}
                      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-end lg:group-hover:opacity-0 lg:group-hover:delay-200 lg:opacity-100 lg:group-hover:delay-[0s] transition-opacity duration-200">
                        <h2 className="text-lg font-bold pb-4">
                          {project.title}
                        </h2>
                        <h4 className="text-lg font-bold pb-4">
                          {project.category}
                        </h4>
                      </div>
                      {/* Additional project details */}
                      <div className="absolute top-0 w-full h-full ring-1 ring-white ring-opacity-1 bg-gray-900 opacity-0 flex flex-col items-center justify-center lg:group-hover:opacity-100 lg:opacity-0 lg:transition-opacity lg:duration-200">
                        <p className="text-sm p-4">{project.bgcolor}</p>
                      </div>
                    </div>
                  </a>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </>
  );
};

export default Projects;
