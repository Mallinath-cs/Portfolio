import React, { useEffect, useState } from 'react'
import './Hero.css'
import { motion } from 'motion/react'
import BearAnimation from '../BearAnimation'
  const Hero = ({ sectionRef }) => {
  const [start, setStart] = useState(false);
 
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 1200);
    return () => clearTimeout(timer);
  }, []);

    const handleClick = () => {
      window.location.href = "mailto:placeholder8?subject=placeholder9%20placeholder10&body=placeholder11%20placeholder12,";
    }

  return (
    <motion.section id="Home" className='hero'
    variants={containerVariants}
    initial= "hidden"
    animate = {start ? "visible": "hidden"}
    ref={sectionRef}
    >
        <div className="hero-left">
          <motion.h1 variants={childVariants}>placeholder2</motion.h1>
          <motion.h3 variants={childVariants}>placeholder3</motion.h3>
          <motion.h4 variants={childVariants}>placeholder4</motion.h4>
          <motion.h4 variants={childVariants}>placeholder5</motion.h4>
          <motion.div className="social-buttons" variants={childVariants}>
          <a href='placeholder6' target='_blank' rel="noopener noreferrer">
          <motion.button className="Btn" variants={childVariants}>
          <span className="svgContainer">
            <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </span>
          <span className="BG"></span>
          </motion.button> 
          </a>
          <a href='placeholder7' target='_blank' rel="noopener noreferrer">
          <motion.button className="Btn-2" variants={childVariants}>
            <div className="sign">
              <svg
                fill="white"
                className="svgIcon"
                xmlns="http://www.w3.org/2000/svg"
                height="1.6em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                ></path>
              </svg>
            </div>
            <div className="text">Linkedln</div>
            </motion.button>
          </a>
          <motion.div className="loader"
          whileHover={{scale: 1.1}}
          variants={childVariants}
          onClick={handleClick}
          ></motion.div>
          </motion.div>
          <div className="special-buttons">
          <a  placeholder13 download="placeholder14" className='resume'>
          <motion.button className="resume-button" type="button" variants={childVariants}>
            <span className="resume-button__text">RESUME</span>
            <span className="resume-button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" 
              data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,
              1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,
              1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,
              3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,
              6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,
              6.751A3.191,3.191,0,0,1,17.5,22.693Z">
              </path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,
              30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
          </motion.button>
          </a>
        </div>
        </div>
        <motion.div className="hero-right" variants={childVariants}>
           <BearAnimation />
        </motion.div>
    </motion.section>
  )
}

export default Hero
