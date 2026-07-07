import type { MaybeRefOrGetter } from 'vue'
import type { Product } from '~/types/product'

export function useProduct(id: MaybeRefOrGetter<string | number>) {
  const { public: { apiBase } } = useRuntimeConfig()

  return useFetch<Product>(() => `${apiBase}/products/${toValue(id)}`, {
    key: () => `product-${toValue(id)}`,
  })
}

export function useProductList() {
  const { public: { apiBase } } = useRuntimeConfig()

  return useFetch<Product[]>(() => `${apiBase}/products`, {
    key: 'product-list',
  })
}
