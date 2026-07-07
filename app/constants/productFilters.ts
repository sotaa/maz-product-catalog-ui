import type { Product } from '~/types/product'

export interface SortOption {
  key: string
  label: string
  compare: (a: Product, b: Product) => number
}

export const SORT_OPTIONS: SortOption[] = [
  {
    key: 'count-desc',
    label: 'تعداد زیاد به کم',
    compare: (a, b) => b.rating.count - a.rating.count,
  },
  {
    key: 'count-asc',
    label: 'تعداد کم به زیاد',
    compare: (a, b) => a.rating.count - b.rating.count,
  },
  {
    key: 'price-desc',
    label: 'قیمت زیاد به کم',
    compare: (a, b) => b.price - a.price,
  },
  {
    key: 'price-asc',
    label: 'قیمت کم به زیاد',
    compare: (a, b) => a.price - b.price,
  },
]
