<script setup>
const searchInput = ref('')
const clearSearch = () => {
  searchInput.value = ''
}
</script>

<template>
  <div class="border border-blue-400 flex items-center justify-between p-1 rounded-full mb-10">
    <div class="flex-grow flex items-center">
      <Icon name="heroicons:magnifying-glass" class="text-lg ml-2 cursor-pointer"/>
      <input type="text" class="flex-grow outline-none text-lg p-2 ml-2" v-model="searchInput" placeholder="Pokemon name, number or type">
    </div>
    <div class="flex gap-5 items-center">
      <Icon name="heroicons:x-mark" class="text-xl cursor-pointer" @click="clearSearch"/>
      <button class="bg-yellow-400 text-blue-400 py-2 px-4 rounded-full" @click="$emit('search', searchInput)">Search</button>
    </div>
  </div>
</template>