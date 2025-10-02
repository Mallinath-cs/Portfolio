import React, { use, useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { motion, useScroll } from 'framer-motion';

const Navbar = ({ sectionRefs }) => {
  const sections = [
    {name: 'Home', id: 'Home'},
    {name: 'About', id: 'About'},
    {name: 'Projects', id: 'Projects'},
    {name: 'Contact', id: 'Contact'}
  ]
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null); 
  const [navHeight, setNavHeight] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMyScroll = () => {
      if(window.scrollY > 50) {
        navRef.current.classList.add("scrolled");
      }
      else{
        navRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleMyScroll);
    return () => window.removeEventListener("scroll", handleMyScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  const handleScroll = (id) => {
    const element = sectionRefs[id].current;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setOpen(!open);
  }
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (open) {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideButton =
        buttonRef.current && !buttonRef.current.contains(event.target);

      if (clickedOutsideMenu && clickedOutsideButton) {
        setOpen(false);
      }
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [open]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <>
    <motion.div className="scroll-bar" style={{ scaleX: scrollYProgress }}/>
    <div className='navbar ' ref={navRef}>
      <div className="navbar-left">
        <p>placeholder1</p>
      </div>
      <div className="navbar-right">
        <nav>
        <ul ref={menuRef} className={`nav-list ${open ? 'show' : ''}`}>
          {sections.map((section) => (
            <motion.li
              key={section.id}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                handleScroll(section.id);
                setOpen(false);
              }}
            >
              {section.name}
            </motion.li>
          ))}
        </ul>
        </nav>
        <div className="dark-mode-toggle-container">
          <input type="checkbox" id="darkmode-toggle" checked={darkMode} onChange={handleToggle} />
          <label htmlFor="darkmode-toggle"></label>
        </div>
        <div ref={buttonRef} id="nav-icon3" className={open ? "open" : ""}
        onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;