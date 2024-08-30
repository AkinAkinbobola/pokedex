import ky from "ky";
import { GetAllPokemonResponse, PokemonData, PokemonsPage } from "@/lib/types";
import { NextRequest } from "next/server";
import { log } from "node:util";

export const GET = async (req: NextRequest) => {
  const offset = Number(req.nextUrl.searchParams.get("offset")) || 0;
  const query = req.nextUrl.searchParams.get("q") || undefined;
  const limit = 10;
  try {
    const pokemonResponse = await ky
      .get("https://pokeapi.co/api/v2/pokemon", {
        searchParams: {
          limit,
          offset,
        },
      })
      .json<GetAllPokemonResponse>();

    const filteredPokemon = query
      ? pokemonResponse.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query.toLowerCase()),
        )
      : pokemonResponse.results;

    const pokemonPromises = filteredPokemon.map(async (pokemon) => {
      return ky.get(pokemon.url).json<PokemonData>();
    });

    const detailedPokemon = await Promise.all(pokemonPromises);

    const nextOffset =
      pokemonResponse.results.length === limit ? offset + limit : null;

    const data: PokemonsPage = {
      pokemons: detailedPokemon,
      nextOffset,
    };
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
