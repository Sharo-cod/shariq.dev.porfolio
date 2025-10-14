import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = ["Home", "Explore"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-700/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-cyan-400 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/">Global Effect</Link>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`transition-all duration-300 hover:text-cyan-400 ${
                location.pathname ===
                (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/85 backdrop-blur-md border-t border-cyan-700/30"
        >
          <div className="flex flex-col items-center py-6 space-y-4 text-white font-medium">
            {links.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-lg transition-all duration-300 hover:text-cyan-400 ${
                  location.pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
