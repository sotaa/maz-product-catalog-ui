export interface CategoryCount {
  name: string
  count: number
}

export function useCategories() {
  const { data, pending, error } = useProductList()

  const categories = computed<CategoryCount[]>(() => {
    const counts = new Map<string, number>()

    for (const product of data.value ?? []) {
      counts.set(product.category, (counts.get(product.category) ?? 0) + 1)
    }

    return [...counts.entries()].map(([name, count]) => ({ name, count }))
  })

  return { categories, pending, error }
}
