<script setup lang="ts">
import type { SortOption } from "~/utils/sortParts";
const { data: parts, error } = await useFetch("/api/parts");
const search = ref("");
const selectedBrands = ref<string[]>([]);
const selectedCondition = ref<Part["condition"] | "all">("all");
const sort = ref<SortOption>("default");

const filteredParts = computed(() => {
  if (!parts.value) return [];

  const filtered = filterParts(parts.value, {
    search: search.value,
    brands: selectedBrands.value,
    condition: selectedCondition.value,
  });
  return sortParts(filtered, sort.value);
});

const brands = computed(() => {
  if (!parts.value) return [];
  return [...new Set(parts.value.map((part) => part.brand))].sort();
});
</script>
<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold">All parts</h1>

    <div class="flex flex-col gap-8 lg:flex-row">
      <FilterSidebar
        v-model:selected-brands="selectedBrands"
        v-model:selected-condition="selectedCondition"
        :brands="brands"
        class="lg:w-64 lg:shrink-0"
      />
      <div class="flex-1">
        <label for="search" class="sr-only">Search parts</label>
        <input
          id="search"
          v-model="search"
          type="search"
          placeholder="Search by name or OEM number"
          class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
        />

        <div class="mb-4 flex items-center justify-between">
          <p v-if="!error" class="text-sm text-gray-600">
            {{ filteredParts.length }}
            {{ filteredParts.length === 1 ? "part" : "parts" }}
          </p>

          <div class="ml-auto flex items-center gap-2">
            <label for="sort" class="text-sm text-gray-600">Sort by</label>
            <select
              id="sort"
              v-model="sort"
              class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>
        </div>

        <p v-if="error" class="rounded-lg bg-red-50 p-4 text-danger">
          Something went wrong while loading the parts. Please try again later.
        </p>

        <ul v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <li v-for="part in filteredParts" :key="part.id">
            <PartCard :part="part" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
