import React from "react";
import { FaQuoteLeft, FaArrowDown } from "react-icons/fa";

const MenuHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#181816] font-sans">
      {/* =======================
          ATMOSPHERE & LAYERS
          ======================= */}

      {/* 1. Grain Texture (The "Film" look) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-10 mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. The "Ghost" Interior (Blends the physical space into the void) */}
      <div
        className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-cover bg-center opacity-20 z-0 mix-blend-luminosity grayscale"
        style={{
          backgroundImage: "url('/6.jpg')",
          maskImage: "linear-gradient(to right, transparent, black)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black)",
        }}
      />

      {/* 3. Lantern Glow (Ambient Lighting) */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#FF9F2E] rounded-full blur-[200px] opacity-[0.05] pointer-events-none z-0" />

      {/* =======================
          THE CONTENT GRID
          ======================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-end pb-12">
        {/* LEFT SIDE: The Massive Title (KEPT EXACTLY AS REQUESTED) */}
        <div className="md:col-span-7 flex flex-col space-y-[-1rem] md:space-y-[-2rem] select-none animate-in fade-in slide-in-from-left-8 duration-1000">
          {/* "SIMPLE" - Hollow/Outline Style */}
          <h1
            className="font-serif text-[18vw] md:text-[9rem] leading-none text-transparent tracking-tighter"
            style={{
              WebkitTextStroke: "1px #4A3B32",
              textShadow: "0 0 30px rgba(0,0,0,0.5)",
            }}
          >
            SIMPLE
          </h1>

          {/* "& HONEST" - Solid Glowing Style */}
          <h1 className="font-serif text-[18vw] md:text-[9rem] leading-none text-[#FF9F2E] tracking-tighter mix-blend-screen opacity-90 md:ml-24">
            & HONEST
          </h1>
        </div>

        {/* RIGHT SIDE: The Editorial "Manifesto" Card */}
        <div className="md:col-span-5 relative">
          {/* The "Stamp" Visual - A rotating seal of authenticity */}
          <div className="absolute -top-20 -right-4 md:-right-10 opacity-30 animate-[spin_10s_linear_infinite]">
            <svg viewBox="0 0 100 100" width="120" height="120">
              <path
                id="curve"
                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                fill="transparent"
              />
              <text fontSize="11" fill="#E0E0E0" letterSpacing="2">
                <textPath href="#curve">
                  NO EXTRAS • NO EXTRAS • NO EXTRAS •
                </textPath>
              </text>
            </svg>
          </div>

          {/* The Text Content */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {/* The Highlighted Quote */}
            <div className="relative pl-8 border-l border-[#FF9F2E]/50">
              <span className="absolute -left-3 top-0 w-6 h-6 bg-[#181816] border border-[#FF9F2E] rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-[10px] text-[#FF9F2E]" />
              </span>

              <p className="text-3xl md:text-4xl text-[#E0E0E0] font-serif leading-tight">
                "No complicated menus. <br />
                <span className="bg-[#FF9F2E]/10 px-2 text-[#FF9F2E]">
                  No unnecessary extras.
                </span>
                "
              </p>
            </div>

            {/* The Body Text */}
            <p className="text-[#8C8681] text-sm md:text-base leading-relaxed font-light max-w-sm">
              Cold beer, straightforward pours, and snacks meant to be shared.
              We strip away the noise so you can focus on what matters: the
              company you keep.
            </p>

            {/* Signature / Date Line */}
            <div className="flex items-center gap-4 pt-4 opacity-50 text-xs tracking-[0.2em] uppercase text-[#2B4C6F]">
              <span>Est. 2024</span>
              <div className="h-[1px] w-12 bg-[#2B4C6F]" />
              <span>Lakeside</span>
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          VERTICAL SCROLL LINE
          ======================= */}
      <div className="absolute bottom-0 left-12 hidden md:flex flex-col items-center gap-4 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C8681] [writing-mode:vertical-rl] opacity-60">
          The Menu
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#8C8681] to-transparent" />
      </div>
    </section>
  );
};

export default MenuHero;
