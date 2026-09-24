<script setup lang="ts">
defineProps<{
  brands: string[]
}>()

const selectedBrands = defineModel<string[]>('selectedBrands', {
  required: true,
})

const selectedCondition = defineModel<Part['condition'] | 'all'>(
  'selectedCondition',
  { required: true },
)
</script>

<template>
  <aside aria-label="Filters">
    <fieldset class="border-b border-gray-200 pb-6">
      <legend class="mb-3 font-semibold">Brand</legend>
      <div class="flex flex-col gap-2">
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

    <div class="pt-6">
      <label for="condition" class="mb-3 block font-semibold">
        Condition
      </label>
      <select
        id="condition"
        v-model="selectedCondition"
        class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
      >
        <option value="all">All conditions</option>
        <option value="new">New</option>
        <option value="used">Used</option>
        <option value="refurbished">Refurbished</option>
      </select>
    </div>
  </aside>
</template>