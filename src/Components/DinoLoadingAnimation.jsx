import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react';
import DinoLoading from '../assets/Dino Loading.json'
import { useInView } from 'react-intersection-observer';

const DinoLoadingAnimation = ({ isDark }) => {

  const {ref, inView} = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const lottieRef = useRef();

  useEffect(() => {
    if(!lottieRef.current) return;
    if(inView) {
      lottieRef.current.play();
    }
    else{
      lottieRef.current.pause();
    }
  },[inView]);
  return (
    <div ref={ref}>
    <Lottie 
      lottieRef={lottieRef}
      animationData={DinoLoading}
      loop
      autoplay={false}
      style={{  width: "200px",height: "200px",
            filter: isDark ? "invert(1) brightness(2)" : "none"}}
    />
    </div>
  )
}

export default DinoLoadingAnimation
