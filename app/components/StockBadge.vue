<script setup lang="ts">
defineProps<{
  inStock: boolean
}>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
  >
    <span
      class="size-1.5 rounded-full"
      :class="inStock ? 'bg-green-600' : 'bg-red-600'"
      aria-hidden="true"
    />
    {{ inStock ? 'In stock' : 'Out of stock' }}
  </span>
</template>