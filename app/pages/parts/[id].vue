<script setup lang="ts">
const route = useRoute();
const { data: part, error } = await useFetch(`/api/parts/${route.params.id}`);

if (error.value) {
  throw createError({
    status: 404,
    statusText: 'Part not found',
    fatal: true,
  })
}

useSeoMeta({
  title: () => part.value?.name,
})
</script>

<template>
  <div v-if="part">
    <NuxtLink
      to="/"
      class="mb-4 inline-block text-sm text-info hover:underline"
    >
      Back to all parts
    </NuxtLink>

    <h1 class="mb-6 text-2xl font-bold lg:text-3xl">{{ part.name }}</h1>

    <div class="grid gap-8 lg:grid-cols-2">
      <img
        :src="part.image"
        :alt="part.name"
        class="aspect-4/3 w-full rounded-lg border border-gray-200 bg-white object-contain"
      />

      <div class="flex flex-col gap-6">
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <p class="text-3xl font-bold text-gray-900">
            {{ formatPrice(part.price) }}
            <span class="text-sm font-normal text-gray-600">excl. VAT</span>
          </p>
          <div class="mt-3">
            <StockBadge :in-stock="part.inStock" />
          </div>
          <button
            type="button"
            class="mt-6 w-full rounded-lg bg-accent px-4 py-3 font-semibold text-white hover:opacity-90"
          >
            Add to quote
          </button>
        </div>

        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <h2 class="mb-4 font-semibold">Specifications</h2>
          <dl class="divide-y divide-gray-200 text-sm">
            <div class="flex justify-between py-2">
              <dt class="text-gray-600">Brand</dt>
              <dd class="font-medium">{{ part.brand }}</dd>
            </div>
            <div class="flex justify-between py-2">
              <dt class="text-gray-600">OEM number</dt>
              <dd class="font-medium">{{ part.oem }}</dd>
            </div>
            <div class="flex justify-between py-2">
              <dt class="text-gray-600">Condition</dt>
              <dd class="font-medium capitalize">{{ part.condition }}</dd>
            </div>
            <div class="flex justify-between py-2">
              <dt class="text-gray-600">Category</dt>
              <dd class="font-medium">{{ part.category }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

