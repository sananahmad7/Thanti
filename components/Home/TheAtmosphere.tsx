import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TheAtmosphere = () => {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 overflow-hidden flex items-center justify-center">
      {/* =======================
          BACKGROUND LAYERS
          ======================= */}

      {/* 1. The Image (Fixed Parallax Effect) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/5.png')" }} // Using the interior shot
      />

      {/* 2. The Heavy Dark Overlay 
         (Ensures text is readable even over the busy photo) */}
      <div className="absolute inset-0 bg-[#181816]/80 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-transparent to-[#181816] z-0" />

      {/* =======================
          THE CONTENT
          ======================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12">
        {/* Intro Tag */}
        <span className="inline-block text-[#FF9F2E] text-xs tracking-[0.4em] uppercase border-b border-[#FF9F2E]/30 pb-2">
          The Space
        </span>

        {/* The Kerosene Lantern Hook */}
        <h2 className="font-serif text-3xl md:text-5xl text-[#E0E0E0] leading-snug drop-shadow-2xl">
          "At Thanti, every table is lit by a{" "}
          <span className="text-[#FF9F2E]">kerosene lantern.</span>"
        </h2>

        {/* The Philosophy Block */}
        <div className="space-y-6 text-[#8C8681] text-lg md:text-xl font-light leading-relaxed">
          <p>
            Not as decoration — but as a reminder to slow down. The space is
            intimate and understated, designed to bring people closer together.
          </p>

          <div className="w-1 h-12 bg-[#2B4C6F] mx-auto opacity-50"></div>

          <p className="text-[#E0E0E0] italic">
            Music stays in the background. <br />
            Conversations stay at the table.
          </p>

          <p>
            Some nights are quiet. Some nights are full.{" "}
            <br className="hidden md:block" />
            Most nights settle somewhere comfortably in between.
          </p>
        </div>

        {/* The Closing Statement (The Living Room) */}
        <div className="pt-8">
          <FaQuoteLeft className="text-[#2B4C6F] text-3xl mx-auto mb-6 opacity-80" />
          <p className="font-serif text-2xl md:text-3xl text-[#E0E0E0] leading-relaxed">
            Thanti is for people who appreciate warmth, presence, and a bar that
            feels more like a
            <span className="text-[#FF9F2E] underline decoration-[#2B4C6F] decoration-2 underline-offset-4 ml-2">
              living room
            </span>{" "}
            than a venue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheAtmosphere;
