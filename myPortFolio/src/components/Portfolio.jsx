import React, { useState } from "react";
import { motion } from "framer-motion";
import radio from "../assets/radio.png";
import CocaCola from "../assets/CocaCola.png";
import cocacolapdf from "../assets/cocacola.pdf";
import global from "../assets/global.png";
import globalpdf from "../assets/global1.pdf";
import global2pdf from "../assets/global2.pdf";
import radioabt from "../assets/radioabt.pdf";
import radioexp from "../assets/radioexp.pdf";
import todolist from "../assets/todolist.pdf";

export default function Portfolio() {
  const [activePreview, setActivePreview] = useState(null);

  const projects = [
    {
      name: "Global Effect",
      preview: global,
      description:
        "The Global Effect is an interactive, animated background that responds to user movement and cursor interaction. Designed for modern web experiences, it adds depth, dynamism, and a sense of interactivity to your website.",
      paths: [
        { label: "Open Page 1", url: globalpdf },
        { label: "Open Page 2", url: global2pdf },
      ],
    },
    {
      name: "Studio Verse",
      preview: radio,
      description:
        "Studio Verse is a digital universe where creativity meets technology. From immersive web designs to interactive experiences, we craft visuals that inspire and connect people in the modern web era.",
      paths: [
        { label: "Open Page 1", url: radioexp },
        { label: "Open Page 2", url: radioabt },
      ],
    },
    {
      name: "Todo List",
      preview:
        "https://images.unsplash.com/photo-1644329843283-640d00509d43?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      description:
        "A beautifully designed task manager that helps you organize, prioritize, and track your daily goals with a clean, elegant UI and smooth animations.",
      path: todolist,
    },
    {
      name: "Coca Cola Website",
      preview: CocaCola,
      description:
        "Coca-Cola, introduced in 1886, is one of the most iconic soft drinks in the world. Known for its refreshing taste, it has become a symbol of joy and togetherness across generations.",
      path: cocacolapdf,
    },
  ];

  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a14] to-black text-white pt-28 pb-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* 🌈 Animated background line */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none"
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

      {/* 🏷️ Section Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My React Projects
      </motion.h1>

      {/* 💼 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-[#0e0e14] rounded-3xl overflow-hidden w-full max-w-sm shadow-[0_0_25px_rgba(0,255,255,0.15)] border border-cyan-800/40 hover:border-cyan-400/70 transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(0,255,255,0.3)",
            }}
          >
            <motion.img
              src={project.preview}
              alt={`${project.name} preview`}
              className="w-full h-48 sm:h-56 object-cover bg-black transition-transform duration-700 hover:scale-110"
              whileHover={{ rotate: 0.5 }}
            />

            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-cyan-400 mb-2 tracking-wide">
                {project.name}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* 🎯 Button Section */}
              <div className="flex flex-wrap justify-center gap-3">
                {Array.isArray(project.paths) ? (
                  project.paths.map((file, i) => (
                    <motion.a
                      key={i}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-black font-semibold px-5 py-2.5 rounded-2xl shadow-md hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                      whileTap={{ scale: 0.93 }}
                    >
                      {file.label}
                    </motion.a>
                  ))
                ) : project.path ? (
                  <motion.a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-black font-semibold px-6 py-2.5 rounded-2xl shadow-md hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                    whileTap={{ scale: 0.93 }}
                  >
                    Open Project
                  </motion.a>
                ) : null}
              </div>
            </div>

            {/* 🔍 Preview (optional expansion section) */}
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

      {/* 🪶 Footer */}
      <motion.div
        className="text-center text-gray-500 text-sm mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        © 2025 Shariq Alam — Crafted with 🖤 By Shariq Alam
      </motion.div>
    </motion.div>
  );
}
