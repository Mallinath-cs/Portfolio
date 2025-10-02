import React, { useEffect, useState } from 'react'
import './Projects.css'
import skills from '../Skills-data.js'
import github_dark_icon from '../../assets/github_dark_icon.png'
import github_light_icon from '../../assets/github_light_icon.png'
import DinoLoadingAnimation from '../DinoLoadingAnimation.jsx'
import { motion } from "framer-motion"

const Projects = ({ sectionRef }) => {
    
    const selectedTech = skills.filter(item => item.isUsed1);
    const selectedTech2 = skills.filter(item => item.isUsed2);
    const selectedTech3 = skills.filter(item => item.isUsed3);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains("dark-mode"));
        })
        observer.observe( document.body ,{attributes: true, attributeFilter: ["class"]});

        return () => observer.disconnect();
    }, []);

    const container = {
        hidden: { opacity: 1 },
        show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
  return (
    <motion.section ref={sectionRef} id="Projects" className='projects'
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.2, once: true}}
    >
      <motion.h3 className='project-heading' variants={item}>Projects</motion.h3>
      <div className="projects-container">
        <motion.div className="project-1" 
        variants={item}
        whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
        >
            <div className="project-box">
                <motion.div className="img-box" variants={item}>
                <img src="palceholder16" alt="" className='netflix-dark-img' />
                <a href="placeholder27" target='_blank' rel="noopener noreferrer">
                <img src={github_dark_icon} className='github-dark-img' alt="" />
                </a>
                </motion.div>
                <motion.h4 className='project-title'>placeholder19</motion.h4>
                <div className="project-info">
                    <ul>
                        <motion.li variants={item}>placeholder22</motion.li>
                        <motion.li variants={item}>placeholder22</motion.li>
                        <motion.li variants={item}>placeholder22</motion.li>
                    </ul>
                </div>
                    <motion.div className="project-techStack" variants={item}>
                        {selectedTech.map((skill,index) => ( 
                            <motion.img variants={item} key={index}src={skill.image} alt={skill.name} className={skill.rotate ? "rotate" : ""}/>
                        ))}
                    </motion.div>
            </div>
        </motion.div>
        <motion.div className="project-2" 
        variants={item}
        whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
        >
            <div className="project-box">
                <motion.div className="img-box" variants={item}>
                    <img src="placeholder17" alt="" className='portfolio-light-img'/>
                    <a href="placeholder28" target='_blank' rel="noopener noreferrer">
                    <img src={github_light_icon} alt="" className='github-light-img'/>
                    </a>
                </motion.div>
                <motion.h4 className='project-title'>placeholder20</motion.h4>
                <div className="project-info">
                    <ul>
                        <motion.li>placeholder23</motion.li>
                        <motion.li>placeholder23</motion.li>
                        <motion.li>placeholder23</motion.li>
                    </ul>
                </div>
                    <div className="project-techStack">
                        {selectedTech2.map((skill,index) => ( 
                            <motion.img variants={item} key={index} src={skill.image} alt={skill.name} className={skill.rotate ? "rotate" : ""}/>
                        ))}
                    </div>
            </div>
        </motion.div>
        {/* placeholder25 from here*/}
        <motion.div className="project-2" 
        variants={item}
        whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
        >
            <div className="project-box">
                <motion.div className="img-box" variants={item}>
                    <img src="placeholder18" alt="" className='portfolio-light-img'/>
                    <a href="placeholder29" target='_blank' rel="noopener noreferrer">
                    <img src={github_light_icon} alt="" className='github-light-img'/>
                    </a>
                </motion.div>
                <motion.h4 className='project-title'>placeholder21</motion.h4>
                <div className="project-info">
                    <ul>
                        <motion.li>placeholder24</motion.li>
                        <motion.li>placeholder24</motion.li>
                        <motion.li>placeholder24</motion.li>
                    </ul>
                </div>
                    <div className="project-techStack">
                        {selectedTech3.map((skill,index) => ( 
                            <motion.img variants={item} key={index} src={skill.image} alt={skill.name} className={skill.rotate ? "rotate" : ""}/>
                        ))}
                    </div>
            </div>
        </motion.div>
        {/* Till here */}
        
        {/*placeholder26
        <motion.div className="project-upcoming" 
        variants={item}
        whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
        >
            <div className="placeholder-line" variants={item}>
                <DinoLoadingAnimation isDark = {isDark}/>
                <motion.h3 className='placeholder-text' variants={item}>Exciting new projects are on the way…</motion.h3>
            </div>
        </motion.div>
        */}
      </div>    
    </motion.section>
  )
}

export default Projects
