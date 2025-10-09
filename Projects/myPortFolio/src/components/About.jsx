import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/shariqalam.JPG"; 
import Lenis from "@studio-freight/lenis";

export default function About() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => lenis.destroy();
  }, []);

  return (
    <section
      id="about"
      className="bg-black text-white relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-32"
    >

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500 drop-shadow-[0_0_10px_#06b6d4] text-center"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-center max-w-6xl gap-12 md:gap-20">
        {/* Profile Image */}
        <motion.div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-r from-cyan-500 via-white to-cyan-600 flex-shrink-0"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >

          <motion.div
            className="absolute inset-0 rounded-full blur-2xl bg-cyan-500 opacity-60"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.9, 0.5],
              boxShadow: [
                "0 0 20px #06b6d4",
                "0 0 40px #06b6d4",
                "0 0 20px #06b6d4",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <img
            src={profilePic}
            alt="Shariq Alam"
            className="relative w-full h-full object-cover rounded-full bg-black z-10"
          />
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left space-y-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello! I’m <span className="font-bold text-white">Shariq Alam</span>, 
            a passionate frontend developer from Pakistan. I have over a year of experience crafting 
            responsive and interactive web applications using modern frontend technologies including 
            <span className="text-cyan-400 font-semibold"> HTML, CSS, JavaScript, Tailwind CSS,</span> 
            and <span className="text-cyan-400 font-semibold">React JS</span>.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I enjoy turning ideas into beautiful and functional digital experiences. 
            Beyond the frontend, I am exploring backend technologies like Node.js and MongoDB to 
            build full-stack applications. My goal is to create clean, efficient, and user-friendly websites 
            that make a meaningful impact.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            When I’m not coding, I enjoy learning new technologies, exploring UI/UX design trends, and 
            improving my problem-solving skills. I’m always eager to collaborate on exciting projects 
            and bring innovative ideas to life.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
