import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import Lenis from "@studio-freight/lenis";

// ✅ Import images
import eternalwavesImg from "../assets/images/eternalwaves.jpg";
import midnightdriveImg from "../assets/images/midnightdrive.jpg";
import neonheartbeatImg from "../assets/images/neonheartbeat.jpg";
import lostfrequencyImg from "../assets/images/lostfrequency.jpg";
import dreamhorizonImg from "../assets/images/dreamhorizon.jpg";
import electricbloomImg from "../assets/images/electricbloom.jpg";
import purplenightsImg from "../assets/images/purplenights.jpg";
import crystaldawnImg from "../assets/images/crystaldawn.jpg";
import alanwalkerImg from "../assets/images/alanwalker.jpg";

// ✅ Import audio files
import eternalwavesSrc from "../assets/audio/eternalwaves.mp3";
import midnightdriveSrc from "../assets/audio/midnightdrive.mp3";
import neonheartbeatSrc from "../assets/audio/neonheartbeat.mp3";
import lostfrequencySrc from "../assets/audio/lostfrequency.mp3";
import dreamhorizonSrc from "../assets/audio/dreamhorizon.mp3";
import electricbloomSrc from "../assets/audio/electricbloom.mp3";
import purplenightsSrc from "../assets/audio/purplenights.mp3";
import crystaldawnSrc from "../assets/audio/crystaldawn.mp3";
import alanwalkerSrc from "../assets/audio/alanwalker.mp3";

export default function Listen() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // 🌀 Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 3.0,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => lenis.destroy();
  }, []);

  const songs = [
    { id: 1, title: "Eternal Waves", artist: "DJ Nova", src: eternalwavesSrc, img: eternalwavesImg },
    { id: 2, title: "Midnight Drive", artist: "Aural Mist", src: midnightdriveSrc, img: midnightdriveImg },
    { id: 3, title: "Neon Heartbeat", artist: "Synth City", src: neonheartbeatSrc, img: neonheartbeatImg },
    { id: 4, title: "Lost Frequencies", artist: "Echo Void", src: lostfrequencySrc, img: lostfrequencyImg },
    { id: 5, title: "Dream Horizon", artist: "Celestial Sound", src: dreamhorizonSrc, img: dreamhorizonImg },
    { id: 6, title: "Electric Bloom", artist: "Pulse 84", src: electricbloomSrc, img: electricbloomImg },
    { id: 7, title: "Purple Nights", artist: "Lunar Flow", src: purplenightsSrc, img: purplenightsImg },
    { id: 8, title: "Crystal Dawn", artist: "Sonic Mirage", src: crystaldawnSrc, img: crystaldawnImg },
    { id: 9, title: "Faded", artist: "Alan Walker", src: alanwalkerSrc, img: alanwalkerImg },
  ];

  return (
    <motion.section
      className="min-h-screen flex pb-10 flex-col items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white text-center pt-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-12 text-purple-400 drop-shadow-[0_0_12px_#a855f7]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Trending Tracks 🎵
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {songs.map((song, index) => (
          <motion.div
            key={song.id}
            className="bg-gray-900/70 border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_15px_#a855f7]/30 hover:shadow-[0_0_25px_#a855f7]/50 transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <img
              src={song.img}
              alt={song.title}
              className="w-40 h-40 object-cover rounded-xl mb-4 border border-purple-500/30 shadow-[0_0_15px_#a855f7]/40"
            />

            <FaPlayCircle className="text-purple-400 text-5xl mb-3 drop-shadow-[0_0_8px_#a855f7]" />

            <h3 className="text-xl font-semibold mb-1">{song.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{song.artist}</p>

            <audio
              controls
              className="w-full accent-purple-500 rounded-lg focus:outline-none"
            >
              <source src={song.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
