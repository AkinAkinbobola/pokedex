import ky from "ky";
import { GetAllPokemonResponse, PokemonData, PokemonsPage } from "@/lib/types";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const offset = Number(req.nextUrl.searchParams.get("offset")) || 0;
  const query = req.nextUrl.searchParams.get("q") || undefined;
  const limit = 10;

  try {
    const pokemonResponse = await ky
      .get("https://pokeapi.co/api/v2/pokemon", {
        searchParams: {
          limit: 10000,
          offset,
        },
      })
      .json<GetAllPokemonResponse>();

    let filteredPokemon = pokemonResponse.results;

    if (query) {
      if (isNaN(Number(query))) {
        filteredPokemon = filteredPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query.toLowerCase()),
        );
      } else {
        filteredPokemon = filteredPokemon.filter(
          (pokemon) => pokemon.url.split("/").slice(-2, -1)[0] === query,
        );
      }
    }

    const paginatedPokemon = filteredPokemon.slice(offset, offset + limit);

    const pokemonPromises = paginatedPokemon.map(async (pokemon) => {
      return ky.get(pokemon.url).json<PokemonData>();
    });

    const detailedPokemon = await Promise.all(pokemonPromises);

    const nextOffset =
      offset + limit < filteredPokemon.length ? offset + limit : null;

    const data: PokemonsPage = {
      pokemons: detailedPokemon,
      nextOffset,
    };

    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
