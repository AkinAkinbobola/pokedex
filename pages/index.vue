<script setup>
const offset = ref(0)
const limit = ref(30)
const loading = ref(true)
const handleNext = () => {
  if(offset.value + limit.value >= pokemons.value.count) return
  offset.value += limit.value
  refresh()
}
const handlePrev = () => {
  if(offset.value === 0) return
  offset.value -= limit.value
  refresh()
}
const {data: pokemons, pending, error, refresh} = await useAsyncData(
    'pokemonData',
    () => $fetch(`/api/pokemon/all?offset=${offset.value}&limit=${limit.value}`)
)
onMounted(() => {
  setTimeout(() => loading.value = false, 200)
})
</script>

<template>
  <div>
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else>
      <div v-if="error" class="text-red-400 text-center font-bold text-2xl">
        Oops an error occurred. Please try again later
      </div>
      <div v-else>
        <div v-if="pending">
          <PokemonSkeletons/>
        </div>
        <div v-else class="relative">
          <PokemonCards :pokemons="pokemons.pokemonData" :count="pokemons.count" @prev="handlePrev" @next="handleNext"/>
        </div>
      </div>
    </div>
  </div>
</template>