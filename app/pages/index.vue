<script setup lang="ts">
const { data: parts, error } = await useFetch("/api/parts");
</script>

<template>
  <main>
    <div class="mb-6 flex items-baseline justify-between">
      <h1 class="text-2xl font-bold">All parts</h1>
      <p v-if="parts" class="text-sm text-gray-600">{{ parts.length }} parts</p>
    </div>
    <p v-if="error" class="rounded-lg bg-red-50 p-4 text-danger">
      Something went wrong while loading the parts. Please try again later.
    </p>
    <ul v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="part in parts" :key="part.id">
        <PartCard :part="part" />
      </li>
    </ul>
  </main>
</template>
