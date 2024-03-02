export default defineEventHandler(async (event) => {
    const {offset = 0, limit = 30 } = getQuery(event)
    const data = await $fetch("https://pokeapi.co/api/v2/pokemon/", {
        query: {
            limit: limit,
            offset: offset
        }
    });
    const count = data.count;
    const results = data.results;
    const promises = results.map(async (pokemon) => {
        return await $fetch(pokemon.url);
    });
    const pokemonData = await Promise.all(promises);
    return { count, pokemonData };
})