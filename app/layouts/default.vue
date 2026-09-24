<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="border-b bg-primary text-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <NuxtLink to="/" class="text-xl font-bold">Parts Finder</NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-8">
      <slot />
    </main>
  </div>
</template>