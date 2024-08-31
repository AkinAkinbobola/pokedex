import { PokemonData } from "@/lib/types";
import { capitalizeFirstLetter } from "@/lib/utils";

interface PokemonAboutProps {
  pokemon: PokemonData;
}

const PokemonAbout = ({ pokemon }: PokemonAboutProps) => {
  const abilities = pokemon.abilities.map((ability) =>
    capitalizeFirstLetter(ability.ability.name),
  );
  const showAbilities = abilities.join(", ");
  return (
    <div className={"space-y-6 text-darkGray font-bold text-[18px]"}>
      <div className={"flex items-center gap-[26px]"}>
        <span>Species</span>
        <span>{capitalizeFirstLetter(pokemon.types[0].type.name)}</span>
      </div>

      <div className={"flex items-center gap-[26px]"}>
        <span>Height</span> <span>{pokemon.height * 10}cm</span>
      </div>

      <div className={"flex items-center gap-[26px]"}>
        <span>Weight</span> <span>{pokemon.weight / 10}kg</span>
      </div>

      <div className={"flex items-center gap-[26px]"}>
        <span>Abilities</span>

        <span>{showAbilities}</span>
      </div>
    </div>
  );
};

export default PokemonAbout;
