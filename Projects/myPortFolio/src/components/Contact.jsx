// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#06b6d4]">
        Contact Me
      </h1>

      <p className="max-w-xl text-gray-300 mb-12 leading-relaxed">
        I’d love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hi — feel free to reach out.
      </p>

      <form className="w-full max-w-md bg-gray-900/40 p-8 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.2)] backdrop-blur-sm space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-cyan-500 
            focus:outline-none focus:ring-2 focus:ring-cyan-400 
            shadow-[0_0_10px_rgba(6,182,212,0.15)] transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-cyan-500 
            focus:outline-none focus:ring-2 focus:ring-cyan-400 
            shadow-[0_0_10px_rgba(6,182,212,0.15)] transition"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-cyan-500 
            focus:outline-none focus:ring-2 focus:ring-cyan-400 
            shadow-[0_0_10px_rgba(6,182,212,0.15)] transition"
        ></textarea>

        {/* Animated gradient-border button */}
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
          className="relative rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-white to-cyan-600 shadow-[0_0_25px_#06b6d4] mt-4"
        >
          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white px-8 py-3 rounded-full font-semibold 
              hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black 
              transition shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_#06b6d4]"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </section>
  );
}
