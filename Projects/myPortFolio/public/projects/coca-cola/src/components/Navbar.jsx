import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // For hamburger icons (install lucide-react if needed)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["home", "about", "services", "contact", "login"];

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <nav className="px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl sm:text-3xl font-extrabold text-red-600 tracking-tight"
          >
            Coca-Cola
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={400}
                  offset={-70}
                  spy={true}
                  activeClass="text-red-600 font-bold"
                  className="cursor-pointer text-gray-800 hover:text-red-600 transition-all duration-200 text-lg"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-600 hover:text-red-700 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-center bg-white shadow-lg mt-4 rounded-lg overflow-hidden"
            >
              {navLinks.map((section) => (
                <li key={section} className="w-full border-b border-gray-200">
                  <Link
                    to={section}
                    smooth={true}
                    duration={400}
                    offset={-70}
                    spy={true}
                    activeClass="text-red-600 font-bold"
                    className="block w-full py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-center"
                    onClick={() => setIsOpen(false)} // close after click
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
