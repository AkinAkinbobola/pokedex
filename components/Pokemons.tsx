"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ky from "ky";
import { PokemonsPage } from "@/lib/types";
import Pokemon from "@/components/Pokemon";
import PokemonsLoadingSkeleton from "@/components/PokemonsLoadingSkeleton";
import { useInView } from "react-intersection-observer";

interface PokemonsProps {
  query: string;
}

const Pokemons = ({ query }: PokemonsProps) => {
  const { isLoading, data, error, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["pokemons", query],
      queryFn: ({ pageParam }) =>
        ky
          .get("/api/pokemons", {
            searchParams: {
              q: query,
              offset: pageParam,
            },
          })
          .json<PokemonsPage>(),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextOffset,
    });

  const { ref } = useInView({
    // rootMargin: "200px",
    onChange(inView) {
      if (inView && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
  });
  const pokemons = data?.pages.flatMap((page) => page.pokemons) || [];

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

  if (!pokemons || pokemons.length === 0) {
    return (
      <div className={"font-bold text-center mt-[102px]"}>No pokemon found</div>
    );
  }

  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-[112px] mt-[102px]"
      }
    >
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
      <div ref={ref} />
    </div>
  );
};

export default Pokemons;
