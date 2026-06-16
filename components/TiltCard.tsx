'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // max degree of tilt
  hoverScale?: number; // scale on hover
}

export default function TiltCard({ children, className = '', intensity = 8, hoverScale = 1.02 }: TiltCardProps) {
  // Use motion values normalized from 0 to 1
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to avoid jitter
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  
  // Transform normalized coords into rotation degrees
  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), springConfig);
  
  const scale = useSpring(useMotionValue(1), springConfig);

  const handleMouseMove = (event: React.PointerEvent<HTMLDivElement>) => {
    // Determine bounds and set motion coordinates relative to card
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
    scale.set(hoverScale);
  };

  const handleMouseEnter = () => {
    scale.set(hoverScale);
  };

  const handleMouseLeave = () => {
    // Snaps back smoothly to rest state
    x.set(0.5);
    y.set(0.5);
    scale.set(1);
  };

  return (
    <motion.div
      onPointerMove={handleMouseMove}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`will-change-transform ${className}`}
    >
      <div 
        style={{ 
          transform: 'translateZ(10px)',
          transformStyle: 'preserve-3d' 
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
