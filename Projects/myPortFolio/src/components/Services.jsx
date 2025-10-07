import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Box, Wind, Atom } from "lucide-react";

export default function Services() {
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
  ];

  return (
    <section
      id="services"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-32"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500 drop-shadow-[0_0_10px_#06b6d4]"
      >
        My Services
      </motion.h1>

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-300 text-center mb-20 text-base md:text-lg leading-relaxed px-4"
      >
        I specialize in crafting modern, responsive, and user-friendly websites
        using the latest frontend technologies. From pixel-perfect designs to
        interactive user experiences, I bring ideas to life through clean and
        efficient code.
      </motion.p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1, // stagger entrance
            }}
            className={`relative rounded-2xl p-[2px] bg-gradient-to-r ${service.gradient} cursor-pointer border-2 ${service.borderColor}`}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }} // smooth pulse
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="bg-black rounded-2xl h-full p-8 flex flex-col items-center text-center space-y-5"
            >
              <div className="text-cyan-400">{service.icon}</div>
              <h2 className="text-2xl font-semibold tracking-wide">{service.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed px-2">{service.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
