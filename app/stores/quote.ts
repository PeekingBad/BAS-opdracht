export interface QuoteItem {
  part: Part
  quantity: number
}

export const useQuoteStore = defineStore('quote', () => {
  const items = ref<QuoteItem[]>([])

  const count = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.part.price * item.quantity, 0)
  )

  function quantityOf(id: string) {
    return items.value.find((item) => item.part.id === id)?.quantity ?? 0
  }

  function add(part: Part) {
    const existing = items.value.find((item) => item.part.id === part.id)

    if (existing) {
      existing.quantity++
      return
    }

    items.value.push({ part, quantity: 1 })
  }

  function remove(id: string) {
    items.value = items.value.filter((item) => item.part.id !== id)
  }

  return { items, count, total, quantityOf, add, remove }
})