"use client";

import React, { useState } from "react";

const KitchenPhilosophy = () => {
  const [activePanel, setActivePanel] = useState<number | null>(1);

  const panels = [
    {
      id: 0,
      title: "The Fire",
      subtitle: "Sal Wood & Smoke",
      desc: "We don't use liquid smoke or gas shortcuts. We use local Sal wood, burning it slowly to infuse a deep, rustic aroma that you can taste in every bite.",
      img: "/boar.jpg",
    },
    {
      id: 1,
      title: "The Time",
      subtitle: "24-Hour Patience",
      desc: "Good sukuti can't be rushed. We marinate our meat for a full day before it even touches the heat. If you're in a hurry, we're not the place.",
      img: "/7.jpg",
    },
    {
      id: 2,
      title: "The Truth",
      subtitle: "Local & Honest",
      desc: "Zero freezer burn. Zero unnecessary extras. Our spices come from the market down the street, and our buffalo is sourced locally.",
      img: "/2.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#181816] py-24 px-6 md:px-12 border-t border-[#4A3B32]/30">
      {/* 1. Added Max Width Constraint to match other components */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Optional - adds context above the slider) */}
        <div className="mb-12">
          <span className="text-[#FF9F2E] text-xs tracking-[0.3em] uppercase block mb-4">
            Behind the Scenes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#E0E0E0]">
            The Kitchen Philosophy
          </h2>
        </div>

        {/* 2. The Slider Container */}
        {/* Added 'border' to frame it neatly within the 7xl width */}
        <div className="flex flex-col md:flex-row h-[600px] w-full border border-[#4A3B32]">
          {panels.map((panel, index) => (
            <div
              key={panel.id}
              onMouseEnter={() => setActivePanel(index)}
              onMouseLeave={() => setActivePanel(null)}
              className={`relative flex-1 transition-all duration-700 ease-in-out cursor-default overflow-hidden border-b md:border-b-0 md:border-r border-[#4A3B32] last:border-0 group
                ${activePanel === index ? "flex-[3] md:flex-[2]" : "flex-[1]"}`}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out
                  ${
                    activePanel === index
                      ? "scale-105 grayscale-0"
                      : "scale-100 grayscale opacity-40"
                  }`}
                style={{ backgroundImage: `url('${panel.img}')` }}
              />

              {/* Dark Overlay */}
              <div
                className={`absolute inset-0 bg-[#181816] transition-opacity duration-700
                ${
                  activePanel === index
                    ? "opacity-30"
                    : "opacity-80 group-hover:opacity-60"
                }`}
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-transparent to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Vertical Title (Inactive State) */}
                <h3
                  className={`hidden md:block absolute top-12 left-1/2 -translate-x-1/2 text-3xl font-serif text-[#4A3B32] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 transition-opacity duration-500
                  ${activePanel === index ? "opacity-0" : "opacity-100"}`}
                >
                  {panel.title}
                </h3>

                {/* Active State Content */}
                <div
                  className={`transform transition-all duration-700 delay-100
                   ${
                     activePanel === index
                       ? "translate-y-0 opacity-100"
                       : "translate-y-8 opacity-0 md:opacity-0"
                   }`}
                >
                  <span className="text-[#FF9F2E] font-mono text-sm tracking-widest mb-4 block">
                    0{index + 1}
                  </span>

                  <h2 className="font-serif text-3xl md:text-4xl text-[#E0E0E0] mb-2 leading-none">
                    {panel.title}
                  </h2>

                  <p className="text-[#FF9F2E] text-xs uppercase tracking-[0.2em] mb-4">
                    {panel.subtitle}
                  </p>

                  <div className="h-[1px] w-12 bg-[#FF9F2E] mb-4 opacity-50" />

                  <p className="text-[#E0E0E0] text-sm md:text-base font-light leading-relaxed max-w-sm drop-shadow-md">
                    {panel.desc}
                  </p>
                </div>

                {/* Mobile: Simple Title when collapsed */}
                <div
                  className={`md:hidden absolute bottom-6 left-6 transition-opacity duration-300 ${
                    activePanel === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h2 className="font-serif text-2xl text-[#E0E0E0]">
                    {panel.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenPhilosophy;
