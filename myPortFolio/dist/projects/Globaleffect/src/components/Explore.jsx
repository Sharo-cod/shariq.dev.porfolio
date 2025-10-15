import React from "react";
import { motion } from "framer-motion";
import Orb from "./Orb"; 

export default function Explore() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20 flex flex-col items-center justify-start">
      
      {/* 🔹 Blobby Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Orb
          hoverIntensity={0.3}
          rotateOnHover={true}
          hue={200} // blueish hue
          forceHoverState={false}
        />
      </div>

      {/* 🔹 Page Header */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore the Global Effect
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg max-w-4xl text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Global Effect is an advanced interactive design system that combines the power of web animations, motion graphics, and responsive design 
        to create immersive, visually captivating digital experiences. Each component is designed to react to user input, engage attention, and enhance user experience.
      </motion.p>

      {/* 🔹 Detailed Sections */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full mb-16">
        {/* Section 1 */}
        <motion.div
          className="bg-black/50 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-cyan-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Interactive Animations</h2>
          <p className="text-gray-300">
            Every element responds to user actions such as hover, scroll, and clicks. 
            This creates a living, breathing interface that reacts dynamically to the user, giving a sense of depth and realism.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="bg-black/50 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-cyan-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Dynamic Blobby Backgrounds</h2>
          <p className="text-gray-300">
            Backgrounds aren’t static. They morph, pulse, and glow, creating a visually fluid environment that enhances the immersive experience of the interface.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="bg-black/50 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-cyan-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Seamless Transitions</h2>
          <p className="text-gray-300">
            Transitions between pages, sections, and components are smooth and fluid. 
            This ensures a continuous, uninterrupted user journey, improving engagement and accessibility.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          className="bg-black/50 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-cyan-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Modern Aesthetics</h2>
          <p className="text-gray-300">
            Carefully curated gradients, neon glows, subtle shadows, and typography combine to produce a sleek, modern design language 
            that is visually striking yet easy to navigate.
          </p>
        </motion.div>
      </div>

      {/* 🔹 Additional Description */}
      <motion.div
        className="max-w-4xl text-center text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="mb-4">
          The Global Effect isn't just about aesthetics—it's about creating a cohesive experience where design, motion, and technology converge. 
          Each interaction tells a story, making the interface more intuitive, engaging, and memorable.
        </p>
        <p>
          By leveraging interactive backgrounds, responsive animations, and seamless motion, Global Effect pushes the boundaries of conventional web design, 
          offering a futuristic, user-centered approach to digital experiences.
        </p>
      </motion.div>
    </div>
  );
}
