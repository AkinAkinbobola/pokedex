import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};
