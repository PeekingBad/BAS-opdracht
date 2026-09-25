<script setup lang="ts">
defineProps<{
  part: Part;
}>();
</script>

<template>
  <div
    class="relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:cursor-pointer"
  >
    <img
      :src="part.image"
      :alt="part.name"
      class="aspect-4/3 w-full object-cover"
    />

    <div class="flex flex-1 flex-col gap-2 p-4">
      <div class="flex justify-between items-center">
        <p class="text-sm font-medium uppercase tracking-wide text-gray-500">
          {{ part.brand }}
        </p>
        <StockBadge :in-stock="part.inStock" />
      </div>
      <h2 class="font-semibold text-gray-900">
        <NuxtLink
          :to="`/parts/${part.id}`"
          class="after:absolute after:inset-0 hover:underline"
          >{{ part.name }}</NuxtLink
        >
      </h2>
      <p class="text-sm text-gray-600">OEM: {{ part.oem }}</p>
      <p class="text-sm capitalize text-gray-600">{{ part.condition }}</p>

      <div class="mt-auto flex items-center justify-between pt-2">
        <p class="text-lg font-bold text-gray-900">
          {{ formatPrice(part.price) }}
        </p>
      </div>
    </div>
  </div>
</template>
