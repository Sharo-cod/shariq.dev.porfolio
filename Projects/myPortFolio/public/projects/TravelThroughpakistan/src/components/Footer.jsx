import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Site Name */}
        <div className="mb-6 md:mb-0 flex items-center gap-3">
          <span className="text-2xl font-bold text-[#BFB19F]">Travel Through Pakistan</span>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-300">
          <Link to="/" className="hover:text-[#C5BBAE] transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#C5BBAE] transition-colors duration-300">
            About
          </Link>
          <Link to="/travel" className="hover:text-[#C5BBAE] transition-colors duration-300">
            Travel
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Travel Through Pakistan. All rights reserved.
      </div>
    </footer>
  );
}
