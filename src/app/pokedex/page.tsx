"use client"
import PokemonLayout from "@/components/layout/PokemonLayout";
import PokemonCard from "../../components/card/PokemonCard";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Pokédex() {

      const [pokemons, setPokemons] = useState([]);
    
      useEffect(() => {
        fetch("https://nestjs-pokedex-api.vercel.app/pokemons", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setPokemons(data);
            console.log(data);
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <>
            <PokemonLayout>
                {pokemons.map((pokemon) => (
                    <div className="mx-2" key={pokemon.id}>
                        <Link href={`/pokemonDetails/${pokemon.id}`}>
                            <PokemonCard pokemonData={pokemon} />
                        </Link>
                    </div>
                ))}
            </PokemonLayout>
        </>
    )
}