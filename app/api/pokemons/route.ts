import ky from "ky";
import { GetAllPokemonResponse, PokemonData, PokemonsPage } from "@/lib/types";
import { NextRequest } from "next/server";
import { getId } from "@/lib/utils";

export const GET = async (req: NextRequest) => {
  const offset = Number(req.nextUrl.searchParams.get("offset")) || 0;
  const sort = req.nextUrl.searchParams.get("sort") || undefined;
  const query = req.nextUrl.searchParams.get("q") || undefined;
  const weight = req.nextUrl.searchParams.get("weight") || undefined;
  const height = req.nextUrl.searchParams.get("height") || undefined;
  const limit = 10;

  try {
    const pokemonResponse = await ky
        .get("https://pokeapi.co/api/v2/pokemon", {
          searchParams: {
            limit: 10000,
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

    if (sort === "numDesc") {
      filteredPokemon = filteredPokemon.sort(
          (a, b) => getId(b.url) - getId(a.url),
      );
    } else if (sort === "numAsc") {
      filteredPokemon = filteredPokemon.sort(
          (a, b) => getId(a.url) - getId(b.url),
      );
    } else if (sort === "alphaAsc") {
      filteredPokemon = filteredPokemon.sort((a, b) =>
          a.name.localeCompare(b.name),
      );
    } else if (sort === "alphaDesc") {
      filteredPokemon = filteredPokemon.sort((a, b) =>
          b.name.localeCompare(a.name),
      );
    }

    const pokemonPromises = filteredPokemon.map(async (pokemon) => {
      return ky.get(pokemon.url).json<PokemonData>();
    });

    let detailedPokemon = await Promise.all(pokemonPromises);

    if (weight) {
      detailedPokemon = detailedPokemon.filter((pokemon) => {
        if (weight === "light") {
          return pokemon.weight >= 0.1 && pokemon.weight <= 44.5;
        } else if (weight === "medium") {
          return pokemon.weight > 44.5 && pokemon.weight <= 225.0;
        } else if (weight === "large") {
          return pokemon.weight > 225.0 && pokemon.weight <= 999.9;
        }
        return true;
      });
    }

    if (height) {
      detailedPokemon = detailedPokemon.filter((pokemon) => {
        if (height === "small") {
          return pokemon.height / 10 >= 0.2 && pokemon.height / 10 <= 1.2;
        } else if (height === "medium") {
          return pokemon.height / 10 > 1.3 && pokemon.height / 10 <= 2.1;
        } else if (height === "large") {
          return pokemon.height / 10 > 2.2 && pokemon.height / 10 <= 14.5;
        }
        return true;
      });
    }

    // Now paginate the filtered and sorted results
    const paginatedPokemon = detailedPokemon.slice(offset, offset + limit);

    const nextOffset =
        offset + limit < detailedPokemon.length ? offset + limit : null;

    const data: PokemonsPage = {
      pokemons: paginatedPokemon,
      nextOffset,
    };

    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
