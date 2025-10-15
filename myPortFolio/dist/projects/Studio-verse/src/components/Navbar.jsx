import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ Uses lucide-react icons (already in your setup)

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* 🌟 Logo / Site Name */}
        <Link
          to="/"
          className="text-2xl font-semibold text-white tracking-wide hover:text-red-400 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          Studio Verse
        </Link>

        {/* 🖥 Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white hover:text-red-400 transition-all ${
                location.pathname === link.path
                  ? "text-red-400 font-medium"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-red-400 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 absolute top-16 left-0 w-full py-6 flex flex-col items-center gap-6 transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg ${
                location.pathname === link.path
                  ? "text-red-400 font-medium"
                  : "text-gray-300 hover:text-red-400"
              } transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
