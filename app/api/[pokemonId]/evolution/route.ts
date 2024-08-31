import ky from "ky";
import { PokemonEvolutionResponse } from "@/lib/types";

export const GET = async (
  req: Request,
  { params }: { params: { pokemonId: string } },
) => {
  const pokemonId = params.pokemonId;
  try {
    console.log(pokemonId);
    const evolutionResponse = await ky
      .get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`)
      .json<PokemonEvolutionResponse>();

    return Response.json(evolutionResponse);
  } catch (e) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
