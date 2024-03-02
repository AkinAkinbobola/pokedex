<script setup>
const {toTitleCase} = useUtilities()
const {pokemons, count} = defineProps(["pokemons", "count"]);
const formatId = (id) => String(id).padStart(3, '0');

const pokemonBGColor = computed(() => {
  return (type) => {
    if (type === 'normal') {
      return "bg-normal";
    } else if (type === 'fighting') {
      return "bg-fighting";
    } else if (type === 'flying') {
      return "bg-flying";
    } else if (type === 'poison') {
      return "bg-poison";
    } else if (type === 'ground') {
      return "bg-ground";
    } else if (type === 'rock') {
      return "bg-rock";
    } else if (type === 'bug') {
      return "bg-bug";
    } else if (type === 'ghost') {
      return "bg-ghost";
    } else if (type === 'steel') {
      return "bg-steel";
    } else if (type === 'fire') {
      return "bg-fire";
    } else if (type === 'water') {
      return "bg-water";
    } else if (type === 'grass') {
      return "bg-grass";
    } else if (type === 'electric') {
      return "bg-electric";
    } else if (type === 'psychic') {
      return "bg-psychic";
    } else if (type === 'ice') {
      return "bg-ice";
    } else if (type === 'dragon') {
      return "bg-dragon";
    } else if (type === 'dark') {
      return "bg-dark";
    } else if (type === 'fairy') {
      return "bg-fairy";
    } else {
      return "bg-generic";
    }
  };
});

const pokemonLightColor = computed(() => {
  return (type) => {
    if (type === 'normal') {
      return "bg-darkNormal";
    } else if (type === 'fighting') {
      return "bg-darkFighting";
    } else if (type === 'flying') {
      return "bg-darkFlying";
    } else if (type === 'poison') {
      return "bg-darkPoison";
    } else if (type === 'ground') {
      return "bg-darkGround";
    } else if (type === 'rock') {
      return "bg-darkRock";
    } else if (type === 'bug') {
      return "bg-darkBug";
    } else if (type === 'ghost') {
      return "bg-darkGhost";
    } else if (type === 'steel') {
      return "bg-darkSteel";
    } else if (type === 'fire') {
      return "bg-darkFire";
    } else if (type === 'water') {
      return "bg-darkWater";
    } else if (type === 'grass') {
      return "bg-darkGrass";
    } else if (type === 'electric') {
      return "bg-darkElectric";
    } else if (type === 'psychic') {
      return "bg-darkPsychic";
    } else if (type === 'ice') {
      return "bg-darkIce";
    } else if (type === 'dragon') {
      return "bg-darkDragon";
    } else if (type === 'dark') {
      return "bg-darkDark";
    } else if (type === 'fairy') {
      return "bg-darkFairy";
    } else {
      return "bg-darkGeneric";
    }
  };
});
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-poppins px-10 py-8">
      <div
          v-for="(pokemon, index) in pokemons"
          :key="pokemon.id"
          :class="pokemonBGColor(pokemon.types[0]?.type.name)"
          class="rounded-2xl text-white py-5 px-4 flex flex-col items-center relative mb-16"
      >
        <div class="relative bottom-20 h-10 mb-6">
          <NuxtImg
              :src="pokemon.sprites.front_default"
              class="object-cover h-32 w-40"
          />
        </div>
        <div class="self-start px-2 relative">
          <div class="mb-1 text-gray-200 text-sm">
            #{{ formatId(pokemon.id) }}
          </div>
          <div class="mb-2 text-lg">
            {{ toTitleCase(pokemon.name) }}
          </div>
          <div class="flex">
            <div v-for="(type, index) in pokemon.types" :key="type.slot">
              <div
                  class="mr-5 text-black px-3 py-2 rounded-2xl"
                  :class="pokemonLightColor(type.type.name)"
              >
                {{ type.type.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>