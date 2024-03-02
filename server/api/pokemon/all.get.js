export default defineEventHandler(async (event) => {
    const data = await $fetch("https://pokeapi.co/api/v2/pokemon/", {
        query: {
            limit: 30,
            offset: 0
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