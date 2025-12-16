// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-lg z-50">
      <div className="flex justify-between items-center h-16 px-4 md:px-10">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          Fast<span className="text-red-500">Eats</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-lg">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>

          {/* Cart with badge */}
          <Link
            to="/cart"
            className="ml-4 relative bg-white text-red-700 px-4 py-2 shadow-2xl rounded font-bold hover:bg-gray-300 transition"
          >
            Cart 🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggle} className="md:hidden focus:outline-none">
          <svg
            className="h-7 w-7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white-600 text-black w-full shadow-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 text-lg">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-gray-300">
              Contact
            </Link>
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="relative bg-white-300 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400"
            >
              Cart 🛒
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
