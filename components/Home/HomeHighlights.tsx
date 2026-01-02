import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const TheExperience = () => {
  return (
    <section className="w-full bg-[#181816] py-24 px-6">
      {/* Container for Max Width */}
      <div className="max-w-7xl mx-auto space-y-24">
        {/* =============================================
            PART 1: THE SIGNATURE (Wild Boar)
            Layout: Image Left / Text Right
        ============================================= */}
        <div className="grid md:grid-cols-2 min-h-[500px] border border-[#4A3B32] bg-[#181816]">
          {/* IMAGE SIDE (Left) */}
          <div className="relative h-[400px] md:h-auto bg-[#4A3B32]/20 group overflow-hidden border-r border-[#4A3B32]/50">
            {/* IMAGE SUGGESTION: 
                A close-up, top-down shot of the Wild Boar platter on a wooden table. 
                Lighting should be moody (lantern light), not bright studio light.
            */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: "url('/boar.png')" }}
            />
            {/* Dark overlay to ensure text/theme consistency */}
            <div className="absolute inset-0 bg-[#181816]/20 group-hover:bg-transparent transition-colors duration-700" />

            {/* Decorative Label */}
            <div className="absolute bottom-8 left-8 bg-[#181816] px-4 py-2 border-l-2 border-[#FF9F2E] z-10">
              <span className="text-[#FF9F2E] text-xs tracking-[0.3em] uppercase">
                Signature Dish
              </span>
            </div>
          </div>

          {/* TEXT SIDE (Right) */}
          <div className="flex flex-col justify-center p-12 lg:p-16 space-y-8">
            <h3 className="font-serif text-3xl md:text-5xl text-[#E0E0E0] leading-tight">
              Rustic. <br />
              Deeply Nepali. <br />
              <span className="text-[#FF9F2E]">Wild Boar.</span>
            </h3>

            <div className="w-16 h-[1px] bg-[#2B4C6F] opacity-50"></div>

            <p className="text-[#8C8681] text-base md:text-lg font-light leading-relaxed">
              This isn't fast food. It’s a flavor you won’t find just anywhere
              in Lakeside. Marinated in local spices and prepared for long
              nights and good company.
            </p>

            <div>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 text-[#E0E0E0] hover:text-[#FF9F2E] transition-colors"
              >
                <span className="uppercase cursor-pointer text-xs tracking-[0.2em] border-b border-transparent group-hover:border-[#FF9F2E] pb-1">
                  View The Full Menu
                </span>
                <FaArrowRight className="text-[#2B4C6F] group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* =============================================
            PART 2: THE COMMUNITY (The Blackboard)
            Layout: Text Left / Image Right
        ============================================= */}
        <div className="grid md:grid-cols-2 min-h-[500px] border border-[#4A3B32] bg-[#181816]">
          {/* TEXT SIDE (Left) - Order 2 on mobile to keep alternating pattern */}
          <div className="order-2 md:order-1 flex flex-col justify-center p-12 lg:p-16 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#FF9F2E] rounded-full animate-pulse" />
              <span className="text-[#2B4C6F] text-xs tracking-[0.3em] uppercase">
                Happening Now
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-5xl text-[#E0E0E0] leading-tight">
              The Daily <br />
              <span className="text-white bg-[#2B4C6F] px-2 italic text-3xl md:text-4xl">
                Blackboard
              </span>
            </h3>

            <p className="text-[#8C8681] text-base md:text-lg font-light leading-relaxed">
              We don't do rigid schedules. Some nights are acoustic. Some nights
              are for full moon BBQs. Check the board to see what the evening
              holds.
            </p>

            <div>
              <Link
                href="#"
                className="group inline-flex items-center gap-3 text-[#E0E0E0] hover:text-[#FF9F2E] transition-colors"
              >
                <span className="uppercase text-xs cursor-pointer tracking-[0.2em] border-b border-transparent group-hover:border-[#FF9F2E] pb-1">
                  Check Tonight's Event
                </span>
                <FaArrowRight className="text-[#2B4C6F] group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* IMAGE SIDE (Right) - Order 1 on mobile */}
          <div className="order-1 md:order-2 relative h-[400px] md:h-auto bg-[#4A3B32]/20 group overflow-hidden border-l border-[#4A3B32]/50">
            {/* IMAGE SUGGESTION: 
                A candid shot of the blackboard itself with handwritten chalk specials.
                OR: A low-angle shot of two beer glasses on a table with the blurred background of the bar.
            */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: "url('/6.png')" }}
            />
            <div className="absolute inset-0 bg-[#181816]/20 group-hover:bg-transparent transition-colors duration-700" />

            {/* Decorative Label */}
            <div className="absolute top-8 right-8 bg-[#181816] px-4 py-2 border-r-2 border-[#2B4C6F] z-10">
              <span className="text-[#8C8681] text-xs tracking-[0.3em] uppercase">
                Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheExperience;
