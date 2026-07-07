import type { Product } from '~/types/product'
import { SORT_OPTIONS } from '~/constants/productFilters'

export function useProductFilters() {
  const searchInput = useState('pf-search-input', () => '')
  const searchQuery = useState('pf-search-query', () => '')
  const sortKey = useState('pf-sort', () => '')
  const selectedCategories = useState<string[]>('pf-categories', () => [])

  const sortLabel = computed(
    () => SORT_OPTIONS.find((option) => option.key === sortKey.value)?.label ?? '',
  )

  const hasActiveFilters = computed(
    () =>
      Boolean(searchQuery.value) ||
      Boolean(sortKey.value) ||
      selectedCategories.value.length > 0,
  )

  function applySearch() {
    searchQuery.value = searchInput.value.trim()
  }

  function removeSearch() {
    searchInput.value = ''
    searchQuery.value = ''
  }

  function setSort(key: string) {
    sortKey.value = key
  }

  function removeSort() {
    sortKey.value = ''
  }

  function toggleCategory(name: string) {
    selectedCategories.value = selectedCategories.value.includes(name)
      ? selectedCategories.value.filter((category) => category !== name)
      : [...selectedCategories.value, name]
  }

  function removeCategory(name: string) {
    selectedCategories.value = selectedCategories.value.filter(
      (category) => category !== name,
    )
  }

  function applyFilters(products: Product[]): Product[] {
    let result = [...products]

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter((product) =>
        product.title.toLowerCase().includes(query),
      )
    }

    if (selectedCategories.value.length) {
      result = result.filter((product) =>
        selectedCategories.value.includes(product.category),
      )
    }

    const activeSort = SORT_OPTIONS.find(
      (option) => option.key === sortKey.value,
    )
    if (activeSort) {
      result.sort(activeSort.compare)
    }

    return result
  }

  return {
    searchInput,
    searchQuery,
    sortKey,
    selectedCategories,
    sortLabel,
    hasActiveFilters,
    applySearch,
    removeSearch,
    setSort,
    removeSort,
    toggleCategory,
    removeCategory,
    applyFilters,
  }
}
