import React from "react";
import { FaBeer, FaWineGlass, FaFire } from "react-icons/fa";

const MenuShowcase = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#181816] text-[#E0E0E0] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* =======================
            SECTION 1: LIQUIDS (Clean List)
            ======================= */}
        <div className="mb-32">
          <div className="flex items-end gap-6 mb-12 border-b border-[#4A3B32] pb-6">
            <h2 className="font-serif text-5xl md:text-6xl text-[#E0E0E0]">
              Liquids
            </h2>
            <p className="pb-2 text-[#8C8681] text-sm tracking-wide">
              Straightforward pours. No umbrellas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <DrinkItem
              name="Gorkha Strong"
              price="600"
              desc="The local backbone. Served ice cold."
            />
            <DrinkItem
              name="Barahsinghe Craft"
              price="750"
              desc="Yak Brewing Co. Dunkel or Pilsner."
            />
            <DrinkItem
              name="Old Durbar"
              price="450"
              desc="Black Chimney Whiskey. Neat or Rocks."
            />
            <DrinkItem
              name="Mustang Coffee"
              price="500"
              desc="Local raksi, butter, sugar, coffee."
            />
            <DrinkItem
              name="House Raksi"
              price="Ask"
              desc="Clean, potent, transparent."
            />
            <DrinkItem
              name="Tuborg / Carlsberg"
              price="650"
              desc="Standard lagers."
            />
          </div>
        </div>

        {/* =======================
            SECTION 2: SOLIDS (The Visual Bento Grid)
            ======================= */}
        <div>
          <div className="flex items-end gap-6 mb-12 border-b border-[#4A3B32] pb-6">
            <h2 className="font-serif text-5xl md:text-6xl text-[#E0E0E0]">
              Solids
            </h2>
            <p className="pb-2 text-[#8C8681] text-sm tracking-wide">
              To be torn apart and shared.
            </p>
          </div>

          {/* THE BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {/* 1. HERO ITEM (Wild Boar) - Spans 2 columns */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-sm border border-[#4A3B32]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/boar.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-[#FF9F2E] text-[#181816] text-[10px] font-bold uppercase px-3 py-1 inline-block mb-3 rounded-full">
                  Signature Dish
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-3xl text-[#E0E0E0] mb-2">
                      Wild Boar Sukuti
                    </h3>
                    <p className="text-sm text-[#E0E0E0] font-light max-w-md opacity-80">
                      Smoked slow over wood, marinated in local spices. Rustic
                      and chewy.
                    </p>
                  </div>
                  <span className="text-[#FF9F2E] font-serif text-xl">
                    1200
                  </span>
                </div>
              </div>
            </div>

            {/* 2. TALL ITEM (Tamago/Beer) - Vertical Layout */}
            <div className="md:row-span-2 relative group overflow-hidden rounded-sm border border-[#4A3B32]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/7.png')" }}
              />
              <div className="absolute inset-0 bg-[#181816]/30 group-hover:bg-[#181816]/10 transition-colors" />

              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-[#181816] to-transparent">
                <h3 className="font-serif text-2xl text-[#E0E0E0] mb-1">
                  Tamago & Brew
                </h3>
                <p className="text-xs text-[#E0E0E0] opacity-70 mb-2">
                  Japanese rolled omelet. Light & savory.
                </p>
                <span className="text-[#FF9F2E] font-serif">450</span>
              </div>
            </div>

            {/* 3. STANDARD ITEM (Thanti Bowl) */}
            <div className="relative group overflow-hidden rounded-sm border border-[#4A3B32]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/2.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl text-[#E0E0E0]">
                  The Thanti Bowl
                </h3>
                <p className="text-xs text-[#E0E0E0] opacity-70">
                  Fried Rice, Chicken, & Egg.
                </p>
                <span className="text-[#FF9F2E] font-serif block mt-1">
                  650
                </span>
              </div>
            </div>

            {/* 4. STANDARD ITEM (Crispy Chicken) */}
            <div className="relative group overflow-hidden rounded-sm border border-[#4A3B32]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/1.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl text-[#E0E0E0]">
                  Crispy Chicken Bites
                </h3>
                <p className="text-xs text-[#E0E0E0] opacity-70">
                  Fried golden with dipping sauce.
                </p>
                <span className="text-[#FF9F2E] font-serif block mt-1">
                  550
                </span>
              </div>
            </div>

            {/* 5. STANDARD ITEM (Chilly Paneer) */}
            <div className="relative group overflow-hidden rounded-sm border border-[#4A3B32]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/3.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl text-[#E0E0E0]">
                  Chilly Paneer
                </h3>
                <p className="text-xs text-[#E0E0E0] opacity-70">
                  Spicy cottage cheese toss.
                </p>
                <span className="text-[#FF9F2E] font-serif block mt-1">
                  450
                </span>
              </div>
            </div>

            {/* 6. STANDARD ITEM (Fries) */}
            <div className="relative group overflow-hidden rounded-sm border border-[#4A3B32]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/8.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816] via-[#181816]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl text-[#E0E0E0]">
                  Bar Fries
                </h3>
                <p className="text-xs text-[#E0E0E0] opacity-70">
                  Classic. Salted. Essential.
                </p>
                <span className="text-[#FF9F2E] font-serif block mt-1">
                  300
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================
            FOOTER NOTE
            ======================= */}
        <div className="mt-24 text-center opacity-60">
          <p className="font-serif italic text-xl">
            "Ask for the daily specials."
          </p>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Liquids
const DrinkItem = ({
  name,
  price,
  desc,
}: {
  name: string;
  price: string;
  desc: string;
}) => (
  <div className="group border-b border-[#4A3B32]/30 pb-4 mb-4 hover:border-[#FF9F2E]/50 transition-colors">
    <div className="flex justify-between items-baseline mb-1">
      <h4 className="text-xl text-[#E0E0E0] font-serif group-hover:text-[#FF9F2E] transition-colors">
        {name}
      </h4>
      <span className="text-[#FF9F2E] font-serif text-sm opacity-80">
        {price}
      </span>
    </div>
    <p className="text-sm text-[#8C8681] font-light opacity-80">{desc}</p>
  </div>
);

export default MenuShowcase;
