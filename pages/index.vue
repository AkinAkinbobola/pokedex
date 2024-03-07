<script setup>
const offset = ref(0)
const limit = ref(50)
const loading = ref(true)

const {data: pokemons, pending, error} = await useFetch(() => `/api/pokemon/all`, {
  query: {
    offset: offset.value,
    limit: limit.value
  }
})
const handleNext = () => {
  offset.value += 30
}
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
        <div v-else>
          <PokemonCards :pokemons="pokemons.pokemonData" :count="pokemons.count"/>
        </div>
      </div>
    </div>
  </div>

</template>