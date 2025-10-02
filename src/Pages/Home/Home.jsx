import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Lenis from 'lenis'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import SpotLightOverlay from '../../Components/SpotlightOverlay/SpotLightOverlay'
const Home = () => {
  const [easterEggMode, setEasterEggMode] = useState(false);
  

  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
    Footer: useRef(null),
  };
  
  useEffect(() => {
    const lenis = new Lenis({autoRaf: true,});
    lenis.on('scroll', (e) => {
     
    });
  }, [])
  return (
    <div className='home'>
      <Navbar sectionRefs={sectionRefs} />
      <Hero sectionRef={sectionRefs.Home} />
      <About sectionRef={sectionRefs.About} easterEggMode={easterEggMode}/>
      <Projects sectionRef={sectionRefs.Projects} />
      <Contact sectionRef={sectionRefs.Contact} easterEggMode={easterEggMode} setEasterEggMode={setEasterEggMode}/>
      <SpotLightOverlay easterEggMode={easterEggMode} setEasterEggMode={setEasterEggMode} />
      <Footer sectionRef={sectionRefs} heroRef={sectionRefs.Home} />
  
    </div>
  )
}

export default Home
