import React, { useEffect } from 'react'
import './Contact.css'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
import { useState } from 'react';

const Contact = ( {sectionRef, easterEggMode, setEasterEggMode} ) => {
    const [result, setResult] = useState("");
    const [showHint, setShowHint] = useState(false);

    const container = {
        hidden: { opacity: 1 },
        show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    
    
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
      const formData = new FormData(event.target);

      formData.append("access_key", "placeholder30");
      formData.append("from_name", "Portfolio Contact Form");
      formData.append("subject", "New Contact Message");
      formData.append("botcheck", "");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        const data = await response.json();
        console.log(data);

        if (data.success) {
          setResult("Form Submitted Successfully");
          toast.success("Message Sent Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
          toast.error(data.message || "Something went wrong!");
        }
      } catch (error) {
        toast.error("Network error. Please try again later.");
      }
    };
    
  return (
    
    <motion.section ref={sectionRef} id="Contact" className='contact'
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.3, once: true}}
    >
        <motion.h3 variants={item} className='contact-heading'>Contact</motion.h3>
      <form onSubmit={onSubmit}>
        <div className="input-box">
            <motion.label variants={item}>Name</motion.label>
            <motion.input variants={item} type="text" className='field' placeholder='Enter your name' name="name" required/>
        </div>
        <div className="input-box">
            <motion.label variants={item}>Email Address</motion.label>
            <motion.input variants={item} type="email" className='field' placeholder='Enter your email'name="email" required/>
        </div>
        <div className="input-box">
            <motion.label variants={item}>Message</motion.label>
            <motion.textarea variants={item} name="message" className='field mess' placeholder='Enter your message' required></motion.textarea>
        </div>
        <motion.button className='submit-button' variants={item} type='submit'>Submit</motion.button>
      </form>

      <div className="easter" onClick={() => setEasterEggMode(prev => !prev)}>
        {easterEggMode ? "Exit": "?"}
      </div>
      {easterEggMode && (
      <div className="text-box"
      >     
        <span>Press esc to exit</span>
        <p>Find the hidden item!</p>
        <span className='hint-text' onClick={() => setShowHint(true)}>{showHint ? "About Section": "Hint?"}</span>
      
      </div>
      
    )}
    </motion.section>
    
  )
}

export default Contact
