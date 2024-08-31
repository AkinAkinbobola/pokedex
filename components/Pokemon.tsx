import React, { useState } from "react";
import { PokemonData, Type } from "@/lib/types";
import Image from "next/image";
import {
  capitalizeFirstLetter,
  formatPokemonId,
  getBackgroundPokemonColour,
  getBackgroundTagColour,
} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ShowPokemonDetailsDialog from "@/components/ShowPokemonDetailsDialog";
import PokemonTag from "@/components/PokemonTag";

interface PokemonProps {
  pokemon: PokemonData;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const backgroundColor = getBackgroundPokemonColour(pokemon);
  return (
    <div
      className={"rounded-xl relative h-[260px]"}
      style={{ backgroundColor }}
    >
      <Image
        src={
          pokemon.sprites.other?.["official-artwork"].front_default ||
          "/icons/large-height.svg"
        }
        alt={`${pokemon.name} Sprite`}
        width={180}
        height={134}
        className={
          "absolute top-24 -translate-y-full left-1/2 -translate-x-1/2"
        }
      />

      <div className={"p-6 absolute bottom-0"}>
        <h1
          className={"font-bold text-white text-[28px] mb-2 cursor-pointer"}
          onClick={() => setIsDialogOpen(true)}
        >
          {capitalizeFirstLetter(pokemon.name)}
        </h1>
        <h2 className={"text-white/80 font-bold text-[18px] mb-[20px]"}>
          {formatPokemonId(pokemon.id)}
        </h2>

        <div className={"flex items-center gap-2"}>
          {pokemon.types.map((item) => (
            <PokemonTag type={item} key={item.type.name} />
          ))}
        </div>
      </div>

      <ShowPokemonDetailsDialog
        open={isDialogOpen}
        openChange={setIsDialogOpen}
        pokemon={pokemon}
      />
    </div>
  );
};

export default Pokemon;