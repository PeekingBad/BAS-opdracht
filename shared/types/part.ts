export interface Part {
    id: string
    name: string
    oem: string
    brand: string
    condition: 'new' | 'used' | 'refurbished'
    price: number
    inStock: boolean
    category: string
    image: string
  }