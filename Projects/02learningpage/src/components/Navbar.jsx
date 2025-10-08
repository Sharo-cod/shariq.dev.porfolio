import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="bg-stone-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
           <Link to="/home" className="text-stone-200 text-3xl hover:text-white">
              Mastering Handpan
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/home" className="text-stone-300 text-lg hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-stone-300 text-lg hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-stone-300 text-lg hover:text-white">
              Contact
            </Link>

            <button className="border bg-transparent font-bold text-white px-4 py-2 tracking-widest rounded hover:bg-stone-600 cursor-pointer">
              Learn Here
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 bg-stone-800 text-white text-lg rounded px-2 py-1 focus:outline-none"
            >
              <option value="EN">English USA</option>
              <option value="ES">English UK</option>
              <option value="FR">Francias</option>
              <option value="CH">Chinese</option>
            </select>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600">
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600">
            Contact
          </Link>

          <button className="w-full bg-stone-600 text-white px-4 py-2 rounded hover:bg-stone-500-700 mt-2">
            Learn Here
          </button>
          <button className="w-full border border-stone-600 text-stone-900 px-4 py-2 rounded hover:bg-green-50 mt-2">
            Login
          </button>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 mt-2"
          >
            <option value="EN">English USA</option>
            <option value="ES">English UK</option>
            <option value="FR">Francias</option>
            <option value="CH">Chinese</option>
          </select>
        </div>
      )}
    </nav>
  );
}
