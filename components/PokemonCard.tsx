import {capitalizeFirstLetter} from "@/lib/utils";
import {motion} from "framer-motion";
import Image from "next/image";

const pokemonTypes = [
    {name: "fire", color: "#FF6464"},
    {name: "bug", color: "#C9FF84"},
    {name: "water", color: "#9FF3FF"},
    {name: "poison", color: "#D89CFD"},
    {name: "normal", color: "#CBCBCB"},
    {name: "rock", color: "#CFC06F"},
    {name: "ground", color: "#FFBF72"},
    {name: "fighting", color: "#FF699F"},
    {name: "ghost", color: "#B592FF"},
    {name: "psychic", color: "#FF5E60"},
    {name: "ice", color: "#AEFFF4"},
    {name: "dragon", color: "#87C5FF"},
    {name: "dark", color: "#8F8F8F"},
    {name: "fairy", color: "#FFA2E3"},
    {name: "electric", color: "#FFFA86"},
    {name: "steel", color: "#A4FFE9"},
    {name: "grass", color: "#80E177"}
];

const backgroundPokemonTypes = [
    {name: "fire", color: "#EB6C6C"},
    {name: "bug", color: "#91AC22"},
    {name: "water", color: "#009ACB"},
    {name: "poison", color: "#7E00CB"},
    {name: "normal", color: "#B6B6B6"},
    {name: "rock", color: "#857D57"},
    {name: "ground", color: "#A77437"},
    {name: "fighting", color: "#BA114E"},
    {name: "ghost", color: "#6B2BF1"},
    {name: "psychic", color: "#C4484A"},
    {name: "ice", color: "#3A9D90"},
    {name: "dragon", color: "#1268B8"},
    {name: "dark", color: "#373737"},
    {name: "fairy", color: "#C01A8D"},
    {name: "electric", color: "#B7B117"},
    {name: "steel", color: "#448F85"},
    {name: "grass", color: "#1EBA11"}
]
const getColorForType = (type: string): string | undefined => {
    const colorObject = pokemonTypes.find(color => color.name === type);
    return colorObject ? colorObject.color : undefined;
};
const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
};

const PokemonCard = ({pokemon, key, index}: { pokemon: Pokemon, key: string, index: number }) => {
    const [{color}] = backgroundPokemonTypes.filter(
        (type) => pokemon.types[0].type.name.indexOf(type.name) !== -1
    );

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }
    return (
        <motion.div style={{backgroundColor: color}} className={"rounded-2xl p-6 relative mb-20"}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        delay: index * 0.25,
                        ease: "easeInOut",
                        duration: 0.5
                    }}
                    viewport={{amount: 0}}
        >
            <Image src={pokemon.sprites.other["official-artwork"].front_default} alt={"Image"} width={180}
                   height={134} className={"absolute top-24 -translate-y-full left-1/2 -translate-x-1/2"}/>
            <div>

                <p className={"text-white font-bold text-[28px] mb-2 pt-28"}>{capitalizeFirstLetter(pokemon.name)}</p>
                <p className={"text-white/80 font-bold text-[18px] mb-5"}>{formatPokemonId(pokemon.id)}</p>

                <div className={"flex items-center gap-2"}>
                    {
                        pokemon.types.map(t => {
                                const typeColor = getColorForType(t.type.name)
                                return (
                                    <div className={"flex items-center justify-between py-2 px-3 rounded-full gap-1.5"}
                                         style={{backgroundColor: typeColor}}>
                                        <Image src={`/icons/${t.type.name}.svg`} alt={`${t.type.name} Icon`} width={16}
                                               height={16}/>
                                        <p className={"font-medium"}>
                                            {capitalizeFirstLetter(t.type.name)}
                                        </p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>

            <Image src={"/ellipse.svg"} alt={"ellipse"} width={100} height={100}
                   className={"absolute bottom-0 left-0"}/>
        </motion.div>
    );
};

export default PokemonCard;