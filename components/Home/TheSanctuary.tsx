import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const TheSanctuary = () => {
  return (
    <section className="relative w-full bg-[#181816] text-[#8C8681] py-24 px-6 md:px-12 overflow-hidden">
      {/* =======================
          LAYOUT GRID (CHANGED)
          ======================= */}
      {/* Changed from grid-cols-2 to grid-cols-5 for asymmetrical layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        {/* LEFT: THE IMAGERY (BIGGER) */}
        {/* Added md:col-span-3 to span 60% of width */}
        <div className="relative group md:col-span-3">
          {/* Decorative Border Frame using Thanti Blue */}
          <div className="absolute top-4 left-4 w-full h-full border border-[#2B4C6F] opacity-40 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />

          {/* Image Container */}
          {/* Added h-[500px] or h-[600px] to force a taller height if needed, 
              but letting it flow naturally with aspect-ratio is usually better. */}
          <div className="relative z-10 overflow-hidden bg-[#4A3B32] aspect-[4/3] md:aspect-auto md:h-[600px]">
            {/* Using 5.png (The Exterior) */}
            <img
              src="/5.png"
              alt="Thanti Exterior"
              // Added h-full w-full object-cover to ensure it fills the taller container
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
            />

            {/* Gradient Overlay for Mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* RIGHT: THE STORY (SMALLER) */}
        {/* Added md:col-span-2 to span 40% of width */}
        <div className="space-y-8 relative z-20 md:col-span-2 md:pl-8">
          {/* Headline */}
          <div>
            <span className="text-[#FF9F2E] text-xs tracking-[0.3em] uppercase block mb-4">
              The Space
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#E0E0E0] leading-tight">
              A Reminder to <br />
              <span className="text-[#FF9F2E]">Slow Down.</span>
            </h2>
          </div>

          {/* The "Anti-Venue" Manifesto */}
          <p className="font-light text-lg leading-relaxed text-[#8C8681]">
            Thanti is not a bar for rushing through rounds or shouting over
            music. It’s a hidden nook built for slow drinks, low voices, and
            evenings that don’t need a schedule.
          </p>

          <p className="font-light text-lg leading-relaxed text-[#8C8681]">
            Every table is lit by a{" "}
            <span className="text-[#E0E0E0] border-b border-[#2B4C6F]">
              kerosene lantern
            </span>
            . Not as decoration, but as a signal:{" "}
            <strong>Conversations stay at the table.</strong>
          </p>

          {/* Quote Block */}
          <div className="flex gap-4 pt-4 opacity-80">
            <FaQuoteLeft className="text-[#2B4C6F] text-2xl flex-shrink-0" />
            <p className="italic text-sm text-[#E0E0E0]">
              "Most nights are quiet. Some nights are full. But every night
              feels more like a living room than a venue."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-wrap gap-6">
            <Link href="/menu">
              <button className="px-8 py-3 cursor-pointer bg-transparent border border-[#FF9F2E] text-[#FF9F2E] hover:bg-[#FF9F2E] hover:text-[#181816] transition-all duration-300 text-sm tracking-widest uppercase">
                Explore The Fare
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Blur in Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2B4C6F] rounded-full blur-[200px] opacity-10 pointer-events-none" />
    </section>
  );
};

export default TheSanctuary;
