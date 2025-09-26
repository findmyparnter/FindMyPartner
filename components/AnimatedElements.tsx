"use client";

import { motion } from "framer-motion";

export default function AnimatedElements(): JSX.Element {
  return (
    <>
      {/* Rotating gradient circle - Top Right */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-70 blur-xl z-0"
        aria-hidden="true"
      />

      {/* Floating circle with rotation - Bottom Left */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-60 blur-lg z-0"
        aria-hidden="true"
      />

      {/* Pulsing circle - Middle Left */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-50 blur-lg z-0"
        aria-hidden="true"
      />

      {/* Main image floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* This creates the floating effect for the entire image container */}
      </motion.div>

      {/* Additional subtle particles */}
      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-1/4 -right-16 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-40 blur-md z-0"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          x: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/4 -left-8 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg z-0"
        aria-hidden="true"
      />
    </>
  );
}
