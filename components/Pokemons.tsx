"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ky from "ky";
import { PokemonsPage } from "@/lib/types";
import Pokemon from "@/components/Pokemon";
import PokemonsLoadingSkeleton from "@/components/PokemonsLoadingSkeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PokemonsProps {
  query?: string;
  sort?: string;
  weight?: string;
  height?: string;
}

const Pokemons = ({ query, sort, weight, height }: PokemonsProps) => {
  const {
    isLoading,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons", query, sort, weight, height],
    queryFn: ({ pageParam }) => {
      const searchParams: Record<string, string | number> = {
        offset: pageParam,
      };

      if (query) searchParams.q = query;
      if (sort) searchParams.sort = sort;
      if (weight) searchParams.weight = weight;
      if (height) searchParams.height = height;

      return ky
        .get("/api/pokemons", { searchParams, timeout: false })
        .json<PokemonsPage>();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
  });

  const loadMore = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };
  const pokemons = data?.pages.flatMap((page) => page.pokemons) || [];

  if (isLoading) {
    return (
      <div>
        <PokemonsLoadingSkeleton />
      </div>
    );
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
      <div className={"flex flex-col gap-2 items-center justify-center h-full"}>
        <Image
          src={"/icons/loader.svg"}
          alt={"Loader"}
          width={126.93}
          height={128}
        />
        <h1 className={"font-bold text-darkGray text-[20px]"}>
          No pokémon matched your search!
        </h1>
      </div>
    );
  }

  return (
    <>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-[112px] mt-[102px]"
        }
      >
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      <div className={"flex items-center justify-center py-6"}>
        <Button
          disabled={isFetchingNextPage}
          onClick={loadMore}
          className={"w-32"}
        >
          {isFetchingNextPage ? (
            <Loader2 className={"animate-spin"} />
          ) : (
            "Load More"
          )}
        </Button>
      </div>
    </>
  );
};

export default Pokemons;
