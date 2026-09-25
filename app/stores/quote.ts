export const useQuoteStore = defineStore('quote', () => {
    const items = ref<Part[]>([])
  
    const count = computed(() => items.value.length)
  
    const total = computed(() =>
      items.value.reduce((sum, part) => sum + part.price, 0)
    )
  
    function has(id: string) {
      return items.value.some((part) => part.id === id)
    }
  
    function add(part: Part) {
      if (has(part.id)) return
      items.value.push(part)
    }
  
    function remove(id: string) {
      items.value = items.value.filter((part) => part.id !== id)
    }
  
    return { items, count, total, has, add, remove }
  })