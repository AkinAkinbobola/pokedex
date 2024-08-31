import { PokemonData } from "@/lib/types";
import { capitalizeFirstLetter, getBackgroundPokemonColour } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface PokemonStatsProps {
  pokemon: PokemonData;
}

const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  const backgroundColor = getBackgroundPokemonColour(pokemon);
  const baseStats = pokemon.stats.map((stat) => stat.base_stat);
  const totalSum = baseStats.reduce((sum, stat) => sum + stat, 0);
  const average = (totalSum / pokemon.stats.length).toFixed(1);

  return (
    <div className="space-y-6">
      {pokemon.stats.map((stat, index) => (
        <div
          key={index}
          className="text-darkGray font-bold text-base flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          <div className="w-full sm:w-1/5 mb-2 sm:mb-0">
            {capitalizeFirstLetter(stat.stat.name)}
          </div>

          <div className="flex items-center gap-4 flex-1 justify-between w-full">
            <div>{stat.base_stat}</div>
            <Progress value={stat.base_stat} indicatorColor={backgroundColor} />
          </div>
        </div>
      ))}

      <div className="text-darkGray font-bold text-base flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="w-full sm:w-1/5 mb-2 sm:mb-0">Average</div>

        <div className="flex items-center gap-4 flex-1 justify-between w-full">
          <div>{average}</div>
          <Progress value={Number(average)} indicatorColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
