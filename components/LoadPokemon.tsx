"use client"

import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {fetchPokemon} from "@/app/actions/getPokemon";
import {ClipLoader} from "react-spinners";
import PokemonCard from "@/components/PokemonCard";

type LoadPokemonProps = {
    search: string | undefined,
    initialPokemon: Pokemon[] | undefined,
}


const LoadPokemon = ({search, initialPokemon}: LoadPokemonProps) => {
    const [pokemon, setPokemon] = useState(initialPokemon)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const {inView, ref} = useInView()

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    const loadMorePokemon = async () => {
        setLoading(true)
        await delay(1000)

        const nextPage = page + 1
        const newPokemon = await fetchPokemon({page: nextPage, search})
        setPage(nextPage)
        setPokemon((prevState) => {
            if (!prevState) {
                return newPokemon
            }
            const uniquePokemon = newPokemon!.filter(
                (poke: Pokemon) =>
                    !prevState.some((p) => p.name === poke.name)
            )
            return [...prevState, ...uniquePokemon]
        })
        setLoading(false);
    }

    useEffect(() => {
        if (inView) {
            loadMorePokemon()
        }
    }, [inView]);
    return (
        <>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"}>
                {
                    pokemon?.map((poke: Pokemon, index  ) => {
                        return (
                            <PokemonCard key={poke.name} pokemon={poke} index={index}/>
                        )
                    })
                }
            </div>

            {
                pokemon && pokemon.length >= 24 && (
                    <div ref={ref} className={"flex items-center justify-center"}>
                        <ClipLoader/>
                    </div>
                )
            }

        </>
    );
};

export default LoadPokemon;