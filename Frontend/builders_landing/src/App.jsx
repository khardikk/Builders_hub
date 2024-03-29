import './App.css'
import React, { useEffect } from "react";
import Navbar from './components/Navbar'
import Header from './components/Header.jsx'
import OurBuilds from './components/OurBuilds.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Preloader from './components/Preloader.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos'
import blurbg from './assets/blurbg.png'


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="ml-32 mr-32 max-[480px]:mr-0 max-[480px]:ml-0 md:max-lg:mr-0 md:max-lg:ml-0">
        {/* <Preloader /> */}
        <div className="relative">
          <img className="absolute inset-0 z-[1] w-full h-full object-cover" src={blurbg} alt="Background" />
          <Navbar style={{ zIndex: '2' }} />
          <Header />
        </div>
        <OurBuilds />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
