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

      <ProductList :products="filteredProducts" :pending="pending" />
    </div>
  </section>
</template>
