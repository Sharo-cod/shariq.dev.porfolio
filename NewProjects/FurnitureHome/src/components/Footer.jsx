import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "CMS", path: "/cms" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-stone-100 text-stone-700 py-12 px-6 md:px-12 mt-20 border-t border-stone-300 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        
        {/* 🏠 Brand Info */}
        <div className="space-y-4">
          <Link
            to="/"
            className="text-2xl font-bold text-stone-900 hover:text-stone-700 transition-colors duration-300"
          >
            Home Furniture
          </Link>
          <p className="text-sm text-stone-600 leading-relaxed">
            Crafting elegant and timeless furniture for your living space.
            Designed with love and built to last.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-stone-900">Quick Links</h3>
          <ul className="flex flex-col items-center sm:items-start gap-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-stone-600 hover:text-stone-900 hover:translate-x-1 transition-all duration-200 block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-stone-900">Contact Us</h3>
          <p className="text-stone-600 text-sm flex justify-center sm:justify-start">
            📍 123 Furniture Street, Karachi, Pakistan
          </p>
          <p className="text-stone-600 text-sm flex justify-center sm:justify-start">
            📞 +92 300 1234567
          </p>
          <p className="text-stone-600 text-sm flex justify-center sm:justify-start">
            ✉️ info@homefurniture.com
          </p>
        </div>
      </div>

      {/* ⚙️ Divider */}
      <div className="border-t border-stone-300 mt-10 pt-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} <span className="font-semibold text-stone-700">Home Furniture</span>. All rights reserved.
      </div>
    </footer>
  );
}
