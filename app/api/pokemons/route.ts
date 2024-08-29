import ky from "ky";
import { GetAllPokemonResponse } from "@/lib/types";

export const GET = async () => {
  const pokemonResponse = await ky
    .get("https://pokeapi.co/api/v2/pokemon")
    .json<GetAllPokemonResponse>();

  const pokemonPromises = pokemonResponse.results.map(async (pokemon) => {
    return ky.get(pokemon.url).json();
  });

  const detailedPokemon = await Promise.all(pokemonPromises);
  return Response.json(detailedPokemon);
};
