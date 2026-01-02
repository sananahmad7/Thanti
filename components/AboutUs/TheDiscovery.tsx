import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const FindUs = () => {
  // The exact search query for the map
  const mapQuery = "Thanti Snacking Bar Pokhara";

  // Standard Google Maps Search URL for the external link
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery
  )}`;

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#181816] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* =======================
            LEFT: THE TEXT
            ======================= */}
        <div className="space-y-10 relative z-10">
          {/* Header */}
          <div>
            <span className="block text-[#FF9F2E] text-xs tracking-[0.3em] uppercase mb-4">
              The Coordinates
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#E0E0E0] leading-none">
              Find Us
            </h2>
          </div>

          {/* The Copy */}
          <div className="space-y-6 text-[#8C8681] text-lg font-light leading-relaxed border-l border-[#4A3B32] pl-8">
            <p>
              Thanti Snacking Bar is located just off the Lakeside strip —
              <span className="text-[#E0E0E0]">
                {" "}
                close enough to find, far enough to leave the noise behind.
              </span>
            </p>
            <p>
              It’s a place people often discover by accident and return to on
              purpose.
            </p>
            <p>
              If you’re looking for a calm corner, a good drink, and time well
              spent with friends, you’ll feel at home at Thanti.
            </p>
          </div>

          {/* Address Block */}
          <div className="pt-4 flex items-center gap-3 text-[#E0E0E0] font-mono text-sm opacity-80">
            <FaMapMarkerAlt className="text-[#FF9F2E]" />
            <span>Street No. 16, Lakeside, Pokhara</span>
          </div>
        </div>

        {/* =======================
            RIGHT: THE INTERACTIVE MAP
            ======================= */}
        <div className="relative w-full h-[400px] md:h-[500px] group border border-[#4A3B32] bg-[#181816] overflow-hidden">
          {/* 1. The Map Iframe (Natural Color) */}
          {/* REMOVED: grayscale, invert, contrast, and opacity classes */}
          <iframe
            width="100%"
            height="100%"
            title="Thanti Location"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              mapQuery
            )}&t=m&z=15&output=embed&iwloc=near`}
          />

          {/* 2. The Link Overlay (Behavior) */}
          {/* This invisible link covers the map. Clicking anywhere opens Google Maps. */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center transition-colors duration-300 group hover:bg-[#181816]/20"
          >
            {/* The "Open Map" Button - Appears on Hover */}
            <div className="bg-[#141412]/90 border border-[#FF9F2E] px-6 py-3 rounded-full flex items-center gap-3 text-[#FF9F2E] text-xs uppercase tracking-widest transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-2xl">
              <span>Open in Maps</span>
              <FaExternalLinkAlt />
            </div>
          </a>

          {/* Decorative Corners for the Map Frame */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#FF9F2E] z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#FF9F2E] z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
