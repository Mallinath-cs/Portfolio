import React, { useState } from 'react'
import './About.css'
import { motion } from 'framer-motion'
import skills from '../Skills-data.js'
const word = "Tech Stack";
const About = ({ sectionRef, easterEggMode }) => {
  const letters = word.split("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const youtubeLinks = [
    "placeholder31", "placeholder31", "placeholder31"
  ];
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const handleClick = () => {
     window.open(youtubeLinks[currentIndex], "_blank");

     setCurrentIndex((prevIndex) => (prevIndex + 1) % youtubeLinks.length);
  }

  return (
    <section ref={sectionRef} id="About" className='about'>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.8, once: true }}
        >
          <motion.h3 className='about-heading' variants={item}>About me</motion.h3>
          <motion.p className='about-me' variants={item}>
            placeholder15{' '}
            {easterEggMode && (
              <a onClick={handleClick} className="hidden-link">
               dont click me
              </a>
            )}
            {' '}
            placeholder15
          </motion.p>

        </motion.div>
        <div className="word-box">
            {letters.map((letter, index) =>(
              <motion.span
              key={index}
              initial = {{y: "100%", opacity: 0}}
              whileInView={{y: "0%", opacity: 1}}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{once: true}}
              className='letter'
              >
                {letter === " "? "\u00A0": letter}
              </motion.span>
            ))}
        </div>
        <motion.div 
          className="skills-container"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 } // 
            }
          }}
          
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.8 , once: true}}
        >
          {skills.map((skill, i) => (
            <motion.div key={i} className="card-container" 
            variants={item}
            whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
            >
              <div className="img-container">
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className={`skill-img ${skill.rotate ? "rotate" : ""}`} 
                />
              </div>
              <div className="skill-text">
                <h3 className="skill-title">{skill.name}</h3>
                <p className='skill-desc'>{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </section>
  )
}

export default About
