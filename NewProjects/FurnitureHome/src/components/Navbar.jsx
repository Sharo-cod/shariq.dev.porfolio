import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "CMS", path: "/cms" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Decide classes dynamically
  const navbarBg = isHomePage
    ? scrolled
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-white"
    : "bg-white text-black shadow-md";

  const logoColor = isHomePage
    ? scrolled
      ? "text-black hover:text-stone-600"
      : "text-white hover:text-stone-200"
    : "text-black hover:text-stone-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 transition-all duration-500 ${navbarBg}`}
    >
      {/* Logo */}
      <Link to="/" className={`text-2xl font-bold transition-all ${logoColor}`}>
        Home Furniture
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-lg transition-all duration-300 ${
              location.pathname === link.path ? "font-semibold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden focus:outline-none transition-all ${scrolled || !isHomePage ? "text-black" : "text-white"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full md:hidden flex flex-col items-center space-y-4 py-6 text-lg font-medium transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        } ${scrolled || !isHomePage ? "bg-white text-black shadow-md" : "bg-black/70 text-white backdrop-blur-md"}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`hover:text-stone-400 transition-all ${
              location.pathname === link.path ? "font-semibold" : ""
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
