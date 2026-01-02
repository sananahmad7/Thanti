import AboutHero from "@/components/AboutUs/AboutHero";
import FindUs from "@/components/AboutUs/TheDiscovery";
import TheLivingRoomGallery from "@/components/AboutUs/TheLantern";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Thanti Snacking Bar",
  description:
    " Thanti Snacking Bar is a small, warm place just off the busy streets. We are built for slow drinks, low voices, and evenings that don’t need a schedule.",
};
function AboutUs() {
  return (
    <div>
      <AboutHero />
      <TheLivingRoomGallery />
      <FindUs />
    </div>
  );
}

export default AboutUs;
