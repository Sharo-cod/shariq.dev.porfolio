import React from "react";
import { Link } from "react-scroll"; 
export default function Navbar() {
  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="px-6 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-red-600">
            Coca-Cola
          </a>

          <ul className="flex space-x-6">
            {["home", "about", "services", "contact", "login"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={300}
                  offset={-50}
                  spy={true}
                  activeClass="text-red-600 font-bold"
                  className="cursor-pointer text-gray-700 hover:text-red-600 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
