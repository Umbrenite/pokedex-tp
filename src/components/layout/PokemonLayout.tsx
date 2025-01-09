"use client";

import PokedexNavbar from "../navbar/PokedexNavbar";
import React from "react";

function PokemonLayout(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>
) {
  return (
    <div>
      <PokedexNavbar />
      <div className="bg-white text-black px-5 py-5 mx-2 rounded-lg flex flex-row flex-wrap justify-start">
        {children}
      </div>
    </div>
  );
}

export default PokemonLayout;
