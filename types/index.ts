type Type =
    | "fire"
    | "grass"
    | "bug"
    | "water"
    | "normal"
    | "flying"
    | "rock"
    | "ground"
    | "fighting"
    | "ghost"
    | "poison"
    | "psychic"
    | "ice"
    | "dragon"
    | "electric"
    | "dark"
    | "fairy"
    | "steel";

type Pokemon = {
    id: number;
    name: string;
    types: [{ type: { name: string } }];
    weight: number;
    height: number;
    stats: [{ base_stat: number; stat: { name: string } }];
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }
};

type ListPokemonResponse = {
    pokemon_v2_pokemon: Array<{
        id: number;
        name: string;
        pokemon_v2_pokemontypes: Array<{
            pokemon_v2_type: {
                name: Type;
            };
        }>;
    }>;
};

type AboutPokemonResponse = {
    pokemon_v2_pokemon: Array<{
        pokemon_v2_pokemontypes: Array<{
            pokemon_v2_type: {
                name: string;
            };
        }>;
        height: number;
        weight: number;
        pokemon_v2_pokemonabilities: Array<{
            pokemon_v2_ability: {
                name: string;
            };
        }>;
    }>;
};

type PokemonStat = {
    pokemon_v2_stat: {
        name: string;
    };
    base_stat: number;
};

interface PokemonWithBaseStat {
    pokemon_v2_pokemonstats: PokemonStat[];
}

type BaseStatsResponse = {
    pokemon_v2_pokemon: PokemonWithBaseStat[];
};

type EvolutionsResponse = {
    pokemon_v2_evolutionchain: EvolutionChain[];
};

type EvolutionChain = {
    pokemon_v2_pokemonspecies: PokemonEvolution[];
};

type PokemonEvolution = {
    id: number;
    evolves_from_species_id: number;
    pokemon_v2_pokemonevolutions: FromEvolutions[];
};

type FromEvolutions = {
    min_level?: number;
    pokemon_v2_item?: EvolutionItem;
    pokemon_v2_evolutiontrigger: Trigger;
};

type EvolutionItem = {
    name: string;
    pokemon_v2_itemsprites?: EvolutionItemSprite[];
};

type EvolutionItemSprite = {
    sprites?: {
        default: string;
    };
};

type Trigger = {
    name: "level-up" | "use-item" | "trade" | "other";
};

type OrderBy =
    | {
    name: "asc" | "desc";
}
    | {
    id: "asc" | "desc";
};

type OrderByKeys = "id_asc" | "id_desc" | "name_asc" | "name_desc";

type HeightFilter = "small" | "medium" | "large";
type WeightFilter = "small" | "medium" | "large";

type Filters = [Type[], HeightFilter[], WeightFilter[]];

type LevelUp = {
    type: "level-up";
    minLevel: number;
};

type UseItem = {
    type: "use-item";
    itemName: string;
    image?: string;
};

type Trade = {
    type: "trade";
};

type Other = {
    type: "other";
};

type EvolutionTrigger = LevelUp | UseItem | Trade | Other;

type Evolution = {
    fromId: number;
    toId: number;
    trigger: EvolutionTrigger;
};