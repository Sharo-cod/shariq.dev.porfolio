import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/shariqalam.JPG";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      {/* Profile Image with animated border */}
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 mb-8 rounded-full flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-cyan-500 via-white to-cyan-600 shadow-[0_0_25px_#06b6d4]"
        >
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full object-cover w-[98%] h-[98%]"
            />
          </div>
        </motion.div>
      </div>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        I'm{" "}
        <span className="bg-gradient-to-r from-white to-cyan-600 bg-clip-text text-transparent">
          Shariq Alam
        </span>
        , frontend <br className="hidden sm:block" /> developer based in Pakistan.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-gray-300 max-w-2xl mb-8 text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        I am a frontend developer from Pakistan with 1 year of experience in
        multiple languages.
      </motion.p>

      {/* Buttons with animated cyan borders */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        {/* Button 1 - Connect */}
        <motion.div
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          className="relative rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-white to-cyan-600"
        >
          <a
            href="#contact"
            className="block bg-black text-white px-6 py-3 rounded-full font-semibold 
            hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black transition"
          >
            Connect with me
          </a>
        </motion.div>

        {/* Button 2 - Resume */}
        <motion.div
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          className="relative rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-white to-cyan-600"
        >
          <a
            href="#resume"
            className="block bg-black text-white px-6 py-3 rounded-full font-semibold 
            hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black transition"
          >
            My resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
