export type SortOption = 'default' | 'price-asc' | 'price-desc'

export function sortParts(parts: Part[], sort: SortOption): Part[] {
  if (sort === 'default') return parts

  return [...parts].sort((a, b) =>
    sort === 'price-asc' ? a.price - b.price : b.price - a.price
  )
}