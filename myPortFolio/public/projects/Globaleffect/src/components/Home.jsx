import React from "react";
import { Link } from "react-router-dom";
import Orb from "./Orb";

export default function Home() {
  return (
    <div className="w-full h-screen md:h-[700px] relative pt-20">
      {/* Orb Background */}
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Global Effect
        </h1>

        {/* Short Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mb-4">
          The Global Effect is an interactive, animated background that responds
          to user movement and cursor interaction. Designed for modern web
          experiences, it adds depth, dynamism, and a sense of interactivity
          to your website.
        </p>

        {/* Extended Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mb-6">
          Using advanced web animation techniques, this effect creates a smooth
          orbital motion with particles or shapes that rotate and react when
          hovered. It gives your web page a lively, futuristic feel, enhancing
          user engagement and visual appeal.
        </p>

        {/* Button */}
        <Link
          to="/explore"
          className="mt-4 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
