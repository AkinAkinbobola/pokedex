<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-poppins px-10 py-8">
    <div v-for="i in 30" class="animate-pulse">
      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
    </div>
  </div>
</template>