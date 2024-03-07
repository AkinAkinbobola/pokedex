import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export default defineEventHandler(async (event) => {
    const {offset = 0, limit = 30} = getQuery(event)
    const interval = {
        limit,
        offset
    }
    const data = await P.getPokemonsList(interval)
    const count = data.count;
    const results = data.results;
    const promises = results.map(async (pokemon) => {
        return await $fetch(pokemon.url);
    });
    const pokemonData = await Promise.all(promises);
    return {count, pokemonData};
})