'use client';

import { motion, useScroll, useTransform } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-mint-400 via-mint-500 to-sky-400 z-[9999] origin-left"
    />
  );
}
