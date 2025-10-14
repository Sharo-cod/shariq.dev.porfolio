// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio"  },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-lg border-b border-cyan-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-wide"
          onClick={() => window.scrollTo(0, 0)}
        >
          Shariq <span className="text-cyan-400">Alam</span>
        </Link>

        <ul className="hidden lg:flex space-x-8 xl:space-x-10 text-base xl:text-lg">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative group ${isActive ? "text-cyan-400" : "text-white"}`
                }
              >
                {name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <motion.div
            animate={{ y: [0, -4, 0], scale: [1, 1.03, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            className="relative rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-white to-cyan-600 shadow-[0_0_15px_#06b6d4]"
          >
            <Link
              to="/contact"
              className="block bg-black text-white px-5 py-2 rounded-full font-semibold 
                hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black transition"
              onClick={() => window.scrollTo(0, 0)}
            >
              Connect With Me
            </Link>
          </motion.div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black border-t border-cyan-800"
          >
            <ul className="flex flex-col items-center space-y-5 py-6 text-lg">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `transition font-medium ${
                        isActive
                          ? "text-cyan-400"
                          : "text-white hover:text-cyan-400"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}

              <motion.div
                animate={{ y: [0, -4, 0], scale: [1, 1.03, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.3,
                }}
                className="relative rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-white to-cyan-600 shadow-[0_0_15px_#06b6d4]"
              >
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black transition"
                >
                  Connect With Me
                </Link>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
