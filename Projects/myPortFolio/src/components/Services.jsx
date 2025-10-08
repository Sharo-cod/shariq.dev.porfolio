import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Box,
  Wind,
  Atom,
  Scroll,
  Activity, // ✅ use this instead of Motion
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

export default function Services() {
  const lenisRef = useRef(null);

  const services = [
    {
      title: "HTML",
      description:
        "The foundation of every webpage — creating structured, accessible, and SEO-friendly content.",
      icon: <Code size={40} />,
      gradient: "from-cyan-400 via-white to-cyan-500",
      borderColor: "border-cyan-400",
    },
    {
      title: "CSS",
      description:
        "Designing visually appealing and responsive layouts with smooth transitions and animations.",
      icon: <Palette size={40} />,
      gradient: "from-white via-cyan-300 to-white",
      borderColor: "border-white",
    },
    {
      title: "JavaScript",
      description:
        "Adding dynamic functionality and interactivity to create seamless user experiences.",
      icon: <Zap size={40} />,
      gradient: "from-cyan-300 via-white to-cyan-400",
      borderColor: "border-cyan-300",
    },
    {
      title: "Bootstrap",
      description:
        "Creating responsive and elegant layouts quickly with Bootstrap’s robust grid and component system.",
      icon: <Box size={40} />,
      gradient: "from-white via-cyan-400 to-white",
      borderColor: "border-white",
    },
    {
      title: "Tailwind CSS",
      description:
        "Building beautiful, fast, and customizable designs efficiently using Tailwind’s utility-first classes.",
      icon: <Wind size={40} />,
      gradient: "from-cyan-400 via-white to-cyan-500",
      borderColor: "border-cyan-400",
    },
    {
      title: "React",
      description:
        "Developing dynamic, component-based user interfaces with smooth interactivity using React JS.",
      icon: <Atom size={40} />,
      gradient: "from-white via-cyan-300 to-white",
      borderColor: "border-white",
    },
    {
      title: "Lenis",
      description:
        "Enhancing user experience through smooth, buttery scrolling for a more natural website feel.",
      icon: <Scroll size={40} />,
      gradient: "from-cyan-400 via-white to-cyan-500",
      borderColor: "border-cyan-400",
    },
    {
      title: "Framer Motion",
      description:
        "Creating fluid animations and transitions with the power and elegance of Framer Motion.",
      icon: <Activity size={40} />, // ✅ fixed icon
      gradient: "from-white via-cyan-300 to-white",
      borderColor: "border-white",
    },
  ];

  // Smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return () => lenis.destroy();
  }, []);

  return (
    <section
      id="services"
      className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Animated glowing wave background */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <path
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          d="M0,160 C480,300 960,0 1440,160"
        />
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500 drop-shadow-[0_0_10px_#06b6d4]"
      >
        My Services
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-300 text-center mb-20 text-base md:text-lg leading-relaxed px-4"
      >
        I craft modern, responsive, and engaging websites using the latest
        frontend tools. From smooth animations to intuitive interfaces, I bring
        designs to life through clean, efficient, and scalable code.
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 4,
              rotateY: -4,
              boxShadow: "0px 0px 40px rgba(0,255,255,0.3)",
            }}
            className={`relative rounded-2xl p-[2px] bg-gradient-to-r ${service.gradient} border-2 ${service.borderColor} cursor-pointer transition-all duration-300`}
          >
            <div className="bg-black rounded-2xl h-full p-8 flex flex-col items-center text-center space-y-5">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="text-cyan-400"
              >
                {service.icon}
              </motion.div>

              <h2 className="text-2xl font-semibold tracking-wide">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed px-2">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
