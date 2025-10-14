import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hyperspeed from "./Hyperspeed";

export default function Home() {
  useEffect(() => {
    // Cleanup or setup logic for Hyperspeed if needed in future
    return () => {
      // Ensures proper cleanup when navigating away
      const canvas = document.querySelector("canvas");
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* 🚀 Animated Background */}
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />

      {/* ✨ Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-[0_0_10px_#FF0000]">
          Welcome to Studio Verse
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mb-8">
          Studio Verse is a digital universe where creativity meets technology.
          From immersive web designs to interactive experiences, we craft visuals
          that inspire and connect people in the modern web era.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to="/explore"
            className="px-6 py-3 bg-red-800 hover:bg-red-700 cursor-pointer text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-red-500/40"
          >
            Explore Radio Verse
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 bg-transparent border border-red-400 text-red-400 cursor-pointer hover:bg-red-600/20 rounded-full text-lg font-medium transition-all shadow-xl duration-300 hover:scale-110"
          >
            Learn More About Radio Verse
          </Link>
        </div>
      </div>
    </div>
  );
}
