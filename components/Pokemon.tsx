import React from "react";
import { PokemonData } from "@/lib/types";

interface PokemonProps {
  pokemon: PokemonData;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  return <div>{pokemon.name}</div>;
};

export default Pokemon;
