import Hero from "@/components/Home/Hero";
import TheExperience from "@/components/Home/HomeHighlights";
import TheAtmosphere from "@/components/Home/TheAtmosphere";
import TheSanctuary from "@/components/Home/TheSanctuary";
import Image from "next/image";

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
