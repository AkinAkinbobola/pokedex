import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { PokemonEvolutionResponse } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface PokemonEvolutionProps {
  pokemonId: number;
}

const PokemonEvolution = ({ pokemonId }: PokemonEvolutionProps) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["evolution", pokemonId],
    queryFn: () =>
      ky.get(`/api/${pokemonId}/evolution`).json<PokemonEvolutionResponse>(),
  });

  if (isLoading) {
    return (
      <div className={"flex items-center justify-center h-full"}>
        <Image
          src={"/icons/loader.svg"}
          alt={"Loader"}
          width={62.69}
          height={64}
          className={"animate-spin"}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={"text-destructive text-center mt-[12px]"}>
        Something went wrong : {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className={"font-bold text-center mt-[12px]"}>
        This pokemon does not evolve
      </div>
    );
  }
  return <div></div>;
};

export default PokemonEvolution;
