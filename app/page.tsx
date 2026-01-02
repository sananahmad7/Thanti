import Hero from "@/components/Home/Hero";
import TheExperience from "@/components/Home/HomeHighlights";
import TheAtmosphere from "@/components/Home/TheAtmosphere";
import TheSanctuary from "@/components/Home/TheSanctuary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanti Snacking Bar",
  description:
    "Thanti is not a bar for rushing through rounds or shouting over music. Its a hidden nook built for slow drinks, low voices, and evenings that dont need a schedule",
};
export default function Home() {
  return (
    <div className="bg-[#181816]">
      <Hero />
      <TheSanctuary />
      <TheExperience />
      <TheAtmosphere />
      <div className="h-20" />
    </div>
  );
}
