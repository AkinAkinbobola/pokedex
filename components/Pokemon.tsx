import React from "react";
import { PokemonData } from "@/lib/types";
import Image from "next/image";
import { capitalizeFirstLetter, formatPokemonId } from "@/lib/utils";

interface PokemonProps {
  pokemon: PokemonData;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  return (
    <div className={"rounded-xl bg-card relative h-[260px]"}>
      <Image
        src={pokemon.sprites.other?.["official-artwork"].front_default || ""}
        alt={`${pokemon.name} Sprite`}
        width={180}
        height={134}
        className={
          "absolute top-24 -translate-y-full left-1/2 -translate-x-1/2"
        }
      />

      <div className={"p-6"}>
        <h1 className={"font-bold"}>{capitalizeFirstLetter(pokemon.name)}</h1>
        <h2>{formatPokemonId(pokemon.id)}</h2>

        <div className={"flex items-center gap-2"}>
          {pokemon.types.map((item) => (
            <div>{capitalizeFirstLetter(item.type.name)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
