<script setup lang="ts">
const quote = useQuoteStore()
const isQuoteOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="border-b bg-primary text-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <NuxtLink to="/" class="text-xl font-bold">Parts Finder</NuxtLink>
        <button
          type="button"
          @click="isQuoteOpen = true"
          class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10 hover:cursor-pointer"
        >
          <Icon name="lucide:shopping-cart" class="size-5" aria-hidden="true" />
          <span>Quote</span>
          <span
            v-if="quote.count > 0"
            class="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-white"
          >
            {{ quote.count }}
            <span class="sr-only">items</span>
          </span>
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-8">
      <slot />
    </main>
    <QuoteDrawer v-model:open="isQuoteOpen" />
  </div>
</template>