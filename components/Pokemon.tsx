import React from "react";
import { PokemonData, Type } from "@/lib/types";
import Image from "next/image";
import {
  capitalizeFirstLetter,
  formatPokemonId,
  getBackgroundPokemonColour,
  getBackgroundTagColour,
} from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PokemonProps {
  pokemon: PokemonData;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  const backgroundColor = getBackgroundPokemonColour(pokemon);
  return (
    <div
      className={"rounded-xl relative h-[260px]"}
      style={{ backgroundColor }}
    >
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
            <PokemonTag type={item} key={item.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

interface PokemonTagProps {
  type: Type;
}

const PokemonTag = ({ type }: PokemonTagProps) => {
  const backgroundColor = getBackgroundTagColour(type);
  return (
    <Button
      style={{ backgroundColor }}
      className={"rounded-3xl flex items-center gap"}
    >
      <Image
        src={`/icons/${type.type.name}.svg`}
        alt={`${type.type.name} Icon`}
        width={16}
        height={16}
      />
      <span>{capitalizeFirstLetter(type.type.name)}</span>
    </Button>
  );
};
