import './App.css'
import React,{useEffect} from "react";
import Navbar from './components/Navbar'
import Header from './components/Header.jsx'
import OurBuilds from './components/OurBuilds.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Preloader from './components/Preloader.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos'


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="ml-32 mr-32">
    <Preloader />
    <Navbar/>
    <Header />
    <OurBuilds />
    <About/>
    <Skills />
    <Contact />
    </div>
    </>
  )
}

export default App
