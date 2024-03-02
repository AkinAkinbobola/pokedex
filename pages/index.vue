<script setup>

const offset = ref(0)
const limit = ref(50)

const {data: pokemons, loading} = await useFetch(`/api/pokemon/all`, {
  query: {
    offset: offset.value,
    limit: limit.value
  }
})
</script>

<template>
  <div>
    <div v-if="loading">
      <PokemonSkeletons/>
    </div>
    <div v-else>
      <PokemonCards :pokemons="pokemons.pokemonData" :count="pokemons.count"/>
    </div>
  </div>
</template>