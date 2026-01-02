import KitchenPhilosophy from "@/components/Menu/KitchenPhilosophy";
import MenuHero from "@/components/Menu/MenuHero";
import MenuShowcase from "@/components/Menu/SignatureDish";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Menu | Thanti Snacking Bar",
  description:
    "Cold beer, straightforward pours, and snacks meant to be shared.We strip away the noise so you can focus on what matters: the company you keep.",
};
function Menu() {
  return (
    <div>
      <MenuHero />
      <MenuShowcase />
      <KitchenPhilosophy />
    </div>
  );
}

export default Menu;
