<script setup lang="ts">
defineProps<{
  inStock: boolean
}>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-medium"
  >
    <span
      class="size-2 rounded-full"
      :class="inStock ? 'bg-accent' : 'bg-danger'"
      aria-hidden="true"
    />
    {{ inStock ? 'In stock' : 'Out of stock' }}
  </span>
</template>