<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<{
  products: Product[]
  pending?: boolean
}>()
</script>

<template>
  <div
    v-if="pending"
    class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3"
  >
    <div
      v-for="n in 6"
      :key="n"
      class="flex flex-col gap-4 border border-surface bg-white px-2 pb-3 pt-2"
    >
      <div class="h-[170px] animate-pulse rounded-2xl bg-[#D0DDEC]" />
      <div class="h-6 animate-pulse rounded bg-surface" />
      <div class="h-10 animate-pulse rounded-2xl bg-surface" />
    </div>
  </div>

  <div
    v-else-if="!products.length"
    class="flex min-h-40 items-center justify-center rounded-3xl bg-white p-6 text-sm text-navy/70 shadow-[0px_2px_3px_0px_#00000008]"
  >
    محصولی یافت نشد.
  </div>

  <div
    v-else
    class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3"
  >
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
