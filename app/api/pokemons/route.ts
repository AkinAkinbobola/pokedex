import ky from "ky";
import { GetAllPokemonResponse, PokemonData, PokemonsPage } from "@/lib/types";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const limit = 10;
  const query = req.nextUrl.searchParams.get("q")?.toLowerCase();
  let offset = Number(req.nextUrl.searchParams.get("offset")) || 0;
  let foundPokemon: PokemonData[] = [];

  try {
    while (foundPokemon.length === 0) {
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
              pokemon.name.toLowerCase().includes(query)
          )
          : pokemonResponse.results;

      const pokemonPromises = filteredPokemon.map(async (pokemon) => {
        return ky.get(pokemon.url).json<PokemonData>();
      });

      foundPokemon = await Promise.all(pokemonPromises);

      if (pokemonResponse.results.length < limit) break;

      offset += limit;
    }

    const nextOffset =
        foundPokemon.length === limit ? offset : null;

    const data: PokemonsPage = {
      pokemons: foundPokemon,
      nextOffset,
    };
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
