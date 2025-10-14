import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50 flex justify-between items-center px-8 py-4">
      {/* Logo that links to Home */}
      <Link to="/" className="text-2xl font-bold cursor-pointer">
        Radio <span className="text-purple-500">Verse</span>
      </Link>

      {/* Links */}
      <ul className="flex space-x-8 text-lg">
        <li>
          <Link
            to="/"
            className={`hover:text-purple-400 transition ${
              location.pathname === "/" ? "text-purple-400" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/listen"
            className={`hover:text-purple-400 transition ${
              location.pathname === "/listen" ? "text-purple-400" : ""
            }`}
          >
            Listen
          </Link>
        </li>
      </ul>
    </nav>
  );
}
