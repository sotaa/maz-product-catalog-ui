<script setup lang="ts">
import type { Product } from "~/types/product";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <article
    class="flex flex-col gap-4 rounded-[24px] border border-surface bg-white px-2 pb-3 pt-2 shadow-[0px_10px_40px_0px_#0000000D]"
  >
    <div
      class="flex h-[170px] w-full items-center justify-center overflow-hidden rounded-[16px] bg-[#D0DDEC]"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-full max-w-full object-contain mix-blend-multiply"
        loading="lazy"
      />
    </div>

    <h3 class="line-clamp-1 text-left text-sm font-bold leading-6 text-navy">
      {{ product.title }}
    </h3>

    <NuxtLink
      :to="`/products/${product.id}`"
      class="flex h-10 w-full items-center justify-center gap-[8px] rounded-[16px] border-[1.5px] border-surface text-sm font-bold leading-4 text-primary transition-colors hover:bg-primary/5"
    >
      مشاهده جزئیات
      <AppIcon name="arrow-left-2" size="size-[16px]" class="text-primary" />
    </NuxtLink>
  </article>
</template>
