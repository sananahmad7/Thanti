import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#181816] overflow-hidden flex items-center">
      {/* =======================
          1. ATMOSPHERE LAYERS
          ======================= */}

      {/* Grain Texture (Subtle) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 mix-blend-overlay">
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

      {/* Background Image - Blended to the Right */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-40 mix-blend-luminosity">
        <Image
          src="/5.png"
          alt="Thanti Mood"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Mask to fade image into black on the left and bottom */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#181816]/50 to-[#181816]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-transparent to-transparent" />
      </div>

      {/* =======================
          2. CONTENT GRID
          ======================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        {/* LEFT: The Typography (Compact & Bold) */}
        <div className="md:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 border border-[#4A3B32] px-4 py-1 rounded-full bg-[#181816]/80 backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-[#FF9F2E] animate-pulse"></span>
            <span className="text-[#8C8681] text-[10px] tracking-[0.2em] uppercase">
              Est. Lakeside
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-[#E0E0E0] leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            A quiet nook <br />
            to leave the{" "}
            <span className="text-[#FF9F2E] italic">noise behind.</span>
          </h1>

          <div className="md:w-2/3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <p className="text-[#8C8681] text-lg font-light leading-relaxed">
              Thanti Snacking Bar is a small, warm place just off the busy
              streets. We are built for slow drinks, low voices, and evenings
              that don’t need a schedule.
            </p>
          </div>
        </div>

        {/* RIGHT: The "Stamp" / Quote (Creative Element) */}
        <div className="md:col-span-4 flex justify-start md:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-300">
          {/* Glass Card */}
          <div className="relative p-8 border border-[#4A3B32]/50 bg-[#181816]/60 backdrop-blur-md max-w-sm">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#FF9F2E]" />

            <FaQuoteLeft className="text-[#2B4C6F] text-2xl mb-4 opacity-80" />

            <p className="font-serif text-xl text-[#E0E0E0] leading-relaxed italic">
              If you’re looking for a calm corner, a good drink, and time well
              spent with friends, you’ll feel at home at Thanti."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
