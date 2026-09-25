<script setup lang="ts">
const route = useRoute();
const { data: part } = await useFetch(`/api/parts/${route.params.id}`);
</script>

<template>
  <div v-if="part">
    <h1 class="mb-6 text-2xl font-bold">{{ part.name }}</h1>
    <img
      :src="part.image"
      :alt="part.name"
      class="mb-6 w-full max-w-xl rounded-lg"
    />
    <p>OEM: {{ part.oem }}</p>
    <p>Brand: {{ part.brand }}</p>
    <p>Condition: {{ part.condition }}</p>
    <p>{{ formatPrice(part.price) }}</p>
    <StockBadge :in-stock="part.inStock" />
  </div>
</template>

<style scoped></style>
