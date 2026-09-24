export interface PartFilters {
    search: string
    brands: string[]
  }
  
  export function filterParts(parts: Part[], filters: PartFilters): Part[] {
    const query = filters.search.toLowerCase().trim()
  
    return parts.filter((part) => {
        const matchesSearch =
          part.name.toLowerCase().includes(query) ||
          part.oem.toLowerCase().includes(query)
    
        const matchesBrand =
          filters.brands.length === 0 || filters.brands.includes(part.brand)
    
        return matchesSearch && matchesBrand
      })
  }