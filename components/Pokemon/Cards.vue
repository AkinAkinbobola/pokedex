<script setup>
const {pokemons, count} = defineProps(["pokemons", 'count'])
</script>

<template>
  <div class="mx-auto">
    <div class="text-2xl font-bold text-center">Total Pokemons: {{ count }}</div>
    <div class="grid grid-cols-4 px-10">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <NuxtImg :src="pokemon.sprites.front_default" :alt="pokemon.name" class="w-32 h-32 mx-auto" />
        {{ pokemon.name }}
      </div>
    </div>
  </div>
</template>