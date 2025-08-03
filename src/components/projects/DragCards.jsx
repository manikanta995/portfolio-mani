import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative w-full h-[800px] md:h-[900px] overflow-hidden">
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/projects/vio-cam.png"
        alt="Example image"
        title="Real Time Violence Detection"
        github="https://github.com/manikanta995/violence-detection"
        live="/"
        rotate="6deg"
        top="25%"
        left="20%"
        className="w-44 sm:w-56 md:w-88"
      />
      <Card
        containerRef={containerRef}
        src="/projects/traditional.png"
        alt="Example image"
        title="Traditional Language"
        github="https://github.com/manikanta995/Traditional_language_website"
        live="/"
        rotate="12deg"
        top="35%"
        left="50%"
        className="w-44 sm:w-56 md:w-88"
      />
      <Card
        containerRef={containerRef}
        src="/projects/emotion.png" 
        alt="Example image"
        title="Emotion based music recommendation system"
        github="https://github.com/manikanta995/Emotionbased_musicReco"
        live="/"
        rotate="-6deg"
        top="15%"
        left="35%"
        className="w-36 sm:w-48 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/projects/pfm.png"
        alt="Example image"
        title="Personal Finance Management"
        github="https://github.com/manikanta995/Personal_finance_Management"
        live="/"
        rotate="8deg"
        top="45%"
        left="30%"
        className="w-32 sm:w-44 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/projects/portfolio_full.png"
        alt="Example image"
        title="Portfolio Web"
        github=""
        live="/"
        rotate="18deg"
        top="15%"
        left="50%"
        className="w-44 sm:w-56 md:w-88"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className, title, github, live }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZ = -Infinity;
    els.forEach((el) => {
      const z = parseInt(window.getComputedStyle(el).zIndex);
      if (!isNaN(z) && z > maxZ) maxZ = z;
    });
    setZIndex(maxZ + 1);
  };

  return (
    <motion.div
        onMouseDown={updateZIndex}
        onTouchStart={updateZIndex}
        initial={{ 
          top, 
          left, 
          rotate,
          x: 0,
          y: 0
        }}
        style={{ 
          zIndex,
          touchAction: 'none'
        }}
        className={twMerge(
            "drag-elements absolute bg-white text-black p-3 rounded-lg shadow-lg cursor-grab active:cursor-grabbing",
            className
        )}
        drag
        dragConstraints={containerRef}
        dragElastic={0.65}
    >
        <img src={src} alt={alt} className="rounded-md mb-2 pointer-events-none w-full" />
        <h3 className="font-bold text-xs sm:text-sm mb-3">{title}</h3>
        <div className="flex gap-2">
            <a 
                href="https://github.com/manikanta995" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-2 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
            >
                GitHub
            </a>
            {live && (
                <a 
                    href=""
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-violet-600 text-white px-2 py-1 rounded text-xs hover:bg-violet-700 transition-colors"
                >
                    Live
                </a>
            )}
        </div>
    </motion.div>
  );
};