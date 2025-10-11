import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/shariqalam.JPG";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 px-6 md:px-20 flex flex-col items-center justify-center text-center relative">
      
      {/* Logo + Shariq text */}
      <motion.div
        className="flex items-center gap-3 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={profilePic}
          alt="Shariq Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white"
        />
        <span className="text-white text-lg sm:text-xl font-bold">Shariq Alam</span>
      </motion.div>

      <motion.h2
        className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-6 sm:mb-8 max-w-xs sm:max-w-xl text-sm sm:text-base px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        I’m always open to collaboration or discussing new projects. Reach out via my social links or email!
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        {[
          { icon: <FaGithub />, link: "https://github.com/sharo-cod" },
          { icon: <FaInstagram />, link: "https://instagram.com/he_sharo" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/shariq-alam-98560931b" },
        ].map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black border-2 border-white overflow-hidden">
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [0, 10, -10, 0],
                  color: "#06b6d4",
                  textShadow: "0 0 8px #06b6d4",
                }}
                whileTap={{ scale: 0.9 }}
                className="text-white text-xl sm:text-2xl"
              >
                {social.icon}
              </motion.div>
            </div>
          </a>
        ))}
      </motion.div>

      <motion.p
        className="text-gray-500 text-xs sm:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      >
        &copy; {new Date().getFullYear()} Shariq Alam. All rights reserved.
      </motion.p>
    </footer>
  );
}
