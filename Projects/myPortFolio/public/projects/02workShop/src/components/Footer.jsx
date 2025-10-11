import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-500/20 text-gray-300 py-8 text-center ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 gap-4">
        
        {/* © Text */}
        <p className="text-sm sm:text-base tracking-wide text-purple-200/90 drop-shadow-[0_0_6px_#a855f7]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-400">Shariq Alam</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 hover:drop-shadow-[0_0_8px_#a855f7] transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/shariq-alam-98560931b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 hover:drop-shadow-[0_0_8px_#a855f7] transition-all duration-300"
          >
            <FaLinkedin />
          </a>
            <a
            href="https://linkedin.com/shariq-alam-98560931b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 hover:drop-shadow-[0_0_8px_#a855f7] transition-all duration-300"
            >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Optional: Subtle purple line glow at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent blur-[1px]" />
    </footer>
  );
}
