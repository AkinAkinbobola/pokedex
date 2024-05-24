"use server"

export const getPokemon = async ({query, page = 1, limit = 1500}: {
    query?: String,
    page?: number,
    limit?: number
}) => {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * 24}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (query) {
            const filteredPokemon = data.results.filter((pokemon: { name: string }) => {
                return pokemonNameStartsWithQuery(pokemon.name, query.toLowerCase())
            })
            return filteredPokemon.slice(0, 24);
        }

        return data.results.slice(0, 24);
    } catch (error) {
        console.log(error)
        return null
    }
}

const pokemonNameStartsWithQuery = (name: string, query: string) => {
    return name.toLowerCase().includes(query)
}

export const fetchPokemon = async ({page = 1, search}: { page?: number, search?: string | undefined }) => {
    try {
        return await getPokemon({query: search, page})
    } catch (error) {
        console.log(error)
    }
}