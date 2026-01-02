import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const TheLivingRoomGallery = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#181816] overflow-hidden">
      {/* Background texture for depth */}
      <div className="absolute top-0 right-0 text-[15vw] font-serif text-[#4A3B32] opacity-[0.07] leading-none select-none pointer-events-none text-right">
        LIVING ROOM
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        {/* =======================
            LEFT COLUMN: THE MANIFESTO
            ======================= */}
        <div className="md:col-span-5 space-y-12 relative z-10">
          {/* The Big Statement */}
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute -left-6 top-2 w-2 h-24 bg-[#FF9F2E]" />
            <h2 className="font-serif text-6xl md:text-7xl text-[#4A3B32] opacity-60 leading-none select-none">
              NOT A <br /> VENUE.
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl text-[#E0E0E0] leading-none -mt-4 relative z-10 pl-2">
              A place to <br /> just be.
            </h3>
          </div>

          {/* Atmosphere Details */}
          <div className="space-y-6 pl-2">
            <p className="text-[#8C8681] text-lg font-light leading-relaxed">
              Thanti is built for presence. Some nights are quiet. Some nights
              are full. Most settle somewhere comfortably in between.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-[#4A3B32]/30">
              <div>
                <span className="block text-[#FF9F2E] text-xs uppercase tracking-widest mb-1">
                  Music
                </span>
                <span className="text-[#E0E0E0] font-serif">
                  Stays in the background.
                </span>
              </div>
              <div>
                <span className="block text-[#FF9F2E] text-xs uppercase tracking-widest mb-1">
                  Conversations
                </span>
                <span className="text-[#E0E0E0] font-serif">
                  Stay at the table.
                </span>
              </div>
            </div>
          </div>

          {/* Food Philosophy Block */}
          <div className="pl-2 pt-4">
            <h4 className="text-[#E0E0E0] font-serif text-2xl mb-4">
              Simple & Honest.
            </h4>
            <p className="text-[#8C8681] font-light leading-relaxed text-sm">
              Cold beer, straightforward pours, and snacks meant to be torn
              apart and shared. No complicated menus. Just rustic flavors
              prepared for long nights.
            </p>
          </div>
        </div>

        {/* =======================
            RIGHT COLUMN: THE SCATTERED GALLERY
            ======================= */}
        <div className="md:col-span-7 relative h-[600px] w-full">
          {/* IMAGE 1: THE BASE (Atmosphere/Lantern) */}
          {/* Sits in the back, tilted slightly left */}
          <div className="absolute top-0 left-0 w-[80%] h-[70%] z-0 transform -rotate-3 border border-[#4A3B32] bg-[#141412] p-2 shadow-2xl group">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/14.png"
                alt="Atmosphere"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* IMAGE 2: THE CONNECTION (Hands/Sharing) */}
          {/* Overlaps in the middle, tilted right. The main focal point. */}
          <div className="absolute top-[20%] right-0 w-[70%] h-[60%] z-10 transform rotate-6 border-2 border-[#FF9F2E]/50 bg-[#141412] p-2 shadow-xl group hover:z-30 transition-all duration-300">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/13.png"
                alt="Sharing food"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/60 to-transparent pointer-events-none" />
            </div>
            {/* A little "tape" or caption label */}
            <div className="absolute bottom-4 right-4 bg-[#181816] px-3 py-1 text-[#FF9F2E] text-xs tracking-widest uppercase">
              Shared Plates
            </div>
          </div>

          {/* IMAGE 3: THE DETAIL (Food Close-up) */}
          {/* Smallest, sits on bottom left, acting like a Polaroid */}
          <div className="absolute bottom-0 left-[10%] w-[50%] h-[50%] z-20 transform -rotate-2 border border-[#4A3B32] bg-[#141412] p-3 shadow-2xl group hover:z-30 transition-all duration-300 hover:-translate-y-2">
            <div className="relative w-full h-[85%] overflow-hidden mb-2">
              <Image
                src="/8.png"
                alt="Honest food"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="text-center">
              <span className="text-[#8C8681] font-serif italic text-sm">
                "Ask what's on."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLivingRoomGallery;
