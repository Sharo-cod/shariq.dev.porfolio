import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 relative overflow-hidden">
      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-cyan-900/10 blur-3xl"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <motion.h2
          className="text-xl font-bold bg-gradient-to-r from-white to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Global Effect
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_#06b6d4]"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_#06b6d4]"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_#06b6d4]"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          © {new Date().getFullYear()} Shariq Alam. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
