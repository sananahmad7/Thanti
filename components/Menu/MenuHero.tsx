import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const HeroMenu = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[80vh] lg:min-h-[90vh] h-auto flex items-center bg-[#181816] overflow-hidden px-6 md:px-12 py-12 md:py-24">
      {/* =======================
          BACKGROUND LAYERS
          ======================= */}
      {/* 1. Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      {/* 2. Subtle Gradient Mood */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#181816] via-transparent to-[#4A3B32]/20 z-0" />

      {/* =======================
          FLOATING DECORATIONS
          ======================= */}

      {/* =======================
          MAIN CONTENT GRID
          ======================= */}
      <div className="relative z-30 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: BIG TYPOGRAPHY */}
        <div className="md:col-span-7 select-none relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Outline Text */}
          <h1
            className="font-serif text-6xl md:text-8xl xl:text-8xl 2xl:text-[10rem] text-transparent leading-none tracking-tighter"
            style={{ WebkitTextStroke: "1px #4A3B32" }}
          >
            SIMPLE
          </h1>
          {/* Filled Text (Overlapping) */}
          <h1 className="font-serif text-7xl md:text-8xl xl:text-[10rem]  text-[#FF9F2E] leading-none tracking-tighter ml-4 md:ml-12 -mt-4 md:-mt-6 lg:-mt-10 relative z-10 break-words">
            & HONEST
          </h1>
        </div>

        {/* RIGHT COLUMN: QUOTE & DESCRIPTION */}
        <div className="md:col-span-5 relative md:pl-8 lg:pl-12 mt-12 md:mt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-[#FF9F2E] text-xl md:text-2xl absolute -top-4 -left-4 md:-top-6 md:-left-8 opacity-80" />

          <div className="space-y-6 border-l border-[#FF9F2E] pl-6">
            {/* Main Quote */}
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#E0E0E0] leading-tight">
              "No complicated menus. <br />
              <span className="text-[#FF9F2E] bg-[#FF9F2E]/10 px-1">
                No unnecessary extras.
              </span>
              "
            </h2>

            {/* Description paragraph */}
            <p className="text-[#8C8681] text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md">
              Cold beer, straightforward pours, and snacks meant to be shared.
              We strip away the noise so you can focus on what matters: the
              company you keep.
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          BOTTOM LABEL
          ======================= */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-4 z-20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700">
        <span className="text-[#2B4C6F] text-xs tracking-[0.3em] uppercase">
          Est. 2024
        </span>
        <div className="h-[1px] w-12 bg-[#2B4C6F]" />
        <span className="text-[#2B4C6F] text-xs tracking-[0.3em] uppercase">
          Lakeside
        </span>
      </div>
    </section>
  );
};

export default HeroMenu;
