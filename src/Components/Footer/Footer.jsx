import React from 'react'
import './Footer.css'
const Footer = ({ sectionRef, heroRef, }) => {

    const handleClick = () => {
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
     };

  return (
    <div className='footer' >
        <div className="back-to-top" >
            <button className="button" onClick={handleClick}>
            <svg className="svgIcon" viewBox="0 0 384 512">
                <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                ></path>
            </svg>
            </button>
        </div>
      <div className="main-footer">
        <div className="socials">
            <ul>
                <li><a className='link' href="placeholder32" target='_blank' rel="noopener noreferrer">Discord</a></li>
                <li><a className='link' href="placeholder33" target='_blank' rel="noopener noreferrer">X</a></li>
                <li><a className='link' href="placeholder34" target='_blank' rel="noopener noreferrer">Instagram</a></li>
                <li><a className='link' href="placeholder35" target='_blank' rel="noopener noreferrer">Facebook</a></li>
            </ul>
        </div>
        <h1 className='credit-title'>Credits</h1>
        <div className="credits">
            <div className="icons-copyright">
                <h4>Icons by</h4>
                <ul>
                    <li><a className='link' href="https://uiverse.io/profile/vinodjangid07" target='_blank' rel="noopener noreferrer">Vinod Jangid</a></li>
                    <li><a className='link' href="https://uiverse.io/profile/Gaurang7717" target='_blank' rel="noopener noreferrer">gaurang dumaniya</a></li>
                    <li><a className='link' href="https://codepen.io/designcouch/pens/public" target='_blank' rel="noopener noreferrer">Jesse Couch</a></li>
                    <li><a className='link' href="https://uiverse.io/profile/Shoh2008" target='_blank' rel="noopener noreferrer">c0der</a></li>
                    <li><a className='link' href="https://uiverse.io/profile/andrew-demchenk0" target='_blank' rel="noopener noreferrer">andrew-demchenk0</a></li>
                    <li><a className='link' href="https://uiverse.io/profile/NorthFishHasNa" target='_blank' rel="noopener noreferrer">NorthFishHasNa</a></li>
                    <li><a className='link' href="https://icons8.com/icons" target='_blank' rel="noopener noreferrer">icons8</a></li>
                </ul>
            </div>
            <div className="animations-copyright">
                <h4>Animations by</h4>
                <ul>
                    <li><a className='link' href="https://lottiefiles.com/j2jp80at86709inn" target='_blank' rel="noopener noreferrer">pp mcghee</a></li>
                    <li><a className='link' href="https://lottiefiles.com/aanhamdani" target='_blank' rel="noopener noreferrer">aan Hamdani</a></li>
                </ul>
            </div>
            <div className="background-copyright">
                <h4>Background by</h4>
                <ul>
                    <li><a className='link' href="https://uigradients.com/#SteelGray" target='_blank' rel="noopener noreferrer">uiGradients</a></li>
                </ul>
            </div>
        </div>
        <div className="my-copyright">
            &copy; {new Date().getFullYear()} placeholder36. All Rights Reserved :)
        </div>
      </div>
    </div>
  )
}

export default Footer
