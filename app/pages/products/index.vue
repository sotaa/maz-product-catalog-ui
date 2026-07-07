<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { data: products, pending } = useProductList();
const { applyFilters } = useProductFilters();

const filteredProducts = computed(() => applyFilters(products.value ?? []));
</script>

<template>
  <section class="flex flex-col gap-[32px] lg:flex-row lg:items-start">
    <ProductFilters />

    <div class="flex w-full flex-1 flex-col gap-[32px]">
      <ProductAppliedFilters />

      <!-- Product list — to be implemented -->
      <div
        class="flex min-h-40 items-center justify-center rounded-3xl bg-white p-6 text-sm text-navy/70 shadow-[0px_2px_3px_0px_#00000008]"
      >
        <span v-if="pending">در حال بارگذاری محصولات...</span>
        <span v-else>
          {{ filteredProducts.length }} محصول یافت شد — لیست به‌زودی اضافه
          می‌شود.
        </span>
      </div>
    </div>
  </section>
</template>
