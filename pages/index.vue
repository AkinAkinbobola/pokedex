<script setup>
const {data: pokemons} = await useFetch(`/api/pokemon/all`)
</script>

<template>
  <div>
    <PokemonCards :pokemons="pokemons.pokemonData" :count="pokemons.count"/>
  </div>
</template>