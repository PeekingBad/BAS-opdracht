<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';
defineProps<{
    error: NuxtError
}>()

function goHome(){
    clearError({redirect: '/'})
}
</script>

<template>
    <NuxtLayout>
    <div class="py-16 text-center">
      <p class="text-sm font-semibold text-secondary">{{ error.status }}</p>
      <h1 class="mt-2 text-2xl font-bold">
        {{ error.status === 404 ? 'Part not found' : 'Something went wrong' }}
      </h1>
      <p class="mt-2 text-gray-600">
        {{
          error.status === 404
            ? "The part you're looking for doesn't exist or has been removed."
            : 'Please try again later.'
        }}
      </p>
      <button
        type="button"
        class="mt-6 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 hover:cursor-pointer"
        @click="goHome"
      >
        Back to all parts
      </button>
    </div>
  </NuxtLayout>
</template>