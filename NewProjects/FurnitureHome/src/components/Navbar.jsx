import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "CMS", path: "/cms" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 transition-all duration-500
        ${
          isHomePage
            ? "bg-transparent text-white"
            : "bg-black/70 backdrop-blur-md text-white shadow-lg"
        }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className={`text-2xl font-bold transition-all ${
          isHomePage
            ? "text-white hover:text-stone-400"
            : "text-stone-200 hover:text-stone-100"
        }`}
      >
        Home Furniture
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-lg transition-all duration-300 ${
              location.pathname === link.path
                ? isHomePage
                  ? "text-white font-semibold"
                  : "text-stone-400 font-semibold"
                : isHomePage
                ? "text-gray-200 hover:text-white"
                : "text-stone-200 hover:text-stone-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none transition-all"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full md:hidden flex flex-col items-center space-y-4 py-6 text-lg font-medium transition-all duration-500
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
          ${
            isHomePage && !menuOpen
              ? "bg-transparent"
              : "bg-black/70 backdrop-blur-md text-white shadow-lg"
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`hover:text-stone-400 transition-all ${
              location.pathname === link.path ? "text-stone-400 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
