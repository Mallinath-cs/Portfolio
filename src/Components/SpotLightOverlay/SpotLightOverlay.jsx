import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./SpotLightOverlay.css";

export default function SpotLightOverlay({ easterEggMode, setEasterEggMode }) {
 const [cursor, setCursor] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    if (!easterEggMode) return;
    const move = (e) => {
      if (e.type === "mousemove") {
        setCursor({ x: e.clientX, y: e.clientY });
      } else if (e.type === "touchmove") {
        const touch = e.touches[0];
        setCursor({ x: touch.clientX, y: touch.clientY });
      }
    };

     const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setEasterEggMode(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [easterEggMode, setEasterEggMode]);

  if (!easterEggMode) return null;

  return (
    <motion.div
      className="spotlight"
      style={{
        WebkitMaskImage: `radial-gradient(circle 150px at ${cursor.x}px ${cursor.y}px, rgba(0,0,0,0) 98%, rgba(0,0,0,1) 100%)`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    />
  );
}

