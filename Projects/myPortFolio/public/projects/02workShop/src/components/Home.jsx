import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const navigate = useNavigate();
  const lenisRef = useRef(null);

  useEffect(() => {
    // ✅ Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;

    // ✅ RAF loop for smooth scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Clean up
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 40%, #4c1d95 100%)", // black → deep purple
      }}
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to <span className="text-purple-400">Radio Verse</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto">
          Where sound waves connect the world. Immerse yourself in pure rhythm.
        </p>
        <button
          onClick={() => navigate("/listen")}
          className="bg-purple-600 hover:bg-purple-700 cursor-pointer px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Start Listening
        </button>
      </motion.div>

      {/* Subtle overlay for clarity */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
}
