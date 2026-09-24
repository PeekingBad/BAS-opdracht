<script setup lang="ts">
  const { data: parts } = await useFetch('/api/parts')
</script>

<template>
<main>
  <h1>Welcome to the Parts Store</h1>
  <ul>
    <li v-for="part in parts" :key="part.id">
      <h2>{{ part.name }}</h2>
      <p>€{{ part.price }}</p>
      <img :src="part.image" :alt="part.name" />
    </li>
  </ul>  
</main>
</template>
