import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#181816] text-[#8C8681] overflow-hidden font-sans selection:bg-[#FF9F2E] selection:text-[#181816]">
      {/* =======================
          BACKGROUND ATMOSPHERE 
          ======================= */}

      {/* 1. Base Dark Background (Soot Shadow) 
          This provides the brown-black tint behind the transparent video */}
      {/* <div className="absolute inset-0 bg-[#181816] z-0" /> */}

      {/* 2. The Lantern Glow Effect (Simulating the table lamps) */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF9F2E] rounded-full blur-[120px] opacity-10 pointer-events-none z-0 animate-pulse" /> */}

      {/* 3. Background Video (Replaces the Image) 
          Note: mix-blend-overlay and opacity-20 ensure it stays subtle. */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 mix-blend-overlay pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Replace '/thanti-mood.mov' with your actual file name in the public folder */}
        <source src="/hero.mov" type="video/quicktime" />
        <source src="/hero.mov" type="video/mp4" />
      </video>

      {/* =======================
          HERO CONTENT 
          ======================= */}
      <main className="relative z-10 flex flex-col justify-center items-center h-screen px-4 text-center">
        {/* Pre-heading */}
        <p className="text-[#8C8681] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-80">
          The Anti-Venue
        </p>

        {/* Main Heading (Authentic Thanti Color) */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FF9F2E] mb-8 leading-tight drop-shadow-2xl">
          Digital Silence
        </h1>

        {/* Subtext description */}
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-[#8C8681] text-lg md:text-xl font-light leading-relaxed">
            A hidden quiet nook in the heart of Lakeside. Built for slow drinks,
            low voices, and evenings that don’t need a schedule.
          </p>

          {/* Divider using Thanti Blue */}
          <div className="w-16 h-[1px] bg-[#2B4C6F] mx-auto opacity-50 my-6"></div>

          <p className="text-[#8C8681] text-sm md:text-base italic opacity-80">
            "Conversations stay at the table."
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <Link
            href="/menu"
            className="px-8 py-3 cursor-pointer border border-[#FF9F2E]/30 text-[#FF9F2E] hover:bg-[#FF9F2E]/10 hover:border-[#FF9F2E] transition-all duration-500 tracking-widest uppercase text-sm rounded-sm"
          >
            View Menu
          </Link>

          {/* Primary CTA using Thanti Blue */}
          <Link
            href="contact"
            className="px-8 py-3 bg-[#2B4C6F] cursor-pointer text-[#E0E0E0] hover:bg-[#2B4C6F]/90 hover:shadow-[0_0_20px_-5px_#2B4C6F] transition-all duration-500 tracking-widest uppercase text-sm rounded-sm"
          >
            Get In Touch
          </Link>
        </div>
      </main>

      {/* Decorative Bottom Fade */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#181816] to-transparent z-10 pointer-events-none" /> */}
    </div>
  );
};

export default Hero;
