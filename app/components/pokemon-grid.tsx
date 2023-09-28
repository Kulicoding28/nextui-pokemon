"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import PokemonCard from "./pokemon-card";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-md py-8 font-mono">Search Your Pokemon Name</h3>
        <Input
          className="max-w-sm md:max-w-md"
          type="text"
          value={searchText}
          label="Pokemon Name"
          placeholder="Pikachu,Charizard etc"
          color="secondary"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="mt-8 grid lg:grid-cols-4 gap-4">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} />;
        })}
      </div>
    </>
  );
}
