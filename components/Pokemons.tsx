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
            <div>
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
