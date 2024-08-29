"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { PokemonData } from "@/lib/types";
import Pokemon from "@/components/Pokemon";
import PokemonsLoadingSkeleton from "@/components/PokemonsLoadingSkeleton";

interface PokemonsProps {
  query: string;
}

const Pokemons = ({ query }: PokemonsProps) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pokemons", query],
    queryFn: () =>
      ky
        .get("/api/pokemons", {
          searchParams: {
            q: query,
          },
        })
        .json<PokemonData[]>(),
  });

  if (isLoading) {
    return <PokemonsLoadingSkeleton />;
  }

  if (error) {
    return (
      <div className={"text-destructive text-center mt-[102px]"}>
        Something went wrong : {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className={"font-bold text-center mt-[102px]"}>No pokemon found</div>
    );
  }

  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-[82px] mt-[102px]"
      }
    >
      {data.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default Pokemons;
