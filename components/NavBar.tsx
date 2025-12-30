"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b-2 border-[#2B4C6F]/20 bg-[#181816]/80 backdrop-blur-md transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="flex flex-col cursor-pointer group">
          <h1 className="text-2xl font-serif tracking-widest text-[#FF9F2E] uppercase group-hover:opacity-80 transition-opacity">
            Thanti
          </h1>
          <span className="text-xs tracking-[0.2em] text-[#8C8681] opacity-70 group-hover:text-[#FF9F2E] transition-colors">
            Snacking Bar
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12 text-sm tracking-widest uppercase text-[#8C8681]">
          <a
            href="#"
            className="hover:text-[#FF9F2E] transition-colors duration-300"
          >
            The Space
          </a>
          <a
            href="#"
            className="hover:text-[#FF9F2E] transition-colors duration-300"
          >
            The Fare
          </a>
          <a
            href="#"
            className="hover:text-[#FF9F2E] transition-colors duration-300"
          >
            Happenings
          </a>

          {/* CTA Button using 'Thanti Blue' */}
          <button className="flex items-center gap-2 px-6 py-2 bg-[#2B4C6F] text-[#E0E0E0] hover:bg-[#2B4C6F]/80 transition-all duration-300 rounded-sm border border-[#2B4C6F] shadow-[0_0_15px_-5px_#2B4C6F]">
            <FaMapMarkerAlt size={14} />
            <span>Find Us</span>
          </button>
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
          <a href="#" className="text-lg tracking-widest hover:text-[#FF9F2E]">
            The Space
          </a>
          <a href="#" className="text-lg tracking-widest hover:text-[#FF9F2E]">
            The Fare
          </a>
          <a href="#" className="text-lg tracking-widest hover:text-[#FF9F2E]">
            Happenings
          </a>
          <button className="flex items-center gap-2 text-[#2B4C6F] pt-4 hover:text-[#FF9F2E] transition-colors">
            <FaMapMarkerAlt />
            <span>Lakeside, Pokhara</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
