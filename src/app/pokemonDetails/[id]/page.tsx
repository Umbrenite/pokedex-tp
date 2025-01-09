"use client";

import { use, useEffect, useState } from "react";
import DetailedPokemonCard from "../../../components/card/DetailedPokemonCard";
import PokemonLayout from "@/components/layout/PokemonLayout";
import Link from "next/link";

export default function UserDetail({ params }) {
  const queryParams: Number = use(params);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const fetchPokemonDetails = () => {
    return (
      fetch("https://nestjs-pokedex-api.vercel.app/pokemons", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setPokemonDetails(data[queryParams.id - 1]);
          console.log(data);
        })
        .catch((error) => console.log(error))
    );
  };

console.log(pokemonDetails);

useEffect(() => {
  fetchPokemonDetails();
}, []);

if (!pokemonDetails) {
  return <div>Loading...</div>;
}

return (
  <PokemonLayout>
    <div className="col">
      <Link href={`/pokedex`}>
        <button className="bg-red-500 rounded-lg py-5 px-5">Retour</button>
      </Link>
      <div className="mx-2" key={pokemonDetails.id}>
        <DetailedPokemonCard pokemonData={pokemonDetails} />
      </div>
    </div>

  </PokemonLayout>

);
}
