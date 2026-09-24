<script setup lang="ts">
  const { data: parts } = await useFetch('/api/parts')
</script>

<template>
<main>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="part in parts" :key="part.id">
      <PartCard :part="part" />
    </li>
  </ul>  
</main>
</template>
