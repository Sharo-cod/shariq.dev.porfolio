import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Travel", path: "/travel" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold transition-colors duration-300"
        style={{ color: "#D0C6BA" }}
      >
        Travel Through Pakistan
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="transition-colors duration-300 text-lg font-bold"
              style={{
                color:
                  location.pathname === link.path ? "#63615F" : "#FFFFFF",
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
