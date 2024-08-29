"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { Loader2 } from "lucide-react";
import { PokemonData } from "@/lib/types";
import Pokemon from "@/components/Pokemon";

const Pokemons = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => ky.get("/api/pokemons").json<PokemonData[]>(),
  });
  return (
    <div>
      {isLoading ? (
        <Loader2 className={"animate-spin"} />
      ) : (
        <div>
          {data && (
            <div
              className={
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-[82px] mt-[102px]"
              }
            >
              {data.map((pokemon) => (
                <Pokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokemons;
