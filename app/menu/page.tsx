import KitchenPhilosophy from "@/components/Menu/KitchenPhilosophy";
import MenuHero from "@/components/Menu/MenuHero";
import MenuShowcase from "@/components/Menu/SignatureDish";
import React from "react";

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
