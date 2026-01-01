import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const HappeningsHero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-[#181816] font-sans">
      {/* =======================
          ATMOSPHERE & BACKGROUND
          ======================= */}

      {/* 1. NEW: Background Image Layer (Empty src for now) */}
      {/* This layer sits behind the grain but interacts with the spotlight */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-overlay z-0 pointer-events-none"
        style={{ backgroundImage: 'url("/6.png")' }}
      />

      {/* 2. Grain Texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter3">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter3)" />
        </svg>
      </div>

      {/* 3. The Spotlight (Central Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF9F2E] rounded-full blur-[250px] opacity-[0.1] pointer-events-none z-0" />

      {/* =======================
          CONTENT
          ======================= */}
      <div className="relative z-20 text-center max-w-4xl mx-auto space-y-8">
        {/* Top Tag */}
        <div className="flex items-center justify-center gap-3 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="h-[1px] w-8 bg-[#2B4C6F]" />
          <span className="text-[#2B4C6F] text-xs tracking-[0.3em] uppercase">
            Curated Nights
          </span>
          <div className="h-[1px] w-8 bg-[#2B4C6F]" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-6xl md:text-8xl text-[#E0E0E0] leading-none tracking-tight animate-in fade-in zoom-in-95 duration-1000 delay-100">
          We Gather <br />
          <span className="text-[#FF9F2E] italic opacity-80">Slowly.</span>
        </h1>

        {/* Description */}
        <p className="text-[#8C8681] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Thanti isn't a concert hall. It’s a living room.{" "}
          <br className="hidden md:block" />
          Expect acoustic sets, seasonal roasts, and conversations that last
          until closing.
        </p>

        {/* 'Coming Up' Indicator */}
        <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#4A3B32] rounded-full text-[#E0E0E0] text-sm tracking-widest uppercase hover:border-[#FF9F2E] transition-colors cursor-default">
            <FaCalendarAlt className="text-[#FF9F2E]" />
            <span>Upcoming Schedule Below</span>
          </div>
        </div>
      </div>

      {/* =======================
          SCROLL LINE
          ======================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-[1px] bg-gradient-to-b from-[#4A3B32] to-transparent opacity-50" />
    </section>
  );
};

export default HappeningsHero;
