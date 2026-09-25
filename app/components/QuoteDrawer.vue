<script setup lang="ts">
const open = defineModel<boolean>("open", { required: true });
const quote = useQuoteStore();
const dialog = useTemplateRef<HTMLDialogElement>("dialog");

watch(open, (isOpen) => {
  if (isOpen) {
    dialog.value?.showModal();
  } else {
    dialog.value?.close();
  }
});
</script>

<template>
  <dialog
    ref="dialog"
    aria-labelledby="quote-title"
    class="m-0 ml-auto h-dvh max-h-none w-full max-w-md bg-white p-0 backdrop:bg-black/40"
    @close="open = false"
    @click.self="open = false"
  >
    <div class="flex h-full flex-col">
      <div
        class="flex items-center justify-between border-b border-gray-200 p-4"
      >
        <h2 id="quote-title" class="text-lg font-semibold">Quote</h2>
        <button
          type="button"
          class="rounded-lg p-2 hover:bg-gray-100"
          aria-label="Close quote"
          @click="open = false"
        >
          <Icon name="lucide:x" class="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        v-if="quote.count === 0"
        class="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center"
      >
        <Icon
          name="lucide:shopping-cart"
          class="size-10 text-gray-400"
          aria-hidden="true"
        />
        <p class="font-medium text-gray-900">Your quote is empty</p>
        <p class="text-sm text-gray-600">Add parts from their detail page.</p>
      </div>
      <template v-else>
        <ul class="flex-1 divide-y divide-gray-200 overflow-y-auto">
          <li
            v-for="item in quote.items"
            :key="item.part.id"
            class="flex gap-4 p-4"
          >
            <img
              :src="item.part.image"
              alt=""
              class="size-16 shrink-0 rounded border border-gray-200 object-cover"
            />

            <div class="flex-1">
              <p class="font-medium text-gray-900">{{ item.part.name }}</p>
              <p class="text-sm text-gray-600">OEM: {{ item.part.oem }}</p>
              <p class="mt-1 text-sm text-gray-600">
                {{ item.quantity }} × {{ formatPrice(item.part.price) }}
              </p>
              <p class="font-semibold text-gray-900">
                {{ formatPrice(item.part.price * item.quantity) }}
              </p>
            </div>

            <button
              type="button"
              class="self-start rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-danger"
              :aria-label="`Remove ${item.part.name} from quote`"
              @click="quote.remove(item.part.id)"
            >
              <Icon name="lucide:trash-2" class="size-5" aria-hidden="true" />
            </button>
          </li>
        </ul>

        <div class="border-t border-gray-200 p-4">
          <div class="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{{ formatPrice(quote.total) }}</span>
          </div>
          <p class="mt-1 text-xs text-gray-600">All prices excl. VAT</p>
        </div>
      </template>
    </div>
  </dialog>
</template>
