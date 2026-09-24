<script setup lang="ts">
const { data: parts, error } = await useFetch("/api/parts");

const search = ref("");
const selectedBrands = ref<string[]>([]);

const filteredParts = computed(() => {
  if (!parts.value) return [];
  return filterParts(parts.value, {
    search: search.value,
    brands: selectedBrands.value,
  });
});

const brands = computed(() => {
  if (!parts.value) return [];
  return [...new Set(parts.value.map((part) => part.brand))].sort();
});
</script>

<template>
  <main>
    <div class="mb-6 flex items-baseline justify-between">
      <h1 class="text-2xl font-bold">All parts</h1>
      <p class="text-sm text-gray-600">{{ filteredParts.length }} parts</p>
    </div>
    <div class="mb-6">
      <label for="search" class="sr-only">Search parts</label>
      <input
        id="search"
        v-model="search"
        type="search"
        placeholder="Search by name or OEM number"
        class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
      />
    </div>
    <fieldset class="mb-6">
      <legend class="mb-2 text-sm font-medium text-gray-700">Brand</legend>
      <div class="flex flex-wrap gap-4">
        <label
          v-for="brand in brands"
          :key="brand"
          class="flex items-center gap-2 text-sm"
        >
          <input
            v-model="selectedBrands"
            type="checkbox"
            :value="brand"
            class="size-4 accent-secondary"
          />
          {{ brand }}
        </label>
      </div>
    </fieldset>
    <p v-if="error" class="rounded-lg bg-red-50 p-4 text-danger">
      Something went wrong while loading the parts. Please try again later.
    </p>
    <ul v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="part in filteredParts" :key="part.id">
        <PartCard :part="part" />
      </li>
    </ul>
  </main>
</template>
