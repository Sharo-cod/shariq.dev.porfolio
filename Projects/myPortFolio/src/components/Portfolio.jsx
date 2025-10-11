import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activePreview, setActivePreview] = useState(null);

  const projects = [
    {
      name: "Coca Cola Website",
      path: "/projects/coca-cola/dist/index.html",
      preview: "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png",
      description:
        "A sleek React recreation of Coca Cola's landing experience with modern animations and product highlights.",
    },
    {
      name: "Radio Verse",
      path: "/projects/02workShop/dist/index.html",
      preview: "https://c4.wallpaperflare.com/wallpaper/239/930/324/walkman-cassette-player-the-bootleg-boy-2-lofi-sony-hd-wallpaper-thumb.jpg",
      description:
        "A sleek music streaming website where users can explore, listen, and enjoy curated songs with a modern, interactive interface and smooth animations.",
    },
    {
  name: "TravelThroughPakistan",
  path: "/projects/TravelThroughpakistan/dist/index.html",
  preview: "https://example.com/TravelThroughPakistan-preview.jpg",
  description:
    "A travel guide website showcasing the beauty of Pakistan, highlighting mountains, rivers, deserts, and cultural heritage with an interactive interface.",
  }

  ];

  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-black text-white pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Animated gradient line background */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          d="M0,160 C480,300 960,0 1440,160"
        />
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-white to-cyan-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My React Projects
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-2xl overflow-hidden w-full max-w-lg sm:max-w-sm shadow-lg border border-cyan-700/30 hover:border-cyan-400/70 transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              rotateX: 3,
              rotateY: -3,
              boxShadow: "0px 0px 50px rgba(0,255,255,0.3)",
            }}
          >
            <motion.img
              src={project.preview}
              alt={`${project.name} preview`}
              className="w-full h-52 sm:h-40 md:h-52 object-cover bg-black transition-transform duration-700 hover:scale-110"
              style={{
                filter:
                  project.name === "Radio Verse"
                    ? "grayscale(50%) contrast(120%) brightness(90%) sepia(30%) hue-rotate(180deg) saturate(200%)"
                    : "none",
              }}
              whileHover={{ rotate: 1 }}
            />

            <div className="p-6 text-left">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                {project.name}
              </h2>
              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="flex justify-between">
                <motion.button
                  onClick={() =>
                    setActivePreview(activePreview === index ? null : index)
                  }
                  className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-cyan-400/50"
                  whileTap={{ scale: 0.95 }}
                >
                  {activePreview === index ? "Hide Preview" : "Preview"}
                </motion.button>

                <motion.a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-md"
                  whileTap={{ scale: 0.95 }}
                >
                  Open Project
                </motion.a>
              </div>
            </div>

            <motion.div
              className={`overflow-hidden border-t border-cyan-700/30 bg-black transition-all duration-700 ${
                activePreview === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              animate={{
                opacity: activePreview === index ? 1 : 0,
                height: activePreview === index ? 400 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {activePreview === index && (
                <iframe
                  src={project.path}
                  title={`${project.name} preview`}
                  className="w-full h-[400px]"
                ></iframe>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center text-gray-500 text-sm mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        © 2025 My Portfolio - No Copyright Infringement Intended
      </motion.div>
    </motion.div>
  );
}
