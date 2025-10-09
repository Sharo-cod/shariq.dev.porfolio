import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/shariqalam.JPG";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white pt-24 flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-20 relative pb-32"
    >
      <div className="relative pt-10 w-52 h-52 sm:w-64 sm:h-64 mb-12 rounded-full flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -6, 0],
            boxShadow: [
              "0 0 25px #06b6d4",
              "0 0 35px #06b6d4",
              "0 0 25px #06b6d4",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-white to-cyan-500"
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

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        I'm{" "}
        <span className="bg-gradient-to-r from-white to-cyan-500 bg-clip-text text-transparent">
          Shariq Alam
        </span>
        , frontend <br className="hidden sm:block" /> developer based in Pakistan.
      </motion.h1>

      <motion.p
        className="text-gray-300 pt-5 max-w-2xl mb-12 text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        I’m a Frontend Developer from Pakistan with experience building responsive and dynamic web apps using{" "}
        <span className="text-cyan-400 font-semibold">
          HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React
        </span>. I’m also learning backend technologies like Node.js and MongoDB.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -4, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }}
          className="relative rounded-full p-[2px] bg-gradient-to-r from-white to-cyan-600"
        >
          <Link
            to="/portfolio"
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black transition"
          >
            Check Out My Work
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, -4, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }}
          className="relative rounded-full p-[2px] bg-gradient-to-r from-white to-cyan-600"
        >
          <a
            href="#resume"
            className="block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black transition"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex gap-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        {[
          { icon: <FaGithub />, link: "https://github.com/sharo-cod" },
          { icon: <FaInstagram />, link: "https://instagram.com/he_sharo" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/shariq-alam-98560931b" },
        ].map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black border-2 border-white overflow-hidden ">
              <motion.div
                whileHover={{
                  scale: 1.4,
                  rotate: [0, 10, -10, 0],
                  color: "#06b6d4",
                  textShadow: "0 0 8px #06b6d4",
                }}
                whileTap={{ scale: 0.9 }}
                className="text-white text-3xl"
              >
                {social.icon}
              </motion.div>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
