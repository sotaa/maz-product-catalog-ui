<script setup lang="ts">
import type { Product } from '~/types/product'
import { formatPrice, toPersianNumber } from '~/utils/format'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div
    class="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0px_1px_2px_0px_#0000000F]"
  >
    <h2 class="text-right text-xl font-bold leading-6 text-navy">مشخصات فنی</h2>

    <ProductSpecRow label="قیمت">{{ formatPrice(product.price) }}</ProductSpecRow>
    <ProductSpecRow label="توضیحات">{{ product.description }}</ProductSpecRow>
    <ProductSpecRow label="دسته بندی">{{ product.category }}</ProductSpecRow>
    <ProductSpecRow label="رتبه">
      {{ toPersianNumber(product.rating.rate) }}
    </ProductSpecRow>
    <ProductSpecRow label="تعداد">
      {{ toPersianNumber(product.rating.count) }}
    </ProductSpecRow>
  </div>
</template>
