import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const studioCards = [
    {
      title: "🎨 Creative Studio",
      desc: "Studio Verse is a digital playground focused on merging art and technology. Every project is crafted to tell a story through visuals, sound, and interactivity.",
    },
    {
      title: "🧠 Experimental Design",
      desc: "We explore cutting-edge web experiences, combining 3D graphics, motion design, and generative visuals that push boundaries of imagination.",
    },
    {
      title: "🌐 Future-Ready",
      desc: "From immersive audio-reactive visuals to responsive UI design, Studio Verse represents the future of how humans experience digital art.",
    },
  ];

  const radioCards = [
    {
      title: "🎧 What is Radio Verse?",
      desc: "Radio Verse is a song-listening and music-reactive platform that visually interprets sound — each beat transforms into motion and color.",
    },
    {
      title: "🚀 Built With Innovation",
      desc: "Powered by Three.js and WebGL animations, it offers a hyperspeed-inspired visual journey that syncs perfectly with your audio experience.",
    },
    {
      title: "💜 The Experience",
      desc: "Lose yourself in waves of color, motion, and rhythm. Radio Verse brings you a blend of listening and visual storytelling unlike anything else.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto scroll-smooth">
      {/* ✨ Header Section */}
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-red-500 drop-shadow-[0_0_10px_#FF0000]"
        >
          About Radio Verse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-2xl text-lg leading-relaxed"
        >
          Radio Verse is a creative experiment in music visualization.  
          It transforms sound into motion, color, and emotion — blending art and technology for an immersive web experience.  
          Built within Studio Verse, it’s a glimpse into the future of interactive design.
        </motion.p>
      </section>

      {/* 🔹 Studio Verse Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-red-400 mb-8 text-center"
        >
          About Studio Verse
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {studioCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-red-500/20 rounded-2xl p-6 hover:border-red-400 hover:shadow-[0_0_20px_#FF0000] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Radio Verse Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-purple-400 mb-8 text-center"
        >
          Inside Radio Verse
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {radioCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔙 Back Button */}
      <div className="flex justify-center pb-16">
        <a
          href="/"
          className="px-6 py-3 bg-transparent border border-red-400 text-red-400 cursor-pointer hover:bg-red-600/20 rounded-full text-lg font-medium transition-all shadow-xl duration-300 hover:scale-110"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
