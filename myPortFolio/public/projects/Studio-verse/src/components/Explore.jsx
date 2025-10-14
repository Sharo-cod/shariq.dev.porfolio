import React from "react";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="w-full min-h-screen relative bg-black text-white flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-24 overflow-y-auto py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6 drop-shadow-[0_0_15px_#FF0000]">
        Explore Radio Verse
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
        <span className="text-red-400 font-semibold">Radio Verse</span> is where
        rhythm meets visualization — a digital realm crafted within{" "}
        <span className="text-purple-400 font-semibold">Studio Verse</span>.
        Here, every beat transforms into light, motion, and emotion.
      </p>

      <p className="text-gray-400 text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
        This experience reimagines how we interact with music — not just by
        listening, but by <em>seeing</em> sound. Through a blend of animation,
        responsive visuals, and immersive depth, Radio Verse lets you step
        inside the pulse of every track. It’s designed for creators, dreamers,
        and those who see art beyond the surface.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/about"
          className="px-8 py-3 bg-red-700 hover:bg-red-600 text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/50"
        >
          Learn How It’s Made
        </Link>

        <a
          href="https://soundcloud.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-transparent border border-red-500 text-red-400 rounded-full text-lg font-medium hover:bg-red-600/20 transition-all duration-300 hover:scale-110"
        >
          Listen Now
        </a>
      </div>

      <p className="mt-10 text-gray-500 text-sm tracking-wider uppercase">
        A Studio Verse Production 🎧
      </p>
    </div>
  );
}
