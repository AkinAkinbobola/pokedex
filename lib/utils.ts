import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PokemonData, Type } from "@/lib/types";
import {
  backgroundPokemonTagTypes,
  backgroundPokemonTypes,
} from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatWord = (string: string) => {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};

export const getBackgroundPokemonColour = (pokemon: PokemonData) => {
  const type = pokemon.types[0].type.name;
  const colour = backgroundPokemonTypes.filter((item) => item.name === type);
  return colour[0].color;
};

export const getBackgroundTagColour = (type: Type) => {
  const colour = backgroundPokemonTagTypes.filter(
    (item) => item.name === type.type.name,
  );
  return colour[0].color;
};

export const getId = (input: string) => {
  return Number(input.split("/").slice(-2, -1)[0]);
};
