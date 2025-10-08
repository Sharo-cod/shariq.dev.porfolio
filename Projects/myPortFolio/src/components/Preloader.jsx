import React from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0. }}
    >
      {/* Animated logo or shape */}
      <motion.div
        className="w-24 h-24 mb-6"
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="5" fill="none" />
          <motion.path
            d="M50 10 Q60 50 50 90 Q40 50 50 10"
            stroke="white"
            strokeWidth="5"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Your name */}
      <motion.h1
        className="text-white text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5, ease: "easeInOut" }}
      >
        Shariq Alam
      </motion.h1>
    </motion.div>
  );
}
