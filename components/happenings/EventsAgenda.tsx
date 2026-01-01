import React from "react";
import { FaMusic, FaFire, FaClock } from "react-icons/fa";

const EventsAgenda = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#181816] text-[#E0E0E0] font-sans border-t border-[#4A3B32]/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
        {/* =========================================
            COLUMN 1: THE RITUALS (Weekly Recurring)
            ========================================= */}
        <div className="lg:col-span-5 space-y-12">
          {/* Header */}
          <div className="border-b border-[#4A3B32] pb-6">
            <span className="block text-[#FF9F2E] text-xs tracking-[0.3em] uppercase mb-2">
              Weekly
            </span>
            <h2 className="font-serif text-4xl text-[#E0E0E0]">The Rituals</h2>
          </div>

          {/* Ritual 1: Fridays */}
          <div className="group">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-2xl group-hover:text-[#FF9F2E] transition-colors">
                Acoustic Fridays
              </h3>
              <FaMusic className="text-[#4A3B32] group-hover:text-[#FF9F2E] transition-colors" />
            </div>
            <p className="text-[#8C8681] text-sm font-light leading-relaxed mb-3">
              No amps. No mics. Just a musician in the corner and the sound of
              the room.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F2E] opacity-80">
              <FaClock />
              <span>Every Friday • 7:00 PM - Late</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#4A3B32]/30" />

          {/* Ritual 2: Saturdays */}
          <div className="group">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-2xl group-hover:text-[#FF9F2E] transition-colors">
                Saturday Roast
              </h3>
              <FaFire className="text-[#4A3B32] group-hover:text-[#FF9F2E] transition-colors" />
            </div>
            <p className="text-[#8C8681] text-sm font-light leading-relaxed mb-3">
              We slow-roast a special cut (Pork or Boar) from noon until it runs
              out. First come, first served.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9F2E] opacity-80">
              <FaClock />
              <span>Every Saturday • 1:00 PM - Sold Out</span>
            </div>
          </div>
        </div>

        {/* =========================================
            COLUMN 2: THE CALENDAR (Specific Dates)
            ========================================= */}
        <div className="lg:col-span-7 space-y-12">
          {/* Header */}
          <div className="border-b border-[#4A3B32] pb-6 flex justify-between items-end">
            <div>
              <span className="block text-[#FF9F2E] text-xs tracking-[0.3em] uppercase mb-2">
                Upcoming
              </span>
              <h2 className="font-serif text-4xl text-[#E0E0E0]">
                The Calendar
              </h2>
            </div>
            <span className="text-[#8C8681] text-xs uppercase tracking-widest hidden md:block">
              Winter 2025
            </span>
          </div>

          {/* Calendar List */}
          <div className="space-y-0">
            <EventRow
              date="DEC 31"
              title="The Quiet New Year"
              desc="No countdown. No confetti. Just good whisky and a warm fire."
              status="Open"
            />

            <EventRow
              date="JAN 14"
              title="Maghe Sankranti Feast"
              desc="Traditional platter with Tarul, Ghee, and Chaku. Booking advised."
              status="Filling Fast"
            />

            <EventRow
              date="JAN 25"
              title="Full Moon Jam"
              desc="An open circle for local musicians. Bring an instrument."
              status="Open"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Calendar Rows
const EventRow = ({
  date,
  title,
  desc,
  status,
}: {
  date: string;
  title: string;
  desc: string;
  status: string;
}) => (
  <div className="group border-b border-[#4A3B32]/50 py-8 hover:bg-[#FF9F2E]/5 hover:border-[#FF9F2E]/30 transition-all duration-300 px-4 -mx-4 rounded-sm cursor-default">
    <div className="grid md:grid-cols-12 gap-4 items-baseline">
      {/* Date */}
      <div className="md:col-span-2">
        <span className="font-mono text-lg text-[#FF9F2E] font-bold opacity-90 group-hover:scale-105 transition-transform inline-block">
          {date}
        </span>
      </div>

      {/* Content */}
      <div className="md:col-span-8">
        <h3 className="font-serif text-2xl text-[#E0E0E0] mb-2 group-hover:text-[#FF9F2E] transition-colors">
          {title}
        </h3>
        <p className="text-[#8C8681] text-sm font-light leading-relaxed max-w-md group-hover:text-[#A0A0A0]">
          {desc}
        </p>
      </div>

      {/* Status Pill */}
      <div className="md:col-span-2 text-right md:text-right pt-4 md:pt-0">
        <span
          className={`text-[10px] uppercase tracking-widest border border-[#4A3B32] px-3 py-1 rounded-full group-hover:border-[#FF9F2E] transition-colors
          ${status === "Filling Fast" ? "text-[#FF9F2E]" : "text-[#8C8681]"}`}
        >
          {status}
        </span>
      </div>
    </div>
  </div>
);

export default EventsAgenda;
