import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import bearAnimation from '../assets/bear.json';
import { useInView } from 'react-intersection-observer';

const BearAnimation = () => {
  const lottieRef = useRef(null);
  const [windowWidth, setWindowWidth] =   useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const size = windowWidth < 950  ? "200px": "275px";

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (!lottieRef.current) return;
    if (inView) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [inView]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <div ref={ref}>
      <Lottie
        lottieRef={lottieRef} 
        animationData={bearAnimation}
        loop
        autoplay={false}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default BearAnimation;
