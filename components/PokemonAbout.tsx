import { PokemonData } from "@/lib/types";
import { formatWord } from "@/lib/utils";

interface PokemonAboutProps {
  pokemon: PokemonData;
}

const PokemonAbout = ({ pokemon }: PokemonAboutProps) => {
  const abilities = pokemon.abilities.map((ability) =>
    formatWord(ability.ability.name),
  );
  const showAbilities = abilities.join(", ");

  return (
    <div className="space-y-4 text-darkGray font-bold text-base sm:text-lg">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <span>Species</span>
        <span>{formatWord(pokemon.types[0].type.name)}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <span>Height</span>
        <span>{pokemon.height * 10}cm</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <span>Weight</span>
        <span>{pokemon.weight / 10}kg</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <span>Abilities</span>
        <span>{showAbilities}</span>
      </div>
    </div>
  );
};

export default PokemonAbout;
