import React from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Radio Verse</h1>
        <p className="text-lg text-gray-300 mb-6">
          Where sound waves connect the world.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer px-6 py-3 rounded-full font-semibold transition duration-300">
          Start Listening
        </button>
      </div>
    </section>
  );
}
