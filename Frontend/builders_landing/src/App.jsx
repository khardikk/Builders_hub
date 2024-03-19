import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header.jsx'
import OurBuilds from './components/OurBuilds.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'


function App() {

  return (
    <>
    <div className="ml-32 mr-32">
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
