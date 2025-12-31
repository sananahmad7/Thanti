"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b-2 border-[#2B4C6F]/20 bg-[#181816]/80 backdrop-blur-md transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex flex-col cursor-pointer group">
          <h1 className="text-2xl font-serif tracking-widest text-[#FF9F2E] uppercase group-hover:opacity-80 transition-opacity">
            Thanti
          </h1>
          <span className="text-xs tracking-[0.2em] text-[#8C8681] opacity-70 group-hover:text-[#FF9F2E] transition-colors">
            Snacking Bar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12 text-sm tracking-widest uppercase text-[#8C8681]">
          <Link
            href="/"
            className="hover:text-[#FF9F2E] transition-colors duration-300"
          >
            The Space
          </Link>
          <Link
            href="/menu"
            className="hover:text-[#FF9F2E] transition-colors duration-300"
          >
            The Fare
          </Link>
          <Link
            href="/happenings"
            className="hover:text-[#FF9F2E] transition-colors duration-300"
          >
            Happenings
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-[#FF9F2E] hover:text-[#FF9F2E]/80 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown (Simple drawer) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#181816] border-b border-[#2B4C6F]/30 p-8 flex flex-col items-center space-y-6 text-[#8C8681] shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <Link
            href="/"
            className="text-lg tracking-widest hover:text-[#FF9F2E]"
            onClick={() => setIsMenuOpen(false)}
          >
            The Space
          </Link>
          <Link
            href="/menu"
            className="text-lg tracking-widest hover:text-[#FF9F2E]"
            onClick={() => setIsMenuOpen(false)}
          >
            The Fare
          </Link>
          <Link
            href="/happenings"
            className="text-lg tracking-widest hover:text-[#FF9F2E]"
            onClick={() => setIsMenuOpen(false)}
          >
            Happenings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
